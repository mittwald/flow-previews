import{R as i,r as n}from"./index-Cs7sjTYM.js";import{c as N}from"./clsx-B-dksMZM.js";import{g as H,$ as I,h as B,i as _,a as k}from"./utils-Cd8r7pc9.js";import{a as F,b as W,c as A,$ as U}from"./OverlayArrow-BrbzJDKz.js";import{$ as K,a as V}from"./useFocusable-CKybZYMg.js";import{$ as z,a as h,d as Y,c as j}from"./index-j_f0pOtZ.js";import{a as R,m as q,k as G}from"./useFocusRing-CqFdZJbR.js";import{$ as J}from"./filterDOMProps-CeZl_uWj.js";import{f as Q}from"./index-Cf-03bMR.js";const T=i.createContext(null);function X(e){let{children:t}=e,r=n.useContext(T),[l,c]=n.useState(0),s=n.useMemo(()=>({parent:r,modalCount:l,addModal(){c(o=>o+1),r&&r.addModal()},removeModal(){c(o=>o-1),r&&r.removeModal()}}),[r,l]);return i.createElement(T.Provider,{value:s},t)}function Z(){let e=n.useContext(T);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:null}}}function ee(e){let{modalProviderProps:t}=Z();return i.createElement("div",{"data-overlay-container":!0,...e,...t})}function te(e){return i.createElement(X,null,i.createElement(ee,e))}function re(e){let t=z(),{portalContainer:r=t?null:document.body,...l}=e;if(i.useEffect(()=>{if(r!=null&&r.closest("[data-overlay-container]"))throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[r]),!r)return null;let c=i.createElement(te,l);return Q.createPortal(c,r)}function oe(e,t){let r=J(e,{labelable:!0}),{hoverProps:l}=R({onHoverStart:()=>t==null?void 0:t.open(!0),onHoverEnd:()=>t==null?void 0:t.close()});return{tooltipProps:h(r,l,{role:"tooltip"})}}function le(e,t,r){let{isDisabled:l,trigger:c}=e,s=Y(),o=n.useRef(!1),a=n.useRef(!1),u=()=>{(o.current||a.current)&&t.open(a.current)},d=g=>{!o.current&&!a.current&&t.close(g)};n.useEffect(()=>{let g=y=>{r&&r.current&&y.key==="Escape"&&(y.stopPropagation(),t.close(!0))};if(t.isOpen)return document.addEventListener("keydown",g,!0),()=>{document.removeEventListener("keydown",g,!0)}},[r,t]);let b=()=>{c!=="focus"&&(q()==="pointer"?o.current=!0:o.current=!1,u())},v=()=>{c!=="focus"&&(a.current=!1,o.current=!1,d())},x=()=>{a.current=!1,o.current=!1,d(!0)},P=()=>{G()&&(a.current=!0,u())},f=()=>{a.current=!1,o.current=!1,d(!0)},{hoverProps:M}=R({isDisabled:l,onHoverStart:b,onHoverEnd:v}),{focusableProps:L}=K({isDisabled:l,onFocus:P,onBlur:f},r);return{triggerProps:{"aria-describedby":t.isOpen?s:void 0,...h(L,M,{onPointerDown:x,onKeyDown:x})},tooltipProps:{id:s}}}const ae=1500,w=500;let p={},ne=0,E=!1,$=null,m=null;function S(e={}){let{delay:t=ae,closeDelay:r=w}=e,{isOpen:l,open:c,close:s}=F(e),o=n.useMemo(()=>`${++ne}`,[]),a=n.useRef(void 0),u=n.useRef(s),d=()=>{p[o]=x},b=()=>{for(let f in p)f!==o&&(p[f](!0),delete p[f])},v=()=>{clearTimeout(a.current),a.current=null,b(),d(),E=!0,c(),$&&(clearTimeout($),$=null),m&&(clearTimeout(m),m=null)},x=f=>{f||r<=0?(clearTimeout(a.current),a.current=null,u.current()):a.current||(a.current=setTimeout(()=>{a.current=null,u.current()},r)),$&&(clearTimeout($),$=null),E&&(m&&clearTimeout(m),m=setTimeout(()=>{delete p[o],m=null,E=!1},Math.max(w,r)))},P=()=>{b(),d(),!l&&!$&&!E?$=setTimeout(()=>{$=null,E=!0,v()},t):l||v()};return n.useEffect(()=>{u.current=s},[s]),n.useEffect(()=>()=>{clearTimeout(a.current),p[o]&&delete p[o]},[o]),{isOpen:l,open:f=>{!f&&t>0&&!a.current?P():v()},close:x}}const O=n.createContext(null),D=n.createContext(null);function ie(e){let t=S(e),r=n.useRef(null),{triggerProps:l,tooltipProps:c}=le(e,t,r);return i.createElement(H,{values:[[O,t],[D,{...c,triggerRef:r}]]},i.createElement(V,{...l,ref:r},e.children))}function ce({UNSTABLE_portalContainer:e,...t},r){[t,r]=I(t,r,D);let l=n.useContext(O),c=S(t),s=t.isOpen!=null||t.defaultOpen!=null||!l?c:l,o=B(r,s.isOpen)||t.isExiting||!1;return!s.isOpen&&!o?null:i.createElement(re,{portalContainer:e},i.createElement(de,{...t,tooltipRef:r,isExiting:o}))}const se=n.forwardRef(ce);function de(e){let t=n.useContext(O),r=n.useRef(null),[l,c]=n.useState(0);j(()=>{r.current&&t.isOpen&&c(r.current.getBoundingClientRect().width)},[t.isOpen,r]);let{overlayProps:s,arrowProps:o,placement:a}=W({placement:e.placement||"top",targetRef:e.triggerRef,overlayRef:e.tooltipRef,offset:e.offset,crossOffset:e.crossOffset,isOpen:t.isOpen,arrowSize:l,arrowBoundaryOffset:e.arrowBoundaryOffset,shouldFlip:e.shouldFlip}),u=_(e.tooltipRef,!!a)||e.isEntering||!1,d=k({...e,defaultClassName:"react-aria-Tooltip",values:{placement:a,isEntering:u,isExiting:e.isExiting,state:t}});e=h(e,s);let{tooltipProps:b}=oe(e,t);return i.createElement("div",{...b,ref:e.tooltipRef,...d,style:{...s.style,...d.style},"data-placement":a,"data-entering":u||void 0,"data-exiting":e.isExiting||void 0},i.createElement(A.Provider,{value:{...o,placement:a,ref:r}},d.children))}const fe=e=>{const{children:t,...r}=e;return i.createElement(ie,{...r},t)};fe.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};const ue="flow--tooltip",$e="flow--tooltip--tip",pe="flow--tooltip--slide",C={tooltip:ue,tip:$e,slide:pe},me=e=>{const{children:t,className:r,...l}=e,c=N(C.tooltip,r);return i.createElement(se,{...l,className:c},i.createElement(U,{className:C.tip},i.createElement("svg",{viewBox:"0 0 8 8"},i.createElement("path",{d:"M0 0 L4 4 L8 0"}))),t)};me.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};export{fe as T,me as a};