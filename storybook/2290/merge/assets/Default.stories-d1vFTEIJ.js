import{j as r}from"./iframe-pec-daIN.js";import{L as d}from"./Label-CElVOifK.js";import{F as u}from"./FieldDescription-C3yB_B9f.js";import{F as T}from"./FieldError-r6Iz548x.js";import{T as i}from"./TimeField-C8XE5Pb-.js";import{L as l}from"./DateInput-D1_FB6Lq.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dhs06173.js";import"./index-DJTXzqQk.js";import"./index-CHD_W7k-.js";import"./useLocalizedStringFormatter-DQtSZIdS.js";import"./context-6wXKo3vr.js";import"./Label-BgXd0ScX.js";import"./utils-DgvXfbTX.js";import"./Hidden-BHo1_O4t.js";import"./Text-KadZ5_Og.js";import"./browser-CB013lxp.js";import"./EmulatedBoldText-CH8TmYXX.js";import"./Text-ChVSp7Zj.js";import"./FieldError-DRdVsyAa.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-XXHjf97y.js";import"./AlertIcon-Df2ALci7.js";import"./IconWarning-BNWGnhvf.js";import"./remote-CL_x9DF5.js";import"./useFieldComponent-BVaTpDhT.js";import"./Form-D9urj6j4.js";import"./useLabel-EN4dlqGk.js";import"./Group-DrdjXHuf.js";import"./useFocusRing-D1bapTtD.js";import"./useFocus-8lECnDuB.js";import"./Input-nceBJ8Dt.js";import"./usePress-BXePSkUY.js";import"./useFormValidation-Cw4fPepy.js";import"./useControlledState-C8wEjdVb.js";import"./FocusScope-D8KAWd4v.js";import"./useCollator-Bc_1nfh_.js";import"./useFormReset-DlmAX50c.js";import"./useEvent-TrAkXyi-.js";import"./useSpinButton-C_YuM6x8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BjDbr8Ou.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
