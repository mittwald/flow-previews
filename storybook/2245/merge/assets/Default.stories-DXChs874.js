import{j as r}from"./iframe-DoM-BIwg.js";import{L as d}from"./Label-BFVzgZLR.js";import{F as u}from"./FieldDescription-D7t9gDEh.js";import{F as T}from"./FieldError-D1hjQVoV.js";import{T as i}from"./TimeField-tg499BDd.js";import{L as l}from"./DateInput-DQ-4IR8I.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bw05Ss5u.js";import"./index-B9vDCLP1.js";import"./index-BXuzzWnK.js";import"./useLocalizedStringFormatter-BiPCXUs5.js";import"./context-CSqA08Z3.js";import"./Label-DE9HqL8_.js";import"./utils-D5il_mPj.js";import"./Hidden-DgtxAirB.js";import"./Text-lsEUOuuk.js";import"./browser-COZAGKbB.js";import"./EmulatedBoldText-DPZf3ZEq.js";import"./Text-CiXcXSql.js";import"./FieldError-CHU7gQK7.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-DEPqS5ry.js";import"./AlertIcon-Mg7Q3zgv.js";import"./IconWarning-BD_MiEVG.js";import"./remote-BDffDiLd.js";import"./useFieldComponent-CZ4YFclL.js";import"./Form-BRbECj4N.js";import"./useLabel-Cp7FQmHU.js";import"./Group-B6Ij3cqY.js";import"./useFocusRing-Bar7hbU_.js";import"./useFocus-ClxCJYgX.js";import"./Input-V-OR_KLg.js";import"./usePress-v4r7x8aW.js";import"./useFormValidation-lvugQbRf.js";import"./useControlledState--GEywRyg.js";import"./FocusScope-DbX1j6h6.js";import"./useCollator-DkqZ4sPc.js";import"./useFormReset-DsbUUfuN.js";import"./useEvent-8dtJi2Bo.js";import"./useSpinButton-BOxOLSys.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-D_K5jCWA.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
