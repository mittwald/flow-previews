import{j as r}from"./iframe-C2cGCWBO.js";import{L as d}from"./Label-DU1BG4Ln.js";import{F as u}from"./FieldDescription-DYlFjdjq.js";import{F as T}from"./FieldError-DDTF9njD.js";import{T as i}from"./TimeField-DEoCRqHG.js";import{L as l}from"./DateInput-5xyvf9OQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C6jxxEVz.js";import"./index-rbmoV-yM.js";import"./index-Du1kNfMe.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./context-2EfdQWx2.js";import"./Label-DeWWh5Nd.js";import"./utils-CPzpSZL2.js";import"./Hidden-C_zHVHDn.js";import"./Text-D3xXIOyH.js";import"./browser-BGhQMCSV.js";import"./EmulatedBoldText-CQEy9dVT.js";import"./Text-D1LgYL-c.js";import"./FieldError-DA6JIYnG.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DYOBaLM3.js";import"./AlertIcon-B9QySSBk.js";import"./IconWarning-C4LD0r9W.js";import"./remote-w8RrxnGT.js";import"./useFieldComponent-D_KC3UxI.js";import"./Form-C_NaUn2t.js";import"./useLabel-DicB4RC2.js";import"./Group-j7ZfmdDn.js";import"./useFocusRing-wtbg8X8X.js";import"./useFocus-O4uYrVbU.js";import"./Input-B5OLadjP.js";import"./usePress-BrmD8Kf2.js";import"./FocusScope-7k8F4i3d.js";import"./useCollator-CsE89UJT.js";import"./useFormReset-BdRaO3QH.js";import"./useFormValidation-DV5s_XV1.js";import"./useEvent-Brb253L4.js";import"./useSpinButton-B12m3l61.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-37XV8ywr.js";import"./useControlledState-MMDjipcl.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
