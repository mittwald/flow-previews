import{r as a,R as n}from"./index-B-o1Wr-g.js";import{c as I}from"./clsx-B-dksMZM.js";import{P as w}from"./PropsContextProvider-BHq6Fnml.js";import{d}from"./dynamic-DKDa4OpU.js";import{B as y}from"./Button-yJDb9wt-.js";import"./IconApp--rto3B0B.js";import{a as N}from"./IconWarning--ZE28x2f.js";import{P as C,O as P}from"./flowComponent-SXQnFwcy.js";import{A as b}from"./Activity-BWfzpBOU.js";const A="flow--accordion",B="flow--accordion--header",g="flow--accordion--header-button",T="flow--accordion--content",q="flow--accordion--content-inner",D="flow--accordion--chevron",R="flow--accordion--outline",W="flow--accordion--expanded",e={accordion:A,header:B,headerButton:g,content:T,contentInner:q,chevron:D,outline:R,expanded:W},_=s=>{const{children:i,className:l,defaultExpanded:m=!1,variant:p="default",...u}=s,[t,h]=a.useState(m),f=I(e.accordion,t&&e.expanded,l,p==="outline"&&e.outline),v=a.useId(),r=a.useId(),c=o=>n.createElement(y,{unstyled:!0,"aria-expanded":t,className:e.headerButton,onPress:()=>h(E=>!E),"aria-controls":r},o,n.createElement(N,{className:e.chevron})),x={Content:{className:e.contentInner,tunnelId:"content"},Heading:{className:e.header,level:4,children:d(o=>c(o.children))},Label:{className:e.header,children:d(o=>c(o.children))}};return n.createElement("div",{...u,className:f},n.createElement(w,{mergeInParentContext:!0,props:x,dependencies:[t]},n.createElement(C,null,i,n.createElement("div",{"aria-labelledby":v,id:r,role:"region",hidden:!t,className:e.content},n.createElement(b,{isActive:t,inactiveDelay:1e3},n.createElement(P,{id:"content"}))))))};_.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"Whether the accordion should be initially expanded."},variant:{required:!1,tsType:{name:"union",raw:'"default" | "outline"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"outline"'}]},description:'The visual variant of the accordion. @default "default"'}},composes:["PropsWithChildren"]};export{_ as A};