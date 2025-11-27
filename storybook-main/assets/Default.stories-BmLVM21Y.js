import{j as e}from"./iframe-CAXopRTx.js";import{H as o}from"./Heading-kGKtBlX4.js";import{a2 as m}from"./IconWarning-CZAvow1a.js";import{S as c}from"./Section-DhxlZfa0.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BV-EFtmJ.js";import"./mergeRefs-C_4KEy1o.js";import"./index-9z8TnNhf.js";import"./RSPContexts-BuWbS9Uz.js";import"./utils-Dzmr5ZRW.js";import"./context-B6djjyHK.js";import"./Button-Chz2mIUC.js";import"./ProgressBar-Dw7oROZh.js";import"./Hidden-DOod4g1Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-NOf08-wC.js";import"./useFocusRing-DTLGJlTA.js";import"./useFocusable-CGAuhRwL.js";import"./Collection-Bc328CGA.js";import"./CollectionBuilder-TpkYGVLd.js";import"./SelectionIndicator-dypojMNo.js";import"./Separator-BMVIHcHI.js";import"./browser-Byp0bOe_.js";import"./useLocalizedStringFormatter-0XeO7SJn.js";import"./useStatic-B1gRKxid.js";import"./dynamic-D21vqi9G.js";const R={title:"Content/Heading",component:o,argTypes:{level:{control:"inline-radio",options:[1,2,3,4,5,6]},size:{control:"inline-radio",options:["xs","s","m","l","xl","xxl"]},color:{control:"inline-radio",options:["primary","dark","light"]}},args:{level:2},render:r=>e.jsxs(o,{...r,children:["I am a H",r.level," Heading"]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{}),"Personal Information"]})},s={args:{level:1,size:"xxl"},render:r=>e.jsxs(o,{level:1,size:"xxl",...r,children:[e.jsx(m,{}),"Personal Information"]})},t={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}},p={render:r=>e.jsxs(c,{children:[e.jsx(o,{...r,children:"Personal Information of the current user"}),e.jsx(o,{...r,wrap:"balance",children:"Personal Information of the current user"})]}),parameters:{viewport:{defaultViewport:"mobile2"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const T=["Default","WithIcon","WithCustomSize","Dark","Light","Wrap"];export{t as Dark,n as Default,i as Light,s as WithCustomSize,a as WithIcon,p as Wrap,T as __namedExportsOrder,R as default};
