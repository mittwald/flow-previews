import{j as r}from"./iframe-BrERPjH0.js";import{L as d}from"./Label-CrwXzsx_.js";import{F as u}from"./FieldDescription-6rmHkF1O.js";import{F as T}from"./FieldError-H2u6oDij.js";import{T as i}from"./TimeField-BrO6Lpbv.js";import{K as l}from"./DateInput-DTIzHp7e.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B5K74hVz.js";import"./index-AmygQZwT.js";import"./index-DzMVKTvo.js";import"./useLocalizedStringFormatter-CF-Xe2GT.js";import"./context-DvwVEH9h.js";import"./Label-D4vlL-gU.js";import"./utils-DSRl4UW4.js";import"./Hidden-BAsL4qfb.js";import"./Text-Bge3UWaD.js";import"./browser-YFSmfPOL.js";import"./EmulatedBoldText-ihVL4TkF.js";import"./Text-CFQd4N__.js";import"./FieldError-DI8l-yzx.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconChevronDown-BEw7wgap.js";import"./remote-Fny-y5bx.js";import"./IconDanger-CeY6S6MU.js";import"./useFieldComponent-WOZCxk1N.js";import"./Form-CRLN4oBl.js";import"./useLabel-CWOKZ_16.js";import"./Group-D-Zc97xh.js";import"./useFocusRing-KYw8u7bF.js";import"./useFocus-BqH6bZyL.js";import"./Input-D0yPZXTG.js";import"./usePress-CXQYTWPh.js";import"./useFormValidation-sc5NnAzh.js";import"./useControlledState-C9HQthZh.js";import"./FocusScope-BjIKDCVD.js";import"./useCollator-oX0awY0e.js";import"./useFormReset-Bw5L0YJo.js";import"./useEvent-CWpAuNO7.js";import"./useSpinButton-D1RTbvLc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Fsue7jHv.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
