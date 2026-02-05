import{j as r}from"./iframe-ByQojKkA.js";import{L as d}from"./Label-zx0kmle1.js";import{F as u}from"./FieldDescription-BpqjIUfK.js";import{F as T}from"./FieldError-Dl1gROKX.js";import{T as i}from"./TimeField-D8JnCdh_.js";import{L as l}from"./DateInput-XnxPqcJx.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-finO9fDl.js";import"./index-bUDX88mR.js";import"./index-DifIgMrD.js";import"./useLocalizedStringFormatter-EfbLvfF-.js";import"./context-B2MAxUi3.js";import"./Label-Ca-ZH_hh.js";import"./utils-D3Fm7Ut8.js";import"./Hidden-B7m2oWRR.js";import"./Text-B1R6GgBU.js";import"./browser-BgQK0KeO.js";import"./EmulatedBoldText-CozfSoiL.js";import"./Text-BjqL4T8G.js";import"./FieldError-DskIGmIg.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-C88MmDo3.js";import"./AlertIcon-C-5STchL.js";import"./IconWarning-tVGTIzEo.js";import"./remote-CpbK9d4g.js";import"./useFieldComponent-Blt-XhY9.js";import"./Form-Cffumk9C.js";import"./useLabel-BZ22SDLr.js";import"./Group-CNDS5EKI.js";import"./useFocusRing-D8JCvm1f.js";import"./useFocus-CIqVesE-.js";import"./Input-qfXo-HDb.js";import"./usePress-BwnADfjY.js";import"./useFormValidation-DiyC9X3o.js";import"./useControlledState-CdOFY_9U.js";import"./FocusScope-Df45VKi0.js";import"./useCollator-KAAcb033.js";import"./useFormReset-CjuTJ3ym.js";import"./useEvent-Dbu6PXWh.js";import"./useSpinButton-B-s9WD8n.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Dasz7pZm.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
