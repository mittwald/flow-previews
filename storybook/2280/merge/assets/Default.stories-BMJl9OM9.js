import{j as r}from"./iframe-Cx5kJuuA.js";import{L as d}from"./Label-Da9GdDN8.js";import{F as u}from"./FieldDescription-qsUNwdZ0.js";import{F as T}from"./FieldError-BCxxTn6h.js";import{T as i}from"./TimeField-GsgGpVvv.js";import{L as l}from"./DateInput-DvYqS788.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CLOWDrbo.js";import"./index-DK83sfEz.js";import"./index-BqoyVlZ7.js";import"./useLocalizedStringFormatter-CIuieC62.js";import"./context-CpMzWCEP.js";import"./Label-DPB2sN32.js";import"./utils-Nk4paMN-.js";import"./Hidden-BIWwaIRP.js";import"./Text-C98Jvmov.js";import"./browser-D-pbaBij.js";import"./EmulatedBoldText--C3vSC84.js";import"./Text-CA_aswYo.js";import"./FieldError-UHRLTLut.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BwdeDomp.js";import"./AlertIcon-DvMPToF_.js";import"./IconWarning-BDhnLpaV.js";import"./remote-C9UyjJTP.js";import"./useFieldComponent-DpBpP7du.js";import"./Form-BHxxWVUu.js";import"./useLabel-B4Wunpgz.js";import"./Group-C2As7-rT.js";import"./useFocusRing-idhb0ztA.js";import"./useFocus-DbL3EqSH.js";import"./Input-DHKVlQVM.js";import"./usePress-LbgF0OFY.js";import"./useFormValidation-CmFpdOnE.js";import"./useControlledState-D1xezhK5.js";import"./FocusScope-wgzi2f-G.js";import"./useCollator-BUzaHxjg.js";import"./useFormReset-roVUmu5c.js";import"./useEvent-3su7RyU0.js";import"./useSpinButton-JQR48plw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CLOY3huy.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
