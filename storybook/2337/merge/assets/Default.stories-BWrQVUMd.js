import{j as r}from"./iframe-BJFPIndf.js";import{L as d}from"./Label-CVJICKuL.js";import{F as u}from"./FieldDescription-D_PxiSL1.js";import{F as T}from"./FieldError-CerVitTZ.js";import{T as i}from"./TimeField-hMV7_yy8.js";import{L as l}from"./DateInput-BD-IOb7l.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BKaxWUSl.js";import"./index-Bb49SoEB.js";import"./index-Bg9RtLBP.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./context-Dnh7V-Fy.js";import"./Label-CeUzUCbC.js";import"./utils-WT8FFEB4.js";import"./Hidden-CMdNoXJX.js";import"./Text-CGF68X8s.js";import"./browser-DqcTc9Nr.js";import"./EmulatedBoldText-CbQqBSV_.js";import"./Text-D3Y_kc1g.js";import"./FieldError-Coj9-PqS.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BZJfsxKD.js";import"./AlertIcon-GZVP8WsI.js";import"./IconWarning-BUqpCqdO.js";import"./remote-BMkebNs4.js";import"./useFieldComponent-gU-XMME4.js";import"./Form-x5xxOUHd.js";import"./useLabel-lMRjDAnL.js";import"./Group-Cnjfsww6.js";import"./useFocusRing-BgEwvKKQ.js";import"./useFocus-DPdw3svt.js";import"./Input-BWdvoxfF.js";import"./usePress-BHGoooY9.js";import"./FocusScope-shVJmAPD.js";import"./useCollator-m51r9XzI.js";import"./useFormReset-CwfjSagb.js";import"./useFormValidation-BhmC515N.js";import"./useEvent-BToADvjV.js";import"./useSpinButton-3m9BPYvh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter--BddO0Di.js";import"./useControlledState-DywfuSZK.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
