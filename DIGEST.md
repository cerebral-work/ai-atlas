# Daily AI/ML Digest — Runbook

Automated daily digest of AI/ML news. A scheduled Claude Code session (systemd
user timer `aiml-digest.timer`, 08:03 local → `~/.local/bin/aiml-digest-run.sh`)
executes this runbook each morning. The site at https://aiml.cerebral.work/digest/
populates at runtime from the R2 store — **no site rebuild or deploy is needed to
publish a digest.**

## Architecture

- **Store:** R2 bucket `aiml-digests` (Cloudflare account "Cerebral", 07ae57cc…)
  - Canonical data plane: `https://digests.cerebral.work` (custom domain, full
    CDN + edge cache). The `pub-….r2.dev` URL still resolves but is rate-limited
    and must NOT be used as the site's source — `DIGEST_BASE` points at the
    custom domain.
  - CORS: GET/HEAD from `https://aiml.cerebral.work` + localhost dev ports
- **Site:** `/digest` route fetches `index.json`, then `<date>.json` per selected date
- **Types:** `pwa/src/lib/data/digests.ts` (DigestIndex, Digest, DigestItem)

## Daily procedure

### 1. Gather (Exa MCP — `web_search_exa`)

Run 3–5 searches covering the last 24h, e.g.:
- "announcement of a new AI model release or major AI lab product launch"
- "new machine learning research paper or breakthrough result"
- "AI hardware, chips, or datacenter infrastructure news"
- "AI policy, regulation, or industry business news"

Prefer primary sources (lab blogs, papers) over aggregators. Follow up with
`web_fetch_exa` only when highlights are insufficient.

### 2. Curate

- 5–10 items. Every item must be from the last ~24–48h.
- **Dedup across the last 7 days, not just yesterday:** fetch each of the last 7
  `<date>.json` objects that exist and exclude any item whose `url` (or, failing
  that, near-identical `headline`) already appeared. Slow-moving stories re-covered
  over several days must not repeat.
- Categories: `models` | `research` | `hardware` | `industry` | `policy` | `tools`.
  Use **only** these six — the site drops unknown categories into an "Other"
  bucket, which is a smell, not a feature.
- `summary`: 1–3 sentences, factual, no hype. Engineer register.
- `source`: canonical origin domain (e.g. `openai.com`, `arxiv.org`), even when
  the `url` is coverage.
- `url`: must be `http`/`https` (the site refuses other schemes).

### 3. Publish to R2

Build the JSON with the **Write tool** (not shell heredocs — Bash is scoped to
wrangler/curl only). Write `<YYYY-MM-DD>.json` matching the `Digest` interface,
then update `index.json` (`dates` newest-first, `updated` = now UTC):

```bash
cd ~/projects/aiml-history/pwa
bun x wrangler r2 object put aiml-digests/<YYYY-MM-DD>.json --file <digest.json> --content-type application/json --remote
# index.json: GET current, prepend today's date if absent, bump updated, Write, then:
bun x wrangler r2 object put aiml-digests/index.json --file <index.json> --content-type application/json --remote
```

Read current index with:
`bun x wrangler r2 object get aiml-digests/index.json --remote --pipe`

Concurrency note: the systemd timer is the **single writer** — the `index.json`
read-modify-write is safe only under that assumption. Do not run a second
uncoordinated writer against this bucket; wrangler's `object put` has no
`If-Match`, so there is no clobber protection.

Verify: `curl -s https://digests.cerebral.work/index.json`

### 4. Deliver

1. **Obsidian vault:** write `~/vault/digests/aiml/<YYYY-MM-DD>.md` — markdown
   rendering of the digest (headline links + summaries, grouped by category).
2. **Engram:** `mem_save` a compact summary (topic: aiml-digest) so future
   sessions can recall recent developments.
3. **Gmail:** `create_draft` to chris@todie.io, subject
   `AI/ML Digest — <YYYY-MM-DD>`, body = the markdown digest. (Draft only —
   the Gmail MCP has no send; the draft is the readable artifact.)

### 5. Conclude (required)

Print exactly one line as the last thing you do, so the runner's health-check can
tell success from a silent no-op:
- `DIGEST_RESULT: published <YYYY-MM-DD>` — you published today's digest.
- `DIGEST_RESULT: skipped <reason>` — you deliberately published nothing (e.g. no
  fresh news after dedup). This is a valid outcome; `index.json` is left untouched.

Omitting this line is treated as a failure (crash/loop) and fires the OnFailure
notifier.

## Guardrails

- Writes are scoped to the `aiml-digests` bucket + vault/engram/draft. **No git
  commits, no deploys, no other buckets.** (Enforced: the runner's `--allowedTools`
  grants only `Bash(bun x wrangler r2 *)`, `Bash(curl *)`, `Bash(mkdir *)` plus
  Read/Write/Glob/Grep and the four MCP tools — arbitrary shell is not available.)
- **Exa API key** comes from OpenBao (`sharedsecret/exa-api-credentials`, namespace
  `deployment`, read via the scoped token at `~/.config/bao/automation-token`) —
  1Password is the personal interactive fallback only; deployments never depend on
  it being unlocked. If the key is unresolved the exa MCP refuses to start (fails
  loud), so gather cannot silently run keyless.
- If a delivery leg fails, still complete the other legs and note the failure in
  the engram entry (then still print the `DIGEST_RESULT` line).
- Never fabricate items — if the searches return nothing new after dedup, emit
  `DIGEST_RESULT: skipped` rather than padding.
