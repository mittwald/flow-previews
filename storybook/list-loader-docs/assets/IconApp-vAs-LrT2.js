import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as t,R as p}from"./index-BZISi7jw.js";import{c as y}from"./clsx-B-dksMZM.js";import{f as b,C as E}from"./flowComponent-B-ghCXY_.js";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,o,n,r)=>{const s=t.forwardRef(({color:l="currentColor",size:a=24,stroke:m=2,title:i,className:u,children:d,...x},v)=>t.createElement("svg",{ref:v,...k[e],width:a,height:a,className:["tabler-icon",`tabler-icon-${o}`,u].join(" "),...e==="filled"?{fill:l}:{strokeWidth:m,stroke:l},...x},[i&&t.createElement("title",{key:"svg-title"},i),...r.map(([I,C])=>t.createElement(I,C)),...Array.isArray(d)?d:[d]]));return s.displayName=`${n}`,s};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var A=j("outline","app-window","IconAppWindow",[["path",{d:"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M6 8h.01",key:"svg-1"}],["path",{d:"M9 8h.01",key:"svg-2"}]]);const R="flow--icon",f={icon:R,"size-m":"flow--icon--size-m","size-s":"flow--icon--size-s","size-l":"flow--icon--size-l"};function z(e){return typeof e=="object"&&e!==null&&"element"in e&&"components"in e&&"receiver"in e}const h=(e,o)=>{const n=e.props;return z(n)&&Object.assign(n.element.properties,o),p.cloneElement(e,o)};h.__docgenInfo={description:"",methods:[],displayName:"cloneElement"};const w=b("Icon",e=>{const{className:o,"aria-label":n,children:r,size:s="m",ref:l,...a}=e,m={...a,focusable:"false",role:"img","aria-hidden":!n,"aria-label":n,className:y(f.icon,o,f[`size-${s}`])},i=p.Children.toArray(r)[0];if(!p.isValidElement(i))throw new Error(`Expected children of Icon component to be a valid React element (got ${String(r)})`);return c.jsx(E,{children:h(i,m)})});w.__docgenInfo={description:`@flr-generate all
@flr-clear-props-context`,methods:[],displayName:"Icon"};const N=t.createContext({}),g=e=>{const o=t.useContext(N).Icon??w;return c.jsx(o,{...e})};g.__docgenInfo={description:"",methods:[],displayName:"IconView"};const _=e=>c.jsx(g,{...e,children:c.jsx(A,{})});_.__docgenInfo={description:"",methods:[],displayName:"IconApp"};export{_ as I,w as a,g as b,j as c,N as v};
