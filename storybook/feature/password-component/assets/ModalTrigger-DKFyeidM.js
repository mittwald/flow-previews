import{r as c,R as a}from"./index-BwDkhjyp.js";import{c as y}from"./clsx-B-dksMZM.js";import{P as S}from"./PropsContextProvider-DwTel3aB.js";import{f as I,M as _,P as p}from"./flowComponent-arII6e68.js";import{d as B,e as L,f as q,g as A,h as b,i as F,j as G,u as H,b as U,O as V,c as W,$ as j}from"./OverlayTrigger-Kx2AxGL_.js";import{a as K,g as O,i as v,j as C,b as w,f as k,h as J}from"./utils-B-mS0hjG.js";import{$ as R,b as g}from"./index-DVe9vSxq.js";import{$ as P}from"./filterDOMProps-CeZl_uWj.js";import{a as Q}from"./OverlayArrow-CQIUSZWS.js";import{H as X}from"./Header-0ZrJLFST.js";import{A as Y}from"./Action-DWWIxyP-.js";import{B as Z}from"./Button-D6AAkLLn.js";import"./IconApp-DBpcl0fC.js";import{k as ee}from"./IconWarning-BftDN5EW.js";let m=typeof document<"u"&&window.visualViewport;function te(){let t=R(),[e,n]=c.useState(()=>t?{width:0,height:0}:E());return c.useEffect(()=>{let o=()=>{n(l=>{let r=E();return r.width===l.width&&r.height===l.height?l:r})};return m?m.addEventListener("resize",o):window.addEventListener("resize",o),()=>{m?m.removeEventListener("resize",o):window.removeEventListener("resize",o)}},[]),e}function E(){return{width:m&&(m==null?void 0:m.width)||window.innerWidth,height:m&&(m==null?void 0:m.height)||window.innerHeight}}function ae(t,e,n){let{overlayProps:o,underlayProps:l}=B({...t,isOpen:e.isOpen,onClose:e.close},n);return L({isDisabled:!e.isOpen}),q(),c.useEffect(()=>{if(e.isOpen)return A([n.current])},[e.isOpen,n]),{modalProps:g(o),underlayProps:l}}const ne=c.createContext(null),x=c.createContext(null);function oe(t,e){if(c.useContext(x))return a.createElement(h,{...t,modalRef:e},t.children);let{isDismissable:o,isKeyboardDismissDisabled:l,isOpen:r,defaultOpen:i,onOpenChange:s,children:f,isEntering:d,isExiting:$,UNSTABLE_portalContainer:D,shouldCloseOnInteractOutside:T,...z}=t;return a.createElement(M,{isDismissable:o,isKeyboardDismissDisabled:l,isOpen:r,defaultOpen:i,onOpenChange:s,isEntering:d,isExiting:$,UNSTABLE_portalContainer:D,shouldCloseOnInteractOutside:T},a.createElement(h,{...z,modalRef:e},f))}const le=c.forwardRef(oe);function re(t,e){[t,e]=K(t,e,ne);let n=c.useContext(b),o=Q(t),l=t.isOpen!=null||t.defaultOpen!=null||!n?o:n,r=O(e),i=c.useRef(null),s=v(r,l.isOpen),f=v(i,l.isOpen),d=s||f||t.isExiting||!1,$=R();return!l.isOpen&&!d||$?null:a.createElement(ie,{...t,state:l,isExiting:d,overlayRef:r,modalRef:i})}const M=c.forwardRef(re);function ie({UNSTABLE_portalContainer:t,...e}){let n=e.modalRef,{state:o}=e,{modalProps:l,underlayProps:r}=ae(e,o,n),i=C(e.overlayRef)||e.isEntering||!1,s=w({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:i,isExiting:e.isExiting,state:o}}),f=te(),d={...s.style,"--visual-viewport-height":f.height+"px"};return a.createElement(F,{isExiting:e.isExiting,portalContainer:t},a.createElement("div",{...g(P(e),r),...s,style:d,ref:e.overlayRef,"data-entering":i||void 0,"data-exiting":e.isExiting||void 0},a.createElement(k,{values:[[x,{modalProps:l,modalRef:n,isExiting:e.isExiting,isDismissable:e.isDismissable}],[b,o]]},s.children)))}function h(t){let{modalProps:e,modalRef:n,isExiting:o,isDismissable:l}=c.useContext(x),r=c.useContext(b),i=c.useMemo(()=>J(t.modalRef,n),[t.modalRef,n]),s=O(i),f=C(s),d=w({...t,defaultClassName:"react-aria-Modal",values:{isEntering:f,isExiting:o,state:r}});return a.createElement("div",{...g(P(t),e),...d,ref:s,"data-entering":f||void 0,"data-exiting":o||void 0},l&&a.createElement(G,{onDismiss:r.close}),d.children)}const se="flow--modal",de="flow--modal--off-canvas",ce="flow--modal--content",fe="flow--modal--action-group",me="flow--modal--header",ue="flow--modal--close-button",u={modal:se,offCanvas:de,content:ce,actionGroup:fe,"size-s":"flow--modal--size-s","size-m":"flow--modal--size-m","modal-zoom":"flow--modal--modal-zoom",header:me,"modal-slide-in":"flow--modal--modal-slide-in","modal-slide-up":"flow--modal--modal-slide-up",closeButton:ue},$e="flow--modal-overlay--overlay",pe={overlay:$e,"overlay-fade":"flow--modal-overlay--overlay-fade"},N=t=>{const{controller:e,children:n,isDismissable:o=!0,className:l}=t,r=H("Modal",{reuseControllerFromContext:!0}),i=e??r,s=i.useIsOpen(),f=y(pe.overlay,l);return a.createElement(M,{className:f,isDismissable:o,isOpen:s,onOpenChange:d=>i.setOpen(d)},a.createElement(le,null,a.createElement(U,null,a.createElement(V,{type:"Modal",controller:i},n))))};N.__docgenInfo={description:"",methods:[],displayName:"ModalOverlay",props:{controller:{required:!1,tsType:{name:"OverlayController"},description:""},isDismissable:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const be=I("Modal",t=>{const{size:e="s",offCanvas:n,controller:o,children:l,refProp:r,className:i,...s}=t,f=y(n?u.offCanvas:u.modal,u[`size-${e}`],i),d={Content:{elementType:a.Fragment},Heading:{level:2,levelVisual:4,slot:"title",tunnelId:"heading"},ActionGroup:{className:u.actionGroup,tunnelId:"buttons"}};return a.createElement(N,{className:f,controller:o,...s},a.createElement(S,{props:d},a.createElement(_,null,n&&a.createElement(X,{className:u.header},a.createElement(p,{id:"heading"}),a.createElement(Y,{closeOverlay:"Modal"},a.createElement(Z,{variant:"plain",color:"secondary",className:u.closeButton},a.createElement(ee,null)))),a.createElement("div",{className:u.content},!n&&a.createElement(p,{id:"heading"}),l),a.createElement(p,{id:"buttons"}))))});be.__docgenInfo={description:"",methods:[],displayName:"Modal"};const ge=t=>{const{children:e,...n}=t;return a.createElement(W,{overlayType:"Modal",...n,component:j},e)};ge.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger",props:{tunnelId:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"@internal"},wrapWith:{required:!1,tsType:{name:"ReactElement"},description:""},isDefaultOpen:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{be as M,ge as a};