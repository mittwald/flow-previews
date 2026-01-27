import{j as r}from"./iframe-BEQP9uXD.js";import{L as d}from"./Label-ULyyAOQY.js";import{F as u}from"./FieldDescription-rVRfuQA7.js";import{F as T}from"./FieldError-DcwQV8mK.js";import{T as i}from"./TimeField-NhFPvJpE.js";import{L as l}from"./DateInput-BaeM1APS.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-84Jhttbw.js";import"./index-CA9bKJEG.js";import"./index-COHhcPte.js";import"./useLocalizedStringFormatter-CVsWWxAE.js";import"./context-DjvYmnOm.js";import"./Label-DEkvlGAI.js";import"./utils-CvsvUfaH.js";import"./Hidden-BRgRW0lF.js";import"./Text-BQmA_ZwI.js";import"./browser-D8S-En3T.js";import"./EmulatedBoldText-BYVdDx5b.js";import"./Text-Dh3KhDzI.js";import"./FieldError-WngkcyXU.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-J3TBTDdf.js";import"./AlertIcon-aU-KTTvT.js";import"./IconWarning-BArZWwdB.js";import"./remote-Ba3iobwA.js";import"./useFieldComponent-BKGW_bMF.js";import"./Form-BbvSEhBq.js";import"./useLabel-BaFA04Xw.js";import"./Group-CxkWfpob.js";import"./useFocusRing-QizZnVOy.js";import"./useFocus-DENBDZ81.js";import"./Input-Cnu3k7gd.js";import"./usePress-BjEuYOvC.js";import"./useFormValidation-Kra5hQIO.js";import"./useControlledState-IAFCDfDW.js";import"./FocusScope-D5mGJCBF.js";import"./useCollator-Dxy4kckI.js";import"./useFormReset-QF_OYRwm.js";import"./useEvent-d-xS6mf7.js";import"./useSpinButton-DnaVHxtH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CDs1bh4a.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
