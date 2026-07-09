import alchemy from "alchemy";
import { CustomDomain, Website } from "alchemy/cloudflare";

/**
 * Alchemy IaC — deploys the SvelteKit PWA to Cloudflare Workers.
 *
 * Tier 1 (Static SPA): SvelteKit() with adapter-static build output.
 * Tier 3 (Workers SSR): SvelteKit() with alchemy/cloudflare/sveltekit adapter.
 *
 * Usage:
 *   bun alchemy login          # one-time CF auth
 *   bun run deploy             = alchemy deploy
 *   bun run destroy            = alchemy destroy
 *
 * Bindings (R2, D1) are typed — import from this file for runtime types:
 *   import type { website } from "../alchemy.run.ts";
 *   type Env = typeof website.Env;
 */

const app = await alchemy("aiml-history");

// --- Optional resources (uncomment for Tier 2/3) ---
// Tier 1 static SPA — no R2/D1 needed. See the cf-pwa-template for the
// R2Bucket/D1Database blocks if this ever grows server-side state.

// --- Deploy the SvelteKit app ---

// adapter-static build → pure asset Worker (no server entrypoint).
// The SvelteKit() wrapper assumes adapter-cloudflare paths, so use Website directly.
export const website = await Website("website", {
  name: `${app.appName}-${app.stage}`,
  command: "bun run build",
  assets: "build",
  spa: true,
  wrangler: false, // no server entrypoint — wrangler.jsonc generation requires one
  url: true,
});

// aiml.cerebral.work → this worker (zone convention: design/dreams/flashed/lab)
export const domain = await CustomDomain("domain", {
  name: "aiml.cerebral.work",
  zoneId: "ee34e326eb0f2ed2cb2a59937150a9a1", // cerebral.work
  workerName: `${app.appName}-${app.stage}`,
});

console.log(`Deployed to: ${website.url}`);
console.log(`Custom domain: https://${domain.name}`);

await app.finalize();
