import{j as r}from"./iframe-CywxDTj6.js";import{L as d}from"./Label-D6CHoy0y.js";import{F as u}from"./FieldDescription-Ce5UPLEI.js";import{F as T}from"./FieldError-zwomljJ3.js";import{T as i}from"./TimeField-BGPjt036.js";import{L as l}from"./DateInput-B2KFxuw3.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DIqRYGZg.js";import"./index-BVyD66xE.js";import"./index-CFicy-UB.js";import"./useLocalizedStringFormatter-OykjdJOp.js";import"./context-Wz-N3Tdz.js";import"./Label-B7but0VW.js";import"./utils-JmAwA3ix.js";import"./Hidden-D_vom6ZC.js";import"./Text-vlJOJK2L.js";import"./browser-CaezisB_.js";import"./EmulatedBoldText-Vtu08ir6.js";import"./Text-Dc57gZlo.js";import"./FieldError-fWQdbmrt.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BQFONsdl.js";import"./remote-DxJecAWu.js";import"./useFieldComponent-DA2iK2GC.js";import"./Form-B03hL8Gq.js";import"./useLabel-CtuLxX2S.js";import"./Group-Dmh4PTRU.js";import"./useFocusRing-D1WKjA4v.js";import"./useFocus-DDJfJTZx.js";import"./Input-CoVkAmRj.js";import"./usePress-CStV9ujD.js";import"./useFormValidation-CXUK0Gt0.js";import"./useControlledState-CrIAtAXB.js";import"./FocusScope-CPNFfVyd.js";import"./useCollator-Dm-KYvmX.js";import"./useFormReset-CCwx8s_G.js";import"./useEvent-CDXAxsds.js";import"./useSpinButton-Gd5YFhh6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-WWRMg2JO.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const tr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,tr as __namedExportsOrder,ar as default};
