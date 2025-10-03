'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "676d4deb712efbf779f33c6e3b17e341",
"version.json": "3c3284594d39c4e711993a7b4abd3c64",
"index.html": "35a71eb72fa7c20d80755e91730fde30",
"/": "35a71eb72fa7c20d80755e91730fde30",
"main.dart.js": "ab3e808d7c22321353463137a189751e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-193.png": "68f60cb274556f8b5a6f218179266706",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "05d4474b810f41c5f168711ead408f3c",
".git/ORIG_HEAD": "5aacc8d99d85240106ad5fdb385d0a18",
".git/config": "3ced6583f5490c6afda8a27bbce233d7",
".git/objects/59/44a49f789472d87a0eeb282dac6829b11deeca": "ae8e7b2ef0fbb85fa6d6f6e3174d4746",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/04/aefa45404d64c7eecbef903ca501237455ac6d": "02557968f6db0c27b83ab5023111a6c7",
".git/objects/02/e93d75603f78c19dd21a55b4aa242a3277dd4d": "597d99798ff228242fcb9b7f4b038ead",
".git/objects/ac/6ff99c8b6d1ff9a17740779c06e7b10528a385": "006c6ae704c698514fd2172f9c5ba87e",
".git/objects/eb/839d73509ef9ebe5e04a96bfeb90af3a9820a4": "c2bb2575f3f7b59b44802f7ce7b65ec5",
".git/objects/e3/dfcf3a278b561748f68ea50ee06027b44d5baf": "06f606f613cf9eb4b3c7a9cae0ef922d",
".git/objects/e3/6ef4e910de0dca3df73c02ce3a5fae22125ab2": "72f1641354fa1988350f61a63480beef",
".git/objects/27/ab691f7de24b90cc6f814bbc78ec02776a72e3": "54f3294a2efc4d07e5f1ae09fdf13d16",
".git/objects/pack/pack-52042cab3485ed8f4d4cd44a20e4e8989a7cf18a.rev": "7668a168e78f62acc5ec0a4835430c57",
".git/objects/pack/pack-52042cab3485ed8f4d4cd44a20e4e8989a7cf18a.pack": "bd2ab166d987c1bcf46b2e5d6f79ca23",
".git/objects/pack/pack-52042cab3485ed8f4d4cd44a20e4e8989a7cf18a.idx": "69dffd2d97d7a9b876122571dd5b67b2",
".git/objects/29/c26f929c5627e5cc9bae84610f0c89de878e5c": "2a92fb9015773dd1bbe240a637d8dcbc",
".git/objects/89/8ec7c26eb9ee0081c677916a6fae6bb3565a9c": "417e1d1f8ac61cb9f45d35045522a117",
".git/objects/26/b2f13681a65efc3295266a10220c20d89bc793": "87bc02b2f3110c7d66935edfac72ce96",
".git/objects/55/3bed449b0e260df6fd1e39dda548f7749a4f39": "e7718ce5fd0ae74079dbbf8f36eb14ac",
".git/objects/bf/e8cae50fba0a6c41b1ff2bcc71f5d3e568b32b": "5e0060ac4ed525b666f41576c75e008d",
".git/objects/b6/2e6fea56528aed0e02e20fbc653e3d6bc0fd2c": "ae876dfcd0e82d3a91b787de0f51865a",
".git/objects/d2/73baac556d813044ffb8ea81d753ddc72b211c": "fe953adff0ee8d5154bc7588cb47c318",
".git/objects/d2/01146ad50b77ae35f6fb261a6c397b3925be71": "a55fd585d0927cec766cc186f51c21b9",
".git/objects/c5/f5544f19a028f55cd4fde7670cf9c931dd99d1": "c3abd2f1ecb05fa2841d9f7b5770a4b3",
".git/objects/41/77616561ee381b456375be763df37764eb10d9": "815600e8ceaa5ac55d4f5c8797d3012a",
".git/objects/41/cb144300ed187cd5e3a6b4db23fefa7c13ffbe": "47b9741abed3b5456b1ea08bc25e8bb3",
".git/objects/4a/bf04b2e8e539861cf4a95565495614c95771e5": "0140fcc20a1a32df1df1cd94ca08ae4b",
".git/objects/4a/9fae885ee3e6ee124deb8ecb3c7560f80265cc": "5c74de5593ed518305186275c21d36ea",
".git/objects/24/b233aef4b05ee774eb9827b822bd1c173ad041": "69b8a8c987c7dbd79ad5affb184ad330",
".git/objects/8d/fd8126a4658b93fa6f63af42d1fc18ec04c1db": "7f724ea4aa48b5b2d0049eb914f2f63b",
".git/objects/8c/3c46028712c8edb878d68afe08331003f1a209": "3eb1c814f952a3035f539009a0d9ec0d",
".git/objects/1c/3fd6ff51f762ffd178ef1d034586c4f24fa866": "f9c94d7d4ed94eb71f912b63df9be77c",
".git/objects/47/a5d362a5b74a269e4380ac3b4e25d15284f5e4": "2c38f02bed070004eda89b1129ebe1a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2401de08e4747611dd998de3c635f41b",
".git/logs/refs/heads/main": "2401de08e4747611dd998de3c635f41b",
".git/logs/refs/remotes/origin/HEAD": "08644dbb5e48efd913e0c7b3f5ebfd82",
".git/logs/refs/remotes/origin/main": "40a5806b12579f0b5726f43501dbe07f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "060c39f2e0b6157d497d2df661a8d2b4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "060c39f2e0b6157d497d2df661a8d2b4",
".git/index": "170c99d3aed46fc908ec7fe80cf8a89e",
".git/COMMIT_EDITMSG": "0914d1db81a27ad127502970a502a0d7",
".git/FETCH_HEAD": "4c98987f4bef8d09a94c35ec5dbf7617",
"assets/AssetManifest.json": "7b2e2375d8564db7a1d048fcf6b2a47c",
"assets/NOTICES": "ac420276ccc2bdad4a0e568c50eb30a6",
"assets/FontManifest.json": "7ea742bd8119c9925819772706b82264",
"assets/AssetManifest.bin.json": "b15b0d18650836e5a9ad2b63c28d89d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/lib/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/lib/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/lib/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/lib/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/lib/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/lib/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/lib/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/lib/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/lib/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/lib/assets/DEF.svg": "2e5b883507b611994a540b4948faf81f",
"assets/lib/assets/app-drawer-logo.png": "7ce32290f06d305cd88122b708f7b572",
"assets/lib/assets/MS.svg": "f1f78040a001aadac96f4a091cdd3ee7",
"assets/lib/assets/igitemplate.xlsx": "3bcf8183b908a1d244c138fb49166183",
"assets/lib/assets/P.svg": "8d72fbe1a46b862b8c1881d52994e442",
"assets/lib/assets/NP.svg": "315baedc3f521af8a0c6ddc990c4e461",
"assets/lib/assets/E.svg": "cb9a310c3de2446e84c20e2ddaad86ec",
"assets/lib/assets/R.svg": "21de6e470a93bd256a76e2a23a38a3f8",
"assets/lib/assets/md-logo.png": "8ec98bd63b18875eb3c2d9b7825040b6",
"assets/lib/assets/PS.svg": "255be78544890fe50a43b0c76c5e0925",
"assets/AssetManifest.bin": "33a0c3e3d07d5461daeb2bbe257e5fc9",
"assets/fonts/MaterialIcons-Regular.otf": "7e1fe78d0c552a982f021316bcdc022c",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
