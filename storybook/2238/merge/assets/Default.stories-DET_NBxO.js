import{j as r}from"./iframe-B6FtZzVw.js";import{L as d}from"./Label-gGsAWD9A.js";import{F as u}from"./FieldDescription-DCDO5HYP.js";import{F as T}from"./FieldError-CuRjPN5X.js";import{T as i}from"./TimeField-BfSwsZvE.js";import{L as l}from"./DateInput-C_H_DhRM.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dnsg7d7g.js";import"./index-Jha0zHxy.js";import"./index-DprtUoGy.js";import"./useLocalizedStringFormatter-D6nkVQc6.js";import"./context-D8VymAHE.js";import"./Label-BRHOOf6S.js";import"./utils-B053wNrY.js";import"./Hidden-BRZRxZbR.js";import"./Text-DPYEhwNL.js";import"./browser-D2cTR9e8.js";import"./EmulatedBoldText-DD0WhK6h.js";import"./Text-Dn3IEVOe.js";import"./FieldError-BtAF49NH.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DEHpO9Uw.js";import"./remote-B6WYv1J0.js";import"./useFieldComponent-BNMXDSB6.js";import"./Form-CujqqqIN.js";import"./useLabel-CPIz2b8c.js";import"./Group-Vwt0vhiT.js";import"./useFocusRing-C0rO9rWF.js";import"./useFocus-DnpGAVhn.js";import"./Input-CxAJMr-1.js";import"./usePress-Bff_bCDv.js";import"./useFormValidation-C7j9z4Fo.js";import"./useControlledState-ByagjwsX.js";import"./FocusScope-Dv-pZR3t.js";import"./useCollator-DzvnCMzb.js";import"./useFormReset-CRRhvvtY.js";import"./useEvent-CIqm2Tiz.js";import"./useSpinButton-CrxK7CMm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-FQ7f_cT0.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const tr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,tr as __namedExportsOrder,ar as default};
