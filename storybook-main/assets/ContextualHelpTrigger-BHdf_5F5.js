import{R as e}from"./index-Cs7sjTYM.js";import{P as c}from"./PopoverTrigger-D3n0-DEu.js";import{P as l}from"./PropsContextProvider-DXo7lD_U.js";import{f as m}from"./flowComponent-DewkrGXe.js";import{u,c as f,$ as d}from"./OverlayTrigger-hNSPMKkP.js";import"./IconApp-CdASQQtj.js";import{m as x}from"./IconWarning-BNLeXliD.js";import{$ as C}from"./useLocalizedStringFormatter-TZkCr3Qr.js";const g="flow--contextual-help",H={contextualHelp:g},y=m("ContextualHelp",t=>{const{children:o,controller:r,refProp:a,...n}=t,s=u("ContextualHelp",{reuseControllerFromContext:!0}),i=r??s,p={Heading:{level:5}};return e.createElement(c,{withTip:!0,...n,controller:i},e.createElement(l,{props:p},e.createElement("div",{className:H.contextualHelp},o)))});y.__docgenInfo={description:"",methods:[],displayName:"ContextualHelp"};const I={"de-DE":{"contextualHelpButton.moreInformation":"Weitere Informationen"},"en-EN":{"contextualHelpButton.moreInformation":"More information"}},T=t=>{const{children:o,...r}=t,n={Button:{"aria-label":C(I).format("contextualHelpButton.moreInformation"),children:e.createElement(x,null),size:"s",variant:"plain"}};return e.createElement(f,{overlayType:"ContextualHelp",...r,component:d},e.createElement(l,{props:n,mergeInParentContext:!0},o))};T.__docgenInfo={description:"",methods:[],displayName:"ContextualHelpTrigger",props:{tunnelId:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"@internal"},wrapWith:{required:!1,tsType:{name:"ReactElement"},description:""},isDefaultOpen:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},controller:{required:!1,tsType:{name:"OverlayController"},description:""}}};export{y as C,T as a};