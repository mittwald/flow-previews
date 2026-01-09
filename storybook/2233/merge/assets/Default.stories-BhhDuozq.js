import{j as r}from"./iframe-tI_lG94_.js";import{L as d}from"./Label-CdVUwStZ.js";import{F as u}from"./FieldDescription-CSWmc1EX.js";import{F as T}from"./FieldError-DYW7UPuf.js";import{T as i}from"./TimeField-CKq_VwJV.js";import{L as l}from"./DateInput-CU6HyERk.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./index-CBk6rXlg.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./context-CBF_EHvQ.js";import"./Label-BRs8jfGQ.js";import"./utils-bmh-HeLH.js";import"./Hidden-xjuSUFbD.js";import"./Text-DDIuCQxA.js";import"./browser-DuhBvQkx.js";import"./EmulatedBoldText-CqR-YL6D.js";import"./Text-Bx7ijqLX.js";import"./FieldError-CdG59lLT.js";import"./filterDOMProps-i7L6S0l1.js";import"./InlineAlert-DC2W_zeL.js";import"./AlertIcon-BkNTScum.js";import"./IconWarning-BFYQkdin.js";import"./remote-CmKo-bli.js";import"./useFieldComponent-_Dyiwxtg.js";import"./Form-B72YgAOe.js";import"./useLabel-dT-ksHYF.js";import"./Group-CWqc5_8a.js";import"./useFocusRing-Dgbmnyxw.js";import"./useFocus-DCHopMY8.js";import"./Input-DTXfGVIZ.js";import"./usePress-C1ke7TUF.js";import"./useFormValidation--MR_E_GW.js";import"./useControlledState-BE5RFE46.js";import"./FocusScope-Brgrzlff.js";import"./useCollator-BwiXk11m.js";import"./useFormReset-LNt8buNd.js";import"./useEvent-CrsvrwL5.js";import"./useSpinButton-DDLCKafs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CtVpXd3A.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
