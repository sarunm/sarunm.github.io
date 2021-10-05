'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9bd905ec6f4c2a0c9bea3cacbb910e39",
".git/config": "3426338b1992f90a8d068ef3722cb386",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d70d85b34ce23c3b0819c88b78becc22",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9eda59ef796729ba37545a77f91239f0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8067bcbc1f661bf4cd470eba99e19882",
".git/logs/refs/heads/main": "2d84bf84852f338e2a9ed45564300584",
".git/logs/refs/remotes/origin/main": "7991801dc5ff74f7a66fcf839e52546c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0f/b4643e05d84a93d8e3526cb8c96f823940a69e": "180570e7190c49ab472915c49d2937f4",
".git/objects/10/ce5bd5f227771266b3914db33e6059cf41de98": "9001b01aece64baa3b2410fa2abfa43a",
".git/objects/1b/b73400b4e6213fe8f7c147af77a8e14b154cd8": "9cd669c2e47d156949f48a796c7158b3",
".git/objects/22/4738909d9220040ce0bcb01daeb85743b941e1": "2ee0289a1aeb5b500d45bf2fa8f8d5f0",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/31/4c99ec9f9dd36e28574e2602143a63f0451edb": "7663091e2c45aef097deac1e87bca01f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/5402aaafb3ae883022df71fbf7055fa55d76e5": "1fba739d33bc3b326394c18669285abb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/919edd93a1b52e7fbbd939e8219641797f9d06": "29076db64cfd04f79112f02056f28dfa",
".git/objects/4b/fae849646833f5bd6b664926e9b157d7cb56b3": "e1dd8fdb0cccf0382be2afbd25798810",
".git/objects/54/0720c99263105bd9163838bcd312a122de4073": "dbe779052200a5b5b2c170dc1ddfb44a",
".git/objects/5a/57d0a8b5744cd55028548c41c1575793655e6a": "cda8dd28c8a7f05b809fbf51110c66df",
".git/objects/5b/2605ff125b0525152c65d97c9c2e2799be832d": "f4f67c6d538eb5b00da862f02836a633",
".git/objects/5b/4224114b680119982565912d141abf1fa469bc": "02c0efa87334de98c567d52accb2ed6f",
".git/objects/5b/72b57dd93efff64797aafd54e8744a2fd1d3a6": "e5c930e7f76463eb313f0d0ec0a6936a",
".git/objects/67/29866b551aa8a998d677308cd2c2e82ebaf20f": "c5dbe48fba8bec342d6b9edad9feafa9",
".git/objects/75/fe70644be7c44c78c1a9286779488c7f3c8ca8": "64cc66276e10b77524af92a093ae18e4",
".git/objects/78/e42e550323d61c4336b6e7c40376edcdb05915": "0a691580e6dd47122e205c3d8f182c0e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d70dc55636c83471ecc45364b3907cf3339ca0": "fc69fcc8b4051185428bbfc1193803cb",
".git/objects/7d/611d71334c28135db3bf224cedc565723aa848": "08d6f3a4e2d4456a9dad258c6ef406fd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/2d1f46aab2c17f336823e461bd4fe995302055": "215acec17d097d573c26303e6dec67f9",
".git/objects/8f/3c8f536465c42ebf8485eea9db712c5347e29b": "7374617125688f70fcc75837a8e38556",
".git/objects/92/045078874d2f339cda3c4950a2ce27ed0cb0a8": "86311406c0bd9c6185fccb06b3e3cab4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/e693b767415f9ba2eba0df8ffb28aeed476ffd": "7e62e9507035626d33ed2cbe0209a796",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/184fed4f9b0cc1baf4a5766b9bad720f96118a": "36f017359589dbf0d2dd8715e90302de",
".git/objects/be/31f5cb9d6867d5bb22c5f9948237558688094c": "9ba57adbd3df981c9fc3df0f73bcaf98",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/d0/35fcea70a2e4ffcefe147850c8fd86351e453b": "a0e74824cb86f9555eb0254f0f1bf3a4",
".git/objects/d4/4350a237e14c46265297bc714cbbc5db9491b5": "aa582b660ea842b2589cea373bfc5b3a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/dfda79573b5b240f0f8cc70c520d1ae7723d16": "7a88aab35800e7e22961729c505629be",
".git/objects/d7/964712aff76b7b8bb84261c67ddd0f8838086b": "fd7642377503220eb31f475c9cd7dcc6",
".git/objects/db/0f1c82699d50265eb37b730d1041cf3342fb8e": "85bceaacebeb94983240763f771904db",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4b5f1d159d192aa8fba059a96f9fad581a1464": "4b8bc6af4ccbaa71fc42d40d151c100a",
".git/refs/heads/main": "0609a7824c408816592a5a97b56dbc7c",
".git/refs/remotes/origin/main": "0609a7824c408816592a5a97b56dbc7c",
"assets/AssetManifest.json": "be3e99a5c463444b6dfe016aa5c653c1",
"assets/assets/images/programming.png": "aed955af6ea28fbe6a3515a8f8c811b4",
"assets/assets/images/project.png": "aff6da52f3194bf5c84bd53ede3f2397",
"assets/assets/images/routine.png": "e3f8680b185cff2f1226537fd406ca38",
"assets/assets/images/server.png": "31cc9bc09e9d1fe9f79b45e08bb61777",
"assets/assets/tasks/meeting_task.jfif": "34003a3d8c502531c375e76e27f41ed4",
"assets/assets/tasks/monitor_task.jpg": "e82db19dcdd2e8a3f4efcf55c26ba3f5",
"assets/assets/tasks/program_task.png": "149375f03a0284a804be23ed0677181a",
"assets/assets/tasks/support_task.png": "5f6d91a43424371348fbdff73be9d8bf",
"assets/assets/tasks/training_task.png": "633ad2d32fc7e4bdd30e62800a61a585",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1d2828d432db3c51f721a4db2ea3f2e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c67fda17c6f03ff37ed871e57694d8cd",
"/": "c67fda17c6f03ff37ed871e57694d8cd",
"main.dart.js": "51fcca3f05c8e41bd14e0eebb358e4f9",
"manifest.json": "8bfa4f4ec54d7f748c6310b0cc3f7d31",
"README.md": "90e68b74a385941abf491c25263f28ca",
"version.json": "3a47eb3873ccecb06d8f5c646cc7e398"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
