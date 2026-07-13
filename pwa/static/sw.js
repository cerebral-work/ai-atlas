// Service worker — app-shell precache with API bypass.
// Immutable hashed assets (_app/immutable/*): cache-first (safe — hash in URL).
// HTML/navigation: network-first, fall back to cache (stale-while-revalidate).
// NEVER cache /api/* (requires live session — files-portal pattern).

const CACHE = "atlas-v3";
const PRECACHE = ["/", "/manifest.json", "/icons/icon.svg"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Skip non-GET requests
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);

  // Never intercept /api/* — requires live session
  if (url.pathname.startsWith("/api/")) return;

  // Immutable hashed assets: cache-first (content-addressed by hash in filename)
  if (url.pathname.includes("/_app/immutable/")) {
    e.respondWith(
      caches.match(e.request).then((cached) => {
        if (cached) return cached;
        return fetch(e.request).then((resp) => {
          if (resp.status === 200 && resp.type === "basic") {
            const clone = resp.clone();
            caches.open(CACHE).then((c) => c.put(e.request, clone));
          }
          return resp;
        });
      })
    );
    return;
  }

  // Everything else (HTML, navigation, JSON): network-first
  e.respondWith(
    fetch(e.request)
      .then((resp) => {
        if (resp.status === 200 && resp.type === "basic") {
          const clone = resp.clone();
          caches.open(CACHE).then((c) => c.put(e.request, clone));
        }
        return resp;
      })
      .catch(() => caches.match(e.request).then((cached) => cached || caches.match("/")))
  );
});
