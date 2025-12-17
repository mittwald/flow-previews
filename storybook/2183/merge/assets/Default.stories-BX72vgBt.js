import{j as r}from"./iframe-Be6XOKZ5.js";import{L as d}from"./Label-BV6L8qwz.js";import{F as u}from"./FieldDescription-C8t-LyGN.js";import{F as T}from"./FieldError-nKJnRYyC.js";import{T as i}from"./TimeField-Cvaimmli.js";import{K as l}from"./DateInput-C-HmDGEa.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-6mfYofmL.js";import"./index-BVQeIHXT.js";import"./index-Dwi0F_ix.js";import"./useLocalizedStringFormatter-D98CS6hT.js";import"./context-Y40TL0Hk.js";import"./Label-Da4d84kD.js";import"./utils-DTrZMB6V.js";import"./Hidden-B9nXAMyK.js";import"./Text-BB90vNXB.js";import"./browser-DsJM6Avf.js";import"./EmulatedBoldText-BA4PJkye.js";import"./Text-BTmMxR_a.js";import"./FieldError-eVRm8xCS.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconApp-BnAy9RaD.js";import"./remote-D-Pq4nVM.js";import"./IconDanger-CuHxVEgS.js";import"./useFieldComponent-DyzWtSt-.js";import"./Form-C9wSRzl5.js";import"./useLabel-DMWHK1ZY.js";import"./Group-CkZTiy9Q.js";import"./useFocusRing-B31Et6wQ.js";import"./useFocus-DYvnwNR4.js";import"./Input-B17NRXjc.js";import"./usePress-CK7mbUzy.js";import"./useFormValidation-DMz_tWT4.js";import"./useControlledState-D8v_kqVI.js";import"./FocusScope-BGhm_0o7.js";import"./useCollator-daqLYSV2.js";import"./useFormReset-Bo-wy8NL.js";import"./useEvent-B2MQOoAh.js";import"./useSpinButton-OmBJ43SO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-C6-YXzn2.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const mr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,mr as __namedExportsOrder,tr as default};
