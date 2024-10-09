const cacheName = 'actilde-cache-v1';
const resourcesToCache = [
  '/',
  'index.html',
  'manifest.json',
  'favicon.ico',
  'apple-touch-icon.png',
  'icon-192-maskable.png',
  'icon-192.png',
  'icon-512-maskable.png',
  'icon-512.png'
];

// Install the service worker and cache necessary assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToCache);
    })
  );
});

// Fetch assets from the cache or the network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
