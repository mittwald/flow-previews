import{j as r}from"./iframe-EfPcFfHz.js";import{L as d}from"./Label-DkribH7U.js";import{F as u}from"./FieldDescription-CaLE571G.js";import{F as T}from"./FieldError-Bm6xTrGY.js";import{T as i}from"./TimeField-D38rRhOc.js";import{L as l}from"./DateInput-BM3RvpqI.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CIh5pHt4.js";import"./index-BiW-O58f.js";import"./index-BhGEUnhH.js";import"./useLocalizedStringFormatter-CSMkY09C.js";import"./context-kn7lEdrW.js";import"./Label-BDpZ1WTb.js";import"./utils-Cnkpfm_P.js";import"./Hidden-B6ugZRtA.js";import"./Text-CRFCcT-P.js";import"./browser-hyQhTs1N.js";import"./EmulatedBoldText-DO_ezaQd.js";import"./Text-B4oHPq8R.js";import"./FieldError-DGjeovc7.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BC8DinUo.js";import"./AlertIcon-CtDfui7q.js";import"./IconWarning-73LpV07E.js";import"./remote-D3-8ROh8.js";import"./useFieldComponent-BpgXbjM-.js";import"./Form-DLgE0tCZ.js";import"./useLabel-DunHH7R3.js";import"./Group-CvPJMXy4.js";import"./useFocusRing-8P8y2KFJ.js";import"./useFocus-7edk4FfO.js";import"./Input-DZTbr2NP.js";import"./usePress-CzmE2CoS.js";import"./FocusScope-CSvsVBha.js";import"./useCollator-D3lxHqNW.js";import"./useFormReset-CDR6jl2x.js";import"./useFormValidation-DvOB0MQU.js";import"./useEvent-vACQ5A8t.js";import"./useSpinButton-CaCT3MOl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-D10BB2xQ.js";import"./useControlledState-WqoJm4pI.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
