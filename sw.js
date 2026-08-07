const CACHE = 'shiyulu-v25';
const BASE = new URL('./', self.location.href);
const OFFLINE_URL = new URL('index.html', BASE).toString();
const ASSETS = [
  '',
  'index.html',
  'css/style.css',
  'css/extra.css',
  'css/stories.css',
  'js/quotes.js',
  'js/emotional-quotes.js',
  'js/script.js',
  'js/extra-stories.js',
  'js/emotional-stories.js',
  'assets/warmth-note.png',
  'assets/icon-192.png',
  'assets/icon-512.png',
  'manifest.webmanifest'
].map(path => new URL(path, BASE).toString());

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;

  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, copy));
          return res;
        })
        .catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      const network = fetch(e.request).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network || Response.error();
    })
  );
});
