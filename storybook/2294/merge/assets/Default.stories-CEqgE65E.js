import{j as r}from"./iframe-RCf6-4YI.js";import{L as d}from"./Label-BRnkJYm7.js";import{F as u}from"./FieldDescription-BvKq_AxB.js";import{F as T}from"./FieldError-KQe80RuS.js";import{T as i}from"./TimeField-tOzPvtZa.js";import{L as l}from"./DateInput-Bz7Bfk8g.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gpdQqKr8.js";import"./index-DOrHsa1U.js";import"./index-BOW2unrE.js";import"./useLocalizedStringFormatter-BHr3YdQC.js";import"./context-C_2cqKRl.js";import"./Label-DjMItCLE.js";import"./utils-2Kt3K5yX.js";import"./Hidden-C6k2LQ4g.js";import"./Text-HaNR6yqL.js";import"./browser-CrfZ_U78.js";import"./EmulatedBoldText-DexDNb3B.js";import"./Text-BGlg7n8N.js";import"./FieldError-C_jxYX-6.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-C7SuhXn-.js";import"./AlertIcon-C_s3bh0k.js";import"./IconWarning-B0h7osnB.js";import"./remote-B1M75xiP.js";import"./useFieldComponent-C9VOsv8D.js";import"./Form-DuREI75N.js";import"./useLabel-6KWBnhoZ.js";import"./Group-CFlsgvT_.js";import"./useFocusRing-DZgLoJPG.js";import"./useFocus-BlmWIWuz.js";import"./Input-7NMAjvPw.js";import"./usePress--XVd0Ch5.js";import"./useFormValidation-WgNojhOC.js";import"./useControlledState-BQGvOabU.js";import"./FocusScope-BrE8vcb4.js";import"./useCollator-CJsBKryN.js";import"./useFormReset-CpZDZfD6.js";import"./useEvent-2JrAtdMs.js";import"./useSpinButton-DvCfeAOO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DNSa68za.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
