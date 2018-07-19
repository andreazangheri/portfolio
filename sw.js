/*
 *
 *  Copyright 2018 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

// Version 0.0.1
var CACHE_NAME = 'portfolio-cache-v1';
self.addEventListener('install', e => {
  const timeStamp = Date.now();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        
'/',

'/sw.js?timestamp=${timeStamp}',
		  
'/index.html?timestamp=${timeStamp}',

'/index.html?homescreen=1?timestamp=${timeStamp}',

'/?homescreen=1?timestamp=${timeStamp}',

'scss/base.css?timestamp=${timeStamp}',

'js/trmix.min.js?timestamp=${timeStamp}',

'js/prefixfree.min.js?timestamp=${timeStamp}',

'js/main.js?timestamp=${timeStamp}',

'js/handlebars-v4.0.11.js?timestamp=${timeStamp}',

'js/data.json?timestamp=${timeStamp}',
	
'js/ajax.js?timestamp=${timeStamp}',
		  
'font/SharpGrotesk-Thin20.woff2?timestamp=${timeStamp}',
		  
'font/SharpGrotesk-Thin20.woff?timestamp=${timeStamp}',
		  
'font/SharpGrotesk-Thin20.ttf?timestamp=${timeStamp}',
		  
'font/SharpGrotesk-Thin20.svg?timestamp=${timeStamp}',
		  
'font/SharpGrotesk-Thin20.otf?timestamp=${timeStamp}',
		  
'font/SharpGrotesk-Thin20.eot?timestamp=${timeStamp}',
		  
'font/SharpGrotesk-Light20.woff2?timestamp=${timeStamp}',
		  
'font/SharpGrotesk-Light20.woff?timestamp=${timeStamp}',
		  
'font/SharpGrotesk-Light20.ttf?timestamp=${timeStamp}',
		  
'font/SharpGrotesk-Light20.svg?timestamp=${timeStamp}',
		  
'font/SharpGrotesk-Light20.otf?timestamp=${timeStamp}',
		  
'font/SharpGrotesk-Light20.eot?timestamp=${timeStamp}',
		  
'favicon.ico?timestamp=${timeStamp}',
		  
'data/favicon/android-icon-144x144.png?timestamp=${timeStamp}',

'data/favicon/android-icon-192x192.png?timestamp=${timeStamp}',
		  
'data/favicon/android-icon-36x36.png?timestamp=${timeStamp}',
		  
'data/favicon/android-icon-48x48.png?timestamp=${timeStamp}',
		  
'data/favicon/android-icon-72x72.png?timestamp=${timeStamp}',
		  
'data/favicon/android-icon-96x96.png?timestamp=${timeStamp}',
		  
'data/favicon/apple-icon-114x114.png?timestamp=${timeStamp}',
		  
'data/favicon/apple-icon-120x120.png?timestamp=${timeStamp}',
		  
'data/favicon/apple-icon-144x144.png?timestamp=${timeStamp}',
		  
'data/favicon/apple-icon-152x152.png?timestamp=${timeStamp}',
		  
'data/favicon/apple-icon-180x180.png?timestamp=${timeStamp}',
		  
'data/favicon/apple-icon-57x57.png?timestamp=${timeStamp}',
		  
'data/favicon/apple-icon-60x60.png?timestamp=${timeStamp}',
		  
'data/favicon/apple-icon-precomposed.png?timestamp=${timeStamp}',
		  
'data/favicon/safari-pinned-tab.svg?timestamp=${timeStamp}',

'data/favicon/apple-icon.png?timestamp=${timeStamp}',
		  
'data/favicon/favicon-16x16.png?timestamp=${timeStamp}',
		  
'data/favicon/favicon-32x32.png?timestamp=${timeStamp}',
		  
'data/favicon/favicon-96x96.png?timestamp=${timeStamp}',
		  
'data/favicon/favicon.ico?timestamp=${timeStamp}',
		  
'data/favicon/icon-256x256.png?timestamp=${timeStamp}',
		  
'data/favicon/icon-384x384.png?timestamp=${timeStamp}',
		  
'data/favicon/icon-512x512.png?timestamp=${timeStamp}',
		  
'data/favicon/manifest.json?timestamp=${timeStamp}',
		  
'data/favicon/ms-icon-144x144.png?timestamp=${timeStamp}',
		  
'data/favicon/ms-icon-150x150.png?timestamp=${timeStamp}',
		  
'data/favicon/ms-icon-310x310.png?timestamp=${timeStamp}',
		  
'data/favicon/ms-icon-70x70.png?timestamp=${timeStamp}',
		  
'data/favicon/site.webmanifest?timestamp=${timeStamp}',
		  
'data/favicon/android-chrome-512x512.png?timestamp=${timeStamp}',
		  
'data/favicon/android-chrome-256x256.png?timestamp=${timeStamp}',
		  
'data/favicon/android-chrome-192x192.png?timestamp=${timeStamp}',
		  
'browserconfig.xml?timestamp=${timeStamp}',
		  
'apple-touch-icon.png?timestamp=${timeStamp}',
		 
'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js?timestamp=${timeStamp}',
		 
'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js?timestamp=${timeStamp}',
		  
'//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js?timestamp=${timeStamp}'
		  
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('fetch', function(event) {

console.log(event.request.url);

});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch: true}).then(response => {
      return response || fetch(event.request);
    })
  );
});