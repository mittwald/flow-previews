import{j as r}from"./iframe-DALqHAyB.js";import{L as d}from"./Label-DyIG2v27.js";import{F as u}from"./FieldDescription-DA7yQQcX.js";import{F as T}from"./useFieldComponent-CuLkv2Wr.js";import{T as i}from"./TimeField-CzxIrMK1.js";import{M as l}from"./DateField-PEjrjeH-.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./index-CPatoSxs.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./context-aw0dYPtu.js";import"./Label-D28Pduqa.js";import"./utils-C0MA_VWy.js";import"./Hidden-SLgE1qP8.js";import"./Text-BxJmp77a.js";import"./browser-pVqjrops.js";import"./EmulatedBoldText-Dxvms5Wy.js";import"./Text-vTixOjUz.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CcDUp5xj.js";import"./react-children-utilities-C1NF1MDP.js";import"./ClearPropsContext-frWmeUQW.js";import"./useMakeFocusable-D8hcpFKJ.js";import"./Form-DuNFHANS.js";import"./useLabel-85XHUWXZ.js";import"./Group-Co0gZnxS.js";import"./useFocusRing-BpmoLA66.js";import"./useFocus-CR3niFsF.js";import"./Input-D7GaT3Mp.js";import"./usePress-RYFgUS1k.js";import"./useFormValidation-C14rVgab.js";import"./useControlledState-BAMCZ0BN.js";import"./FocusScope-7BxeDCH7.js";import"./useCollator-Do-67ZwH.js";import"./useFormReset-C8DxwuW7.js";import"./useEvent-D9fHmb7e.js";import"./useSpinButton-kDhs2Dgu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-2F4IZnJj.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
