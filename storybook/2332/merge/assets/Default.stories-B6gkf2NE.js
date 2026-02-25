import{j as r}from"./iframe-n3VOiEf5.js";import{L as d}from"./Label-B5oQkcZ-.js";import{F as u}from"./FieldDescription-CP4R52YC.js";import{F as T}from"./FieldError-DRCS1Gz9.js";import{T as i}from"./TimeField-DaVAnX06.js";import{L as l}from"./DateInput-CFoxj9q9.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./index-CHzAo02W.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./context-DhQskmxc.js";import"./Label-CZ6Ig0wh.js";import"./utils-BTX3Dk-t.js";import"./Hidden-8NzXPPVn.js";import"./Text-CwVjZxCT.js";import"./browser-DXFXi5M2.js";import"./EmulatedBoldText-eIBSog0P.js";import"./Text-BWj5dCJ1.js";import"./FieldError-IZ2wmqkG.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BJDrahB4.js";import"./AlertIcon-DtfTxuVy.js";import"./IconWarning-BKHoIgIa.js";import"./remote-CWx46e_E.js";import"./useFieldComponent-6hUMLoYk.js";import"./Form-BfOiuDw8.js";import"./useLabel-DpN8AhZi.js";import"./Group-DIIOLL_5.js";import"./useFocusRing-50iWl84k.js";import"./useFocus-Di5Kz97s.js";import"./Input-IuhSVj8_.js";import"./usePress-CVHN3NRW.js";import"./FocusScope-BBR4OeS8.js";import"./useCollator-BWOk8TKb.js";import"./useFormReset-C-KjP2af.js";import"./useFormValidation-0mLIssn1.js";import"./useEvent-D6V5lpJs.js";import"./useSpinButton-BovD8sn_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-P9w130EC.js";import"./useControlledState-17a16_5D.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
