import{j as r}from"./iframe-Q1VSciNm.js";import{L as d}from"./Label-CSNGUTYQ.js";import{F as u}from"./FieldDescription-CuqQgw1Y.js";import{F as T}from"./FieldError-RY9dMzjY.js";import{T as i}from"./TimeField-CyeIxRzf.js";import{L as l}from"./DateInput-CWtBTFz-.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CPW7r7fk.js";import"./index-CfXDE0zj.js";import"./index-C3b6LhZY.js";import"./useLocalizedStringFormatter-CLD0dVJV.js";import"./context-BLO98TmC.js";import"./Label-DHpNBk6c.js";import"./utils-Cfx54F97.js";import"./Hidden-XjRrgtIh.js";import"./Text-1lLVDQct.js";import"./browser-DUAAaQNQ.js";import"./EmulatedBoldText-Bq17Dbi4.js";import"./Text-FwHfWGj4.js";import"./FieldError-QjdNZ-FN.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-D1OEnaPR.js";import"./AlertIcon-C25ddq9s.js";import"./IconWarning-Bp2wXPUs.js";import"./remote-B8jFwJ6r.js";import"./useFieldComponent-1pDy4PKz.js";import"./Form-rX7Gw7MM.js";import"./useLabel-B4QM81Mz.js";import"./Group-CKcbXsxe.js";import"./useFocusRing-oK86YNHq.js";import"./useFocus-Dgy1zF73.js";import"./Input-a5vdzoE4.js";import"./usePress-CkY15rDX.js";import"./useFormValidation-DIYVKRGL.js";import"./useControlledState-Cr50bzxN.js";import"./FocusScope-BLxdUf1u.js";import"./useCollator-Dn5lVtzm.js";import"./useFormReset-C0YD-aRq.js";import"./useEvent-B6bvG52n.js";import"./useSpinButton-BLgRyvSd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Cp03qGtR.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
