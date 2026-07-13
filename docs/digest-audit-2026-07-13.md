# Daily AI/ML Digest — Fan-out Audit (2026-07-13)

Four read-only auditors, one per surface (runner+systemd, OpenBao secrets path,
site route+data layer, R2+delivery). Findings deduped and cross-checked against
the original inline review. **No P0. No live secret leak, no data loss.** The
weight is a reliability/observability cluster plus one real blast-radius issue.

Severity: P1 = fix before trusting the job unattended · P2 = fix soon · P3 = polish.

---

## P1 — Unattended agent has unrestricted Bash + Write, no `--permission-mode`
`~/.local/bin/aiml-digest-run.sh:19-21`. `--allowedTools "Bash,…,Write,Edit,…"`
with no permission mode → in `claude -p` every allowlisted tool is auto-approved,
and bare `Bash` carries no command specifier, so **any shell command runs
unattended** every morning as `ctodie`. Blast radius: the cwd is a git repo,
`bun x wrangler` + CF creds are reachable (deploy/delete Workers or R2), and the
bao token at `~/.config/bao/automation-token` is `cat`-able. Exa pulls arbitrary
web pages into context, so a **prompt-injected source page** is a plausible
trigger. The runbook's "no deploys / no writes outside digest surfaces" is
prompt-only — nothing enforces it.
Fix: scope `Bash` to prefixes (`Bash(bun x wrangler r2 object put:*)`,
`Bash(curl:*)`…) or drop `Bash` and let the MCP tools do the R2 put; add systemd
sandboxing to the `.service` (`ProtectSystem=strict`, `ProtectHome=` + explicit
`ReadWritePaths=` for the vault, state dir, and repo).

## P1 — No failure or no-op alerting
`aiml-digest.service` has no `OnFailure=`; the script only appends `exit=$status`
to a log nobody reads. Worse, `claude -p` exits **0 even on semantic failure**
(published nothing / stale / a leg errored) — today's own `exit=0` masks that the
run detected an anomaly and only patched delivery legs. Exit code is a near-useless
health signal here.
Fix (two layers): (a) `OnFailure=` unit → Gmail/engram/ntfy for non-zero exits;
(b) in-script post-check that `curl`s `index.json` and asserts
`dates[0] == today` + `updated` is today, exiting non-zero otherwise — this is
what catches the exit-0-but-nothing-published case.

---

## P2 — Silent gather failure: bao blip or dead key → empty digest behind green ✔
Two confirmed mechanisms compound:
- **Dead-end fallback** (`~/.claude/mcp/exa.json`): resolver is
  `EXA_API_KEY="$(bao … || op read …)"`. The systemd service exports only PATH +
  BAO_ADDR — no `OP_SERVICE_ACCOUNT_TOKEN`, no headless 1P — so the `op read`
  fallback **cannot authenticate** and returns empty. A bao blip → empty key, not
  an error.
- **"Connected" masks it**: `mcp/exa` starts without validating the key, so an
  empty key still shows ✔ Connected; the 401 only appears at `web_search_exa`
  call time.
Fix: resolver **fails loud** on empty (`[ -n "$EXA_API_KEY" ] || { echo "exa key
unresolved" >&2; exit 1; }`) instead of silently launching with `""`.

## P2 — `r2.dev` is the production data plane
`pwa/src/lib/data/digests.ts:5` hardcodes the `pub-….r2.dev` URL as the site's
runtime data source. r2.dev is a dev URL — Cloudflare **rate-limits it, no
CDN/cache/SLA**. A spike or throttle takes the digest page's data down with no
edge cache to absorb it.
Fix: bind the bucket to an R2 custom domain (e.g. `digests.cerebral.work`) or
front it via the site worker; repoint `DIGEST_BASE`.

## P2 — `index.json` update is not race-safe
Publish = GET `index.json` → prepend today → PUT, no ETag precondition, no lock
(DIGEST.md §3). Two overlapping runs clobber each other's `dates`/`updated`. The
ETag is already returned on GET → use `If-Match` conditional PUT.

## P2 — Route: date-click race + stale content
`digest/+page.svelte:34-51` — `selectDate` is async with no sequence guard: rapid
A→B clicks can land `digest=A` while the rail shows B, or a late A-rejection wipes
B's good render. And `digests.ts:50` omits `cache:"no-cache"` (unlike the index
fetch) **and** `digestCache` never invalidates — a corrected `<date>.json` (the
job overwrites in place) won't be seen until reload.
Fix: AbortController or "is this still the active date?" check after await;
add `cache:"no-cache"` to `fetchDigest`.

## P2 — Unknown category silently drops items
`+page.svelte:53-64` filters items into the fixed 6-member `categoryOrder`. Data
is LLM-written JSON; any category typo or new bucket (`safety`, …) → those items
match no group and **vanish with no warning**. Add a fallback "Other" bucket.

## P2 — `javascript:` URL is a real (guarded) XSS vector
`+page.svelte:114` `<a href={item.url}>` — Svelte does not sanitize URL attrs. A
`javascript:` `url` renders clickable. Bucket is job-writable only, but the JSON
is LLM-generated from **untrusted Exa results**, so prompt-injection → poisoned
`url` is the (low-prob) path. `target="_blank"` mitigates, not eliminates.
No `{@html}` anywhere (that path is clean). Fix: scheme-allowlist http/https
before render.

## P2 — Token 32-day fuse; renewal works but fails silent
Orphan periodic 768h token; `renew-self` on each run **does** reset TTL
indefinitely (verified). But if the timer doesn't fire for >32d (box off a month,
or `systemctl --user` not running) the orphan token expires → unrecoverable,
manual re-mint. And the renew is `… || true` — a failed renewal burns the fuse
with no signal. Fold renew status into the P1 alerting.

## P2 — Dedup window is one day
Runbook dedups new items only against the newest existing `<date>.json`
(DIGEST.md §2). A story re-reported 2+ days later reappears. Dedup by
`url`/`headline` across the last N days.

---

## P3 — polish
- **Policy over-grant** (mild): `sharedsecret-read` grants read on the whole
  `sharedsecret` mount, not just the exa key. Narrow to
  `sharedsecret/data/exa-api-credentials`.
- **Orphaned containers**: 4 concurrent `mcp/exa` containers running (one >1h),
  each holding the 36-byte key in `docker inspect` env until exit; `--rm` only
  reaps on exit. Reap idle ones; consider a wrapper that dedups.
- **SW never caches R2**: `static/sw.js:32` gates on same-origin (`type==="basic"`),
  so cross-origin R2 is never cached → "works offline" is false for `/digest`.
  The error branch does trigger correctly (relies on JSON.parse failing on the
  HTML fallback — fragile but works).
- **`index.updated` malformed → `toISOString()` throws** unhandled
  (`+page.svelte:84`). Guard it.
- **Date order assumed newest-first** (`+page.svelte:23`), never sorted client-side.
- **`cd` unguarded** (`aiml-digest-run.sh:17`, no `set -e`) — a failed `cd` runs
  claude in the wrong dir. Add `|| exit 1`.
- **Empty-state gap**: all items in unknown categories → blank sections, no
  "No digests" message.
- **CORS `allowed_headers: *`** — harmless for GET/HEAD, marginally cleaner to
  tighten.

---

## Cleared / refuted (held up under scrutiny)
- **Exit-status capture**: no bug — `status=$?` correctly captures claude's exit.
- **R2 over-exposure**: world-readable but content is intended-public news, **no
  secrets/PII**; anonymous **listing is NOT possible** (`GET /` → 404, GET-by-key
  only); **CORS correctly scoped** (not `*` origin; disallowed origin blocked);
  **Gmail is draft-only, enforced by tool availability** (no send tool exists).
- **Secret leak surface**: argv/log/shell-history all safe; token file 0600. Only
  residual is the `docker inspect` env (inherent to `-e`, P3).
- **Type-contract drift**: none — UI types match what the runbook tells the job to
  write; UI even defensively handles missing `source`.
- **PATH under systemd**: fine — claude/bao/docker/bun all resolve.

## Not mine — pre-existing repo rot
- `pwa/src/lib/data/explainers-3.ts` is **corrupted**: 37 type errors, literal
  prose spilled into object literals. Predates this work; `bun run check` is red
  because of it. Worth a separate cleanup ticket.
