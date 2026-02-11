import{j as r}from"./iframe-CNIcTJYh.js";import{L as d}from"./Label-Dk1BsiHf.js";import{F as u}from"./FieldDescription-D4T9Jptd.js";import{F as T}from"./FieldError-CRJL1-ZW.js";import{T as i}from"./TimeField-DHEM_ipM.js";import{L as l}from"./DateInput-bi1peSAI.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-60nesrge.js";import"./index-D3p32_5k.js";import"./index-UhPRO7XN.js";import"./useLocalizedStringFormatter-Rr_25XDQ.js";import"./context-C-_0n7Mf.js";import"./Label-T_N4SAco.js";import"./utils-BMrW0rs-.js";import"./Hidden-CRwhep7p.js";import"./Text-6t0QtAeQ.js";import"./browser-e5gpn1Ib.js";import"./EmulatedBoldText-Cp_XieAh.js";import"./Text-D2vn8IUC.js";import"./FieldError-C-WtBUhj.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-C0QdtU2r.js";import"./AlertIcon-CQAKF3sa.js";import"./IconWarning-DfNRCo5R.js";import"./remote-yIvwWX6j.js";import"./useFieldComponent-BcSx3cQM.js";import"./Form-DFzq_6cf.js";import"./useLabel-OR8aG57O.js";import"./Group-B3nGsmaJ.js";import"./useFocusRing-DW-rJUC8.js";import"./useFocus-Z0zsAUPg.js";import"./Input-DXXfkxpG.js";import"./usePress-YapnYrtx.js";import"./FocusScope-BYGRF7Vw.js";import"./useCollator-BvOIfxes.js";import"./useFormReset-ClGEeDTe.js";import"./useFormValidation-Cl_ELzYY.js";import"./useEvent-BbgFwTon.js";import"./useSpinButton-Dr2RrRJj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-W9Q2TcsB.js";import"./useControlledState-aVbBpOCK.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
