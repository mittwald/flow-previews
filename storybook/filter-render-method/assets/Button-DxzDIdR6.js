import{r as f,R as o}from"./index-Cs7sjTYM.js";import{c as E}from"./clsx-B-dksMZM.js";import{C as F,P as C}from"./PropsContextProvider-58HgA8rU.js";import"./IconApp-kHJN8BdN.js";import{w as B,x as I}from"./IconWarning-mV0QuYPn.js";import{W as p}from"./Wrap-DQq6jo70.js";import{T as _}from"./Text-B8u3q54x.js";import{f as T}from"./flowComponent-DhdNqvi-.js";import{L as A}from"./LoadingSpinner-QAhTkMFT.js";import{a as $}from"./useLocalizedStringFormatter-J1nK3MOF.js";import{$ as D}from"./Button-inQNMO4w.js";const R="flow--button",k="flow--button--content",O="flow--button--state-icon",z="flow--button--avatar",L="flow--button--icon",K="flow--button--text",U="flow--button--counter-badge",W="flow--button--is-succeeded",j="flow--button--is-failed",q="flow--button--is-pending",G="flow--button--plain",H="flow--button--primary",J="flow--button--solid",M="flow--button--aria-disabled",Q="flow--button--accent",V="flow--button--danger",X="flow--button--secondary",Y="flow--button--dark",Z="flow--button--light",ee="flow--button--soft",i={button:R,content:k,stateIcon:O,avatar:z,icon:L,text:K,counterBadge:U,isSucceeded:W,isFailed:j,isPending:q,plain:G,"size-s":"flow--button--size-s",primary:H,solid:J,ariaDisabled:M,accent:Q,danger:V,secondary:X,dark:Y,light:Z,soft:ee},te={"de-DE":{"action.isFailed":"Fehlgeschlagen","action.isPending":"Ausstehend...","action.isSucceeded":"Erfolgreich"},"en-EN":{"action.isFailed":"Failed","action.isPending":"Pending...","action.isSucceeded":"Succeeded"}};var ie=Object.defineProperty,ne=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t,n)=>(ne(e,typeof t!="symbol"?t+"":t,n),n);function oe(){return!!(globalThis!=null&&globalThis.document)}var m=oe(),ae=class{constructor(e){u(this,"region"),u(this,"options"),u(this,"parentNode"),this.options=se(e),this.region=re(this.options),this.parentNode=this.options.parentNode,this.region&&this.parentNode.appendChild(this.region)}speak(e){this.clear(),this.region&&(this.region.innerText=e)}destroy(){var e;this.region&&((e=this.region.parentNode)==null||e.removeChild(this.region))}clear(){this.region&&(this.region.innerText="")}};function se(e){const t={"aria-live":"polite","aria-atomic":"true","aria-relevant":"all",role:"status",id:"chakra-a11y-live-region",parentNode:m?document.body:void 0};return e?Object.assign(t,e):t}function re(e){let t=m?document.getElementById(e.id):null;return t||(m&&(t=document.createElement("div"),ce(t,e)),t)}function ce(e,t){e.id=t.id||"chakra-live-region",e.className="__chakra-live-region",e.setAttribute("aria-live",t["aria-live"]),e.setAttribute("role",t.role),e.setAttribute("aria-relevant",t["aria-relevant"]),e.setAttribute("aria-atomic",String(t["aria-atomic"])),Object.assign(e.style,{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"})}function de(e){const[t]=f.useState(()=>new ae(e));return f.useEffect(()=>()=>{t.destroy()},[t]),t}const le=(e,t={})=>{const n=$(te),{isPendingText:r=n.format("action.isPending"),isSucceededText:c=n.format("action.isSucceeded"),isFailedText:s=n.format("action.isFailed")}=t,a=de({"aria-live":"polite","aria-atomic":!1,"aria-relevant":"text additions",role:"status"});f.useEffect(()=>{e==="isPending"?a.speak(r):e==="isSucceeded"?a.speak(c):e==="isFailed"&&a.speak(s)},[e])},ue=e=>((e.isPending||e.isSucceeded||e.isFailed||e["aria-disabled"])&&(e={...e},e.onPress=void 0,e.onPressStart=void 0,e.onPressEnd=void 0,e.onPressChange=void 0,e.onPressUp=void 0,e.onKeyDown=void 0,e.onKeyUp=void 0),e),fe=T("Button",e=>{e=ue(e);const{color:t="primary",variant:n="solid",children:r,className:c,size:s="m",isPending:a,isSucceeded:d,isFailed:l,"aria-disabled":h,refProp:v,slot:me,ariaSlot:w,unstyled:g,...x}=e,P=g?c:E(i.button,a&&i.isPending,d&&i.isSucceeded,l&&i.isFailed,i[`size-${s}`],i[t],i[n],c,h&&i.ariaDisabled);le(a?"isPending":d?"isSucceeded":l?"isFailed":"isIdle");const S={Icon:{className:i.icon,"aria-hidden":!0,size:s},Text:{className:i.text},Avatar:{className:i.avatar},CounterBadge:{className:i.counterBadge}},b=d?B:l?I:a?A:void 0,N=b&&o.createElement(b,{size:s,className:i.stateIcon}),y=typeof r=="string";return o.createElement(F,null,o.createElement(D,{className:P,ref:v,slot:w,...x},o.createElement(C,{props:S},o.createElement(p,{if:!g},o.createElement("span",{className:i.content},o.createElement(p,{if:y},o.createElement(_,null,r))))),N))});fe.__docgenInfo={description:"",methods:[],displayName:"Button"};export{fe as B};