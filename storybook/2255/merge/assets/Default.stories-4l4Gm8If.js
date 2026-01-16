import{j as r}from"./iframe-DEsugzBP.js";import{L as d}from"./Label-DyIqFkt_.js";import{F as u}from"./FieldDescription-DsSfVktg.js";import{F as T}from"./FieldError-D0RH6F7V.js";import{T as i}from"./TimeField-CJs2XjFo.js";import{L as l}from"./DateInput-DZErWBno.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B7M9EemL.js";import"./index-JNFFaqnL.js";import"./index-DvVsbrc7.js";import"./useLocalizedStringFormatter-DuBUNj0e.js";import"./context-BA9NBDMH.js";import"./Label-CT9VczkM.js";import"./utils-k3goWFVI.js";import"./Hidden-B9rA9ATP.js";import"./Text-CGG2whlc.js";import"./browser-DSOUTdOR.js";import"./EmulatedBoldText-6jL3QUey.js";import"./Text-CGX30jhe.js";import"./FieldError-DL7mdN7X.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-B9jVXJTC.js";import"./AlertIcon-CMe_dxq6.js";import"./IconWarning-qDYXGw-D.js";import"./remote-Bm53ArvY.js";import"./useFieldComponent-CoV9Rbdv.js";import"./Form-BBNX_R9o.js";import"./useLabel-Bn9RRRKS.js";import"./Group-LEKqTwAp.js";import"./useFocusRing-DuZx28fv.js";import"./useFocus-B3AZuBYY.js";import"./Input-B5rLIpjG.js";import"./usePress-CsaWzeZC.js";import"./useFormValidation-DCx77s5O.js";import"./useControlledState-Dcr_irR6.js";import"./FocusScope-BvFRWRMs.js";import"./useCollator-DjsjFHtz.js";import"./useFormReset-D1Ly9aDH.js";import"./useEvent-Dk4Rqcvb.js";import"./useSpinButton-CKk5ujQM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CLfIMVdQ.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
