console.log("GOT TO ME");

let CACHE_NAME = 'hubblecache';
const urlsToCache = [
	'/',
	'/movies'
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