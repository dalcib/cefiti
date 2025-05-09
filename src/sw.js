import { version } from './../package.json'
// eslint-disable-next-line no-undef
const cacheKey = 'CEFiTI' + version //7.0.0';

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
        './dbHospedeiros.db.js',
        './dbPragas.db.js',
        './dbRegras.db.js',
        './leg/IN02-2014.pdf',
        './leg/IN08-2012.pdf',
        './leg/IN17-2005.pdf',
        './leg/IN19-2014.pdf',
        './leg/IN21-2018.pdf',
        './leg/IN23-2008.pdf',
        './leg/IN28-2017.pdf',
        './leg/IN37-2016.pdf',
        './leg/IN44-2018.pdf',
        './leg/IN48-2007.pdf',
        './leg/IN54-2007.pdf',
        './leg/IN03-2008.pdf',
        './leg/IN09-2011.pdf',
        './leg/IN17-2009.pdf',
        './leg/IN20-2013.pdf',
        './leg/IN23-2007.pdf',
        './leg/IN28-2016.pdf',
        './leg/IN34-2017.pdf',
        './leg/IN38-2018.pdf',
        './leg/IN46-2010.pdf',
        './leg/IN53-2008.pdf',
        './leg/PORT125-1998.pdf',
        './leg/PORT780-2023.pdf',
        './leg/RES04-2019.pdf',
        './leg/IN02-2018.pdf',
        './leg/PORT627-2023.pdf',
        './leg/PORT734-2024.pdf',
        './leg/PORT776-2025.pdf',
        './leg/PORT859-2023.pdf',
        './leg/PORT940-2023.pdf',
        './leg/RES05-2018.pdf',
        './leg/PORT1257-2025.pdf',
      ])
    })
  )
})

//Portaria SDA nº 780, de 6 de abril de 2023
//Portaria 317, de 21 de maio de 2021

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (!cacheKey.includes(key)) {
            return caches.delete(key)
          }
        })
      )
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(cacheKey).then((cache) => {
      return fetch(event.request)
        .then((fetchedResponse) => {
          if (new URL(event.request.url).protocol == !'chrome-extension:') {
            console.log(
              event.request.url,
              new URL(event.request.url).protocol,
              'xxxxxxxxx'
            )
            cache.put(event.request, fetchedResponse.clone())
          }
          return fetchedResponse
        })
        .catch(() => {
          return cache.match(event.request)
        })
    })
  )
  //}
})
