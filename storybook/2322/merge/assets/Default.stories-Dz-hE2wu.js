import{j as r}from"./iframe-BECefjM4.js";import{L as d}from"./Label-CVvbUjW4.js";import{F as u}from"./FieldDescription-BgERXXFv.js";import{F as T}from"./FieldError-B21MiKyw.js";import{T as i}from"./TimeField-apvDwjES.js";import{L as l}from"./DateInput-CMTN2jcB.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BuliJvUF.js";import"./index-CR5wd-c8.js";import"./index-BGQ8HYEh.js";import"./useLocalizedStringFormatter-CcdVRlpp.js";import"./context-iJTSqlsV.js";import"./Label-DPandUgz.js";import"./utils-bqUpXLHN.js";import"./Hidden-DMWiq0rX.js";import"./Text-lZ2PbEqF.js";import"./browser-C9O3Z26r.js";import"./EmulatedBoldText-DVZs9jiX.js";import"./Text-IrzRAzMs.js";import"./FieldError-8R1qsZQS.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DIDGLLaX.js";import"./AlertIcon-B57cAQNM.js";import"./IconWarning-CvVn1QxU.js";import"./remote-CqI4D0us.js";import"./useFieldComponent-B5iNz-5m.js";import"./Form-FdseNRzi.js";import"./useLabel-d0BVjP-J.js";import"./Group-BHV0qvDi.js";import"./useFocusRing-DIpVtkGc.js";import"./useFocus-CIRpkrn7.js";import"./Input-BXsG1hsf.js";import"./usePress-427CihAL.js";import"./FocusScope-CjCXh94P.js";import"./useCollator-r-PMcESO.js";import"./useFormReset-CDquwT_C.js";import"./useFormValidation-I8j-SbQp.js";import"./useEvent-C3AnDdDF.js";import"./useSpinButton-k5vWUYEG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BqhGo_ae.js";import"./useControlledState-2Tdfwl5E.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
