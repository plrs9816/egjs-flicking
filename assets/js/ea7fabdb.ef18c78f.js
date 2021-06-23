(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{252:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var n=a(16),s=a(256);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,r=i.forcePrependBaseUrl,c=void 0!==r&&r,l=i.absolute,o=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(s.b)(a))return a;if(c)return t+a;var m=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+m:m}(i,a,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},254:function(e,t,a){"use strict";var n=a(8),s=a(0),i=a.n(s),r=a(10),c=a(256),l=a(7),o=Object(s.createContext)({collectLink:function(){}}),m=a(252);t.a=function(e){var t,a,u,d=e.isNavLink,g=e.to,f=e.href,p=e.activeClassName,v=e.isActive,E=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,x=void 0===b||b,k=Object(n.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=Object(m.b)().withBaseUrl,N=Object(s.useContext)(o),w=g||f,j=Object(c.a)(w),O=null==w?void 0:w.replace("pathname://",""),P=void 0!==O?(a=O,x&&function(e){return e.startsWith("/")}(a)?h(a):a):void 0,y=Object(s.useRef)(!1),S=d?r.e:r.c,C=l.a.canUseIntersectionObserver;Object(s.useEffect)((function(){return!C&&j&&null!=P&&window.docusaurus.prefetch(P),function(){C&&u&&u.disconnect()}}),[P,C,j]);var A=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,F=!P||!j||A;return P&&j&&!A&&!E&&N.collectLink(P),F?i.a.createElement("a",Object.assign({href:P},w&&!j&&{target:"_blank",rel:"noopener noreferrer"},k)):i.a.createElement(S,Object.assign({},k,{onMouseEnter:function(){y.current||null==P||(window.docusaurus.preload(P),y.current=!0)},innerRef:function(e){var t,a;C&&e&&j&&(t=e,a=function(){null!=P&&window.docusaurus.prefetch(P)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:P||""},d&&{isActive:v,activeClassName:p}))}},256:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function s(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s}))},61:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(254),r=a(252);t.default=()=>s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},s.a.createElement("figure",{className:"image is-32x32 mx-5"},s.a.createElement("img",{src:"img/icons/typescript.svg"})),s.a.createElement("span",{className:"subtitle has-text-black"},"Typescript")),s.a.createElement("div",{className:"block"},s.a.createElement("p",null,"Flicking is fully written in ",s.a.createElement("a",{href:"https://www.typescriptlang.org/",target:"_blank"},"Typescript"),", and every classes, properties, and events are correctly typed and exported."))),s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},s.a.createElement("figure",{className:"image is-32x32 mx-5"},s.a.createElement("img",{src:"img/icons/nuxt.svg"})),s.a.createElement("span",{className:"subtitle has-text-black"},"SSR")),s.a.createElement("div",{className:"block"},"Flicking is designed to support Server-Side Rendering(SSR), and can be used with famous SSR frameworks like ",s.a.createElement("a",{href:"https://nextjs.org/",target:"_blank"},"Next.js")," or ",s.a.createElement("a",{href:"https://nuxtjs.org/",target:"_blank"},"Nuxt.js"),"."))),s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},s.a.createElement("figure",{className:"image is-32x32 mx-5"},s.a.createElement("img",{src:"img/icons/books.svg"})),s.a.createElement("span",{className:"subtitle has-text-black"},"Rich API")),s.a.createElement("div",{className:"block"},s.a.createElement("p",null,"Flicking comes with a rich API. You can use it to create your own customized Flicking & Plugins."),s.a.createElement("p",null,"Check our ",s.a.createElement(i.a,{to:Object(r.a)("docs/api/Flicking")},"API Docs")))),s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},s.a.createElement("figure",{className:"image is-32x32 mx-5"},s.a.createElement("img",{src:"img/icons/extension.svg"})),s.a.createElement("span",{className:"subtitle has-text-black"},"Plugins")),s.a.createElement("div",{className:"block"},s.a.createElement("p",null,"Flicking can be enhanced with a set of plugins, like AutoPlay, Fade, and Parallax."),s.a.createElement("p",null,"See more at ",s.a.createElement(i.a,{to:Object(r.a)("plugins")},"Plugins"))))),s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},s.a.createElement("figure",{className:"image is-32x32 mx-5"},s.a.createElement("img",{src:"img/icons/internetexplorer.svg"})),s.a.createElement("span",{className:"subtitle has-text-black"},"Supports IE9+ (With polyfills)")),s.a.createElement("div",null,s.a.createElement("p",null,"With the Promise polyfill and flicking-inline CSS, Flicking can support Internet Explorer 9+"))),s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"block is-flex is-flex-direction-row is-align-items-center"},s.a.createElement("figure",{className:"image is-32x32 mx-5"},s.a.createElement("img",{src:"img/icons/arrow_right.svg"})),s.a.createElement("span",{className:"subtitle has-text-black"},"Progress")),s.a.createElement("div",{className:"block"},s.a.createElement("p",null,"Flicking supports progress, which can help to create the most fluent & smooth animation along the panel movement."),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(i.a,{to:Object(r.a)("docs/api/Camera#progress")},"camera.progress")),s.a.createElement("li",null,s.a.createElement(i.a,{to:Object(r.a)("docs/api/Panel#progress")},"panel.progress")),s.a.createElement("li",null,s.a.createElement(i.a,{to:Object(r.a)("docs/api/Panel#outsetProgress")},"panel.outsetProgress")))))))}}]);