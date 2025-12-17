import{j as o}from"./iframe-UtMdsYXa.js";import{A as a}from"./Avatar-BvgBtDKt.js";import{a as i,I as p}from"./Initials-B7AlO1zK.js";import{I as m}from"./Image-CFlhUbtf.js";import{d as c}from"./dummyText-CX_I_Wpl.js";import{I as l}from"./IconChevronDown-DitnVNWB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CF2d_4jg.js";import"./index-CpvR74kY.js";import"./index-BrcrHHEG.js";import"./AlertIcon-C4nu2c3d.js";import"./IconDanger-hxBcn6Cd.js";import"./IconInfo-B6FISfBK.js";import"./IconCircleCheck-BLmj5fCP.js";import"./useLocalizedStringFormatter-BRizf_XS.js";import"./context-BpPaGDcf.js";import"./index-SBtdq8jY.js";import"./remote-YAokn8An.js";const T={title:"Content/Avatar",component:a,render:r=>o.jsx(a,{...r,color:"teal",children:o.jsx(m,{alt:"Gopher",src:c.imageSrc})}),parameters:{controls:{exclude:["className"]}},args:{size:"m"},argTypes:{size:{control:"inline-radio",options:["s","m","l"]},color:{control:"inline-radio",options:i},status:{control:"inline-radio",options:["info","success","warning","danger"]}}},s={},e={render:r=>o.jsx(a,{...r,children:o.jsx(p,{children:"Max Mustermann"})})},t={render:r=>o.jsx(a,{...r,children:o.jsx(l,{})}),args:{color:"blue"}},n={render:r=>o.jsx(a,{...r}),args:{status:"danger"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
