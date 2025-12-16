import{j as r}from"./iframe-m11uA8ph.js";import{T as v}from"./Text-C8eG2T-4.js";import{H as S}from"./Heading-B1gnURmx.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BWpYHXve.js";import"./index-bz12lFZh.js";import"./clsx-B-dksMZM.js";import"./index-Cy6hiSze.js";import"./browser-BsJUI2_B.js";import"./EmulatedBoldText-Dm9yhtB7.js";import"./Text-CHaozABk.js";import"./utils-B2Atf1IZ.js";import"./Heading-C-dZ-n10.js";import"./RSPContexts-CBB4rOO8.js";const x="flow--color--blue",b="flow--color--violet",h="flow--color--teal",y="flow--color--lilac",j="flow--color--danger",H="flow--color--warning",T="flow--color--success",F="flow--color--info",I={blue:x,violet:b,teal:h,lilac:y,danger:j,warning:H,success:T,info:F},L=["blue","violet","teal","lilac","danger","warning","info","success"];function D(o){return typeof o=="string"&&L.includes(o)}const d=o=>{const{children:g,color:u="blue"}=o,f=D(u),w=f?I[u]:void 0,C=f?void 0:{color:u};return r.jsx("span",{className:w,style:C,children:g})};d.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"Color",props:{color:{required:!1,tsType:{name:"union",raw:"FlowColor | (string & {})",elements:[{name:"unknown[number]",raw:"(typeof flowColors)[number]"},{name:"unknown"}]},description:'The color of the element. @default "blue"'}},composes:["PropsWithChildren"]};const J={title:"Content/Color",component:d,args:{color:"blue"},render:o=>r.jsxs(v,{children:["Lorem ipsum dolor ",r.jsx(d,{...o,children:"sit amet consectetur"})," ","adipisicing elit."]})},e={},s={args:{color:"violet"}},a={args:{color:"lilac"}},n={args:{color:"teal"}},c={args:{color:"danger"}},t={args:{color:"warning"}},l={args:{color:"info"}},i={args:{color:"success"}},m={args:{color:"#0fdf00"}},p={args:{color:"violet"},render:o=>r.jsxs(S,{children:["Lorem ipsum dolor ",r.jsx(d,{...o,children:"sit amet consectetur"})," ","adipisicing elit."]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    color: "violet"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: "lilac"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "teal"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: "danger"
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: "warning"
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: "info"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "success"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: "#0fdf00"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: "violet"
  },
  render: props => <Heading>
      Lorem ipsum dolor <Color {...props}>sit amet consectetur</Color>{" "}
      adipisicing elit.
    </Heading>
}`,...p.parameters?.docs?.source}}};const K=["Default","violet","Lilac","Teal","Danger","Warning","Info","Success","Custom","InHeading"];export{m as Custom,c as Danger,e as Default,p as InHeading,l as Info,a as Lilac,i as Success,n as Teal,t as Warning,K as __namedExportsOrder,J as default,s as violet};
