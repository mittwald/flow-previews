import{R as e}from"./index-uCp2LrAq.js";import{c as g}from"./clsx-B-dksMZM.js";import{u as P,a as $,b as h,O as x,c as b,$ as y}from"./OverlayTrigger-B_V56TaE.js";import{f as O}from"./flowComponent-VNMV0_Nr.js";import{$ as u}from"./OverlayArrow-BCqBDIej.js";const w="flow--popover",C="flow--popover--content",E="flow--popover--tip",p={popover:w,content:C,tip:E,"popover-slide":"flow--popover--popover-slide"},N=O("Popover",o=>{const{children:r,className:t,controller:s,withTip:a,refProp:c,defaultOpen:l=!1,...i}=o,m=P("Popover",{reuseControllerFromContext:!0,defaultOpen:l}),n=s??m,f=n.useIsOpen(),d=g(p.popover,t);return e.createElement($,{...i,className:d,containerPadding:16,ref:c,isOpen:f,onOpenChange:v=>n.setOpen(v)},a&&e.createElement(u,{className:p.tip},e.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16"},e.createElement("path",{d:"M0 0 L8 8 L16 0"}))),e.createElement(h,{className:p.content},e.createElement(x,{type:"Popover",controller:n},r)))});N.__docgenInfo={description:"",methods:[],displayName:"Popover"};const T=o=>{const{children:r,...t}=o;return e.createElement(b,{overlayType:"Popover",...t,component:y},r)};T.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};export{N as P,T as a};