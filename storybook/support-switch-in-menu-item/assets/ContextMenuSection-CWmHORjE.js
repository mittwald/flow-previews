import{R as t}from"./index-B-o1Wr-g.js";import{P as i}from"./PropsContextProvider-DWb7RnwM.js";import{f as l}from"./flowComponent-D6-TVbjo.js";import{A as o}from"./Action-B6EkMLeI.js";import{c as m,d as p}from"./Dialog-EQBJGkcZ.js";const u="flow--context-menu",x="flow--context-menu--section",f={contextMenu:u,section:x},g=e=>e==="navigation"?"none":e==="switch"?"multiple":e,C=e=>e==="single"||e==="multiple"?"control":e,b=e=>e==="single"||e==="navigation"?"ContextMenu":void 0,d=l("ContextMenuSection",e=>{const{children:r,selectionMode:n,...c}=e,s=C(n),a={Heading:{level:5,wrapWith:t.createElement(p,null)},MenuItem:{selectionVariant:s}};return t.createElement(m,{...c,selectionMode:g(n),className:f.section},t.createElement(i,{props:a,mergeInParentContext:!0},t.createElement(o,{skip:!0},t.createElement(o,{closeOverlay:b(n)},r))))});d.__docgenInfo={description:"",methods:[],displayName:"ContextMenuSection"};export{d as C,b as a,C as b,g,f as s};