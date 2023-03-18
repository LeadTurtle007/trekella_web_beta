'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ab367ab48a90a43474f0f748ec3984a7",
"index.html": "03b6b5898377afd335883dc969680013",
"/": "03b6b5898377afd335883dc969680013",
"main.dart.js": "e7a25664824122123f709cb88e6d5413",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9e475c518e0e7107ed0d2b655496b3f1",
"assets/AssetManifest.json": "0bf2c00ba262f2e86c1e64416e038441",
"assets/NOTICES": "cc7c346579d9c0e252f96d4de29555cf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/travel-icon-bg-tr.png": "06cb7f599b96842521d0c1644fb4edc9",
"assets/assets/fort2.jpeg": "e82d8485122f759851a233639e014564",
"assets/assets/yt-logo.png": "8891028aa095ae6d5c10092a7650427f",
"assets/assets/leh.jpeg": "0997818dffef69ebeec1ccde3fe96921",
"assets/assets/trek1.jpg": "218e93ff970fe58544788da09bb9401c",
"assets/assets/trek.jpg": "f35d9797ddd9bed75e08dc2648abb4a3",
"assets/assets/fort1.webp": "faf0d097b931761b6b5b3ba7471c60e3",
"assets/assets/profilepic.jpg": "cca1591e3527237e17c05166fb7103f8",
"assets/assets/logo_rm.png": "0fd3618bbac7672d6665c73d2e55b554",
"assets/assets/gujrat.png": "67c1004db82f21708032fa5ab68946f6",
"assets/assets/kerla.png": "9d2491657827ea3fa4b9a98288c31115",
"assets/assets/100%2525%2520(5).webp": "53849670ff4a48268a5fb9780d2fb3e0",
"assets/assets/background.png": "9ecaa1e722afeb48ec7e42e71f6c6838",
"assets/assets/100%2525%2520(9).webp": "eab9dc1dbae7f9a0ed3741bacce6cfed",
"assets/assets/back2.png": "cf663b2c293f7a8cc95c7d43a976983f",
"assets/assets/back3.png": "d16ac31fa9bcb1c334ea75316c7997fb",
"assets/assets/back1.png": "377ed01518f82fe036fbd8e8a46e69d0",
"assets/assets/bunjee.jpeg": "18e406682c29494f6894da5d56fb16dd",
"assets/assets/water%2520sports.jpeg": "913e08982a01b3a7febe507e50173d58",
"assets/assets/logo.png": "77537a292b6368360721486d2032abec",
"assets/assets/bike.jpeg": "5aadee66dbf2c6a02b275e7ba5136dc4",
"assets/assets/back4.png": "ad2b36439dbaf37c6833b3f0910177f2",
"assets/assets/insta-logo.png": "3ab9e7421e5c2f5c99cee0c470a95146",
"assets/assets/4.png": "5c5a13bb5abf5551f4042e0deee78802",
"assets/assets/fb-logo.png": "3d0ddc4485da120fdda9bd558bf99e0c",
"assets/assets/5.png": "cd22e9b1fa4ffc6fc88e047c5bbb13fc",
"assets/assets/7.png": "45062c66de41ad49d359faba1a08178c",
"assets/assets/kasol.jpeg": "536eb9e02c7abba6c96ce706bbd964f1",
"assets/assets/6.png": "da9ea1863dfd714b641ccaaeaea8e671",
"assets/assets/2.png": "f531bbe875c0c93edfdb609b1e56db4a",
"assets/assets/3.png": "87e9d9ed4f8b0e6f8a165e4b8dba1f9a",
"assets/assets/keralabike.jpeg": "30081b61df8aa7c587f68bbb3fcb5e8b",
"assets/assets/trek2.jpeg": "6b26128f5a1861aca926231ca473a585",
"assets/assets/mumbai.png": "8ca1a70aac7a58093b4f0ca2ea461615",
"assets/assets/1.png": "d4ad94d25609b535c9063c58921ac082",
"assets/assets/delhi.png": "7a2051ec03269643be4117d548ac456b",
"assets/assets/bg.png": "b77060b1023a7c56a4fdcbe88b9be09d",
"assets/assets/travel-icon-bg.jpeg": "1748d7f78675855e13e368ac7cdb4f7c",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
