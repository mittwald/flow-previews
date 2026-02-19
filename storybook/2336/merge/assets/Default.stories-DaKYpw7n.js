import{j as r}from"./iframe-C9fwoqx7.js";import{L as d}from"./Label-DUuytyEq.js";import{F as u}from"./FieldDescription-DltXYTvv.js";import{F as T}from"./FieldError-v5ZAFD64.js";import{T as i}from"./TimeField-CszUhfrB.js";import{L as l}from"./DateInput-D7QBaH_L.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaaAZbNJ.js";import"./index-DH86ko7l.js";import"./index-CbFgIt9G.js";import"./useLocalizedStringFormatter-G4KNW0M0.js";import"./context-C2ecxi5G.js";import"./Label-CbDOwA25.js";import"./utils-Cx2L-iDs.js";import"./Hidden-CVIEiZ4o.js";import"./Text-D7jvp7G5.js";import"./browser-B4JTTu9h.js";import"./EmulatedBoldText-CtQh5tnB.js";import"./Text-xqSfQxLT.js";import"./FieldError-CEVb6xPQ.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-GfFdH1ck.js";import"./AlertIcon-Bz6wfr4x.js";import"./IconWarning-slnz76yl.js";import"./remote-B-ZPT6P_.js";import"./useFieldComponent-HwWxBPXP.js";import"./Form-Dcg-_ctE.js";import"./useLabel-BNdvaiV7.js";import"./Group-BetC_vI7.js";import"./useFocusRing-s7_3pCWo.js";import"./useFocus-CMKZ5vES.js";import"./Input-DtMnFP30.js";import"./usePress-tgKXO9PL.js";import"./FocusScope-Ci8EWXmX.js";import"./useCollator-CTWpXcx6.js";import"./useFormReset-Bm_Lqolg.js";import"./useFormValidation-B19EocOE.js";import"./useEvent-bSDrPC6p.js";import"./useSpinButton-BKfWqiGI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DeS1tBmO.js";import"./useControlledState-BJuMvqvK.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
