import{r as o,R as i}from"./index-Cs7sjTYM.js";import{f,F as N}from"./FormField.module-B7Y9Ou2L.js";import{c as B}from"./clsx-B-dksMZM.js";import{C as D,P as H}from"./PropsContextProvider-DXo7lD_U.js";import{F as g}from"./FieldDescription-Bil-IRp6.js";import{$ as y}from"./useLocalizedStringFormatter-TZkCr3Qr.js";import{$ as P,a as R,e as I,d as O,f as q,g as M}from"./utils-Cd8r7pc9.js";import{e as S,f as _}from"./Form-CDVAwZBo.js";import{a as w}from"./Input-zQ88cEWx.js";import{a as A}from"./Label-C-iBdzH7.js";import{a as V,b as L}from"./useFocusRing-DdBFev_0.js";import{a as k}from"./index-j_f0pOtZ.js";import{a as Z}from"./Text-Bnjm0IRl.js";import{$ as j}from"./filterDOMProps-CeZl_uWj.js";import{$ as z}from"./useTextField-BFt9_4PS.js";const T=o.createContext({});let G=e=>{let{onHoverStart:a,onHoverChange:s,onHoverEnd:r,...t}=e;return t};function J(e,a){[e,a]=P(e,a,T);let{hoverProps:s,isHovered:r}=V(e),{isFocused:t,isFocusVisible:d,focusProps:n}=L({isTextInput:!0,autoFocus:e.autoFocus}),l=!!e["aria-invalid"]&&e["aria-invalid"]!=="false",$=R({...e,values:{isHovered:r,isFocused:t,isFocusVisible:d,isDisabled:e.disabled||!1,isInvalid:l},defaultClassName:"react-aria-TextArea"});return i.createElement("textarea",{...k(G(e),n,s),...$,ref:a,"data-focused":t||void 0,"data-disabled":e.disabled||void 0,"data-hovered":r||void 0,"data-focus-visible":d||void 0,"data-invalid":l||void 0})}const me=o.forwardRef(J),K=o.createContext(null);function Q(e,a){[e,a]=P(e,a,K);let{validationBehavior:s}=I(S)||{};var r,t;let d=(t=(r=e.validationBehavior)!==null&&r!==void 0?r:s)!==null&&t!==void 0?t:"native",n=o.useRef(null),[l,$]=O(),[b,x]=o.useState("input"),{labelProps:v,inputProps:u,descriptionProps:p,errorMessageProps:m,...c}=z({...q(e),inputElementType:b,label:$,validationBehavior:d},n),C=o.useCallback(h=>{n.current=h,h&&x(h instanceof HTMLTextAreaElement?"textarea":"input")},[]),F=R({...e,values:{isDisabled:e.isDisabled||!1,isInvalid:c.isInvalid,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1},defaultClassName:"react-aria-TextField"}),E=j(e);return delete E.id,i.createElement("div",{...E,...F,ref:a,slot:e.slot||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":c.isInvalid||void 0,"data-readonly":e.isReadOnly||void 0,"data-required":e.isRequired||void 0},i.createElement(M,{values:[[A,{...v,ref:l}],[w,{...u,ref:C}],[T,{...u,ref:C}],[Z,{slots:{description:p,errorMessage:m}}],[_,c]]},F.children))}const U=o.forwardRef(Q),W={"de-DE":{"textFieldBase.characters":(e,a)=>`${a.select({0:()=>`${e.count}`,other:()=>`${e.count}/${e.maxCount}`},e.maxCount)} Zeichen`},"en-EN":{"textFieldBase.characters":(e,a)=>`${a.select({0:()=>`${e.count}`,other:()=>`${e.count}/${e.maxCount}`},e.maxCount)} characters`}},X=o.forwardRef((e,a)=>{var m;const{children:s,className:r,input:t,showCharacterCount:d,...n}=e,[l,$]=o.useState(((m=e.value)==null?void 0:m.length)??0),b=B(f.formField,r),x=y(W),v={Label:{className:f.label,optional:!e.isRequired},FieldDescription:{className:f.fieldDescription},FieldError:{className:f.customFieldError}},u=c=>{d&&$(c.length),e.onChange&&e.onChange(c)},p=x.format("textFieldBase.characters",{count:l,maxCount:e.maxLength??0});return i.createElement(D,null,i.createElement(U,{...n,className:b,onChange:u},t,i.createElement(H,{props:v},s),d&&i.createElement(g,{className:f.fieldDescription},p),i.createElement(N,{className:f.fieldError})))});X.__docgenInfo={description:"",methods:[],displayName:"TextFieldBase"};export{me as $,X as T};