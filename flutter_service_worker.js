'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.json": "6c5d40bcccf572276c912f1fa55e84d5",
"assets/assets/background.png": "ea9f417d51ef6703773de590e99d05dd",
"assets/assets/background1.png": "83635b7bf00949958a769ca9f7d7aef1",
"assets/assets/bar.png": "7331a85a5245b575974d4bc1b8a17c30",
"assets/assets/basket1.gif": "8c44aadc9e4825bdbe70fa60965f377f",
"assets/assets/basket2.gif": "82e3e13b17b18d2fa5220adbb3fae097",
"assets/assets/contact.png": "98f71fb10680314ceb094361c1ffc210",
"assets/assets/Dry%2520Skin%2520Routine1.jpg": "4875ad57053d064448908167b0548cf7",
"assets/assets/error.gif": "07352b101d11ea6162f0d97bb1ba1e1a",
"assets/assets/font/arabic.ttf": "57502ab1bedd3acf45e40b8f476939df",
"assets/assets/font/AvelanaBold_PERSONAL.ttf": "3fa4fc4b925995d8b1492dff4dd20d2a",
"assets/assets/font/Cairo-Bold.ttf": "41f2a756f3ed1a9aebe37f6d6845b0ed",
"assets/assets/font/Francaise%2520Regular%2520Demo.ttf": "c939063d3b8ed4262048eddd6d0d4539",
"assets/assets/font/PlayfairDisplay-BlackItalic.otf": "e201d19ea0646972a75a423ad7aedda9",
"assets/assets/font/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/font/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/assets/font/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/hole.png": "8cbde526caa5bf0fea7413633f2374d3",
"assets/assets/home.png": "ce522a994815bce65034fcb3f02facf2",
"assets/assets/icon/download-iconG.png": "dce95011f60f0ffec5583d0ec4c3f0fc",
"assets/assets/icon/facebook.png": "f63ceb22cf44b94aa42a7a996c2b863d",
"assets/assets/icon/false.png": "92f84bf07d81fbef3d9a5a10135dd497",
"assets/assets/icon/fast.png": "d6b551a18a25204aabf3d9fd63092760",
"assets/assets/icon/fastG.png": "bf52bc99432576c7a57247eca60b9f14",
"assets/assets/icon/free-delivery.png": "0cf2bdad0db714960c8e334060dedaac",
"assets/assets/icon/free-deliveryG.png": "f2abcd6e284e66484b40ea0e1ad75207",
"assets/assets/icon/Gps.png": "e9fe6327e704a7cc95ccd95c8accfb9f",
"assets/assets/icon/instagram.png": "24939eb368470cd6368e8488d28389b0",
"assets/assets/icon/location.png": "40f506eee95b963c82bea3bf9b84e754",
"assets/assets/icon/locationG.png": "2b086373a198537e88eb8423c6727f5b",
"assets/assets/icon/mail.png": "e1005b50a55538a9fe01e542e3334d07",
"assets/assets/icon/mail1.png": "575579b9b4d83eee12c03153166ebf25",
"assets/assets/icon/mailG.png": "055f73ecf1f8a9ae5de70808e0403d5f",
"assets/assets/icon/office.png": "7f60d8885b24154f578b3b196eac40b7",
"assets/assets/icon/officeG.png": "7735ef00b698eabca33cb207b1bde686",
"assets/assets/icon/phon.png": "33b7a0cbe23027792e9c2b4e27ed0608",
"assets/assets/icon/phonG.png": "e7844e55778f5d8166657097c2ac3a06",
"assets/assets/icon/secured-payment.png": "7f9c3a50a6cd75065ed18b3327fedc75",
"assets/assets/icon/secured-paymentG.png": "ed4b743c8f54ba6c9d1e59aad3ee341d",
"assets/assets/icon/true.png": "b88ec2dc0ea60677bef0e917736f2fec",
"assets/assets/icon/twitter.png": "3ca64efd902d55302bd5c074c6f6460f",
"assets/assets/icon/whatsapp.png": "216688b826e6af92b6673618dc54ffbe",
"assets/assets/inter.png": "149e97c238be99f5f62f6d15417021b6",
"assets/assets/item/cream1.jpg": "2ad4ef2ecb78a17ccb90dbc3bc5f3959",
"assets/assets/item/cream2.jpg": "cd204b47f38b880fda95947a63aad8fd",
"assets/assets/item/Gift1.jpg": "9546f50528ec3d6b0489da3cc1b347db",
"assets/assets/item/Gift2.jpg": "2859eb0940ca8733befb14b2931e058f",
"assets/assets/item/oile1.jpg": "67e76d0a86d59830d1d485d5c14dde0c",
"assets/assets/item/oile2.jpg": "2def1a7f3bded7b5ed02a20a307efa56",
"assets/assets/item/perfume1.jpg": "a5e8ae958b0b70f479ab152fd4652afc",
"assets/assets/item/perfume2.jpg": "da3a2ac62c2a1531134f491d3cf30b27",
"assets/assets/item/soap1.jpg": "df8ff34a6f5c73b1d23477a95d364e98",
"assets/assets/item/soap2.jpg": "f2e9bac2ebfdc039add8a3d14868f6df",
"assets/assets/logo.png": "2d114497fcd15dc7d3592837aa94698f",
"assets/assets/logo2.png": "37d13cc326ab6fbd3a2c13fdae46e656",
"assets/assets/map.jpg": "fc0e99b5f39ee4ed0f5e0c1fccd12ed3",
"assets/assets/news.png": "27ff1c44d411f28bb31ff6940a1c6837",
"assets/assets/remember.gif": "a9892bc1a721fa0362ed5c592a4febd0",
"assets/assets/soap_artwork.png": "f8f5fd94a78069121b42f6a30e29b50e",
"assets/assets/store.png": "c12d85ffe3f5b09e2e0ae82e7e7400c4",
"assets/assets/story.png": "f058b9de98bcd333102dce9c903f5876",
"assets/assets/test/image(1).png": "276d90f31bf3988c809d30782c1c8204",
"assets/assets/test/image(2).png": "b81f5715ea1c24f7427a4d338cfd3188",
"assets/assets/test/image(3).png": "88710792b966a332a7475fff8b6dd968",
"assets/assets/test/image(4).png": "c8f723afecb17fa42f475617b84424bf",
"assets/assets/test/image(5).png": "059a3ad195afeccba653c49c0e470cff",
"assets/assets/test/image(6).png": "741842f16a89a3a498304f3f0241a72a",
"assets/assets/test/image(7).png": "6f6ff7722d54aeb38d9f805bc20c5c5d",
"assets/FontManifest.json": "51dc6fb09ed32371203d1d8679d99b69",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "4abf510b2111755929605b6f74df3552",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c874437e8e728fd5250f9b30b4c220d3",
"/": "c874437e8e728fd5250f9b30b4c220d3",
"main.dart.js": "25635510323318be3ff9b793e2377059",
"manifest.json": "6ca43a5a0f2e573bb08ce41a2b724bbe",
"version.json": "3fee4b0edd8588de9202d5ea9c53939a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
