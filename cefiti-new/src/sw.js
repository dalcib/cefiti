import { version } from './../package.json'

const cacheKey = `CEFiTI${version}`

self.addEventListener('install', (event) => {
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

//Portaria SDA nº 780, de 6 de abril de 2023
//Portaria 317, de 21 de maio de 2021

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => !cacheKey.includes(key))
          .map((key) => caches.delete(key)),
      )
    }),
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(cacheKey).then((cache) => {
      return fetch(event.request)
        .then((fetchedResponse) => {
          if (new URL(event.request.url).protocol !== 'chrome-extension:') {
            console.log(
              event.request.url,
              //new URL(event.request.url).protocol,
              'cached',
            )
            cache.put(event.request, fetchedResponse.clone())
          }
          return fetchedResponse
        })
        .catch(() => {
          return cache.match(event.request)
        })
    }),
  )
  //}
})
