// Hyvin yksinkertainen SW – vain perus-cache sivulle
const CACHE_NAME = "co2-mittaus-v1";
const URLS_TO_CACHE = [
  "co2_app.html",
  "manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
