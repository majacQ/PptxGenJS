"use strict";(self.webpackChunkpptxgenjs_gh_pages=self.webpackChunkpptxgenjs_gh_pages||[]).push([[6302],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(a),f=r,u=k["".concat(o,".").concat(f)]||k[f]||s[f]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},975:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],p={id:"api-media",title:"Media"},o=void 0,d={unversionedId:"api-media",id:"api-media",isDocsHomePage:!1,title:"Media",description:"Media enables the addition of audio, video and online video to Slides.",source:"@site/docs/api-media.md",sourceDirName:".",slug:"/api-media",permalink:"/PptxGenJS/docs/api-media",tags:[],version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1631474179,formattedLastUpdatedAt:"9/12/2021",frontMatter:{id:"api-media",title:"Media"},sidebar:"docs",previous:{title:"Images",permalink:"/PptxGenJS/docs/api-images"},next:{title:"Shapes",permalink:"/PptxGenJS/docs/api-shapes"}},m=[{value:"Usage",id:"usage",children:[{value:"Usage Notes",id:"usage-notes",children:[]},{value:"Supported Formats and Notes",id:"supported-formats-and-notes",children:[]}]},{value:"Properties",id:"properties",children:[{value:"Position/Size Props (PositionProps)",id:"positionsize-props-positionprops",children:[]},{value:"Data/Path Props (DataOrPathProps)",id:"datapath-props-dataorpathprops",children:[]},{value:"Media Props (MediaProps)",id:"media-props-mediaprops",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Samples",id:"samples",children:[]}],s={toc:m};function k(e){var t=e.components,p=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Media enables the addition of audio, video and online video to Slides."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// Path: full or relative\nslide.addMedia({ type: "video", path: "https://example.com/media/sample.mov" });\nslide.addMedia({ type: "video", path: "../media/sample.mov" });\n\n// Base64: pre-encoded string\nslide.addMedia({ type: "audio", data: "audio/mp3;base64,iVtDafDrBF[...]=" });\n\n// YouTube: Online video (supported in Microsoft 365)\nslide.addMedia({ type: "online", link: "https://www.youtube.com/embed/Dph6ynRVyUc" });\n')),(0,i.kt)("h3",{id:"usage-notes"},"Usage Notes"),(0,i.kt)("p",null,"Either provide a URL location or base64 data along with type to create media."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," - type: media type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," - URL: relative or full"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," - base64: string representing an encoded image")),(0,i.kt)("h3",{id:"supported-formats-and-notes"},"Supported Formats and Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Video (mpg, mov, mp4, m4v, et al.); Audio (mp3, wav, et al.); (see ",(0,i.kt)("a",{parentName:"li",href:"https://support.office.com/en-us/article/Video-and-audio-file-formats-supported-in-PowerPoint-d8b12450-26db-4c7b-a5c1-593d3418fb59#OperatingSystem=Windows"},"Video and Audio file formats supported in PowerPoint"),")"),(0,i.kt)("li",{parentName:"ul"},"YouTube videos can be viewed using Microsoft 365/Office 365 (they may show errors on older desktop PowerPoint versions)"),(0,i.kt)("li",{parentName:"ul"},"Other online video sites may be supported as well (some users have reported non-YouTube sites that worked)"),(0,i.kt)("li",{parentName:"ul"},"Not all platforms support all formats! MacOS can show MPG files whereas Windows probably will not, and some AVI\nfiles may work and some may not. Video codecs are weird and painful like that.")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"positionsize-props-positionprops"},"Position/Size Props (",(0,i.kt)("a",{parentName:"h3",href:"/PptxGenJS/docs/types#position-props"},"PositionProps"),")"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Possible Values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"x")),(0,i.kt)("td",{parentName:"tr",align:"left"},"number"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"hor location (inches)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0-n")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"x")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"hor location (percent)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",(0,i.kt)("inlineCode",{parentName:"td"},"{x:'50%'}")," middle of the Slide)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"y")),(0,i.kt)("td",{parentName:"tr",align:"left"},"number"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"ver location (inches)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0-n")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"y")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"ver location (percent)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",(0,i.kt)("inlineCode",{parentName:"td"},"{y:'50%'}")," middle of the Slide)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"w")),(0,i.kt)("td",{parentName:"tr",align:"left"},"number"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"width (inches)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0-n")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"w")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"width (percent)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",(0,i.kt)("inlineCode",{parentName:"td"},"{w:'50%'}")," 50% the Slide width)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"h")),(0,i.kt)("td",{parentName:"tr",align:"left"},"number"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1.0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"height (inches)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0-n")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"h")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"height (percent)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'n%'. (Ex: ",(0,i.kt)("inlineCode",{parentName:"td"},"{h:'50%'}")," 50% the Slide height)")))),(0,i.kt)("h3",{id:"datapath-props-dataorpathprops"},"Data/Path Props (",(0,i.kt)("a",{parentName:"h3",href:"/PptxGenJS/docs/types#datapath-props-dataorpathprops"},"DataOrPathProps"),")"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Possible Values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"image data (base64)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"data")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"path")," is required) base64-encoded image string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"image path"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"data")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"path")," is required) relative or full URL")))),(0,i.kt)("h3",{id:"media-props-mediaprops"},"Media Props (",(0,i.kt)("a",{parentName:"h3",href:"/PptxGenJS/docs/types#media-props-mediaprops"},"MediaProps"),")"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Possible Values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"media type"),(0,i.kt)("td",{parentName:"tr",align:"left"},"media type: ",(0,i.kt)("inlineCode",{parentName:"td"},"audio")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"video")," (reqs: ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"path"),") or ",(0,i.kt)("inlineCode",{parentName:"td"},"online")," (reqs:",(0,i.kt)("inlineCode",{parentName:"td"},"link"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"link")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"video URL"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(YouTube only): link to online video")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Media Examples",src:a(3503).Z})),(0,i.kt)("h2",{id:"samples"},"Samples"),(0,i.kt)("p",null,"Sample code: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/blob/master/demos/modules/demo_media.mjs"},"demos/modules/demo_media.mjs")))}k.isMDXComponent=!0},3503:function(e,t,a){t.Z=a.p+"assets/images/ex-media-slide-1608ba7bc09940984fae2a2657787bac.png"}}]);