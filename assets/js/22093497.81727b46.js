"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36414],{72360:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(67294),l=t(86010),a="tabItem_OmH5";function r(e){var n=e.children,t=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,r),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var i=t(87462),l=t(67294),a=t(72389),r=t(67392),o=t(7094),s=t(12466),u=t(86010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var n,t,a,p=e.lazy,m=e.block,f=e.defaultValue,v=e.values,k=e.groupId,h=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=v?v:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),S=(0,r.l)(b,(function(e,n){return e.value===n.value}));if(S.length>0)throw new Error('Docusaurus error: Duplicate values "'+S.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(n=null!=f?f:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=g[0])?void 0:a.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),T=N.tabGroupChoices,w=N.setTabGroupChoices,x=(0,l.useState)(y),I=x[0],Z=x[1],z=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var F=T[k];null!=F&&F!==I&&b.some((function(e){return e.value===F}))&&Z(F)}var C=function(e){var n=e.currentTarget,t=z.indexOf(n),i=b[t].value;i!==I&&(E(n),Z(i),null!=k&&w(k,i))},B=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=z.indexOf(e.currentTarget)+1;t=z[i]||z[0];break;case"ArrowLeft":var l=z.indexOf(e.currentTarget)-1;t=z[l]||z[z.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,u.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},h)},b.map((function(e){var n=e.value,t=e.label,a=e.attributes;return l.createElement("li",(0,i.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return z.push(e)},onKeyDown:B,onFocus:C,onClick:C},a,{className:(0,u.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),p?(0,l.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function m(e){var n=(0,a.Z)();return l.createElement(p,(0,i.Z)({key:String(n)},e))}},1057:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return v}});var i=t(87462),l=t(63366),a=(t(67294),t(3905)),r=t(9877),o=t(72360),s=t(32258),u=t(44996),c=["components"],d={title:"Server Side Rendering (SSR)",id:"ssr",slug:"/ssr",custom_edit_url:null},p=void 0,m={unversionedId:"ssr",id:"version-4.3.1/ssr",title:"Server Side Rendering (SSR)",description:'As Flicking does not know the size of the panel element until it is rendered, it is hard to place the panels at the correct positions on Server-Side Rendering (SSR) unless you\'re using the "prev" align or using the bound option.',source:"@site/versioned_docs/version-4.3.1/ssr.mdx",sourceDirName:".",slug:"/ssr",permalink:"/egjs-flicking/docs/4.3.1/ssr",draft:!1,editUrl:null,tags:[],version:"4.3.1",frontMatter:{title:"Server Side Rendering (SSR)",id:"ssr",slug:"/ssr",custom_edit_url:null},sidebar:"version-4.3.1/docs",previous:{title:"Polyfills",permalink:"/egjs-flicking/docs/4.3.1/polyfills"},next:{title:"Migration Guide from v3 to v4",permalink:"/egjs-flicking/docs/4.3.1/migration-from-v3"}},f={},v=[{value:"firstPanelSize",id:"firstpanelsize",level:3},{value:"hideBeforeInit",id:"hidebeforeinit",level:3},{value:"How to use",id:"how-to-use",level:3}],k={toc:v};function h(e){var n=e.components,t=(0,l.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As Flicking does not know the size of the panel element until it is rendered, it is hard to place the panels at the correct positions on Server-Side Rendering (SSR) unless you're using the ",(0,a.kt)("inlineCode",{parentName:"p"},'"prev"')," align or using the ",(0,a.kt)("inlineCode",{parentName:"p"},"bound")," option."),(0,a.kt)("p",null,"To solve this problem, Flicking offers 2 options for the frameworks, ",(0,a.kt)("inlineCode",{parentName:"p"},"firstPanelSize")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hideBeforeInit"),"."),(0,a.kt)("h3",{id:"firstpanelsize"},"firstPanelSize"),(0,a.kt)("p",null,"If you know the exact size of the first panel element, like ",(0,a.kt)("inlineCode",{parentName:"p"},'"200px"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'"50%"'),", you can use that value to correctly place the panel elements before Flicking's mounted."),(0,a.kt)("img",{src:(0,u.Z)("/img/firstPanelSize.png")}),(0,a.kt)("p",null,"But if the panel's size is responsive for the screen size or you're using a ",(0,a.kt)("inlineCode",{parentName:"p"},"circular")," option, this won't work well as Flicking doesn't know about other panel sizes.",(0,a.kt)("br",{parentName:"p"}),"\n","In that case, please use ",(0,a.kt)("inlineCode",{parentName:"p"},"hideBeforeInit")," instead."),(0,a.kt)("img",{src:(0,u.Z)("/img/firstPanelSize-circular.gif")}),(0,a.kt)("h3",{id:"hidebeforeinit"},"hideBeforeInit"),(0,a.kt)("p",null,"Enabling this option will hide panel elements until it's mounted.",(0,a.kt)("br",{parentName:"p"}),"\n","This will show empty screen before it's mounted, so use this option only when you're okay with that."),(0,a.kt)("img",{src:(0,u.Z)("/img/hideBeforeInit.gif")}),(0,a.kt)("h3",{id:"how-to-use"},"How to use"),(0,a.kt)(r.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},"In native JS, you can attach class `flicking-hidden` to the viewport element and remove that on `ready` event to mimic the behavior of `hideBeforeInit`.",(0,a.kt)(s.Z,{className:"html",title:"html",mdxType:"CodeBlock"},'<div id="flicking" class="flicking-viewport flicking-hidden">\n  <div class="flicking-camera">\n    ...\n  </div>\n</div>'),(0,a.kt)(s.Z,{className:"js",title:"js",mdxType:"CodeBlock"},'import Flicking, { EVENTS } from "@egjs/flicking";\n\nconst flicking = new Flicking("#flicking");\nflicking.once(EVENTS.READY, () => {\n  flicking.element.classList.remove("flicking-hidden");\n}')),(0,a.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n'))),(0,a.kt)(o.Z,{value:"vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking :hideBeforeInit="true" :firstPanelSize="\'200px\'">\n   {{ ... }}\n</Flicking>\n'))),(0,a.kt)(o.Z,{value:"vue3",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking :hideBeforeInit="true" :firstPanelSize="\'200px\'">\n   {{ ... }}\n</Flicking>\n'))),(0,a.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking [hideBeforeInit]="true" [firstPanelSize]="\'200px\'">\n  {{ ... }}\n</ngx-flicking>\n'))),(0,a.kt)(o.Z,{value:"preact",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n'))),(0,a.kt)(o.Z,{value:"svelte",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n')))))}h.isMDXComponent=!0}}]);