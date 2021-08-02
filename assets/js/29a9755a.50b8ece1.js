(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{398:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return g})),n.d(t,"metadata",(function(){return h})),n.d(t,"toc",(function(){return y})),n.d(t,"default",(function(){return v}));var a=n(3),b=n(8),c=n(0),l=n.n(c),i=n(401),r=n(411),m=n(422),o=({children:e,...t})=>{const n=Object(c.useRef)(),[b,i]=Object(c.useState)([]);let o=m.b.READY;return l.a.createElement("div",null,l.a.createElement(r.b,Object(a.a)({ref:n},t,{onReady:()=>{Object.keys(m.b).forEach((e=>{const t=m.b[e];n.current.on(t,(e=>{e.eventType===m.b.HOLD_START?i((()=>[e.eventType])):o!==e.eventType&&i((t=>[...t,e.eventType])),o=e.eventType}))}))}}),e),l.a.createElement("div",null,b.map(((e,t)=>l.a.createElement("span",{className:"bulma-tag mr-2 is-info",key:t},e)))))},p=n(417),s=e=>Array.apply(0,Array(e)).map(((e,t)=>l.a.createElement(p.a,{key:t,index:t}))),d=l.a.forwardRef((({...e},t)=>l.a.createElement("a",{ref:t,href:"https://naver.com",className:"panel-with-link"},l.a.createElement(p.a,e)))),u=(n(405),n(406),n(426)),O=n(427),j=()=>{const e=l.a.createRef();return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.b,{autoInit:!1,ref:e},l.a.createElement(p.a,{index:0}),l.a.createElement(p.a,{index:1}),l.a.createElement(p.a,{index:2}),l.a.createElement(p.a,{index:3}),l.a.createElement(p.a,{index:4})),l.a.createElement("button",{className:"button is-fullwidth",onClick:()=>{e.current.init()}},"Call init()"))},g={title:"Options",custom_edit_url:null},h={type:"mdx",permalink:"/egjs-flicking/Options",source:"@site/src/pages/Options.mdx"},y=[{value:"UI / Layout",id:"ui--layout",children:[{value:"align",id:"align",children:[]},{value:"defaultIndex",id:"defaultindex",children:[]},{value:"horizontal",id:"horizontal",children:[]},{value:"circular",id:"circular",children:[]},{value:"bound",id:"bound",children:[]},{value:"adaptive",id:"adaptive",children:[]}]},{value:"Event",id:"event",children:[{value:"needPanelThreshold",id:"needpanelthreshold",children:[]},{value:"preventEventsBeforeInit",id:"preventeventsbeforeinit",children:[]}]},{value:"Animation",id:"animation",children:[{value:"deceleration",id:"deceleration",children:[]},{value:"easing",id:"easing",children:[]}]},{value:"Input",id:"input",children:[{value:"duration",id:"duration",children:[]},{value:"inputType",id:"inputtype",children:[]},{value:"moveType",id:"movetype",children:[]},{value:"threshold",id:"threshold",children:[]},{value:"interruptable",id:"interruptable",children:[]},{value:"bounce",id:"bounce",children:[]},{value:"iOSEdgeSwipeThreshold",id:"iosedgeswipethreshold",children:[]},{value:"preventClickOnDrag",id:"preventclickondrag",children:[]},{value:"disableOnInit",id:"disableoninit",children:[]}]},{value:"Performance",id:"performance",children:[{value:"renderOnlyVisible",id:"renderonlyvisible",children:[]}]},{value:"Others",id:"others",children:[{value:"autoInit",id:"autoinit",children:[]},{value:"autoResize",id:"autoresize",children:[]}]}],x={toc:y};function v(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},x,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"options"},"Options"),Object(i.b)("h2",{id:"ui--layout"},"UI / Layout"),Object(i.b)("h3",{id:"align"},"align"),Object(i.b)("p",null,"Align position of the panels within viewport.",Object(i.b)("br",{parentName:"p"}),"\n","You can set different values each for the panel and camera."),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'// Same to { camera: "0%", panel: "0%" }\nalign: "prev"\n'))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{align:"prev",mdxType:"Flicking"},s(3)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'// Same to { camera: "50%", panel: "50%" }\nalign: "center"\n'))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{align:"center",mdxType:"Flicking"},s(3)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'// Same to { camera: "100%", panel: "100%" }\nalign: "next"\n'))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{align:"next",mdxType:"Flicking"},s(3)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'// Customizing align position\nalign: { camera: "20%", panel: "40px" }\n'))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{align:{camera:"20%",panel:"40px"},mdxType:"Flicking"},s(3)))),Object(i.b)("h3",{id:"defaultindex"},"defaultIndex"),Object(i.b)("p",null,"Index of the panel to move when Flicking's ",Object(i.b)("a",{parentName:"p",href:"docs/api/Flicking#init"},"init")," is called.",Object(i.b)("br",{parentName:"p"}),"\n","A zero-based integer."),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"defaultIndex: 0\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{defaultIndex:0,mdxType:"Flicking"},s(3)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"defaultIndex: 1\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{defaultIndex:1,mdxType:"Flicking"},s(3)))),Object(i.b)("h3",{id:"horizontal"},"horizontal"),Object(i.b)("p",null,"Direction of panel movement (true: horizontal, false: vertical)"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Additional CSS ",Object(i.b)("inlineCode",{parentName:"p"},"height: 240px")," was applied to the viewport(",Object(i.b)("inlineCode",{parentName:"p"},".flicking-viewport"),") element."))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"horizontal: true\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{horizontal:!0,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"horizontal: false\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'\x3c!-- You should add class "vertical" to the viewport element --\x3e\n\x3c!-- if you\'re using non-framework(vanilla) Flicking --\x3e\n<div class="flicking-viewport vertical">\n  <div class="flicking-camera">\n    <div class="flicking-panel"></div>\n    <div class="flicking-panel"></div>\n    <div class="flicking-panel"></div>\n  </div>\n</div>\n'))),Object(i.b)(O.a,{is:6,className:"has-text-centered",mdxType:"ColumnItem"},Object(i.b)(r.b,{className:"flicking-viewport vertical",horizontal:!1,style:{height:"240px"},mdxType:"Flicking"},s(5)))),Object(i.b)("h3",{id:"circular"},"circular"),Object(i.b)("p",null,"Enables circular(continuous loop) mode, which connects first/last panel for continuous scrolling."),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"circular: false\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{circular:!1,mdxType:"Flicking"},s(3)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"circular: true\n"))),Object(i.b)(O.a,{is:6,className:"has-text-centered",mdxType:"ColumnItem"},Object(i.b)(r.b,{circular:!0,mdxType:"Flicking"},s(3)))),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If the sum of the panel sizes is too small, circular will not be enabled.",Object(i.b)("br",{parentName:"p"}),"\n","This is because Flicking doesn't clone panel elements for the performance and to prevent other issues.",Object(i.b)("br",{parentName:"p"}),"\n","You can check this with ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"docs/api/Flicking#circularEnabled"},"circularEnabled"))," property of Flicking."),Object(i.b)("p",{parentName:"div"},"To enable circular mode, all panels should pass the below condition",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Sum of panel sizes - panel size >= viewport size")))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"circular: true\n"))),Object(i.b)(O.a,{is:6,className:"has-text-centered",mdxType:"ColumnItem"},Object(i.b)(r.b,{circular:!0,mdxType:"Flicking"},s(2)))),Object(i.b)("h3",{id:"bound"},"bound"),Object(i.b)("p",null,"Prevent the view(camera element) from going out of the first/last panel, so it won't show empty spaces before/after the first/last panel",Object(i.b)("br",{parentName:"p"}),"\n","Only can be enabled when ",Object(i.b)("inlineCode",{parentName:"p"},"circular=false")),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"bound: false\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{bound:!1,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"bound: true\n"))),Object(i.b)(O.a,{is:6,className:"has-text-centered",mdxType:"ColumnItem"},Object(i.b)(r.b,{bound:!0,mdxType:"Flicking"},s(5)))),Object(i.b)("h3",{id:"adaptive"},"adaptive"),Object(i.b)("p",null,"Update height of the viewport element after movement same to the height of the panel below.",Object(i.b)("br",{parentName:"p"}),"\n","This can be only enabled when ",Object(i.b)("inlineCode",{parentName:"p"},"horizontal=true")),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"adaptive: false\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{adaptive:!1,mdxType:"Flicking"},Object(i.b)(p.a,{index:0,mdxType:"Panel"}),Object(i.b)(p.a,{className:"high",index:1,mdxType:"Panel"}),Object(i.b)(p.a,{className:"higher",index:2,mdxType:"Panel"})))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"adaptive: true\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-css"},".flicking-viewport {\n  transition: height 500ms;\n}\n"))),Object(i.b)(O.a,{is:6,className:"has-text-centered",mdxType:"ColumnItem"},Object(i.b)(r.b,{adaptive:!0,mdxType:"Flicking"},Object(i.b)(p.a,{index:0,mdxType:"Panel"}),Object(i.b)(p.a,{className:"high",index:1,mdxType:"Panel"}),Object(i.b)(p.a,{className:"higher",index:2,mdxType:"Panel"})))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You should add CSS ",Object(i.b)("inlineCode",{parentName:"p"},"transition")," property to ",Object(i.b)("inlineCode",{parentName:"p"},"flicking-viewport")," to animate height."))),Object(i.b)("h2",{id:"event"},"Event"),Object(i.b)("h3",{id:"needpanelthreshold"},"needPanelThreshold"),Object(i.b)("p",null,"A Threshold from viewport edge before triggering ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"docs/api/Flicking#event-needPanel"},"needPanel"))," event"),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"needPanelThreshold: 0\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{adaptive:!1,mdxType:"Flicking"},s(3)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"needPanelThreshold: 100\n"))),Object(i.b)(O.a,{is:6,className:"has-text-centered",mdxType:"ColumnItem"},Object(i.b)(r.b,{adaptive:!0,mdxType:"Flicking"},s(3)))),Object(i.b)("h3",{id:"preventeventsbeforeinit"},"preventEventsBeforeInit"),Object(i.b)("p",null,"When enabled, events are not triggered before ",Object(i.b)("inlineCode",{parentName:"p"},"ready")," when initializing"),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"preventEventsBeforeInit: true\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(o,{mdxType:"EventFlicking"},s(3)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"preventEventsBeforeInit: false\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(o,{preventEventsBeforeInit:!1,mdxType:"EventFlicking"},s(3)))),Object(i.b)("h2",{id:"animation"},"Animation"),Object(i.b)("h3",{id:"deceleration"},"deceleration"),Object(i.b)("p",null,"Deceleration value for panel movement animation which is triggered by user input. A higher value means a shorter animation time"),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"deceleration: 0.0075\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{deceleration:.0075,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"deceleration: 0.0005\n"))),Object(i.b)(O.a,{is:6,className:"has-text-centered",mdxType:"ColumnItem"},Object(i.b)(r.b,{deceleration:5e-4,mdxType:"Flicking"},s(5)))),Object(i.b)("h3",{id:"easing"},"easing"),Object(i.b)("p",null,"An easing function applied to the panel movement animation. Default value is ",Object(i.b)("inlineCode",{parentName:"p"},"easeOutCubic")),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"easing: x => 1 - Math.pow(1 - x, 3)\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{easing:function(e){return 1-Math.pow(1-e,3)},mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"easing: x => x\n"))),Object(i.b)(O.a,{is:6,className:"has-text-centered",mdxType:"ColumnItem"},Object(i.b)(r.b,{easing:function(e){return e},mdxType:"Flicking"},s(5)))),Object(i.b)("h2",{id:"input"},"Input"),Object(i.b)("h3",{id:"duration"},"duration"),Object(i.b)("p",null,"Default duration of the animation (ms)"),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"duration: 500\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{duration:500,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"duration: 100\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{duration:100,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"duration: 1000\n"))),Object(i.b)(O.a,{is:6,className:"has-text-centered",mdxType:"ColumnItem"},Object(i.b)(r.b,{duration:1e3,mdxType:"Flicking"},s(5)))),Object(i.b)("h3",{id:"inputtype"},"inputType"),Object(i.b)("p",null,"Types of input devices to enable"),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'inputType: ["touch", "mouse"]\n'))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{inputType:["touch","mouse"],mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'inputType: ["mouse"]\n'))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{inputType:["mouse"],mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'inputType: ["pointer"]\n'))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{inputType:["pointer"],mdxType:"Flicking"},s(5)))),Object(i.b)("h3",{id:"movetype"},"moveType"),Object(i.b)("p",null,"Movement style by user input",Object(i.b)("br",{parentName:"p"}),"\n","This will change instance type of ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"docs/api/Flicking#control"},"Flicking#control")),Object(i.b)("br",{parentName:"p"}),"\n","You can use the values of the constant ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"docs/api/MOVE_TYPE"},"MOVE_TYPE"))),Object(i.b)("p",null,"If an array is given, second value of the array will be used as the options object when creating ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"docs/api/Control"},"Control"))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"moveType"),Object(i.b)("th",{parentName:"tr",align:null},"control"),Object(i.b)("th",{parentName:"tr",align:null},"options"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},'"snap" (MOVE_TYPE.SNAP)'),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"docs/api/SnapControl"},"SnapControl"))),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},'"freeScroll" (MOVE_TYPE.FREE_SCROLL)'),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"docs/api/FreeControl"},"FreeControl"))),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},Object(i.b)("a",{parentName:"strong",href:"docs/api/FreeControlOptions"},"FreeControlOptions")))))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'moveType: "snap"\n'))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{moveType:"snap",mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'moveType: "freeScroll"\n// Or..\nmoveType: ["freeScroll", { stopAtEdge: true }]\n'))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{moveType:"freeScroll",mdxType:"Flicking"},s(5)))),Object(i.b)("h3",{id:"threshold"},"threshold"),Object(i.b)("p",null,"Movement threshold to change panel (unit: px).",Object(i.b)("br",{parentName:"p"}),"\n","It should be dragged above the threshold to change the current panel."),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"threshold: 40\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{threshold:40,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"threshold: 0\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{threshold:0,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"threshold: 200\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{threshold:200,mdxType:"Flicking"},s(5)))),Object(i.b)("h3",{id:"interruptable"},"interruptable"),Object(i.b)("p",null,"Set animation to be interruptable by click/touch."),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"interruptable: true\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{interruptable:!0,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"interruptable: false\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{interruptable:!1,mdxType:"Flicking"},s(5)))),Object(i.b)("h3",{id:"bounce"},"bounce"),Object(i.b)("p",null,"The size value of the bounce area. Only can be enabled when ",Object(i.b)("inlineCode",{parentName:"p"},"circular=false"),".",Object(i.b)("br",{parentName:"p"}),"\n","You can set different bounce value for prev/next direction by using array.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"number")," for px value, and ",Object(i.b)("inlineCode",{parentName:"p"},"string")," for px, and % value relative to viewport size.",Object(i.b)("br",{parentName:"p"}),"\n","You have to call ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"docs/api/Control#updateInput"},"Control#updateInput"))," after changing this to take effect."),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'bounce: "20%"\n'))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{bounce:"20%",mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"bounce: 0\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{bounce:0,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'bounce: "100%"\n'))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{bounce:"100%",mdxType:"Flicking"},s(5)))),Object(i.b)("h3",{id:"iosedgeswipethreshold"},"iOSEdgeSwipeThreshold"),Object(i.b)("p",null,"Size of the area from the right edge in iOS safari (in px) which enables swipe-back or swipe-forward"),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:12,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"iOSEdgeSwipeThreshold: 30\n")))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:12,mdxType:"ColumnItem"},Object(i.b)(r.b,{iOSEdgeSwipeThreshold:30,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:12,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"iOSEdgeSwipeThreshold: 120\n")))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:12,mdxType:"ColumnItem"},Object(i.b)(r.b,{iOSEdgeSwipeThreshold:120,mdxType:"Flicking"},s(5)))),Object(i.b)("h3",{id:"preventclickondrag"},"preventClickOnDrag"),Object(i.b)("p",null,"Automatically prevent ",Object(i.b)("inlineCode",{parentName:"p"},"click")," event if the user has dragged at least a single pixel on the viewport element."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Hint: Drag a panel slightly and release it to see its effect"))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"preventClickOnDrag: true\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{preventClickOnDrag:!0,mdxType:"Flicking"},Object(i.b)(d,{index:0,mdxType:"LinkedPanel"}),Object(i.b)(d,{index:1,mdxType:"LinkedPanel"}),Object(i.b)(d,{index:2,mdxType:"LinkedPanel"}),Object(i.b)(d,{index:3,mdxType:"LinkedPanel"}),Object(i.b)(d,{index:4,mdxType:"LinkedPanel"})))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"preventClickOnDrag: false\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{preventClickOnDrag:!1,mdxType:"Flicking"},Object(i.b)(d,{index:0,mdxType:"LinkedPanel"}),Object(i.b)(d,{index:1,mdxType:"LinkedPanel"}),Object(i.b)(d,{index:2,mdxType:"LinkedPanel"}),Object(i.b)(d,{index:3,mdxType:"LinkedPanel"}),Object(i.b)(d,{index:4,mdxType:"LinkedPanel"})))),Object(i.b)("h3",{id:"disableoninit"},"disableOnInit"),Object(i.b)("p",null,"Automatically call ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"docs/api/Flicking#disableInput"},"disableInput()"))," on initialization"),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"disableOnInit: false\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{disableOnInit:!1,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"disableOnInit: true\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{disableOnInit:!0,mdxType:"Flicking"},s(5)))),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("h3",{id:"renderonlyvisible"},"renderOnlyVisible"),Object(i.b)("p",null,"Whether to render visible panels only. This can dramatically increase performance when there're many panels"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Hint: See panel elements in the developer console"))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"renderOnlyVisible: false\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{renderOnlyVisible:!1,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"renderOnlyVisible: true\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{renderOnlyVisible:!0,mdxType:"Flicking"},s(5)))),Object(i.b)("h2",{id:"others"},"Others"),Object(i.b)("h3",{id:"autoinit"},"autoInit"),Object(i.b)("p",null,"Call ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"docs/api/Flicking#init"},"init()"))," automatically when creating Flicking's instance."),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"autoInit: true\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(r.b,{autoInit:!0,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"autoInit: false\n"))),Object(i.b)(O.a,{is:6,mdxType:"ColumnItem"},Object(i.b)(j,{mdxType:"AutoInit"}))),Object(i.b)("h3",{id:"autoresize"},"autoResize"),Object(i.b)("p",null,"Attach Flicking's ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"docs/api/Flicking#resize"},"resize"))," method to window's resize event.",Object(i.b)("br",{parentName:"p"}),"\n","Flicking will automatically call ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"docs/api/Flicking#resize"},"resize"))," window size and orientation change."),Object(i.b)("p",null,"Change window size or change orientation(on mobile) to see its effect."),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:12,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"autoResize: true\n")))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:12,mdxType:"ColumnItem"},Object(i.b)(r.b,{autoResize:!0,mdxType:"Flicking"},s(5)))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:12,mdxType:"ColumnItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"autoResize: false\n")))),Object(i.b)(u.a,{mdxType:"Columns"},Object(i.b)(O.a,{is:12,mdxType:"ColumnItem"},Object(i.b)(r.b,{autoResize:!1,mdxType:"Flicking"},s(5)))))}v.isMDXComponent=!0},401:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),b=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var m=b.a.createContext({}),o=function(e){var t=b.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return b.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=o(n),d=a,u=p["".concat(l,".").concat(d)]||p[d]||s[d]||c;return n?b.a.createElement(u,i(i({ref:t},m),{},{components:n})):b.a.createElement(u,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<c;m++)l[m]=n[m];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},402:function(e,t,n){"use strict";function a(e){var t,n,b="";if("string"==typeof e||"number"==typeof e)b+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(b&&(b+=" "),b+=n);else for(t in e)e[t]&&(b&&(b+=" "),b+=t);return b}t.a=function(){for(var e,t,n=0,b="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(b&&(b+=" "),b+=t);return b}},404:function(e,t,n){"use strict";var a=n(0),b=n(407);t.a=function(){var e=Object(a.useContext)(b.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},405:function(e,t,n){"use strict";var a=n(0),b=n.n(a),c=n(404),l=n(402),i=n(60),r=n.n(i);var m=37,o=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,s=e.groupId,d=e.className,u=Object(c.a)(),O=u.tabGroupChoices,j=u.setTabGroupChoices,g=Object(a.useState)(i),h=g[0],y=g[1],x=a.Children.toArray(e.children),v=[];if(null!=s){var T=O[s];null!=T&&T!==h&&p.some((function(e){return e.value===T}))&&y(T)}var N=function(e){var t=e.currentTarget,n=v.indexOf(t),a=p[n].value;y(a),null!=s&&(j(s,a),setTimeout((function(){var e,n,a,b,c,l,i,m;(e=t.getBoundingClientRect(),n=e.top,a=e.left,b=e.bottom,c=e.right,l=window,i=l.innerHeight,m=l.innerWidth,n>=0&&c<=m&&b<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(r.a.tabItemActive),setTimeout((function(){return t.classList.remove(r.a.tabItemActive)}),2e3))}),150))},f=function(e){var t,n;switch(e.keyCode){case o:var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case m:var b=v.indexOf(e.target)-1;n=v[b]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return b.a.createElement("div",{className:"tabs-container"},b.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return b.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(l.a)("tabs__item",r.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:f,onFocus:N,onClick:N},n)}))),t?Object(a.cloneElement)(x.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):b.a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},406:function(e,t,n){"use strict";var a=n(0),b=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return b.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},407:function(e,t,n){"use strict";var a=n(0),b=Object(a.createContext)(void 0);t.a=b},417:function(e,t,n){"use strict";var a=n(3),b=n(0),c=n.n(b);t.a=c.a.forwardRef((({index:e,className:t="",color:n="primary",...b},l)=>{const i=["warning","white"].includes(n)?"dark":"white";return c.a.createElement("div",Object(a.a)({ref:l,className:`flicking-panel has-background-${n} has-text-${i} is-size-1 ${t}`},b),c.a.createElement("span",{className:"flicking-index"},e+1))}))},426:function(e,t,n){"use strict";var a=n(0),b=n.n(a);t.a=({children:e})=>b.a.createElement("div",{className:"columns"},e)},427:function(e,t,n){"use strict";var a=n(0),b=n.n(a);t.a=({children:e,is:t,className:n})=>{const a=["column"];return t&&a.push(`is-${t}`),n&&a.push(n),b.a.createElement("div",{className:a.join(" ")},e)}}}]);