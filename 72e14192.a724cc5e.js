(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(91)),o=n(95),s=n(96),l={id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start"},i={unversionedId:"quick-start",id:"quick-start",isDocsHomePage:!1,title:"Quick Start",description:"We explain how to use createContainer, which is very similar",source:"@site/docs/quick-start.md",slug:"/quick-start",permalink:"/docs/quick-start",version:"current",sidebar_label:"Quick Start",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Comparison with other projects",permalink:"/docs/comparison"}},p=[{value:"Create a new app",id:"create-a-new-app",children:[]},{value:"Create a global state with pure React",id:"create-a-global-state-with-pure-react",children:[]},{value:"Performance issue with pure React",id:"performance-issue-with-pure-react",children:[]},{value:"Install React Tracked",id:"install-react-tracked",children:[]},{value:"Use React Tracked instead of bare context",id:"use-react-tracked-instead-of-bare-context",children:[]}],u={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"We explain how to use ",Object(c.b)("inlineCode",{parentName:"p"},"createContainer"),", which is very similar\nto how to use bare React Context for global state."),Object(c.b)("p",null,"Let's try a minimal example from scratch."),Object(c.b)("h2",{id:"create-a-new-app"},"Create a new app"),Object(c.b)("p",null,"Use ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://create-react-app.dev"}),"create-react-app")," to create a new app."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx create-react-app my-app # Add --template typescript for TypeScript\n")),Object(c.b)("p",null,"Run the app."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd my-app\nnpm start # Or yarn start\n")),Object(c.b)("h2",{id:"create-a-global-state-with-pure-react"},"Create a global state with pure React"),Object(c.b)("p",null,"Now, we create a global state that contains a number and a string."),Object(c.b)("p",null,"Create a new file ",Object(c.b)("inlineCode",{parentName:"p"},"./src/store.js"),". (",Object(c.b)("inlineCode",{parentName:"p"},"./src/store.tsx")," for TypeScript)"),Object(c.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(c.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React, { createContext, useState, useContext } from 'react';\n\nconst initialState = {\n  count: 0,\n  text: 'hello',\n};\n\nconst useMyState = () => useState(initialState);\n\nconst MyContext = createContext(null);\n\nexport const useSharedState = () => {\n  const value = useContext(MyContext);\n  if (value === null) throw new Error('Please add SharedStateProvider');\n  return value;\n};\n\nexport const SharedStateProvider = ({ children }) => (\n  <MyContext.Provider value={useMyState()}>{children}</MyContext.Provider>\n);\n\n"))),Object(c.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import React, { createContext, useState, useContext } from 'react';\n\nconst initialState = {\n  count: 0,\n  text: 'hello',\n};\n\nconst useMyState = () => useState(initialState);\n\nconst MyContext = createContext<ReturnType<typeof useMyState> | null>(null);\n\nexport const useSharedState = () => {\n  const value = useContext(MyContext);\n  if (value === null) throw new Error('Please add SharedStateProvider');\n  return value;\n};\n\nexport const SharedStateProvider: React.FC = ({ children }) => (\n  <MyContext.Provider value={useMyState()}>{children}</MyContext.Provider>\n);\n\n")))),Object(c.b)("p",null,"Create a new file ",Object(c.b)("inlineCode",{parentName:"p"},"./src/Counter.js"),". (",Object(c.b)("inlineCode",{parentName:"p"},"./src/Counter.tsx")," for TypeScript)"),Object(c.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(c.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useSharedState } from './store';\n\nconst Counter = () => {\n  const [state, setState] = useSharedState();\n  const increment = () => {\n    setState((prev) => ({ ...prev, count: prev.count + 1 }));\n  };\n  return (\n    <div>\n      {state.count}\n      <button onClick={increment}>+1</button>\n    </div>\n  );\n};\n\nexport default Counter;\n\n"))),Object(c.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useSharedState } from './store';\n\nconst Counter: React.FC = () => {\n  const [state, setState] = useSharedState();\n  const increment = () => {\n    setState((prev) => ({ ...prev, count: prev.count + 1 }));\n  };\n  return (\n    <div>\n      {state.count}\n      <button onClick={increment}>+1</button>\n    </div>\n  );\n};\n\nexport default Counter;\n\n")))),Object(c.b)("p",null,"Create a new file ",Object(c.b)("inlineCode",{parentName:"p"},"./src/TextBox.js"),". (",Object(c.b)("inlineCode",{parentName:"p"},"./src/TextBox.tsx")," for TypeScript)"),Object(c.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(c.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\n\nimport { useSharedState } from './store';\n\nconst TextBox = () => {\n  const [state, setState] = useSharedState();\n  const setText = (text) => {\n    setState((prev) => ({ ...prev, text }));\n  };\n  return (\n    <div>\n      {state.text}\n      <input value={state.text} onChange={(e) => setText(e.target.value)} />\n    </div>\n  );\n};\n\nexport default TextBox;\n\n"))),Object(c.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\n\nimport { useSharedState } from './store';\n\nconst TextBox: React.FC = () => {\n  const [state, setState] = useSharedState();\n  const setText = (text: string) => {\n    setState((prev) => ({ ...prev, text }));\n  };\n  return (\n    <div>\n      {state.text}\n      <input value={state.text} onChange={(e) => setText(e.target.value)} />\n    </div>\n  );\n};\n\nexport default TextBox;\n\n")))),Object(c.b)("p",null,"Finally, modify the file ",Object(c.b)("inlineCode",{parentName:"p"},"./src/App.js"),". (",Object(c.b)("inlineCode",{parentName:"p"},"./src/App.tsx")," for TypeScript)"),Object(c.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(c.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport logo from './logo.svg';\nimport './App.css';\n\nimport { SharedStateProvider } from './store';\nimport Counter from './Counter';\nimport TextBox from './TextBox';\n\nconst App = () => (\n  <SharedStateProvider>\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <Counter />\n        <TextBox />\n        <img src={logo} className=\"App-logo\" alt=\"logo\" />\n      </header>\n    </div>\n  </SharedStateProvider>\n);\n\nexport default App;\n\n"))),Object(c.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import React from 'react';\nimport logo from './logo.svg';\nimport './App.css';\n\nimport { SharedStateProvider } from './store';\nimport Counter from './Counter';\nimport TextBox from './TextBox';\n\nconst App: React.FC = () => (\n  <SharedStateProvider>\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <Counter />\n        <TextBox />\n        <img src={logo} className=\"App-logo\" alt=\"logo\" />\n      </header>\n    </div>\n  </SharedStateProvider>\n);\n\nexport default App;\n\n")))),Object(c.b)("p",null,"Check the running app again and see how the counter and the text box work."),Object(c.b)("h2",{id:"performance-issue-with-pure-react"},"Performance issue with pure React"),Object(c.b)("p",null,"Our app works totally fine.\nBut if a shared state becomes very big,\nwe may experience a drop in performance.\nThis is because all components that use the shared state\nwill re-render even if only a small part of the shared state is changed."),Object(c.b)("p",null,"React Tracked solves this issue without efforts."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Note: In pure React, it's recommended to split context into pieces. Check out ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.axlight.com/posts/4-options-to-prevent-extra-rerenders-with-react-context/"}),"this")," or ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.basefactor.com/global-state-with-react"}),"that")," for more information.")),Object(c.b)("h2",{id:"install-react-tracked"},"Install React Tracked"),Object(c.b)("p",null,"It's time to try React Tracked.\nLet's install the library."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-tracked # Or yarn add react-tracked\n")),Object(c.b)("h2",{id:"use-react-tracked-instead-of-bare-context"},"Use React Tracked instead of bare context"),Object(c.b)("p",null,"It's very simple.\nModify the file ",Object(c.b)("inlineCode",{parentName:"p"},"./src/store.js"),". (",Object(c.b)("inlineCode",{parentName:"p"},"./src/store.tsx")," for TypeScript)"),Object(c.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(c.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { useState } from 'react';\nimport { createContainer } from 'react-tracked';\n\nconst initialState = {\n  count: 0,\n  text: 'hello',\n};\n\nconst useMyState = () => useState(initialState);\n\nexport const {\n  Provider: SharedStateProvider,\n  useTracked: useSharedState,\n} = createContainer(useMyState);\n\n"))),Object(c.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { useState } from 'react';\nimport { createContainer } from 'react-tracked';\n\nconst initialState = {\n  count: 0,\n  text: 'hello',\n};\n\nconst useMyState = () => useState(initialState);\n\nexport const {\n  Provider: SharedStateProvider,\n  useTracked: useSharedState,\n} = createContainer(useMyState);\n\n")))),Object(c.b)("p",null,"That's it. Check the running app and see it works as before."),Object(c.b)("p",null,"How can we see the difference?\nYou could add ",Object(c.b)("inlineCode",{parentName:"p"},"console.log")," in render (which is technically a side effect),\nor add ",Object(c.b)("inlineCode",{parentName:"p"},"{Math.random()}")," in JSX which is easier."),Object(c.b)("p",null,"For example, modify the Counter component like this."),Object(c.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"}],mdxType:"TabsUsedByRemarkPluginTs2Js"},Object(c.b)(s.a,{value:"js",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const Counter = () => {\n  const [state, setState] = useSharedState();\n  const increment = () => {\n    setState((prev) => ({ ...prev, count: prev.count + 1 }));\n  };\n  return (\n    <div>\n      {state.count}\n      <button onClick={increment}>+1</button>\n      {Math.random()}\n    </div>\n  );\n};\n\n"))),Object(c.b)(s.a,{value:"ts",mdxType:"TabItemUsedByRemarkPluginTs2Js"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const Counter: React.FC = () => {\n  const [state, setState] = useSharedState();\n  const increment = () => {\n    setState((prev) => ({ ...prev, count: prev.count + 1 }));\n  };\n  return (\n    <div>\n      {state.count}\n      <button onClick={increment}>+1</button>\n      {Math.random()}\n    </div>\n  );\n};\n\n")))),Object(c.b)("p",null,"With this, try both pure React version and React Tracked version."),Object(c.b)("p",null,"In the React Tracked version,\nthe random number only changes when clicking the increment button.\nIt won't change when typing in the text box."))}b.isMDXComponent=!0},90:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return n?r.a.createElement(m,s(s({ref:t},i),{},{components:n})):r.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<c;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";var a=n(0),r=n(94);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},94:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},95:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(93),o=n(90),s=n(54),l=n.n(s);const i=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:u,groupId:b,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:j}=Object(c.a)(),[v,f]=Object(a.useState)(s),h=a.Children.toArray(e.children);if(null!=b){const e=m[b];null!=e&&e!==v&&u.some((t=>t.value===e))&&f(e)}const O=e=>{f(e),null!=b&&j(b,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(a.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},96:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function({children:e,hidden:t,className:n}){return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);