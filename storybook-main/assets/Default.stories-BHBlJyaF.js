import{j as r}from"./iframe-DwsGXJVG.js";import{L as d}from"./Label-DOR8D5QK.js";import{F as u}from"./FieldDescription-x5frt87g.js";import{F as T}from"./FieldError-BPT_klMb.js";import{T as i}from"./TimeField-PfcAhQv_.js";import{L as l}from"./DateInput-Df9Y_-mS.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-qxgtoIlH.js";import"./index-Bl29J3nk.js";import"./index-Z94wDe_B.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./context-aVGfmL8k.js";import"./Label-C5wfq0Kb.js";import"./utils-DRn9wprx.js";import"./Hidden-CJnCNBv0.js";import"./Text-BV6qM8pO.js";import"./browser-Cz_VorJk.js";import"./EmulatedBoldText-C-itzyky.js";import"./Text-_i5SHi6c.js";import"./FieldError-BZQRredP.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-D-LhYLA_.js";import"./AlertIcon-BhWII3Mz.js";import"./IconWarning-Ci9l-8b2.js";import"./remote-Co6v5gQ1.js";import"./useFieldComponent-BobnjoTA.js";import"./Form-BVLfeGH7.js";import"./useLabel-DGPoQV-x.js";import"./Group-KZBGY4kR.js";import"./useFocusRing-DdmspiUG.js";import"./useFocus-DIaiJ-NX.js";import"./Input-B80smJAQ.js";import"./usePress-CckbZpi5.js";import"./FocusScope-4Fd3tZfM.js";import"./useCollator-GdkhHcGA.js";import"./useFormReset-hk4HwqV2.js";import"./useFormValidation-Bdpbh0WL.js";import"./useEvent-nJ48QMBy.js";import"./useSpinButton-BFXbPvt4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BxrRtxxm.js";import"./useControlledState-CRB4bW25.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
