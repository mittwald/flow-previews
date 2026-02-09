import{j as r}from"./iframe-XxUhdOIM.js";import{L as d}from"./Label-C4UQ1ENb.js";import{F as u}from"./FieldDescription-Czgw_F0J.js";import{F as T}from"./FieldError-DsyIPYpb.js";import{T as i}from"./TimeField-CCGXBfXs.js";import{L as l}from"./DateInput-CzcQikRh.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoC0P7KZ.js";import"./index-CHNtIY8f.js";import"./index-BSqFjc_t.js";import"./useLocalizedStringFormatter-C41xTvax.js";import"./context-DoTCerLu.js";import"./Label-ChQ-hUoB.js";import"./utils-BCq0Cvc3.js";import"./Hidden-Bb8MHfhN.js";import"./Text-Cnwgd4MT.js";import"./browser-DmOXQPuo.js";import"./EmulatedBoldText-p9aRLsBg.js";import"./Text-CyqmbAxA.js";import"./FieldError-D3qoIyxA.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-D9H4kctD.js";import"./AlertIcon-B-eIAqAY.js";import"./IconWarning-HmbpUhBv.js";import"./remote-6r6BNiZ9.js";import"./useFieldComponent-DmQ0NGCO.js";import"./Form-COPMshHH.js";import"./useLabel-BmkrUKzN.js";import"./Group-Dd2BG_us.js";import"./useFocusRing-B4cqEnOC.js";import"./useFocus-EZLK-muK.js";import"./Input-dBdn1-_7.js";import"./usePress-C6bNQEHg.js";import"./useFormValidation-nWIFBTgB.js";import"./useControlledState-BjbUFAiJ.js";import"./FocusScope-Bd3CxSOo.js";import"./useCollator-C4FEsSYx.js";import"./useFormReset-CjY5_fDt.js";import"./useEvent-CS7e6qWg.js";import"./useSpinButton-D9ha1UUo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-D0OcD8ZS.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
