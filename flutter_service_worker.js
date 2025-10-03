'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "93f819b9cf26b4ba7522c3bdfd3dd6a9",
"version.json": "3c3284594d39c4e711993a7b4abd3c64",
"index.html": "eb0597bdb160a8518951dc56c213e1e7",
"/": "eb0597bdb160a8518951dc56c213e1e7",
"main.dart.js": "cc7887759c718966950ae368909fbd64",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "05d4474b810f41c5f168711ead408f3c",
".git/config": "3ced6583f5490c6afda8a27bbce233d7",
".git/objects/61/ef7117d48ae7439dff417ca51181f37827dfaa": "e30f706a35f0cae4e4eb426987e1574b",
".git/objects/95/a4e1313d6328ce814021c413230251daa6d8a0": "cb0829596c602bd041e6a7bdcd52e3cf",
".git/objects/57/1496cb5877690fed2368b97170fa2a8ac42a5a": "f8f689cb0d94ab1fdcb109a144bcbca6",
".git/objects/03/dee794d5f3538759af02f1afb90dd9e2c3f2d7": "cc7e26c0bc0c13f11bfc1d58ace3fac5",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/6a/b10be0af910c71e30fe9e7e0d5a3191df46d77": "73d5e7c0ac794ac451fc205aece42e2a",
".git/objects/69/2b76c4dd3d1266950f1e0fa9ca261ccad37bc9": "d1adaa1deced2b5bd115c5a849e9ef88",
".git/objects/69/fbc95efc1180ab930e26559fec693262353021": "998ccf8621c9fd2f3f88aa5ca3695622",
".git/objects/56/5bbdab08fb6841c614b7de34313974e328b796": "de57ab25ded1aafa3f8c42243401abfa",
".git/objects/67/ab5f16c9a009cbbd78062bfc2e924c3cac9136": "d83edfdcc3ad430e0f0f06463dd97e7d",
".git/objects/67/341063b7c8259fa3b41d4b1cebe8bd588dc8f7": "52d17c0e397a0a3ee3dde9dc53e343f6",
".git/objects/9d/a5164932734d16cfcaf33390c30fcdc2718196": "3aa5051fe73ca5a7f27c3cf6f7db76f2",
".git/objects/ac/0f908b9c9c73da558b45d65cc5c6094874d3e8": "36f70284c45d845ee774c46e7288afe5",
".git/objects/bb/67d13e9fc603af00ccc50d3c1bab5c8dfd03ae": "54d69c98ae81cb05001a64364e6a13cf",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/243c16d86c87bbf0124a564f58deed637e13a4": "89bb019cfef81169df855887e0cd93d3",
".git/objects/da/d89700fef1d7de8c03d61f7068691a9d36ea4b": "82e7c5b4cd5ace5f2ef70cde4b47070c",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/ab/14b5db40bf88acd5c974b9da94faef7f95bf50": "88855a07c19dd5dcae742031dddd78de",
".git/objects/f3/e7164ac68f06cbfadc382c4585dd5f7f0fcfb1": "055cbdf5815550193c94c72833c051c8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a80a98c5b4622e53b60341f8e269b342444711": "414e87da965e8d1009688276ebc96952",
".git/objects/eb/93f46024e87dd1df6da29a046586eaf4e42bb7": "47e58fc8c4f82c3352249ba3c070686f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fb/b3a7581b00b20235e39f7494ac02652853994e": "b77b404c73cbf0a713de9a663c477217",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c1/da1b4541d6b14d9dcd104ec606549721bd5a79": "c116b26949e5e0f35d5f6c084f27f00f",
".git/objects/ec/6addb98a31fd6aa0ac466e671b5a31cc8436fd": "34db23456d30a6357b61c106794102dd",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/1a/73ee8c9bf540358a45667fd317cfcd8a65a80f": "9a04240b28da00d6716cab02539d3d1f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/f7ec3134a540c75d57c376ffd049620cc9a7ad": "913993f7a5a4d3e98158569fc9410641",
".git/objects/21/35c37e6b31b4032ec605793a39b256b8fb542f": "a7a262eaebbadf63d78699702fcb4f60",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/81/2e3f04466846102cda38fec68d03fbe1b8e42f": "47f7c30a3e893cdcd710698291f1c825",
".git/objects/72/a9fbb619c3b2a8179fe262977c6a37867fd842": "8433b5670a3640320257c866ac7bfd68",
".git/objects/2a/f52f7086474a346d7a01fa62b34058a9fc1bd1": "dcbed7f511441a34f48ec35649250017",
".git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/9a/24566bdf1429d19ce784562d972b959442a32e": "4f6d3087dfa581ab34c4c4b0ff001892",
".git/objects/65/5c8d5dd6684800f20049c8d57e6aeb5cfc75f0": "9b2527bb79e68e699724606c713447f6",
".git/objects/65/7b45f83efe7cdeffd06113ca9bfe0559505c38": "2a3680bdc52b865719c9702b7a2b4c58",
".git/objects/96/bfecf4c10b660f997fce48eca78ef4297b6918": "8a5b864612881251f126f2366ec9a066",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/6d/e36a152e34d86c8c0709d43a9c4d12af7a08b0": "67857fbb321914910120ccc4d8f0b7c5",
".git/objects/39/6035fde3fd3d23e15fb587b6fa03a0fc603104": "4ab813ab458a97025a9a31ad36604b80",
".git/objects/63/8a56514afe4d2494d1037ab2cf42ddea54932e": "884706687026f04b0d2b6861c681d4e6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/170e80b9201727fcc67e318655eac9d2d35fa1": "aa0dffa6f707036f6daf85b7257d2927",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/dc/64bdf3c1dc396177aa7ef7c8df43d7b0c6b677": "61bd2774f62af76e3c79a9300252a9b2",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/a9/af337cd4491459d81f8feea480f12529e42d31": "445d9ac8acd627a771f172625a7b5a7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/ac02d714c3623614c6df65451831ce3f28e5cc": "4413929bbf5a14feaa54a65a3a1212b2",
".git/objects/a8/221fd82f8811bff0ae61649a6b3520c6785c22": "52112b100004104b53e6e0721b0346e7",
".git/objects/b0/46885571af24ffc56bd9086a54d59460a18097": "30f3039e19541bd3d3c8db6c361d24ea",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/070e40f56ff0d6267c15e6762e8460153882b0": "cddc18646937cd599b9fdbb76ea22bed",
".git/objects/a1/ce03c0381459fe83f639d060f2bfa1572b09cd": "e55695d2ae158e0ae454d6ce491d65c5",
".git/objects/a1/bbc218f0ed58ac59fbf9db729d3186e38eac1c": "c85b42c8a963c28d585473ce520ede14",
".git/objects/ef/019ed309b15ea7e657f184c04a249909db3d34": "d0e2657d080026c8ad4038c05dc0c667",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/f0/7ad0ef158574123479d9558435d64fa5c43040": "b99f840a8d9f2fab25a6f5b1aec47205",
".git/objects/ff/6d462d5954f584fe63fec7000a7bf5545ce5e5": "a4da779355fe3238b92e8323f13d8d20",
".git/objects/ff/b1a39a0ea7f815d5e496f183f3a5a169d5d54c": "75aa5e437886b39415cb595c0f6f331a",
".git/objects/c2/302a533ed84be2003c063ed2b74374590df4f7": "53459e7f9f9faefa64e6658fc34905dc",
".git/objects/f6/7ea50b22e7941a6b859f6612866ceee62a678c": "fc24d7e43ddde4e4c2b9818bc3afd3c8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/4980795ad0d292cf975cfa19babacdd80ee09c": "ead9bd33fa9beb2419a816eb7d82e498",
".git/objects/e0/6d80f13fee30f46e032c4bcd11f6d4b7ceb559": "4205048aff4d7da1a385339c86f03bcc",
".git/objects/41/f326d51c2854107a0d9a609055dbe7d8fbdf1d": "68b6a76a5e6ccdfd41ab42be16c2c56b",
".git/objects/48/1bcdb1e91ce3b0836f848f10247baec719459f": "ea5defd185df678fcda99a8ed5c8f74a",
".git/objects/1e/18af74071542361da80f8f9c13e7850ec68409": "76ed8cb344cd63df4906bfc76dd906cb",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/4f/667f3a2a804612932af2fbd3d2e2f9a40707ac": "3647b18d841901600656ddfdb36fa44b",
".git/objects/8c/8b5e705d6608e74c9b88d134698157ce8a0ec9": "9c44a16af2765cd0f13300b6bc44c092",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/13/e284f5641e2a19f0cbe3e514dcb8147e668b84": "fd07641b768985dff4c31248071ab15a",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/14/0d57a0f36afb588c4c4c1180bfa7646bfb6268": "9e3224ab7de0781120baae238032d1ba",
".git/objects/8e/a6b8a827851e11d15295765d75d9f09e7e5783": "ff980fed3f839e500224fab328d8e981",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "11400ad262930c0a80354584efb44e09",
".git/logs/refs/heads/main": "11400ad262930c0a80354584efb44e09",
".git/logs/refs/remotes/origin/main": "4c555b0a467c4c9783b5ae298b04f454",
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
".git/refs/heads/main": "f225519c764ec6fb90b91c8bd828ad99",
".git/refs/remotes/origin/main": "f225519c764ec6fb90b91c8bd828ad99",
".git/index": "ac1e1f61345c2b58c716d1da964d6ddb",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
"assets/AssetManifest.json": "7b2e2375d8564db7a1d048fcf6b2a47c",
"assets/NOTICES": "513832a9a3009380878ee75038094d8d",
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
