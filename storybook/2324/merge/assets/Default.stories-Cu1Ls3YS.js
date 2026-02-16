import{j as r}from"./iframe-CdHyQgwh.js";import{L as d}from"./Label-C70YwB90.js";import{F as u}from"./FieldDescription-BPEDfYs_.js";import{F as T}from"./FieldError-BmlEdUcT.js";import{T as i}from"./TimeField-CNqP-Nxh.js";import{L as l}from"./DateInput-BV50JlHi.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7-oBhxO.js";import"./index-C1bimC6f.js";import"./index--KyPRnlY.js";import"./useLocalizedStringFormatter-UNvRhnZH.js";import"./context--lHaHpmz.js";import"./Label-Cm5GkE6R.js";import"./utils-B0AChKxF.js";import"./Hidden-DJi7BiD_.js";import"./Text-CG9Jqgcw.js";import"./browser-CBJMDWdB.js";import"./EmulatedBoldText-C0e2olgf.js";import"./Text-CFtcNM5e.js";import"./FieldError-BTLVyZmC.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DldHmlNs.js";import"./AlertIcon-yA83KE1p.js";import"./IconWarning-DGc3SgEa.js";import"./remote-BRyh19SP.js";import"./useFieldComponent-t62DY9AA.js";import"./Form-BHZ6w-7V.js";import"./useLabel-DXx1BftH.js";import"./Group-B7D8BaP2.js";import"./useFocusRing-Ba3uGuMn.js";import"./useFocus-D4xdQDkq.js";import"./Input-DK8ERkio.js";import"./usePress-DIa0iaS-.js";import"./FocusScope-OuWnR4TG.js";import"./useCollator-DHN-qUKB.js";import"./useFormReset-D88R_CF2.js";import"./useFormValidation-8M-A-L7s.js";import"./useEvent-BCEPVcfC.js";import"./useSpinButton-BhBsv142.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CbNjMjpl.js";import"./useControlledState-D2jLiTCX.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
