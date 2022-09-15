"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90033],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72360:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294),i=t(86010),l="tabItem_OmH5";function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(87462),i=t(67294),l=t(72389),r=t(67392),o=t(7094),s=t(12466),c=t(86010),p="tabList_uSqn",u="tabItem_LplD";function d(e){var n,t,l,d=e.lazy,m=e.block,g=e.defaultValue,k=e.values,v=e.groupId,f=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,r.l)(N,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===g?g:null!=(n=null!=g?g:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=h[0])?void 0:l.props.value;if(null!==w&&!N.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),x=y.tabGroupChoices,j=y.setTabGroupChoices,F=(0,i.useState)(w),P=F[0],O=F[1],C=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var M=x[v];null!=M&&M!==P&&N.some((function(e){return e.value===M}))&&O(M)}var E=function(e){var n=e.currentTarget,t=C.indexOf(n),a=N[t].value;a!==P&&(T(n),O(a),null!=v&&j(v,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break;case"ArrowLeft":var i=C.indexOf(e.currentTarget)-1;t=C[i]||C[C.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,c.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},f)},N.map((function(e){var n=e.value,t=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:E,onClick:E},l,{className:(0,c.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),d?(0,i.cloneElement)(h.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function m(e){var n=(0,l.Z)();return i.createElement(d,(0,a.Z)({key:String(n)},e))}},25004:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var a=t(87462),i=t(63366),l=(t(67294),t(3905)),r=t(9877),o=t(72360),s=["components"],c={title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null,sidebar_position:2},p=void 0,u={unversionedId:"tutorials/quick-start",id:"version-4.9.3/tutorials/quick-start",title:"Quick Start",description:"<Tabs",source:"@site/versioned_docs/version-4.9.3/tutorials/quick-start.mdx",sourceDirName:"tutorials",slug:"/quick-start",permalink:"/egjs-flicking/docs/4.9.3/quick-start",draft:!1,editUrl:null,tags:[],version:"4.9.3",sidebarPosition:2,frontMatter:{title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null,sidebar_position:2},sidebar:"docs",previous:{title:"Installation",permalink:"/egjs-flicking/docs/4.9.3/"},next:{title:"Using the Methods",permalink:"/egjs-flicking/docs/4.9.3/using-the-methods"}},d={},m=[],g={toc:m};function k(e){var n=e.components,t=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("p",null,"Add the script/CSS to the page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossorigin="anonymous"><\/script>\n<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossorigin="anonymous" />\n')),(0,l.kt)("p",null,"Or, you can rather import them if you're using a bundler like ",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," or ",(0,l.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"rollup"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import Flicking from "@egjs/flicking";\nimport "@egjs/flicking/dist/flicking.css";\n')),(0,l.kt)("p",null,"Then, add some basic HTML layout of Flicking to your page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Viewport element --\x3e\n<div id="carousel" class="flicking-viewport">\n  \x3c!-- Camera element --\x3e\n  <div class="flicking-camera">\n    \x3c!-- Panels, class names are your choice --\x3e\n    <div class="panel"></div>\n    <div class="panel"></div>\n    <div class="panel"></div>\n  </div>\n</div>\n')),(0,l.kt)("p",null,"You should add the ",(0,l.kt)("inlineCode",{parentName:"p"},"vertical")," class to viewport element, if you're making a vertical carousel."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="flicking-viewport vertical">\n')),(0,l.kt)("p",null,"Then initialize Flicking instance with JavaScript after."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#carousel", {\n  align: "center",\n  circular: true,\n  bound: true,\n  renderOnlyVisible: true\n});\n'))),(0,l.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("p",null,"You can import & use Flicking as a React Component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeComponent.jsx"',title:'"SomeComponent.jsx"'},'import Flicking from "@egjs/react-flicking";\nimport "@egjs/react-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/react-flicking/dist/flicking-inline.css";\n\nexport default () => (\n  <Flicking\n    align="prev"\n    circular={true}\n    onMoveEnd={e => {\n      console.log(e);\n    }}>\n    <div className="panel">1</div>\n    <div className="panel">2</div>\n    <div className="panel">3</div>\n  </Flicking>\n)\n')),(0,l.kt)("h3",null,"Using the components as a panel"),(0,l.kt)("p",null,"If you're using the React Component as a panel, it should use a ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html"},"ref forwarding")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Panel.jsx"',title:'"Panel.jsx"'},"// If you're using a functional component\nexport default React.forwardRef(({ index }, ref) => (<div ref={ref}>{ index + 1 }</div>));\n\n// Or... if you're using a class-based React component\nclass Panel extends React.Component {\n  public render() {\n    return <div ref={this.props.elRef}>{ index + 1 }</div>;\n  }\n}\n\nexport default React.forwardRef((props, ref) => <Panel elRef={ref} {...props} />);\n")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can't use a React component that renders multiple elements"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panels /> // This won't work\n</Flicking>\n\nconst Panels = () => <>\n  <div key={0}>0</div>\n  <div key={1}>1</div>\n  <div key={2}>2</div>\n</>;\n")))),(0,l.kt)("h3",null,"Bypassing ref forwarding"),(0,l.kt)("p",null,"If you don't like this behavior, there's a few ways to avoid it.",(0,l.kt)("br",{parentName:"p"}),"\n","The easiest way is wrapping each ",(0,l.kt)("inlineCode",{parentName:"p"},"Panel")," component with another element tag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <div><Panel index={1} /></div>\n  <div><Panel index={2} /></div>\n  <div><Panel index={3} /></div>\n</Flicking>\n")),(0,l.kt)("p",null,"Or, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"useFindDOMNode")," option of Flicking."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking useFindDOMNode={true}>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Flicking will use ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html#finddomnode"},"findDOMNode")," instead of using refs when the ",(0,l.kt)("inlineCode",{parentName:"p"},"useFindDOMNode")," option is enabled.",(0,l.kt)("br",{parentName:"p"}),"\n","So, if you're using the ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html"},"Strict Mode"),", Flicking can show ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage"},"warning about deprecated findDOMNode usage")," at the developer console.",(0,l.kt)("br",{parentName:"p"}),"\n","And also, be aware that the component should always return a single DOM that never changes."),(0,l.kt)("blockquote",{parentName:"div"},(0,l.kt)("p",{parentName:"blockquote"},"Therefore findDOMNode only worked if components always return a single DOM node that never changes."))))),(0,l.kt)(o.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("p",null,"You can register Flicking either locally..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="SomeComponent.vue - <script>"',title:'"SomeComponent.vue',"-":!0,'<script>"':!0},'import { Flicking } from "@egjs/vue-flicking";\n\nexport default {\n  components: {\n    Flicking: Flicking\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="SomeComponent.vue - <style>"',title:'"SomeComponent.vue',"-":!0,'<style>"':!0},'@import url("node_modules/@egjs/vue-flicking/dist/flicking.css");\n// Or, if you have to support IE9\n@import url("node_modules/@egjs/vue-flicking/dist/flicking-inline.css");\n')),(0,l.kt)("p",null,"or globally."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.js"',title:'"main.js"'},'import Flicking from "@egjs/vue-flicking";\nimport "@egjs/vue-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/vue-flicking/dist/flicking-inline.css";\n\nVue.use(Flicking);\n')),(0,l.kt)("p",null,"Then use Flicking like the other Vue components."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking :options="{ align: \'prev\', circular: true }" @move-end="onMoveEnd">\n  <div class="panel">1</div>\n  <div class="panel">2</div>\n  <div class="panel">3</div>\n</Flicking>\n'))),(0,l.kt)(o.Z,{value:"vue3",mdxType:"TabItem"},(0,l.kt)("p",null,"You can register Flicking either locally..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="SomeComponent.vue - <script>"',title:'"SomeComponent.vue',"-":!0,'<script>"':!0},'import Flicking from "@egjs/vue3-flicking";\n\nexport default {\n  components: {\n    Flicking: Flicking\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="SomeComponent.vue - <style>"',title:'"SomeComponent.vue',"-":!0,'<style>"':!0},'@import url("node_modules/@egjs/vue-flicking/dist/flicking.css");\n// Or, if you have to support IE9\n@import url("node_modules/@egjs/vue-flicking/dist/flicking-inline.css");\n')),(0,l.kt)("p",null,"or globally."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.js"',title:'"main.js"'},'import { createApp } from "vue"\nimport App from "./App.vue"\nimport Flicking from "../dist/flicking.esm";\nimport "@egjs/vue3-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/vue3-flicking/dist/flicking-inline.css";\n\nconst app = createApp(App);\n\napp.component("Flicking", Flicking);\napp.mount("#app");\n')),(0,l.kt)("p",null,"Then use Flicking like the other Vue components."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking :options="{ align: \'prev\', circular: true }" @move-end="onMoveEnd">\n  <div class="panel">1</div>\n  <div class="panel">2</div>\n  <div class="panel">3</div>\n</Flicking>\n')),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can't use a Vue component that uses fragments(a.k.a. multi-root node components) as a panel"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panels /> // This won't work\n</Flicking>\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Panels.vue"',title:'"Panels.vue"'},'<template>\n  <div :key="0">0</div>\n  <div :key="1">1</div>\n  <div :key="2">2</div>\n</template>\n'))))),(0,l.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("p",null,"You can add ",(0,l.kt)("inlineCode",{parentName:"p"},"NgxFlickingModule")," at ",(0,l.kt)("inlineCode",{parentName:"p"},"imports")," of your app module to use Flicking."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { NgxFlickingModule } from '@egjs/ngx-flicking';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    NgxFlickingModule /* Add in imports */\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { } /* Your app */\n")),(0,l.kt)("p",null,"Now you can use the component ",(0,l.kt)("inlineCode",{parentName:"p"},"ngx-flicking")," and the directive ",(0,l.kt)("inlineCode",{parentName:"p"},"flicking-panel")," in your templates.",(0,l.kt)("br",{parentName:"p"}),"\n","You should add directive ",(0,l.kt)("inlineCode",{parentName:"p"},"flicking-panel")," to the panel elements you use"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking\n  [options]="{ circular: true, duration: 500 }"\n  [plugins]="plugins"\n  (needPanel)="onNeedPanel($event)"\n  (moveEnd)="onMoveEnd($event)"\n>\n  <div flicking-panel class="panel">\n    <img src="https://naver.github.io/egjs-flicking/images/bg01.jpg" />\n  </div>\n  <div flicking-panel class="panel">\n    <img src="https://naver.github.io/egjs-flicking/images/bg02.jpg" />\n  </div>\n  <div flicking-panel class="panel">\n    <img src="https://naver.github.io/egjs-flicking/images/bg03.jpg" />\n  </div>\n</ngx-flicking>\n'))),(0,l.kt)(o.Z,{value:"preact",mdxType:"TabItem"},(0,l.kt)("p",null,"You can import & use Flicking as a Preact Component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeComponent.jsx"',title:'"SomeComponent.jsx"'},'import Flicking from "@egjs/preact-flicking";\nimport "@egjs/preact-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/preact-flicking/dist/flicking-inline.css";\n\nexport default () => (\n  <Flicking\n    align="prev"\n    circular={true}\n    onMoveEnd={e => {\n      console.log(e);\n    }}>\n    <div className="panel">1</div>\n    <div className="panel">2</div>\n    <div className="panel">3</div>\n  </Flicking>\n)\n')),(0,l.kt)("h3",null,"Using the components as a panel"),(0,l.kt)("p",null,"If you're using the React Component as a panel, it should use a ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html"},"ref forwarding")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Panel.jsx"',title:'"Panel.jsx"'},"// If you're using a functional component\nexport default React.forwardRef(({ index }, ref) => (<div ref={ref}>{ index + 1 }</div>));\n\n// Or... if you're using a class-based React component\nclass Panel extends React.Component {\n  public render() {\n    return <div ref={this.props.elRef}>{ index + 1 }</div>;\n  }\n}\n\nexport default React.forwardRef((props, ref) => <Panel elRef={ref} {...props} />);\n")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can't use a React component that renders multiple elements"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panels /> // This won't work\n</Flicking>\n\nconst Panels = () => <>\n  <div key={0}>0</div>\n  <div key={1}>1</div>\n  <div key={2}>2</div>\n</>;\n")))),(0,l.kt)("h3",null,"Bypassing ref forwarding"),(0,l.kt)("p",null,"If you don't like this behavior, there's a few ways to avoid it.",(0,l.kt)("br",{parentName:"p"}),"\n","The easiest way is wrapping each ",(0,l.kt)("inlineCode",{parentName:"p"},"Panel")," component with another element tag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <div><Panel index={1} /></div>\n  <div><Panel index={2} /></div>\n  <div><Panel index={3} /></div>\n</Flicking>\n")),(0,l.kt)("p",null,"Or, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"useFindDOMNode")," option of Flicking."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking useFindDOMNode={true}>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Flicking will use ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html#finddomnode"},"findDOMNode")," instead of using refs when the ",(0,l.kt)("inlineCode",{parentName:"p"},"useFindDOMNode")," option is enabled.",(0,l.kt)("br",{parentName:"p"}),"\n","So, if you're using the ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html"},"Strict Mode"),", Flicking can show ",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage"},"warning about deprecated findDOMNode usage")," at the developer console.",(0,l.kt)("br",{parentName:"p"}),"\n","And also, be aware that the component should always return a single DOM that never changes."),(0,l.kt)("blockquote",{parentName:"div"},(0,l.kt)("p",{parentName:"blockquote"},"Therefore findDOMNode only worked if components always return a single DOM node that never changes."))))),(0,l.kt)(o.Z,{value:"svelte",mdxType:"TabItem"},(0,l.kt)("p",null,"You can import ",(0,l.kt)("inlineCode",{parentName:"p"},"Flicking")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"FlickingPanel"),' from the "@egjs/svelte-flicking" package.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.svelte"',title:'"App.svelte"'},'<script lang="ts">\n  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";\n  import "@egjs/svelte-flicking/dist/flicking.css";\n  // Or, if you have to support IE9\n  import "@egjs/svelte-flicking/dist/flicking-inline.css";\n<\/script>\n\n<Flicking options={{ align: "center", circular: true }}>\n  \x3c!-- Those will render "div" element --\x3e\n  <FlickingPanel>0</FlickingPanel>\n  <FlickingPanel>1</FlickingPanel>\n  <FlickingPanel>2</FlickingPanel>\n</Flicking>\n')))))}k.isMDXComponent=!0}}]);