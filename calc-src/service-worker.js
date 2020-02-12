const cacheName = 'calc-cache';
const staticAssets = [
  './',
  './index.html',
  './service-worker.js',
  './calc.css',
  './calc.js',
  './manifest.json',
  './apple-touch-icon.png'
];

self.addEventListener('install', async event => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(req);
  return cachedResponse;
}