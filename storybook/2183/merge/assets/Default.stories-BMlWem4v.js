import{j as r}from"./iframe-C0Xzz6Xl.js";import{L as d}from"./Label-B2dU-Foq.js";import{F as u}from"./FieldDescription-C_2F70ew.js";import{F as T}from"./FieldError-COJQpxO2.js";import{T as i}from"./TimeField-Cc9xoTpD.js";import{K as l}from"./DateInput-DrqMqsOf.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ds2Zpckn.js";import"./index-BvD-rn0f.js";import"./index-BkQRYDSQ.js";import"./useLocalizedStringFormatter-JxxzEpeY.js";import"./context-D7OeR9su.js";import"./Label-CKDZcwiZ.js";import"./utils-DFqauJju.js";import"./Hidden-C5gaELfT.js";import"./Text-BUGgmeAk.js";import"./browser-GRuvXKoj.js";import"./EmulatedBoldText-Bu7fFWiW.js";import"./Text-DHURGNQD.js";import"./FieldError-D1TN1uH_.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconChevronDown-CArgk7t7.js";import"./remote-Dsm2RjO6.js";import"./IconDanger-Dkbk0FFN.js";import"./useFieldComponent-BRIXb0CQ.js";import"./Form-DJAYx_sb.js";import"./useLabel-Zu9XfwEA.js";import"./Group-BpFeMFVu.js";import"./useFocusRing-Bftxxd_V.js";import"./useFocus-B1cKxXv-.js";import"./Input-rZfax9iy.js";import"./usePress-5FukuHow.js";import"./useFormValidation-D4H7vgpB.js";import"./useControlledState-DnOVZzTA.js";import"./FocusScope-ClGhoguJ.js";import"./useCollator-BDv8d74S.js";import"./useFormReset-BXb8b3rI.js";import"./useEvent-CecaYo_j.js";import"./useSpinButton-BBfBy3uv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BOR7ysDb.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
