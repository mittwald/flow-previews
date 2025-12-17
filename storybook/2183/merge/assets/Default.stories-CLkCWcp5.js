import{j as r}from"./iframe-CzrbZwQa.js";import{L as d}from"./Label-Dk8Ae2gf.js";import{F as u}from"./FieldDescription-D7L367Z_.js";import{F as T}from"./FieldError-D0s122Ty.js";import{T as i}from"./TimeField-BckcNMD1.js";import{K as l}from"./DateInput-D05tOMCm.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-8nLM6u8z.js";import"./index-i1sq50ab.js";import"./index-Qzp6tfP6.js";import"./useLocalizedStringFormatter-DkMEC5lK.js";import"./context-Dzfzncd2.js";import"./Label-DMBiwPLT.js";import"./utils-Ds7wxNIq.js";import"./Hidden-CPBzEaGa.js";import"./Text-u_8Z_6lo.js";import"./browser-Q6zcHXxX.js";import"./EmulatedBoldText-DGVF2eKI.js";import"./Text-Bpo5VkCj.js";import"./FieldError-DojfZoQ1.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconApp-BPXZ8R19.js";import"./remote-q4LXxmI0.js";import"./IconDanger-BVqA44qH.js";import"./useFieldComponent-DOxHkWVS.js";import"./Form-AHU_2zi7.js";import"./useLabel-FWCEqZCU.js";import"./Group-9f1OsIqJ.js";import"./useFocusRing-CcZAMLZr.js";import"./useFocus-3xUusYsT.js";import"./Input-xD3cu1Ed.js";import"./usePress-Ck2a0me6.js";import"./useFormValidation-DWC0bBci.js";import"./useControlledState-D-hIONgW.js";import"./FocusScope-Ct7XodZT.js";import"./useCollator-TfVuzSHy.js";import"./useFormReset-DxatWkQF.js";import"./useEvent-q-bdr1zW.js";import"./useSpinButton-x5Ur2nRG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-D8mmJmTg.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
