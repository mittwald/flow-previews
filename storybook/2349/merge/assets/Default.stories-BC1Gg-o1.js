import{j as r}from"./iframe-gtGtPSGX.js";import{L as d}from"./Label-ezDYxAqR.js";import{F as u}from"./FieldDescription-ClA4Wtvf.js";import{F as T}from"./FieldError-co03Ctd_.js";import{T as i}from"./TimeField-Dczutzy_.js";import{L as l}from"./DateInput-0i6aYGKz.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./index-CkPgzcm3.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./context-B_6Y7rB4.js";import"./Label-Ca_2SnGY.js";import"./utils-1b_KoCGs.js";import"./Hidden-DP7zwehU.js";import"./Text-QzTdDFQg.js";import"./browser-BLXRbgM1.js";import"./EmulatedBoldText-Cj02Cwni.js";import"./Text-B8kBB-Il.js";import"./FieldError-DenhE7nb.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BWmstvFc.js";import"./AlertIcon-BrLsNTwF.js";import"./IconWarning-BtUUciVj.js";import"./remote-DGcAtBID.js";import"./useFieldComponent-BaX-M8wV.js";import"./Form-BRxvySUZ.js";import"./useLabel-BqGs6HWh.js";import"./Group-Dg14tYxa.js";import"./useFocusRing-jJpNIKKF.js";import"./useFocus-BGYZap87.js";import"./Input-1coMMItc.js";import"./usePress-ub7fcIm5.js";import"./FocusScope-d04sRaMv.js";import"./useCollator-C3hQgpVA.js";import"./useFormReset-TvJ_gIa-.js";import"./useFormValidation-BQy4AKy0.js";import"./useEvent-BWe1IiIa.js";import"./useSpinButton-B_TW_5NJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-5eACwZ82.js";import"./useControlledState-a_M_Sxv2.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
