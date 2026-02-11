import{j as r}from"./iframe-BRGIT6aC.js";import{L as d}from"./Label-DYHgdjdj.js";import{F as u}from"./FieldDescription-BhKmM-2J.js";import{F as T}from"./FieldError-BPfKA2u4.js";import{T as i}from"./TimeField-BVWutU9V.js";import{L as l}from"./DateInput-DO9Z_4qV.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gC5J80sd.js";import"./index-DCYGO5ln.js";import"./index-CrtVPr5B.js";import"./useLocalizedStringFormatter-CVE6cVib.js";import"./context-C5al0DRJ.js";import"./Label-Ba69oYDq.js";import"./utils-D-ssFu49.js";import"./Hidden-QhxhoagL.js";import"./Text-RxDad6dn.js";import"./browser-BYxlW31W.js";import"./EmulatedBoldText-D5rj6KVU.js";import"./Text-CBpyQBbE.js";import"./FieldError-f7o5-LTX.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Ba5ab3-o.js";import"./AlertIcon-DeOHvzVA.js";import"./IconWarning-7xibGY50.js";import"./remote-B0Hk_38y.js";import"./useFieldComponent-CMRD4Pyo.js";import"./Form-97YOGsKi.js";import"./useLabel-CWpJX9lW.js";import"./Group-COVCD_be.js";import"./useFocusRing-B_bORcJM.js";import"./useFocus-Dz-IuM4k.js";import"./Input-CEj_QPsV.js";import"./usePress-CGLZGzkl.js";import"./FocusScope-D2KgIyLw.js";import"./useCollator-B5DUtkng.js";import"./useFormReset-CXZmek7W.js";import"./useFormValidation-D-IfNlYy.js";import"./useEvent-C0jUKnCT.js";import"./useSpinButton-BN7kr9uz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-LUL0iR9U.js";import"./useControlledState-C2xaeP2Y.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
