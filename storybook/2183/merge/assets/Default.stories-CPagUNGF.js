import{j as r}from"./iframe-CxIv4jMu.js";import{L as d}from"./Label-B_OvHsx4.js";import{F as u}from"./FieldDescription-BwqMpCOu.js";import{F as T}from"./FieldError-DD8s_Iuw.js";import{T as i}from"./TimeField-D1AUKJ4o.js";import{K as l}from"./DateInput-ut1r68aI.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-40FWo67L.js";import"./index-B5A5s8TF.js";import"./index-4jtxG-aw.js";import"./useLocalizedStringFormatter-B-qTbUOV.js";import"./context-XT4iJWgw.js";import"./Label-V3_Oag-T.js";import"./utils-BWuSdLWz.js";import"./Hidden-BIUsGAI2.js";import"./Text-D7X_oIFw.js";import"./browser-mUCbKcee.js";import"./EmulatedBoldText-CtDmIXSm.js";import"./Text-C4fvncMS.js";import"./FieldError-B56fKNUE.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconApp-DXeuriH2.js";import"./remote-BuINZUdg.js";import"./IconDanger-WvpDQ4XT.js";import"./useFieldComponent-gOqU5qjG.js";import"./Form-48q0jMI2.js";import"./useLabel-hxWbe3_X.js";import"./Group-SdAlNVRd.js";import"./useFocusRing-DX51MXuJ.js";import"./useFocus-ng3bQXxT.js";import"./Input-F9Cu5nN7.js";import"./usePress-CUBbufY7.js";import"./useFormValidation-NfxZ5VuI.js";import"./useControlledState-BE-Fn8Ja.js";import"./FocusScope-D8y0iQpb.js";import"./useCollator-CNR9Oibt.js";import"./useFormReset-BBuG3pIa.js";import"./useEvent-C9rtN4FC.js";import"./useSpinButton-BQIp3M8O.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-J55lL2d5.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const mr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,mr as __namedExportsOrder,tr as default};
