import{j as r}from"./iframe-CcUuYubL.js";import{L as d}from"./Label-L2Rin-A2.js";import{F as u}from"./FieldDescription-ADxnhLyC.js";import{F as T}from"./FieldError-BP_boiRG.js";import{T as i}from"./TimeField-DJ_MohSF.js";import{L as l}from"./DateInput-BGfQskd1.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BzXwfnR4.js";import"./index-01_sGRec.js";import"./index-C6oVqO8J.js";import"./useLocalizedStringFormatter-BCaxxAx_.js";import"./context-BiAKFHSE.js";import"./Label-ISSVaHBY.js";import"./utils-B3A9CwVo.js";import"./Hidden-JctcoGsF.js";import"./Text-DY9Wsurd.js";import"./browser-DepVz5kj.js";import"./EmulatedBoldText-IgYc1KUF.js";import"./Text-B0FzOrzN.js";import"./FieldError-BzVPBYcu.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BDjC6xOL.js";import"./remote-DfJLRaxN.js";import"./useFieldComponent-DfHGJXnI.js";import"./Form-D1MNyHLC.js";import"./useLabel-4jeMa91n.js";import"./Group-C9hqVmoY.js";import"./useFocusRing-CorDS6JG.js";import"./useFocus-tKANsd5T.js";import"./Input-BEUYik2Y.js";import"./usePress-BQdte7r9.js";import"./useFormValidation-ey4MT9ZA.js";import"./useControlledState-Cd7zGKC9.js";import"./FocusScope-BV2sx_oo.js";import"./useCollator-z0uw1QeA.js";import"./useFormReset-CtXF-ibf.js";import"./useEvent-BHYxhhiC.js";import"./useSpinButton-jXT_XycC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Cn5_NfG2.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
