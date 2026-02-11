import{j as r}from"./iframe-BWSm23JV.js";import{L as d}from"./Label-T9tt80_8.js";import{F as u}from"./FieldDescription-DaTX6mR9.js";import{F as T}from"./FieldError-DNnGmqvO.js";import{T as i}from"./TimeField-CMNMR7xY.js";import{L as l}from"./DateInput-hfoSc-5A.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-JjUcob8a.js";import"./index-dkn6ScVQ.js";import"./index-D0YiHBOl.js";import"./useLocalizedStringFormatter-BKZxLutv.js";import"./context-4oRtfVxK.js";import"./Label--12nIVsO.js";import"./utils-Dla7ZNEN.js";import"./Hidden-C-tiV80t.js";import"./Text-BaJ5HEnd.js";import"./browser-S_Q3Hufb.js";import"./EmulatedBoldText-Bqi8zNtS.js";import"./Text-DreghWw5.js";import"./FieldError-BA3GdU0H.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-b5oldDtH.js";import"./AlertIcon-CwdoSZHL.js";import"./IconWarning-R37DsKRA.js";import"./remote-DcEXMbRM.js";import"./useFieldComponent-Cr8cfCaw.js";import"./Form-DKTVNEPJ.js";import"./useLabel-C6wIzqCz.js";import"./Group-BVyYtesD.js";import"./useFocusRing-CI0bGTjl.js";import"./useFocus-CrlSoDhl.js";import"./Input-Cdu3oBr0.js";import"./usePress-C_E4YsZw.js";import"./FocusScope-C7G-5g6h.js";import"./useCollator-68O4Bddb.js";import"./useFormReset-DeveCpy2.js";import"./useFormValidation-C5ZFiF_6.js";import"./useEvent-BAiWPb0X.js";import"./useSpinButton-Cneza5Qi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CFACYw1j.js";import"./useControlledState-BdTYoDdO.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
