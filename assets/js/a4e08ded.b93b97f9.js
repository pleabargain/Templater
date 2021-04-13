(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(92)),i={title:"Date Module"},l={unversionedId:"internal-variables-functions/internal-modules/date-module",id:"internal-variables-functions/internal-modules/date-module",isDocsHomePage:!1,title:"Date Module",description:"This module contains every internal variable / function related to dates.",source:"@site/docs/internal-variables-functions/internal-modules/date-module.md",slug:"/internal-variables-functions/internal-modules/date-module",permalink:"/Templater/docs/internal-variables-functions/internal-modules/date-module",editUrl:"https://github.com/SilentVoid13/Templater/docs/edit/master/docs/internal-variables-functions/internal-modules/date-module.md",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/Templater/docs/internal-variables-functions"},next:{title:"File Module",permalink:"/Templater/docs/internal-variables-functions/internal-modules/file-module"}},d=[{value:"Documentation",id:"documentation",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This module contains every internal variable / function related to dates."),Object(o.b)("h2",{id:"documentation"},"Documentation"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Function documentation is using a specific syntax. More informations ",Object(o.b)("a",{parentName:"p",href:"../../syntax#function-documentation-syntax"},"here")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Internal Variable / Function"),Object(o.b)("th",{parentName:"tr",align:null},"Arguments"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Example Output"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},'tp.date.now(format: string = "YYYY-MM-DD", offset?: number\u23aestring, reference?: string, reference_format?: string)')),Object(o.b)("td",{parentName:"tr",align:null},"- ",Object(o.b)("inlineCode",{parentName:"td"},"format"),": Format for the date, refer to ",Object(o.b)("a",{parentName:"td",href:"https://momentjs.com/docs/#/displaying/format/"},"format reference"),Object(o.b)("br",null),"- ",Object(o.b)("inlineCode",{parentName:"td"},"offset"),": Offset for the day, e.g. set this to ",Object(o.b)("inlineCode",{parentName:"td"},"-7")," to get last week's date. You can also specify the offset as a string using the ",Object(o.b)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601")," format, e.g. set this to ",Object(o.b)("inlineCode",{parentName:"td"},'"P-1M"')," to get last month's date.",Object(o.b)("br",null),"- ",Object(o.b)("inlineCode",{parentName:"td"},"reference"),": The date referential, e.g. set this to the note's title",Object(o.b)("br",null),"- ",Object(o.b)("inlineCode",{parentName:"td"},"reference_format"),": The date reference format."),Object(o.b)("td",{parentName:"tr",align:null},"Retrieves the date."),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"2021-01-15"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},'tp.date.tomorrow(format: string = "YYYY-MM-DD")')),Object(o.b)("td",{parentName:"tr",align:null},"- ",Object(o.b)("inlineCode",{parentName:"td"},"format"),": Format for the date, refer to ",Object(o.b)("a",{parentName:"td",href:"https://momentjs.com/docs/#/displaying/format/"},"format reference")),Object(o.b)("td",{parentName:"tr",align:null},"Retrieves tomorrow's date"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"2020-11-07"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},'tp.date.weekday(format: string = "YYYY-MM-DD", weekday: number, reference?: string, reference_format?: string)')),Object(o.b)("td",{parentName:"tr",align:null},"- ",Object(o.b)("inlineCode",{parentName:"td"},"format"),": Format for the date, refer to ",Object(o.b)("a",{parentName:"td",href:"https://momentjs.com/docs/#/displaying/format/"},"format reference"),Object(o.b)("br",null),"- ",Object(o.b)("inlineCode",{parentName:"td"},"weekday"),": Week day number. If the locale assigns Monday as the first day of the week, ",Object(o.b)("inlineCode",{parentName:"td"},"0")," will be Monday, ",Object(o.b)("inlineCode",{parentName:"td"},"-7")," will be last week's day.",Object(o.b)("br",null),"- ",Object(o.b)("inlineCode",{parentName:"td"},"reference"),": The date referential, e.g. set this to the note's title",Object(o.b)("br",null),"- ",Object(o.b)("inlineCode",{parentName:"td"},"reference_format"),": The date reference format."),Object(o.b)("td",{parentName:"tr",align:null},"Retrieves the week's day date."),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"2021-04-06"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},'tp.date.yesterday(format: string = "YYYY-MM-DD")')),Object(o.b)("td",{parentName:"tr",align:null},"- ",Object(o.b)("inlineCode",{parentName:"td"},"format"),": Format for the date, refer to ",Object(o.b)("a",{parentName:"td",href:"https://momentjs.com/docs/#/displaying/format/"},"format reference")),Object(o.b)("td",{parentName:"tr",align:null},"Retrieves yesterday's date"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"2020-11-07"))))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'Date now: <% tp.date.now() %>\nDate now with format: <% tp.date.now("Do MMMM YYYY") %>\n\nLast week: <% tp.date.now("dddd Do MMMM YYYY", -7) %>\nToday: <% tp.date.now("dddd Do MMMM YYYY, ddd") %>\nNext week: <% tp.date.now("dddd Do MMMM YYYY", 7) %>\n\nLast month: <% tp.date.now("YYYY-MM-DD", "P-1M") %>\nNext year: <% tp.date.now("YYYY-MM-DD", "P1Y") %>\n\nFile\'s title date + 1 day (tomorrow): <% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>\nFile\'s title date - 1 day (yesterday): <% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>\n\nDate tomorrow with format: <% tp.date.tomorrow("Do MMMM YYYY") %>    \n\nThis week\'s monday: <% tp.date.weekday("YYYY-MM-DD", 0) %>\nNext monday: <% tp.date.weekday("YYYY-MM-DD", 7) %>\nFile\'s title monday: <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>\nFile\'s title next monday: <% tp.date.weekday("YYYY-MM-DD", 7, tp.file.title, "YYYY-MM-DD") %>\n\nDate yesterday with format: <% tp.date.yesterday("Do MMMM YYYY") %>\n')))}b.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=b(n),p=a,u=m["".concat(i,".").concat(p)]||m[p]||s[p]||o;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);