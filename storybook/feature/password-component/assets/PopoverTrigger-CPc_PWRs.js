import{R as e}from"./index-Cs7sjTYM.js";import{c as p}from"./clsx-B-dksMZM.js";import{u as h,a as x,O as b,b as y,c as O,$ as u}from"./OverlayTrigger-05SHITif.js";import{f as w}from"./flowComponent-BqZrLudx.js";import{$ as N}from"./OverlayArrow-BxlO7pa5.js";const E="flow--popover",T="flow--popover--content",_="flow--popover--tip",s={popover:E,content:T,tip:_,"popover-slide":"flow--popover--popover-slide"},F=w("Popover",o=>{const{children:t,className:r,contentClassName:a,isDialogContent:c=!1,controller:l,withTip:i,refProp:m,defaultOpen:f=!1,...d}=o,v=h("Popover",{reuseControllerFromContext:!0,defaultOpen:f}),n=l??v,g=n.useIsOpen(),P=p(s.popover,r),$=c?y:"div";return e.createElement(x,{...d,className:P,containerPadding:16,ref:m,isOpen:g,onOpenChange:C=>n.setOpen(C)},i&&e.createElement(N,{className:s.tip},e.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16"},e.createElement("path",{d:"M0 0 L8 8 L16 0"}))),e.createElement($,{className:p(s.content,a)},e.createElement(b,{type:"Popover",controller:n},t)))});F.__docgenInfo={description:"",methods:[],displayName:"Popover"};const I=o=>{const{children:t,...r}=o;return e.createElement(O,{overlayType:"Popover",...r,component:u},t)};I.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};export{F as P,I as a};