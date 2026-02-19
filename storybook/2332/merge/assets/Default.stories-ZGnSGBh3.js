import{j as a}from"./iframe-CDsKaBRg.js";import{A as s}from"./Avatar-C45hpV4c.js";import{a as i,I as p}from"./Initials-D-0n8ok3.js";import{I as c}from"./Image-BZjVQ4oT.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{b as l}from"./IconWarning-BO7Rp0Xm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./index-RjKRi-BV.js";import"./AlertIcon-BRHbbzl7.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./context-BPMj9VV_.js";import"./index-BcxSEo57.js";import"./remote-CceIEVln.js";const C={title:"Content/Avatar",component:s,render:r=>a.jsx(s,{...r,color:"teal",children:a.jsx(c,{alt:"Gopher",src:m.imageSrc})}),parameters:{controls:{exclude:["className"]}},args:{size:"m"},argTypes:{size:{control:"inline-radio",options:["s","m","l"]},color:{control:"inline-radio",options:i},status:{control:"inline-radio",options:["info","success","warning","danger"]}}},o={},e={render:r=>a.jsx(s,{...r,children:a.jsx(p,{children:"Max Mustermann"})})},t={render:r=>a.jsx(s,{...r,children:a.jsx(l,{})}),args:{color:"blue"}},n={render:r=>a.jsx(s,{...r}),args:{status:"danger"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <Avatar {...props}>
      <Initials>Max Mustermann</Initials>
    </Avatar>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <Avatar {...props}>
      <IconApp />
    </Avatar>,
  args: {
    color: "blue"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Avatar {...props} />,
  args: {
    status: "danger"
  }
}`,...n.parameters?.docs?.source}}};const D=["Default","WithInitials","WithIcon","WithStatus"];export{o as Default,t as WithIcon,e as WithInitials,n as WithStatus,D as __namedExportsOrder,C as default};
