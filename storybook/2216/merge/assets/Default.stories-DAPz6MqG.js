import{j as r}from"./iframe-d8TPt7Dq.js";import{L as d}from"./Label-DUZNK_N3.js";import{F as u}from"./FieldDescription-CQGlo9YG.js";import{F as T}from"./FieldError-Z630sQ-Y.js";import{T as i}from"./TimeField-DPHvrWWF.js";import{L as l}from"./DateInput-DeNAMSji.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./index-hNZo4M03.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./context-s9WFa2xd.js";import"./Label-Ddce6lPW.js";import"./utils-CQWCrNEN.js";import"./Hidden-DwOTALl4.js";import"./Text-B_83j2CJ.js";import"./browser-Cq89yPle.js";import"./EmulatedBoldText-Dx_IZKf8.js";import"./Text-CbFZ93_1.js";import"./FieldError-D74Rm1AJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BBwUIuFu.js";import"./remote-DqOJ-OtV.js";import"./useFieldComponent-XccPD61N.js";import"./Form-bB72J6qo.js";import"./useLabel-CyX9DgZ-.js";import"./Group-Bs1XJ8tf.js";import"./useFocusRing-Pl_83XSU.js";import"./useFocus-Dzzsimxq.js";import"./Input-Cp9jMkj6.js";import"./usePress-DD6hZDmw.js";import"./useFormValidation-DzABwrGN.js";import"./useControlledState-Du7Hq4ap.js";import"./FocusScope-TlUkqt74.js";import"./useCollator-BT1LDj3M.js";import"./useFormReset-AO5_sbxL.js";import"./useEvent-BEdiQQE9.js";import"./useSpinButton-29Gwa10p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DPURccgC.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
