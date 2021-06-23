(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(245)),c={custom_edit_url:null},o={unversionedId:"api/Status",id:"version-4.0.0/api/Status",isDocsHomePage:!1,title:"Status",description:"`ts",source:"@site/versioned_docs/version-4.0.0/api/Status.mdx",sourceDirName:"api",slug:"/api/Status",permalink:"/egjs-flicking/docs/4.0.0/api/Status",editUrl:null,version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"FreeControlOptions",permalink:"/egjs-flicking/docs/4.0.0/api/FreeControlOptions"},next:{title:"EVENT",permalink:"/egjs-flicking/docs/4.0.0/api/EVENT"}},b=[{value:"Status",id:"Status",children:[]}],l={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"interface Status\n")),Object(i.b)("h3",{id:"Status"},"Status"),Object(i.b)("div",{className:"bulma-tags"}),Object(i.b)("p",null,"Flicking Status returned by ",Object(i.b)("a",{parentName:"p",href:"Flicking#getStatus"},"Flicking#getStatus")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(i.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(i.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"index"),Object(i.b)("td",{parentName:"tr",align:"center"},"number"),Object(i.b)("td",{parentName:"tr",align:"center"},"An index of the active panel")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"position"),Object(i.b)("td",{parentName:"tr",align:"center"},"object"),Object(i.b)("td",{parentName:"tr",align:"center"},"A info to restore camera ",Object(i.b)("a",{parentName:"td",href:"Camera#position"},"position"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"position.panel"),Object(i.b)("td",{parentName:"tr",align:"center"},"number"),Object(i.b)("td",{parentName:"tr",align:"center"},"An index of the panel camera is located at")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"position.progressInPanel"),Object(i.b)("td",{parentName:"tr",align:"center"},"number"),Object(i.b)("td",{parentName:"tr",align:"center"},"A progress of the camera position inside the panel")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"visibleOffset"),Object(i.b)("td",{parentName:"tr",align:"center"},"number"),Object(i.b)("td",{parentName:"tr",align:"center"},"An offset to visible panel's original index. This value is available only when ",Object(i.b)("inlineCode",{parentName:"td"},"visiblePanelsOnly")," is ",Object(i.b)("inlineCode",{parentName:"td"},"true"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"panels"),Object(i.b)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),Object(i.b)("td",{parentName:"tr",align:"center"},"A data array of panels")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"panels.index"),Object(i.b)("td",{parentName:"tr",align:"center"},"index"),Object(i.b)("td",{parentName:"tr",align:"center"},"An index of the panel")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"panels.html"),Object(i.b)("td",{parentName:"tr",align:"center"},"string ","|"," undefined"),Object(i.b)("td",{parentName:"tr",align:"center"},"An ",Object(i.b)("inlineCode",{parentName:"td"},"outerHTML")," of the panel element")))))}p.isMDXComponent=!0},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);