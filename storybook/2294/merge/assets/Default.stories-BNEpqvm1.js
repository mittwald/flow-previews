import{j as r}from"./iframe-Da9Lw8R_.js";import{L as d}from"./Label-D7d2SkgN.js";import{F as u}from"./FieldDescription-C0EOWzJH.js";import{F as T}from"./FieldError-DXoqYbez.js";import{T as i}from"./TimeField-D7C0XHbG.js";import{L as l}from"./DateInput-SR2rRZ5P.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DSxpIroI.js";import"./index-CM0YhoHL.js";import"./index-TT_JC2bB.js";import"./useLocalizedStringFormatter-BWd2uPhV.js";import"./context-CsdpTyhd.js";import"./Label-CkI4JdYz.js";import"./utils-Cwd4tFKX.js";import"./Hidden-BIMJR4Fs.js";import"./Text-l_fYsQ08.js";import"./browser-DDWH8I0V.js";import"./EmulatedBoldText-CVyVzJMR.js";import"./Text-CpGlsQu3.js";import"./FieldError-DSdSdK3H.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-bxsLSC5L.js";import"./AlertIcon-Co0MJDJf.js";import"./IconWarning-BYkwpstY.js";import"./remote-CsFbcl9r.js";import"./useFieldComponent-yufHgNqa.js";import"./Form-D3ZAWear.js";import"./useLabel-CzV-HlgB.js";import"./Group-CWa8s-M0.js";import"./useFocusRing-BItT14i_.js";import"./useFocus-BBVXnzgP.js";import"./Input-inZV5DIC.js";import"./usePress-BIogNAwh.js";import"./useFormValidation-DjSyrx87.js";import"./useControlledState-B4YxKAgg.js";import"./FocusScope-BpnzFkst.js";import"./useCollator-D6vsHj3W.js";import"./useFormReset-4DR8Px1h.js";import"./useEvent-DSYhgwkh.js";import"./useSpinButton-BXSA-aNY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CkWKjFEo.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
