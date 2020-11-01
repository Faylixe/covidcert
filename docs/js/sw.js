// Application service worker for offline mode.
// Author: Félix Voituret (felix@voituret.fr)

const VERSION = "1";
const CACHE_NAME = `covidcert-v${VERSION}`;
const CACHED_RESOURCES = [
    'js/covidcert.min.js',
    'js/moment.min.js',
    'js/pdf-lib.min.js',
    'js/pdf-lib.min.js.map',
    'js/qrcode.min.js',
    'js/qrcode.min.js.map',
    'index.html',
    'base.pdf',
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            cache.addAll(CACHED_RESOURCES);
        });
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key, i) {
                if (key !== CACHE_NAME) {
                    return caches.delete(keyList[i]);
                }
            }));
        });
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        });
    );
});