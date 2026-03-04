import{j as s}from"./iframe-CBpAxFwW.js";import{A as e}from"./Avatar-COhgiUOT.js";import{a as c,I as p}from"./Initials-Bd2-yJ9a.js";import{I as i}from"./Image-D_Ho8Rvj.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{b as l}from"./IconWarning-gYJb7yiz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./index-RPWHkLuG.js";import"./AlertIcon-DpBhbRLN.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./index-BcxSEo57.js";import"./remote-Bqh6MTep.js";const C={title:"Content/Avatar",component:e,render:r=>s.jsx(e,{...r,color:"teal",children:s.jsx(i,{alt:"Gopher",src:m.imageSrc})}),parameters:{controls:{exclude:["className"]}},args:{size:"m"},argTypes:{size:{control:"inline-radio",options:["xs","s","m","l"]},color:{control:"inline-radio",options:c},status:{control:"inline-radio",options:["info","success","warning","danger"]}}},o={parameters:{controls:{exclude:["color","status"]}}},a={parameters:{controls:{exclude:["status"]}},render:r=>s.jsx(e,{...r,children:s.jsx(p,{children:"Max Mustermann"})})},t={parameters:{controls:{exclude:["status"]}},render:r=>s.jsx(e,{...r,children:s.jsx(l,{})}),args:{color:"blue"}},n={parameters:{controls:{exclude:["color"]}},render:r=>s.jsx(e,{...r}),args:{status:"danger"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["color", "status"]
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["status"]
    }
  },
  render: props => <Avatar {...props}>
      <Initials>Max Mustermann</Initials>
    </Avatar>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["status"]
    }
  },
  render: props => <Avatar {...props}>
      <IconApp />
    </Avatar>,
  args: {
    color: "blue"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["color"]
    }
  },
  render: props => <Avatar {...props} />,
  args: {
    status: "danger"
  }
}`,...n.parameters?.docs?.source}}};const D=["Default","WithInitials","WithIcon","WithStatus"];export{o as Default,t as WithIcon,a as WithInitials,n as WithStatus,D as __namedExportsOrder,C as default};
