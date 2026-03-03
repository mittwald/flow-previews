import{j as r}from"./iframe-DjjV-bH6.js";import{L as d}from"./Label-BylmPkwQ.js";import{F as u}from"./FieldDescription-CUJ0cPxq.js";import{F as T}from"./FieldError-B3mp1Ofg.js";import{T as i}from"./TimeField-lsZY--43.js";import{L as l}from"./DateInput-C45xbpU2.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B_hVkp7X.js";import"./index-B_oezAc9.js";import"./index-CaIAbEHH.js";import"./useLocalizedStringFormatter-Crw_1s1h.js";import"./context-CVfxZLio.js";import"./Label-ay3DRy-y.js";import"./utils-Wzr-xt4Q.js";import"./Hidden-BadsEN0y.js";import"./Text-B3EwbE0r.js";import"./browser-DMwaewkm.js";import"./EmulatedBoldText-C0lG4eku.js";import"./Text-BylF3jjX.js";import"./FieldError-cqIqfLoK.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BWR4-rDO.js";import"./AlertIcon-DcWT0T9A.js";import"./IconWarning-BVYK-jeQ.js";import"./remote-BKpn4CGf.js";import"./useFieldComponent-DlP24hgD.js";import"./Form-D8aiQr1-.js";import"./useLabel-DjKMdhxn.js";import"./Group-ByAGMk4A.js";import"./useFocusRing-2GUlH-Oo.js";import"./useFocus-C98Vumo7.js";import"./Input-DX9HMt4N.js";import"./usePress-CoT418ij.js";import"./FocusScope-hoEsPY4t.js";import"./useCollator-BMaztQCL.js";import"./useFormReset-DovS_sbG.js";import"./useFormValidation-CyR0-I-k.js";import"./useEvent-CuFWGIMh.js";import"./useSpinButton-B1JPi9gU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DkPcBiEU.js";import"./useControlledState-DuEj2qRm.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
