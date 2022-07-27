console.log("GOT TO ME");

let CACHE_NAME = 'hubblecache';
const urlsToCache = [
	'/',
	'/movies',
	'/person',
	'/search',
	'android/android-launchericon-192-192.png'
];

self.addEventListener('install', function(event){
	event.waitUntil(caches.open(CACHE_NAME).then(function(cache){
		console.log('Opened Cache');
		return cache.addAll(urlsToCache);
	}))
	self.skipWaiting();
})

self.addEventListener('fetch', function(event){
	event.respondWith(caches.match(event.request).then(function(response){
		if (response){
			return response;
		}
		return fetch(event.request);
	}))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      if (key === CACHE_NAME) { return; }
      return caches.delete(key);
    }))
  }));
});