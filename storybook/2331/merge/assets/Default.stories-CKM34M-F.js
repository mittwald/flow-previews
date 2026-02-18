import{j as r}from"./iframe-BDFzVZbC.js";import{L as d}from"./Label-LyL-GXC8.js";import{F as u}from"./FieldDescription-CoqoTaGo.js";import{F as T}from"./FieldError-BgOx5Pdv.js";import{T as i}from"./TimeField-dQQmBDFs.js";import{L as l}from"./DateInput-Bte-0-up.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CcRyJRwo.js";import"./index-P1fb0se1.js";import"./index-CcbRX2xZ.js";import"./useLocalizedStringFormatter-BejhQiE3.js";import"./context-sVk6h2Ud.js";import"./Label-CHSQ9cWG.js";import"./utils-DRqoG6OW.js";import"./Hidden-HzHXzaYV.js";import"./Text-DCO-oE1a.js";import"./browser-D6pVd-JB.js";import"./EmulatedBoldText-qk6rk8uL.js";import"./Text-5CWdwzmY.js";import"./FieldError-4UEPVceR.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CJ-mVZBv.js";import"./AlertIcon-tKcNuTH2.js";import"./IconWarning-aDXn3__r.js";import"./remote-C6miTdu_.js";import"./useFieldComponent-DJTCy7fJ.js";import"./Form-MSkU5_70.js";import"./useLabel-D8fV0T39.js";import"./Group-DLMWWecZ.js";import"./useFocusRing-CxM1MJ0B.js";import"./useFocus-BE-kuowd.js";import"./Input-CI5lEjHT.js";import"./usePress-DJEnnjGh.js";import"./FocusScope-Djn4bjzo.js";import"./useCollator-DGEP0NQr.js";import"./useFormReset-CQpdwD5T.js";import"./useFormValidation-CtBJZQwA.js";import"./useEvent-DOEbfCcC.js";import"./useSpinButton-DzP_o7yR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BO-65jsc.js";import"./useControlledState-CxpqxoPE.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
