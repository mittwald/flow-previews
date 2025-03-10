import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as s,R as w}from"./index-BZISi7jw.js";import{f as y,C as b,v as E}from"./flowComponent-BYduNA4_.js";import{c as k}from"./clsx-B-dksMZM.js";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(e,o,n,i)=>{const r=s.forwardRef(({color:t="currentColor",size:d=24,stroke:m=2,title:c,className:a,children:f,...x},v)=>s.createElement("svg",{ref:v,...j[e],width:d,height:d,className:["tabler-icon",`tabler-icon-${o}`,a].join(" "),...e==="filled"?{fill:t}:{strokeWidth:m,stroke:t},...x},[c&&s.createElement("title",{key:"svg-title"},c),...i.map(([I,C])=>s.createElement(I,C)),...Array.isArray(f)?f:[f]]));return r.displayName=`${n}`,r};/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var R=A("outline","app-window","IconAppWindow",[["path",{d:"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M6 8h.01",key:"svg-1"}],["path",{d:"M9 8h.01",key:"svg-2"}]]);function z(e){return typeof e=="object"&&e!==null&&"element"in e&&"components"in e&&"receiver"in e}const g=(e,o)=>{const n=e.props;return z(n)&&Object.assign(n.element.properties,o),w.cloneElement(e,o)};g.__docgenInfo={description:"",methods:[],displayName:"cloneElement"};const N="flow--icon",_="flow--icon--danger",V="flow--icon--success",P="flow--icon--warning",W="flow--icon--info",p={icon:N,"size-m":"flow--icon--size-m","size-s":"flow--icon--size-s","size-l":"flow--icon--size-l",danger:_,success:V,warning:P,info:W},h=y("Icon",e=>{const{className:o,"aria-label":n,children:i,size:r="m",status:t,ref:d,...m}=e,c={...m,focusable:"false",role:"img","aria-hidden":!n,"aria-label":n,className:k(p.icon,o,p[`size-${r}`],t&&p[t])},a=w.Children.toArray(i)[0];if(!w.isValidElement(a))throw new Error(`Expected children of Icon component to be a valid React element (got ${String(i)})`);return l.jsx(b,{children:g(a,c)})});h.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"Icon"};const u=e=>{const o=s.useContext(E).Icon??h;return l.jsx(o,{...e})};u.__docgenInfo={description:"",methods:[],displayName:"IconView"};const $=e=>l.jsx(u,{...e,children:l.jsx(R,{})});$.__docgenInfo={description:"",methods:[],displayName:"IconApp"};export{$ as I,h as a,u as b,A as c};
