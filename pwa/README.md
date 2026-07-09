# cf-pwa-template

Cloudflare PWA template — SvelteKit + Bun + TypeScript + Alchemy IaC.

One repo, three deployment tiers. Start static, add functions when needed, go SSR on the edge.

## Quick Start

```bash
bun install
bun run dev          # http://localhost:5173
```

## Deploy

```bash
bun alchemy login    # one-time CF auth
bun run deploy       # alchemy deploy → Workers
bun run destroy      # tear down
```

## Stack

| Tool | Role |
|------|------|
| **SvelteKit 5** | SPA framework (runes mode, client-side routing) |
| **Bun** | Runtime, package manager, dev server, static server |
| **TypeScript** | End-to-end type safety (app + infra + bindings) |
| **Alchemy** | Infrastructure-as-Code via `alchemy.run.ts` (no YAML, no Terraform) |
| **Cloudflare Workers** | Deploy target (static assets + edge runtime) |

## Three Tiers

### Tier 1 — Static SPA (default)

Pure client-side PWA. No server, no API routes.

- Adapter: `@sveltejs/adapter-static`
- Build: `bun run build` → `build/` (prerendered HTML + JS + CSS)
- Deploy: Alchemy wraps in a Workers static-assets deployment
- Use when: dashboard, docs, catalog, any read-only app

### Tier 2 — Pages + Functions

SPA + API routes. CF Access auth, R2/D1 bindings.

- Same adapter-static build
- Add `functions/` directory with Pages Functions
- `_middleware.ts` gates `/api/*` with CF Access JWT verification
- Bindings: `env.BUCKET` (R2), `env.DB` (D1), `env.ACCESS_AUD`
- Use when: file portal, authenticated API, CRUD app

### Tier 3 — Workers SSR

Full server-side rendering on the edge.

- Swap `svelte.config.js` adapter to `alchemy/cloudflare/sveltekit`
- Set `src/routes/+layout.ts` `ssr = true`
- Access bindings via `cloudflare:workers` module or `platform.env`
- Use when: SEO-critical, streaming, edge database reads

**Switching tiers** is a config change, not a rewrite. The SvelteKit routes stay the same — only the adapter and `+layout.ts` exports change. See `infra/README.md`.

## Structure

```
cf-pwa-template/
  alchemy.run.ts              # IaC entrypoint — deploys SvelteKit + R2 + D1 to CF
  svelte.config.js            # adapter-static (Tier 1/2) — swap for Tier 3
  vite.config.ts              # Vite + SvelteKit plugin
  tsconfig.json               # TypeScript config
  package.json                # Bun scripts, deps
  schema.sql                  # D1 schema template (idempotent)

  src/
    app.html                  # HTML shell (manifest, icons, SW)
    app.d.ts                  # SvelteKit app types
    env.d.ts                  # Cloudflare binding types (from alchemy.run.ts)
    routes/
      +layout.ts              # SPA config (ssr=false, prerender=true)
      +layout.svelte          # Root layout (SW registration, global CSS)
      +page.svelte            # Landing page

  static/
    manifest.json             # PWA manifest (installable)
    sw.js                     # Service worker (app-shell precache, API bypass)
    icons/
      icon.svg                # SVG icon (any size)

  functions/                  # Tier 2 — Pages Functions
    _middleware.ts            # Auth gate for /api/* (CF Access JWT)
    lib/
      access.ts              # JWT verification (jose, JWKS caching, DEV bypass)
    api/
      me.ts                  # GET /api/me — example authenticated route

  scripts/
    serve.ts                  # Bun static server for build/ output

  .github/
    workflows/
      deploy.yml              # Alchemy deploy (main=prod, PR=preview, close=destroy)

  .env.example                # ALCHEMY_PASSWORD
  .dev.vars.example           # Local dev (DEV_EMAIL, ACCESS_TEAM_DOMAIN, ACCESS_AUD)
```

## Auth Pattern

Defense-in-depth (from files-portal):

1. **Edge**: CF Access self-hosted app gates all traffic
2. **Functions**: `_middleware.ts` verifies JWT per-request (jose + JWKS)
3. **Data**: API routes re-check ownership before returning rows

The `functions/lib/access.ts` module is reusable verbatim — only the `ACCESS_TEAM_DOMAIN` and `ACCESS_AUD` env vars change per deployment.

DEV bypass: if `DEV_EMAIL` is set and host is localhost, verification is skipped. Cannot fire in production (deployed origin is never localhost).

## CI/CD

The GitHub Actions workflow (`.github/workflows/deploy.yml`):

- **Push to main** → deploy `prod` stage
- **Open PR** → deploy `pr-<number>` preview stage + post comment with URL
- **Close PR** → destroy preview stage (safety check prevents prod destruction)

Required GitHub secrets:
```
ALCHEMY_PASSWORD
ALCHEMY_STATE_TOKEN
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

## Commands

```bash
bun install                  # deps
bun run dev                  # Vite dev server (:5173)
bun run build                # static build → build/
bun run serve                # serve build/ (:8080)
bun run serve 3000            # custom port
bun run deploy               # alchemy deploy
bun run destroy              # alchemy destroy
bun run check                # svelte-check type checking
```
