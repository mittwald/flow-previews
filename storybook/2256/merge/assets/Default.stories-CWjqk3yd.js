import{j as r}from"./iframe-CIXg2wml.js";import{L as d}from"./Label-qxc1gCGy.js";import{F as u}from"./FieldDescription-Ca0n3MzM.js";import{F as T}from"./FieldError-BH2vnwI0.js";import{T as i}from"./TimeField-DSFooD0h.js";import{L as l}from"./DateInput-CV7-9CsT.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-2SDDcL6i.js";import"./index-stwZ4S38.js";import"./index-CUACQQJf.js";import"./useLocalizedStringFormatter-DQ68Yc1-.js";import"./context-TKY6ae7T.js";import"./Label-DkYkYhBQ.js";import"./utils-E3QCR4Ei.js";import"./Hidden-CGz-Nf89.js";import"./Text-ClE4EaJv.js";import"./browser-CYeJE0Iy.js";import"./EmulatedBoldText--LsvyM20.js";import"./Text-BTcAnKOQ.js";import"./FieldError-B2EiL9vq.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-Cyx_yayU.js";import"./AlertIcon-DJUqjVOR.js";import"./IconWarning-CiSujg9K.js";import"./remote-8tD3tcl0.js";import"./useFieldComponent-D7V8J4vf.js";import"./Form-AGjJK_iq.js";import"./useLabel-pvILaDrT.js";import"./Group-BARt7F5J.js";import"./useFocusRing-CJfArHTm.js";import"./useFocus-Xgz2P1v-.js";import"./Input-DGQ1K2ts.js";import"./usePress-C_LDf41x.js";import"./useFormValidation-B5rYBS3I.js";import"./useControlledState-euBd3hty.js";import"./FocusScope-BVD53JA4.js";import"./useCollator-nDdvYdK7.js";import"./useFormReset-BWhLZN3-.js";import"./useEvent-D8tLlxQx.js";import"./useSpinButton-Bu9V05KW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-p9jkH4g-.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
