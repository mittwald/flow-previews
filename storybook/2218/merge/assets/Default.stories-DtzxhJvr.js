import{j as r}from"./iframe-BVdPrJ3b.js";import{L as d}from"./Label-CzweG7Yl.js";import{F as u}from"./FieldDescription-CkXX9Bje.js";import{F as T}from"./FieldError-BeQ9X37c.js";import{T as i}from"./TimeField-CEsmhc1s.js";import{L as l}from"./DateInput-rgP20Q9T.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-od4I0R-N.js";import"./index-i9F-e6Sd.js";import"./index-BWMeLKrj.js";import"./useLocalizedStringFormatter-CWJICem7.js";import"./context-D026yTy_.js";import"./Label-kfmO3nvk.js";import"./utils-BEq1Wr11.js";import"./Hidden-Dqh1ls-B.js";import"./Text-nQWL8z2r.js";import"./browser-DSBfFWZr.js";import"./EmulatedBoldText-BVln2yP5.js";import"./Text-CmXVeCCc.js";import"./FieldError-BhKmMJaW.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-YADbbYCH.js";import"./remote-CTgJkn4z.js";import"./useFieldComponent-Pua8aj4t.js";import"./Form-BeiuGm7T.js";import"./useLabel-CZZK6Myr.js";import"./Group-Bu0EB2GR.js";import"./useFocusRing-D6WsekYV.js";import"./useFocus-DKH0A8r5.js";import"./Input-Du7-TamR.js";import"./usePress-DUwPxRbX.js";import"./useFormValidation-BHFBjW_A.js";import"./useControlledState-CgIeep-j.js";import"./FocusScope-Bh-KjmdJ.js";import"./useCollator-CjJjrWZi.js";import"./useFormReset-DipgmSs2.js";import"./useEvent-DCTAoM_e.js";import"./useSpinButton-DFr3fCTO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DdMa6cst.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const tr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,tr as __namedExportsOrder,ar as default};
