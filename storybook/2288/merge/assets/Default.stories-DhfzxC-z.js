import{j as r}from"./iframe-CdVpWnc8.js";import{L as d}from"./Label-CQQzXuOB.js";import{F as u}from"./FieldDescription-CO9NCU0r.js";import{F as T}from"./FieldError-0fRgmDO9.js";import{T as i}from"./TimeField-CLdyKWLc.js";import{L as l}from"./DateInput-CKI4OEX7.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./index-CPzHqOMO.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./context-Bg-StFGN.js";import"./Label-BlSWZv6R.js";import"./utils-ClIic5nH.js";import"./Hidden-47TYSTIy.js";import"./Text-KDInGMjK.js";import"./browser-CWGq_9Zm.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";import"./FieldError-U_T6R5BY.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DPJNXYjA.js";import"./AlertIcon-DVQphOxP.js";import"./IconWarning-Ba9_xFUh.js";import"./remote-BheCwFS8.js";import"./useFieldComponent-pH8UQhzW.js";import"./Form-BAj6LeSM.js";import"./useLabel-BKXkodj0.js";import"./Group-B1_lIqzJ.js";import"./useFocusRing-dkAGsBkQ.js";import"./useFocus-DZX-xW1t.js";import"./Input-CCUGOCeS.js";import"./usePress-CCAUNqmr.js";import"./useFormValidation-5isdk9bY.js";import"./useControlledState-B7ztCH5k.js";import"./FocusScope-D5Cgd53Y.js";import"./useCollator-BLLfUz8T.js";import"./useFormReset-D5EHipFr.js";import"./useEvent-lhMNtMgY.js";import"./useSpinButton-BUGyI61e.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-4wB85Nlv.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
