import{j as r}from"./iframe-DQPKoo92.js";import{L as d}from"./Label-Og-F06uZ.js";import{F as u}from"./FieldDescription-TOm-cQme.js";import{F as T}from"./FieldError-IxBtEnB-.js";import{T as i}from"./TimeField-DiyugFfq.js";import{L as l}from"./DateInput-CpEb2gDR.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVIe49dZ.js";import"./index-B3Bpj3GD.js";import"./index-CnP3WCIP.js";import"./useLocalizedStringFormatter-CbBU4IdI.js";import"./context-CJqjcP4U.js";import"./Label-DrxyNCZO.js";import"./utils-XAdJPTNp.js";import"./Hidden-BalHJt_t.js";import"./Text-C51WlGhJ.js";import"./browser-ChlnFVHS.js";import"./EmulatedBoldText-ZCYLfeIO.js";import"./Text-Y949w0K8.js";import"./FieldError-C-pwln9P.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-C5_JXWa-.js";import"./AlertIcon-v4rlNZlK.js";import"./IconWarning-CpLICj99.js";import"./remote-BNYVvti7.js";import"./useFieldComponent-BKiBq2W6.js";import"./Form-C06cTOQY.js";import"./useLabel-DkBHutKV.js";import"./Group-hfhbZ0QM.js";import"./useFocusRing-Cni30Eah.js";import"./useFocus-BE88ppMu.js";import"./Input-MWzFGwJT.js";import"./usePress-ByCBMVLm.js";import"./useFormValidation-B8bsM8-M.js";import"./useControlledState-CudIhSdL.js";import"./FocusScope-CJXytNJ4.js";import"./useCollator-BoFTkl_Q.js";import"./useFormReset-C7RuWveb.js";import"./useEvent-CfqveZ0P.js";import"./useSpinButton-DFP6X6Fx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-B_BpuPdy.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
