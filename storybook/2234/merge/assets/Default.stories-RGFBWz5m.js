import{j as r}from"./iframe-Cz8_C8zY.js";import{L as d}from"./Label-gR0Y05hv.js";import{F as u}from"./FieldDescription-D3ZeP19z.js";import{F as T}from"./FieldError-CEw8HJGt.js";import{T as i}from"./TimeField-By7imqM3.js";import{L as l}from"./DateInput-bJXbgkaC.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BcPJG4Ua.js";import"./index-Cdfsiuxw.js";import"./index-SrORw6vN.js";import"./useLocalizedStringFormatter-Bo3Sbs5c.js";import"./context-VkDhZA-x.js";import"./Label-2kcHPH94.js";import"./utils-BAKlH2Lm.js";import"./Hidden-CWAqagDm.js";import"./Text-YjLUuftS.js";import"./browser-B6rfwAqc.js";import"./EmulatedBoldText-Dt-OzvRV.js";import"./Text-Cr087Rh_.js";import"./FieldError-B254xHCi.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DLbRRuK1.js";import"./remote-D3nX27fk.js";import"./useFieldComponent--MNREdev.js";import"./Form-Bv3CSU0e.js";import"./useLabel-BFm9pXXT.js";import"./Group-CFuZraH7.js";import"./useFocusRing-BDmU1dd9.js";import"./useFocus-DFbFm1Xx.js";import"./Input-MUdQf2Tz.js";import"./usePress-DcZz-lB5.js";import"./useFormValidation-DBiWbYgf.js";import"./useControlledState-C0o23ioH.js";import"./FocusScope-DR3pULV0.js";import"./useCollator-B9bMczBX.js";import"./useFormReset-CSPeTQLr.js";import"./useEvent-Wcg6Cj6E.js";import"./useSpinButton-C9YCFEYz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DZr1KQYE.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
