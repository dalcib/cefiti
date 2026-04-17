var n = '10.0.0'
var s = `CEFiTI${n}`
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches
      .open(s)
      .then((t) =>
        t.addAll([
          './index.html',
          './manifest.json',
          './196.png',
          './512.png',
          './favicon.ico',
          './index.css',
          './index.js',
          'https://cefiti.web.app/db-next.js',
          'https://cefiti.web.app/legislacao.js',
          'https://cefiti.web.app/municipios.js',
        ]),
      ),
  )
})
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((t) =>
        Promise.all(
          t.filter((i) => !s.includes(i)).map((i) => caches.delete(i)),
        ),
      ),
  )
})
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.open(s).then((t) =>
      fetch(e.request)
        .then(
          (i) => (
            new URL(e.request.url).protocol !== 'chrome-extension:' &&
              (console.log(e.request.url, 'cached'),
              t.put(e.request, i.clone())),
            i
          ),
        )
        .catch(() => t.match(e.request)),
    ),
  )
})
//# sourceMappingURL=sw.js.map
