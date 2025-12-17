import{j as r}from"./iframe-DnYi-t8H.js";import{L as d}from"./Label-DliS2X1j.js";import{F as u}from"./FieldDescription-Dv0mKlK_.js";import{F as T}from"./FieldError-9-oFldGv.js";import{T as i}from"./TimeField-1hYIR4sE.js";import{K as l}from"./DateInput-BrT7mZcc.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiRXm_7W.js";import"./index-6rd6RhLs.js";import"./index-B9w1U9jw.js";import"./useLocalizedStringFormatter-D1M6ycSH.js";import"./context-BormPWP-.js";import"./Label-DpP4Z3U4.js";import"./utils-DErHybyt.js";import"./Hidden-D2dwjMI8.js";import"./Text-Bl1v2nei.js";import"./browser-Cx51Q07l.js";import"./EmulatedBoldText-C_7kGQpM.js";import"./Text-CnHQzzWa.js";import"./FieldError-DFN_xfpl.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconApp-C4H0Rmt2.js";import"./remote-BR657ewb.js";import"./IconDanger-CDad_7H2.js";import"./useFieldComponent-BC1W_qCr.js";import"./Form-BNVSNvMr.js";import"./useLabel-CvNtERHu.js";import"./Group-trRaFn9q.js";import"./useFocusRing-DBOpxQ6c.js";import"./useFocus-Cp5_bDzt.js";import"./Input-Ci5DOXXh.js";import"./usePress-BSFKAxA8.js";import"./useFormValidation-D4Tsj5aM.js";import"./useControlledState-CUB7XdW4.js";import"./FocusScope-CymXO5HE.js";import"./useCollator-b7BSiHgL.js";import"./useFormReset-CY2BFsrw.js";import"./useEvent-BzaRCHg1.js";import"./useSpinButton-CdXuuupI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-psDKWrDH.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
