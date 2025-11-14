import{j as e}from"./iframe-tJv_x5rY.js";import{H as o}from"./Heading-DBV7hltH.js";import{a2 as m}from"./IconWarning-3nJf9pka.js";import{S as c}from"./Section-C3zFkOR2.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BVSszHbm.js";import"./index-CMtXtWIZ.js";import"./index-zslH_nwp.js";import"./RSPContexts-B20KOh4s.js";import"./utils-CzbxkoY8.js";import"./context-B6V5mJe_.js";import"./Button-DANMsRvu.js";import"./ProgressBar-DMZ3QrgP.js";import"./Hidden-CHKvPT1V.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DzrJfCbv.js";import"./useFocusRing-Dd-6aCTP.js";import"./useFocusable-Cd_sv4rm.js";import"./Collection-avSZv3ZD.js";import"./CollectionBuilder-SdndXulF.js";import"./SelectionIndicator-tJZm1Uu-.js";import"./Separator-PZWkpAPz.js";import"./browser-TdwBVE6G.js";import"./useLocalizedStringFormatter-CiAHydpr.js";import"./useStatic-ChHmkVJf.js";import"./getActionGroupSlot-Bx9-2150.js";import"./dynamic-D0IhEVDX.js";const T={title:"Content/Heading",component:o,argTypes:{level:{control:"inline-radio",options:[1,2,3,4,5,6]},size:{control:"inline-radio",options:["xs","s","m","l","xl","xxl"]},color:{control:"inline-radio",options:["primary","dark","light"]}},args:{level:2},render:r=>e.jsxs(o,{...r,children:["I am a H",r.level," Heading"]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{}),"Personal Information"]})},s={args:{level:1,size:"xxl"},render:r=>e.jsxs(o,{level:1,size:"xxl",...r,children:[e.jsx(m,{}),"Personal Information"]})},t={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}},p={render:r=>e.jsxs(c,{children:[e.jsx(o,{...r,children:"Personal Information of the current user"}),e.jsx(o,{...r,wrap:"balance",children:"Personal Information of the current user"})]}),parameters:{viewport:{defaultViewport:"mobile2"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
