(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{356:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=n,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?o.a.createElement(b,a(a({ref:r},c),{},{components:t})):o.a.createElement(b,a({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},82:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(8),i=(t(0),t(356)),l={title:"Polyfills",id:"polyfills",slug:"/polyfills",custom_edit_url:null},a={unversionedId:"polyfills",id:"version-4.3.1/polyfills",isDocsHomePage:!1,title:"Polyfills",description:"Flicking is based on es5 and additionally needs es6 Promise to work properly.",source:"@site/versioned_docs/version-4.3.1/polyfills.mdx",sourceDirName:".",slug:"/polyfills",permalink:"/egjs-flicking/docs/polyfills",editUrl:null,version:"4.3.1",frontMatter:{title:"Polyfills",id:"polyfills",slug:"/polyfills",custom_edit_url:null},sidebar:"version-4.3.1/docs",previous:{title:"Handling errors",permalink:"/egjs-flicking/docs/error-handling"},next:{title:"Server Side Rendering (SSR)",permalink:"/egjs-flicking/docs/ssr"}},s=[],c={toc:s};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Flicking is based on es5 and additionally needs es6 Promise to work properly.",Object(i.b)("br",{parentName:"p"}),"\n","es5 is basically supported on IE9+ (",Object(i.b)("a",{parentName:"p",href:"http://kangax.github.io/compat-table/es5/"},"Source"),")",Object(i.b)("br",{parentName:"p"}),"\n","So, only es6 Promise is needed to run Flicking on the older browsers."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.js"><\/script>\n')),Object(i.b)("p",null,"Adding the above script will make Flicking run on the older browsers."))}p.isMDXComponent=!0}}]);