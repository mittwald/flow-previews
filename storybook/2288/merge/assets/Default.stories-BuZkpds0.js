import{j as r}from"./iframe-DkT4d7Ot.js";import{L as d}from"./Label-BjxJIvYs.js";import{F as u}from"./FieldDescription-BHCuHDvd.js";import{F as T}from"./FieldError-BUQThHV3.js";import{T as i}from"./TimeField-CItTY-oe.js";import{L as l}from"./DateInput-eP9dTjaj.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CHs1XVIh.js";import"./index-BIhgoFLA.js";import"./index-CA8YyeFM.js";import"./useLocalizedStringFormatter-D2x8dv8x.js";import"./context-BhNnKB4w.js";import"./Label-Bfb68HPn.js";import"./utils-up3lG_mb.js";import"./Hidden-B_u69euq.js";import"./Text-CN56Aq7p.js";import"./browser-CwBpRuL-.js";import"./EmulatedBoldText-Auc0aNAR.js";import"./Text-C_PPHbON.js";import"./FieldError-BIqVWLlF.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-n1a7254W.js";import"./AlertIcon-CGIGsQoy.js";import"./IconWarning-K6asu7lY.js";import"./remote-B8vjNxTl.js";import"./useFieldComponent-FHnXwL7q.js";import"./Form-CweUcSb7.js";import"./useLabel-D_TjIfTk.js";import"./Group-BOYY_LIu.js";import"./useFocusRing-Bn6GFEBK.js";import"./useFocus-Bn0bRGba.js";import"./Input--3PeXBSI.js";import"./usePress-loL-ySzv.js";import"./useFormValidation-UULz_Uq_.js";import"./useControlledState-B7-cf8QC.js";import"./FocusScope-D5JuRjyj.js";import"./useCollator-5WPUQbPc.js";import"./useFormReset-DMhhuJvy.js";import"./useEvent-DJRSX7W0.js";import"./useSpinButton-DHvNeq4Q.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Bn6O-MND.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
