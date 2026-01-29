import{j as r}from"./iframe-BUwXHbLV.js";import{L as d}from"./Label-VcTz9-oy.js";import{F as u}from"./FieldDescription-CJjcfRgA.js";import{F as T}from"./FieldError-BFYCcyQ4.js";import{T as i}from"./TimeField-CFjSX0AQ.js";import{L as l}from"./DateInput-LkH5w47u.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BccdMpKE.js";import"./index-hu2bK8ld.js";import"./index-B1fishDV.js";import"./useLocalizedStringFormatter-CRJgNNZn.js";import"./context-DM2fd8XH.js";import"./Label-DCpzAobK.js";import"./utils-JDwP1GoF.js";import"./Hidden-C60b8p3I.js";import"./Text-DQHJUI0D.js";import"./browser-DgSxuaKY.js";import"./EmulatedBoldText-gevFAAZ0.js";import"./Text-foJVwDWR.js";import"./FieldError-DDJD7LnR.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BJWw_2bk.js";import"./AlertIcon-Dx8NA4Z8.js";import"./IconWarning-DpZLdH-i.js";import"./remote-DgECwzV4.js";import"./useFieldComponent-NdCAuKiZ.js";import"./Form-D0DN8V4Z.js";import"./useLabel-DcLR3Pis.js";import"./Group-BwNIZrev.js";import"./useFocusRing-DaHiZmYv.js";import"./useFocus-B6YbSr7t.js";import"./Input-NxVda43d.js";import"./usePress-BcgTA6VC.js";import"./useFormValidation-GMJFkgaI.js";import"./useControlledState-DYrRTv7P.js";import"./FocusScope-l2gJymgt.js";import"./useCollator-DJB12Mbt.js";import"./useFormReset-juEzhCU8.js";import"./useEvent-BDYLqd-z.js";import"./useSpinButton-BVdjzVUW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CMNv9mJg.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
