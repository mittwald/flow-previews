import{r,R as e}from"./index-BwDkhjyp.js";import{c as E}from"./clsx-B-dksMZM.js";import{P as I}from"./PropsContextProvider-DwTel3aB.js";import{d}from"./dynamic-DKDa4OpU.js";import{B as N}from"./Button-BTNOdvWu.js";import"./IconApp-BCpbdHgg.js";import{I as w}from"./IconWarning-zYrPFMer.js";import{M as y,P as C}from"./flowComponent-CbDEtdyo.js";import{A as P}from"./Activity-Cov3f-FH.js";const A="flow--accordion",B="flow--accordion--header",b="flow--accordion--header-button",g="flow--accordion--content",D="flow--accordion--content-inner",R="flow--accordion--chevron",_="flow--accordion--expanded",n={accordion:A,header:B,headerButton:b,content:g,contentInner:D,chevron:R,expanded:_},q=s=>{const{children:i,className:l,defaultExpanded:m=!1,...p}=s,[o,h]=r.useState(m),f=E(n.accordion,o&&n.expanded,l),u=r.useId(),c=r.useId(),a=t=>e.createElement(N,{unstyled:!0,"aria-expanded":o,className:n.headerButton,onPress:()=>h(v=>!v),"aria-controls":c},t,e.createElement(w,{className:n.chevron})),x={Content:{className:n.contentInner,tunnelId:"content"},Heading:{className:n.header,level:4,children:d(t=>a(t.children))},Label:{className:n.header,children:d(t=>a(t.children))}};return e.createElement("div",{...p,className:f},e.createElement(I,{mergeInParentContext:!0,props:x,dependencies:[o]},e.createElement(y,null,i,e.createElement("div",{"aria-labelledby":u,id:c,role:"region",hidden:!o,className:n.content},e.createElement(P,{isActive:o,inactiveDelay:1e3},e.createElement(C,{id:"content"}))))))};q.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};export{q as A};