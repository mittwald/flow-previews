import{j as o}from"./iframe-Be6XOKZ5.js";import{A as a}from"./Avatar-6sQ1gpEn.js";import{a as i,I as p}from"./Initials-u4rjRljv.js";import{I as m}from"./Image-BANxqXqz.js";import{d as c}from"./dummyText-CX_I_Wpl.js";import{I as l}from"./IconApp-BnAy9RaD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-6mfYofmL.js";import"./index-BVQeIHXT.js";import"./index-Dwi0F_ix.js";import"./AlertIcon-B6EZCv4Q.js";import"./IconDanger-CuHxVEgS.js";import"./IconInfo-MQJ-9pLD.js";import"./IconCircleCheck-DAuQ3uMG.js";import"./useLocalizedStringFormatter-D98CS6hT.js";import"./context-Y40TL0Hk.js";import"./index-SBtdq8jY.js";import"./remote-D-Pq4nVM.js";const T={title:"Content/Avatar",component:a,render:r=>o.jsx(a,{...r,color:"teal",children:o.jsx(m,{alt:"Gopher",src:c.imageSrc})}),parameters:{controls:{exclude:["className"]}},args:{size:"m"},argTypes:{size:{control:"inline-radio",options:["s","m","l"]},color:{control:"inline-radio",options:i},status:{control:"inline-radio",options:["info","success","warning","danger"]}}},s={},e={render:r=>o.jsx(a,{...r,children:o.jsx(p,{children:"Max Mustermann"})})},t={render:r=>o.jsx(a,{...r,children:o.jsx(l,{})}),args:{color:"blue"}},n={render:r=>o.jsx(a,{...r}),args:{status:"danger"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
