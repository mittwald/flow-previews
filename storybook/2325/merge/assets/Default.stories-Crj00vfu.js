import{j as r}from"./iframe-C5ZTNo7B.js";import{L as d}from"./Label-D_0GeMuu.js";import{F as u}from"./FieldDescription-COkKjWuk.js";import{F as T}from"./FieldError-BDB9mSsz.js";import{T as i}from"./TimeField-kHbe9l4O.js";import{L as l}from"./DateInput-Bk7to0Qk.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C74LPcu8.js";import"./index-DezMBlvl.js";import"./index-L0hXSSnD.js";import"./useLocalizedStringFormatter-CDqYfAHq.js";import"./context-Zfd40gqJ.js";import"./Label-BSZlsNs_.js";import"./utils-BuDA3Ujk.js";import"./Hidden-U4jsQoYY.js";import"./Text-vc01bOb1.js";import"./browser-CszbwzXz.js";import"./EmulatedBoldText-DrBpqUUw.js";import"./Text-DfHOPDAf.js";import"./FieldError-CU71BOGK.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-EmpeosBS.js";import"./AlertIcon-Da43IrrR.js";import"./IconWarning-Bhk_rtuP.js";import"./remote-DVpXA9eO.js";import"./useFieldComponent-hFC9tXxl.js";import"./Form-CMpIiu9M.js";import"./useLabel-BfXWSkVN.js";import"./Group-DGqA1oIQ.js";import"./useFocusRing-rbh4dKQ_.js";import"./useFocus-wNGus_RY.js";import"./Input-DU4gQuZk.js";import"./usePress-ef-k5VSc.js";import"./FocusScope-PkAgaAiM.js";import"./useCollator-CAZNHi0m.js";import"./useFormReset-D7awHB0C.js";import"./useFormValidation-CtRrQmcu.js";import"./useEvent-BqK5cB2S.js";import"./useSpinButton-daa1a0NH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BxWbBMgn.js";import"./useControlledState-e_mWhKHk.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
