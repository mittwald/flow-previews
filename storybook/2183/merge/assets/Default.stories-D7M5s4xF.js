import{j as r}from"./iframe-ChZoSAk9.js";import{L as d}from"./Label-BtQBKk3e.js";import{F as u}from"./FieldDescription-C8pMBaks.js";import{F as T}from"./FieldError-D0FcbU4f.js";import{T as i}from"./TimeField-MoeLsKS6.js";import{K as l}from"./DateInput-Bma6s7QB.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CTDVwaga.js";import"./index-DWAP1jQp.js";import"./index-0x3bxhbi.js";import"./useLocalizedStringFormatter-D3af8G-N.js";import"./context-CKHtHj1o.js";import"./Label-8-s2XGsR.js";import"./utils-3orXHcy8.js";import"./Hidden-BToicrtl.js";import"./Text-DeId_uwd.js";import"./browser-B8p5n3S3.js";import"./EmulatedBoldText-D79YiaqZ.js";import"./Text-DWCX6muZ.js";import"./FieldError-krJUZi9_.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconApp-jg62nbZM.js";import"./remote-CMT6q-r_.js";import"./IconDanger-bNuP_yaN.js";import"./useFieldComponent-CTbZHLtq.js";import"./Form-DiR4hcFZ.js";import"./useLabel-DwTIrFfL.js";import"./Group-BO5rtvFF.js";import"./useFocusRing-sg_VmrXT.js";import"./useFocus-BEqWk0b2.js";import"./Input-C1UIQQj8.js";import"./usePress-BEbKEOpz.js";import"./useFormValidation-DrPCugNK.js";import"./useControlledState-CXwLHBKW.js";import"./FocusScope-DTg-yLmD.js";import"./useCollator-DVwfKBY9.js";import"./useFormReset-DlW87ulD.js";import"./useEvent-D5qx-uIw.js";import"./useSpinButton-BQexWXlG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DrD33rv5.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...c.parameters?.docs?.source}}};const mr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,mr as __namedExportsOrder,tr as default};
