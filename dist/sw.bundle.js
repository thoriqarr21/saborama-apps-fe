if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let s={};const b=e=>n(e,f),r={module:{uri:f},exports:s,require:b};i[f]=Promise.all(a.map((e=>r[e]||b(e)))).then((e=>(c(...e),s)))}}define(["./workbox-67213c69"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"39.bundle.js",revision:"a4d6b1ea32cfcc4ef6c0bcfb4e6e5d9d"},{url:"608.bundle.js",revision:"ff22ac0a5bca8f9ce8d4d587d96e4033"},{url:"app.webmanifest",revision:"f0cd185556818b23067341f6e28c13cd"},{url:"app~309f7e27.bundle.js",revision:"bb4defb804e6d17b04d8add60cfe6f08"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~48bafecf.bundle.js",revision:"698604cfeb7d90e5b908942f9a5c351b"},{url:"app~48bafecf.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~4e5ec22b.bundle.js",revision:"1c8c03eae630dec2783cb6eacb19d85b"},{url:"app~a51fa3f5.bundle.js",revision:"0829fc76a51bd6df1ddcef094b073d26"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"b61201b5b01f97fca5ff2545bce55dbb"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"05d3baa7ebaf89bcfa2337c1849c19a3"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"fa4c3c06a8f968958e99b2672d831e41"},{url:"icons/favicon.svg",revision:"37c6f4b0c51450ea4bcb00e882414fee"},{url:"icons/icon-128x128.png",revision:"e2c21d8c28bb3d15906034b8d623425d"},{url:"icons/icon-144x144.png",revision:"6575b79624f33508f505133722a14207"},{url:"icons/icon-152x152.png",revision:"719b49fb9de3bcecc5cd493c6af7fd8a"},{url:"icons/icon-192x192.png",revision:"137d29728c00ac7cd6ba5226053d6ade"},{url:"icons/icon-384x384.png",revision:"67c6a0d383ef1d0f8f37867c2df2c204"},{url:"icons/icon-512x512.png",revision:"4d2b679a28c478a0bf8ba5de9bb08e82"},{url:"icons/icon-72x72.png",revision:"7b6b787e323ffeee6384a3434654875e"},{url:"icons/icon-96x96.png",revision:"de5c083dc6e7b6626977197f861ee493"},{url:"images/heros/banner.jpg",revision:"6ba8f38c16bd14c7ba07723f883e8e1c"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"images/heros/images-7.jpg",revision:"1ef7b138b5a2445cf77e0be77771aba9"},{url:"images/heros/saborama.png",revision:"fa4c3c06a8f968958e99b2672d831e41"},{url:"images/heros/saboramaa.png",revision:"dfa116bf2d418f9fba3b015c9d70f994"},{url:"index.html",revision:"3f709332efdc35048d84746fc6b15dd7"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("http://localhost:3015/")),new e.StaleWhileRevalidate({cacheName:"makananapi",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:259200}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map