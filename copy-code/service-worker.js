if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const b=e=>a(e,f),c={module:{uri:f},exports:r,require:b};s[f]=Promise.all(i.map((e=>c[e]||b(e)))).then((e=>(d(...e),r)))}}define(["./workbox-817a1d60"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Quick Code Copy"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.6e893631.js",revision:"23eaf7f045b3b0908815464da7eb5c91"},{url:"assets/404.html.f24604f6.js",revision:"0bf3f5b19cb4d5d127fb127d4577a9eb"},{url:"assets/app.e7e569db.js",revision:"0f06e16b3cab7e4b4b9b35591095b266"},{url:"assets/config.html.0628a59c.js",revision:"7ccb8c5369ada43138559b20ee55e494"},{url:"assets/config.html.3cc61dc3.js",revision:"edd80276b8c9dac7c4117e49656dc123"},{url:"assets/config.html.dd0eac9b.js",revision:"a3bfb35bf67f4cf84844efbfd843852f"},{url:"assets/config.html.e3f5df7b.js",revision:"be3bdea378900c9df708e431cc847863"},{url:"assets/demo.html.09ec718c.js",revision:"b60afe5055e767f13d521a5ee13b1e4b"},{url:"assets/demo.html.0c920ed7.js",revision:"ba9222110b69e3cb022b27e58517daf3"},{url:"assets/demo.html.7e800e1e.js",revision:"9be6d2def6b7f044910433d22777d5bf"},{url:"assets/demo.html.ddcbbb18.js",revision:"47eff8dd62c49201683fafe9c149ef18"},{url:"assets/giscus.538f52a3.js",revision:"b68290d9179cd80e54b96bcf54f0ae25"},{url:"assets/guide.html.8d41e7ed.js",revision:"413370ea9e478aafa0d6877638c7af64"},{url:"assets/guide.html.a3830490.js",revision:"6be8d8ee16eabe9ca1ccea1f074c72d9"},{url:"assets/guide.html.c614bdbc.js",revision:"54a39a2ca2ef1faa131477f46b06d0e0"},{url:"assets/guide.html.e4b6f2b5.js",revision:"8532ba1104071b129b73d43e8ed5d4ea"},{url:"assets/index.html.34143d91.js",revision:"2bda6fca469d6192f6c431437b7fb6fb"},{url:"assets/index.html.6bd713c2.js",revision:"23be5a6217bf33d8d58d0a3167754b79"},{url:"assets/index.html.b86dd133.js",revision:"a054de757107992f34e500abc3a9d070"},{url:"assets/index.html.ff97b6ae.js",revision:"461fb492c6b64bd8b3d3f3230a985d55"},{url:"assets/migration.html.2dde6a31.js",revision:"628b405fbd040fdcde9fc7c70431a246"},{url:"assets/migration.html.6faea266.js",revision:"4aa506e6f5fa4ed75fd7498acb38181e"},{url:"assets/migration.html.b90f2c62.js",revision:"70df901aa0f21d94885cac584b29928c"},{url:"assets/migration.html.cb3e7e53.js",revision:"2305cdbfc38266f6cd2ea188669867e3"},{url:"assets/OrbitControls.982e9fad.js",revision:"e579f2b903c6a2bc3a20bacfd0f8494a"},{url:"assets/photoswipe.esm.4413aefa.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/STLLoader.88873851.js",revision:"af16106612e5145da7dd4f647b449e1a"},{url:"assets/style.22707226.css",revision:"8005938286b667831c45a6e55aa7479b"},{url:"assets/three.module.ee365ac0.js",revision:"4b9d73af644165658e6ceb4c9adb8a20"},{url:"logo.svg",revision:"d0483448ea67f73718482e0f4163caff"},{url:"index.html",revision:"4f4b040c450e20263b66fc3ee6b28d7d"},{url:"404.html",revision:"880a0ac04f26cf48e85b0a08df8913f2"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
