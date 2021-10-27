(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),c=(n(0),n(410)),b={custom_edit_url:null},i={unversionedId:"api/State",id:"version-4.0.0/api/State",isDocsHomePage:!1,title:"State",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/versioned_docs/version-4.0.0/api/State.mdx",sourceDirName:"api",slug:"/api/State",permalink:"/egjs-flicking/docs/4.0.0/api/State",editUrl:null,version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"IdleState",permalink:"/egjs-flicking/docs/4.0.0/api/IdleState"},next:{title:"AnchorPoint",permalink:"/egjs-flicking/docs/4.0.0/api/AnchorPoint"}},l=[{value:"Properties",id:"properties",children:[{value:"holding",id:"holding",children:[]},{value:"animating",id:"animating",children:[]}]},{value:"Methods",id:"methods",children:[{value:"onHold",id:"onHold",children:[]},{value:"onChange",id:"onChange",children:[]},{value:"onRelease",id:"onRelease",children:[]},{value:"onAnimationEnd",id:"onAnimationEnd",children:[]},{value:"onFinish",id:"onFinish",children:[]}]}],o={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",Object(c.b)("strong",null,"internal")," use only."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"class State\n")),Object(c.b)("p",null,"A component that shows the current status of the user input or the animation"),Object(c.b)("div",{className:"container"},Object(c.b)("div",{className:"row mb-2"},Object(c.b)("div",{className:"col col--6"},Object(c.b)("strong",null,"Properties")),Object(c.b)("div",{className:"col col--6"},Object(c.b)("strong",null,"Methods"))),Object(c.b)("div",{className:"row"},Object(c.b)("div",{className:"col col--6"},Object(c.b)("a",{href:"#holding"},"holding"),Object(c.b)("br",null),Object(c.b)("a",{href:"#animating"},"animating")),Object(c.b)("div",{className:"col col--6"},Object(c.b)("a",{href:"#onHold"},"onHold"),Object(c.b)("br",null),Object(c.b)("a",{href:"#onChange"},"onChange"),Object(c.b)("br",null),Object(c.b)("a",{href:"#onRelease"},"onRelease"),Object(c.b)("br",null),Object(c.b)("a",{href:"#onAnimationEnd"},"onAnimationEnd"),Object(c.b)("br",null),Object(c.b)("a",{href:"#onFinish"},"onFinish")))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"holding"},"holding"),Object(c.b)("div",{className:"bulma-tags"},Object(c.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(c.b)("p",null,"Whether user is clicking or touching"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(c.b)("h3",{id:"animating"},"animating"),Object(c.b)("div",{className:"bulma-tags"},Object(c.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(c.b)("p",null,"Whether Flicking's animating"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"onHold"},"onHold"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"An event handler for Axes's ",Object(c.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-hold"},"hold")," event"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),": void"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(c.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(c.b)("td",{parentName:"tr",align:"center"},"object"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(c.b)("td",{parentName:"tr",align:"center"},"object"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"A ",Object(c.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-hold"},"hold")," event of Axes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(c.b)("td",{parentName:"tr",align:"center"},"function"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),Object(c.b)("h3",{id:"onChange"},"onChange"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"An event handler for Axes's ",Object(c.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-change"},"change")," event"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),": void"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(c.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(c.b)("td",{parentName:"tr",align:"center"},"object"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(c.b)("td",{parentName:"tr",align:"center"},"object"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"A ",Object(c.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-change"},"change")," event of Axes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(c.b)("td",{parentName:"tr",align:"center"},"function"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),Object(c.b)("h3",{id:"onRelease"},"onRelease"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"An event handler for Axes's ",Object(c.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),": void"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(c.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(c.b)("td",{parentName:"tr",align:"center"},"object"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(c.b)("td",{parentName:"tr",align:"center"},"object"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"A ",Object(c.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of Axes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(c.b)("td",{parentName:"tr",align:"center"},"function"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),Object(c.b)("h3",{id:"onAnimationEnd"},"onAnimationEnd"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"An event handler for Axes's ",Object(c.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-animationEnd"},"animationEnd")," event"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),": void"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(c.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(c.b)("td",{parentName:"tr",align:"center"},"object"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(c.b)("td",{parentName:"tr",align:"center"},"object"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"A ",Object(c.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-animationEnd"},"animationEnd")," event of Axes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(c.b)("td",{parentName:"tr",align:"center"},"function"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),Object(c.b)("h3",{id:"onFinish"},"onFinish"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"An event handler for Axes's ",Object(c.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-finish"},"finish")," event"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),": void"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(c.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx"),Object(c.b)("td",{parentName:"tr",align:"center"},"object"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"Event context")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.flicking"),Object(c.b)("td",{parentName:"tr",align:"center"},Object(c.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),Object(c.b)("td",{parentName:"tr",align:"center"},"object"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"A ",Object(c.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-finish"},"finish")," event of Axes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),Object(c.b)("td",{parentName:"tr",align:"center"},"function"),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=p(n),j=a,d=s["".concat(b,".").concat(j)]||s[j]||O[j]||c;return n?r.a.createElement(d,i(i({ref:t},o),{},{components:n})):r.a.createElement(d,i({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=j;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<c;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);