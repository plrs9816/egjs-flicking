(window.webpackJsonp=window.webpackJsonp||[]).push([[182,76,227,281],{403:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s}));var n=a(16),r=a(408);function l(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var l=void 0===n?{}:n,s=l.forcePrependBaseUrl,c=void 0!==s&&s,i=l.absolute,o=void 0!==i&&i;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(c)return t+a;var m=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+m:m}(l,a,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},408:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},409:function(e,t,a){"use strict";var n=a(8),r=a(0),l=a.n(r),s=a(10),c=a(408),i=a(7),o=Object(r.createContext)({collectLink:function(){}}),m=a(403);t.a=function(e){var t,a,u,g=e.isNavLink,d=e.to,f=e.href,p=e.activeClassName,E=e.isActive,b=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,h=void 0===v||v,N=Object(n.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=Object(m.b)().withBaseUrl,w=Object(r.useContext)(o),x=d||f,y=Object(c.a)(x),O=null==x?void 0:x.replace("pathname://",""),j=void 0!==O?(a=O,h&&function(e){return e.startsWith("/")}(a)?k(a):a):void 0,P=Object(r.useRef)(!1),S=g?s.e:s.c,C=i.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&y&&null!=j&&window.docusaurus.prefetch(j),function(){C&&u&&u.disconnect()}}),[j,C,y]);var I=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,F=!j||!y||I;return j&&y&&!I&&!b&&w.collectLink(j),F?l.a.createElement("a",Object.assign({href:j},x&&!y&&{target:"_blank",rel:"noopener noreferrer"},N)):l.a.createElement(S,Object.assign({},N,{onMouseEnter:function(){P.current||null==j||(window.docusaurus.preload(j),P.current=!0)},innerRef:function(e){var t,a;C&&e&&y&&(t=e,a=function(){null!=j&&window.docusaurus.prefetch(j)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:j||""},g&&{isActive:E,activeClassName:p}))}},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(411),s=a(414);t.default=()=>{const e=[new s.b];return r.a.createElement("div",{className:"container main-logo-container mb-4"},r.a.createElement("div",{className:"main-logo-wrapper"},r.a.createElement(l.b,{plugins:e,circular:!0,onMove:e=>{const t=e.currentTarget.panels,a=e.currentTarget.camera,n=a.position-a.alignPosition-a.offset,r=e.currentTarget.viewport.width/2;a.element.style.perspectiveOrigin=`${n+r}px 50%`,t.forEach((e=>{e.element.style.transform=`translateZ(${100*Math.abs(e.outsetProgress)}px) rotateY(${15*e.outsetProgress}deg)`}))}},r.a.createElement("div",{className:"main-logo-box"},r.a.createElement("p",{className:"image is-1by1"})),r.a.createElement("div",{className:"main-logo-box"},r.a.createElement("p",{className:"image is-1by1"})),r.a.createElement("div",{className:"main-logo-box"},r.a.createElement("p",{className:"image is-1by1"})),r.a.createElement("div",{className:"main-logo-box"},r.a.createElement("p",{className:"image is-1by1"})),r.a.createElement("div",{className:"main-logo-box"},r.a.createElement("p",{className:"image is-1by1"})))),r.a.createElement("img",{className:"flicking-logo",src:"img/flicking.svg"}))}},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(409),s=a(403);t.default=function(){return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},r.a.createElement("figure",{className:"image is-32x32 mx-5"},r.a.createElement("img",{src:"img/icons/typescript.svg"})),r.a.createElement("span",{className:"subtitle has-text-black"},"Typescript")),r.a.createElement("div",{className:"block"},r.a.createElement("p",null,"Flicking is fully written in ",r.a.createElement("a",{href:"https://www.typescriptlang.org/",target:"_blank"},"Typescript"),", and every classes, properties, and events are correctly typed and exported."))),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},r.a.createElement("figure",{className:"image is-32x32 mx-5"},r.a.createElement("img",{src:"img/icons/nuxt.svg"})),r.a.createElement("span",{className:"subtitle has-text-black"},"SSR")),r.a.createElement("div",{className:"block"},"Flicking is designed to support Server-Side Rendering(SSR), and can be used with famous SSR frameworks like ",r.a.createElement("a",{href:"https://nextjs.org/",target:"_blank"},"Next.js")," or ",r.a.createElement("a",{href:"https://nuxtjs.org/",target:"_blank"},"Nuxt.js"),"."))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},r.a.createElement("figure",{className:"image is-32x32 mx-5"},r.a.createElement("img",{src:"img/icons/books.svg"})),r.a.createElement("span",{className:"subtitle has-text-black"},"Rich API")),r.a.createElement("div",{className:"block"},r.a.createElement("p",null,"Flicking comes with a rich API. You can use it to create your own customized Flicking & Plugins."),r.a.createElement("p",null,"Check our ",r.a.createElement(l.a,{to:Object(s.a)("docs/api/Flicking")},"API Docs")))),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},r.a.createElement("figure",{className:"image is-32x32 mx-5"},r.a.createElement("img",{src:"img/icons/extension.svg"})),r.a.createElement("span",{className:"subtitle has-text-black"},"Plugins")),r.a.createElement("div",{className:"block"},r.a.createElement("p",null,"Flicking can be enhanced with a set of plugins, like AutoPlay, Fade, and Parallax."),r.a.createElement("p",null,"See more at ",r.a.createElement(l.a,{to:Object(s.a)("plugins")},"Plugins"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},r.a.createElement("figure",{className:"image is-32x32 mx-5"},r.a.createElement("img",{src:"img/icons/internetexplorer.svg"})),r.a.createElement("span",{className:"subtitle has-text-black"},"Supports IE9+ (With polyfills)")),r.a.createElement("div",null,r.a.createElement("p",null,"With the Promise polyfill and flicking-inline CSS, Flicking can support Internet Explorer 9+"),r.a.createElement("p",null,"\u26a0\ufe0f IE 11+ for Angular & Svelte"))),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},r.a.createElement("figure",{className:"image is-32x32 mx-5"},r.a.createElement("img",{src:"img/icons/arrow_right.svg"})),r.a.createElement("span",{className:"subtitle has-text-black"},"Progress")),r.a.createElement("div",{className:"block"},r.a.createElement("p",null,"Flicking supports progress, which can help to create the most fluent & smooth animation along the panel movement."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.a,{to:Object(s.a)("docs/api/Camera#progress")},"camera.progress")),r.a.createElement("li",null,r.a.createElement(l.a,{to:Object(s.a)("docs/api/Panel#progress")},"panel.progress")),r.a.createElement("li",null,r.a.createElement(l.a,{to:Object(s.a)("docs/api/Panel#outsetProgress")},"panel.outsetProgress")))))))}},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(411),s=a(414),c=a(64),i=a.n(c);t.default=()=>{const e=[new s.b];return r.a.createElement(l.b,{className:"mb-2",plugins:e,circular:!0},r.a.createElement("div",{className:"framework-logo button mr-2 is-danger"},r.a.createElement("div",{className:"framework-logo-wrapper mr-2"},r.a.createElement("img",{src:"img/icons/angular.svg"})),r.a.createElement("span",null,"@egjs/ngx-flicking")),r.a.createElement("div",{className:"framework-logo button mr-2 is-info"},r.a.createElement("div",{className:"framework-logo-wrapper mr-2"},r.a.createElement("img",{src:"img/icons/react.svg"})),r.a.createElement("span",null,"@egjs/react-flicking")),r.a.createElement("div",{className:"framework-logo button mr-2 is-success"},r.a.createElement("div",{className:"framework-logo-wrapper mr-2"},r.a.createElement("img",{src:"img/icons/vue.svg"})),r.a.createElement("span",null,"@egjs/vue-flicking")),r.a.createElement("div",{className:"framework-logo button mr-2 is-light"},r.a.createElement("div",{className:"framework-logo-wrapper mr-2"},r.a.createElement("img",{src:"img/icons/svelte.svg"})),r.a.createElement("span",null,"@egjs/svelte-flicking")),r.a.createElement("div",{className:`framework-logo button mr-2 ${i.a["is-vue3"]}`},r.a.createElement("div",{className:"framework-logo-wrapper mr-2"},r.a.createElement("img",{src:"img/icons/vue.svg"})),r.a.createElement("span",null,"@egjs/vue3-flicking")),r.a.createElement("div",{className:"framework-logo button mr-2 is-warning"},r.a.createElement("div",{className:"framework-logo-wrapper mr-2"},r.a.createElement("img",{src:"img/icons/preact.svg"})),r.a.createElement("span",null,"@egjs/preact-flicking")))}},65:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),s=a.n(l),c=a(409),i=a(403);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u,g,d=function(e){var t=e.title,a=e.titleId,s=m(e,["title","titleId"]);return l.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":a},s),t?l.createElement("title",{id:a},t):null,n||(n=l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),r||(r=l.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"})))};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var E=function(e){var t=e.title,a=e.titleId,n=p(e,["title","titleId"]);return l.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,"aria-labelledby":a},n),t?l.createElement("title",{id:a},t):null,u||(u=l.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),g||(g=l.createElement("path",{d:"M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"})))},b=a(61),v=a(62),h=a(63);t.default=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{className:"my-4"},s.a.createElement("div",{className:"hero",style:{overflow:"hidden"}},s.a.createElement(b.default,null),s.a.createElement("div",{className:"block is-flex is-justify-content-center"},s.a.createElement(c.a,{className:"button mr-2",to:Object(i.a)("docs/")},"\ud83d\ude80 Get Started"),s.a.createElement(c.a,{className:"button pl-5",style:{borderRadius:"4px 0 0 4px"},to:"https://github.com/naver/egjs-flicking"},s.a.createElement("span",{className:"icon is-small mr-2"},s.a.createElement("img",{src:"img/icons/github.svg"})),s.a.createElement("span",null,"GitHub")),s.a.createElement(c.a,{className:"button",style:{borderRadius:"0 4px 4px 0",borderLeft:"0"},to:"https://github.com/naver/egjs-flicking/stargazers"},s.a.createElement("img",{src:"img/icons/star.svg"}),s.a.createElement("img",{alt:"GitHub Repo stars",src:"https://img.shields.io/github/stars/naver/egjs-flicking?color=%23ffffff&label=%20&style=for-the-badge"}))))),s.a.createElement("article",{className:"container mb-6"},s.a.createElement("div",{className:"block mb-6"},s.a.createElement("p",{className:"title"},s.a.createElement(d,{className:"main-icon"})," Framework Ready"),s.a.createElement("p",{className:"subtitle"},"Use Flicking in your favorite framework!"),s.a.createElement(h.default,null)),s.a.createElement("div",{className:"block my-6"},s.a.createElement("p",{className:"title"},s.a.createElement(E,{className:"main-icon"})," Features"),s.a.createElement(v.default,null))),s.a.createElement("footer",null,s.a.createElement("div",{className:"hero is-medium is-warning"},s.a.createElement("div",{className:"hero-body container"},s.a.createElement("p",{className:"title has-text-dark is-flex is-align-items-center"},s.a.createElement("img",{className:"icon is-medium mr-3",src:"img/icons/task_alt.svg"}),s.a.createElement("span",null,"Ready to get started?")),s.a.createElement("p",{className:"subtitle has-text-dark"},"Check our Options & Demos to see what you can do with Flicking"),s.a.createElement(c.a,{className:"button is-white m-1",to:Object(i.a)("docs/")},"\ud83d\ude80 Get Started"),s.a.createElement(c.a,{className:"button is-link m-1",to:Object(i.a)("options/")},"\ud83d\udcc4 API"),s.a.createElement(c.a,{className:"button is-link m-1",to:Object(i.a)("options/")},"\u2699\ufe0f Options"),s.a.createElement(c.a,{className:"button is-link m-1",to:Object(i.a)("demos/")},"\u2728 Demos"),s.a.createElement(c.a,{className:"button is-link m-1",to:Object(i.a)("plugins/")},"\ud83d\udee0\ufe0f Plugins"),s.a.createElement(c.a,{className:"button is-link m-1",to:Object(i.a)("showcases/")},"\ud83c\udfad Showcases")))))}}]);