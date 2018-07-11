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
var CACHE_NAME = 'borders-cache-v1';
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

'/css/stile.css?timestamp=${timeStamp}',

'app/borders.js?timestamp=${timeStamp}',

'app/main.js?timestamp=${timeStamp}',
	
'app/sketch.properties?timestamp=${timeStamp}',
	
'libraries/arpaToIPA.min.js?timestamp=${timeStamp}',
	
'libraries/jquery-3.3.1.slim.min.js?timestamp=${timeStamp}',
		
'libraries/p5.min.js?timestamp=${timeStamp}',
	
'libraries/p5.sound.min.js?timestamp=${timeStamp}',
	
'libraries/p5.speech.min.js?timestamp=${timeStamp}',
	
'libraries/rita-small.min.js?timestamp=${timeStamp}',
	
'data/load_black.svg?timestamp=${timeStamp}',
	
'data/load_white.svg?timestamp=${timeStamp}',
	
'data/load_black_b.svg?timestamp=${timeStamp}',
		  
'data/load_white_b.svg?timestamp=${timeStamp}',
	
'data/font/NotoSansUI-Regular.ttf?timestamp=${timeStamp}',
	
'data/font/NotoSansUI-Bold.ttf?timestamp=${timeStamp}',
		  
'data/logo/black/black0.svg?timestamp=${timeStamp}',

'data/logo/black/black1.svg?timestamp=${timeStamp}',

'data/logo/black/black2.svg?timestamp=${timeStamp}',

'data/logo/black/black3.svg?timestamp=${timeStamp}',

'data/logo/black/black4.svg?timestamp=${timeStamp}',

'data/logo/black/black5.svg?timestamp=${timeStamp}',

'data/logo/black/black6.svg?timestamp=${timeStamp}',

'data/logo/black/black7.svg?timestamp=${timeStamp}',

'data/logo/black/black8.svg?timestamp=${timeStamp}',

'data/logo/black/black9.svg?timestamp=${timeStamp}',

'data/logo/black/black10.svg?timestamp=${timeStamp}',

'data/logo/black/black11.svg?timestamp=${timeStamp}',

'data/logo/black/black12.svg?timestamp=${timeStamp}',

'data/logo/black/black13.svg?timestamp=${timeStamp}',

'data/logo/black/black14.svg?timestamp=${timeStamp}',

'data/logo/black/black15.svg?timestamp=${timeStamp}',

'data/logo/black/black16.svg?timestamp=${timeStamp}',

'data/logo/black/black17.svg?timestamp=${timeStamp}',

'data/logo/black/black18.svg?timestamp=${timeStamp}',

'data/logo/black/black19.svg?timestamp=${timeStamp}',

'data/logo/black/black20.svg?timestamp=${timeStamp}',

'data/logo/black/black21.svg?timestamp=${timeStamp}',

'data/logo/black/black22.svg?timestamp=${timeStamp}',

'data/logo/black/black23.svg?timestamp=${timeStamp}',

'data/logo/black/black24.svg?timestamp=${timeStamp}',

'data/logo/black/black25.svg?timestamp=${timeStamp}',

'data/logo/black/black26.svg?timestamp=${timeStamp}',

'data/logo/black/black27.svg?timestamp=${timeStamp}',

'data/logo/black/black28.svg?timestamp=${timeStamp}',

'data/logo/black/black29.svg?timestamp=${timeStamp}',

'data/logo/black/black30.svg?timestamp=${timeStamp}',

'data/logo/black/black31.svg?timestamp=${timeStamp}',

'data/logo/black/black32.svg?timestamp=${timeStamp}',

'data/logo/black/black33.svg?timestamp=${timeStamp}',

'data/logo/black/black34.svg?timestamp=${timeStamp}',

'data/logo/black/black35.svg?timestamp=${timeStamp}',

'data/logo/black/black36.svg?timestamp=${timeStamp}',

'data/logo/black/black37.svg?timestamp=${timeStamp}',
		  
'data/logo/black/black38.svg?timestamp=${timeStamp}',

'data/logo/black/black39.svg?timestamp=${timeStamp}',

'data/logo/black/black40.svg?timestamp=${timeStamp}',

'data/logo/black/black41.svg?timestamp=${timeStamp}',

'data/logo/black/black42.svg?timestamp=${timeStamp}',

'data/logo/black/black43.svg?timestamp=${timeStamp}',

'data/logo/black/black44.svg?timestamp=${timeStamp}',

'data/logo/black/black45.svg?timestamp=${timeStamp}',

'data/logo/black/black46.svg?timestamp=${timeStamp}',

'data/logo/black/black47.svg?timestamp=${timeStamp}',

'data/logo/black/black48.svg?timestamp=${timeStamp}',

'data/logo/black/black49.svg?timestamp=${timeStamp}',

'data/logo/black/black50.svg?timestamp=${timeStamp}',

'data/logo/white/white0.svg?timestamp=${timeStamp}',

'data/logo/white/white1.svg?timestamp=${timeStamp}',

'data/logo/white/white2.svg?timestamp=${timeStamp}',

'data/logo/white/white3.svg?timestamp=${timeStamp}',

'data/logo/white/white4.svg?timestamp=${timeStamp}',

'data/logo/white/white5.svg?timestamp=${timeStamp}',

'data/logo/white/white6.svg?timestamp=${timeStamp}',

'data/logo/white/white7.svg?timestamp=${timeStamp}',

'data/logo/white/white8.svg?timestamp=${timeStamp}',

'data/logo/white/white9.svg?timestamp=${timeStamp}',

'data/logo/white/white10.svg?timestamp=${timeStamp}',

'data/logo/white/white11.svg?timestamp=${timeStamp}',

'data/logo/white/white12.svg?timestamp=${timeStamp}',

'data/logo/white/white13.svg?timestamp=${timeStamp}',

'data/logo/white/white14.svg?timestamp=${timeStamp}',

'data/logo/white/white15.svg?timestamp=${timeStamp}',

'data/logo/white/white16.svg?timestamp=${timeStamp}',

'data/logo/white/white17.svg?timestamp=${timeStamp}',

'data/logo/white/white18.svg?timestamp=${timeStamp}',

'data/logo/white/white19.svg?timestamp=${timeStamp}',

'data/logo/white/white20.svg?timestamp=${timeStamp}',

'data/logo/white/white21.svg?timestamp=${timeStamp}',

'data/logo/white/white22.svg?timestamp=${timeStamp}',

'data/logo/white/white23.svg?timestamp=${timeStamp}',

'data/logo/white/white24.svg?timestamp=${timeStamp}',

'data/logo/white/white25.svg?timestamp=${timeStamp}',

'data/logo/white/white26.svg?timestamp=${timeStamp}',

'data/logo/white/white27.svg?timestamp=${timeStamp}',

'data/logo/white/white28.svg?timestamp=${timeStamp}',

'data/logo/white/white29.svg?timestamp=${timeStamp}',

'data/logo/white/white30.svg?timestamp=${timeStamp}',

'data/logo/white/white31.svg?timestamp=${timeStamp}',

'data/logo/white/white32.svg?timestamp=${timeStamp}',

'data/logo/white/white33.svg?timestamp=${timeStamp}',

'data/logo/white/white34.svg?timestamp=${timeStamp}',

'data/logo/white/white35.svg?timestamp=${timeStamp}',

'data/logo/white/white36.svg?timestamp=${timeStamp}',

'data/logo/white/white37.svg?timestamp=${timeStamp}',
		  
'data/logo/white/white38.svg?timestamp=${timeStamp}',

'data/logo/white/white39.svg?timestamp=${timeStamp}',

'data/logo/white/white40.svg?timestamp=${timeStamp}',

'data/logo/white/white41.svg?timestamp=${timeStamp}',

'data/logo/white/white42.svg?timestamp=${timeStamp}',

'data/logo/white/white43.svg?timestamp=${timeStamp}',

'data/logo/white/white44.svg?timestamp=${timeStamp}',

'data/logo/white/white45.svg?timestamp=${timeStamp}',

'data/logo/white/white46.svg?timestamp=${timeStamp}',

'data/logo/white/white47.svg?timestamp=${timeStamp}',

'data/logo/white/white48.svg?timestamp=${timeStamp}',

'data/logo/white/white49.svg?timestamp=${timeStamp}',

'data/logo/white/white50.svg?timestamp=${timeStamp}',
		  
'data/favicon/black/android-icon-144x144.png?timestamp=${timeStamp}',

'data/favicon/black/android-icon-192x192.png?timestamp=${timeStamp}',
		  
'data/favicon/black/android-icon-36x36.png?timestamp=${timeStamp}',
		  
'data/favicon/black/android-icon-48x48.png?timestamp=${timeStamp}',
		  
'data/favicon/black/android-icon-72x72.png?timestamp=${timeStamp}',
		  
'data/favicon/black/android-icon-96x96.png?timestamp=${timeStamp}',
		  
'data/favicon/black/apple-icon-114x114.png?timestamp=${timeStamp}',
		  
'data/favicon/black/apple-icon-120x120.png?timestamp=${timeStamp}',
		  
'data/favicon/black/apple-icon-144x144.png?timestamp=${timeStamp}',
		  
'data/favicon/black/apple-icon-152x152.png?timestamp=${timeStamp}',
		  
'data/favicon/black/apple-icon-167x167.png?timestamp=${timeStamp}',
		  
'data/favicon/black/apple-icon-180x180.png?timestamp=${timeStamp}',
		  
'data/favicon/black/apple-icon-57x57.png?timestamp=${timeStamp}',
		  
'data/favicon/black/apple-icon-60x60.png?timestamp=${timeStamp}',
		  
'data/favicon/black/apple-icon-precomposed.png?timestamp=${timeStamp}',

'data/favicon/black/apple-icon.png?timestamp=${timeStamp}',
		  
'data/favicon/black/browserconfig.xml?timestamp=${timeStamp}',
		  
'data/favicon/black/favicon-16x16.png?timestamp=${timeStamp}',
		  
'data/favicon/black/favicon-32x32.png?timestamp=${timeStamp}',
		  
'data/favicon/black/favicon-96x96.png?timestamp=${timeStamp}',
		  
'data/favicon/black/favicon.ico?timestamp=${timeStamp}',
		  
'data/favicon/black/icon-256x256.png?timestamp=${timeStamp}',
		  
'data/favicon/black/icon-384x384.png?timestamp=${timeStamp}',
		  
'data/favicon/black/icon-512x512.png?timestamp=${timeStamp}',
		  
'data/favicon/black/manifest.json?timestamp=${timeStamp}',
		  
'data/favicon/black/ms-icon-144x144.png?timestamp=${timeStamp}',
		  
'data/favicon/black/ms-icon-150x150.png?timestamp=${timeStamp}',
		  
'data/favicon/black/ms-icon-310x310.png?timestamp=${timeStamp}',
		  
'data/favicon/black/ms-icon-70x70.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/android-icon-144x144.png?timestamp=${timeStamp}',

'data/favicon/black_b/android-icon-192x192.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/android-icon-36x36.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/android-icon-48x48.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/android-icon-72x72.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/android-icon-96x96.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/apple-icon-114x114.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/apple-icon-120x120.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/apple-icon-144x144.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/apple-icon-152x152.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/apple-icon-167x167.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/apple-icon-180x180.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/apple-icon-57x57.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/apple-icon-60x60.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/apple-icon-precomposed.png?timestamp=${timeStamp}',

'data/favicon/black_b/apple-icon.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/browserconfig.xml?timestamp=${timeStamp}',
		  
'data/favicon/black_b/favicon-16x16.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/favicon-32x32.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/favicon-96x96.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/favicon.ico?timestamp=${timeStamp}',
		  
'data/favicon/black_b/icon-256x256.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/icon-384x384.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/icon-512x512.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/manifest.json?timestamp=${timeStamp}',
		  
'data/favicon/black_b/ms-icon-144x144.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/ms-icon-150x150.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/ms-icon-310x310.png?timestamp=${timeStamp}',
		  
'data/favicon/black_b/ms-icon-70x70.png?timestamp=${timeStamp}',
		  
'data/favicon/white/android-icon-144x144.png?timestamp=${timeStamp}',

'data/favicon/white/android-icon-192x192.png?timestamp=${timeStamp}',
		  
'data/favicon/white/android-icon-36x36.png?timestamp=${timeStamp}',
		  
'data/favicon/white/android-icon-48x48.png?timestamp=${timeStamp}',
		  
'data/favicon/white/android-icon-72x72.png?timestamp=${timeStamp}',
		  
'data/favicon/white/android-icon-96x96.png?timestamp=${timeStamp}',
		  
'data/favicon/white/apple-icon-114x114.png?timestamp=${timeStamp}',
		  
'data/favicon/white/apple-icon-120x120.png?timestamp=${timeStamp}',
		  
'data/favicon/white/apple-icon-144x144.png?timestamp=${timeStamp}',
		  
'data/favicon/white/apple-icon-152x152.png?timestamp=${timeStamp}',
		  
'data/favicon/white/apple-icon-167x167.png?timestamp=${timeStamp}',
		  
'data/favicon/white/apple-icon-180x180.png?timestamp=${timeStamp}',
		  
'data/favicon/white/apple-icon-57x57.png?timestamp=${timeStamp}',
		  
'data/favicon/white/apple-icon-60x60.png?timestamp=${timeStamp}',
		  
'data/favicon/white/apple-icon-precomposed.png?timestamp=${timeStamp}',

'data/favicon/white/apple-icon.png?timestamp=${timeStamp}',
		  
'data/favicon/white/browserconfig.xml?timestamp=${timeStamp}',
		  
'data/favicon/white/favicon-16x16.png?timestamp=${timeStamp}',
		  
'data/favicon/white/favicon-32x32.png?timestamp=${timeStamp}',
		  
'data/favicon/white/favicon-96x96.png?timestamp=${timeStamp}',
		  
'data/favicon/white/favicon.ico?timestamp=${timeStamp}',
		  
'data/favicon/white/icon-256x256.png?timestamp=${timeStamp}',
		  
'data/favicon/white/icon-384x384.png?timestamp=${timeStamp}',
		  
'data/favicon/white/icon-512x512.png?timestamp=${timeStamp}',
		  
'data/favicon/white/manifest.json?timestamp=${timeStamp}',
		  
'data/favicon/white/ms-icon-144x144.png?timestamp=${timeStamp}',
		  
'data/favicon/white/ms-icon-150x150.png?timestamp=${timeStamp}',
		  
'data/favicon/white/ms-icon-310x310.png?timestamp=${timeStamp}',
		  
'data/favicon/white/ms-icon-70x70.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/android-icon-144x144.png?timestamp=${timeStamp}',

'data/favicon/white_b/android-icon-192x192.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/android-icon-36x36.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/android-icon-48x48.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/android-icon-72x72.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/android-icon-96x96.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/apple-icon-114x114.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/apple-icon-120x120.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/apple-icon-144x144.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/apple-icon-152x152.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/apple-icon-167x167.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/apple-icon-180x180.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/apple-icon-57x57.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/apple-icon-60x60.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/apple-icon-precomposed.png?timestamp=${timeStamp}',

'data/favicon/white_b/apple-icon.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/browserconfig.xml?timestamp=${timeStamp}',
		  
'data/favicon/white_b/favicon-16x16.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/favicon-32x32.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/favicon-96x96.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/favicon.ico?timestamp=${timeStamp}',
		  
'data/favicon/white_b/icon-256x256.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/icon-384x384.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/icon-512x512.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/manifest.json?timestamp=${timeStamp}',
		  
'data/favicon/white_b/ms-icon-144x144.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/ms-icon-150x150.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/ms-icon-310x310.png?timestamp=${timeStamp}',
		  
'data/favicon/white_b/ms-icon-70x70.png?timestamp=${timeStamp}'
		  
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