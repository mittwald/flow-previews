import{r as o,R as s}from"./index-B-o1Wr-g.js";import{c as S}from"./clsx-B-dksMZM.js";import{d as M,e as T,f as N,g as L,h as m,i as z,j as I,u as B,c as _,b as W}from"./OverlayTrigger-Cbeayf9A.js";import{$ as q,c as g,h as p,i as y,a as E,g as A,b as F}from"./utils-CCebJm36.js";import{$ as O,a as b}from"./index-ynQ6n1pc.js";import{$ as C}from"./filterDOMProps-CeZl_uWj.js";import{a as U}from"./OverlayArrow-BMY-498z.js";let d=typeof document<"u"&&window.visualViewport;function K(){let t=O(),[e,i]=o.useState(()=>t?{width:0,height:0}:v());return o.useEffect(()=>{let a=()=>{i(n=>{let r=v();return r.width===n.width&&r.height===n.height?n:r})};return d?d.addEventListener("resize",a):window.addEventListener("resize",a),()=>{d?d.removeEventListener("resize",a):window.removeEventListener("resize",a)}},[]),e}function v(){return{width:d&&(d==null?void 0:d.width)||window.innerWidth,height:d&&(d==null?void 0:d.height)||window.innerHeight}}function V(t,e,i){let{overlayProps:a,underlayProps:n}=M({...t,isOpen:e.isOpen,onClose:e.close},i);return T({isDisabled:!e.isOpen}),N(),o.useEffect(()=>{if(e.isOpen&&i.current)return L([i.current])},[e.isOpen,i]),{modalProps:b(a),underlayProps:n}}const j=o.createContext(null),x=o.createContext(null);function k(t,e){if(o.useContext(x))return s.createElement(h,{...t,modalRef:e},t.children);let{isDismissable:a,isKeyboardDismissDisabled:n,isOpen:r,defaultOpen:c,onOpenChange:l,children:$,isEntering:f,isExiting:u,UNSTABLE_portalContainer:R,shouldCloseOnInteractOutside:P,...D}=t;return s.createElement(w,{isDismissable:a,isKeyboardDismissDisabled:n,isOpen:r,defaultOpen:c,onOpenChange:l,isEntering:f,isExiting:u,UNSTABLE_portalContainer:R,shouldCloseOnInteractOutside:P},s.createElement(h,{...D,modalRef:e},$))}const H=o.forwardRef(k);function G(t,e){[t,e]=q(t,e,j);let i=o.useContext(m),a=U(t),n=t.isOpen!=null||t.defaultOpen!=null||!i?a:i,r=g(e),c=o.useRef(null),l=p(r,n.isOpen),$=p(c,n.isOpen),f=l||$||t.isExiting||!1,u=O();return!n.isOpen&&!f||u?null:s.createElement(J,{...t,state:n,isExiting:f,overlayRef:r,modalRef:c})}const w=o.forwardRef(G);function J({UNSTABLE_portalContainer:t,...e}){let i=e.modalRef,{state:a}=e,{modalProps:n,underlayProps:r}=V(e,a,i),c=y(e.overlayRef)||e.isEntering||!1,l=E({...e,defaultClassName:"react-aria-ModalOverlay",values:{isEntering:c,isExiting:e.isExiting,state:a}}),$=K(),f={...l.style,"--visual-viewport-height":$.height+"px"};return s.createElement(z,{isExiting:e.isExiting,portalContainer:t},s.createElement("div",{...b(C(e),r),...l,style:f,ref:e.overlayRef,"data-entering":c||void 0,"data-exiting":e.isExiting||void 0},s.createElement(A,{values:[[x,{modalProps:n,modalRef:i,isExiting:e.isExiting,isDismissable:e.isDismissable}],[m,a]]},l.children)))}function h(t){let{modalProps:e,modalRef:i,isExiting:a,isDismissable:n}=o.useContext(x),r=o.useContext(m),c=o.useMemo(()=>F(t.modalRef,i),[t.modalRef,i]),l=g(c),$=y(l),f=E({...t,defaultClassName:"react-aria-Modal",values:{isEntering:$,isExiting:a,state:r}});return s.createElement("div",{...b(C(t),e),...f,ref:l,"data-entering":$||void 0,"data-exiting":a||void 0},n&&s.createElement(I,{onDismiss:r.close}),f.children)}const Q="flow--overlay",X={overlay:Q,"overlay-fade":"flow--overlay--overlay-fade"},Y=t=>{const{controller:e,children:i,isDismissable:a=!0,className:n,overlayType:r="Modal"}=t,c=B(r,{reuseControllerFromContext:!0}),l=e??c,$=l.useIsOpen(),f=S(X.overlay,n);return s.createElement(w,{className:f,isDismissable:a,isOpen:$,onOpenChange:u=>l.setOpen(u)},s.createElement(H,null,s.createElement(_,null,s.createElement(W,{type:"Modal",controller:l},i))))};Y.__docgenInfo={description:"",methods:[],displayName:"Overlay",props:{className:{required:!1,tsType:{name:"string"},description:"The elements class name."},controller:{required:!1,tsType:{name:"OverlayController"},description:"The controller to control the overlay state."},isDismissable:{required:!1,tsType:{name:"boolean"},description:"Whether the overlay can be closed by clicking outside of it."},overlayType:{required:!1,tsType:{name:"union",raw:'"Modal" | "LightBox"',elements:[{name:"literal",value:'"Modal"'},{name:"literal",value:'"LightBox"'}]},description:"Whether the overlay is a modal or a light box."}},composes:["PropsWithChildren"]};export{Y as O};