(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(95)),l={title:"Contributing"},o={unversionedId:"internal-commands/develop-internal-commands",id:"internal-commands/develop-internal-commands",isDocsHomePage:!1,title:"Contributing",description:"You can contribute to Templater by developing a new internal function / variable.",source:"@site/docs/internal-commands/develop-internal-commands.md",slug:"/internal-commands/develop-internal-commands",permalink:"/Templater/docs/internal-commands/develop-internal-commands",editUrl:"https://github.com/SilentVoid13/Templater/docs/edit/master/docs/internal-commands/develop-internal-commands.md",version:"current",sidebar:"docs",previous:{title:"Web module",permalink:"/Templater/docs/internal-commands/internal-modules/web-module"},next:{title:"Overview",permalink:"/Templater/docs/eta-features/overview"}},c=[{value:"Layout",id:"layout",children:[]},{value:"Registering a new internal variable / function",id:"registering-a-new-internal-variable--function",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can contribute to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater"},"Templater")," by developing a new internal function / variable."),Object(i.b)("p",null,"The process to develop a new one is really easy."),Object(i.b)("p",null,"Keep in mind that only pertinent submissions will be accepted, don't submit a very specific internal variable / function that you'll be the only one using."),Object(i.b)("h2",{id:"layout"},"Layout"),Object(i.b)("p",null,"Internal variables / functions are sorted by modules. Each module has a dedicated folder under ",Object(i.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater/tree/master/src/InternalTemplates"},"src/InternalTemplates"),". "),Object(i.b)("p",null,"Let's take the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater/tree/master/src/InternalTemplates/date"},"date module")," as an example."),Object(i.b)("p",null,"It contains an ",Object(i.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater/blob/master/src/InternalTemplates/date/InternalModuleDate.ts"},"InternalModuleDate")," file where all our internal date's related variables and functions are defined and registered:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'export class InternalModuleDate extends InternalModule {\n    name = "date";\n\n    async generateTemplates() {\n        this.templates.set("now", this.generate_now());\n        this.templates.set("tomorrow", this.generate_tomorrow());\n        this.templates.set("yesterday", this.generate_yesterday());\n    }\n\n    generate_now() {\n        return (format: string = "YYYY-MM-DD", offset?: number, reference?: string, reference_format?: string) => {\n            if (reference && !window.moment(reference, reference_format).isValid()) {\n                throw new Error("Invalid title date format, try specifying one with the argument \'reference\'");\n            }\n            return get_date_string(format, offset, reference, reference_format);\n        }\n    }\n\n    generate_tomorrow() {\n        return (format: string = "YYYY-MM-DD") => {\n            return get_date_string(format, 1);\n        }\n    }\n\n    generate_yesterday() {\n        return (format: string = "YYYY-MM-DD") => {\n            return get_date_string(format, -1);\n        }\n    }\n}\n')),Object(i.b)("p",null,"Every module extends the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater/blob/master/src/InternalTemplates/InternalModule.ts"},"InternalModule")," abstract class, which means they contain the following attributes and methods:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"this.app")," attribute: the obsidian API ",Object(i.b)("inlineCode",{parentName:"li"},"App")," object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"this.templates")," attribute: A map that maps a string representing the name of the variable / function with the actual variable / function."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"this.file")," attribute: The destination file where the template will be inserted."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"this.plugin")," attribute: The Templater plugin object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"this.generateTemplates()")," method: Registers every internal variable / function in the ",Object(i.b)("inlineCode",{parentName:"li"},"templates")," map.")),Object(i.b)("p",null,"You can use these attributes in your new internal variable / function if you need them."),Object(i.b)("h2",{id:"registering-a-new-internal-variable--function"},"Registering a new internal variable / function"),Object(i.b)("p",null,"Here are the different steps you need to follow, in order to register a new internal variable / function in a module."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1st step:")," Create a method inside the module called ",Object(i.b)("inlineCode",{parentName:"p"},"generate_<internal_variable_or_function_name>()")," that will generate your internal variable / function, that means it will return either a lambda function (representing the internal function) or directly the internal variable you want to expose."),Object(i.b)("p",null,"All generation methods are ordered by alphabetical order based on the internal variable / function name."),Object(i.b)("p",null,"Try to give a good, self-explanatory name for your variable / function."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"2nd step:")," Register your internal variable / function in the ",Object(i.b)("inlineCode",{parentName:"p"},"templates")," map within the ",Object(i.b)("inlineCode",{parentName:"p"},"generateTemplates()")," method."),Object(i.b)("p",null,"To register your variable / function, use your ",Object(i.b)("inlineCode",{parentName:"p"},"this.generate_<internal_variable_or_function_name>()")," method you defined earlier:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"this.templates.set(<internal_variable_or_function_name>, this.generate_<internal_variable_or_function_name>());\n")),Object(i.b)("p",null,"Internal variable / function registrations are also ordered by alphabetical order based on the variable / function name."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"3rd step:")," Add your internal variable / function documentation in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater/blob/master/README.md"},"README"),"."),Object(i.b)("p",null,"And you are done ! Thanks for contributing to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater"},"Templater")," !"),Object(i.b)("p",null,"Now, just submit a ",Object(i.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater/pulls"},"pull request")," on Github, I'll try to be as reactive as possible."))}b.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},s),{},{components:n})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);