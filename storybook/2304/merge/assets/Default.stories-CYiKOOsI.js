import{j as r}from"./iframe-DsvUdpXw.js";import{L as d}from"./Label-V0M08dzp.js";import{F as u}from"./FieldDescription-GkX1e7wK.js";import{F as T}from"./FieldError-DMawyIiV.js";import{T as i}from"./TimeField-DnMbZXVN.js";import{L as l}from"./DateInput-CTMC3cjQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./index-BOZmgZtE.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./context-BSJoRVhT.js";import"./Label-E9gf7XUf.js";import"./utils-elFy1-Tx.js";import"./Hidden-CTz_rsXv.js";import"./Text-DX5v3ksG.js";import"./browser-BtOTkQbR.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./Text-qH9eQPgP.js";import"./FieldError-S3zhgpi7.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DtX3FOrI.js";import"./AlertIcon-C2Vz7YO6.js";import"./IconWarning-DeQxeoQB.js";import"./remote-Bzinmuoi.js";import"./useFieldComponent-CWVnpPPS.js";import"./Form-_ij7bXRe.js";import"./useLabel-CEPtaVyT.js";import"./Group-VzCh1Jz3.js";import"./useFocusRing-DkxfWW5E.js";import"./useFocus-DN2AExbL.js";import"./Input-B3qlT_4M.js";import"./usePress-BFT-1ljl.js";import"./FocusScope-eXu984DB.js";import"./useCollator-DXJOSFu6.js";import"./useFormReset-BZPoHMi4.js";import"./useFormValidation-B3UJ98ri.js";import"./useEvent-DL_JcHww.js";import"./useSpinButton-CE835ypU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-aBkIIk56.js";import"./useControlledState-HbpZAl0m.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
