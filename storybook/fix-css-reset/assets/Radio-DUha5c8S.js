import{r as x,R as r}from"./index-uCp2LrAq.js";import{c as k}from"./clsx-B-dksMZM.js";import{C as q,P as S,m as K}from"./PropsContextProvider-RdMO5ekw.js";import{d as j}from"./dynamic-DKDa4OpU.js";import{f as C,F as U}from"./FormField.module-DtTAfK2u.js";import{C as z}from"./ColumnLayout-B78AueES.js";import{f as M,M as J,P as V}from"./flowComponent-dvxR-0IS.js";import{d as Q}from"./deepFindOfType-CMLjW25q.js";import"./IconApp-CqdsO7mM.js";import{f as X,C as Y,D as Z}from"./IconWarning-BSZUxli_.js";import{a as _,c as ee,d as ae,b as L,f as ie,g as re,h as oe,e as te}from"./utils-DZgOXw50.js";import{c as de,b as le,a as se,e as ne,f as ce}from"./Form-BOwpWbru.js";import{a as fe}from"./Label-BQk6lJ-q.js";import{a as ue}from"./Text-D6Zjnbf0.js";import{b as h,a as me}from"./index-CFQDndEx.js";import{$ as G}from"./filterDOMProps-CeZl_uWj.js";import{$ as be}from"./useControlledState-B8AA3oOY.js";import{$ as pe}from"./FocusScope-Bpk85l6Y.js";import{a as $e,$ as ve,b as Pe,c as ge}from"./useFocusable-DpEA8Hsr.js";import{$ as he}from"./useLocalizedStringFormatter-CHReNXSI.js";import{$ as xe}from"./useFormReset-Bt7ImmB-.js";import{$ as O}from"./usePress-CaJD4Kpr.js";import{$ as Re}from"./VisuallyHidden-DWE0U9Im.js";const T=new WeakMap;function ye(e,a,d){let{value:i,children:t,"aria-label":s,"aria-labelledby":o}=e;const l=e.isDisabled||a.isDisabled;let f=t!=null,c=s!=null||o!=null;!f&&!c&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let n=a.selectedValue===i,m=F=>{F.stopPropagation(),a.setSelectedValue(i)},{pressProps:p,isPressed:g}=O({isDisabled:l}),{pressProps:v,isPressed:R}=O({isDisabled:l,onPress(){a.setSelectedValue(i)}}),{focusableProps:y}=$e(h(e,{onFocus:()=>a.setLastFocusedValue(i)}),d),E=h(p,y),I=G(e,{labelable:!0}),D=-1;a.selectedValue!=null?a.selectedValue===i&&(D=0):(a.lastFocusedValue===i||a.lastFocusedValue==null)&&(D=0),l&&(D=void 0);let{name:$,descriptionId:u,errorMessageId:P,validationBehavior:b}=T.get(a);return xe(d,a.selectedValue,a.setSelectedValue),de({validationBehavior:b},a,d),{labelProps:h(v,{onClick:F=>F.preventDefault()}),inputProps:h(I,{...E,type:"radio",name:$,tabIndex:D,disabled:l,required:a.isRequired&&b==="native",checked:n,value:i,onChange:m,"aria-describedby":[e["aria-describedby"],a.isInvalid?P:null,u].filter(Boolean).join(" ")||void 0}),isDisabled:l,isSelected:n,isPressed:g||R}}function Ee(e,a){let{name:d,isReadOnly:i,isRequired:t,isDisabled:s,orientation:o="vertical",validationBehavior:l="aria"}=e,{direction:f}=he(),{isInvalid:c,validationErrors:n,validationDetails:m}=a.displayValidation,{labelProps:p,fieldProps:g,descriptionProps:v,errorMessageProps:R}=le({...e,labelElementType:"span",isInvalid:a.isInvalid,errorMessage:e.errorMessage||n}),y=G(e,{labelable:!0}),{focusWithinProps:E}=ve({onBlurWithin($){var u;(u=e.onBlur)===null||u===void 0||u.call(e,$),a.selectedValue||a.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),I=$=>{let u;switch($.key){case"ArrowRight":f==="rtl"&&o!=="vertical"?u="prev":u="next";break;case"ArrowLeft":f==="rtl"&&o!=="vertical"?u="next":u="prev";break;case"ArrowDown":u="next";break;case"ArrowUp":u="prev";break;default:return}$.preventDefault();let P=pe($.currentTarget,{from:$.target}),b;u==="next"?(b=P.nextNode(),b||(P.currentNode=$.currentTarget,b=P.firstChild())):(b=P.previousNode(),b||(P.currentNode=$.currentTarget,b=P.lastChild())),b&&(b.focus(),a.setSelectedValue(b.value))},D=me(d);return T.set(a,{name:D,descriptionId:v.id,errorMessageId:R.id,validationBehavior:l}),{radioGroupProps:h(y,{role:"radiogroup",onKeyDown:I,"aria-invalid":a.isInvalid||void 0,"aria-errormessage":e["aria-errormessage"],"aria-readonly":i||void 0,"aria-required":t||void 0,"aria-disabled":s||void 0,"aria-orientation":o,...g,...E}),labelProps:p,descriptionProps:v,errorMessageProps:R,isInvalid:c,validationErrors:n,validationDetails:m}}let Ie=Math.round(Math.random()*1e10),De=0;function Ne(e){let a=x.useMemo(()=>e.name||`radio-group-${Ie}-${++De}`,[e.name]);var d;let[i,t]=be(e.value,(d=e.defaultValue)!==null&&d!==void 0?d:null,e.onChange),[s,o]=x.useState(null),l=se({...e,value:i}),f=n=>{!e.isReadOnly&&!e.isDisabled&&(t(n),l.commitValidation())},c=l.displayValidation.isInvalid;return{...l,name:a,selectedValue:i,setSelectedValue:f,lastFocusedValue:s,setLastFocusedValue:o,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(c?"invalid":null),isInvalid:c}}const Ce=x.createContext(null),Ve=x.createContext(null),W=x.createContext(null);function Fe(e,a){[e,a]=_(e,a,Ce);let{validationBehavior:d}=ee(ne)||{};var i,t;let s=(t=(i=e.validationBehavior)!==null&&i!==void 0?i:d)!==null&&t!==void 0?t:"native",o=Ne({...e,validationBehavior:s}),[l,f]=ae(),{radioGroupProps:c,labelProps:n,descriptionProps:m,errorMessageProps:p,...g}=Ee({...e,label:f,validationBehavior:s},o),v=L({...e,values:{orientation:e.orientation||"vertical",isDisabled:o.isDisabled,isReadOnly:o.isReadOnly,isRequired:o.isRequired,isInvalid:o.isInvalid,state:o},defaultClassName:"react-aria-RadioGroup"});return r.createElement("div",{...c,...v,ref:a,slot:e.slot||void 0,"data-orientation":e.orientation||"vertical","data-invalid":o.isInvalid||void 0,"data-disabled":o.isDisabled||void 0,"data-readonly":o.isReadOnly||void 0,"data-required":o.isRequired||void 0},r.createElement(ie,{values:[[W,o],[fe,{...n,ref:l,elementType:"span"}],[ue,{slots:{description:m,errorMessage:p}}],[ce,g]]},v.children))}function Be(e,a){let{inputRef:d=null,...i}=e;[e,a]=_(i,a,Ve);let t=r.useContext(W),s=re(oe(d,e.inputRef!==void 0?e.inputRef:null)),{labelProps:o,inputProps:l,isSelected:f,isDisabled:c,isPressed:n}=ye({...te(e),children:typeof e.children=="function"?!0:e.children},t,s),{isFocused:m,isFocusVisible:p,focusProps:g}=Pe(),v=c||t.isReadOnly,{hoverProps:R,isHovered:y}=ge({...e,isDisabled:v}),E=L({...e,defaultClassName:"react-aria-Radio",values:{isSelected:f,isPressed:n,isHovered:y,isFocused:m,isFocusVisible:p,isDisabled:c,isReadOnly:t.isReadOnly,isInvalid:t.isInvalid,isRequired:t.isRequired}}),I=G(e);return delete I.id,r.createElement("label",{...h(I,o,R,E),ref:a,"data-selected":f||void 0,"data-pressed":n||void 0,"data-hovered":y||void 0,"data-focused":m||void 0,"data-focus-visible":p||void 0,"data-disabled":c||void 0,"data-readonly":t.isReadOnly||void 0,"data-invalid":t.isInvalid||void 0,"data-required":t.isRequired||void 0},r.createElement(Re,{elementType:"span"},r.createElement("input",{...h(l,g),ref:s})),E.children)}const we=x.forwardRef(Fe),ke=x.forwardRef(Be),Me="flow--radio-group",Ge="flow--radio-group--segmented-group",Oe="flow--radio-group--segments",qe="flow--radio-group--segment",Se="flow--radio-group--checkmark",N={radioGroup:Me,segmentedGroup:Ge,segments:Oe,segment:qe,checkmark:Se},_e="flow--radio-group--radio-button",Le="flow--radio-group--radio-button--content",Te="flow--radio-group--radio-button--label",B={radioButton:_e,content:Le,label:Te},A=M("RadioButton",e=>{const{children:a,className:d,refProp:i,...t}=e,s=k(B.radioButton,d),o={Text:{className:B.label},Content:{className:B.content}};return r.createElement(q,null,r.createElement(H,{...t,className:s,ref:i},r.createElement(S,{props:o},a)))});A.__docgenInfo={description:"",methods:[],displayName:"RadioButton"};const We=M("RadioGroup",e=>{const{children:a,className:d,variant:i="default",s:t,m:s,l:o,refProp:l,...f}=e,c=k(C.formField,d);let n={Label:{className:C.label},FieldDescription:{className:C.fieldDescription,tunnelId:"fieldDescription"},FieldError:{className:C.customFieldError,tunnelId:"fieldError"},RadioButton:{tunnelId:"radios"},Radio:{tunnelId:"radios"}};i==="segmented"&&(n=K(n,{Radio:{className:N.segment,unstyled:!0,children:j(p=>r.createElement(r.Fragment,null,p.children,r.createElement(X,{className:N.checkmark})))}}));const m=!!Q(a,A);return i==="segmented"&&m&&console.warn("<RadioButton/> is not supported in 'segmented' variant of <RadioGroup />"),r.createElement(we,{...f,className:c,ref:l},r.createElement(J,null,r.createElement(S,{props:n,dependencies:[i],mergeInParentContext:!0},a,i==="segmented"&&r.createElement("div",{className:N.segmentedGroup},r.createElement("div",{className:N.segments},r.createElement(V,{id:"radios"}))),i==="default"&&m&&r.createElement(z,{s:t,m:s,l:o,className:N.radioGroup},r.createElement(V,{id:"radios"})),i==="default"&&!m&&r.createElement("div",{className:N.radioGroup},r.createElement(V,{id:"radios"})),r.createElement(V,{id:"fieldDescription"}),r.createElement(V,{id:"fieldError"}))),r.createElement(U,{className:C.fieldError}))});We.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};const Ae="flow--radio-group--radio",He="flow--radio-group--radio--icon",w={radio:Ae,icon:He},H=M("Radio",e=>{const{children:a,className:d,unstyled:i=!1,refProp:t,...s}=e,o=i?d:k(w.radio,d);return r.createElement(q,null,r.createElement(ke,{...s,className:o,ref:t},({isSelected:l})=>r.createElement(r.Fragment,null,l?!i&&r.createElement(Y,{className:w.icon}):!i&&r.createElement(Z,{className:w.icon}),a)))});H.__docgenInfo={description:"",methods:[],displayName:"Radio"};export{We as R,H as a,A as b};