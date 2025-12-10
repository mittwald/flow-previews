import{j as e}from"./iframe-6jyXgxue.js";import{H as o}from"./Heading-CJE26UUg.js";import{a1 as m}from"./IconWarning-C-gwxPU9.js";import{S as c}from"./Section-H3gIqLfl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BY7KHLjg.js";import"./mergeRefs-DLi8bP-A.js";import"./index--zh6xbBg.js";import"./RSPContexts-B8t3YJD-.js";import"./utils-gjysgmBz.js";import"./remote-D3kJiMg-.js";import"./context-DHByHAd4.js";import"./Button-DvSQe7YO.js";import"./ProgressBar-BwsfQ2n1.js";import"./Hidden-DJLEoSnR.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-JQMt_ZQS.js";import"./useFocusRing-BAh6-13b.js";import"./useFocusable-CajPj44S.js";import"./Collection-D3_W2fei.js";import"./CollectionBuilder-CkuRVJqW.js";import"./SelectionIndicator-B4LTYmXz.js";import"./Separator-DRruZlSn.js";import"./browser-BMGdvove.js";import"./useLocalizedStringFormatter-BA1DAplF.js";import"./useStatic-D2icMmWp.js";import"./dynamic-DCXw5NHQ.js";const T={title:"Content/Heading",component:o,argTypes:{level:{control:"inline-radio",options:[1,2,3,4,5,6]},size:{control:"inline-radio",options:["xs","s","m","l","xl","xxl"]},color:{control:"inline-radio",options:["primary","dark","light"]}},args:{level:2},render:r=>e.jsxs(o,{...r,children:["I am a H",r.level," Heading"]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(m,{}),"Personal Information"]})},s={args:{level:1,size:"xxl"},render:r=>e.jsxs(o,{level:1,size:"xxl",...r,children:[e.jsx(m,{}),"Personal Information"]})},t={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}},p={render:r=>e.jsxs(c,{children:[e.jsx(o,{...r,children:"Personal Information of the current user"}),e.jsx(o,{...r,wrap:"balance",children:"Personal Information of the current user"})]}),parameters:{viewport:{defaultViewport:"mobile2"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
