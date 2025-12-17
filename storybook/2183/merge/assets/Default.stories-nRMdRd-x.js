import{j as o}from"./iframe-8dFSbqJz.js";import{A as a}from"./Avatar-BYNJUQbD.js";import{a as i,I as p}from"./Initials-CxVsgTk9.js";import{I as m}from"./Image-CDwR9hgk.js";import{d as c}from"./dummyText-CX_I_Wpl.js";import{I as l}from"./IconChevronDown-BoB9X9Lx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-K_HgwY7e.js";import"./index-DdTsJ3wf.js";import"./index-QKd42-im.js";import"./AlertIcon-D6jSKrgT.js";import"./IconDanger-D2WM-UH7.js";import"./IconInfo-DGcA2CWR.js";import"./IconCircleCheck-CcXE8MCq.js";import"./useLocalizedStringFormatter-YU3aOu6y.js";import"./context-81xqWZ8H.js";import"./index-SBtdq8jY.js";import"./remote-D1_oWH-e.js";const T={title:"Content/Avatar",component:a,render:r=>o.jsx(a,{...r,color:"teal",children:o.jsx(m,{alt:"Gopher",src:c.imageSrc})}),parameters:{controls:{exclude:["className"]}},args:{size:"m"},argTypes:{size:{control:"inline-radio",options:["s","m","l"]},color:{control:"inline-radio",options:i},status:{control:"inline-radio",options:["info","success","warning","danger"]}}},s={},e={render:r=>o.jsx(a,{...r,children:o.jsx(p,{children:"Max Mustermann"})})},t={render:r=>o.jsx(a,{...r,children:o.jsx(l,{})}),args:{color:"blue"}},n={render:r=>o.jsx(a,{...r}),args:{status:"danger"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const _=["Default","WithInitials","WithIcon","WithStatus"];export{s as Default,t as WithIcon,e as WithInitials,n as WithStatus,_ as __namedExportsOrder,T as default};
