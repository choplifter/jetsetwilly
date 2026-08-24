// Service Worker: Netzwerk zuerst, Cache als Offline-Fallback.
// So bleiben Updates sofort sichtbar, aber das Spiel läuft auch offline.
const CACHE = "jsw-cache-v2";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(clients.claim()));

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    // no-cache: immer beim Server revalidieren, damit Updates sofort ankommen
    fetch(e.request, { cache: "no-cache" }).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
      return res;
    }).catch(() => caches.match(e.request))
  );
});
