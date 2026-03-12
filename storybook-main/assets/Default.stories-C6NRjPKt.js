import{j as r}from"./iframe-C8tsaODo.js";import{L as d}from"./Label-1oLHWqvU.js";import{F as u}from"./FieldDescription-BZoE01SC.js";import{F as T}from"./FieldError-EQJdnOUU.js";import{T as i}from"./TimeField-B3zazf3P.js";import{L as l}from"./DateInput-DR7ZXD0Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTZ0wFju.js";import"./index-CLgTDDI2.js";import"./index-BNoG6unV.js";import"./useLocalizedStringFormatter-Bu8yFg8Y.js";import"./context-BwdmRhET.js";import"./Label-D1q-_ISO.js";import"./utils-CdcYI7XL.js";import"./Hidden-BspDtBD-.js";import"./Text-BE7lE0T8.js";import"./browser-qgMJ3NzC.js";import"./EmulatedBoldText-RMBLGP7I.js";import"./Text-BkxlIu3p.js";import"./FieldError-DSXMmXMO.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BlUc9teP.js";import"./AlertIcon-DJlFLAIk.js";import"./IconWarning-Up7WC4e0.js";import"./remote-Ckar2tK9.js";import"./useFieldComponent-FgbLRzY4.js";import"./Form-Ch0mipSV.js";import"./useLabel-oJhcJRxp.js";import"./Group-DRewra_w.js";import"./useFocusRing-DauayxVe.js";import"./useFocus-D0DC1KKH.js";import"./platform-Dz8CwCz0.js";import"./Input-ConcdJ9I.js";import"./usePress-vv50L64r.js";import"./FocusScope-DFjW_d09.js";import"./useCollator-q3kgEL61.js";import"./useFormReset-BpTKK099.js";import"./useFormValidation-CZJdaAR2.js";import"./useEvent-520ieM62.js";import"./useSpinButton-C_9aiTp0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DcBcILec.js";import"./useControlledState-CN29789s.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,nr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const pr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,pr as __namedExportsOrder,nr as default};
