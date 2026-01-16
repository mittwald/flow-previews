import{j as r}from"./iframe-W1iyoXhf.js";import{L as d}from"./Label-h36KWMeP.js";import{F as u}from"./FieldDescription-sYQgLYFM.js";import{F as T}from"./FieldError-V9E4UopR.js";import{T as i}from"./TimeField-CJUU_dsG.js";import{L as l}from"./DateInput-jMIeV079.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DadfXi8i.js";import"./index-BH3DQIUR.js";import"./index-BUhRJiS3.js";import"./useLocalizedStringFormatter-Be5s6ZhG.js";import"./context-Dx3ASvxi.js";import"./Label-16XGOc-L.js";import"./utils-Co92dFN-.js";import"./Hidden-C0j9T0K5.js";import"./Text-DcDEk3cp.js";import"./browser-D1HYvIQy.js";import"./EmulatedBoldText-BfE11w5D.js";import"./Text-DMuz8jzh.js";import"./FieldError-CaERYIVC.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-x_xx3UIw.js";import"./AlertIcon-Cyqu-_3z.js";import"./IconWarning-Cnnsa5dA.js";import"./remote-CbMcOagV.js";import"./useFieldComponent-CeQ6dqWY.js";import"./Form-BBVMks-l.js";import"./useLabel-C8GMPbyu.js";import"./Group-BXkBt_dH.js";import"./useFocusRing-D7D1hXRw.js";import"./useFocus-BF1azJZZ.js";import"./Input-lNMUeypu.js";import"./usePress-DwtcUURT.js";import"./useFormValidation-aWhqwd0R.js";import"./useControlledState-BeXX8b-c.js";import"./FocusScope-mUzTN5zH.js";import"./useCollator-CZzcr_Mi.js";import"./useFormReset-DYb2_5Lx.js";import"./useEvent-D9hyQfDj.js";import"./useSpinButton-BGC6K0Zf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DyE-7yok.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
