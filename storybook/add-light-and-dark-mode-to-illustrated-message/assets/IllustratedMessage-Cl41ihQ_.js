import{R as s}from"./index-uCp2LrAq.js";import{c as a}from"./clsx-B-dksMZM.js";import{P as d}from"./PropsContextProvider-RdMO5ekw.js";const m="flow--illustrated-message--illustrated-message-container",g="flow--illustrated-message",u="flow--illustrated-message--icon",f="flow--illustrated-message--heading",p="flow--illustrated-message--text",h="flow--illustrated-message--button",v="flow--illustrated-message--negative",w="flow--illustrated-message--light",x="flow--illustrated-message--dark",e={illustratedMessageContainer:m,illustratedMessage:g,icon:u,heading:f,text:p,button:h,negative:v,light:w,dark:x},N=l=>{const{className:o,children:n,color:t="info",...i}=l,r=a(e.illustratedMessageContainer,o),c={Icon:{className:e.icon,size:"l"},Heading:{className:e.heading},Text:{className:e.text},Button:{className:e.button,color:t==="dark"||t==="light"?t:"accent"}};return s.createElement("div",{...i,className:r},s.createElement("div",{className:a(e.illustratedMessage,e[t])},s.createElement(d,{props:c},n)))};N.__docgenInfo={description:"",methods:[],displayName:"IllustratedMessage",props:{color:{required:!1,tsType:{name:"union",raw:'"info" | "negative" | "light" | "dark"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:'@default "info"'}},composes:["PropsWithChildren"]};export{N as I};