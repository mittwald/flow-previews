import{j as r}from"./iframe-Bj8CIgLy.js";import{L as d}from"./Label-DCfOJgVU.js";import{F as u}from"./FieldDescription-tBjikzHa.js";import{F as T}from"./FieldError-Dbjs-A5K.js";import{T as i}from"./TimeField-KTm-ankm.js";import{L as l}from"./DateInput-DOxSK2Hm.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./index-DYakERwo.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./context-RK9vgtK2.js";import"./Label-BAoc3jdD.js";import"./utils-D41FTHpf.js";import"./Hidden-DWJk28Vx.js";import"./Text-BbFFlg8m.js";import"./browser-Rl4DjN4H.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./Text-CVMu3Bei.js";import"./FieldError-cTj-tlV1.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";import"./IconWarning-KvO0562x.js";import"./remote-ChNLl0N8.js";import"./useFieldComponent-DFS7CEov.js";import"./Form-CdHdNrpC.js";import"./useLabel-j5JIlG5u.js";import"./Group-C2p9sJyZ.js";import"./useFocusRing-0HtVE4-I.js";import"./useFocus-BJLP4kuV.js";import"./Input-DxRXMpsm.js";import"./usePress-BLrqdZMB.js";import"./useFormValidation-CuYWsRMr.js";import"./useControlledState-C0IHmt74.js";import"./FocusScope-DNVRBXI-.js";import"./useCollator-w2x96sHr.js";import"./useFormReset-DPVe5t_C.js";import"./useEvent-UL9Ap3Pm.js";import"./useSpinButton-B5uVAGBe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-ap5uWiRc.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
