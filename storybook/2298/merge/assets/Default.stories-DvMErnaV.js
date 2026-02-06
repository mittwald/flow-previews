import{j as r}from"./iframe-CTX0Bv2_.js";import{L as d}from"./Label-Dhp6BO4i.js";import{F as u}from"./FieldDescription-4xrer537.js";import{F as T}from"./FieldError-BCaKsj_Z.js";import{T as i}from"./TimeField-DU0ldqly.js";import{L as l}from"./DateInput-CUUBTjLw.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CqO4Js9m.js";import"./index-BFwThDrE.js";import"./index-Cuy-twEi.js";import"./useLocalizedStringFormatter-Ci9fYHdG.js";import"./context-BlMA_qTH.js";import"./Label-B9GQQ3x4.js";import"./utils-DEP6wxfF.js";import"./Hidden-LDMxuxmc.js";import"./Text-DLhfgo2a.js";import"./browser-NwcAgtgI.js";import"./EmulatedBoldText-EuanT-4h.js";import"./Text-CfE4Vxx5.js";import"./FieldError-DPNf_GCP.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CzATBvzT.js";import"./AlertIcon-CvLHNETq.js";import"./IconWarning-nHMyX661.js";import"./remote-Dp_KpE6s.js";import"./useFieldComponent-mADlv6K1.js";import"./Form-CEQjTe99.js";import"./useLabel-CflB3N3A.js";import"./Group-BOL-llIy.js";import"./useFocusRing-jdOUMH5T.js";import"./useFocus-Brpf5vcF.js";import"./Input-Bb-wn0Gj.js";import"./usePress-BBVfaVqb.js";import"./useFormValidation-CLweFpah.js";import"./useControlledState-BSzbNF-6.js";import"./FocusScope-Dney2d0V.js";import"./useCollator-Ac6OChDz.js";import"./useFormReset-CFaexdLs.js";import"./useEvent-CpnFGpfj.js";import"./useSpinButton-DXVnGWP7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-zzsB6mUg.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
