import{r as x,R as s}from"./index-Cs7sjTYM.js";import{c as E}from"./clsx-B-dksMZM.js";import"./IconApp-CapvFhgG.js";import{v as S,l as D}from"./IconWarning-DsWtTa-k.js";import{L as C}from"./Label-C5nBjuTr.js";import{C as N}from"./PropsContextProvider-DXo7lD_U.js";import{f as O}from"./flowComponent-Bg40pdZw.js";import{$ as F,c as k,b as g,f as I,a as H}from"./utils-Cd8r7pc9.js";import{a as w}from"./index-j_f0pOtZ.js";import{$ as V}from"./filterDOMProps-CeZl_uWj.js";import{$ as z,a as L}from"./useToggleState-BlySn88k.js";import{b as _,a as M}from"./useFocusRing-DdBFev_0.js";import{$ as T}from"./VisuallyHidden-BVqa5uLw.js";function j(e,t,i){let{labelProps:d,inputProps:l,isSelected:a,isPressed:r,isDisabled:c,isReadOnly:n}=z(e,t,i);return{labelProps:d,inputProps:{...l,role:"switch",checked:a},isSelected:a,isPressed:r,isDisabled:c,isReadOnly:n}}const q=x.createContext(null);function A(e,t){let{inputRef:i=null,...d}=e;[e,t]=F(d,t,q);let l=k(g(i,e.inputRef!==void 0?e.inputRef:null)),a=L(e),{labelProps:r,inputProps:c,isSelected:n,isDisabled:f,isReadOnly:$,isPressed:b}=j({...I(e),children:typeof e.children=="function"?!0:e.children},a,l),{isFocused:m,isFocusVisible:u,focusProps:R}=_(),v=e.isDisabled||e.isReadOnly,{hoverProps:y,isHovered:p}=M({...e,isDisabled:v}),h=H({...e,defaultClassName:"react-aria-Switch",values:{isSelected:n,isPressed:b,isHovered:p,isFocused:m,isFocusVisible:u,isDisabled:f,isReadOnly:$,state:a}}),P=V(e);return delete P.id,s.createElement("label",{...w(P,r,y,h),ref:t,slot:e.slot||void 0,"data-selected":n||void 0,"data-pressed":b||void 0,"data-hovered":p||void 0,"data-focused":m||void 0,"data-focus-visible":u||void 0,"data-disabled":f||void 0,"data-readonly":$||void 0},s.createElement(T,{elementType:"span"},s.createElement("input",{...w(c,R),ref:l})),h.children)}const B=x.forwardRef(A),G="flow--switch--track",J="flow--switch--handle",K="flow--switch--label",o={switch:"flow--switch","label-leading":"flow--switch--label-leading",track:G,handle:J,label:K},Q=O("Switch",e=>{const{children:t,className:i,labelPosition:d="trailing",refProp:l,...a}=e,r=E(o.switch,o[`label-${d}`],i);return s.createElement(N,null,s.createElement(B,{...a,className:r,ref:l},({isSelected:c})=>s.createElement(s.Fragment,null,s.createElement("div",{className:o.track},s.createElement("div",{className:o.handle},c?s.createElement(S,{size:"s"}):s.createElement(D,{size:"s"}))),t&&s.createElement(C,{className:o.label},t))))});Q.__docgenInfo={description:"",methods:[],displayName:"Switch"};export{Q as S};