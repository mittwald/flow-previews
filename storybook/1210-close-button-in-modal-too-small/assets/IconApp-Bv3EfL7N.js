import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as i,R as p}from"./index-BZISi7jw.js";import{f as y,C as b,v as E}from"./flowComponent-BYduNA4_.js";import{c as k}from"./clsx-B-dksMZM.js";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(e,o,n,s)=>{const r=i.forwardRef(({color:l="currentColor",size:a=24,stroke:m=2,title:t,className:u,children:d,...x},v)=>i.createElement("svg",{ref:v,...j[e],width:a,height:a,className:["tabler-icon",`tabler-icon-${o}`,u].join(" "),...e==="filled"?{fill:l}:{strokeWidth:m,stroke:l},...x},[t&&i.createElement("title",{key:"svg-title"},t),...s.map(([I,C])=>i.createElement(I,C)),...Array.isArray(d)?d:[d]]));return r.displayName=`${n}`,r};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var R=A("outline","app-window","IconAppWindow",[["path",{d:"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M6 8h.01",key:"svg-1"}],["path",{d:"M9 8h.01",key:"svg-2"}]]);function z(e){return typeof e=="object"&&e!==null&&"element"in e&&"components"in e&&"receiver"in e}const w=(e,o)=>{const n=e.props;return z(n)&&Object.assign(n.element.properties,o),p.cloneElement(e,o)};w.__docgenInfo={description:"",methods:[],displayName:"cloneElement"};const N="flow--icon",f={icon:N,"size-m":"flow--icon--size-m","size-s":"flow--icon--size-s","size-l":"flow--icon--size-l"},h=y("Icon",e=>{const{className:o,"aria-label":n,children:s,size:r="m",ref:l,...a}=e,m={...a,focusable:"false",role:"img","aria-hidden":!n,"aria-label":n,className:k(f.icon,o,f[`size-${r}`])},t=p.Children.toArray(s)[0];if(!p.isValidElement(t))throw new Error(`Expected children of Icon component to be a valid React element (got ${String(s)})`);return c.jsx(b,{children:w(t,m)})});h.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"Icon"};const g=e=>{const o=i.useContext(E).Icon??h;return c.jsx(o,{...e})};g.__docgenInfo={description:"",methods:[],displayName:"IconView"};const _=e=>c.jsx(g,{...e,children:c.jsx(R,{})});_.__docgenInfo={description:"",methods:[],displayName:"IconApp"};export{_ as I,h as a,g as b,A as c};
