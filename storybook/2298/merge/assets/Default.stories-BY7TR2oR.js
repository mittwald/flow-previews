import{j as r}from"./iframe-Cs0JkT9Q.js";import{L as d}from"./Label-CHxievOH.js";import{F as u}from"./FieldDescription-DnGZgPAY.js";import{F as T}from"./FieldError-BZN8rJUk.js";import{T as i}from"./TimeField-ussWGXup.js";import{L as l}from"./DateInput-CJaPJhwy.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DnhH9c8U.js";import"./index-CF0rrQKO.js";import"./index-BDmaB34G.js";import"./useLocalizedStringFormatter-CQ-MJvxZ.js";import"./context-CtFpEE6p.js";import"./Label-CQSgfv4f.js";import"./utils-BvIIGzqK.js";import"./Hidden-BvtrxWwl.js";import"./Text-l9LtklMs.js";import"./browser-Cphwy2_f.js";import"./EmulatedBoldText-C1XQaUUR.js";import"./Text-Dd1xy9_M.js";import"./FieldError-zGZXG0KM.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BA7qstOH.js";import"./AlertIcon-Dko-1oCR.js";import"./IconWarning-wVjX2Q6D.js";import"./remote-bYaNzVPL.js";import"./useFieldComponent-BGOnrhQA.js";import"./Form-D-8VlTBZ.js";import"./useLabel-CfslMsP4.js";import"./Group-BV5xd3-K.js";import"./useFocusRing-Cldy4Slr.js";import"./useFocus-DNqIDWYA.js";import"./Input-B1hEkaq5.js";import"./usePress-y02TS-RC.js";import"./useFormValidation-CaaIEsuY.js";import"./useControlledState-DrKGwN1m.js";import"./FocusScope-BXTpAFiu.js";import"./useCollator-JQWc_WGD.js";import"./useFormReset-5IC1Q0ld.js";import"./useEvent-DfZ5FDj0.js";import"./useSpinButton-BFL00L-M.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DtZHxxSj.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
