(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{230:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return s}));var t=n(3),i=n(8),o=(n(0),n(245)),a={title:"Handling errors",id:"error-handling",slug:"/error-handling",custom_edit_url:null},c={unversionedId:"error-handling",id:"error-handling",isDocsHomePage:!1,title:"Handling errors",description:"All known Flicking errors are thrown as FlickingError with a code property set as listed on the ERRORCODE.",source:"@site/docs/error-handling.mdx",sourceDirName:".",slug:"/error-handling",permalink:"/egjs-flicking/docs/next/error-handling",editUrl:null,version:"current",frontMatter:{title:"Handling errors",id:"error-handling",slug:"/error-handling",custom_edit_url:null},sidebar:"docs",previous:{title:"Listening to Events",permalink:"/egjs-flicking/docs/next/listening-to-events"},next:{title:"Polyfills",permalink:"/egjs-flicking/docs/next/polyfills"}},l=[],p={toc:l};function s(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All known Flicking errors are thrown as ",Object(o.b)("a",{parentName:"p",href:"api/FlickingError"},"FlickingError")," with a ",Object(o.b)("inlineCode",{parentName:"p"},"code")," property set as listed on the ",Object(o.b)("a",{parentName:"p",href:"api/ERROR_CODE"},"ERROR_CODE"),"."),Object(o.b)("p",null,"A common use-case for this is when you're calling a ",Object(o.b)("a",{parentName:"p",href:"api/Flicking#prev"},"prev")," / ",Object(o.b)("a",{parentName:"p",href:"api/Flicking#next"},"next")," / ",Object(o.b)("a",{parentName:"p",href:"api/Flicking#moveTo"},"moveTo")," of Flicking which can throw an error when Flicking's already animating."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import { FlickingError, ERROR_CODE } from "@egjs/flicking";\n\ntry {\n  await flicking.next();\n} catch (err) {\n  if (err instanceof FlickingError) {\n    if (err.code === ERROR_CODE.ANIMATION_ALREADY_PLAYING) {\n      console.error("Animation is already playing!");\n    } else if (err.code === ERROR_CODE.ANIMATION_INTERRUPTED) {\n      console.error("Animation is interrupted by user.");\n    }\n  }\n}\n')),Object(o.b)("p",null,"See all possible error codes at ",Object(o.b)("a",{parentName:"p",href:"api/ERROR_CODE"},"ERROR_CODE"),"."))}s.isMDXComponent=!0},245:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return g}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var r=i.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=s(e.components);return i.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=t,g=u["".concat(a,".").concat(d)]||u[d]||f[d]||o;return n?i.a.createElement(g,c(c({ref:r},p),{},{components:n})):i.a.createElement(g,c({ref:r},p))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);