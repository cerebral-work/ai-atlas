#!/usr/bin/env bun
import { serve } from "bun";

const PORT = Number(process.argv[2] ?? 8080);
const ROOT = import.meta.dir + "/../build";

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    let path = decodeURIComponent(url.pathname);
    if (path === "/") path = "/index.html";

    const file = Bun.file(ROOT + path);
    if (!(await file.exists())) {
      // SPA fallback
      const fallback = Bun.file(ROOT + "/index.html");
      if (await fallback.exists()) {
        return new Response(fallback, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      }
      return new Response("404 Not Found", { status: 404 });
    }

    const ext = path.slice(path.lastIndexOf("."));
    const headers: Record<string, string> = {
      "Content-Type": MIME[ext] ?? "application/octet-stream",
    };
    if (path.endsWith(".json")) headers["Cache-Control"] = "no-cache";

    return new Response(file, { headers });
  },
});

console.log(`PWA serving on http://localhost:${PORT}/`);
