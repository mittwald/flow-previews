import{g as T}from"./useFocusable-DdFCD-YN.js";import{r as l,R as m}from"./index-Cs7sjTYM.js";import{d as U,c as y,e as P,b as Q}from"./index-C8LjR2Bd.js";import{$ as k}from"./useLabel-D8UVq-XF.js";import{a as q,$ as Y}from"./utils-CgpzwoFP.js";import{$ as z}from"./Text-BgIWd_-0.js";function de(t,e,a){let{validationBehavior:i,focus:s}=t;U(()=>{if(i==="native"&&(a!=null&&a.current)){let o=e.realtimeValidation.isInvalid?e.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";a.current.setCustomValidity(o),a.current.hasAttribute("title")||(a.current.title=""),e.realtimeValidation.isInvalid||e.updateValidation(H(a.current))}});let r=y(()=>{e.resetValidation()}),n=y(o=>{var c;e.displayValidation.isInvalid||e.commitValidation();let f=a==null||(c=a.current)===null||c===void 0?void 0:c.form;if(!o.defaultPrevented&&a&&f&&J(f)===a.current){var u;s?s():(u=a.current)===null||u===void 0||u.focus(),T("keyboard")}o.preventDefault()}),d=y(()=>{e.commitValidation()});l.useEffect(()=>{let o=a==null?void 0:a.current;if(!o)return;let c=o.form;return o.addEventListener("invalid",n),o.addEventListener("change",d),c==null||c.addEventListener("reset",r),()=>{o.removeEventListener("invalid",n),o.removeEventListener("change",d),c==null||c.removeEventListener("reset",r)}},[a,n,d,r,i])}function G(t){let e=t.validity;return{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing,valid:e.valid}}function H(t){return{isInvalid:!t.validity.valid,validationDetails:G(t),validationErrors:t.validationMessage?[t.validationMessage]:[]}}function J(t){for(let e=0;e<t.elements.length;e++){let a=t.elements[e];if(!a.validity.valid)return a}return null}const M={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},L={...M,customError:!0,valid:!1},$={isInvalid:!1,validationDetails:M,validationErrors:[]},R=l.createContext({}),B="__formValidationState"+Date.now();function se(t){if(t[B]){let{realtimeValidation:e,displayValidation:a,updateValidation:i,resetValidation:s,commitValidation:r}=t[B];return{realtimeValidation:e,displayValidation:a,updateValidation:i,resetValidation:s,commitValidation:r}}return K(t)}function K(t){let{isInvalid:e,validationState:a,name:i,value:s,builtinValidation:r,validate:n,validationBehavior:d="aria"}=t;a&&(e||(e=a==="invalid"));let o=e!==void 0?{isInvalid:e,validationErrors:[],validationDetails:L}:null,c=l.useMemo(()=>D(W(n,s)),[n,s]);r!=null&&r.validationDetails.valid&&(r=null);let f=l.useContext(R),u=l.useMemo(()=>i?Array.isArray(i)?i.flatMap(v=>I(f[v])):I(f[i]):[],[f,i]),[F,j]=l.useState(f),[S,p]=l.useState(!1);f!==F&&(j(f),p(!1));let E=l.useMemo(()=>D(S?[]:u),[S,u]),C=l.useRef($),[V,g]=l.useState($),b=l.useRef($),N=()=>{if(!O)return;h(!1);let v=c||r||C.current;x(v,b.current)||(b.current=v,g(v))},[O,h]=l.useState(!1);return l.useEffect(N),{realtimeValidation:o||E||c||r||$,displayValidation:d==="native"?o||E||V:o||E||c||r||V,updateValidation(v){d==="aria"&&!x(V,v)?g(v):C.current=v},resetValidation(){let v=$;x(v,b.current)||(b.current=v,g(v)),d==="native"&&h(!1),p(!0)},commitValidation(){d==="native"&&h(!0),p(!0)}}}function I(t){return t?Array.isArray(t)?t:[t]:[]}function W(t,e){if(typeof t=="function"){let a=t(e);if(a&&typeof a!="boolean")return I(a)}return[]}function D(t){return t.length?{isInvalid:!0,validationErrors:t,validationDetails:L}:null}function x(t,e){return t===e?!0:t&&e&&t.isInvalid===e.isInvalid&&t.validationErrors.length===e.validationErrors.length&&t.validationErrors.every((a,i)=>a===e.validationErrors[i])&&Object.entries(t.validationDetails).every(([a,i])=>e.validationDetails[a]===i)}function ce(...t){let e=new Set,a=!1,i={...M};for(let n of t){var s,r;for(let d of n.validationErrors)e.add(d);a||(a=n.isInvalid);for(let d in i)(s=i)[r=d]||(s[r]=n.validationDetails[d])}return i.valid=!a,{isInvalid:a,validationErrors:[...e],validationDetails:i}}function ve(t){let{description:e,errorMessage:a,isInvalid:i,validationState:s}=t,{labelProps:r,fieldProps:n}=k(t),d=P([!!e,!!a,i,s]),o=P([!!e,!!a,i,s]);return n=Q(n,{"aria-describedby":[d,o,t["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:r,fieldProps:n,descriptionProps:{id:d},errorMessageProps:{id:o}}}const A=l.createContext(null);function X(t,e){let a=l.useContext(A);return a!=null&&a.isInvalid?m.createElement(Z,{...t,ref:e}):null}const fe=l.forwardRef(X),Z=l.forwardRef((t,e)=>{let a=l.useContext(A),i=q({...t,defaultClassName:"react-aria-FieldError",defaultChildren:a.validationErrors.length===0?void 0:a.validationErrors.join(" "),values:a});return i.children==null?null:m.createElement(z,{slot:"errorMessage",...i,ref:e})}),w=l.createContext(null);function _(t,e){[t,e]=Y(t,e,w);let{validationErrors:a,validationBehavior:i="native",children:s,className:r,...n}=t;return m.createElement("form",{noValidate:i!=="native",...n,ref:e,className:r||"react-aria-Form"},m.createElement(w.Provider,{value:{...t,validationBehavior:i}},m.createElement(R.Provider,{value:a??{}},s)))}const ue=l.forwardRef(_);export{se as $,ve as a,de as b,ue as c,fe as d,w as e,A as f,$ as g,B as h,ce as i,M as j};