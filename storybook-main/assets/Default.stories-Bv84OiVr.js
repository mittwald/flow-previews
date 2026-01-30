import{j as r}from"./iframe-BBHdjMJ6.js";import{L as d}from"./Label-D4z-eNsD.js";import{F as u}from"./FieldDescription-C-QWZBIG.js";import{F as T}from"./FieldError-DdPPmb_Z.js";import{T as i}from"./TimeField-DTOOErt3.js";import{L as l}from"./DateInput-C2njalPn.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dr_ijNQm.js";import"./index-DnL9UocU.js";import"./index-FWsSj9e8.js";import"./useLocalizedStringFormatter-BwLVFU66.js";import"./context-XjgBcoVm.js";import"./Label-Cq91lcPj.js";import"./utils-gePwv3Li.js";import"./Hidden-DJEpRFXv.js";import"./Text--O-2RTYx.js";import"./browser-BpCzgQab.js";import"./EmulatedBoldText-DKBJ0QzH.js";import"./Text-CkngT02A.js";import"./FieldError-D_l7_28D.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Du4ye3-W.js";import"./AlertIcon-BGgK2Oqf.js";import"./IconWarning-CyXtdbqA.js";import"./remote-BykRkK4-.js";import"./useFieldComponent-DcHfvLKR.js";import"./Form-Dur_LiI2.js";import"./useLabel-CDbjeNSC.js";import"./Group-BKul3vV0.js";import"./useFocusRing-ClLYF0Wy.js";import"./useFocus-CRClO8Jv.js";import"./Input-a6j3yjSB.js";import"./usePress-BicAkDgM.js";import"./useFormValidation-jj6Fwru_.js";import"./useControlledState-CTrYQ-In.js";import"./FocusScope-0pM5bnV4.js";import"./useCollator-CP6m8uNZ.js";import"./useFormReset-CMCffA9I.js";import"./useEvent-0gy1gNIh.js";import"./useSpinButton-towavnni.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-C7RV072S.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
