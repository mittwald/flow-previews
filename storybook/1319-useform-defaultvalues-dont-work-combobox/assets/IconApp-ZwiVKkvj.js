import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as s,R as w}from"./index-CtQTiInQ.js";import{c as y}from"./clsx-B-dksMZM.js";import{f as b,C as E,v as k}from"./PropsContextProvider-CcavWj25.js";/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(e,o,n,i)=>{const r=s.forwardRef(({color:t="currentColor",size:d=24,stroke:m=2,title:c,className:a,children:p,...x},v)=>s.createElement("svg",{ref:v,...j[e],width:d,height:d,className:["tabler-icon",`tabler-icon-${o}`,a].join(" "),...e==="filled"?{fill:t}:{strokeWidth:m,stroke:t},...x},[c&&s.createElement("title",{key:"svg-title"},c),...i.map(([I,C])=>s.createElement(I,C)),...Array.isArray(p)?p:[p]]));return r.displayName=`${n}`,r};/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var R=A("outline","app-window","IconAppWindow",[["path",{d:"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M6 8h.01",key:"svg-1"}],["path",{d:"M9 8h.01",key:"svg-2"}]]);const z="flow--icon",N="flow--icon--danger",_="flow--icon--success",P="flow--icon--warning",V="flow--icon--info",f={icon:z,"size-m":"flow--icon--size-m","size-s":"flow--icon--size-s","size-l":"flow--icon--size-l",danger:N,success:_,warning:P,info:V};function W(e){return typeof e=="object"&&e!==null&&"element"in e&&"components"in e&&"receiver"in e}const g=(e,o)=>{const n=e.props;return W(n)&&Object.assign(n.element.properties,o),w.cloneElement(e,o)};g.__docgenInfo={description:"",methods:[],displayName:"cloneElement"};const h=b("Icon",e=>{const{className:o,"aria-label":n,children:i,size:r="m",status:t,ref:d,...m}=e,c={...m,focusable:"false",role:"img","aria-hidden":!n,"aria-label":n,className:y(f.icon,o,f[`size-${r}`],t&&f[t])},a=w.Children.toArray(i)[0];if(!w.isValidElement(a))throw new Error(`Expected children of Icon component to be a valid React element (got ${String(i)})`);return l.jsx(E,{children:g(a,c)})});h.__docgenInfo={description:`@flr-generate all
@flr-clear-props-context`,methods:[],displayName:"Icon"};const u=e=>{const o=s.useContext(k).Icon??h;return l.jsx(o,{...e})};u.__docgenInfo={description:"",methods:[],displayName:"IconView"};const $=e=>l.jsx(u,{...e,children:l.jsx(R,{})});$.__docgenInfo={description:"",methods:[],displayName:"IconApp"};export{$ as I,h as a,u as b,A as c};
