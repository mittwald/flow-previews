import{R as o}from"./index-Cs7sjTYM.js";import{P as G}from"./PropsContextProvider-DXo7lD_U.js";import{d as n}from"./dynamic-DKDa4OpU.js";import{c as e}from"./clsx-B-dksMZM.js";import{f as w,P as y}from"./flowComponent-Bg40pdZw.js";import{a as C,g as a}from"./Action-DLOMrx6Q.js";const N="flow--action-group",P="flow--action-group--primary",x="flow--action-group--secondary",A="flow--action-group--abort",k="flow--action-group--action-group-container",B="flow--action-group--ignore-breakpoint",E="flow--action-group--s",b="flow--action-group--m",t={actionGroup:N,primary:P,secondary:x,abort:A,actionGroupContainer:k,ignoreBreakpoint:B,s:E,m:b},v=w("ActionGroup",c=>{const{children:i,className:s,refProp:p,ignoreBreakpoint:m,spacing:l="s",...u}=c,g=e(t.actionGroupContainer,s,m&&t.ignoreBreakpoint,t[l]),f={Button:{slot:n(r=>a(r)),className:n(r=>{const d=a(r);return e(r.className,t[d])})}};return o.createElement(C,null,o.createElement(G,{props:f,mergeInParentContext:!0},o.createElement(y,null,o.createElement("div",{...u,className:g,ref:p},o.createElement("div",{className:t.actionGroup,role:"group"},i)))))});v.__docgenInfo={description:"",methods:[],displayName:"ActionGroup"};export{v as A};