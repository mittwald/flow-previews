import{j as r}from"./iframe-1XlmVqd5.js";import{L as d}from"./Label-DewN6HGl.js";import{F as u}from"./FieldDescription-DjwLwJSM.js";import{F as T}from"./FieldError-D3E1IfUM.js";import{T as i}from"./TimeField-aLHur-3w.js";import{L as l}from"./DateInput-Dw8Ug7Tt.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./index-TUds5Kez.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./context-cVtndIAK.js";import"./Label-Dzg72Lo7.js";import"./utils-DcI_f0WL.js";import"./Hidden-D2eIjlR0.js";import"./Text-DoMRIGKc.js";import"./browser-BzXr98QP.js";import"./EmulatedBoldText-BjX1lTTJ.js";import"./Text-DC6xHoyY.js";import"./FieldError-gWTdIqt3.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BeWzsZor.js";import"./AlertIcon-B1ETMix0.js";import"./IconWarning-B1VVAKEh.js";import"./remote-BMRYc7VB.js";import"./useFieldComponent--2vv_KDv.js";import"./Form-XQS-LbjO.js";import"./useLabel-CWL3lRor.js";import"./Group-B8VxNK8d.js";import"./useFocusRing-nXz5Fj6s.js";import"./useFocus-B3hq9TNr.js";import"./Input-DiBS55Zj.js";import"./usePress-CBxBnL8r.js";import"./FocusScope-cwCTJx2V.js";import"./useCollator-CY9Dy9g3.js";import"./useFormReset-DNo3mt-e.js";import"./useFormValidation-BKr0RaqD.js";import"./useEvent-pApi9dyH.js";import"./useSpinButton-DVgv8nsx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DS0Xm2HR.js";import"./useControlledState-DjEU-0mZ.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
