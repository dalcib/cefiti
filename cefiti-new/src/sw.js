import { version } from './../package.json'

const cacheKey = `CEFiTI${version}`

self.addEventListener('install', (event) => {
  self.skipWaiting() // Force the waiting service worker to become the active service worker
  event.waitUntil(
    caches.open(cacheKey).then((cache) => {
      return cache.addAll([
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
      ])
    }),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(), // Become available to all pages immediately
      caches.keys().then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== cacheKey)
            .map((key) => caches.delete(key)),
        )
      }),
    ]),
  )
})

self.addEventListener('fetch', (event) => {
  // Only handle GET requests and avoid chrome extensions
  if (event.request.method !== 'GET' || new URL(event.request.url).protocol === 'chrome-extension:') {
    return
  }

  event.respondWith(
    caches.open(cacheKey).then((cache) => {
      return fetch(event.request)
        .then((fetchedResponse) => {
          // Update cache with fresh version
          cache.put(event.request, fetchedResponse.clone())
          return fetchedResponse
        })
        .catch(() => {
          // If network fails, try cache
          return cache.match(event.request)
        })
    }),
  )
})

