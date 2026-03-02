import{j as a}from"./iframe-uf-MKLgq.js";import{A as s}from"./Avatar-B6gjtlZJ.js";import{a as i,I as p}from"./Initials-D67WRZzq.js";import{I as c}from"./Image-D_AFS5Pp.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{b as l}from"./IconWarning-BGOvrRAj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CR1nBuBt.js";import"./index-B7owIbBs.js";import"./index-CTOYeHPx.js";import"./AlertIcon-C9HYB2oh.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./context-DqOu6PGu.js";import"./index-BcxSEo57.js";import"./remote-7esdTMhw.js";const C={title:"Content/Avatar",component:s,render:r=>a.jsx(s,{...r,color:"teal",children:a.jsx(c,{alt:"Gopher",src:m.imageSrc})}),parameters:{controls:{exclude:["className"]}},args:{size:"m"},argTypes:{size:{control:"inline-radio",options:["s","m","l"]},color:{control:"inline-radio",options:i},status:{control:"inline-radio",options:["info","success","warning","danger"]}}},o={},e={render:r=>a.jsx(s,{...r,children:a.jsx(p,{children:"Max Mustermann"})})},t={render:r=>a.jsx(s,{...r,children:a.jsx(l,{})}),args:{color:"blue"}},n={render:r=>a.jsx(s,{...r}),args:{status:"danger"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
