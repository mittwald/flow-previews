import{j as r}from"./iframe-DcHapM8k.js";import{L as d}from"./Label-C_3MZF40.js";import{F as u}from"./FieldDescription-C8ShlXx2.js";import{F as T}from"./FieldError-BzyrakFb.js";import{T as i}from"./TimeField-CEafc8Dr.js";import{L as l}from"./DateInput-BNbegkk6.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-F2rlWCYo.js";import"./index-DtEczAXX.js";import"./index-Ba4Wgmch.js";import"./useLocalizedStringFormatter--D1phWvd.js";import"./context-Camfekg3.js";import"./Label-Cc29pwI9.js";import"./utils-BN-Wf9GB.js";import"./Hidden-BBxp_Bwo.js";import"./Text-BqUUaAMX.js";import"./browser-BhJkGPhR.js";import"./EmulatedBoldText-BsmORSBd.js";import"./Text-KTnK0cez.js";import"./FieldError-DeohvbOn.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-CmRq4USe.js";import"./AlertIcon-aSf31ti-.js";import"./IconWarning-8t1q80cl.js";import"./remote-CrHpKc5j.js";import"./useFieldComponent-DLXIz4kk.js";import"./Form-N_ssJC2Q.js";import"./useLabel-DVAEGcEm.js";import"./Group-cOoV5f3K.js";import"./useFocusRing-Dt3gTaal.js";import"./useFocus-ZXD30Rmm.js";import"./Input-_1JxoJ2g.js";import"./usePress-DRRwHOXQ.js";import"./useFormValidation-C5Tej2mU.js";import"./useControlledState-CD18I4-6.js";import"./FocusScope-DwQWTV3n.js";import"./useCollator-CvGBdlrR.js";import"./useFormReset-DByFRxt8.js";import"./useEvent-FsYqvuuv.js";import"./useSpinButton-BP7YsR6p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BizLkOR1.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
