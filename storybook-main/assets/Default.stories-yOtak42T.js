import{j as r}from"./iframe-BLisfkW1.js";import{L as d}from"./Label-C4q0QTf_.js";import{F as u}from"./FieldDescription-C0N-joI8.js";import{F as T}from"./FieldError-ClH5zNHK.js";import{T as i}from"./TimeField-p3pr9f3u.js";import{L as l}from"./DateInput-D6rlyyvQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DivMJame.js";import"./index-DOES4bKx.js";import"./index-CURFR8tK.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./context-B09EtTwC.js";import"./Label-BayswAfQ.js";import"./utils-B2KexK2G.js";import"./Hidden-DTcX35LP.js";import"./Text-BzdTXRF7.js";import"./browser-1YnzmFhG.js";import"./EmulatedBoldText-w1zEViUr.js";import"./Text-CMQTkDl6.js";import"./FieldError-BmP7KZUf.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DXmhqwQY.js";import"./AlertIcon-BH2ywHIc.js";import"./IconWarning-Chxh05Fa.js";import"./remote-fMZF2a4s.js";import"./useFieldComponent-DG2srt-t.js";import"./Form-mlAsayVr.js";import"./useLabel-DktisoZ5.js";import"./Group-PbN8ryVA.js";import"./useFocusRing-whNl8W73.js";import"./useFocus-CasiJiIj.js";import"./Input-BNQv7Er9.js";import"./usePress-Bt2uh0Mh.js";import"./FocusScope-CH3eRbFP.js";import"./useCollator-BipIKgaT.js";import"./useFormReset-fweVV-SC.js";import"./useFormValidation-BvwbNbVP.js";import"./useEvent-DXG1g0h1.js";import"./useSpinButton-BWk9oKdq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Cmp7zb8v.js";import"./useControlledState-BzKS6zrg.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
