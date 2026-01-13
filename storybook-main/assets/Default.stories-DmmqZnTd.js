import{j as r}from"./iframe-CF9WEugj.js";import{L as d}from"./Label-ZZPbbDTF.js";import{F as u}from"./FieldDescription-BgZC1fDx.js";import{F as T}from"./FieldError-D4UoR9vC.js";import{T as i}from"./TimeField-Be8vbJTD.js";import{L as l}from"./DateInput-Da2Br65r.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./index-DHfgQlLW.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./context-Bi2P07EN.js";import"./Label-DWGH1ubm.js";import"./utils-B4BZttt0.js";import"./Hidden-Dk3zZO8j.js";import"./Text-Czdsn8RZ.js";import"./browser-CV2qUG2E.js";import"./EmulatedBoldText--WvdXsxT.js";import"./Text-wlSF0gym.js";import"./FieldError-BfE9I5LY.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-BTQfuEQp.js";import"./AlertIcon-Ck6cmA9H.js";import"./IconWarning-DXWyAVP8.js";import"./remote-DKS26xip.js";import"./useFieldComponent-B3P2g6wY.js";import"./Form-Dv2vFItu.js";import"./useLabel-DF6AwuO5.js";import"./Group-B_lWGLp0.js";import"./useFocusRing-Ddjb8e7x.js";import"./useFocus-DZR1guyz.js";import"./Input-BGfnvYjW.js";import"./usePress-DuLNiG6M.js";import"./useFormValidation-BLUWg_De.js";import"./useControlledState-C05rL349.js";import"./FocusScope-Dw5dGdxw.js";import"./useCollator-Cuc5YyeJ.js";import"./useFormReset-w9h9-zRZ.js";import"./useEvent-DJoiCzFm.js";import"./useSpinButton-CREpeqCw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-D4_JjAEq.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
