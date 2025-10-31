import{j as e}from"./iframe-C__sNFq5.js";import{H as o}from"./Heading-Cn6OX0c5.js";import{a2 as m}from"./IconWarning-BuzGzrbs.js";import{S as c}from"./Section-DnBUHG3h.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-0GXkR_Ju.js";import"./index-DiaLXgZW.js";import"./index-BmGDZeJ3.js";import"./RSPContexts-BMxPkdv6.js";import"./utils-Dqy6LFYQ.js";import"./Action-Df161gDF.js";import"./context-BsIjwuj0.js";import"./useStatic-DMsmAY9f.js";import"./browser-iGgi6T92.js";import"./getActionGroupSlot-BDjKjWbN.js";import"./dynamic-Bb5SDKXs.js";import"./Dialog-CzLU07Qv.js";import"./Button-B_7NxfoI.js";import"./ProgressBar-DtGgBXAS.js";import"./Hidden-BiQxXG9U.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CMi9l8Yg.js";import"./useFocusRing-BuunXMoE.js";import"./useFocusable-Dse99QZ8.js";import"./OverlayArrow-DhgMASFr.js";import"./useControlledState-2e7yt8gr.js";import"./Collection-Dh0ESm_f.js";import"./CollectionBuilder-ukVkSTyS.js";import"./SelectionIndicator-Cki_l3jq.js";import"./Separator-D0XClCWV.js";import"./useLocalizedStringFormatter-BUptx6fZ.js";const F={title:"Content/Heading",component:o,argTypes:{level:{control:"inline-radio",options:[1,2,3,4,5,6]},size:{control:"inline-radio",options:["xs","s","m","l","xl","xxl"]},color:{control:"inline-radio",options:["primary","dark","light"]}},args:{level:2},render:r=>e.jsxs(o,{...r,children:["I am a H",r.level," Heading"]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{}),"Personal Information"]})},s={args:{level:1,size:"xxl"},render:r=>e.jsxs(o,{level:1,size:"xxl",...r,children:[e.jsx(m,{}),"Personal Information"]})},t={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}},p={render:r=>e.jsxs(c,{children:[e.jsx(o,{...r,children:"Personal Information of the current user"}),e.jsx(o,{...r,wrap:"balance",children:"Personal Information of the current user"})]}),parameters:{viewport:{defaultViewport:"mobile2"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const G=["Default","WithIcon","WithCustomSize","Dark","Light","Wrap"];export{t as Dark,n as Default,i as Light,s as WithCustomSize,a as WithIcon,p as Wrap,G as __namedExportsOrder,F as default};
