import{j as r}from"./iframe-DQkRMfo_.js";import{L as d}from"./Label-CITwA187.js";import{F as u}from"./FieldDescription-BmqjHv9O.js";import{F as T}from"./FieldError-Bk57uQQs.js";import{T as i}from"./TimeField-CND8bKJd.js";import{L as l}from"./DateInput-CPlZ7W4r.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-COr712P3.js";import"./index-BIVF9xJy.js";import"./index-BmRrr2ih.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./context-XfcuIoVT.js";import"./Label-BXbqiwP4.js";import"./utils-Bfb5K-41.js";import"./Hidden-xLATKa2n.js";import"./Text-DZXogYJp.js";import"./browser-BnHwZVCd.js";import"./EmulatedBoldText-BSCRafBI.js";import"./Text-BXxFgtol.js";import"./FieldError-BDV0g7vQ.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CwnG_GRo.js";import"./AlertIcon-x4dcgk_u.js";import"./IconWarning-D2qqMRrO.js";import"./remote-CkmXCgJk.js";import"./useFieldComponent-DKGKIVkH.js";import"./Form-DMHoM5vs.js";import"./useLabel-BKmqgaQh.js";import"./Group-Dmhi8ayL.js";import"./useFocusRing-CrR0o1Yj.js";import"./useFocus-BSyQYzHK.js";import"./Input-DgbrTWmb.js";import"./usePress-D8-KGEPi.js";import"./FocusScope-DAhxUr4_.js";import"./useCollator-DSD1PPYr.js";import"./useFormReset-CbTvEeV3.js";import"./useFormValidation-Baae3HaH.js";import"./useEvent-qZsiEiZh.js";import"./useSpinButton-EWyyTHmz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BtrqwS-E.js";import"./useControlledState-CA4wGiI1.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
