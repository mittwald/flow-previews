import{j as r}from"./iframe-BpfR1GYm.js";import{L as d}from"./Label-DS3YgAXJ.js";import{F as u}from"./FieldDescription-BIvCG2uM.js";import{F as T}from"./FieldError-CXRDkScB.js";import{T as i}from"./TimeField-BUGwM2G0.js";import{L as l}from"./DateInput-CK9jxQpR.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-qov8JTe3.js";import"./index-SWV2Jto_.js";import"./index-BNT5TWiv.js";import"./useLocalizedStringFormatter-BHDvTpyt.js";import"./context-BQnsf3fS.js";import"./Label-TUuaFaku.js";import"./utils-z0hzRCNL.js";import"./Hidden-DWXiMutX.js";import"./Text-jE0jlBS1.js";import"./browser-CJuVe1n5.js";import"./EmulatedBoldText-Ba7yrIZA.js";import"./Text-DujklUHl.js";import"./FieldError-DbjIiGK3.js";import"./filterDOMProps-i7L6S0l1.js";import"./InlineAlert-Dumml4W9.js";import"./AlertIcon-BPm48GUQ.js";import"./IconWarning-BOf1a1NO.js";import"./remote-Cr2dkfGH.js";import"./useFieldComponent-DI1dsoTY.js";import"./Form-Dn5OdnSf.js";import"./useLabel-oNP935J_.js";import"./Group-Id9jy-Co.js";import"./useFocusRing-lHZkZ90J.js";import"./useFocus-ZHbPEGRJ.js";import"./Input-By9tEQCu.js";import"./usePress-VEcsoWoE.js";import"./useFormValidation-DJqpOl9D.js";import"./useControlledState-Bs2ReOE0.js";import"./FocusScope--j43gSQ5.js";import"./useCollator-C5z3r8b8.js";import"./useFormReset-LNCZiIDy.js";import"./useEvent-DNbaaWG3.js";import"./useSpinButton-DBFj5Swo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-aUw8_B0X.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
