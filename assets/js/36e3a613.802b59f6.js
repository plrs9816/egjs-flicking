(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),b=(a(0),a(356)),c={custom_edit_url:null},i={unversionedId:"api/DisabledState",id:"version-4.2.5/api/DisabledState",isDocsHomePage:!1,title:"DisabledState",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/versioned_docs/version-4.2.5/api/DisabledState.mdx",sourceDirName:"api",slug:"/api/DisabledState",permalink:"/egjs-flicking/docs/4.2.5/api/DisabledState",editUrl:null,version:"4.2.5",frontMatter:{custom_edit_url:null},sidebar:"version-4.2.5/api",previous:{title:"AnimatingState",permalink:"/egjs-flicking/docs/4.2.5/api/AnimatingState"},next:{title:"DraggingState",permalink:"/egjs-flicking/docs/4.2.5/api/DraggingState"}},l=[{value:"Properties",id:"properties",children:[{value:"holding",id:"holding",children:[]},{value:"animating",id:"animating",children:[]},{value:"delta",id:"delta",children:[]},{value:"targetPanel",id:"targetPanel",children:[]}]},{value:"Methods",id:"methods",children:[{value:"onEnter",id:"onEnter",children:[]},{value:"onHold",id:"onHold",children:[]},{value:"onChange",id:"onChange",children:[]},{value:"onRelease",id:"onRelease",children:[]},{value:"onAnimationEnd",id:"onAnimationEnd",children:[]},{value:"onFinish",id:"onFinish",children:[]}]}],p={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"class DisabledState extends State\n")),Object(b.b)("p",null,"A state that activates when Flicking is stopped by event's ",Object(b.b)("inlineCode",{parentName:"p"},"stop")," method"),Object(b.b)("div",{className:"container"},Object(b.b)("div",{className:"row mb-2"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Properties")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Methods"))),Object(b.b)("div",{className:"row"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#holding"},"holding"),Object(b.b)("br",null),Object(b.b)("a",{href:"#animating"},"animating"),Object(b.b)("br",null),Object(b.b)("a",{href:"#delta"},"delta"),Object(b.b)("br",null),Object(b.b)("a",{href:"#targetPanel"},"targetPanel")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#onEnter"},"onEnter"),Object(b.b)("br",null),Object(b.b)("a",{href:"#onHold"},"onHold"),Object(b.b)("br",null),Object(b.b)("a",{href:"#onChange"},"onChange"),Object(b.b)("br",null),Object(b.b)("a",{href:"#onRelease"},"onRelease"),Object(b.b)("br",null),Object(b.b)("a",{href:"#onAnimationEnd"},"onAnimationEnd"),Object(b.b)("br",null),Object(b.b)("a",{href:"#onFinish"},"onFinish")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"holding"},"holding"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Whether user is clicking or touching"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": false"),Object(b.b)("h3",{id:"animating"},"animating"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Whether Flicking's animating"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": true"),Object(b.b)("h3",{id:"delta"},"delta"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"A sum of delta values of change events from the last hold event of Axes"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"targetPanel"},"targetPanel"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"A panel to set as ",Object(b.b)("a",{parentName:"p",href:"Control#activePanel"},"Control#activePanel")," after the animation is finished"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"onEnter"},"onEnter"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"An callback which is called when state has changed to this state"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"prevState"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"State"},"State")),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An previous state")))),Object(b.b)("h3",{id:"onHold"},"onHold"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"An event handler for Axes's ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-hold"},"hold")," event"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-hold"},"hold")," event of Axes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(b.b)("td",{parentName:"tr",align:"center"},"function"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),Object(b.b)("h3",{id:"onChange"},"onChange"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"An event handler for Axes's ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-change"},"change")," event"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-change"},"change")," event of Axes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(b.b)("td",{parentName:"tr",align:"center"},"function"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),Object(b.b)("h3",{id:"onRelease"},"onRelease"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"An event handler for Axes's ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of Axes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(b.b)("td",{parentName:"tr",align:"center"},"function"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),Object(b.b)("h3",{id:"onAnimationEnd"},"onAnimationEnd"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"An event handler for Axes's ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-animationEnd"},"animationEnd")," event"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-animationEnd"},"animationEnd")," event of Axes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(b.b)("td",{parentName:"tr",align:"center"},"function"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),Object(b.b)("h3",{id:"onFinish"},"onFinish"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"An event handler for Axes's ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-finish"},"finish")," event"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-finish"},"finish")," event of Axes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(b.b)("td",{parentName:"tr",align:"center"},"function"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))))}s.isMDXComponent=!0},356:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),o=s(a),O=n,j=o["".concat(c,".").concat(O)]||o[O]||d[O]||b;return a?r.a.createElement(j,i(i({ref:t},p),{},{components:a})):r.a.createElement(j,i({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);