import{R as e,r as u}from"./index-Cs7sjTYM.js";import{c as x}from"./clsx-B-dksMZM.js";import{P as s}from"./PropsContextProvider-58HgA8rU.js";import{f as c}from"./flowComponent-CmFvo3FE.js";import{A as C}from"./Activity-CPnWONG0.js";import{s as S}from"./ContextMenu.module-68N5lvfm.js";import{a as E}from"./Collection-BEvGW34q.js";import{$}from"./Header-Dl17m4NE.js";const g="flow--section",h={section:g},a=c("ContextMenuSection",o=>{const{children:t}=o,n={Heading:{level:5,wrapWith:e.createElement($,null)}};return e.createElement(E,{className:S.section},e.createElement(s,{props:n,mergeInParentContext:!0},t))});a.__docgenInfo={description:"",methods:[],displayName:"ContextMenuSection"};const y=c("Section",o=>{const{children:t,className:n,isActive:i=!0,refProp:m,renderContextMenuSection:l,...p}=o;if(!t)return null;if(l)return e.createElement(a,null,t);const d=x(h.section,n),r=u.useId(),f={Heading:{level:2,id:r},Header:{renderSectionHeader:!0},List:{"aria-labelledby":r}};return e.createElement(C,{isActive:i},e.createElement("section",{...p,className:d,ref:m},e.createElement(s,{props:f,mergeInParentContext:!0},t)))});y.__docgenInfo={description:"",methods:[],displayName:"Section"};export{y as S};