if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const o=e=>a(e,r),u={module:{uri:r},exports:c,require:o};i[r]=Promise.all(s.map((e=>u[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.css",revision:"8acc9d16e638eeecee2272ec84e999c1"},{url:"css/chunk-vendors.css",revision:"87c68c6b8db67aeb53fc5aef9a32947c"},{url:"images/banner-bg.jpg",revision:"9575c3befec3eb561b099ead4a687994"},{url:"images/github-logo.svg",revision:"6346d890dafd799c195ab9472958c907"},{url:"images/javascript/arrays/for-each-method.png",revision:"318580532e39b7806dab6f1b4c538629"},{url:"images/mountains/image-01.jpg",revision:"d2106bfd66c0b80e9d2727256ccea3c6"},{url:"images/mountains/image-02.jpg",revision:"917a2a0514e43a5ff0ee4671251c71f1"},{url:"images/mountains/image-03.jpg",revision:"62b39c82ce30417122e003aaa067ef2b"},{url:"images/mountains/image-04.jpg",revision:"86150c30478a4ffdb6986949714be4a9"},{url:"images/mountains/image-05.jpg",revision:"e7d8a9c3a73249beef16859fb4aafe94"},{url:"images/mountains/image-06.jpg",revision:"445f9de22b8841a465d7522d569a4631"},{url:"images/mountains/image-07.jpg",revision:"cfd88ac997a4da68cff8bd00f0a26d18"},{url:"images/mountains/mountain-1244132_1920.jpg",revision:"5636bca75802aba2eaa217ffb9384cc8"},{url:"images/mountains/mountain-690104_1920.jpg",revision:"210b3f67f5a377b57d9c8dc1c4e0d071"},{url:"images/mountains/mountains-1622731_1920.jpg",revision:"764c5e0a6822f83b59e1d952231db4a5"},{url:"images/mountains/mountains-919040_1920.jpg",revision:"b1e4233968717627969a1115680858a5"},{url:"images/mountains/mt-fuji-477832_1920.jpg",revision:"88c7977ac57f4141dbade757353f8da7"},{url:"images/mountains/sunset-2177324_1920.jpg",revision:"60217d9d3fa1420fc0d86fff7f59792a"},{url:"images/mountains/switzerland-862870_1920.jpg",revision:"e06f1b4f833b8d8a7aae083abc846dd1"},{url:"images/mountains/yellow-3123271_1920.jpg",revision:"c17327a97d3b95f7e317cea73ce1352a"},{url:"images/typescript/using-interface-in-typescript-01.png",revision:"11cb93dd8ed7291f42bf5bde138d8142"},{url:"images/typescript/using-interface-in-typescript-02.png",revision:"5e6afd2b1e0de692bc545794e8e5f055"},{url:"index.html",revision:"19865b8f513a00dcc0e1a6839931e853"},{url:"js/app.js",revision:"e434a0baa666ac2136c54741dac43ce7"},{url:"js/chunk-vendors.js",revision:"321ea67bf1acc13519e708e3da4278f3"},{url:"manifest.json",revision:"27b1ab3fec5c4c6e5b08437fcc4becdc"}],{})}));
//# sourceMappingURL=service-worker.js.map
