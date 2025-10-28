import{j as r}from"./iframe-BvCo0Jms.js";import{L as d}from"./Label-9SlnZKrY.js";import{F as u}from"./FieldDescription-ThKAVIuf.js";import{F as T}from"./useFieldComponent-h58tn8zy.js";import{T as i}from"./TimeField-BMwJWv84.js";import{M as l}from"./DateField-2fsvZIRR.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-_a8eO4.js";import"./index-DAXCiU9B.js";import"./index-DV2r3peR.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./context-EIbK-86q.js";import"./Label-DMgJ6fuj.js";import"./utils-Cw2xzcbV.js";import"./Hidden-Bxmlm1r5.js";import"./Text-CM7-JVVa.js";import"./browser-DOebU0pA.js";import"./EmulatedBoldText-BsN5iyXq.js";import"./Text-BvqGhHlZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DF-Lhcnu.js";import"./react-children-utilities-K6HpEoIu.js";import"./ClearPropsContext-BXwgDp0Q.js";import"./useMakeFocusable-I3KvykiR.js";import"./Form-DLKKw6GK.js";import"./useLabel-DLhdFYyT.js";import"./Group-CxRviubY.js";import"./useFocusRing-D8FCXLiH.js";import"./useFocus-C5EW73ar.js";import"./Input-DUPogfhm.js";import"./usePress-BZrRujBy.js";import"./useFormValidation-DFmu6UDs.js";import"./useControlledState-C0Hm7DMH.js";import"./FocusScope-Dcb5J3f3.js";import"./useCollator-B2HFQgM0.js";import"./useFormReset-B8Yq5UFv.js";import"./useEvent-CQT5QNCL.js";import"./useSpinButton-rYtNTNCC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CsQfgmwz.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
