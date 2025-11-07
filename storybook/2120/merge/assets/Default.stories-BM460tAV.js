import{j as a}from"./iframe-BD-_0iQW.js";import{A as s}from"./Avatar-ptAthZyD.js";import{a as i,I as p}from"./Initials-sAJyyrQ_.js";import{I as c}from"./Image-wyVjZedI.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{b as l}from"./IconWarning-COe6pc-P.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-AqaE2XDS.js";import"./index-BxlzE1r4.js";import"./index-CwlJevdL.js";import"./AlertIcon-C-1FhtD4.js";import"./useLocalizedStringFormatter-DhlRMC09.js";import"./context-CVtdtufW.js";import"./react-children-utilities-CYfepbhx.js";const z={title:"Content/Avatar",component:s,render:r=>a.jsx(s,{...r,color:"teal",children:a.jsx(c,{alt:"Gopher",src:m.imageSrc})}),parameters:{controls:{exclude:["className"]}},args:{size:"m"},argTypes:{size:{control:"inline-radio",options:["s","m","l"]},color:{control:"inline-radio",options:i},status:{control:"inline-radio",options:["info","success","warning","danger"]}}},o={},e={render:r=>a.jsx(s,{...r,children:a.jsx(p,{children:"Max Mustermann"})})},t={render:r=>a.jsx(s,{...r,children:a.jsx(l,{})}),args:{color:"blue"}},n={render:r=>a.jsx(s,{...r}),args:{status:"danger"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const C=["Default","WithInitials","WithIcon","WithStatus"];export{o as Default,t as WithIcon,e as WithInitials,n as WithStatus,C as __namedExportsOrder,z as default};
