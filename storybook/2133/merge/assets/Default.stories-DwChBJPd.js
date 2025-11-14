import{j as e}from"./iframe-DxjJvypA.js";import{H as o}from"./Heading-BRsOw7TR.js";import{a2 as m}from"./IconWarning-BlszW1tj.js";import{S as c}from"./Section-B6nN9o_0.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DUeX89k8.js";import"./index-183dggCm.js";import"./index-12LB0401.js";import"./RSPContexts-BduYfYam.js";import"./utils-6KDkR0i-.js";import"./context-CTfXc2Zo.js";import"./Button-nEfrx5gJ.js";import"./ProgressBar-5owblEDR.js";import"./Hidden-r4JGJoQA.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-IWHzWN32.js";import"./useFocusRing-DXxhUawj.js";import"./useFocusable-BcokvUUD.js";import"./Collection-_X54BM7-.js";import"./CollectionBuilder-Bm_NDCjy.js";import"./SelectionIndicator-CSBpDXmM.js";import"./Separator-DoMs1cQk.js";import"./browser-CB6HLjfz.js";import"./useLocalizedStringFormatter-B-C4j2VW.js";import"./useStatic-iE5J9zsV.js";import"./getActionGroupSlot-DvyUR_ym.js";import"./dynamic-BdL6WG8t.js";const T={title:"Content/Heading",component:o,argTypes:{level:{control:"inline-radio",options:[1,2,3,4,5,6]},size:{control:"inline-radio",options:["xs","s","m","l","xl","xxl"]},color:{control:"inline-radio",options:["primary","dark","light"]}},args:{level:2},render:r=>e.jsxs(o,{...r,children:["I am a H",r.level," Heading"]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{}),"Personal Information"]})},s={args:{level:1,size:"xxl"},render:r=>e.jsxs(o,{level:1,size:"xxl",...r,children:[e.jsx(m,{}),"Personal Information"]})},t={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}},p={render:r=>e.jsxs(c,{children:[e.jsx(o,{...r,children:"Personal Information of the current user"}),e.jsx(o,{...r,wrap:"balance",children:"Personal Information of the current user"})]}),parameters:{viewport:{defaultViewport:"mobile2"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      Personal Information
    </Heading>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    size: "xxl"
  },
  render: props => <Heading level={1} size="xxl" {...props}>
      <IconMember />
      Personal Information
    </Heading>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <Section>
      <Heading {...props}>Personal Information of the current user</Heading>
      <Heading {...props} wrap="balance">
        Personal Information of the current user
      </Heading>
    </Section>,
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  }
}`,...p.parameters?.docs?.source}}};const q=["Default","WithIcon","WithCustomSize","Dark","Light","Wrap"];export{t as Dark,n as Default,i as Light,s as WithCustomSize,a as WithIcon,p as Wrap,q as __namedExportsOrder,T as default};
