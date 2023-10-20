(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>g});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(277),t.b),d=new URL(t(929),t.b),p=new URL(t(66),t.b),u=i()(r()),f=s()(l),m=s()(d),h=s()(p);u.push([e.id,`@font-face {\n    font-family: Mega;\n    src: url(${f});\n}\n\n@font-face {\n    font-family: Martian;\n    src: url(${m});\n}\n\n@font-face {\n    font-family: Lexend;\n    src: url(${h});\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    background-color: #82d9fb7f;\n}\n\n#content {\n    display: grid;\n    grid-template: 1fr 7fr / 1fr;\n    width: 100%;\n    height: 100%;\n}\n\n.header {\n    display: grid;\n    font-size: 1.2em;\n    grid-row: 1;\n    grid-template-columns: 1.5fr 1fr repeat(4, 1fr);\n    grid-template-rows: 1fr;\n    max-height: 100px;\n    overflow: visible;\n    font-family: Mega;\n    font-weight: 700;\n    letter-spacing: 2px;\n}\n\n.logo {\n    grid-row: 1;\n    width: 45%;\n    overflow: hidden;\n    position: relative;\n    top: 15px;\n    left: 35px;\n}\n\n.pagesContainer {\n    grid-column: 3 / 7;\n    z-index: 0;\n    width: 100%;\n    height: 100%;\n    grid-row: 1;\n    background-color: #76dbf0e7;\n    box-shadow: 5px 5px black;\n    border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\n    outline: 3px solid;\n}\n\n.home {\n    grid-column: 3;\n}\n.menu {\n    grid-column: 4;\n}\n.contact {\n    grid-column: 5;\n}\n.about {\n    grid-column: 6;\n}\n\n.header > div:not(.pagesContainer) {\n    display: flex;\n    width: 60%;\n    height: 60%;\n    align-self: center;\n    justify-self: center;\n    align-items: center;\n    justify-content: center;\n    grid-row: 1;\n    z-index: 1;\n    background-color: #ffa07a;\n    border: 3px solid black;\n    border-radius: 10px;\n    box-shadow: 2px 2px black;\n    user-select: none;\n    \n}\n\n.header > div:not(.pagesContainer):active {\n    position: relative;\n    left: 1px;\n    top: 1px;\n    box-shadow: 1px 1px black;\n    scale: 99.8%;\n}\n\n.bodyContainer {\n    width: 60%;\n    padding-left: 50px;\n    padding-right: 50px;\n    height: 85%;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: -1px;\n    align-self: center;\n    justify-self: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-family: Lexend;\n    background-color: #c3a1ff50;\n    \n    border-radius: 30px;\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n}\n\n.bodyContainer > p {\n    margin-bottom: 0;\n}\n\n`,""]);const g=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=r(f,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},66:(e,n,t)=>{e.exports=t.p+"55a10e278fb717c9faac.ttf"},277:(e,n,t)=>{e.exports=t.p+"c486eed5b132a3d83f59.TTF"},929:(e,n,t)=>{e.exports=t.p+"9dc9a40944d5007bc4d9.ttf"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"5c311696b097855a600b.png";console.log("Hello World!!"),document.body.appendChild(function(){const e=document.getElementById("content");return e.appendChild(function(){const e=document.createElement("div");e.className="header";const n=new Image;return n.src=h,n.className="logo",e.appendChild(n),function(){const n=document.createElement("div");n.className="pagesContainer";const t=document.createElement("div");t.className="home",t.textContent="HOME";const o=document.createElement("div");o.className="menu",o.textContent="MENU";const r=document.createElement("div");r.className="contact",r.textContent="CONTACT";const a=document.createElement("div");a.className="about",a.textContent="ABOUT US",e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(r),e.appendChild(a)}(),e}()),e.appendChild(function(){const e=document.createElement("div");return e.className="bodyContainer",function(){const n=document.createElement("p");n.className="p1";const t=document.createElement("p");t.className="p3";const o=document.createElement("p");o.className="p3";const r=document.createElement("p");r.className="p4";const a=document.createElement("p");a.className="p5";const i=document.createElement("p");i.className="p6",n.textContent="Meow, hooman! Yoo've stumbled upon teh meowvelous land of PurrfectPizza, where we serve up teh most pawsitively purrfect cat-themed pizzas in teh whole wide world! 😸🍕",t.textContent+="At PurrfectPizza, we take nomtastic to a whole new level. Our kitteh-inspired menu is packed with claw-some flavors that will make your taste buds do teh happy dance. From the purrfectly cheesy 'Meowgarita' to the fur-tastic 'Paw-ppurroni' pizza, we've got nomz for every cat lover out there.",o.textContent+="Teh ambiance here is as cozy as a cardboard box in a sunbeam. Our restaurant is decked out with charming cat decor, comfy cushions, and cozy corners where you can enjoy your nomz in peace. Plus, we've got live kitty cams, so you can watch adorable kittens as you nom away!",r.textContent+="But wait, there's more! Our mew-sical playlist is a cat-tastic mix of soothing purrs and lively tunes, creating a paw-some atmosphere. And our staff? They're as friendly as a purring kitten on your lap!",a.textContent+="So, whether you're a cat aficionado or just a fan of delicious pizza, PurrfectPizza is the purr-fect spot for you! Come on over, bring your hooman pals, and let's make some purr-ecious memories together. We promise, you won't leave without a full tummy and a heart filled with feline joy. 😺🎉",i.textContent+="Don't let your taste buds miss out on this paw-some experience. Come on in, make yourself comfy, and let's nom together at PurrfectPizza. Meowgical moments await you! 🍕😻",e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(r),e.appendChild(a),e.appendChild(i)}(),e}()),e}())})()})();