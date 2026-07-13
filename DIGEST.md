# Daily AI/ML Digest — Runbook

Automated daily digest of AI/ML news. A scheduled Claude Code session executes
this runbook each morning (08:00 local). The site at https://aiml.cerebral.work/digest/
populates at runtime from the R2 bucket — **no site rebuild or deploy is needed
to publish a digest.**

## Architecture

- **Store:** R2 bucket `aiml-digests` (Cloudflare account "Cerebral", 07ae57cc…)
  - Public dev URL: `https://pub-36949a13725a448595ffed8fe035dba4.r2.dev`
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

- 5–10 items. Every item must be from the last ~24–48h and not already present
  in a previous digest (check the newest existing `<date>.json` for overlap).
- Categories: `models` | `research` | `hardware` | `industry` | `policy` | `tools`
- `summary`: 1–3 sentences, factual, no hype. Engineer register.
- `source`: canonical origin domain (e.g. `openai.com`, `arxiv.org`), even when
  the `url` is coverage.

### 3. Publish to R2

Write `<YYYY-MM-DD>.json` matching the `Digest` interface, then update
`index.json` (`dates` newest-first, `updated` = now UTC):

```bash
cd ~/projects/aiml-history/pwa
bun x wrangler r2 object put aiml-digests/$(date +%F).json --file <digest.json> --content-type application/json --remote
# regenerate index.json: fetch current, prepend today's date if absent, bump updated
bun x wrangler r2 object put aiml-digests/index.json --file <index.json> --content-type application/json --remote
```

Verify: `curl -s https://pub-36949a13725a448595ffed8fe035dba4.r2.dev/index.json`

### 4. Deliver

1. **Obsidian vault:** write `~/vault/digests/aiml/<YYYY-MM-DD>.md` — markdown
   rendering of the digest (headline links + summaries, grouped by category).
2. **Engram:** `mem_save` a compact summary (topic: aiml-digest) so future
   sessions can recall recent developments.
3. **Gmail:** `create_draft` to chris@todie.io, subject
   `AI/ML Digest — <YYYY-MM-DD>`, body = the markdown digest. (Draft only —
   the Gmail MCP has no send; the draft is the readable artifact.)

## Guardrails

- Writes are scoped to the `aiml-digests` bucket + vault/engram/draft. **No git
  commits, no deploys, no other buckets.**
- Exa API key comes from OpenBao (`sharedsecret/exa-api-credentials`, namespace
  `deployment`, read via the scoped token at `~/.config/bao/automation-token`) —
  1Password is the personal interactive fallback only; deployments never depend
  on it being unlocked.
- If wrangler auth is broken or a delivery leg fails, still complete the other
  legs and note the failure in the engram entry.
- Never fabricate items — if the searches return nothing new, publish a digest
  with fewer items or skip the day (leave index.json untouched).
