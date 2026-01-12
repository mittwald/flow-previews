import{j as r}from"./iframe-BUX4ZqHF.js";import{L as d}from"./Label-kgnV-RXM.js";import{F as u}from"./FieldDescription-DA8sVKuh.js";import{F as T}from"./FieldError-BcNphJCj.js";import{T as i}from"./TimeField-CJR_GHAk.js";import{L as l}from"./DateInput-DZSmj2au.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CO2lzhPy.js";import"./index-DGSBrITf.js";import"./index-BP0Kc6JB.js";import"./useLocalizedStringFormatter-DBiOEglQ.js";import"./context-DdyqVFXP.js";import"./Label-I8DqILoy.js";import"./utils-D9iTInv6.js";import"./Hidden-CmsGFsNY.js";import"./Text-CCD2jWDE.js";import"./browser-D0x3Xdqp.js";import"./EmulatedBoldText-B3B0n9A6.js";import"./Text-BG7MORzn.js";import"./FieldError-DwISghd1.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-C1IAOcr2.js";import"./AlertIcon-B17jmh6q.js";import"./IconWarning-CQ3vdTUk.js";import"./remote-CM65cF_Q.js";import"./useFieldComponent-L2xw4dQD.js";import"./Form-Dyklbi3v.js";import"./useLabel-DVc7LJa4.js";import"./Group-DB1vfutX.js";import"./useFocusRing-LYLGckDp.js";import"./useFocus-CJRF0W0a.js";import"./Input-Dt9-alkO.js";import"./usePress-DqXzXpsh.js";import"./useFormValidation-CdmTUY1H.js";import"./useControlledState-CgyNYXn6.js";import"./FocusScope-CKMlMtX2.js";import"./useCollator-j_WBsrii.js";import"./useFormReset-DwYjTvSA.js";import"./useEvent-CCX_Td5o.js";import"./useSpinButton-CwLb1spK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-j-_M7XoK.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
