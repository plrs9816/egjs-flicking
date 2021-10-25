(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),b=a(8),r=(a(0),a(356)),l={custom_edit_url:null},c={unversionedId:"api/ElementPanel",id:"version-4.0.0/api/ElementPanel",isDocsHomePage:!1,title:"ElementPanel",description:"`ts",source:"@site/versioned_docs/version-4.0.0/api/ElementPanel.mdx",sourceDirName:"api",slug:"/api/ElementPanel",permalink:"/egjs-flicking/docs/4.0.0/api/ElementPanel",editUrl:null,version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"Viewport",permalink:"/egjs-flicking/docs/4.0.0/api/Viewport"},next:{title:"ExternalPanel",permalink:"/egjs-flicking/docs/4.0.0/api/ExternalPanel"}},i=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"element",id:"element",children:[]},{value:"index",id:"index",children:[]},{value:"position",id:"position",children:[]},{value:"size",id:"size",children:[]},{value:"sizeIncludingMargin",id:"sizeIncludingMargin",children:[]},{value:"height",id:"height",children:[]},{value:"margin",id:"margin",children:[]},{value:"alignPosition",id:"alignPosition",children:[]},{value:"removed",id:"removed",children:[]},{value:"range",id:"range",children:[]},{value:"toggled",id:"toggled",children:[]},{value:"toggleDirection",id:"toggleDirection",children:[]},{value:"offset",id:"offset",children:[]},{value:"progress",id:"progress",children:[]},{value:"outsetProgress",id:"outsetProgress",children:[]},{value:"visibleRatio",id:"visibleRatio",children:[]},{value:"align",id:"align",children:[]}]},{value:"Methods",id:"methods",children:[{value:"resize",id:"resize",children:[]},{value:"contains",id:"contains",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"includePosition",id:"includePosition",children:[]},{value:"includeRange",id:"includeRange",children:[]},{value:"focus",id:"focus",children:[]},{value:"prev",id:"prev",children:[]},{value:"next",id:"next",children:[]},{value:"increaseIndex",id:"increaseIndex",children:[]},{value:"decreaseIndex",id:"decreaseIndex",children:[]},{value:"increasePosition",id:"increasePosition",children:[]},{value:"decreasePosition",id:"decreasePosition",children:[]},{value:"toggle",id:"toggle",children:[]},{value:"updateCircularToggleDirection",id:"updateCircularToggleDirection",children:[]}]}],s={toc:i};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"class ElementPanel extends Panel\n")),Object(r.b)("p",null,"An slide data component that holds information of a single HTMLElement"),Object(r.b)("div",{className:"container"},Object(r.b)("div",{className:"row mb-2"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("strong",null,"Properties")),Object(r.b)("div",{className:"col col--6"},Object(r.b)("strong",null,"Methods"))),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("a",{href:"#element"},"element"),Object(r.b)("br",null),Object(r.b)("a",{href:"#index"},"index"),Object(r.b)("br",null),Object(r.b)("a",{href:"#position"},"position"),Object(r.b)("br",null),Object(r.b)("a",{href:"#size"},"size"),Object(r.b)("br",null),Object(r.b)("a",{href:"#sizeIncludingMargin"},"sizeIncludingMargin"),Object(r.b)("br",null),Object(r.b)("a",{href:"#height"},"height"),Object(r.b)("br",null),Object(r.b)("a",{href:"#margin"},"margin"),Object(r.b)("br",null),Object(r.b)("a",{href:"#alignPosition"},"alignPosition"),Object(r.b)("br",null),Object(r.b)("a",{href:"#removed"},"removed"),Object(r.b)("br",null),Object(r.b)("a",{href:"#range"},"range"),Object(r.b)("br",null),Object(r.b)("a",{href:"#toggled"},"toggled"),Object(r.b)("br",null),Object(r.b)("a",{href:"#toggleDirection"},"toggleDirection"),Object(r.b)("br",null),Object(r.b)("a",{href:"#offset"},"offset"),Object(r.b)("br",null),Object(r.b)("a",{href:"#progress"},"progress"),Object(r.b)("br",null),Object(r.b)("a",{href:"#outsetProgress"},"outsetProgress"),Object(r.b)("br",null),Object(r.b)("a",{href:"#visibleRatio"},"visibleRatio"),Object(r.b)("br",null),Object(r.b)("a",{href:"#align"},"align")),Object(r.b)("div",{className:"col col--6"},Object(r.b)("a",{href:"#resize"},"resize"),Object(r.b)("br",null),Object(r.b)("a",{href:"#contains"},"contains"),Object(r.b)("br",null),Object(r.b)("a",{href:"#destroy"},"destroy"),Object(r.b)("br",null),Object(r.b)("a",{href:"#includePosition"},"includePosition"),Object(r.b)("br",null),Object(r.b)("a",{href:"#includeRange"},"includeRange"),Object(r.b)("br",null),Object(r.b)("a",{href:"#focus"},"focus"),Object(r.b)("br",null),Object(r.b)("a",{href:"#prev"},"prev"),Object(r.b)("br",null),Object(r.b)("a",{href:"#next"},"next"),Object(r.b)("br",null),Object(r.b)("a",{href:"#increaseIndex"},"increaseIndex"),Object(r.b)("br",null),Object(r.b)("a",{href:"#decreaseIndex"},"decreaseIndex"),Object(r.b)("br",null),Object(r.b)("a",{href:"#increasePosition"},"increasePosition"),Object(r.b)("br",null),Object(r.b)("a",{href:"#decreasePosition"},"decreasePosition"),Object(r.b)("br",null),Object(r.b)("a",{href:"#toggle"},"toggle"),Object(r.b)("br",null),Object(r.b)("a",{href:"#updateCircularToggleDirection"},"updateCircularToggleDirection")))),Object(r.b)("h2",{id:"constructor"},"Constructor"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"new ElementPanel(options, options.el, options.index, options.align, options.flicking)\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"options"),Object(r.b)("td",{parentName:"tr",align:"center"},"object"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"An options object")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"options.el"),Object(r.b)("td",{parentName:"tr",align:"center"},"HTMLElement"),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"A ",Object(r.b)("inlineCode",{parentName:"td"},"HTMLElement")," panel's referencing")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"options.index"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"An initial index of the panel")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"options.align"),Object(r.b)("td",{parentName:"tr",align:"center"},"Constants.ALIGN ","|"," string ","|"," number"),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"An initial ",Object(r.b)("a",{parentName:"td",href:"Flicking#align"},"align")," value of the panel")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"options.flicking"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"A Flicking instance panel's referencing")))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"element"},"element"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"HTMLElement")," that panel's referencing"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": HTMLElement"),Object(r.b)("h3",{id:"index"},"index"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Index of the panel"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"position"},"position"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Position of the panel, including ",Object(r.b)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"size"},"size"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Cached size of the panel element",Object(r.b)("br",{parentName:"p"}),"\n","This is equal to ",Object(r.b)("a",{parentName:"p",href:"Panel#element"},"element"),"'s ",Object(r.b)("inlineCode",{parentName:"p"},"offsetWidth")," if ",Object(r.b)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal")," is ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"offsetHeight")," else"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"sizeIncludingMargin"},"sizeIncludingMargin"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Panel's size including CSS ",Object(r.b)("inlineCode",{parentName:"p"},"margin"),Object(r.b)("br",{parentName:"p"}),"\n","This value includes ",Object(r.b)("a",{parentName:"p",href:"Panel#element"},"element"),"'s margin left/right if ",Object(r.b)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal")," is ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", and margin top/bottom else"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"height"},"height"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Height of the panel element"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"margin"},"margin"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Cached CSS ",Object(r.b)("inlineCode",{parentName:"p"},"margin")," value of the panel element"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": object"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"prev"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"CSS ",Object(r.b)("inlineCode",{parentName:"td"},"margin-left")," when the ",Object(r.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal")," is ",Object(r.b)("inlineCode",{parentName:"td"},"true"),", and ",Object(r.b)("inlineCode",{parentName:"td"},"margin-top")," else")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"next"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"CSS ",Object(r.b)("inlineCode",{parentName:"td"},"margin-right")," when the ",Object(r.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal")," is ",Object(r.b)("inlineCode",{parentName:"td"},"true"),", and ",Object(r.b)("inlineCode",{parentName:"td"},"margin-bottom")," else")))),Object(r.b)("h3",{id:"alignPosition"},"alignPosition"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Align position inside the panel where ",Object(r.b)("a",{parentName:"p",href:"Camera"},"Camera"),"'s ",Object(r.b)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition")," inside viewport should be located at"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"removed"},"removed"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"A value indicating whether the panel's ",Object(r.b)("a",{parentName:"p",href:"Flicking#remove"},"remove"),"d"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(r.b)("h3",{id:"range"},"range"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Panel element's range of the bounding box"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": object"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"min"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"Bounding box's left(",Object(r.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / top(",Object(r.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"max"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"Bounding box's right(",Object(r.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / bottom(",Object(r.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")))),Object(r.b)("h3",{id:"toggled"},"toggled"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"A value indicating whether the panel's position is toggled by circular behavior"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(r.b)("h3",{id:"toggleDirection"},"toggleDirection"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"A direction where the panel's position is toggled"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("a",{parentName:"p",href:"DIRECTION"},"DIRECTION")),Object(r.b)("h3",{id:"offset"},"offset"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Actual position offset determined by ",Object(r.b)("a",{parentName:"p",href:"Panel#order"},"Panel#order")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"progress"},"progress"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Progress of movement between previous or next panel relative to current panel"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"outsetProgress"},"outsetProgress"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Progress of movement between points that panel is completely invisible outside of viewport(prev direction: -1, selected point: 0, next direction: 1)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"visibleRatio"},"visibleRatio"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Percentage of area where panel is visible in the viewport"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"align"},"align"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"A value indicating where the ",Object(r.b)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition")," should be located at inside the panel element"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"resize"},"resize"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Update size of the panel"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("h3",{id:"contains"},"contains"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Check whether the given element is inside of this panel's ",Object(r.b)("a",{parentName:"p",href:"Panel#element"},"element")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A Boolean value indicating the element is inside of this panel ",Object(r.b)("a",{parentName:"li",href:"Panel#element"},"element"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"element"),Object(r.b)("td",{parentName:"tr",align:"center"},"HTMLElement"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"The HTMLElement to check")))),Object(r.b)("h3",{id:"destroy"},"destroy"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Reset internal state and set ",Object(r.b)("a",{parentName:"p",href:"Panel#removed"},"removed")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": void"),Object(r.b)("h3",{id:"includePosition"},"includePosition"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Check whether the given position is inside of this panel's ",Object(r.b)("a",{parentName:"p",href:"Panel#range"},"range")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A Boolean value indicating whether the given position is included in the panel range")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"pos"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"A position to check")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"includeMargin"),Object(r.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"},"false"),Object(r.b)("td",{parentName:"tr",align:"center"},"Include ",Object(r.b)("a",{parentName:"td",href:"Panel#margin"},"margin")," to the range")))),Object(r.b)("h3",{id:"includeRange"},"includeRange"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Check whether the given range is fully included in this panel's area"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A Boolean value indicating whether the given range is fully included in the panel range")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"min"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"Minimum value of the range to check")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"max"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"Maximum value of the range to check")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"includeMargin"),Object(r.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"},"false"),Object(r.b)("td",{parentName:"tr",align:"center"},"Include ",Object(r.b)("a",{parentName:"td",href:"Panel#margin"},"margin")," to the range")))),Object(r.b)("h3",{id:"focus"},"focus"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Move ",Object(r.b)("a",{parentName:"p",href:"Camera"},"Camera")," to this panel"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the panel")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"duration"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"yes"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")))),Object(r.b)("h3",{id:"prev"},"prev"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Get previous(",Object(r.b)("inlineCode",{parentName:"p"},"index - 1"),") panel. When the previous panel does not exist, this will return ",Object(r.b)("inlineCode",{parentName:"p"},"null")," instead",Object(r.b)("br",{parentName:"p"}),"\n","If the ",Object(r.b)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," is enabled, this will return the last panel if called from the first panel"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": ",Object(r.b)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The previous panel")),Object(r.b)("h3",{id:"next"},"next"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Get next(",Object(r.b)("inlineCode",{parentName:"p"},"index + 1"),") panel. When the next panel does not exist, this will return ",Object(r.b)("inlineCode",{parentName:"p"},"null")," instead",Object(r.b)("br",{parentName:"p"}),"\n","If the ",Object(r.b)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," is enabled, this will return the first panel if called from the last panel"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": ",Object(r.b)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The previous panel")),Object(r.b)("h3",{id:"increaseIndex"},"increaseIndex"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Increase panel's index by the given value"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"val"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),Object(r.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(r.b)("strong",null,"internal")," use only."),Object(r.b)("h3",{id:"decreaseIndex"},"decreaseIndex"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Decrease panel's index by the given value"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"val"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),Object(r.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(r.b)("strong",null,"internal")," use only."),Object(r.b)("h3",{id:"increasePosition"},"increasePosition"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Increase panel's position by the given value"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"val"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),Object(r.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(r.b)("strong",null,"internal")," use only."),Object(r.b)("h3",{id:"decreasePosition"},"decreasePosition"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Decrease panel's position by the given value"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"val"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),Object(r.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(r.b)("strong",null,"internal")," use only."),Object(r.b)("h3",{id:"toggle"},"toggle"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"toggled")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"prevPos"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"newPos"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"no"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))),Object(r.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(r.b)("strong",null,"internal")," use only."),Object(r.b)("h3",{id:"updateCircularToggleDirection"},"updateCircularToggleDirection"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(r.b)("strong",null,"internal")," use only."))}p.isMDXComponent=!0},356:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var s=b.a.createContext({}),p=function(e){var t=b.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=p(e.components);return b.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),o=p(a),O=n,d=o["".concat(l,".").concat(O)]||o[O]||m[O]||r;return a?b.a.createElement(d,c(c({ref:t},s),{},{components:a})):b.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);