import{r as o,R as l}from"./index-uCp2LrAq.js";import{c as M}from"./clsx-B-dksMZM.js";import{d as S,e as N,f as L,g as z,h as u,i as I,j as T,u as _,b as A,c as B}from"./OverlayTrigger-BPhu1iqi.js";import{a as F,g as E,i as p,j as h,b as y,f as U,h as j}from"./utils-DZgOXw50.js";import{$ as O,b}from"./index-CFQDndEx.js";import{$ as C}from"./filterDOMProps-CeZl_uWj.js";import{a as q}from"./OverlayArrow-BCqBDIej.js";let f=typeof document<"u"&&window.visualViewport;function K(){let t=O(),[e,n]=o.useState(()=>t?{width:0,height:0}:v());return o.useEffect(()=>{let a=()=>{n(i=>{let r=v();return r.width===i.width&&r.height===i.height?i:r})};return f?f.addEventListener("resize",a):window.addEventListener("resize",a),()=>{f?f.removeEventListener("resize",a):window.removeEventListener("resize",a)}},[]),e}function v(){return{width:f&&(f==null?void 0:f.width)||window.innerWidth,height:f&&(f==null?void 0:f.height)||window.innerHeight}}function V(t,e,n){let{overlayProps:a,underlayProps:i}=S({...t,isOpen:e.isOpen,onClose:e.close},n);return N({isDisabled:!e.isOpen}),L(),o.useEffect(()=>{if(e.isOpen)return z([n.current])},[e.isOpen,n]),{modalProps:b(a),underlayProps:i}}const W=o.createContext(null),x=o.createContext(null);function H(t,e){if(o.useContext(x))return l.createElement(g,{...t,modalRef:e},t.children);let{isDismissable:a,isKeyboardDismissDisabled:i,isOpen:r,defaultOpen:s,onOpenChange:d,children:$,isEntering:c,isExiting:m,UNSTABLE_portalContainer:R,shouldCloseOnInteractOutside:P,...D}=t;return l.createElement(w,{isDismissable:a,isKeyboardDismissDisabled:i,isOpen:r,defaultOpen:s,onOpenChange:d,isEntering:c,isExiting:m,UNSTABLE_portalContainer:R,shouldCloseOnInteractOutside:P},l.createElement(g,{...D,modalRef:e},$))}const k=o.forwardRef(H);function G(t,e){[t,e]=F(t,e,W);let n=o.useContext(u),a=q(t),i=t.isOpen!=null||t.defaultOpen!=null||!n?a:n,r=E(e),s=o.useRef(null),d=p(r,i.isOpen),$=p(s,i.isOpen),c=d||$||t.isExiting||!1,m=O();return!i.isOpen&&!c||m?null:l.createElement(J,{...t,state:i,isExiting:c,overlayRef:r,modalRef:s})}const w=o.forwardRef(G);function J({UNSTABLE_portalContainer:t,...e}){let n=e.modalRef,{state:a}=e,{modalProps:i,underlayProps:r}=V(e,a,n),s=h(e.overlayRef)||e.isEntering||!1,d=y({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:s,isExiting:e.isExiting,state:a}}),$=K(),c={...d.style,"--visual-viewport-height":$.height+"px"};return l.createElement(I,{isExiting:e.isExiting,portalContainer:t},l.createElement("div",{...b(C(e),r),...d,style:c,ref:e.overlayRef,"data-entering":s||void 0,"data-exiting":e.isExiting||void 0},l.createElement(U,{values:[[x,{modalProps:i,modalRef:n,isExiting:e.isExiting,isDismissable:e.isDismissable}],[u,a]]},d.children)))}function g(t){let{modalProps:e,modalRef:n,isExiting:a,isDismissable:i}=o.useContext(x),r=o.useContext(u),s=o.useMemo(()=>j(t.modalRef,n),[t.modalRef,n]),d=E(s),$=h(d),c=y({...t,defaultClassName:"react-aria-Modal",values:{isEntering:$,isExiting:a,state:r}});return l.createElement("div",{...b(C(t),e),...c,ref:d,"data-entering":$||void 0,"data-exiting":a||void 0},i&&l.createElement(T,{onDismiss:r.close}),c.children)}const Q="flow--modal-overlay--overlay",X={overlay:Q,"overlay-fade":"flow--modal-overlay--overlay-fade"},Y=t=>{const{controller:e,children:n,isDismissable:a=!0,className:i}=t,r=_("Modal",{reuseControllerFromContext:!0}),s=e??r,d=s.useIsOpen(),$=M(X.overlay,i);return l.createElement(w,{className:$,isDismissable:a,isOpen:d,onOpenChange:c=>s.setOpen(c)},l.createElement(k,null,l.createElement(A,null,l.createElement(B,{type:"Modal",controller:s},n))))};Y.__docgenInfo={description:"",methods:[],displayName:"ModalOverlay",props:{controller:{required:!1,tsType:{name:"OverlayController"},description:""},isDismissable:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};export{Y as M};