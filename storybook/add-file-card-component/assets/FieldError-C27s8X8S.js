import{r as i,R as D}from"./index-Cs7sjTYM.js";import{a as O}from"./utils-Cd8r7pc9.js";import{$ as j}from"./Text-Bnjm0IRl.js";import{$ as B}from"./filterDOMProps-CeZl_uWj.js";const I={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},A={...I,customError:!0,valid:!1},f={isInvalid:!1,validationDetails:I,validationErrors:[]},P=i.createContext({}),C="__formValidationState"+Date.now();function J(e){if(e[C]){let{realtimeValidation:t,displayValidation:a,updateValidation:r,resetValidation:o,commitValidation:n}=e[C];return{realtimeValidation:t,displayValidation:a,updateValidation:r,resetValidation:o,commitValidation:n}}return Q(e)}function Q(e){let{isInvalid:t,validationState:a,name:r,value:o,builtinValidation:n,validate:s,validationBehavior:d="aria"}=e;a&&(t||(t=a==="invalid"));let v=t!==void 0?{isInvalid:t,validationErrors:[],validationDetails:A}:null,$=i.useMemo(()=>M(U(s,o)),[s,o]);n!=null&&n.validationDetails.valid&&(n=null);let c=i.useContext(P),S=i.useMemo(()=>r?Array.isArray(r)?r.flatMap(l=>y(c[l])):y(c[r]):[],[c,r]),[w,F]=i.useState(c),[g,m]=i.useState(!1);c!==w&&(F(c),m(!1));let b=i.useMemo(()=>M(g?[]:S),[g,S]),h=i.useRef(f),[V,E]=i.useState(f),u=i.useRef(f),T=()=>{if(!L)return;p(!1);let l=$||n||h.current;x(l,u.current)||(u.current=l,E(l))},[L,p]=i.useState(!1);return i.useEffect(T),{realtimeValidation:v||b||$||n||f,displayValidation:d==="native"?v||b||V:v||b||$||n||V,updateValidation(l){d==="aria"&&!x(V,l)?E(l):h.current=l},resetValidation(){let l=f;x(l,u.current)||(u.current=l,E(l)),d==="native"&&p(!1),m(!0)},commitValidation(){d==="native"&&p(!0),m(!0)}}}function y(e){return e?Array.isArray(e)?e:[e]:[]}function U(e,t){if(typeof e=="function"){let a=e(t);if(a&&typeof a!="boolean")return y(a)}return[]}function M(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:A}:null}function x(e,t){return e===t?!0:e&&t&&e.isInvalid===t.isInvalid&&e.validationErrors.length===t.validationErrors.length&&e.validationErrors.every((a,r)=>a===t.validationErrors[r])&&Object.entries(e.validationDetails).every(([a,r])=>t.validationDetails[a]===r)}function K(...e){let t=new Set,a=!1,r={...I};for(let s of e){var o,n;for(let d of s.validationErrors)t.add(d);a||(a=s.isInvalid);for(let d in r)(o=r)[n=d]||(o[n]=s.validationDetails[d])}return r.valid=!a,{isInvalid:a,validationErrors:[...t],validationDetails:r}}const R=i.createContext(null);function _(e,t){let a=i.useContext(R);return a!=null&&a.isInvalid?D.createElement(q,{...e,ref:t}):null}const W=i.forwardRef(_),q=i.forwardRef((e,t)=>{let a=i.useContext(R),r=B(e),o=O({...e,defaultClassName:"react-aria-FieldError",defaultChildren:a.validationErrors.length===0?void 0:a.validationErrors.join(" "),values:a});return o.children==null?null:D.createElement(j,{slot:"errorMessage",...r,...o,ref:t})});export{J as $,P as a,W as b,R as c,f as d,C as e,K as f,I as g};