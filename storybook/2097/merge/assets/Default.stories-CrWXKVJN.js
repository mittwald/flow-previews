import{j as r}from"./iframe-9LT5pwxo.js";import{L as d}from"./Label-Cy0HO6mF.js";import{F as u}from"./FieldDescription-BLZvXXGp.js";import{F as T}from"./useFieldComponent-FBKhS2uw.js";import{T as i}from"./TimeField-DT-nj83f.js";import{M as l}from"./DateField-jeCX-hpV.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmrMiIfZ.js";import"./index-CJEFfs1t.js";import"./index-B4OxUaac.js";import"./useLocalizedStringFormatter-Ay0utv6w.js";import"./context-CZZdPtMN.js";import"./Label-B9A8CQ6N.js";import"./utils-C12iYS2x.js";import"./Hidden-Dc5yMvqI.js";import"./Text-FZjxGLxv.js";import"./browser-Be7wxfSs.js";import"./EmulatedBoldText-z8AdBhol.js";import"./Text-cT0V7Crl.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BGmK8I3p.js";import"./react-children-utilities-CGBnGU1K.js";import"./ClearPropsContext-BgV1DGsr.js";import"./useMakeFocusable-3ac7XBnQ.js";import"./Form-PBwv22gS.js";import"./useLabel-D0_ysNiP.js";import"./Group-C-8wTSfb.js";import"./useFocusRing-BpS4vJuf.js";import"./useFocus-CGIGFm0L.js";import"./Input-CuGFAjVN.js";import"./usePress-CYkWbbQS.js";import"./useFormValidation-gXwoIgM4.js";import"./useControlledState-B0dx1ah2.js";import"./FocusScope-ahtwD87J.js";import"./useCollator-D0xJkZLY.js";import"./useFormReset-DsyYy3rG.js";import"./useEvent-CmmFmHFu.js";import"./useSpinButton-Dv0VkFOd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CLa0ihME.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
