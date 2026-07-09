import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/**
 * SvelteKit config — Tier 1: Static SPA.
 *
 * adapter-static builds a prerendered SPA to `build/`.
 * Alchemy deploys this as a Cloudflare Worker with static assets.
 *
 * For Tier 3 (Workers SSR), swap to:
 *   import alchemy from "alchemy/cloudflare/sveltekit";
 *   adapter: alchemy()
 * See infra/README.md for tier switching.
 *
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: "index.html",
      strict: false,
    }),
  },
};

export default config;
