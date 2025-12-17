import{j as r}from"./iframe-XAYsosb6.js";import{L as d}from"./Label-CXTzqQ-l.js";import{F as u}from"./FieldDescription-hqNXMC67.js";import{F as T}from"./FieldError-BTxqYaQG.js";import{T as i}from"./TimeField-Dx3q6fxi.js";import{K as l}from"./DateInput-DAbkzdE4.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgSAAcwE.js";import"./index-DT-o6Yom.js";import"./index-CuyBkc62.js";import"./useLocalizedStringFormatter-CIJR_8KJ.js";import"./context-B1g6MDkd.js";import"./Label-jhCIdmWo.js";import"./utils-mpNKu3Qr.js";import"./Hidden-BXwhawaS.js";import"./Text-D0dxXYDJ.js";import"./browser-CF4AtnhZ.js";import"./EmulatedBoldText-CnKUILfp.js";import"./Text-DoECDV-v.js";import"./FieldError-DKscD9VY.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconChevronDown-CLHuWDBx.js";import"./remote-DUrH5qha.js";import"./IconDanger-Bj-mV1cE.js";import"./useFieldComponent-D6Qiol7C.js";import"./Form-CdD0eZj8.js";import"./useLabel-vx5-dYQf.js";import"./Group-70bt3PCe.js";import"./useFocusRing-Dezl-MaY.js";import"./useFocus-6tpgkBNV.js";import"./Input-Wj2hF-sT.js";import"./usePress-DqzrclQw.js";import"./useFormValidation-L0cY-070.js";import"./useControlledState-DFlLGPV3.js";import"./FocusScope-utk7FKt0.js";import"./useCollator-Bwevici6.js";import"./useFormReset-B8jo6HhA.js";import"./useEvent-BPTus2_l.js";import"./useSpinButton-VKB58_Om.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DL4cetgM.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
