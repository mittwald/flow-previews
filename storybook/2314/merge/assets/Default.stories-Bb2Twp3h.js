import{j as r}from"./iframe-lphi5Fln.js";import{L as d}from"./Label-CqftOgdQ.js";import{F as u}from"./FieldDescription-CbFWtu2W.js";import{F as T}from"./FieldError-CHFlSzPg.js";import{T as i}from"./TimeField-DKRQJSg1.js";import{L as l}from"./DateInput-k0zMyWuO.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0jdWuAG.js";import"./index-BDdjr3yJ.js";import"./index-BirbEfWe.js";import"./useLocalizedStringFormatter-ZZw30b7A.js";import"./context-hul-JKEa.js";import"./Label-mBHJjPT6.js";import"./utils-Is-sFETw.js";import"./Hidden-B_Gq1hkl.js";import"./Text-DhRxTRp1.js";import"./browser-DxP0Rs6D.js";import"./EmulatedBoldText-5wQJnzOA.js";import"./Text-CwPOMTFI.js";import"./FieldError-nA_6I3J3.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BlI1Muxp.js";import"./AlertIcon-Tp_Bhr3n.js";import"./IconWarning-Dv_szZY_.js";import"./remote-B9VD8JHH.js";import"./useFieldComponent-6mmayeW0.js";import"./Form-BQ7FIPf4.js";import"./useLabel-B3jPjt5T.js";import"./Group-Co1kbRjJ.js";import"./useFocusRing-y2NKP0hv.js";import"./useFocus-BYwX3hbJ.js";import"./Input-CYD73VvK.js";import"./usePress-ByR9A8gc.js";import"./FocusScope-DRoVwcjL.js";import"./useCollator-wUqkBaab.js";import"./useFormReset-CSRdRe02.js";import"./useFormValidation-fTAeqOxz.js";import"./useEvent-CjOYrEf7.js";import"./useSpinButton-D8eHSADJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BqyC-x6o.js";import"./useControlledState-D2ulvinQ.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
