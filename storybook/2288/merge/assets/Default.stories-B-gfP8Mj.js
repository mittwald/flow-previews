import{j as r}from"./iframe-CZIIjdGx.js";import{L as d}from"./Label-BCeZc6nh.js";import{F as u}from"./FieldDescription-Boi3M1zl.js";import{F as T}from"./FieldError-BwbB6Ytj.js";import{T as i}from"./TimeField-CesUGIr3.js";import{L as l}from"./DateInput-BBlTiP5e.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-fB-3SEHh.js";import"./index-BsTtmOW1.js";import"./index-7Gan3Sd3.js";import"./useLocalizedStringFormatter-KKcnPxqh.js";import"./context-B5Owy1-_.js";import"./Label-DuyHno6H.js";import"./utils-CzlwFdSi.js";import"./Hidden-BdFAzqYk.js";import"./Text-B-NqQsb3.js";import"./browser-Cl51s5Ql.js";import"./EmulatedBoldText-BBfJQ4d1.js";import"./Text-B_tooMjG.js";import"./FieldError-Cm712Nbp.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-C2y0FN89.js";import"./AlertIcon-WrrDZg35.js";import"./IconWarning-CoTQUaDh.js";import"./remote-BLk-VuSO.js";import"./useFieldComponent-DWG920Yi.js";import"./Form-Dyc6bd1B.js";import"./useLabel-CmRl_D3U.js";import"./Group-hqq--aRk.js";import"./useFocusRing-CqWo6_om.js";import"./useFocus-BLv7u4S3.js";import"./Input-_8yUIV9x.js";import"./usePress-DFDeIEOr.js";import"./useFormValidation-Bw0zMO4k.js";import"./useControlledState-DqlM9bHJ.js";import"./FocusScope-Biunv2Bw.js";import"./useCollator-Bwo3lAGD.js";import"./useFormReset-DwvZDjIx.js";import"./useEvent-Q3wTfOgv.js";import"./useSpinButton-2xeSFYXY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-C5nTWXBe.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
