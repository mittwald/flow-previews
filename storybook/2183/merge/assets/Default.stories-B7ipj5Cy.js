import{j as r}from"./iframe-Bqcpbrss.js";import{L as d}from"./Label-DkmPPtXy.js";import{F as u}from"./FieldDescription-RQ7xrGTo.js";import{F as T}from"./FieldError-B_AiZFnH.js";import{T as i}from"./TimeField-CDTLeL6F.js";import{L as l}from"./DateInput-CPId3vbj.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BBavSPU3.js";import"./index-s7Xlkd3C.js";import"./index-H5GW8qHY.js";import"./useLocalizedStringFormatter-BO2YWtbk.js";import"./context-BrwEoz3A.js";import"./Label-B1GY4ZIq.js";import"./utils-BJedWkRC.js";import"./Hidden-BSWGkYgd.js";import"./Text-BTcvwTq1.js";import"./browser-C4ue27yU.js";import"./EmulatedBoldText-CnuyczSs.js";import"./Text-DG80-Tyy.js";import"./FieldError-DLGH1zeP.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-dEqiOsyE.js";import"./remote-DG6VBXek.js";import"./useFieldComponent-CI3p7oBW.js";import"./Form-CNSKTjy-.js";import"./useLabel-Cn-M2zb9.js";import"./Group-CL0L_n-j.js";import"./useFocusRing-tPpareNh.js";import"./useFocus-BCtAPQqm.js";import"./Input-RoH5kbBf.js";import"./usePress-CVO_DkHY.js";import"./useFormValidation-D7KvBPrT.js";import"./useControlledState-BHyXOHwM.js";import"./FocusScope-D6k82O5Z.js";import"./useCollator-B8UItRx2.js";import"./useFormReset-BuAWhlth.js";import"./useEvent-DW56id3t.js";import"./useSpinButton-D-ogGRRE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Dfx4ZPTv.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
