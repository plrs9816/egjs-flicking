(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{245:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,d=s["".concat(o,".").concat(m)]||s[m]||f[m]||c;return t?i.a.createElement(d,a(a({ref:n},p),{},{components:t})):i.a.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<c;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(8),c=(t(0),t(245)),o={custom_edit_url:null},a={unversionedId:"api/FlickingEvents",id:"api/FlickingEvents",isDocsHomePage:!1,title:"FlickingEvents",description:"`ts",source:"@site/docs/api/FlickingEvents.mdx",sourceDirName:"api",slug:"/api/FlickingEvents",permalink:"/egjs-flicking/docs/next/api/FlickingEvents",editUrl:null,version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Component",permalink:"/egjs-flicking/docs/next/api/Component"},next:{title:"FlickingOptions",permalink:"/egjs-flicking/docs/next/api/FlickingOptions"}},l=[{value:"FlickingEvents",id:"FlickingEvents",children:[]}],p={toc:l};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"interface FlickingEvents\n")),Object(c.b)("h3",{id:"FlickingEvents"},"FlickingEvents"),Object(c.b)("div",{className:"bulma-tags"}))}u.isMDXComponent=!0}}]);