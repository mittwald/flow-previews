import{j as r}from"./iframe-H3UGI_HB.js";import{L as d}from"./Label-BgH6R3x8.js";import{F as u}from"./FieldDescription-Br0Af-ga.js";import{F as T}from"./FieldError-wcTb1U2C.js";import{T as i}from"./TimeField-BA4vGZ8C.js";import{L as l}from"./DateInput-DBnDH_aR.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-RxwhG80E.js";import"./index-D6GAEjHP.js";import"./index-BJWFQYe5.js";import"./useLocalizedStringFormatter-w61_e3zI.js";import"./context-BGVDv2KD.js";import"./Label-CZuC8vWV.js";import"./utils-DSogMYdc.js";import"./Hidden-DoBcQ2Eg.js";import"./Text-B0lwY8q7.js";import"./browser-xqq3Xy_w.js";import"./EmulatedBoldText-DRHBUbf1.js";import"./Text-UIHj6j-v.js";import"./FieldError-Be1mQ-cQ.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CQfakUvk.js";import"./AlertIcon-Cb5scZh6.js";import"./IconWarning-D9BgjB6B.js";import"./remote-uffOWPGy.js";import"./useFieldComponent-Bj80Ne3v.js";import"./Form-BGaHvL5t.js";import"./useLabel-CtoVShGG.js";import"./Group-DdJ_b0gx.js";import"./useFocusRing-DrWQa_14.js";import"./useFocus-DQ3i5Klp.js";import"./Input-CefV5Kvm.js";import"./usePress-CSCW4wCL.js";import"./FocusScope-DjcW1lzL.js";import"./useCollator--V7CwpxI.js";import"./useFormReset-CtKq0dbr.js";import"./useFormValidation-DekRXblw.js";import"./useEvent-ChUOYfSF.js";import"./useSpinButton-uS_8HvSw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-04BpeXIq.js";import"./useControlledState-DkMic-Ic.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
