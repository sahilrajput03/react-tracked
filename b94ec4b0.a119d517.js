(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),s=(n(0),n(91)),o=n(95),c=n(96),i={id:"tutorial-01",title:"Tutorial with createContainer - Person Name with useState",sidebar_label:"Person Name (useState)"},l={unversionedId:"tutorial-01",id:"tutorial-01",isDocsHomePage:!1,title:"Tutorial with createContainer - Person Name with useState",description:"This tutorial shows tiny example code with useState.",source:"@site/docs/tutorial-01.md",slug:"/tutorial-01",permalink:"/docs/tutorial-01",version:"current",sidebar_label:"Person Name (useState)",sidebar:"docs",previous:{title:"Comparison with other projects",permalink:"/docs/comparison"},next:{title:"Tutorial with createContainer - ToDo App with useReducer",permalink:"/docs/tutorial-02"}},u=[{value:"src/App.js",id:"srcappjs",children:[]},{value:"src/store.js",id:"srcstorejs",children:[]},{value:"src/EditPerson.js",id:"srceditpersonjs",children:[]},{value:"src/ShowPerson.js",id:"srcshowpersonjs",children:[]},{value:"src/utils.js",id:"srcutilsjs",children:[]},{value:"CodeSandbox",id:"codesandbox",children:[]}],p={toc:u};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This tutorial shows tiny example code with useState."),Object(s.b)("h2",{id:"srcappjs"},"src/App.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(c.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { Provider } from './store';\nimport EditPerson from './EditPerson';\nimport ShowPerson from './ShowPerson';\n\nconst App = () => (\n  <Provider>\n    <EditPerson />\n    <ShowPerson />\n  </Provider>\n);\n\nexport default App;\n\n"))),Object(s.b)(c.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { Provider } from './store';\nimport EditPerson from './EditPerson';\nimport ShowPerson from './ShowPerson';\n\nconst App: React.FC = () => (\n  <Provider>\n    <EditPerson />\n    <ShowPerson />\n  </Provider>\n);\n\nexport default App;\n\n")))),Object(s.b)("p",null,"This is the root component."),Object(s.b)("h2",{id:"srcstorejs"},"src/store.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(c.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { useState } from 'react';\nimport { createContainer } from 'react-tracked';\n\nconst useValue = () => useState({});\n\nexport const {\n  Provider,\n  useTrackedState,\n  useUpdate: useSetState,\n} = createContainer(useValue);\n\n"))),Object(s.b)(c.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { useState } from 'react';\nimport { createContainer } from 'react-tracked';\n\nexport type State = {\n  firstName?: string;\n  lastName?: string;\n};\n\nconst useValue = () => useState<State>({});\n\nexport const {\n  Provider,\n  useTrackedState,\n  useUpdate: useSetState,\n} = createContainer(useValue);\n\n")))),Object(s.b)("p",null,"The store is created by useState.\nuseUpdate is renamed to useSetState for exporting."),Object(s.b)("h2",{id:"srceditpersonjs"},"src/EditPerson.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(c.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useSetState, useTrackedState } from './store';\n\nconst EditPerson = () => {\n  const setState = useSetState();\n  const state = useTrackedState();\n  const setFirstName = (e) => {\n    const firstName = e.target.value;\n    setState((prev) => ({ ...prev, firstName }));\n  };\n  const setLastName = (e) => {\n    const lastName = e.target.value;\n    setState((prev) => ({ ...prev, lastName }));\n  };\n  return (\n    <div>\n      <div>\n        First Name:\n        <input value={state.firstName || ''} onChange={setFirstName} />\n      </div>\n      <div>\n        Last Name:\n        <input value={state.lastName || ''} onChange={setLastName} />\n      </div>\n    </div>\n  );\n};\n\nexport default EditPerson;\n\n"))),Object(s.b)(c.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useSetState, useTrackedState } from './store';\n\nconst EditPerson: React.FC = () => {\n  const setState = useSetState();\n  const state = useTrackedState();\n  const setFirstName = (e) => {\n    const firstName = e.target.value;\n    setState((prev) => ({ ...prev, firstName }));\n  };\n  const setLastName = (e) => {\n    const lastName = e.target.value;\n    setState((prev) => ({ ...prev, lastName }));\n  };\n  return (\n    <div>\n      <div>\n        First Name:\n        <input value={state.firstName || ''} onChange={setFirstName} />\n      </div>\n      <div>\n        Last Name:\n        <input value={state.lastName || ''} onChange={setLastName} />\n      </div>\n    </div>\n  );\n};\n\nexport default EditPerson;\n\n")))),Object(s.b)("p",null,"This component is to edit person object."),Object(s.b)("h2",{id:"srcshowpersonjs"},"src/ShowPerson.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(c.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import React, { useState } from 'react';\n\nimport { useTrackedState } from './store';\nimport { useFlasher } from './utils';\n\nconst ShowPerson = () => {\n  const state = useTrackedState();\n  const [onlyFirstName, setOnlyFirstName] = useState(false);\n  return (\n    <div ref={useFlasher()}>\n      <button type=\"button\" onClick={() => setOnlyFirstName((s) => !s)}>\n        {onlyFirstName ? 'Showing only first name' : 'Showing full name'}\n      </button>\n      {onlyFirstName ? (\n        <div>First Name: {state.firstName}</div>\n      ) : (\n        <div>\n          Full Name: {state.firstName} {state.lastName}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default ShowPerson;\n\n"))),Object(s.b)(c.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import React, { useState } from 'react';\n\nimport { useDispatch, useTrackedState } from './store';\nimport { useFlasher } from './utils';\n\nconst ShowPerson: React.FC = () => {\n  const state = useTrackedState();\n  const [onlyFirstName, setOnlyFirstName] = useState(false);\n  return (\n    <div ref={useFlasher()}>\n      <button type=\"button\" onClick={() => setOnlyFirstName((s) => !s)}>\n        {onlyFirstName ? 'Showing only first name' : 'Showing full name'}\n      </button>\n      {onlyFirstName ? (\n        <div>First Name: {state.firstName}</div>\n      ) : (\n        <div>\n          Full Name: {state.firstName} {state.lastName}\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default ShowPerson;\n\n")))),Object(s.b)("p",null,"This is the ShowPerson component.\nIt shows only first name or full name."),Object(s.b)("h2",{id:"srcutilsjs"},"src/utils.js"),Object(s.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(s.b)(c.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n"))),Object(s.b)(c.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { useRef, useEffect } from 'react';\n\nexport const useFlasher = () => {\n  const ref = useRef<HTMLLIElement>(null);\n  useEffect(() => {\n    if (!ref.current) return;\n    ref.current.setAttribute(\n      'style',\n      'box-shadow: 0 0 2px 1px red; transition: box-shadow 100ms ease-out;',\n    );\n    setTimeout(() => {\n      if (!ref.current) return;\n      ref.current.setAttribute('style', '');\n    }, 300);\n  });\n  return ref;\n};\n\n")))),Object(s.b)("p",null,"This is a utility function to show which components render."),Object(s.b)("h2",{id:"codesandbox"},"CodeSandbox"),Object(s.b)("p",null,"You can try ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://codesandbox.io/s/recursing-chatterjee-rlw9s"}),"working example"),"."))}m.isMDXComponent=!0},90:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||m[b]||s;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";var r=n(0),a=n(94);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},94:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},95:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(93),o=n(90),c=n(54),i=n.n(c);const l=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:p,groupId:m,className:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(s.a)(),[v,j]=Object(r.useState)(c),y=r.Children.toArray(e.children);if(null!=m){const e=d[m];null!=e&&e!==v&&p.some((t=>t.value===e))&&j(e)}const O=e=>{j(e),null!=m&&f(m,e)},h=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(r.cloneElement)(y.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},96:function(e,t,n){"use strict";var r=n(3),a=n(0),s=n.n(a);t.a=function({children:e,hidden:t,className:n}){return s.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);