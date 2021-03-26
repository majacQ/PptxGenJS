(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(8),o=(n(0),n(105)),i={id:"usage-saving",title:"Saving Presentations"},l={unversionedId:"usage-saving",id:"usage-saving",isDocsHomePage:!1,title:"Saving Presentations",description:"Several methods are available when generating a presentation.",source:"@site/docs/usage-saving.md",slug:"/usage-saving",permalink:"/PptxGenJS/docs/usage-saving",version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1616114678,formattedLastUpdatedAt:"3/18/2021",sidebar:"docs",previous:{title:"Slide Properties",permalink:"/PptxGenJS/docs/usage-slide-options"},next:{title:"HTML to PowerPoint",permalink:"/PptxGenJS/docs/html-to-powerpoint"}},p=[{value:"Export Methods",id:"export-methods",children:[{value:"Regular File",id:"regular-file",children:[]},{value:"Blob and Other Types",id:"blob-and-other-types",children:[]},{value:"Stream",id:"stream",children:[]}]},{value:"Saving Multiple Presentations",id:"saving-multiple-presentations",children:[{value:"Client Browser",id:"client-browser",children:[]},{value:"Node.js",id:"nodejs",children:[]}]}],s={toc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Several methods are available when generating a presentation."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All methods return a Promise"),Object(o.b)("li",{parentName:"ul"},"Working examples are available under ",Object(o.b)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/tree/master/demos"},"/demos"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"export-methods"},"Export Methods"),Object(o.b)("h3",{id:"regular-file"},"Regular File"),Object(o.b)("p",null,"Export the presentation as a regular flat file. Browser-based apps will prompt the user to download the file and push a\nPowerPoint Presentation MIME-type pptx file. Node.js apps will use ",Object(o.b)("inlineCode",{parentName:"p"},"fs")," to save the file to the local file system."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// For simple cases, you can omit `then`\npptx.writeFile('Browser-PowerPoint-Demo.pptx');\n\n// Using Promise to determine when the file has actually completed generating\npptx.writeFile('Browser-PowerPoint-Demo.pptx');\n    .then(fileName => {\n        console.log(`created file: ${fileName}`);\n    });\n")),Object(o.b)("h3",{id:"blob-and-other-types"},"Blob and Other Types"),Object(o.b)("p",null,"Export the presentation into other data formats for cloud storage, etc."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Available formats: ",Object(o.b)("inlineCode",{parentName:"li"},"arraybuffer"),", ",Object(o.b)("inlineCode",{parentName:"li"},"base64"),", ",Object(o.b)("inlineCode",{parentName:"li"},"binarystring"),", ",Object(o.b)("inlineCode",{parentName:"li"},"blob"),", ",Object(o.b)("inlineCode",{parentName:"li"},"nodebuffer"),", ",Object(o.b)("inlineCode",{parentName:"li"},"uint8array"))),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"pptx.write('base64')\n    .then(data => {\n        console.log(\"write as base64: Here are 0-100 chars of `data`:\\n\");\n        console.log(data.substring(0, 100));\n    })\n    .catch(err => {\n        console.error(err);\n    });\n")),Object(o.b)("h3",{id:"stream"},"Stream"),Object(o.b)("p",null,"Export the presentation into a binary stream format for cloud storage, etc."),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'// Ex using: `const app = express();``\npptx.stream()\n    .then(data => {\n        app.get("/", (req, res) => {\n            res.writeHead(200, { "Content-disposition": "attachment;filename=" + fileName, "Content-Length": data.length });\n            res.end(new Buffer(data, "binary"));\n        });\n\n        app.listen(3000, () => {\n            console.log("PptxGenJS Node Stream Demo app listening on port 3000!");\n            console.log("Visit: http://localhost:3000/");\n            console.log("(press Ctrl-C to quit demo)");\n        });\n    })\n    .catch(err => {\n        console.log("ERROR: " + err);\n    });\n')),Object(o.b)("hr",null),Object(o.b)("h2",{id:"saving-multiple-presentations"},"Saving Multiple Presentations"),Object(o.b)("h3",{id:"client-browser"},"Client Browser"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In order to generate a new, unique Presentation just create a new instance of the library then add objects and save as normal.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"var pptx = null;\n\n// Presentation 1:\npptx = new PptxGenJS();\npptx.addSlide().addText('Presentation 1', {x:1, y:1});\npptx.writeFile('PptxGenJS-Presentation-1');\n\n// Presentation 2:\npptx = new PptxGenJS();\npptx.addSlide().addText('Presentation 2', {x:1, y:1});\npptx.writeFile('PptxGenJS-Presentation-2');\n")),Object(o.b)("h3",{id:"nodejs"},"Node.js"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"See ",Object(o.b)("inlineCode",{parentName:"li"},"demos/node/demo.js")," for a working demo with multiple presentations, promises, etc."),Object(o.b)("li",{parentName:"ul"},"See ",Object(o.b)("inlineCode",{parentName:"li"},"demos/node/demo_stream.js")," for a working demo using streaming")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"let PptxGenJS = require(\"pptxgenjs\");\n\n// Presentation 1:\nlet pptx1 = new PptxGenJS();\npptx1.addSlide().addText('Presentation 1', {x:1, y:1});\npptx1.writeFile('PptxGenJS-NodePres-1');\n\n// Presentation 2:\nlet pptx2 = new PptxGenJS();\npptx2.addSlide().addText('Presentation 2', {x:1, y:1});\npptx2.writeFile('PptxGenJS-NodePres-2');\n")))}c.isMDXComponent=!0}}]);