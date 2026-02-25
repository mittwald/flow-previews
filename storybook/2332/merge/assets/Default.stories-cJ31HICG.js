import{j as r}from"./iframe-5GKEjLm3.js";import{L as d}from"./Label-BiEVFhkG.js";import{F as u}from"./FieldDescription-BBGoJLQx.js";import{F as T}from"./FieldError-qE1en1IM.js";import{T as i}from"./TimeField-BouUySnG.js";import{L as l}from"./DateInput-4K1L7uh3.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BrPxhm-E.js";import"./index-DZHRuSdS.js";import"./index-CxI-AdtT.js";import"./useLocalizedStringFormatter-foHAfgmM.js";import"./context-CYoVNjzy.js";import"./Label-CD-Ily5W.js";import"./utils-DZdTZXxi.js";import"./Hidden-CVK_WTqz.js";import"./Text-4Jq61r3V.js";import"./browser-DpyY6Jfh.js";import"./EmulatedBoldText-Dw9vtGzr.js";import"./Text-jTefV10v.js";import"./FieldError-DNER0k2B.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BQlCz9t6.js";import"./AlertIcon-xcA2PG-d.js";import"./IconWarning-B10RUVd-.js";import"./remote-DrqTcZe1.js";import"./useFieldComponent-B3twwSIL.js";import"./Form-CkcBXY70.js";import"./useLabel-sguPTXZB.js";import"./Group-Gic7CvlE.js";import"./useFocusRing-CsUwZj84.js";import"./useFocus-BEqaOfOz.js";import"./Input-VyCJjbfE.js";import"./usePress-CYa1OoRC.js";import"./FocusScope-BteWf5AP.js";import"./useCollator-COkB7H3x.js";import"./useFormReset-Bzn3Tj6K.js";import"./useFormValidation-Dje-UJVy.js";import"./useEvent-_LgPAmJ5.js";import"./useSpinButton-DRdY5IPj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CKDiZ1Ex.js";import"./useControlledState-D9ovZV70.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
