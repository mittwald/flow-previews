import{j as d}from"./jsx-runtime-CLpGMVip.js";import{r as n,R as p}from"./index-Cf9XvIV_.js";import{c as I}from"./clsx-B-dksMZM.js";import{C as E}from"./PropsContextProvider-CWFvCxZj.js";import{f as b}from"./flowComponent-CGvK_9lq.js";/**
 * @license @tabler/icons-react v3.28.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.28.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(e,o,t,r)=>{const s=n.forwardRef(({color:a="currentColor",size:c=24,stroke:l=2,title:i,className:u,children:m,...g},x)=>n.createElement("svg",{ref:x,...y[e],width:c,height:c,className:["tabler-icon",`tabler-icon-${o}`,u].join(" "),...e==="filled"?{fill:a}:{strokeWidth:l,stroke:a},...g},[i&&n.createElement("title",{key:"svg-title"},i),...r.map(([v,C])=>n.createElement(v,C)),...Array.isArray(m)?m:[m]]));return s.displayName=`${t}`,s};/**
 * @license @tabler/icons-react v3.28.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var j=k("outline","app-window","IconAppWindow",[["path",{d:"M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M6 8h.01",key:"svg-1"}],["path",{d:"M9 8h.01",key:"svg-2"}]]);const A="flow--icon",f={icon:A,"size-m":"flow--icon--size-m","size-s":"flow--icon--size-s","size-l":"flow--icon--size-l"};function R(e){return typeof e=="object"&&e!==null&&"element"in e&&"components"in e&&"receiver"in e}const w=(e,o)=>{const t=e.props;return R(t)&&Object.assign(t.element.properties,o),p.cloneElement(e,o)};w.__docgenInfo={description:"",methods:[],displayName:"cloneElement"};const h=b("Icon",e=>{const{className:o,"aria-label":t,children:r,size:s="m",ref:a,...c}=e,l={...c,focusable:"false",role:"img","aria-hidden":!t,"aria-label":t,className:I(f.icon,o,f[`size-${s}`])},i=p.Children.toArray(r)[0];if(!p.isValidElement(i))throw new Error(`Expected children of Icon component to be a valid React element (got ${String(r)})`);return d.jsx(E,{children:w(i,l)})});h.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"Icon"};const z=n.createContext({}),N=(...e)=>{const o=n.useContext(z);return n.useMemo(()=>Object.fromEntries(e.map(([t,r])=>[`${t}View`,o[t]??r])),[])},_=e=>{const{IconView:o}=N(["Icon",h]);return d.jsx(o,{...e,children:d.jsx(j,{})})};_.__docgenInfo={description:"",methods:[],displayName:"IconApp"};export{_ as I,h as a,k as c,N as u};
