import{j as r}from"./iframe-nUnY8CpM.js";import{L as d}from"./Label-CarGuai1.js";import{F as u}from"./FieldDescription-CiRWpG91.js";import{F as T}from"./FieldError-Dl4XoXDz.js";import{T as i}from"./TimeField-CHcGJBrE.js";import{K as l}from"./DateInput-B5eL-c3Z.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DiVWNePS.js";import"./index-Czo4z9CC.js";import"./index-D5rarCk0.js";import"./useLocalizedStringFormatter-DxwRSSu1.js";import"./context-B5Mk59jD.js";import"./Label-B7kFjMQQ.js";import"./utils-DtyHAF7C.js";import"./Hidden-DuLhuFUb.js";import"./Text-CKSRxaE3.js";import"./browser-vyiLhVPE.js";import"./EmulatedBoldText-CfkdfDH6.js";import"./Text-4n54moM_.js";import"./FieldError-CG7ulvH_.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconChevronDown-C6KAqmcJ.js";import"./remote-Bcop36Tp.js";import"./IconDanger-BtbJ86A5.js";import"./useFieldComponent-CwsJxGlb.js";import"./Form-DX8kqEOp.js";import"./useLabel-ARnVSCS2.js";import"./Group-BykXvQmq.js";import"./useFocusRing-FZMFjSRM.js";import"./useFocus-ik1bIJBj.js";import"./Input-B5TNmDN2.js";import"./usePress-D0chnYNQ.js";import"./useFormValidation-BmCGlg1a.js";import"./useControlledState-CaC4m18c.js";import"./FocusScope-CB6t9Dkj.js";import"./useCollator-BNnpPJUs.js";import"./useFormReset-B9MhH15U.js";import"./useEvent-DGx-2GiN.js";import"./useSpinButton-BG_Wc5dG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DXnDbAf3.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
