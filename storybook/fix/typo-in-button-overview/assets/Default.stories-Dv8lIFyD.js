import{R as e}from"./index-BwDkhjyp.js";import{P as g}from"./PopoverTrigger-BXqZhBbM.js";import{P as s}from"./PropsContextProvider-DwTel3aB.js";import{f as C}from"./flowComponent-CbDEtdyo.js";import{u as H,c as E,$ as y}from"./OverlayTrigger-DBKZn7pn.js";import"./IconApp-BCpbdHgg.js";import{k as h}from"./IconWarning-zYrPFMer.js";import{a as T}from"./useLocalizedStringFormatter-BNeRQeib.js";import{H as v}from"./Heading-rdQzPY0C.js";import{T as I}from"./Text-Bxhza4fE.js";import{L as P}from"./Link-CxIxKcVL.js";import{B as b}from"./Button-BTNOdvWu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./OverlayArrow-74RQSP_w.js";import"./useFocusable-CKMlalor.js";import"./index-DVe9vSxq.js";import"./utils-B-mS0hjG.js";import"./index-B8XB3FuZ.js";import"./number-nHrFdSb-.js";import"./useControlledState-C0C-dzuH.js";import"./RSPContexts-Bc9pl35m.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-YR3pmEr9.js";import"./FocusScope-DW-lXgh3.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-BSWHffzG.js";import"./context-Bn5j6nR1.js";import"./useSelector-J4AjFox4.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./Text-C_suByGF.js";import"./LoadingSpinner-CdrecLs9.js";import"./Button-BTMfZQLF.js";const w="flow--contextual-help",$={contextualHelp:w},l=C("ContextualHelp",t=>{const{children:r,controller:n,refProp:u,...a}=t,f=H("ContextualHelp",{reuseControllerFromContext:!0}),d=n??f,x={Heading:{level:5}};return e.createElement(g,{withTip:!0,...a,controller:d},e.createElement(s,{props:x},e.createElement("div",{className:$.contextualHelp},r)))});l.__docgenInfo={description:"",methods:[],displayName:"ContextualHelp"};const B={"de-DE":{"contextualHelpButton.moreInformation":"Weitere Informationen"},"en-EN":{"contextualHelpButton.moreInformation":"More information"}},c=t=>{const{children:r,...n}=t,a={Button:{"aria-label":T(B).format("contextualHelpButton.moreInformation"),children:e.createElement(h,null),size:"s",variant:"plain"}};return e.createElement(E,{overlayType:"ContextualHelp",...n,component:y},e.createElement(s,{props:a,mergeInParentContext:!0},r))};c.__docgenInfo={description:"",methods:[],displayName:"ContextualHelpTrigger",props:{isDefaultOpen:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ce={title:"Overlays/ContextualHelp",component:l,render:t=>e.createElement(c,null,e.createElement(b,null),e.createElement(l,{...t},e.createElement(v,null,"Rights & roles"),e.createElement(I,null,"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."),e.createElement(P,null,"Learn more")))},o={};var m,p,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const ue=["Default"];export{o as Default,ue as __namedExportsOrder,ce as default};