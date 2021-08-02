(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{277:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return v})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(8),i=(t(0),t(401)),o=t(409),l=t(403),c=t(405),s=t(406),u={title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},b={unversionedId:"listening-to-events",id:"version-4.2.0/listening-to-events",isDocsHomePage:!1,title:"Listening to Events",description:"<Tabs",source:"@site/versioned_docs/version-4.2.0/listening-to-events.mdx",sourceDirName:".",slug:"/listening-to-events",permalink:"/egjs-flicking/docs/4.2.0/listening-to-events",editUrl:null,version:"4.2.0",frontMatter:{title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},sidebar:"version-4.2.0/docs",previous:{title:"Using the Methods",permalink:"/egjs-flicking/docs/4.2.0/using-the-methods"},next:{title:"Handling errors",permalink:"/egjs-flicking/docs/4.2.0/error-handling"}},v=[],p={toc:v};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(c.a,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"js",mdxType:"TabItem"},Object(i.b)("p",null,"You can listen to Flicking's events with ",Object(i.b)("a",{parentName:"p",href:"api/Flicking#on"},"Flicking#on")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// If you're using a package manager\nimport { EVENTS } from \"@egjs/flicking\";\n// Or, if you're using a CDN\nconst EVENTS = Flicking.EVENTS;\n\nflicking.on(EVENTS.MOVE, evt => {\n  console.log(evt);\n})\n"))),Object(i.b)(s.a,{value:"react",mdxType:"TabItem"},Object(i.b)("p",null,"All events are prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"on-"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"camelCase"),"d."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/react-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n'))),Object(i.b)(s.a,{value:"vue",mdxType:"TabItem"},Object(i.b)("p",null,"All event names are renamed to ",Object(i.b)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",Object(i.b)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<Flicking\n  @ready="e => { ... }"\n  @move-end="e => { ... }"\n  v-on:need-panel="e => { ... }"\n>\n   {{ ... }}\n</Flicking>\n'))),Object(i.b)(s.a,{value:"vue3",mdxType:"TabItem"},Object(i.b)("p",null,"All event names are renamed to ",Object(i.b)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",Object(i.b)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<Flicking\n  @ready="e => { ... }"\n  @move-end="e => { ... }"\n  v-on:need-panel="e => { ... }"\n>\n   {{ ... }}\n</Flicking>\n'))),Object(i.b)(s.a,{value:"angular",mdxType:"TabItem"},Object(i.b)("p",null,"You can listen events of the ",Object(i.b)("inlineCode",{parentName:"p"},"ngx-flicking")," using Angular's ",Object(i.b)("a",{parentName:"p",href:"https://angular.io/guide/event-binding"},"event binding"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking\n  [options]="{ needPanelThreshold: 50, renderOnlyVisible: true }"\n  (needPanel)="onNeedPanel($event)">\n  {{ ... }}\n</ngx-flicking>\n'))),Object(i.b)(s.a,{value:"preact",mdxType:"TabItem"},Object(i.b)("p",null,"All events are prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"on-"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"camelCase"),"d."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/preact-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n'))),Object(i.b)(s.a,{value:"svelte",mdxType:"TabItem"},Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"on:eventName")," syntax to listen Flicking events.",Object(i.b)("br",{parentName:"p"}),"\n","All event properties are available in the event's ",Object(i.b)("inlineCode",{parentName:"p"},"detail")," property."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";\n  import "@egjs/svelte-flicking/dist/flicking.css";\n<\/script>\n\n<Flicking on:ready={e => {\n  console.log("READY!");\n}} on:move={e => {\n  // Event properties are placed in "detail"\n  console.log(e.detail);\n}}>\n  \x3c!-- Those will render "div" element --\x3e\n  <FlickingPanel>0</FlickingPanel>\n  <FlickingPanel>1</FlickingPanel>\n  <FlickingPanel>2</FlickingPanel>\n</Flicking>\n')))),Object(i.b)("p",null,"See all available events at ",Object(i.b)(o.a,{to:Object(l.a)("docs/api/Flicking#events"),mdxType:"Link"},"Flicking#events"),"."))}d.isMDXComponent=!0},401:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(t),p=r,d=b["".concat(o,".").concat(p)]||b[p]||v[p]||i;return t?a.a.createElement(d,l(l({ref:n},s),{},{components:t})):a.a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},402:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},403:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o}));var r=t(16),a=t(408);function i(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(l)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+u:u}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},404:function(e,n,t){"use strict";var r=t(0),a=t(407);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},405:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(404),o=t(402),l=t(60),c=t.n(l);var s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,l=e.defaultValue,b=e.values,v=e.groupId,p=e.className,d=Object(i.a)(),f=d.tabGroupChoices,m=d.setTabGroupChoices,g=Object(r.useState)(l),O=g[0],j=g[1],h=r.Children.toArray(e.children),k=[];if(null!=v){var y=f[v];null!=y&&y!==O&&b.some((function(e){return e.value===y}))&&j(y)}var N=function(e){var n=e.currentTarget,t=k.indexOf(n),r=b[t].value;j(r),null!=v&&(m(v,r),setTimeout((function(){var e,t,r,a,i,o,l,s;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,t>=0&&i<=s&&a<=l&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c.a.tabItemActive),setTimeout((function(){return n.classList.remove(c.a.tabItemActive)}),2e3))}),150))},E=function(e){var n,t;switch(e.keyCode){case u:var r=k.indexOf(e.target)+1;t=k[r]||k[0];break;case s:var a=k.indexOf(e.target)-1;t=k[a]||k[k.length-1]}null===(n=t)||void 0===n||n.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},p)},b.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:E,onFocus:N,onClick:N},t)}))),n?Object(r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},406:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},407:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},408:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))},409:function(e,n,t){"use strict";var r=t(8),a=t(0),i=t.n(a),o=t(10),l=t(408),c=t(7),s=Object(a.createContext)({collectLink:function(){}}),u=t(403);n.a=function(e){var n,t,b,v=e.isNavLink,p=e.to,d=e.href,f=e.activeClassName,m=e.isActive,g=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,j=void 0===O||O,h=Object(r.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=Object(u.b)().withBaseUrl,y=Object(a.useContext)(s),N=p||d,E=Object(l.a)(N),w=null==N?void 0:N.replace("pathname://",""),x=void 0!==w?(t=w,j&&function(e){return e.startsWith("/")}(t)?k(t):t):void 0,T=Object(a.useRef)(!1),C=v?o.e:o.c,P=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!P&&E&&null!=x&&window.docusaurus.prefetch(x),function(){P&&b&&b.disconnect()}}),[x,P,E]);var F=null!==(n=null==x?void 0:x.startsWith("#"))&&void 0!==n&&n,I=!x||!E||F;return x&&E&&!F&&!g&&y.collectLink(x),I?i.a.createElement("a",Object.assign({href:x},N&&!E&&{target:"_blank",rel:"noopener noreferrer"},h)):i.a.createElement(C,Object.assign({},h,{onMouseEnter:function(){T.current||null==x||(window.docusaurus.preload(x),T.current=!0)},innerRef:function(e){var n,t;P&&e&&E&&(n=e,t=function(){null!=x&&window.docusaurus.prefetch(x)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(n),b.disconnect(),t())}))}))).observe(n))},to:x||""},v&&{isActive:m,activeClassName:f}))}}}]);