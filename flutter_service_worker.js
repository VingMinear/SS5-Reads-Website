'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c1897511617a1aa46c71adb518627c97",
"assets/AssetManifest.bin.json": "cb0e55eafd54193a925e7b3beed659dd",
"assets/AssetManifest.json": "d9e639efc8d9c462d6aa8389f15a577a",
"assets/assets/bg_aboutus.jfif": "04f83e01ae2300ddaf50c24935168c9e",
"assets/assets/bg_contactus.jfif": "bcedb2da225220482e043233f9950342",
"assets/assets/fonts/Urbanist-Bold.ttf": "fc06bc208de15311e0038ccd07f8ca5c",
"assets/assets/fonts/Urbanist-Medium.ttf": "d9e95761ab0191f3f5624332fcdad4ae",
"assets/assets/fonts/Urbanist-Regular.ttf": "b1b19bff5654cd5bb99b5e71d3f7aa30",
"assets/assets/icons/back@2x.png": "507c510ee2f0a9ec93c8ddd20c2025f6",
"assets/assets/icons/bag.png": "cb5a9a3d547d719102f2e3c61b0a096f",
"assets/assets/icons/bold/heart@2x.png": "b91c311446e530793eb9c773eec3e5c7",
"assets/assets/icons/cash.png": "616aae045835ede4579b2e7b1eec2dea",
"assets/assets/icons/category_chair@2x.png": "fc8ee50930dd707e65ba0bd45b92bf42",
"assets/assets/icons/category_cupboard@2x.png": "61aaffd1259216660d8ab30ee0b9f207",
"assets/assets/icons/category_kitchen@2x.png": "78e575b3c1c87a2d240f425520bbaa5e",
"assets/assets/icons/category_lamp@2x.png": "a565c7711cbe779159a7b9a6861674e9",
"assets/assets/icons/category_others@2x.png": "7d55c6555ba1e988e6a34c1de749ea67",
"assets/assets/icons/category_sofa@2x.png": "4125d4b6de4d355163c0f70bf1551936",
"assets/assets/icons/category_table@2x.png": "f7a986ff2fcd64456415e1ea3dc0d1f1",
"assets/assets/icons/category_vase@2x.png": "f8cda446812f9c0462247f2ceb6cae06",
"assets/assets/icons/collected@2x.png": "9edf412bd1f7dd7ec69c1e504de96042",
"assets/assets/icons/contactus.jpg": "6ffd10385faa8a4bbc28dd660b11d074",
"assets/assets/icons/credit.png": "3cf6c0c5d1e3601c4827d1d526a39c0c",
"assets/assets/icons/detail/bag@2x.png": "0cdfa6333be4c45d71e67eccc5a9ce81",
"assets/assets/icons/detail/minus@2x.png": "e575071209c67b339c3e821b5ab1fb1b",
"assets/assets/icons/detail/plus@2x.png": "907c3d9241272995a84bb7c84be4786a",
"assets/assets/icons/dress.png": "1dc3e35bc966b390757a8691a2b47424",
"assets/assets/icons/home/category.svg": "4f263c7df1b1e626052291a3d8843b1c",
"assets/assets/icons/home/horizontal_divider.svg": "ed7b1aff8cee383e79bcba8481c38260",
"assets/assets/icons/home/ic_cart.svg": "11e185b81cabae45a08dd97d424db5a3",
"assets/assets/icons/home/ic_logout.svg": "069c63d113f11846754fc93e4a6ceb90",
"assets/assets/icons/home/ic_menu.svg": "03fe8059e5445caf88db2633847cccac",
"assets/assets/icons/home/ic_noti.svg": "ca5d9a842300e8eac233c04c6e221390",
"assets/assets/icons/home/ic_order.svg": "83aa6eda682847ae8c0be6bce096f188",
"assets/assets/icons/home/ic_translate.svg": "71971a152a9c895a2dae1cf37b9ab1be",
"assets/assets/icons/home/ic_wallet.svg": "bc7de48cd423458592fec91dada69bd0",
"assets/assets/icons/home/menu.png": "cd7ed1f230e63a0b43faa5b748746181",
"assets/assets/icons/home/receipt-2.svg": "032de01b551409c5a23cdff1a581703d",
"assets/assets/icons/home/vertical_divider.svg": "cfeaed4540f833d3f243e6a73f9733fa",
"assets/assets/icons/home/wallet-money.svg": "569c304f5fb4f20f3ebe029d06c461e2",
"assets/assets/icons/ic_add.svg": "9a4e7b14d44f0301aa485306c0c1314e",
"assets/assets/icons/ic_eye.svg": "91d00849f1a1ea41398c384cda4ae9d5",
"assets/assets/icons/ic_eye_close.svg": "e8fd3a5c70fce214eb9a0728f0bd6cf3",
"assets/assets/icons/ic_mail.svg": "66a0ccd8a47aeb3975dd642164f3626c",
"assets/assets/icons/ic_ph.svg": "b847c0de45d95307556e4f957bc01863",
"assets/assets/icons/ic_success.svg": "73c3c09f87877a4540d30ee544c9bf02",
"assets/assets/icons/ic_telegram.svg": "c5d6e68fbd8e2997e5e4ee3275fb5713",
"assets/assets/icons/ic_user.svg": "786bbc9d00af02b5c555c513b1f0509a",
"assets/assets/icons/img_forget_pwd.png": "9a0b8ef15e1ee1804ec020b86e0e99ec",
"assets/assets/icons/light/filter@2x.png": "c1bee2fe4b829b88982669fda6001d84",
"assets/assets/icons/light/heart@2x.png": "15be54d4188d2270c1cc3b034b926fc8",
"assets/assets/icons/light/search@2x.png": "18970f83213469871a7ea7398d0d7543",
"assets/assets/icons/map.png": "7c751d5f38b61ea20a9aaf63372a89f2",
"assets/assets/icons/menubar.svg": "21fec5826e39d8781f17f6707d457040",
"assets/assets/icons/money.svg": "637bf5492313b855cdacb9baa0d83a1d",
"assets/assets/icons/notification.png": "db624c661eb870af2e26f64f7e306e1e",
"assets/assets/icons/not_collected@2x.png": "1d9b4647c53979f0adc4ae4055115acd",
"assets/assets/icons/order/ic_card.svg": "89a0c25184ae59189229617ac7d58f33",
"assets/assets/icons/order/ic_checked.svg": "6884b72460106428bfb3b5e0cb10f0d0",
"assets/assets/icons/order/ic_check_no_fill.svg": "2cab7bc60a70f20b346743107d55ab42",
"assets/assets/icons/order/ic_clear.svg": "020c413fc9512f088c4392547892fbfc",
"assets/assets/icons/order/ic_delete.svg": "35c416d41526e2d583e35d1eaad0c8cd",
"assets/assets/icons/order/ic_doc.svg": "f7cd59d5cce3936e6aa8df6f499f6af4",
"assets/assets/icons/order/ic_edit.svg": "8c8092f3077af352220d7222f111151d",
"assets/assets/icons/order/ic_grid.svg": "45b6735527af4b7d0c7c122097b3fc81",
"assets/assets/icons/order/ic_img_empty.png": "1f876e0ed2479038c4c657c888f5701e",
"assets/assets/icons/order/ic_list.svg": "e22faf02f83f40a33ec0e92b1a16cfe3",
"assets/assets/icons/order/ic_map.svg": "53ce34c612a79a23fd8eb24230b93688",
"assets/assets/icons/order/ic_order.svg": "3995edf79fe7a39c4b034a2dc86aa724",
"assets/assets/icons/order/ic_pen.svg": "229f3ff9607daba6d614fe408110bf50",
"assets/assets/icons/order/ic_send.svg": "95c59ad01d1f7bf7492749ecab008223",
"assets/assets/icons/order/ic_success.svg": "c7869671418fcfc6b05aebcbb3a35cdf",
"assets/assets/icons/order/ic_truck.svg": "f757233533aba8ba4da37c10e87bc32e",
"assets/assets/icons/order/ic_unsucess.svg": "12b63a67c263213dfd4344942c0c3017",
"assets/assets/icons/pin.png": "44f0b6fa1c0b9aac94114e7235e87744",
"assets/assets/icons/products/book_case@2x.png": "fb770d64a25d0f32d55ea4bde27de880",
"assets/assets/icons/products/class_package@2x.png": "4263431c941e0ec694bc05713fdc4e8a",
"assets/assets/icons/products/detail_sofa.png": "95df08eec99f285e86d235b5acabea41",
"assets/assets/icons/products/foam_padded_chair@2x.png": "e8dd207ecab03abc939402dc2fcc2a00",
"assets/assets/icons/products/lamp.png": "10fff2d86f145e7a2237c7897b3116fa",
"assets/assets/icons/products/plastic_chair@2x.png": "c11f15b543148d3e335f02ee21b5e547",
"assets/assets/icons/products/shiny_chair.png": "b3ff008402edffc3b7f3ceb8f43b9284",
"assets/assets/icons/products/sofa.png": "abccc71805c7e0edbb544f77d0f4e3d1",
"assets/assets/icons/products/wooden_chairs.png": "5a2e186c61ea5c2595cc74c1d2f68b15",
"assets/assets/icons/profile/arrow_right@2x.png": "387f4d101fdef6f00d88699036ca5574",
"assets/assets/icons/profile/edit_square@2x.png": "4c521d90ff0ccbc53603f186efb8871e",
"assets/assets/icons/profile/info_square@2x.png": "3e17dc5759d23744f1c1c351f66ba8b6",
"assets/assets/icons/profile/location@2x.png": "2332a618990a7b16632063549e5ea00e",
"assets/assets/icons/profile/lock@2x.png": "e71b9e146869874ec8237e0f30a3d961",
"assets/assets/icons/profile/logo@2x.png": "1127d485d4b0f70a9092d86bfe1c5df7",
"assets/assets/icons/profile/logout@2x.png": "952ac2e9c5f6cfb371295982cae26014",
"assets/assets/icons/profile/more_circle@2x.png": "8ee16a85574c8fcb0a7573ef88a2b3b7",
"assets/assets/icons/profile/notification@2x.png": "98f03cd6392b93dda4cea506cb3cd423",
"assets/assets/icons/profile/order.png": "eaf633081e1024cbb4c27ed3ee36e11a",
"assets/assets/icons/profile/profile@2x.png": "772a239c1501738550c57227fba2f8b5",
"assets/assets/icons/profile/shield_done@2x.png": "3927f3e25ef2d8a80909a224d4a0b785",
"assets/assets/icons/profile/show@2x.png": "1ec7fef4de81260872db0c43cdf133b7",
"assets/assets/icons/profile/user@2x.png": "ce4912c246bc1a6cfdeb1c5dcc06067c",
"assets/assets/icons/profile/wallet@2x.png": "701d25aa047d2c2994ae75446670adf7",
"assets/assets/icons/search@2x.png": "ff461a56adc2cd4a9628094c844f21f3",
"assets/assets/icons/shirt.png": "2959c4e9bb46f5d1a05635d8ddf39c1e",
"assets/assets/icons/shoes.png": "143acad31cf85a14ef740fe1fa53f02d",
"assets/assets/icons/start@2x.png": "c20093d0232f6add780b234f43365a56",
"assets/assets/icons/status-up.svg": "0f32600f0fb92b4360785b44e7961970",
"assets/assets/icons/tabbar/bold/Bag@2x.png": "d0940c5578c843f50fb9bba20d5158c0",
"assets/assets/icons/tabbar/bold/Buy@2x.png": "c4d0006d15d83f88cfd3136ce885ae87",
"assets/assets/icons/tabbar/bold/Home@2x.png": "a7a084c87e6b8d570513ebce0355dbd8",
"assets/assets/icons/tabbar/bold/Profile@2x.png": "be229562919b0b856fd8ec18f1080d81",
"assets/assets/icons/tabbar/bold/Wallet@2x.png": "183a1eb3ae0e4fbbc9a06255a7db85bd",
"assets/assets/icons/tabbar/light/Bag@2x.png": "2abab7338c8a156be34cd8c499321465",
"assets/assets/icons/tabbar/light/Buy@2x.png": "b680aed98cbceaa0011fb8dc437b4e37",
"assets/assets/icons/tabbar/light/Home@2x.png": "fb96fadc338e6ef9f96be2d51f39d306",
"assets/assets/icons/tabbar/light/more_circle@2x.png": "ab311056f733dd12700970ca29c97ff6",
"assets/assets/icons/tabbar/light/Profile@2x.png": "943987f08ec6f5b330ca397e3dbc832c",
"assets/assets/icons/tabbar/light/Wallet@2x.png": "0a77a4fc0a670f04310dbd2f414e70fb",
"assets/assets/images/accent.png": "ad8a510646b5fee7a9a44181faa133d6",
"assets/assets/images/appLogo.png": "22711450ed5850e30a538deb6e0fefb9",
"assets/assets/images/flat-design-illustration-customer-support.zip": "8ac127f77112bf11f201aaf80e585b4e",
"assets/assets/images/logo.png": "430e97f90597a9f1cffff1514bc0daf7",
"assets/assets/images/logo2.jpg": "8e8d43c05c5a45ce6a0b6bac2806814e",
"assets/assets/images/logo_logan.png": "637010f6e707d85174e0201041d48d73",
"assets/assets/images/logo_title.png": "d0e9118dee98a32003a6032e709698d7",
"assets/assets/images/pen.png": "99a8c857ae57104f982804d84e512379",
"assets/assets/images/report.jpeg": "b151bee6472b0e33c1b53b1eed2fc038",
"assets/assets/images/splash.png": "e92d8741cafdf7ff1403b36f02d5fe8c",
"assets/assets/images/trash.png": "02c4053bff2835712d55b071d0221871",
"assets/assets/images/view.png": "7ac5147085b3befa338d1eed5c0bc839",
"assets/assets/no-content.png": "96a72285b9ff86039103e6910fb3ff2b",
"assets/assets/splashscreen.json": "5f16dd2b81e0fa7c2a96000dfaedeeda",
"assets/FontManifest.json": "c1b7870ccce166dae0dfae49ab9220b7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/bottombar/book.png": "eecc96faf24f42d15202b62d5ff9a90d",
"assets/images/bottombar/heart.png": "3cb4aeee2fa7ef2d9a4c8606e0b57a39",
"assets/images/bottombar/home.png": "24e470cb5bcd01d0aacb773e8113902d",
"assets/images/bottombar/person.png": "966b229be67f0088053cd321fb489f82",
"assets/images/cart.png": "6f5aeed5aac654a511e1cacd057538e9",
"assets/images/empty.jpg": "3ea266799ac28909d4bbe79898e39485",
"assets/images/facebook.png": "b53eaee4a6eae96fb3036d722f97c19d",
"assets/images/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/images/linkedin-logo.png": "1a9291b12d642cb2fa8aa8fbef5c7be1",
"assets/images/map.png": "c576d39759b6bff0b5901b7e2384b086",
"assets/images/out-of-stock.png": "4503a3b0e6e7b2e75485e9a655242174",
"assets/images/slide1.png": "f422e8e85f2baafb495b3554664023aa",
"assets/images/slide2.png": "791397f8fac6d4c0b127a8992a5135a5",
"assets/images/slide3.png": "7c982b3df38a24a4dfda619b411c9911",
"assets/images/splash_screen.json": "7d9db972ffe2b369ac15ebf13a4e4876",
"assets/images/success.json": "1f0d15e6fd9e07ca09fb051d22c6ae8d",
"assets/images/telegram.png": "817d585a7dd0775dbc9b41927bd043ca",
"assets/images/twitter.png": "6352d995b0c2a0f882503daa1d99a2e7",
"assets/images/warning.png": "f000de8cc7517ff86c048beafeab1187",
"assets/NOTICES": "ef4d6769f85fca695ba0744b470f1dea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_boxicons/fonts/Boxicons.ttf": "f5b4c7852b2cea0ec78fcbd63d6547ae",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "3e7df30c5ab433e09d05470e7e1907d9",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "daca02225c67b934ab6d22581697e075",
"icons/apple-touch-icon.png": "64aa0875b4b04fa34277daade690c198",
"icons/favicon-32x32.png": "7011b6ab3d2cc5e5ab0f3492d48e4989",
"index.html": "dd2408b458adfcb1b87c8687638c90db",
"/": "dd2408b458adfcb1b87c8687638c90db",
"main.dart.js": "f8d913bdf3d9887cab6193dbc1fdcfbd",
"manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"version.json": "4b69227e202883f9ea1564cf7f632b19"};
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
