import{j as r}from"./iframe-Dnm846PF.js";import{L as d}from"./Label-CfPB20lW.js";import{F as u}from"./FieldDescription-ChdNC9CF.js";import{F as T}from"./FieldError-Ze0pQjLj.js";import{T as i}from"./TimeField-C2kd3fOD.js";import{L as l}from"./DateInput-DsRfJ801.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-S63Cq1sy.js";import"./index-Db1dbbsL.js";import"./index-sBHKlQZD.js";import"./useLocalizedStringFormatter-BqtI09-_.js";import"./context-CoOH5oCy.js";import"./Label-B2apKb0w.js";import"./utils-VDIU0BnD.js";import"./Hidden-1UUWpuD7.js";import"./Text-DtZxu6g8.js";import"./browser-DEiAhc6G.js";import"./EmulatedBoldText-DH6NWkOG.js";import"./Text-1v5GZWlz.js";import"./FieldError-BJ4Wbc9z.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CExbEpDP.js";import"./remote-XcyFsW5Q.js";import"./useFieldComponent-CW3QYPg0.js";import"./Form-DyzgNsfN.js";import"./useLabel-pLNL7Cvk.js";import"./Group-Btcmd8Qw.js";import"./useFocusRing-CANRw9LC.js";import"./useFocus-D-7SE4fF.js";import"./Input-vek2Lmza.js";import"./usePress-CU4gAXU4.js";import"./useFormValidation-CGpO-wMA.js";import"./useControlledState-CkFAdRGn.js";import"./FocusScope-DH4o0wc_.js";import"./useCollator-mQoUFjwt.js";import"./useFormReset-BiFYZY7a.js";import"./useEvent-CkeCMC1K.js";import"./useSpinButton-sNpy-lum.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Cjc5Ay3c.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
