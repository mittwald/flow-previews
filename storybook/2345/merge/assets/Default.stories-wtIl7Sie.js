import{j as r}from"./iframe-CAK8FS83.js";import{L as d}from"./Label-B8vv94Ak.js";import{F as u}from"./FieldDescription-1ru89KYu.js";import{F as T}from"./FieldError-Ijqs7ZUi.js";import{T as i}from"./TimeField-cselSZCE.js";import{L as l}from"./DateInput-DHud9xO2.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWp16SNy.js";import"./index-GWEfEQw2.js";import"./index-CbMMdC0j.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./context-Cva5eEgc.js";import"./Label-f9ALmkld.js";import"./utils-th26LVD6.js";import"./Hidden-Dit-znYS.js";import"./Text-DLuRhlhH.js";import"./browser-Bqr1AXz8.js";import"./EmulatedBoldText-C97iA6m9.js";import"./Text-BoinRLOA.js";import"./FieldError-W7aOon2A.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-B2BWCbW6.js";import"./AlertIcon-DLSo9NlW.js";import"./IconWarning-EFpx-Gs1.js";import"./remote-BiZ00o_J.js";import"./useFieldComponent-DkAI1nDB.js";import"./Form-CCLCpM-d.js";import"./useLabel-uRe61yXZ.js";import"./Group-j7hLbASA.js";import"./useFocusRing-Dri4WoMi.js";import"./useFocus-CUz8YQ_V.js";import"./Input-G799xohA.js";import"./usePress-BYhFSapw.js";import"./FocusScope-B2Hz6ms7.js";import"./useCollator-BmCOWQts.js";import"./useFormReset-ClNM6Kah.js";import"./useFormValidation-CCAHF_BW.js";import"./useEvent-KVfko5RZ.js";import"./useSpinButton-ed7pozNj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-C1LvmRCV.js";import"./useControlledState-ik7lpKJV.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
