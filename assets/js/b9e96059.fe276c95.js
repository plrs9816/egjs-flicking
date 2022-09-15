"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18539],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),k=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=k(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=k(n),s=r,g=m["".concat(o,".").concat(s)]||m[s]||c[s]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66113:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return p},metadata:function(){return k},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={custom_edit_url:null},o=void 0,k={unversionedId:"api/SnapControl",id:"version-4.9.3/api/SnapControl",title:"SnapControl",description:"A Control that uses a release momentum to choose destination panel",source:"@site/versioned_docs/version-4.9.3/api/SnapControl.mdx",sourceDirName:"api",slug:"/api/SnapControl",permalink:"/egjs-flicking/docs/4.9.3/api/SnapControl",draft:!1,editUrl:null,tags:[],version:"4.9.3",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"FreeControl",permalink:"/egjs-flicking/docs/4.9.3/api/FreeControl"},next:{title:"StrictControl",permalink:"/egjs-flicking/docs/4.9.3/api/StrictControl"}},d={},c=[{value:"constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"count",id:"count",level:3},{value:"controller",id:"controller",level:3},{value:"activeIndex",id:"activeIndex",level:3},{value:"activePanel",id:"activePanel",level:3},{value:"animating",id:"animating",level:3},{value:"holding",id:"holding",level:3},{value:"Methods",id:"methods",level:2},{value:"moveToPosition",id:"moveToPosition",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"enable",id:"enable",level:3},{value:"disable",id:"disable",level:3},{value:"release",id:"release",level:3},{value:"updatePosition",id:"updatePosition",level:3},{value:"updateInput",id:"updateInput",level:3},{value:"resetActive",id:"resetActive",level:3},{value:"moveToPanel",id:"moveToPanel",level:3},{value:"setActive",id:"setActive",level:3}],m={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class SnapControl extends Control\n")),(0,l.kt)("div",null),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"Control"},"Control")," that uses a release momentum to choose destination panel"),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#count"},"count"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#controller"},"controller"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#activeIndex"},"activeIndex"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#activePanel"},"activePanel"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#animating"},"animating"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#holding"},"holding")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#moveToPosition"},"moveToPosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#init"},"init"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#destroy"},"destroy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#enable"},"enable"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#disable"},"disable"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#release"},"release"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updatePosition"},"updatePosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateInput"},"updateInput"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#resetActive"},"resetActive"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#moveToPanel"},"moveToPanel"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#setActive"},"setActive")))),(0,l.kt)("h2",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"new SnapControl()\n")),(0,l.kt)("div",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Partial","<",(0,l.kt)("a",{parentName:"td",href:"SnapControlOptions"},"SnapControlOptions"),">"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"count"},"count"),(0,l.kt)("div",null),(0,l.kt)("p",null,"Maximum number of panels can go after release"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default"),": Infinity"),(0,l.kt)("h3",{id:"controller"},"controller"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly"),(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"A controller that handles the ",(0,l.kt)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/"},"@egjs/axes")," events"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"AxesController"},"AxesController")),(0,l.kt)("h3",{id:"activeIndex"},"activeIndex"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly"),(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Index number of the ",(0,l.kt)("a",{parentName:"p",href:"Flicking#currentPanel"},"currentPanel")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default"),": 0"),(0,l.kt)("h3",{id:"activePanel"},"activePanel"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly"),(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"An active panel"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,l.kt)("h3",{id:"animating"},"animating"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly"),(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Whether Flicking's animating"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("h3",{id:"holding"},"holding"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly"),(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Whether user is clicking or touching"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"moveToPosition"},"moveToPosition"),(0,l.kt)("div",null),(0,l.kt)("p",null,"Move ",(0,l.kt)("a",{parentName:"p",href:"Camera"},"Camera")," to the given position"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target position")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Emits"),": ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"position"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"The target position to move")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration of the panel movement animation (unit: ms).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:release"},"release")," event of ",(0,l.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/"},"Axes"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,"|code|condition|",(0,l.kt)("br",null),"|---|---|",(0,l.kt)("br",null),"|",(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE"),"|When the given panel is already removed or not in the Camera's ",(0,l.kt)("a",{parentName:"p",href:"Camera#range"},"range"),"|",(0,l.kt)("br",null),"|",(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING"),"|When ",(0,l.kt)("a",{parentName:"p",href:"Control#init"},"init")," is not called before|",(0,l.kt)("br",null),"|",(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED"),"|When the animation is interrupted by user input|",(0,l.kt)("br",null),"|",(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"STOP_CALLED_BY_USER"),"|When the animation is interrupted by user input|"),(0,l.kt)("h3",{id:"init"},"init"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Initialize Control"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"An instance of ",(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Destroy Control and return to initial state"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"enable"},"enable"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Enable input from the user (mouse/touch)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"disable"},"disable"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Disable input from the user (mouse/touch)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"release"},"release"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Releases ongoing user input (mouse/touch)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"updatePosition"},"updatePosition"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Update position after resizing"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"progressInPanel"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Previous camera's progress in active panel before resize")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,l.kt)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,l.kt)("h3",{id:"updateInput"},"updateInput"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Update ",(0,l.kt)("a",{parentName:"p",href:"Control#controller"},"controller"),"'s state"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"resetActive"},"resetActive"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Reset ",(0,l.kt)("a",{parentName:"p",href:"Control#activePanel"},"activePanel")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"moveToPanel"},"moveToPanel"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited"),(0,l.kt)("span",{className:"badge badge--success"},"async")),(0,l.kt)("p",null,"Move ",(0,l.kt)("a",{parentName:"p",href:"Camera"},"Camera")," to the given panel"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target panel")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Emits"),": ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"panel"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"The target panel to move")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"An options object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:release"},"release")," event of ",(0,l.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/"},"Axes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"direction"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"DIRECTION"},"DIRECTION")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DIRECTION.NONE"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Direction to move, only available in the ",(0,l.kt)("a",{parentName:"td",href:"Flicking#circular"},"circular")," mode")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,"|code|condition|",(0,l.kt)("br",null),"|---|---|",(0,l.kt)("br",null),"|",(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE"),"|When the given panel is already removed or not in the Camera's ",(0,l.kt)("a",{parentName:"p",href:"Camera#range"},"range"),"|",(0,l.kt)("br",null),"|",(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING"),"|When ",(0,l.kt)("a",{parentName:"p",href:"Control#init"},"init")," is not called before|",(0,l.kt)("br",null),"|",(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED"),"|When the animation is interrupted by user input|",(0,l.kt)("br",null),"|",(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"STOP_CALLED_BY_USER"),"|When the animation is interrupted by user input|"),(0,l.kt)("h3",{id:"setActive"},"setActive"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"newActivePanel"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"prevActivePanel"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")," ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"isTrusted"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);