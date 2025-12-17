import{j as o}from"./iframe-8dFSbqJz.js";import{P as m}from"./flowComponent-K_HgwY7e.js";import{O as d}from"./OverlayContextProvider-B1nyJ9fy.js";import{O as y}from"./context-Hd2oMXi6.js";const u=r=>{const{overlayType:n,isDefaultOpen:t=!1,component:l,children:s,controller:p}=r,a=y.useNew({isDefaultOpen:t}),e=p??a,i=e.useIsOpen(),c={Button:{onPress:e.open}};return o.jsx(d,{type:n,controller:e,children:o.jsx(m,{props:c,children:o.jsx(l,{isOpen:i,children:s})})})};u.__docgenInfo={description:"",methods:[],displayName:"OverlayTrigger",props:{isDefaultOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the overlay should be open initially."},controller:{required:!1,tsType:{name:"OverlayController"},description:"A controller to control the state of the overlay."},overlayType:{required:!0,tsType:{name:"FlowComponentName"},description:""},component:{required:!0,tsType:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:`{
  isOpen?: boolean;
  children: ReactNode;
}`,signature:{properties:[{key:"isOpen",value:{name:"boolean",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}],raw:`ComponentType<{
  isOpen?: boolean;
  children: ReactNode;
}>`},description:""}},composes:["FlowComponentProps","PropsWithChildren"]};export{u as O};
