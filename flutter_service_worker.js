'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "246603613b1d45a02ce8b5bd0548b6b4",
".git/config": "d0cd3beca5feb178796b9b043de83a09",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fdd751eb5af265054e607e22e5e95d00",
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
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b892d565dc9200db5653a97206dd1f7c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4889e058627e18f292ccb2a70ac85144",
".git/logs/refs/heads/main": "cb34cde488c68b9590c947216a337ff0",
".git/logs/refs/remotes/origin/main": "ccf510dfbb00aa7ae06e00f431df7d2e",
".git/objects/00/2c9e3b068bd6ffde8ef3f947f6311b2f406d5f": "f3adcd5704b46a86a97b1186aabe77ae",
".git/objects/00/ad6c6bec7ea382548fd3053aa32b6133f8ba99": "d624ad56f7f4ab60dae5812c6d3b454d",
".git/objects/01/bb5562cb6a1ad7844e8a27ae54fb387522e785": "ca985e5b8c6f28c356d1133777591436",
".git/objects/01/c58ae406e0aa0323037690f64b8dbff7c3ad98": "6b58b1a397e88a5d0c0b211f73eb5b26",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/02/2ada9d557e35daa97c5b51e1249774e37cd0cb": "2fe2811308229523b9e3fa37c9f0bf74",
".git/objects/04/217fb067f7f647761b527a8664e7ec31da9ddf": "565a767b77e14cdacac210d713ddf1ee",
".git/objects/07/c557a2745b91f77964fa8754fe51cea4c991c8": "3fc4349eef4a7d5d59687da506959dfd",
".git/objects/09/151c9dd9a1d8351564ce8370588e0710a7b902": "8eb4c65f39772a03a86910c16dc452f2",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/f1491ffe6c75729469138ee7798bdc621eb301": "cef8ad663b35ae104f684ad0fd2cf9fd",
".git/objects/0f/513d91adf91cfedeacaa42d9d158c7b8bd7195": "91e9fe06e36d7f6b0ee0c2eb90f033a0",
".git/objects/0f/b096fc9ddfbdb0c2a50df13375c97b5da01f30": "610aebdf8eaf166811fd1188bea4b406",
".git/objects/11/6abcdbf31b6209c43ad392b66c4727ca34fb82": "5f8c12c401184fbfbd87455772e54c7f",
".git/objects/11/e7029789d250d8f99f8725c6a29040c0887dc3": "99febf2b03c87d3f7816f72b1ebc1984",
".git/objects/12/6b2e45af8efeb2c30e8853e43b14b58ad527d3": "1f1982f6158f85da29cae5395cb7ebdc",
".git/objects/13/923e55a3dbaed434c85395357ecad530ded11f": "3e4f3d30d8ba9ff892b5d1b9608ed981",
".git/objects/19/55a6807673927aaf76036619aea5d5f8c28189": "5709c545299f05f5e970408451862e43",
".git/objects/19/cf86e0ec3b22b79db4397c6f42b643b0986224": "478578b0672f15e99fb6e4506c41cc4d",
".git/objects/1a/7fa88126e2eb8d86b3c80ddc41a43e0e51b806": "042bf1f6a8e808d39fe5829e3aef26b7",
".git/objects/1b/50d159ebfd97b8351a2e580adf3327ae2ac22a": "49f0f83da1d0f44773e1a28d58a7c3b5",
".git/objects/1b/67a669e37a720980989012da4f70a78c73e51d": "cb6aa671bb15b10c3473ec19616e1429",
".git/objects/1f/494b771439a3c8a600682404b478dd5fa7e574": "477e7ec4586a91c1bb719e4a825c317a",
".git/objects/20/7117d9dae62099a2960738c38bc60549bb66b6": "482d18657ba4e2e8dee436d7c1ed9f73",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/5fe15f9930ce6c3a46f86214384a1cd34cb05e": "4360e99d4364dacb0e013f12ef6887c2",
".git/objects/28/c522571c302856eed4258d1f853bb25d4e9da3": "d463b7e8aa5fc47204f5c00394d824c9",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/f0893f4abc21e771d3e122c13e3411c41327f7": "4bbe3f4034bdbf3c7acec5fef2002d50",
".git/objects/35/395ac4f353113daeba1ab339959493dd89329a": "c183b9b41ad1c639b97b7a04d189138f",
".git/objects/36/f221a149131b62dd8aa7b49a1886979c65e513": "0ad003ee3c8facd6a271d0b806392f01",
".git/objects/37/45bc6bc8374a55b1fc94cf44624d57c645e243": "7ffeb2c8c7dc2ad9d90f11e163b50779",
".git/objects/37/4a9e93a5c48d8b7083e5dc7c9f5a4cb7c8dde7": "3f785c7eea70fcab0522a8b20ce126fb",
".git/objects/39/21e4d7e91b63fc1a02d4f237ae122afcff0377": "75c2ab7b9e05b91377b24e94c80af1e0",
".git/objects/39/93618a49a9fa7f2935120e2a1be77e02372dc8": "7958536838ebb275391453af07b26a4f",
".git/objects/39/a09a82d3c73025bf84ef085e2a00b40ed1085e": "7deee1331a6597ef864490f9b6f51790",
".git/objects/3a/355becca001f63518fc408996cf50f180f88c8": "1353907cc1ecfbfcfeee5ce938eacc15",
".git/objects/3c/7ba027738c16688453a8c3079717baab09b494": "88fda73c8e89c623e428565d228c2ace",
".git/objects/3e/7fc8e2d298c20a2d1f6f5f826b4e2aacaaee93": "780af77f58d5259ebcd25d3cbcb25369",
".git/objects/41/6366a8d68fd56bb082383f0dda8c29fc2db531": "92e1c35fb3ef45e7d4f23b46a931bb59",
".git/objects/43/88cb2444ecfc70df6aa0c7bc8841de3797395c": "0dc9c1a7b72b54fc189b0a299568957a",
".git/objects/43/fc529e9c1e1cc8be85cd01b78a6b64c7157b00": "a39c6170906425e549e639cc58e88f9c",
".git/objects/45/1022d72aea0362da04b1ae887bcd2856dfab67": "3cf60904e1e38645a27b2752abb2e823",
".git/objects/45/d092902a7413c2cdf4a245fa3fc6c54f249d09": "9bd1a232acbc53c7bc7b1a1988b4672f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/5ca7b63fc83b12aa618d986dcc1ca4ae11b115": "053ace43c5c8c91369c3873b3719914e",
".git/objects/48/67e685698ce3eaffaa34f2c2d5b18b84eae914": "4423ab8c8a93cb8f3eac990ccea2fe9e",
".git/objects/48/7e245c0ffb3cbac97be6ee191e7e797d54faaa": "706b2a2474c0cc86ecf5e62bb257c210",
".git/objects/49/96843457116c555cf113e8e108887e84dc1e19": "39976401fc0a6ab73bcd5f993758a368",
".git/objects/4b/ec40cf88923efe3c2b1a942c9a6c5cbf32f691": "b86dd6014e314ee9c1061ea2cd4c08b2",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/48646fc103876ed10d53a59135867d0926c3b1": "8cba0c73022261d34a019d5adabe1695",
".git/objects/54/e2dd6051daa29e865e210eb498bff25995e30c": "f5c2e2cee6d9841d9624fa94113612f7",
".git/objects/54/f7cabe5cdd2122ff7f44dc365965e1658b5687": "54f21cfb9f838fc6273b19114e6ced8d",
".git/objects/57/381d1b764d9d59ea65a564a17609dcd6879d77": "5e5a3eeeb24c9046678f7a38edd17b0b",
".git/objects/59/13243ca5557543449f2763bcd0a9acd1a3d65e": "d31ae26c022ff33fe36a650aca22df9a",
".git/objects/5a/9c361bc2be2144c67955ec163be86bd3ec9f9a": "efaec343f1f816dfc482ee5f618e5529",
".git/objects/5f/5de172a17b314c59c1a611f457d0ffc0ddb8f2": "603cf7a1920da7fd95121aaea672166d",
".git/objects/62/236b3e8d4bd72f3ec3cf9c5b38ebfb524cc06e": "3bd6cece5410964355c5f80ecf228e6f",
".git/objects/62/a97e84466e509eeac6d4d271d877bc5e4d4374": "0c33f7fe94a1267b551170e30264504f",
".git/objects/62/d1c2b09bcaf2b54ed0fa0a1b5797559e34386e": "824f2e8929da3308d078f253e7bb909f",
".git/objects/64/63e74f454b03fafff670595abcb3ac0f97ed88": "e68b12ca7b8b3bf6f8fc8ec9fae77691",
".git/objects/67/39394c461e7d9bc89d183b1ad0d97c07d29411": "f6628086b35ff0c72d7d82b5ba2d56ff",
".git/objects/69/7ef2f1495838cc114a8ba83f03825f9b8c353a": "6447a4f7daf6983337c192eb3819f02f",
".git/objects/6f/165b72d53e70122d8b1ced4e2e7b25d4938167": "0fc493925e9588df65a63ea209ecf277",
".git/objects/6f/683ac12b58cb2ded87305c78d1f96401c8f490": "caedee82cb8f5660d6538b5a18367acb",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/f81dceb695ecf1057b5e00236c028054230014": "354f7188235bfe6d1bf54ca1bd642417",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7ddcf9d5f566882bb756e18cf33a6b2bb3be8d": "bb0f80f97ff6ee74782672a4c46d97b7",
".git/objects/7d/7b0f74c3f38cf94257d2c75dc16a350a157f55": "4e632cdef82a0cfdf2c1370d1a2336ad",
".git/objects/7f/c56963eb95a3f95f5e41833fddfe95f4f0f4db": "541a0052fd13adc672ac31418ee93696",
".git/objects/81/d538a5a75aa5dd804018e9d7d53d6cf9b95513": "e43ba8f107f0d1fc7398378401b54ae6",
".git/objects/82/0f3098651270cd7d88a4c76442f12754bd3759": "07a76143bbde240b15161e13bdc0c611",
".git/objects/82/4e504f7f6baa3f9bb2331b1f8b07fbd7fd9b48": "005a912656f624869059979682712d74",
".git/objects/83/76666ba322aa8392befb4e138fc593c4e6a1fa": "bc5f02ce8b450bbb91bf192e908237fd",
".git/objects/83/a9b15ccdc400d9db80c4d47b998483e5ef1ccd": "f7a31551cbb71b4b64aa9ce49ecb2b4c",
".git/objects/83/d3ccfd372cb0a50007a92f310468a7eef79cab": "f1d347d7fa2f6ab95b8f8a421c07c8c5",
".git/objects/85/7bd384f92765511a6352edfd9c65ddc4fc77a9": "017bb7fcf671b8d5e5e11de377656b50",
".git/objects/86/3cc24f7607ba01c8d755bab77185d8acc23711": "46f00af6067cca1288f2189207bc14d8",
".git/objects/86/95d2264212d46bfaf82faec483f074145afb31": "d078dfecc65b90db4cafa38a3424ff0b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/87468420b07ce44f49bfcb016c3ed73654c4b6": "9f81d1db46a0b1e72135ab3c58cda23a",
".git/objects/8a/2542a1ada60d01ae12f8e52790e2b7983acf65": "f9aac4d2cf95981587f6c0cd66296813",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/f478fd5de3e186168a00a09463601c54dc319f": "62fa5494fbe693bdf49a657b7dfb0c5a",
".git/objects/8f/055b424ecbda50b907df99bb8029ec6317f54e": "940ed5b5d4ee7f942a8de159b775d37d",
".git/objects/8f/6cf77ad7fb3054ac4a610cc70456e7edd5ea9b": "ebbc05b1292f520ab53371c65a4aa97e",
".git/objects/92/49090c5dc69fb03c2b835abf64b08e88b32266": "2120ae6c2a922b8b270e681dcab58140",
".git/objects/94/22b78fc8774221977b5fdebcacd3421d4d6c83": "568a8396be6e79f548d489ec306316ff",
".git/objects/94/944ed72cb7d9b2438ea58df8cc3953cad22f68": "f628f977772fb61ddee24c530fe0bd4f",
".git/objects/95/dc67b790f530da97520f0f665cb8ad051b8986": "abc2ee1ae708a15e62868a54a3ae7b7c",
".git/objects/96/d10f5256b35d4e80377baf5bd370cc334a1d7f": "dd454d31b487c92312defd19a4c4b5a3",
".git/objects/99/46a7f9110e147b8dcc79dab938370eecc89f89": "76e52cc506580189cf7c6cb4b44d9e87",
".git/objects/99/4d5c3057b240352681a64c4699dba4adc78676": "58b6ebcdc30e8a1ad8a6baf5cf3069b5",
".git/objects/9e/3d8a56d4edda99918f3274a4cbd3bb714fb64f": "43e71f43222383a61a17432c5b45fe84",
".git/objects/9f/24e3da1095738e025e9ad8db507d4b8e77e6d6": "579a94d23c39509985df15a457622615",
".git/objects/9f/61715c518c04f2b292105e902486e541533d67": "b7dc5e5ab316336a823ab6e97d7ee638",
".git/objects/a0/7bf725457eccd8f4ead235497b54bf9e83a7fd": "241514bd965e3089bcca44cfcf0525c6",
".git/objects/a0/95da9782b7ff180307f8d1cd19b1515ed54c7a": "a8f306998efd96d315b216c436b16fc0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/7d24e7689c6b9074f3f421403402ac10d30ab9": "8637a87c65db8feb1d22faa7b0edd656",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/891ae9af814d9e65892cf4d466d38aed83349f": "ba098d9a1b1906e75a4a5cf92d12940a",
".git/objects/ae/c9261a01f08ee5580ab944fe356c84123ec82f": "5f436bdf5d09e228cbdc1620b0356217",
".git/objects/b1/7ca61fd0600789a3550070b30c7d311b1ea322": "6ed2077b92d6ad1abed9a188d84f0810",
".git/objects/b2/95d443980821dca797eb98d7a87e0cc2a3df50": "7034e915c42b78106954c1fa8655b5db",
".git/objects/b6/e9361f849d1fcf3001d7ec0b9f5659798ea48d": "350d269aac9381b64a7bef15760e3011",
".git/objects/b7/124e3a5744fd2c3dd139f44a345e42b2b140da": "fa2efedc7c2c99013ec4370e6b318906",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/996de1fe548fc59b4c98ad259298b10abfef49": "44690f6ba0876d633195e214acd3a61c",
".git/objects/bc/96f66b09b212869fd8aee5ae89cc9e02cecf23": "decfcf61c277b3340e6851d156740319",
".git/objects/be/db3a73681da81f5fafd22c57b1cd41466669e8": "0b95623685b5003d127a0833ee03b4da",
".git/objects/bf/6d9a7e8e3129746b1abc1117630a537762fe9d": "7b93cd79056a4887d2004ee2550a7536",
".git/objects/c0/8cc397625d70ea55ad75f6678ddd9b915ac73c": "dccf6cb2e16c4f66e7edc2bb8bac1201",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/b3ba6a21ca261cb096e6a60fe073cbb7d31db4": "6501977b9505526729b29533727a69ef",
".git/objects/d2/b0d8b3d36707cc00c1b2a05c08519c70f719d7": "ed5e1a8009bb4b11c6d414f96f64a4c5",
".git/objects/d3/3d3893a6dbc05dfcb578648f44ec8667b4ef32": "0b7de027acd9880713d92a3d3f3e4b59",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/e87de53c919cbb422fd363ce9561460e1eea2a": "66a1b9419da1792a3c3c12af43ea69b5",
".git/objects/d8/fe58083e49886d5b6d7c80811f4f9f618749f0": "0635bf2e36c030d58e042c810a2b4e6d",
".git/objects/d9/d9be77e6da113f35129abe1d4c8027b78a06c2": "2ae1ca51cc02f80112d4e064120bbf9c",
".git/objects/d9/fdcc73de13617e38dabe19e50f9d731525fc7e": "9e1580dcc82d1f24a4e6064317c8c702",
".git/objects/da/ed48015f8e38c1af8497023dbe406d67a32529": "dc022b0360b34ef9dc9c3a6627b5779d",
".git/objects/dd/a03bfe95f1beb7c2dedea37d0331be0a54bab0": "f835c3a4947d64ae3d243be4b335367d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/fa16569f5b518a616bb30640baaaa457bb9627": "8563baf274fd66c1fd57ca0b63995da0",
".git/objects/e4/8a1c96b7ef0c521d66e4a165c540abfff12ba6": "02d582cfe530dc75d5bef89dddd6913e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e275d2041b16912e26bc089afcf69842ec63b2": "5815dfceba4c7cbe6a787a5dcac167cf",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/b1dc5351bee7d77a8ec16b9684e9090e57a6ad": "2e9e1fb95272826de5f94378a98d4f8d",
".git/objects/f1/f1233e1bd4d8d809f25ddbcb3a844d4881f513": "ee99221e7f2d7b8054a2771f167559f5",
".git/objects/f2/215b01ab308b93f02b758a434b6243196377e5": "945943eb32913414c3c673e4346485d3",
".git/objects/f6/629701f80b24e853e6ec071409719a6cee98de": "66a3eb688c23f2d073a5b2d1a52afd78",
".git/objects/fc/0aae95661bc74f76826b4fedbae18c2d7e3d67": "cc5c769a79ec3a4e9259d0fd6a35b288",
".git/objects/fe/3f74334f4fbc0c3e250e9e7cbf43968e4c1abf": "eee0ee5f83e68705663939b572320a9f",
".git/objects/ff/3a836e2039ab54de9f9fdc06e64b961680995c": "57d25d17f6d95799e9a66558604438df",
".git/objects/ff/3adf45243668bf3e815e41959f81eb77eb6b4a": "037127e015d8eeda6117d2f16f8d0840",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "6e358d3929d482057893dd28f2869173",
".git/refs/remotes/origin/main": "6e358d3929d482057893dd28f2869173",
"assets/AssetManifest.json": "d6e4afa548a152c83ecab206c6fb5043",
"assets/assets/aqi.png": "8c777cb57536d17c7a150486a941ca6b",
"assets/assets/bk_logo.png": "5f05e7ce30b2bbd3f26b8ed6a242f130",
"assets/assets/brown.png": "751e233fd3c80664e6c9171ea57a654f",
"assets/assets/green.png": "23849d2a9e2e1940d53ad32bca9260b7",
"assets/assets/humidity.png": "f4cc325d9e196225774d2cf94ca013e7",
"assets/assets/mark_green.png": "c73fcf83c33898feb88564205099d85d",
"assets/assets/mark_red.png": "27c5b2e45dbf80a2e3ff648654d28817",
"assets/assets/mark_yellow.png": "2593fe1324789a8db2e3b821e240d6a3",
"assets/assets/orange.png": "fca91826da5b5e98f1bb92c494938395",
"assets/assets/red.png": "552c384fe2285ba54a32b27aa564d0bf",
"assets/assets/shield_green.png": "18407fba9a08b899307e521fd39e09f7",
"assets/assets/shield_red.png": "a255df76cdae231d63afaab216265ae6",
"assets/assets/shield_yellow.png": "80b7043f7ed97a524ddf5576ae786afa",
"assets/assets/temperature.png": "5b0991873820fa83d7549bf5eadecd69",
"assets/assets/violet.png": "7cb82e171c08e437160377e02955e873",
"assets/assets/yellow.png": "198cc2b1f1785a05375f6a4d7af7082b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c6079fdd037d60c31fadae1833148ef1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "f6c592a9bf88a74bd2561da33ee2b57e",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "625b38eb150fc32befc535a73d65bffd",
"/": "625b38eb150fc32befc535a73d65bffd",
"main.dart.js": "12925c6c679a40a62094fbee96e15e76",
"manifest.json": "ebf312e0ddf2070ac11082fba2ac8920",
"version.json": "e0f01185025df5ae543f19dca72325db"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
