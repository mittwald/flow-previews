import{j as r}from"./iframe-DG8PGYI2.js";import{L as d}from"./Label-BPpS4vmA.js";import{F as u}from"./FieldDescription-CFcLkynh.js";import{F as T}from"./FieldError-Cib7Ob9Y.js";import{T as i}from"./TimeField-D_hAg3ys.js";import{L as l}from"./DateInput-r4FsLeXL.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C4oSbM4F.js";import"./index-CkEHDxga.js";import"./index-LR7sdXL2.js";import"./useLocalizedStringFormatter-DXFpyvRx.js";import"./context-CRjwjO0_.js";import"./Label-2cZ0Lvh6.js";import"./utils-07AIACoX.js";import"./Hidden-DLF1ykG-.js";import"./Text-DXfg_t75.js";import"./browser-CdVMgEWJ.js";import"./EmulatedBoldText-BysjcSz3.js";import"./Text-0L-5i7aJ.js";import"./FieldError-bE1Vz7Na.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BxN-Llvy.js";import"./AlertIcon-DlZAtoqh.js";import"./IconWarning-SSUZ9dob.js";import"./remote-DDSPySo3.js";import"./useFieldComponent-CBicToer.js";import"./Form-COtDtsRb.js";import"./useLabel-D3O2Shqb.js";import"./Group-DnR8HzPq.js";import"./useFocusRing-CyfWRfC8.js";import"./useFocus-gEyTxYiG.js";import"./Input-8qA1kF5u.js";import"./usePress-Dy-OAjIk.js";import"./FocusScope-By5yaDFE.js";import"./useCollator-BagykhK3.js";import"./useFormReset-BIdGIAau.js";import"./useFormValidation-DkNbsHEL.js";import"./useEvent-CyzeiOxV.js";import"./useSpinButton-CJfrx6m5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-D1xH6Liy.js";import"./useControlledState-CbmAXNAC.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
