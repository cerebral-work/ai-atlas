import type { website } from "../alchemy.run.ts";

export interface CloudflarePlatform {
  env: typeof website.Env;
  context: ExecutionContext;
  caches: CacheStorage & { default: Cache };
}

declare global {
  type CloudflareEnv = typeof website.Env;
}

declare module "cloudflare:workers" {
  namespace Cloudflare {
    interface Env extends CloudflareEnv {}
  }
}
