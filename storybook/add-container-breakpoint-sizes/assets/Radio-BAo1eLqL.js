import{r as R,R as r}from"./index-uCp2LrAq.js";import{c as B}from"./clsx-B-dksMZM.js";import{C as S,P as q,m as H}from"./PropsContextProvider-RdMO5ekw.js";import{d as K}from"./dynamic-DKDa4OpU.js";import{f as N,F as j}from"./FormField.module-DtTAfK2u.js";import{C as U}from"./ColumnLayout-B78AueES.js";import{f as G,M as J,P as k}from"./flowComponent-dvxR-0IS.js";import{d as Q}from"./deepFindOfType-CMLjW25q.js";import"./IconApp-CqdsO7mM.js";import{f as X,C as Y,D as Z}from"./IconWarning-BSZUxli_.js";import{a as _,c as ee,d as ae,b as z,f as ie,g as re,h as oe,e as te}from"./utils-DZgOXw50.js";import{c as de,b as ne,a as se,e as le,f as ce}from"./Form-BOwpWbru.js";import{a as ue}from"./Label-BQk6lJ-q.js";import{a as fe}from"./Text-D6Zjnbf0.js";import{b as h,a as me}from"./index-CFQDndEx.js";import{$ as M}from"./filterDOMProps-CeZl_uWj.js";import{$ as be}from"./useControlledState-B8AA3oOY.js";import{$ as pe}from"./FocusScope-Bpk85l6Y.js";import{a as $e,$ as ve,b as ge,c as Pe}from"./useFocusable-DpEA8Hsr.js";import{$ as xe}from"./useLocalizedStringFormatter-CHReNXSI.js";import{$ as he}from"./useFormReset-Bt7ImmB-.js";import{$ as O}from"./usePress-CaJD4Kpr.js";import{$ as Re}from"./VisuallyHidden-DWE0U9Im.js";const L=new WeakMap;function ye(e,a,d){let{value:i,children:t,"aria-label":s,"aria-labelledby":o}=e;const n=e.isDisabled||a.isDisabled;let u=t!=null,l=s!=null||o!=null;!u&&!l&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let c=a.selectedValue===i,m=w=>{w.stopPropagation(),a.setSelectedValue(i)},{pressProps:b,isPressed:v}=O({isDisabled:n}),{pressProps:g,isPressed:y}=O({isDisabled:n,onPress(){a.setSelectedValue(i)}}),{focusableProps:E}=$e(h(e,{onFocus:()=>a.setLastFocusedValue(i)}),d),I=h(b,E),C=M(e,{labelable:!0}),D=-1;a.selectedValue!=null?a.selectedValue===i&&(D=0):(a.lastFocusedValue===i||a.lastFocusedValue==null)&&(D=0),n&&(D=void 0);let{name:$,descriptionId:f,errorMessageId:P,validationBehavior:p}=L.get(a);return he(d,a.selectedValue,a.setSelectedValue),de({validationBehavior:p},a,d),{labelProps:h(g,{onClick:w=>w.preventDefault()}),inputProps:h(C,{...I,type:"radio",name:$,tabIndex:D,disabled:n,required:a.isRequired&&p==="native",checked:c,value:i,onChange:m,"aria-describedby":[e["aria-describedby"],a.isInvalid?P:null,f].filter(Boolean).join(" ")||void 0}),isDisabled:n,isSelected:c,isPressed:v||y}}function Ee(e,a){let{name:d,isReadOnly:i,isRequired:t,isDisabled:s,orientation:o="vertical",validationBehavior:n="aria"}=e,{direction:u}=xe(),{isInvalid:l,validationErrors:c,validationDetails:m}=a.displayValidation,{labelProps:b,fieldProps:v,descriptionProps:g,errorMessageProps:y}=ne({...e,labelElementType:"span",isInvalid:a.isInvalid,errorMessage:e.errorMessage||c}),E=M(e,{labelable:!0}),{focusWithinProps:I}=ve({onBlurWithin($){var f;(f=e.onBlur)===null||f===void 0||f.call(e,$),a.selectedValue||a.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),C=$=>{let f;switch($.key){case"ArrowRight":u==="rtl"&&o!=="vertical"?f="prev":f="next";break;case"ArrowLeft":u==="rtl"&&o!=="vertical"?f="next":f="prev";break;case"ArrowDown":f="next";break;case"ArrowUp":f="prev";break;default:return}$.preventDefault();let P=pe($.currentTarget,{from:$.target}),p;f==="next"?(p=P.nextNode(),p||(P.currentNode=$.currentTarget,p=P.firstChild())):(p=P.previousNode(),p||(P.currentNode=$.currentTarget,p=P.lastChild())),p&&(p.focus(),a.setSelectedValue(p.value))},D=me(d);return L.set(a,{name:D,descriptionId:g.id,errorMessageId:y.id,validationBehavior:n}),{radioGroupProps:h(E,{role:"radiogroup",onKeyDown:C,"aria-invalid":a.isInvalid||void 0,"aria-errormessage":e["aria-errormessage"],"aria-readonly":i||void 0,"aria-required":t||void 0,"aria-disabled":s||void 0,"aria-orientation":o,...v,...I}),labelProps:b,descriptionProps:g,errorMessageProps:y,isInvalid:l,validationErrors:c,validationDetails:m}}let Ie=Math.round(Math.random()*1e10),Ce=0;function De(e){let a=R.useMemo(()=>e.name||`radio-group-${Ie}-${++Ce}`,[e.name]);var d;let[i,t]=be(e.value,(d=e.defaultValue)!==null&&d!==void 0?d:null,e.onChange),[s,o]=R.useState(null),n=se({...e,value:i}),u=c=>{!e.isReadOnly&&!e.isDisabled&&(t(c),n.commitValidation())},l=n.displayValidation.isInvalid;return{...n,name:a,selectedValue:i,setSelectedValue:u,lastFocusedValue:s,setLastFocusedValue:o,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(l?"invalid":null),isInvalid:l}}const Ne=R.createContext(null),ke=R.createContext(null),T=R.createContext(null);function we(e,a){[e,a]=_(e,a,Ne);let{validationBehavior:d}=ee(le)||{};var i,t;let s=(t=(i=e.validationBehavior)!==null&&i!==void 0?i:d)!==null&&t!==void 0?t:"native",o=De({...e,validationBehavior:s}),[n,u]=ae(),{radioGroupProps:l,labelProps:c,descriptionProps:m,errorMessageProps:b,...v}=Ee({...e,label:u,validationBehavior:s},o),g=z({...e,values:{orientation:e.orientation||"vertical",isDisabled:o.isDisabled,isReadOnly:o.isReadOnly,isRequired:o.isRequired,isInvalid:o.isInvalid,state:o},defaultClassName:"react-aria-RadioGroup"});return r.createElement("div",{...l,...g,ref:a,slot:e.slot||void 0,"data-orientation":e.orientation||"vertical","data-invalid":o.isInvalid||void 0,"data-disabled":o.isDisabled||void 0,"data-readonly":o.isReadOnly||void 0,"data-required":o.isRequired||void 0},r.createElement(ie,{values:[[T,o],[ue,{...c,ref:n,elementType:"span"}],[fe,{slots:{description:m,errorMessage:b}}],[ce,v]]},g.children))}function Ve(e,a){let{inputRef:d=null,...i}=e;[e,a]=_(i,a,ke);let t=r.useContext(T),s=re(oe(d,e.inputRef!==void 0?e.inputRef:null)),{labelProps:o,inputProps:n,isSelected:u,isDisabled:l,isPressed:c}=ye({...te(e),children:typeof e.children=="function"?!0:e.children},t,s),{isFocused:m,isFocusVisible:b,focusProps:v}=ge(),g=l||t.isReadOnly,{hoverProps:y,isHovered:E}=Pe({...e,isDisabled:g}),I=z({...e,defaultClassName:"react-aria-Radio",values:{isSelected:u,isPressed:c,isHovered:E,isFocused:m,isFocusVisible:b,isDisabled:l,isReadOnly:t.isReadOnly,isInvalid:t.isInvalid,isRequired:t.isRequired}}),C=M(e);return delete C.id,r.createElement("label",{...h(C,o,y,I),ref:a,"data-selected":u||void 0,"data-pressed":c||void 0,"data-hovered":E||void 0,"data-focused":m||void 0,"data-focus-visible":b||void 0,"data-disabled":l||void 0,"data-readonly":t.isReadOnly||void 0,"data-invalid":t.isInvalid||void 0,"data-required":t.isRequired||void 0},r.createElement(Re,{elementType:"span"},r.createElement("input",{...h(n,v),ref:s})),I.children)}const Fe=R.forwardRef(we),Be=R.forwardRef(Ve),Ge="flow--radio-group",Me="flow--radio-group--segmented-group",Oe="flow--radio-group--segments",Se="flow--radio-group--segment",qe="flow--radio-group--checkmark",_e="flow--radio-group--radio-group-container",x={radioGroup:Ge,segmentedGroup:Me,segments:Oe,segment:Se,checkmark:qe,radioGroupContainer:_e,"container-breakpoint-size-xs":"flow--radio-group--container-breakpoint-size-xs","container-breakpoint-size-s":"flow--radio-group--container-breakpoint-size-s","container-breakpoint-size-m":"flow--radio-group--container-breakpoint-size-m","container-breakpoint-size-l":"flow--radio-group--container-breakpoint-size-l","container-breakpoint-size-xl":"flow--radio-group--container-breakpoint-size-xl"},ze="flow--radio-group--radio-button",Le="flow--radio-group--radio-button--content",Te="flow--radio-group--radio-button--label",V={radioButton:ze,content:Le,label:Te},W=G("RadioButton",e=>{const{children:a,className:d,refProp:i,...t}=e,s=B(V.radioButton,d),o={Text:{className:V.label},Content:{className:V.content}};return r.createElement(S,null,r.createElement(A,{...t,className:s,ref:i},r.createElement(q,{props:o},a)))});W.__docgenInfo={description:"",methods:[],displayName:"RadioButton"};const We=G("RadioGroup",e=>{const{children:a,className:d,variant:i="default",s:t,m:s,l:o,containerBreakpointSize:n="m",refProp:u,...l}=e,c=B(N.formField,x.radioGroupContainer,d,x[`container-breakpoint-size-${n}`]);let m={Label:{className:N.label},FieldDescription:{className:N.fieldDescription,tunnelId:"fieldDescription"},FieldError:{className:N.customFieldError,tunnelId:"fieldError"},RadioButton:{tunnelId:"radios"},Radio:{tunnelId:"radios"}};i==="segmented"&&(m=H(m,{Radio:{className:x.segment,unstyled:!0,children:K(v=>r.createElement(r.Fragment,null,v.children,r.createElement(X,{className:x.checkmark})))}}));const b=!!Q(a,W);return i==="segmented"&&b&&console.warn("<RadioButton/> is not supported in 'segmented' variant of <RadioGroup />"),r.createElement(Fe,{...l,className:c,ref:u},r.createElement(J,null,r.createElement(q,{props:m,dependencies:[i],mergeInParentContext:!0},a,i==="segmented"&&r.createElement("div",{className:x.segmentedGroup},r.createElement("div",{className:x.segments},r.createElement(k,{id:"radios"}))),i==="default"&&b&&r.createElement(U,{s:t,m:s,l:o,className:x.radioGroup},r.createElement(k,{id:"radios"})),i==="default"&&!b&&r.createElement("div",{className:x.radioGroup},r.createElement(k,{id:"radios"})),r.createElement(k,{id:"fieldDescription"}),r.createElement(k,{id:"fieldError"}))),r.createElement(j,{className:N.fieldError}))});We.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};const Ae="flow--radio-group--radio",He="flow--radio-group--radio--icon",F={radio:Ae,icon:He},A=G("Radio",e=>{const{children:a,className:d,unstyled:i=!1,refProp:t,...s}=e,o=i?d:B(F.radio,d);return r.createElement(S,null,r.createElement(Be,{...s,className:o,ref:t},({isSelected:n})=>r.createElement(r.Fragment,null,n?!i&&r.createElement(Y,{className:F.icon}):!i&&r.createElement(Z,{className:F.icon}),a)))});A.__docgenInfo={description:"",methods:[],displayName:"Radio"};export{We as R,A as a,W as b};