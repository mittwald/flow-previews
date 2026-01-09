import{j as r}from"./iframe-DB4UlQ_F.js";import{L as d}from"./Label-D60b9GFw.js";import{F as u}from"./FieldDescription-DVjEBj0_.js";import{F as T}from"./FieldError-7mdFLW8I.js";import{T as i}from"./TimeField-ClY4Bbix.js";import{L as l}from"./DateInput-D1hSR94U.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BL-3GjRu.js";import"./index-DpDRS9kh.js";import"./index-BSqJ1-JW.js";import"./useLocalizedStringFormatter-DsWJPkCN.js";import"./context-BeH9c2u_.js";import"./Label-CzwPVXKy.js";import"./utils-B6Q0cVYp.js";import"./Hidden-BofTzQhQ.js";import"./Text-CvhufvNl.js";import"./browser-CMEWPYW9.js";import"./EmulatedBoldText-1LQNM6BM.js";import"./Text-De_rG2Pz.js";import"./FieldError-CegzLELq.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-D6sMwWyV.js";import"./remote-DOdcl-CB.js";import"./useFieldComponent-Dp69OqtL.js";import"./Form-PeScrtUS.js";import"./useLabel-bn4O9qyi.js";import"./Group-DyD1FYug.js";import"./useFocusRing-BToYuWbv.js";import"./useFocus-mLt6Jcka.js";import"./Input-DgHFnA4a.js";import"./usePress-CDGll4uD.js";import"./useFormValidation-Bt0uBrAk.js";import"./useControlledState-2lUl0kro.js";import"./FocusScope-D57vEPf5.js";import"./useCollator-BdTHcpkR.js";import"./useFormReset-zmgaZOpR.js";import"./useEvent-C6FAavwc.js";import"./useSpinButton-nCFgk4b8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CP__Oj05.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
