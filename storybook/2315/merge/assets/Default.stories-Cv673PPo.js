import{j as r}from"./iframe-BKpTcuej.js";import{L as d}from"./Label-sjxWv79d.js";import{F as u}from"./FieldDescription-B8eaQXaP.js";import{F as T}from"./FieldError-BmJ7-crS.js";import{T as i}from"./TimeField-kopscSTE.js";import{L as l}from"./DateInput-Cc47Jd2w.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DoYqiHFv.js";import"./index-Dp43xhBx.js";import"./index-DwEhfHus.js";import"./useLocalizedStringFormatter-BpUbvorC.js";import"./context-Bt___W0l.js";import"./Label--Zf6jHty.js";import"./utils-BuTqHWUg.js";import"./Hidden-B0ayokwD.js";import"./Text-ChzZQXaT.js";import"./browser-DdR_cYXU.js";import"./EmulatedBoldText-DTp9riJA.js";import"./Text-_5F14b0c.js";import"./FieldError-Bf7-_15k.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-NjffNB6y.js";import"./AlertIcon-BxMTL622.js";import"./IconWarning-8R3XoFcV.js";import"./remote-nPMBb6wO.js";import"./useFieldComponent-AXq55mny.js";import"./Form-fml-60gz.js";import"./useLabel-CLAZgdhb.js";import"./Group-aKg9TIpc.js";import"./useFocusRing-CL2qG9Ti.js";import"./useFocus-C4QXJ0i2.js";import"./Input-u4H7iO9I.js";import"./usePress-BwvZqs_N.js";import"./FocusScope-CaneGuiO.js";import"./useCollator-28QKhnaq.js";import"./useFormReset-DjxTrJRS.js";import"./useFormValidation-6yUCZE8C.js";import"./useEvent-DisABsaa.js";import"./useSpinButton-C5wEpcm8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-D1EfcOPG.js";import"./useControlledState-C61mrJlx.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
