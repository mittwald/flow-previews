import{j as r}from"./iframe-DZ4teeW0.js";import{L as d}from"./Label-DoWn6F4v.js";import{F as u}from"./FieldDescription-wBHtE-uB.js";import{F as T}from"./FieldError-AZ-rkViQ.js";import{T as i}from"./TimeField-B9Ofeey9.js";import{L as l}from"./DateInput-Bk3j5tnf.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CieJlEUq.js";import"./index-Dth1hoGd.js";import"./index-hJtfnrYv.js";import"./useLocalizedStringFormatter-wvOzWyd2.js";import"./context-CZC3VL3b.js";import"./Label-DqsFtup3.js";import"./utils-CmR_RyV0.js";import"./Hidden-D1rcdGtX.js";import"./Text-C4YBtGrU.js";import"./browser-BOIGtlkn.js";import"./EmulatedBoldText-D386c9ln.js";import"./Text-BkVlga5W.js";import"./FieldError-DkoCPEDN.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-Dur7DX9B.js";import"./AlertIcon-Dng1V2P2.js";import"./IconWarning-BMXzPSbA.js";import"./remote-C7mA51oY.js";import"./useFieldComponent-D07Wu5hH.js";import"./Form-DzpbW5Q4.js";import"./useLabel-CN_YQU3T.js";import"./Group-CcFwVgnp.js";import"./useFocusRing-Bi_KX66p.js";import"./useFocus-DPzONbd_.js";import"./Input-D0qY3wir.js";import"./usePress-DM-2A3ZD.js";import"./useFormValidation-DQHMrpfA.js";import"./useControlledState-CE05dG3o.js";import"./FocusScope-BJdWB0PZ.js";import"./useCollator-DxlaTcxe.js";import"./useFormReset-CHb94_Ie.js";import"./useEvent-Rvr_SgMv.js";import"./useSpinButton-CCOAGhtu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BFHtsTrL.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
