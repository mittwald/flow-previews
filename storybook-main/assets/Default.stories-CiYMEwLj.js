import{j as r}from"./iframe-BJcrhiyS.js";import{L as d}from"./Label-DlBkeFJ8.js";import{F as u}from"./FieldDescription-BPGABGxO.js";import{F as T}from"./useFieldComponent-BTSjCSDH.js";import{T as i}from"./TimeField-D3fs047A.js";import{M as l}from"./DateField-j3RS-UtD.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CUnmKrjI.js";import"./index-BWslXHRv.js";import"./index-Clh-7_IP.js";import"./useLocalizedStringFormatter-BYGjl_Ur.js";import"./context-C9wRNNkX.js";import"./Label-BomZPPry.js";import"./utils-MMz0RNDK.js";import"./Hidden-BPKHXv4N.js";import"./Text-CzGb6jtw.js";import"./browser-CleZYiuo.js";import"./EmulatedBoldText-BXLeVkdu.js";import"./Text-BpL6_bME.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DHKN92dZ.js";import"./react-children-utilities-DZ5iFmYj.js";import"./ClearPropsContext-Bddw_Fzg.js";import"./useMakeFocusable-CqrVk7-z.js";import"./Form--RrJpAdD.js";import"./useLabel-_fpNspWn.js";import"./Group-q2LAtsMk.js";import"./useFocusRing-Cs9uIsYW.js";import"./useFocus-B02RLksg.js";import"./Input-BVWAA476.js";import"./usePress-D-MZIwgU.js";import"./useFormValidation-ofRqxeQo.js";import"./useControlledState-CmFRf9bT.js";import"./FocusScope-DZerhXt6.js";import"./useCollator-DUTRWdjd.js";import"./useFormReset-B4UK9p8r.js";import"./useEvent-hhr9af5x.js";import"./useSpinButton-ynEpNyn6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CWMjQdeb.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
