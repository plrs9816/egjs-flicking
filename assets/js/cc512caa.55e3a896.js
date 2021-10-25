(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return f})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),i=(n(0),n(356)),c=n(364),o=n(358),l=n(361),s=n(362),u={title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},f={unversionedId:"using-the-methods",id:"version-4.2.5/using-the-methods",isDocsHomePage:!1,title:"Using the Methods",description:"<Tabs",source:"@site/versioned_docs/version-4.2.5/using-the-methods.mdx",sourceDirName:".",slug:"/using-the-methods",permalink:"/egjs-flicking/docs/4.2.5/using-the-methods",editUrl:null,version:"4.2.5",frontMatter:{title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},sidebar:"version-4.2.5/docs",previous:{title:"Quick Start",permalink:"/egjs-flicking/docs/4.2.5/quick-start"},next:{title:"Listening to Events",permalink:"/egjs-flicking/docs/4.2.5/listening-to-events"}},b=[],p={toc:b};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l.a,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"js",mdxType:"TabItem"},Object(i.b)("p",null,"You can call methods directly from the Flicking instance."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#el", options);\n\nflicking.next();\n'))),Object(i.b)(s.a,{value:"react",mdxType:"TabItem"},Object(i.b)("p",null,"You can call methods of Flicking by getting a ",Object(i.b)("inlineCode",{parentName:"p"},"ref")," of Flicking"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import { createRef, Component } from "react";\nimport Flicking, { FlickingError } from "@egjs/react-flicking";\n\nclass MyComponent extends Component {\n  constructor(props) {\n    super(props);\n    this.flicking = createRef();\n    this.panels = [0, 1, 2];\n  }\n  render() {\n    return <Flicking ref={this.flicking}>\n      { this.panels.map(idx => <div className="panel" key={idx}>{idx}</div>) }\n    </Flicking>;\n  }\n  async moveToNextPanel() {\n    try {\n      await this.flicking.next();\n    } catch (e) {\n      console.log(e instanceof FlickingError); // true\n      console.log(e.code);\n    }\n  }\n}\n')),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),Object(i.b)(s.a,{value:"vue",mdxType:"TabItem"},Object(i.b)("p",null,"You can access instance of Flicking component with the ",Object(i.b)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'<Flicking ref="flicking"></Flicking>\n')),Object(i.b)("p",null,"Then call methods of it like"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"this.$refs.flicking.next();\n"))),Object(i.b)(s.a,{value:"vue3",mdxType:"TabItem"},Object(i.b)("p",null,"You can access instance of Flicking component with the ",Object(i.b)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'<Flicking ref="flicking"></Flicking>\n')),Object(i.b)("p",null,"Then call methods of it like"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"this.$refs.flicking.next();\n"))),Object(i.b)(s.a,{value:"angular",mdxType:"TabItem"},Object(i.b)("p",null,"There're few ways to interact with child component in Angular.",Object(i.b)("br",{parentName:"p"}),"\n","See ",Object(i.b)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with Flicking."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'@Component({\n  selector: \'flicking-parent\',\n  template: `\n    <button (click)="flick.prev()">Prev</button>\n    <button (click)="flick.next()">Next</button>\n    <ngx-flicking #flick></ngx-flicking>\n  `\n})\nexport class FlickingParent { }\n'))),Object(i.b)(s.a,{value:"preact",mdxType:"TabItem"},Object(i.b)("p",null,"You can call methods of Flicking by getting a ",Object(i.b)("inlineCode",{parentName:"p"},"ref")," of Flicking"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'import { createRef, render } from "preact";\nimport Flicking, { FlickingError } from "@egjs/preact-flicking";\n\nconst ref = createRef();\nrender(<Flicking ref={ref}>{...}</Flicking>, dom);\n\nconst flicking = ref.current;\nflicking.next();\n')),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),Object(i.b)(s.a,{value:"svelte",mdxType:"TabItem"},Object(i.b)("p",null,"You can use ",Object(i.b)("a",{parentName:"p",href:"https://svelte.dev/tutorial/bind-this"},"bind:this")," syntax of svelte to get the reference of Flicking."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";\n  import "@egjs/svelte-flicking/dist/flicking.css";\n\n  let flicking: Flicking;\n<\/script>\n\n<Flicking bind:this={flicking}>\n  \x3c!-- Those will render "div" element --\x3e\n  <FlickingPanel>0</FlickingPanel>\n  <FlickingPanel>1</FlickingPanel>\n  <FlickingPanel>2</FlickingPanel>\n</Flicking>\n<button on:click{() => { flicking.next(); }} />\n')))),Object(i.b)("p",null,"See all available methods at our ",Object(i.b)(c.a,{to:Object(o.a)("docs/api/Flicking#methods"),mdxType:"Link"},"API")," page."))}d.isMDXComponent=!0},356:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),p=r,d=f["".concat(c,".").concat(p)]||f[p]||b[p]||i;return n?a.a.createElement(d,o(o({ref:t},s),{},{components:n})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},357:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},358:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(16),a=n(359);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,o=void 0!==c&&c,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},359:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},360:function(e,t,n){"use strict";var r=n(0),a=n(363);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},361:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(360),c=n(357),o=n(60),l=n.n(o);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,f=e.values,b=e.groupId,p=e.className,d=Object(i.a)(),m=d.tabGroupChoices,g=d.setTabGroupChoices,v=Object(r.useState)(o),h=v[0],j=v[1],O=r.Children.toArray(e.children),k=[];if(null!=b){var y=m[b];null!=y&&y!==h&&f.some((function(e){return e.value===y}))&&j(y)}var x=function(e){var t=e.currentTarget,n=k.indexOf(t),r=f[n].value;j(r),null!=b&&(g(b,r),setTimeout((function(){var e,n,r,a,i,c,o,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,c=window,o=c.innerHeight,s=c.innerWidth,n>=0&&i<=s&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case u:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case s:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:w,onFocus:x,onClick:x},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},362:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},363:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},364:function(e,t,n){"use strict";var r=n(8),a=n(0),i=n.n(a),c=n(10),o=n(359),l=n(7),s=Object(a.createContext)({collectLink:function(){}}),u=n(358);t.a=function(e){var t,n,f,b=e.isNavLink,p=e.to,d=e.href,m=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,j=void 0===h||h,O=Object(r.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=Object(u.b)().withBaseUrl,y=Object(a.useContext)(s),x=p||d,w=Object(o.a)(x),N=null==x?void 0:x.replace("pathname://",""),F=void 0!==N?(n=N,j&&function(e){return e.startsWith("/")}(n)?k(n):n):void 0,C=Object(a.useRef)(!1),T=b?c.e:c.c,E=l.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!E&&w&&null!=F&&window.docusaurus.prefetch(F),function(){E&&f&&f.disconnect()}}),[F,E,w]);var P=null!==(t=null==F?void 0:F.startsWith("#"))&&void 0!==t&&t,I=!F||!w||P;return F&&w&&!P&&!v&&y.collectLink(F),I?i.a.createElement("a",Object.assign({href:F},x&&!w&&{target:"_blank",rel:"noopener noreferrer"},O)):i.a.createElement(T,Object.assign({},O,{onMouseEnter:function(){C.current||null==F||(window.docusaurus.preload(F),C.current=!0)},innerRef:function(e){var t,n;E&&e&&w&&(t=e,n=function(){null!=F&&window.docusaurus.prefetch(F)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:F||""},b&&{isActive:g,activeClassName:m}))}}}]);