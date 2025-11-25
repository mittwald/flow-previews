import{j as a}from"./iframe-D6fHsxXv.js";import{A as s}from"./Avatar-BZa2aNzB.js";import{a as i,I as p}from"./Initials-CZzuu5uh.js";import{I as c}from"./Image-BE61ZkEV.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{b as l}from"./IconWarning-BQPhDOnw.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CyxS6jtd.js";import"./index-a9Z31mTH.js";import"./index-BN2jmjED.js";import"./AlertIcon-y7uDyP2w.js";import"./useLocalizedStringFormatter-CFiZqHkg.js";import"./context-DBHOSboP.js";const y={title:"Content/Avatar",component:s,render:r=>a.jsx(s,{...r,color:"teal",children:a.jsx(c,{alt:"Gopher",src:m.imageSrc})}),parameters:{controls:{exclude:["className"]}},args:{size:"m"},argTypes:{size:{control:"inline-radio",options:["s","m","l"]},color:{control:"inline-radio",options:i},status:{control:"inline-radio",options:["info","success","warning","danger"]}}},o={},e={render:r=>a.jsx(s,{...r,children:a.jsx(p,{children:"Max Mustermann"})})},t={render:r=>a.jsx(s,{...r,children:a.jsx(l,{})}),args:{color:"blue"}},n={render:r=>a.jsx(s,{...r}),args:{status:"danger"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const z=["Default","WithInitials","WithIcon","WithStatus"];export{o as Default,t as WithIcon,e as WithInitials,n as WithStatus,z as __namedExportsOrder,y as default};
