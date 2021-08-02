(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(8),r=(n(0),n(401)),l={title:"Migration Guide from v3 to v4",id:"migration-from-v3",slug:"/migration-from-v3",custom_edit_url:null},o={unversionedId:"migration-from-v3",id:"version-4.2.0/migration-from-v3",isDocsHomePage:!1,title:"Migration Guide from v3 to v4",description:"HTML structure",source:"@site/versioned_docs/version-4.2.0/migration-from-v3.mdx",sourceDirName:".",slug:"/migration-from-v3",permalink:"/egjs-flicking/docs/4.2.0/migration-from-v3",editUrl:null,version:"4.2.0",frontMatter:{title:"Migration Guide from v3 to v4",id:"migration-from-v3",slug:"/migration-from-v3",custom_edit_url:null},sidebar:"version-4.2.0/docs",previous:{title:"Server Side Rendering (SSR)",permalink:"/egjs-flicking/docs/4.2.0/ssr"}},b=[{value:"HTML structure",id:"html-structure",children:[]},{value:"Changes when using umd modules",id:"changes-when-using-umd-modules",children:[]},{value:"Removed Options",id:"removed-options",children:[]},{value:"Removed methods",id:"removed-methods",children:[]},{value:"Option Changes",id:"option-changes",children:[]},{value:"Option&#39;s default value changes",id:"options-default-value-changes",children:[]},{value:"Method Changes",id:"method-changes",children:[]},{value:"Event Changes",id:"event-changes",children:[]}],c={toc:b};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"html-structure"},"HTML structure"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To support SSR(Server Side Rendering), Flicking no longer generates viewport & camera element."),Object(r.b)("li",{parentName:"ul"},"So you have to create a viewport & camera element in your HTML template yourself."),Object(r.b)("li",{parentName:"ul"},"Also, now you have to import CSS file we're providing and place a correct class names",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"We're now using ",Object(r.b)("inlineCode",{parentName:"li"},"flicking-viewport")," and ",Object(r.b)("inlineCode",{parentName:"li"},"flicking-camera")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"eg-flick-viewport")," and ",Object(r.b)("inlineCode",{parentName:"li"},"eg-flick-camera")))),Object(r.b)("li",{parentName:"ul"},"All framework-based Flickings don't have to consider this change, as they're still generating inner elements for you.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html",metastring:"{2,5-6,10-11}","{2,5-6,10-11}":!0},'<head>\n  <link rel="stylesheet" href="https://unpkg.com/@egjs/flicking@4.0.0/dist/flicking.css">\n</head>\n<body>\n  <div id="my-flicking" class="flicking-viewport">\n    <div class="flicking-camera">\n      <div>Panel 1</div>\n      <div>Panel 2</div>\n      <div>Panel 3</div>\n    </div>\n  </div>\n</body>\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#my-flicking");\n')),Object(r.b)("h2",{id:"changes-when-using-umd-modules"},"Changes when using umd modules"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We've removed ",Object(r.b)("inlineCode",{parentName:"li"},"eg")," namespace on umd modules.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"eg.Flicking")," is now just ",Object(r.b)("inlineCode",{parentName:"li"},"Flicking"))))),Object(r.b)("h2",{id:"removed-options"},"Removed Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CSS-related options",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"To support SSR, we've removed all CSS-related properties to guarantee UI when rendered in SSR frameworks."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"gap"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You can now set gaps between panels with CSS margins like ",Object(r.b)("inlineCode",{parentName:"li"},"margin-right")," or ",Object(r.b)("inlineCode",{parentName:"li"},"margin-bottom"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"zIndex"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You can now directly use CSS ",Object(r.b)("inlineCode",{parentName:"li"},"z-index")," to viewport element(",Object(r.b)("inlineCode",{parentName:"li"},".flicking-viewport"),") instead."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"overflow"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You can set ",Object(r.b)("inlineCode",{parentName:"li"},"overflow: visible")," to viewport element(",Object(r.b)("inlineCode",{parentName:"li"},".flicking-viewport"),") instead."))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"infinite")," and ",Object(r.b)("strong",{parentName:"li"},"lastIndex"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"needPanel")," event is now always triggered without the option ",Object(r.b)("strong",{parentName:"li"},"infinite")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"collectStatistics")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"thresholdAngle")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"isEqualSize")," and ",Object(r.b)("strong",{parentName:"li"},"isConstantSize")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"anchor")," and ",Object(r.b)("strong",{parentName:"li"},"hanger")," is now merged into the new option named ",Object(r.b)("strong",{parentName:"li"},"align"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"anchor: 20")," and ",Object(r.b)("inlineCode",{parentName:"li"},'hanger: "40%"')," is same to ",Object(r.b)("inlineCode",{parentName:"li"},'align: { panel: 20, camera: "40%" }')))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"infiniteThreshold")," is now renamed to ",Object(r.b)("strong",{parentName:"li"},"needPanelThreshold"))),Object(r.b)("h2",{id:"removed-methods"},"Removed methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"replace"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"As Flicking no longer supports isolated indexes, we've removed Flicking's ",Object(r.b)("strong",{parentName:"li"},"replace")," and added ",Object(r.b)("strong",{parentName:"li"},"prepend")," and ",Object(r.b)("strong",{parentName:"li"},"insert")," instead."))),Object(r.b)("li",{parentName:"ul"},"Getters",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"We're now usinge a getter property instead of ",Object(r.b)("inlineCode",{parentName:"li"},"get-")," methods"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"getIndex()")," > ",Object(r.b)("strong",{parentName:"li"},"index")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"getAllPanels()")," > ",Object(r.b)("strong",{parentName:"li"},"panels")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"getElement()")," > ",Object(r.b)("strong",{parentName:"li"},"element")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"getCurrentPanel()")," > ",Object(r.b)("strong",{parentName:"li"},"currentPanel"))))),Object(r.b)("h2",{id:"option-changes"},"Option Changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"adaptive")," is now only applicable when ",Object(r.b)("inlineCode",{parentName:"li"},"horizontal: true")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"moveType")," is now always a ",Object(r.b)("inlineCode",{parentName:"li"},"string"))),Object(r.b)("h2",{id:"options-default-value-changes"},"Option's default value changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default value of ",Object(r.b)("strong",{parentName:"li"},"duration")," is now ",Object(r.b)("inlineCode",{parentName:"li"},"500")," (was ",Object(r.b)("inlineCode",{parentName:"li"},"100"),")"),Object(r.b)("li",{parentName:"ul"},"Default value of ",Object(r.b)("strong",{parentName:"li"},"bounce")," is now ",Object(r.b)("inlineCode",{parentName:"li"},"20%")," (was ",Object(r.b)("inlineCode",{parentName:"li"},"[10, 10]"),")"),Object(r.b)("li",{parentName:"ul"},"Default value of ",Object(r.b)("strong",{parentName:"li"},"autoResize")," is now ",Object(r.b)("inlineCode",{parentName:"li"},"true")," (was ",Object(r.b)("inlineCode",{parentName:"li"},"false"),")")),Object(r.b)("h2",{id:"method-changes"},"Method Changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"addPlugins")," and ",Object(r.b)("strong",{parentName:"li"},"removePlugins")," do not longer accept arrays")),Object(r.b)("h2",{id:"event-changes"},"Event Changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"needPanel")," is now can be triggered on the index 0",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"It always has ",Object(r.b)("inlineCode",{parentName:"li"},'direction: "PREV"')))),Object(r.b)("li",{parentName:"ul"},"We don't longer provide the method ",Object(r.b)("strong",{parentName:"li"},"fill()")," in ",Object(r.b)("strong",{parentName:"li"},"needPanel")," event",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"As all panels now have continuous indexes, you can use ",Object(r.b)("inlineCode",{parentName:"li"},"prepend()")," or ",Object(r.b)("inlineCode",{parentName:"li"},"append()")," instead")))))}m.isMDXComponent=!0},401:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),m=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=m(n),u=a,d=p["".concat(l,".").concat(u)]||p[u]||s[u]||r;return n?i.a.createElement(d,o(o({ref:t},c),{},{components:n})):i.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);