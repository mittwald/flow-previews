import{r,R as L}from"./index-B-o1Wr-g.js";import{h as T}from"./useFocusRing-CTDVvBmm.js";import{c as U,b as h}from"./index-ynQ6n1pc.js";import{a as j}from"./utils-CCebJm36.js";import{$ as P}from"./Text-CByKVUtS.js";import{$ as N}from"./filterDOMProps-CeZl_uWj.js";const x={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},w={...x,customError:!0,valid:!1},$={isInvalid:!1,validationDetails:x,validationErrors:[]},Q=r.createContext({}),C="__formValidationState"+Date.now();function ie(t){if(t[C]){let{realtimeValidation:e,displayValidation:a,updateValidation:i,resetValidation:d,commitValidation:l}=t[C];return{realtimeValidation:e,displayValidation:a,updateValidation:i,resetValidation:d,commitValidation:l}}return k(t)}function k(t){let{isInvalid:e,validationState:a,name:i,value:d,builtinValidation:l,validate:c,validationBehavior:v="aria"}=t;a&&(e||(e=a==="invalid"));let n=e!==void 0?{isInvalid:e,validationErrors:[],validationDetails:w}:null,s=r.useMemo(()=>{if(!c||d==null)return null;let o=q(c,d);return D(o)},[c,d]);l!=null&&l.validationDetails.valid&&(l=void 0);let u=r.useContext(Q),f=r.useMemo(()=>i?Array.isArray(i)?i.flatMap(o=>I(u[o])):I(u[i]):[],[u,i]),[R,F]=r.useState(u),[M,b]=r.useState(!1);u!==R&&(F(u),b(!1));let p=r.useMemo(()=>D(M?[]:f),[M,f]),S=r.useRef($),[V,E]=r.useState($),m=r.useRef($),O=()=>{if(!B)return;g(!1);let o=s||l||S.current;y(o,m.current)||(m.current=o,E(o))},[B,g]=r.useState(!1);return r.useEffect(O),{realtimeValidation:n||p||s||l||$,displayValidation:v==="native"?n||p||V:n||p||s||l||V,updateValidation(o){v==="aria"&&!y(V,o)?E(o):S.current=o},resetValidation(){let o=$;y(o,m.current)||(m.current=o,E(o)),v==="native"&&g(!1),b(!0)},commitValidation(){v==="native"&&g(!0),b(!0)}}}function I(t){return t?Array.isArray(t)?t:[t]:[]}function q(t,e){if(typeof t=="function"){let a=t(e);if(a&&typeof a!="boolean")return I(a)}return[]}function D(t){return t.length?{isInvalid:!0,validationErrors:t,validationDetails:w}:null}function y(t,e){return t===e?!0:!!t&&!!e&&t.isInvalid===e.isInvalid&&t.validationErrors.length===e.validationErrors.length&&t.validationErrors.every((a,i)=>a===e.validationErrors[i])&&Object.entries(t.validationDetails).every(([a,i])=>e.validationDetails[a]===i)}function re(...t){let e=new Set,a=!1,i={...x};for(let c of t){var d,l;for(let v of c.validationErrors)e.add(v);a||(a=c.isInvalid);for(let v in i)(d=i)[l=v]||(d[l]=c.validationDetails[v])}return i.valid=!a,{isInvalid:a,validationErrors:[...e],validationDetails:i}}function le(t,e,a){let{validationBehavior:i,focus:d}=t;U(()=>{if(i==="native"&&(a!=null&&a.current)){let n=e.realtimeValidation.isInvalid?e.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";a.current.setCustomValidity(n),a.current.hasAttribute("title")||(a.current.title=""),e.realtimeValidation.isInvalid||e.updateValidation(z(a.current))}});let l=h(()=>{e.resetValidation()}),c=h(n=>{var s;e.displayValidation.isInvalid||e.commitValidation();let u=a==null||(s=a.current)===null||s===void 0?void 0:s.form;if(!n.defaultPrevented&&a&&u&&G(u)===a.current){var f;d?d():(f=a.current)===null||f===void 0||f.focus(),T("keyboard")}n.preventDefault()}),v=h(()=>{e.commitValidation()});r.useEffect(()=>{let n=a==null?void 0:a.current;if(!n)return;let s=n.form;return n.addEventListener("invalid",c),n.addEventListener("change",v),s==null||s.addEventListener("reset",l),()=>{n.removeEventListener("invalid",c),n.removeEventListener("change",v),s==null||s.removeEventListener("reset",l)}},[a,c,v,l,i])}function Y(t){let e=t.validity;return{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing,valid:e.valid}}function z(t){return{isInvalid:!t.validity.valid,validationDetails:Y(t),validationErrors:t.validationMessage?[t.validationMessage]:[]}}function G(t){for(let e=0;e<t.elements.length;e++){let a=t.elements[e];if(!a.validity.valid)return a}return null}const A=r.createContext(null);function H(t,e){let a=r.useContext(A);return a!=null&&a.isInvalid?L.createElement(J,{...t,ref:e}):null}const ne=r.forwardRef(H),J=r.forwardRef((t,e)=>{let a=r.useContext(A),i=N(t),d=j({...t,defaultClassName:"react-aria-FieldError",defaultChildren:a.validationErrors.length===0?void 0:a.validationErrors.join(" "),values:a});return d.children==null?null:L.createElement(P,{slot:"errorMessage",...i,...d,ref:e})});export{ie as $,le as a,Q as b,ne as c,A as d,C as e,$ as f,re as g,x as h};