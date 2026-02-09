import{j as r}from"./iframe-BTP_Z9Sf.js";import{L as d}from"./Label-Cu7NRaqa.js";import{F as u}from"./FieldDescription-DPC9D0sU.js";import{F as T}from"./FieldError-DnUQcxCL.js";import{T as i}from"./TimeField-BmKOZiqX.js";import{L as l}from"./DateInput-CDRr0tGu.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./index-E_qagHnK.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./context-BBaC2IfM.js";import"./Label-PTTOxDPw.js";import"./utils-DP1LA6WE.js";import"./Hidden-7cYXeHtZ.js";import"./Text-Cq5MQ8wu.js";import"./browser-eyJ8FPIK.js";import"./EmulatedBoldText-BkuV9i5t.js";import"./Text-CZ1YR4oj.js";import"./FieldError-BvNBTK6b.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CSpjF2dw.js";import"./AlertIcon-BLTDYNdz.js";import"./IconWarning-CwZb39At.js";import"./remote-BmAp8UvO.js";import"./useFieldComponent-Da-vFXDP.js";import"./Form-BB65cxFE.js";import"./useLabel-Cpmi3JfU.js";import"./Group-D6HmZmNZ.js";import"./useFocusRing-CQvdF7rp.js";import"./useFocus-BU1lOliM.js";import"./Input-Cgr_O3PE.js";import"./usePress-BnZLj0Nc.js";import"./useFormValidation-HNZmieSP.js";import"./useControlledState-B5h2rUtG.js";import"./FocusScope-B2nLTMyD.js";import"./useCollator-BHL0tWyU.js";import"./useFormReset-Bo1Ib9da.js";import"./useEvent-C591_3g7.js";import"./useSpinButton-CXBBJo97.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-dvQucgHZ.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
