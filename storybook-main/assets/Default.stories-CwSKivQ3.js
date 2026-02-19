import{j as r}from"./iframe-B2CTi6cm.js";import{L as d}from"./Label-DccH0oyj.js";import{F as u}from"./FieldDescription-Cp3TAr2a.js";import{F as T}from"./FieldError-Cpb_w0Fh.js";import{T as i}from"./TimeField-DXSmUvak.js";import{L as l}from"./DateInput-CiHsaT2-.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7mc_ao_.js";import"./index-C6Xw33Ma.js";import"./index-DqADrqmd.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./context-DlyTwf6g.js";import"./Label-tk3Z2cvp.js";import"./utils-CFhs-kxq.js";import"./Hidden-DPfyW1TC.js";import"./Text-4QTNuVgz.js";import"./browser-Cn-sjrEd.js";import"./EmulatedBoldText-B1qN59os.js";import"./Text-CtUv1EPC.js";import"./FieldError-Cj-zQd3o.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Dh_kjMlW.js";import"./AlertIcon-Bqwt-hqt.js";import"./IconWarning-hrUSNLB1.js";import"./remote-C6QTRNf9.js";import"./useFieldComponent-DO-gEAYc.js";import"./Form-Cx6Bm7Pi.js";import"./useLabel-DatykuNG.js";import"./Group-Dv7pzL4P.js";import"./useFocusRing-G6UDZPL7.js";import"./useFocus-iUa6wpVM.js";import"./Input-KDCOY3Ar.js";import"./usePress-CXOW9Qje.js";import"./FocusScope-DAIUMiFj.js";import"./useCollator-DfexieBx.js";import"./useFormReset-BMX0RNLQ.js";import"./useFormValidation-BDHhHN4L.js";import"./useEvent-Ccc4zbbb.js";import"./useSpinButton-ChYgWKci.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CUYbfXOl.js";import"./useControlledState-D4tpAkeT.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
