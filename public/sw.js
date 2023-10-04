const cacheName = 'v1';

self.addEventListener('install', () => {
  console.info('Service Worker Installed');
});

self.addEventListener('activate', (ev) => {
  console.info('Service Worker Activated');
  ev.waitUntil(
    self.clients.claim(),
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map((cache) => cache !== cacheName && caches.delete(cache)))
    })
  )
});

self.addEventListener('fetch', (ev) => {
  ev.respondWith(
    fetch(ev.request).then((res) => {
      if (ev.request.url.startsWith('http')) {
        const clone = res.clone();
        caches.open(cacheName).then((cache) => cache.put(ev.request, clone)).catch(() => {});
      }
      return res;
    }).catch(async () => await caches.match(ev.request) || new Response())
  )
});