import{R as e}from"./index-BwDkhjyp.js";import{P as i}from"./PopoverTrigger-BqV1qz4C.js";import{P as l}from"./PropsContextProvider-DwTel3aB.js";import{f as m}from"./flowComponent-AS0Hu7py.js";import{u,c as f,$ as d}from"./OverlayTrigger-CAl_vZvt.js";import"./IconApp-Rpgm6RsJ.js";import{k as x}from"./IconWarning-B2iaes-f.js";import{$ as C}from"./useLocalizedStringFormatter-CbSA8sNn.js";const g="flow--contextual-help",H={contextualHelp:g},y=m("ContextualHelp",t=>{const{children:o,controller:r,refProp:a,...n}=t,s=u("ContextualHelp",{reuseControllerFromContext:!0}),p=r??s,c={Heading:{level:5}};return e.createElement(i,{withTip:!0,...n,controller:p},e.createElement(l,{props:c},e.createElement("div",{className:H.contextualHelp},o)))});y.__docgenInfo={description:"",methods:[],displayName:"ContextualHelp"};const I={"de-DE":{"contextualHelpButton.moreInformation":"Weitere Informationen"},"en-EN":{"contextualHelpButton.moreInformation":"More information"}},P=t=>{const{children:o,...r}=t,n={Button:{"aria-label":C(I).format("contextualHelpButton.moreInformation"),children:e.createElement(x,null),size:"s",variant:"plain"}};return e.createElement(f,{overlayType:"ContextualHelp",...r,component:d},e.createElement(l,{props:n,mergeInParentContext:!0},o))};P.__docgenInfo={description:"",methods:[],displayName:"ContextualHelpTrigger",props:{isDefaultOpen:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{y as C,P as a};