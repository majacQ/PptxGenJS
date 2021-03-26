(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{105:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||i;return t?a.a.createElement(m,o(o({ref:n},p),{},{components:t})):a.a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),i=(t(0),t(105)),l={id:"deprecated",title:"Deprecated"},o={unversionedId:"deprecated",id:"deprecated",isDocsHomePage:!1,title:"Deprecated",description:"Version 3.0 Breaking Changes",source:"@site/docs/deprecated.md",slug:"/deprecated",permalink:"/PptxGenJS/docs/deprecated",version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1616114678,formattedLastUpdatedAt:"3/18/2021",sidebar:"docs",previous:{title:"Type Interfaces",permalink:"/PptxGenJS/docs/types"}},c=[{value:"Version 3.0 Breaking Changes",id:"version-30-breaking-changes",children:[]},{value:"Version 2.0 Breaking Changes",id:"version-20-breaking-changes",children:[{value:"All Users",id:"all-users",children:[]},{value:"Node Users",id:"node-users",children:[]}]}],p={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"version-30-breaking-changes"},"Version 3.0 Breaking Changes"),Object(i.b)("p",null,"Please see the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/wiki/Version-3.0-Migration-Guide"},"Version 3.0 Migration Guide")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pptx.colors")," is deprecated - use ",Object(i.b)("inlineCode",{parentName:"li"},"pptx.SchemeColor")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pptx.charts")," is deprecated - use ",Object(i.b)("inlineCode",{parentName:"li"},"pptx.ChartType")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pptx.shapes")," is deprecated - use ",Object(i.b)("inlineCode",{parentName:"li"},"pptx.ShapeType"))),Object(i.b)("h2",{id:"version-20-breaking-changes"},"Version 2.0 Breaking Changes"),Object(i.b)("p",null,"Please note that version 2.0.0 enabled some much needed cleanup, but may break your previous code...\n(however, a quick search-and-replace will fix any issues)."),Object(i.b)("p",null,"While the changes may only impact cosmetic properties, it's recommended you test your solutions thoroughly before upgrading PptxGenJS to the 2.0 version."),Object(i.b)("h3",{id:"all-users"},"All Users"),Object(i.b)("p",null,"The library ",Object(i.b)("inlineCode",{parentName:"p"},"getVersion()")," method is now a property: ",Object(i.b)("inlineCode",{parentName:"p"},"version")),Object(i.b)("p",null,"Option names are now caseCase across all methods:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"font_face")," renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"fontFace")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"font_size")," renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"fontSize")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"line_dash")," renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"lineDash")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"line_head")," renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"lineHead")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"line_size")," renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"lineSize")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"line_tail")," renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"lineTail"))),Object(i.b)("p",null,"Options deprecated in early 1.0 versions (hopefully nobody still uses these):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"marginPt")," renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"margin"))),Object(i.b)("h3",{id:"node-users"},"Node Users"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Major Change")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"require('pptxgenjs')")," no longer returns a singleton instance"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pptx = new PptxGenJS()")," will create a single, unique instance"),Object(i.b)("li",{parentName:"ul"},"Advantage: Creating ",Object(i.b)("a",{parentName:"li",href:"#saving-multiple-presentations"},"multiple presentations")," is much easier now - see ",Object(i.b)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/issues/83"},"Issue #83")," for more).")))}s.isMDXComponent=!0}}]);