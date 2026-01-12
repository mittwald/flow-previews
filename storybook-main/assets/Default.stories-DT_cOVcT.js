import{j as r}from"./iframe-4vGjmvQN.js";import{L as d}from"./Label-C8vmJ-_M.js";import{F as u}from"./FieldDescription-6vHFVXXA.js";import{F as T}from"./FieldError-ZzdG0j41.js";import{T as i}from"./TimeField-DHDp45q-.js";import{L as l}from"./DateInput-C8mFKGCx.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTnwUX2e.js";import"./index-DFF4TtWB.js";import"./index--XKY9bK1.js";import"./useLocalizedStringFormatter-Ci5i2g9p.js";import"./context-Cugfl_gO.js";import"./Label-DRFrGBxg.js";import"./utils-Cb3SeWCs.js";import"./Hidden-DKOWGOBv.js";import"./Text-D_m0UGXp.js";import"./browser-BLim8y6B.js";import"./EmulatedBoldText-DOuKha2y.js";import"./Text-DO-ESRpi.js";import"./FieldError-D1JCdJnN.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CMo0ZXSb.js";import"./remote-BMVFgzCt.js";import"./useFieldComponent-diqFBc0H.js";import"./Form-Bf7p1I1W.js";import"./useLabel-Dy2_qp8M.js";import"./Group-C_2eU3ro.js";import"./useFocusRing-ctZhab72.js";import"./useFocus-BGpJf3EA.js";import"./Input-DxBr8hxM.js";import"./usePress-SP29s-a6.js";import"./useFormValidation-BrUcW_b7.js";import"./useControlledState-wPwtFL3G.js";import"./FocusScope-Blxz7JIY.js";import"./useCollator-D5lNxT5d.js";import"./useFormReset-BZ0fN7tZ.js";import"./useEvent-CRBCWBzI.js";import"./useSpinButton-DjJnBOG9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-8MZGED0U.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
