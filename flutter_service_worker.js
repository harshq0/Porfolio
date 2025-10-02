'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a87ea8a6180032b7f7b362459658f7b5",
"assets/AssetManifest.bin.json": "1325c79b918dfce9699c3a3fd86e2fd6",
"assets/AssetManifest.json": "51466e9700bfe78004906c90d63d7412",
"assets/assets/animation/background.riv": "24ae6755fff25da5f43d0a52c3e7d1ef",
"assets/assets/font/Inconsolata-Black.ttf": "4417afbbc9bad5ef3c74e15c6086b67e",
"assets/assets/font/Inconsolata-Bold.ttf": "d768597c62ee9efd0517f60d5ddc2046",
"assets/assets/font/Inconsolata-ExtraBold.ttf": "41968630130ced063b6c0a5aec2b4a3f",
"assets/assets/font/Inconsolata-ExtraLight.ttf": "958f54997ed0942e4627f1aea057adca",
"assets/assets/font/Inconsolata-Medium.ttf": "93496f1bcf25b82963cbfb5a3d214897",
"assets/assets/font/Inconsolata-Regular.ttf": "14fccbfe26fef60fbf1ae4920d1f0d10",
"assets/assets/font/Inconsolata-SemiBold.ttf": "e386378a43cd7098ecedaaa49fc5dda1",
"assets/assets/font/PlusJakartaSans-Bold.ttf": "59a9e97890b6c8cd21a3d308db3f3bd1",
"assets/assets/font/PlusJakartaSans-ExtraBold.ttf": "1141201511d14f317880d655c443bc6d",
"assets/assets/font/PlusJakartaSans-Italic.ttf": "04192dd31f54a5f7c73a7b2520ed3d1a",
"assets/assets/font/PlusJakartaSans-Medium.ttf": "955abb0439429d915dec8786b866e2db",
"assets/assets/font/PlusJakartaSans-Regular.ttf": "f90839a6a15f7e65f9e2b63d6eb9ca24",
"assets/assets/font/PlusJakartaSans-SemiBold.ttf": "a619c92f2eb6f30a052eb7a6cf9aa18b",
"assets/assets/font/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/font/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/font/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/font/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/font/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/font/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/font/Preahvihear-Regular.ttf": "b728ff1cdead5239b67535d2073baf70",
"assets/assets/png/api-image.png": "fa16f1a99cebd328cdbd399e9d6077d0",
"assets/assets/png/arrow-pointer.png": "e772d6fe7bfb20b556af20255f3a189b",
"assets/assets/png/arrow_point.png": "38341db43491b8620957cb2556bfd30a",
"assets/assets/png/college-image.png": "b2d484f8ffba42c1be96ec7678696fce",
"assets/assets/png/company-image.png": "e53766cb4d42fa7301176978c3547339",
"assets/assets/png/dart-logo.png": "0129c310c9450922eb76803c15a380a1",
"assets/assets/png/firebase-logo.png": "5b49c690277df66cbdbd7ceaff2e6527",
"assets/assets/png/flutter-logo.png": "1cc6aec9f2077fdfbeabe834ebb7d4a4",
"assets/assets/png/flutter.png": "6e4c2d3e9d39febc2073535a8a69313b",
"assets/assets/png/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/png/home.png": "ab32dc0c5e2c6111a8a52bf7adf9655d",
"assets/assets/png/linkedin.png": "1a9291b12d642cb2fa8aa8fbef5c7be1",
"assets/assets/png/mail.png": "2c1582f25ec24709f0b5585fc0639144",
"assets/assets/png/notification-image.png": "2517adcd3411a2eb67d22ed99f38b552",
"assets/assets/png/optimize-image.png": "894ef5581447758526e7d1c79709ff0f",
"assets/assets/png/phone.png": "9e299bb392428812cffbdadaf9272b15",
"assets/assets/png/profile.jpg": "036e7473adc93abc6e44426ea5bad179",
"assets/assets/png/responsive-image.png": "9dac0dae06e5a0e7bf368ed23cc02664",
"assets/assets/png/resume.png": "4c7640bfacd85b249d2af0bd36c488ab",
"assets/assets/png/technologies.png": "6021480b0cdc7d46568e1d91c3a0727b",
"assets/assets/png/zetstron.png": "995bed3f4acef743d568359f7060332c",
"assets/FontManifest.json": "a2e8532fc01224061fd6b4b1c0158eb9",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "ffa03db5827e837d63acb8e86f0b80db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "2237837a024007073b728864adf14690",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c108e7d80720acd666627cdf0c0bd18a",
"/": "c108e7d80720acd666627cdf0c0bd18a",
"main.dart.js": "c5dd7b6a8b0e375ede3a43c9da5c770c",
"manifest.json": "81611868aa7b0ec59473a85fff65f2c4",
"version.json": "cc0fe840906cab5409901254da7c056e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
