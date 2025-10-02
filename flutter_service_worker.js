'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01508a2af6ba9b27c904804a93aa2b93",
".git/config": "0f3b7c2130eda5c8e148325a4597e091",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f98cf7947373d417dd6a95c6a74a719e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de51271205894370bacd47692ada8281",
".git/logs/refs/heads/main": "481d944ec3d80d7559eef581d777076e",
".git/logs/refs/remotes/origin/main": "c33b31ca3de29d50632131a691682623",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/fdd544f0b0d4dcbfd2218504a558ec55aae53d": "60b7113158dfb1e8772e4aa111db90d9",
".git/objects/0b/a6749a29b5a8a38d35581c06db9ccea07e5e7b": "68342e94a4869ab8fd9061505970c09b",
".git/objects/0c/1ee750286f45dd908a1c5284baf9efdbf4d6ee": "c11129ed40140b781dcdac0ccf7a6225",
".git/objects/0c/2ee5039531c9d487a75cc747e9eb2bdba5ba6f": "66a45a228fe1c13fbe84244b925594b9",
".git/objects/10/031680e5280490ff5c381017cf8533ca2d39c4": "309bcfd28a531ed387e0c4e99e8f7eeb",
".git/objects/11/d183d92ebf2ad48e022041d0bf65edfb073b14": "dbbc45e6b2f2138162f3b0028d15e7d4",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/14/9a85e265136e5b035be2b0ce25f13aed760fd0": "14c939e1e27ebba666e09655d248c957",
".git/objects/17/0246dcdd32f60bf9a931c9c7b638abd601d99c": "b0c25560733bfcbd3d33b10a7dd085d2",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/89a2a67f80f8cf988e74dc6431da0c3c151aa3": "81e0b01c7b5a2977973f0f149e2fafde",
".git/objects/25/8e6db68d9d9894f9e0fcd9cc56ef2e527c5486": "51cc7b3cd027331ffa4a1dea976d799f",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/3975f45f86f0a9b29a18833275b233f862a719": "a5aa4908cc680aad4ef7dc5a05fe879d",
".git/objects/2f/00a184431b0e1c82b63c9a9b25804b1c1a027c": "dc18973cf442c0d0c471ad268706bd42",
".git/objects/30/cfeccd249a2963d62d68b3f623b4d3f043d40f": "266ca7cf7c7d2a2cac240a4c1766a93c",
".git/objects/32/93e4f05ba4090fae050db14e09944328325f40": "11d301bb2d36d08bd3346212e6289df9",
".git/objects/38/cf3edd31e71efa053880109fe075c7437028ec": "3945c7b967ca29a9a1e3605170e1b01f",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/44/8ed5a8a2de8292cb23156d4c93607368982e16": "d1b2d3805b3c1fff013800480fbe221a",
".git/objects/45/9a4660f494cfabf37523e7e3ab98127adbb84b": "08dbfc6b3382cc3bf2f8c8a79b8fd68f",
".git/objects/4d/4d08e5407b82a7757d3b4321b7dd4af16f575c": "8a6845f94ff8a0c255f82637ab1675b6",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/aeee7c37a359cee5c59db9188f55453e15c601": "dddb9c9113c12ba999a5d383efc4c205",
".git/objects/5a/9e066d16bd4965244e281a3acbf3e92c23fbb6": "5dd2c10194eae096fd8d2f0c885ba29a",
".git/objects/5b/3f028266730a84c8d9f6a4dcc5a8b00534e02d": "ddc31083c1f37f6a91c0397d65c0c81c",
".git/objects/5c/8e5bc7ab2f2e59bd39eb6a91e825ccc2b6e5b9": "a89f33e5635ab419a7c030edc3aeb444",
".git/objects/5c/d55d6d3a84e8f10921046ef6ea1c0d05ff8581": "7c0df2a674a25a94b96b88b1a1d15087",
".git/objects/5c/e7964587c83743e9a07c1c265096f8328817f5": "1f90950c75854a0381fcd0ce6b8eaef6",
".git/objects/5e/507f1600323e7e67309dd7c5b03b63c884e6e9": "0e98d4c83dc12c92c88a4a2f60b99600",
".git/objects/62/3316a9c0ecc407ad4fbc2976bed661cee489ad": "252c0eda061405963d25f95cda78e4c0",
".git/objects/64/d3afb9707d11a02969f50611188ff8c74f06e1": "9ea9bfc786c4fd5ef3b38ed38fdfa7a5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/2d34b4db0ae1c1124d4a2e5f8bbf07d7a9f79e": "9dc65dff03d2664ff69d54de4955b919",
".git/objects/7f/45215c69c57fdf2af530e48755ea764a2635cc": "279b83d65544bda2048b1e2c59d9829c",
".git/objects/82/d4f8b9522cc4897c0dfd9c96ebc5ff057d9a08": "da5d665ea47f4ef9e54a1ca07decb01d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/29aa3b1974aa59dd6ac4a9a2f1bdc24d357cee": "9a7fc7469ada23dc0a019439244b2ceb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/be33cb7cc6e329eb3396989cec2d178ee00e4b": "a3b0fb961297772b3792a0d7f016c17c",
".git/objects/8e/c7cacf7a00e3a22042bde226e74bd950cf16d8": "a1b15d8bbd855ee3d93a92a41e032d40",
".git/objects/97/8602aeb73cc60924670ba4b3779a015c99d6f1": "a4df976085036273be26629b520f6b28",
".git/objects/97/aa42d5e86758cc92a7c3cc965ecdad39a035dd": "906befab6bb94ddd0ad2dbaf00150ae8",
".git/objects/98/06025d12a88a73c0dd6949cfa17e2fb1516fcd": "4fe487a66461a9ca138c8192d46079ca",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/e5b0e7d7a21a9291976e2ddee46413c447feca": "ea55c5c0c8c254e84dac867017c0bf06",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a3/eff6e29c0e388b260102c187971025e9ee4ce2": "99ad2d81aad44f6cfe4695badf9aae66",
".git/objects/a5/7b9b45add56d6dd086a25d3caade5052e2e884": "80f066b8815fdf041885c03ad0af3e9d",
".git/objects/aa/e7d137562dc9b8338eb80c716d4c2c1d5b1532": "3b6db2ff4cc43e387546d2f91ed200fd",
".git/objects/ae/9eec2e488d07ddfdf6a9ce6b89d16ab22e893c": "76ae71253038b8d9cea78e24d2637a35",
".git/objects/b1/25b878c2a84f372fe003d6610ab6eca370eb51": "6b570dcc8087b15475a4decff7b5e693",
".git/objects/b2/b9cb76bddbf79bd77577f499021fe77412cde7": "9d96766912ef3d55fc001ff7dc299a26",
".git/objects/b4/a4ba462c213dc35201b0c1f029fa171e3cfaa8": "7cb014aa51b49e7600a1f0993901f1d5",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c8/9c50d58b2a38146f6f50d8da42c53fce83b564": "a58469b9c6c391b1dac2e1799ff6fc06",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cc/192cf826f5be557ef851651c320b26cbbe5964": "13b61e92fff1d284d1b55407e71fa718",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/db/0243cb112d1a223825bebc2510c6a734d9bbe4": "a5b01011fcb8c9f8c127e910801400ee",
".git/objects/dd/b5f540544a2119ec5b6d98741d65b039c813f1": "90c02180e5417c31ba708e52889a00a7",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e0/35580e4de867b5e8e371dbd085b17363dd6abc": "07656ad2671a79a49ca3c8c10e046b58",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/0663f10bc673c099bb7445ffc3a537071e19d2": "f6e4ad69009d4dc2df53a01dd2095c32",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6c48c9eb35e8b69409491201523bed155fa3e1": "96e3e0f14f6fa807e29f8156ee3167a6",
".git/objects/f4/937aa6ffb2c41960d1697c4e59552160fc9b81": "e549dac717ec6622c3c37a9c62d6115d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/29fac458c9c40ac91a41bf686a3030fa359cd1": "49e9b94e2949a7a75b0134a683ef3267",
".git/objects/f6/51e2c698715323884d05c30b114413d97393c5": "9d47e0c7c859556ff14f876877d863ad",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/1e6bbc60e830a55d63b6288310e93b7a178557": "277e3b68851f0c9f7d7759eba96f1e99",
".git/refs/heads/main": "0cace3daec2ad634a8aab2e8212dd121",
".git/refs/remotes/origin/main": "0cace3daec2ad634a8aab2e8212dd121",
"assets/AssetManifest.bin": "a87ea8a6180032b7f7b362459658f7b5",
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
"flutter_bootstrap.js": "aa4a1aef4580d7ae867aaa3c2f775ff8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "81e8fea450e20ab3147441ed5a984a15",
"/": "81e8fea450e20ab3147441ed5a984a15",
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
