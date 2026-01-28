import{j as r}from"./iframe-B-26223i.js";import{L as d}from"./Label-htHf1MZ3.js";import{F as u}from"./FieldDescription-DQk95Kge.js";import{F as T}from"./FieldError-DKJxt2u7.js";import{T as i}from"./TimeField-IgfkLhLx.js";import{L as l}from"./DateInput-Azs4EBzI.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cm2ULMwR.js";import"./index-C96xSvbi.js";import"./index-CMj-JRml.js";import"./useLocalizedStringFormatter-CHKosLk9.js";import"./context-B9n95xcZ.js";import"./Label-Ddb5Z1yf.js";import"./utils-CprJ_klo.js";import"./Hidden-BAuAU20u.js";import"./Text-C25EED6m.js";import"./browser-DNWQphaZ.js";import"./EmulatedBoldText-Co4v7GV8.js";import"./Text-CrdzXlCc.js";import"./FieldError-B1RwUwkr.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-SDytihrL.js";import"./AlertIcon-Bi7YC7dH.js";import"./IconWarning-CfZm6euj.js";import"./remote-CUr3PG4h.js";import"./useFieldComponent-eul3OsXk.js";import"./Form-Vtk-UJSV.js";import"./useLabel-DUREvcwl.js";import"./Group-DQX_CbI0.js";import"./useFocusRing-DATGHg9y.js";import"./useFocus-DYSsUR82.js";import"./Input-C02u9QAf.js";import"./usePress-BlwAXRn7.js";import"./useFormValidation-CodwuA9r.js";import"./useControlledState-CCY4nzRh.js";import"./FocusScope-BG92zKg5.js";import"./useCollator-cEvXopFB.js";import"./useFormReset-BQreYCpE.js";import"./useEvent-C1z2hzAA.js";import"./useSpinButton-CWFJSyKK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Dwu_U_jl.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
