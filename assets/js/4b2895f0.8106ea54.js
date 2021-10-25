(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),b=(a(0),a(356)),c={custom_edit_url:null},l={unversionedId:"api/ExternalRenderer",id:"version-4.3.1/api/ExternalRenderer",isDocsHomePage:!1,title:"ExternalRenderer",description:"`ts",source:"@site/versioned_docs/version-4.3.1/api/ExternalRenderer.mdx",sourceDirName:"api",slug:"/api/ExternalRenderer",permalink:"/egjs-flicking/docs/api/ExternalRenderer",editUrl:null,version:"4.3.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.3.1/api",previous:{title:"Panel",permalink:"/egjs-flicking/docs/api/Panel"},next:{title:"Renderer",permalink:"/egjs-flicking/docs/api/Renderer"}},i=[{value:"Properties",id:"properties",children:[{value:"panels",id:"panels",children:[]},{value:"panelCount",id:"panelCount",children:[]},{value:"align",id:"align",children:[]}]},{value:"Methods",id:"methods",children:[{value:"render",id:"render",children:[]},{value:"init",id:"init",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"getPanel",id:"getPanel",children:[]},{value:"updatePanelSize",id:"updatePanelSize",children:[]},{value:"batchInsert",id:"batchInsert",children:[]},{value:"batchRemove",id:"batchRemove",children:[]},{value:"checkPanelContentsReady",id:"checkPanelContentsReady",children:[]}]}],p={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"class ExternalRenderer extends Renderer\n")),Object(b.b)("div",{className:"container"},Object(b.b)("div",{className:"row mb-2"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Properties")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Methods"))),Object(b.b)("div",{className:"row"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#panels"},"panels"),Object(b.b)("br",null),Object(b.b)("a",{href:"#panelCount"},"panelCount"),Object(b.b)("br",null),Object(b.b)("a",{href:"#align"},"align")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#render"},"render"),Object(b.b)("br",null),Object(b.b)("a",{href:"#init"},"init"),Object(b.b)("br",null),Object(b.b)("a",{href:"#destroy"},"destroy"),Object(b.b)("br",null),Object(b.b)("a",{href:"#getPanel"},"getPanel"),Object(b.b)("br",null),Object(b.b)("a",{href:"#updatePanelSize"},"updatePanelSize"),Object(b.b)("br",null),Object(b.b)("a",{href:"#batchInsert"},"batchInsert"),Object(b.b)("br",null),Object(b.b)("a",{href:"#batchRemove"},"batchRemove"),Object(b.b)("br",null),Object(b.b)("a",{href:"#checkPanelContentsReady"},"checkPanelContentsReady")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"panels"},"panels"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Array of panels"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": Array","<",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel"),">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"See"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"Panel"},"Panel"))),Object(b.b)("h3",{id:"panelCount"},"panelCount"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Count of panels"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"align"},"align"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"A ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel"),"'s ",Object(b.b)("a",{parentName:"p",href:"Panel#align"},"align")," value that applied to all panels"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"render"},"render"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Render panel elements inside the camera element"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Initialize Renderer"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of ",Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),Object(b.b)("h3",{id:"destroy"},"destroy"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Destroy Renderer and return to initial state"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("h3",{id:"getPanel"},"getPanel"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Return the ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel")," at the given index. ",Object(b.b)("inlineCode",{parentName:"p"},"null")," if it doesn't exists."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Panel at the given index")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"index"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"See"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"Panel"},"Panel"))),Object(b.b)("h3",{id:"updatePanelSize"},"updatePanelSize"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Update all panel sizes"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"batchInsert"},"batchInsert"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Insert new panels at given index",Object(b.b)("br",{parentName:"p"}),"\n","This will increase index of panels after by the number of panels added"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": Array","<",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel"),">"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"An array of prepended panels")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"index"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Index to insert new panels at")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"elements"),Object(b.b)("td",{parentName:"tr",align:"center"},"Array","<","any",">"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An array of element or framework component with element in it")))),Object(b.b)("h3",{id:"batchRemove"},"batchRemove"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Remove the panel at the given index",Object(b.b)("br",{parentName:"p"}),"\n","This will decrease index of panels after by the number of panels removed"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel"),"[]"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"An array of removed panels")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"index"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Index of panel to remove")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"deleteCount"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"1"),Object(b.b)("td",{parentName:"tr",align:"center"},"Number of panels to remove from index")))),Object(b.b)("h3",{id:"checkPanelContentsReady"},"checkPanelContentsReady"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"checkingPanels"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Panel"},"Panel"),"[]"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."))}s.isMDXComponent=!0},356:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=s(a),m=n,j=O["".concat(c,".").concat(m)]||O[m]||d[m]||b;return a?r.a.createElement(j,l(l({ref:t},p),{},{components:a})):r.a.createElement(j,l({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);