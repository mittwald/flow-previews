import{j as r}from"./iframe-jPI25t47.js";import{L as d}from"./Label-CVxkn5sg.js";import{F as u}from"./FieldDescription-BijM-gJh.js";import{F as T}from"./FieldError-DPfGZS1P.js";import{T as i}from"./TimeField-BpBY2krj.js";import{L as l}from"./DateInput-nBNuLgqm.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./index-mBlsDuvj.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./context-yJg27e0-.js";import"./Label-gIBQebAF.js";import"./utils-DssEHlsW.js";import"./Hidden-BHJ1gGty.js";import"./Text-CzRKl4Rn.js";import"./browser-BKdBfXKE.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./Text-BUiBuDRU.js";import"./FieldError-C3mwkvrq.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-D2z5AzT8.js";import"./AlertIcon-HKJqs1Pu.js";import"./IconWarning-D8uDJDej.js";import"./remote-B_as-6Bm.js";import"./useFieldComponent-CHdLkU8r.js";import"./Form-BeysAUF2.js";import"./useLabel-CJgKbpp_.js";import"./Group-CAA0eQzC.js";import"./useFocusRing-PgP7-E1A.js";import"./useFocus-DZAeMhz-.js";import"./Input-DUaj7rN4.js";import"./usePress-Bv9bKc9w.js";import"./FocusScope-QARcb0VX.js";import"./useCollator-TV1MmAHK.js";import"./useFormReset-DGTIvKtn.js";import"./useFormValidation-aAlw1sTR.js";import"./useEvent-DZfip6aA.js";import"./useSpinButton-Dy8IMmq-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-C7MtcH3Z.js";import"./useControlledState-CujVadxA.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
