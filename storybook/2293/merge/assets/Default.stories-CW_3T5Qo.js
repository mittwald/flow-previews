import{j as r}from"./iframe-Dx38AIDT.js";import{L as d}from"./Label-lvpVoRBR.js";import{F as u}from"./FieldDescription-BTad89Yx.js";import{F as T}from"./FieldError-DY7Z21GR.js";import{T as i}from"./TimeField-BtQKeQ9L.js";import{L as l}from"./DateInput-BwCQf8QK.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BwBSRBJY.js";import"./index-B3w7UL3m.js";import"./index-C4zw0wF6.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./context-CRsgLXVa.js";import"./Label-CRhDhtUr.js";import"./utils-uxa8p5vl.js";import"./Hidden-fCjHF3ey.js";import"./Text-stRMORLN.js";import"./browser-Bgj4nWuI.js";import"./EmulatedBoldText-DkfYMVU4.js";import"./Text-CN5O_J5f.js";import"./FieldError-Cjk2dDkd.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BEiS7w5p.js";import"./AlertIcon-BbY5ij-p.js";import"./IconWarning-tem5fYZU.js";import"./remote-C7_Ru_dB.js";import"./useFieldComponent-CxTx8kf3.js";import"./Form-CwkZdzbX.js";import"./useLabel--5Xg4_7C.js";import"./Group-BjH18wko.js";import"./useFocusRing-XbCssGNL.js";import"./useFocus-C3KeEXKn.js";import"./Input-BQCGNTF8.js";import"./usePress-BU6JmZbW.js";import"./FocusScope-eq4FNALu.js";import"./useCollator-DTKHLM3i.js";import"./useFormReset-DiledHxM.js";import"./useFormValidation-Dn8WL8kF.js";import"./useEvent-D7Cb0aSH.js";import"./useSpinButton-6OGuYupa.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-tBdejWju.js";import"./useControlledState-BekZOXin.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,nr as __namedExportsOrder,mr as default};
