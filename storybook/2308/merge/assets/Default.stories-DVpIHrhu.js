import{j as r}from"./iframe-CH-PGbIe.js";import{L as d}from"./Label-BpHmIn39.js";import{F as u}from"./FieldDescription-DMXEORO1.js";import{F as T}from"./FieldError-9pLulNyY.js";import{T as i}from"./TimeField-u9THYZHz.js";import{L as l}from"./DateInput-2Zx457K0.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cx8afA-p.js";import"./index-JjjT5_3a.js";import"./index-yvyiz2TD.js";import"./useLocalizedStringFormatter-UQrIwX21.js";import"./context-BEPAk1pi.js";import"./Label-YvP3zR1_.js";import"./utils-BUbYN1U7.js";import"./Hidden-BHNvmzaU.js";import"./Text-DUTVzyy5.js";import"./browser-Bk_hun62.js";import"./EmulatedBoldText-DLXz_2Ie.js";import"./Text-C_Kx-nbJ.js";import"./FieldError-PikikH1M.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-lzhTm-Qc.js";import"./AlertIcon-Cf4_Rc8_.js";import"./IconWarning-BrtiYPUm.js";import"./remote-NkxELaCk.js";import"./useFieldComponent-R38s1k2Z.js";import"./Form-BPpqOWmF.js";import"./useLabel-BBwXLpG2.js";import"./Group-D9bGLtxm.js";import"./useFocusRing-CuUFHyYZ.js";import"./useFocus-C-u_ZFsP.js";import"./Input-C82ooeG7.js";import"./usePress-CjXzQGxt.js";import"./FocusScope-Com4Ovel.js";import"./useCollator-NRPLm61h.js";import"./useFormReset-DarrOQyz.js";import"./useFormValidation-CGeoBpxY.js";import"./useEvent-DmJ5-BvT.js";import"./useSpinButton-BP9DWN8Q.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CZlLDpIC.js";import"./useControlledState-BQPo69mZ.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
