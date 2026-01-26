import{j as r}from"./iframe-BWhqP90_.js";import{L as d}from"./Label-CkXiiFVS.js";import{F as u}from"./FieldDescription-5m9L7yV9.js";import{F as T}from"./FieldError-C6zkn6e8.js";import{T as i}from"./TimeField-Dcd1WOWi.js";import{L as l}from"./DateInput-C9nNb_pY.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BryHmeuy.js";import"./index-8vPYdz_-.js";import"./index-BNCgjCzH.js";import"./useLocalizedStringFormatter--1i0kqLe.js";import"./context-D1O-Xc3I.js";import"./Label-CvmhHdNV.js";import"./utils-DDxNv25V.js";import"./Hidden-40YeYLOA.js";import"./Text-ClKyFsNf.js";import"./browser-XxEUm-0T.js";import"./EmulatedBoldText-BA_Kyk9l.js";import"./Text-CjPzL55g.js";import"./FieldError-DkQ7rf97.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-Bb9-XBbW.js";import"./AlertIcon-DpUh0dNd.js";import"./IconWarning-HbBBXO9Y.js";import"./remote-veunNUGL.js";import"./useFieldComponent-YclMbw8e.js";import"./Form-i2Ec1WLh.js";import"./useLabel-nvgQN0a7.js";import"./Group-BLDjWmxh.js";import"./useFocusRing-BFEab5f2.js";import"./useFocus-DGysuqof.js";import"./Input-BjME0GkR.js";import"./usePress-CgTDaVBx.js";import"./useFormValidation-Dk5h1IP2.js";import"./useControlledState-hpfIa3L8.js";import"./FocusScope-D5dxNR-J.js";import"./useCollator-BWqZHdF4.js";import"./useFormReset-DqbCot7l.js";import"./useEvent-C-yeEGvr.js";import"./useSpinButton-n_XNACTZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-B4qCbCYJ.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
