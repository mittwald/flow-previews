import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as t,R as w}from"./index-BZISi7jw.js";import{c as y}from"./clsx-B-dksMZM.js";import{f as b,C as E}from"./flowComponent-QaLaNUaQ.js";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,o,n,i)=>{const r=t.forwardRef(({color:s="currentColor",size:d=24,stroke:m=2,title:c,className:a,children:p,...x},v)=>t.createElement("svg",{ref:v,...k[e],width:d,height:d,className:["tabler-icon",`tabler-icon-${o}`,a].join(" "),...e==="filled"?{fill:s}:{strokeWidth:m,stroke:s},...x},[c&&t.createElement("title",{key:"svg-title"},c),...i.map(([I,C])=>t.createElement(I,C)),...Array.isArray(p)?p:[p]]));return r.displayName=`${n}`,r};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var A=j("outline","app-window","IconAppWindow",[["path",{d:"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M6 8h.01",key:"svg-1"}],["path",{d:"M9 8h.01",key:"svg-2"}]]);const R="flow--icon",z="flow--icon--danger",N="flow--icon--success",_="flow--icon--warning",P="flow--icon--info",f={icon:R,"size-m":"flow--icon--size-m","size-s":"flow--icon--size-s","size-l":"flow--icon--size-l",danger:z,success:N,warning:_,info:P};function V(e){return typeof e=="object"&&e!==null&&"element"in e&&"components"in e&&"receiver"in e}const g=(e,o)=>{const n=e.props;return V(n)&&Object.assign(n.element.properties,o),w.cloneElement(e,o)};g.__docgenInfo={description:"",methods:[],displayName:"cloneElement"};const h=b("Icon",e=>{const{className:o,"aria-label":n,children:i,size:r="m",status:s,ref:d,...m}=e,c={...m,focusable:"false",role:"img","aria-hidden":!n,"aria-label":n,className:y(f.icon,o,f[`size-${r}`],s&&f[s])},a=w.Children.toArray(i)[0];if(!w.isValidElement(a))throw new Error(`Expected children of Icon component to be a valid React element (got ${String(i)})`);return l.jsx(E,{children:g(a,c)})});h.__docgenInfo={description:`@flr-generate all
@flr-clear-props-context`,methods:[],displayName:"Icon"};const W=t.createContext({}),u=e=>{const o=t.useContext(W).Icon??h;return l.jsx(o,{...e})};u.__docgenInfo={description:"",methods:[],displayName:"IconView"};const $=e=>l.jsx(u,{...e,children:l.jsx(A,{})});$.__docgenInfo={description:"",methods:[],displayName:"IconApp"};export{$ as I,h as a,u as b,j as c,W as v};
