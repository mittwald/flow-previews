import{j as r}from"./iframe-Dcjk2TLd.js";import{L as d}from"./Label-BZxLRpn6.js";import{F as u}from"./FieldDescription-DaAB6M4B.js";import{F as T}from"./FieldError-CGpcN3PS.js";import{T as i}from"./TimeField-wpeHbMHY.js";import{L as l}from"./DateInput-BTAglyMA.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DUQvMGjf.js";import"./index-j2LaL0Dv.js";import"./index-DmOV_yi6.js";import"./useLocalizedStringFormatter-DSXGmj0V.js";import"./context-pAIzfbng.js";import"./Label-BZUq_rhq.js";import"./utils-C4npX7la.js";import"./Hidden-CKziqW6n.js";import"./Text-lyGbob8n.js";import"./browser-B8c1tkp7.js";import"./EmulatedBoldText-CjCUgZSU.js";import"./Text-zDtUk3hp.js";import"./FieldError-B9deYV15.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-PsTvKuCL.js";import"./AlertIcon-CZw-AcP9.js";import"./IconWarning-4NWKkNon.js";import"./remote-B1sU4u7F.js";import"./useFieldComponent-1tG_hIZF.js";import"./Form-C7OLtkZq.js";import"./useLabel-CKc5oqWD.js";import"./Group-BuqfBy6e.js";import"./useFocusRing-HFiDNYir.js";import"./useFocus-B7gP7G3p.js";import"./Input-DoIljc-M.js";import"./usePress-CbiP5Rr9.js";import"./useFormValidation-ny_bco9C.js";import"./useControlledState-DBXDF7mL.js";import"./FocusScope-CNP9Koh8.js";import"./useCollator-CvofTPx7.js";import"./useFormReset-DcYsnWfg.js";import"./useEvent-jxPbXkhM.js";import"./useSpinButton-SrOqzVxC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DzRfMUiQ.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
