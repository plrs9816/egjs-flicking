(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),b=(n(0),n(245)),c={custom_edit_url:null},l={unversionedId:"api/Control",id:"api/Control",isDocsHomePage:!1,title:"Control",description:"`ts",source:"@site/docs/api/Control.mdx",sourceDirName:"api",slug:"/api/Control",permalink:"/egjs-flicking/docs/next/api/Control",editUrl:null,version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"AxesController",permalink:"/egjs-flicking/docs/next/api/AxesController"},next:{title:"FreeControl",permalink:"/egjs-flicking/docs/next/api/FreeControl"}},i=[{value:"Properties",id:"properties",children:[{value:"controller",id:"controller",children:[]},{value:"activeIndex",id:"activeIndex",children:[]},{value:"activePanel",id:"activePanel",children:[]},{value:"animating",id:"animating",children:[]},{value:"holding",id:"holding",children:[]}]},{value:"Methods",id:"methods",children:[{value:"moveToPosition",id:"moveToPosition",children:[]},{value:"init",id:"init",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"enable",id:"enable",children:[]},{value:"disable",id:"disable",children:[]},{value:"updatePosition",id:"updatePosition",children:[]},{value:"updateInput",id:"updateInput",children:[]},{value:"resetActive",id:"resetActive",children:[]},{value:"moveToPanel",id:"moveToPanel",children:[]}]}],o={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"class Control\n")),Object(b.b)("p",null,"A component that manages inputs and animation of Flicking"),Object(b.b)("div",{className:"container"},Object(b.b)("div",{className:"row mb-2"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Properties")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Methods"))),Object(b.b)("div",{className:"row"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#controller"},"controller"),Object(b.b)("br",null),Object(b.b)("a",{href:"#activeIndex"},"activeIndex"),Object(b.b)("br",null),Object(b.b)("a",{href:"#activePanel"},"activePanel"),Object(b.b)("br",null),Object(b.b)("a",{href:"#animating"},"animating"),Object(b.b)("br",null),Object(b.b)("a",{href:"#holding"},"holding")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#moveToPosition"},"moveToPosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#init"},"init"),Object(b.b)("br",null),Object(b.b)("a",{href:"#destroy"},"destroy"),Object(b.b)("br",null),Object(b.b)("a",{href:"#enable"},"enable"),Object(b.b)("br",null),Object(b.b)("a",{href:"#disable"},"disable"),Object(b.b)("br",null),Object(b.b)("a",{href:"#updatePosition"},"updatePosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#updateInput"},"updateInput"),Object(b.b)("br",null),Object(b.b)("a",{href:"#resetActive"},"resetActive"),Object(b.b)("br",null),Object(b.b)("a",{href:"#moveToPanel"},"moveToPanel")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"controller"},"controller"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A controller that handles the ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes")," events"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": ",Object(b.b)("a",{parentName:"p",href:"AxesController"},"AxesController")),Object(b.b)("h3",{id:"activeIndex"},"activeIndex"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Index number of the ",Object(b.b)("a",{parentName:"p",href:"Flicking#currentPanel"},"currentPanel")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Default"),": 0"),Object(b.b)("h3",{id:"activePanel"},"activePanel"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"An active panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),Object(b.b)("h3",{id:"animating"},"animating"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Whether Flicking's animating"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h3",{id:"holding"},"holding"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Whether user is clicking or touching"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"moveToPosition"},"moveToPosition"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Move ",Object(b.b)("a",{parentName:"p",href:"Camera"},"Camera")," to the given position"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target position")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Emits"),": ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"position"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"The target position to move")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"duration"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Duration of the panel movement animation (unit: ms).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"code"),Object(b.b)("th",{parentName:"tr",align:null},"condition"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),Object(b.b)("td",{parentName:"tr",align:null},"When the given panel is already removed or not in the Camera's ",Object(b.b)("a",{parentName:"td",href:"Camera#range"},"range"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),Object(b.b)("td",{parentName:"tr",align:null},"When ",Object(b.b)("a",{parentName:"td",href:"Control#init"},"init")," is not called before")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),Object(b.b)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),Object(b.b)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")))),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Initialize Control"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of ",Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),Object(b.b)("h3",{id:"destroy"},"destroy"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Destroy Control and return to initial state"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("h3",{id:"enable"},"enable"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Enable input from the user (mouse/touch)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"disable"},"disable"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Disable input from the user (mouse/touch)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"updatePosition"},"updatePosition"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-success"},"async")),Object(b.b)("p",null,"Update position after resizing"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"progressInPanel"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Previous camera's progress in active panel before resize")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",Object(b.b)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),Object(b.b)("h3",{id:"updateInput"},"updateInput"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Update ",Object(b.b)("a",{parentName:"p",href:"Control#controller"},"controller"),"'s state"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"resetActive"},"resetActive"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Reset ",Object(b.b)("a",{parentName:"p",href:"Control#activePanel"},"activePanel")," and ",Object(b.b)("a",{parentName:"p",href:"Control#activeAnchor"},"activeAnchor")," to ",Object(b.b)("inlineCode",{parentName:"p"},"null")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"moveToPanel"},"moveToPanel"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-success"},"async")),Object(b.b)("p",null,"Move ",Object(b.b)("a",{parentName:"p",href:"Camera"},"Camera")," to the given panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target panel")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Emits"),": ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",Object(b.b)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"panel"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Panel"},"Panel")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"The target panel to move")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An options object")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"duration"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"direction"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"DIRECTION"},"DIRECTION")),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"},"DIRECTION.NONE"),Object(b.b)("td",{parentName:"tr",align:"center"},"Direction to move, only available in the ",Object(b.b)("a",{parentName:"td",href:"Flicking#circular"},"circular")," mode")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"code"),Object(b.b)("th",{parentName:"tr",align:null},"condition"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),Object(b.b)("td",{parentName:"tr",align:null},"When the given panel is already removed or not in the Camera's ",Object(b.b)("a",{parentName:"td",href:"Camera#range"},"range"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),Object(b.b)("td",{parentName:"tr",align:null},"When ",Object(b.b)("a",{parentName:"td",href:"Control#init"},"init")," is not called before")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),Object(b.b)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),Object(b.b)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")))))}p.isMDXComponent=!0},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(n),j=a,s=O["".concat(c,".").concat(j)]||O[j]||m[j]||b;return n?r.a.createElement(s,l(l({ref:t},o),{},{components:n})):r.a.createElement(s,l({ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<b;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);