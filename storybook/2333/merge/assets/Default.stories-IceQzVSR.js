import{j as r}from"./iframe-ByHSJ7Zj.js";import{L as d}from"./Label-tcy2V_mA.js";import{F as u}from"./FieldDescription-BGXfCMai.js";import{F as T}from"./FieldError-C1ELgHYl.js";import{T as i}from"./TimeField-CZ4NoOhk.js";import{L as l}from"./DateInput-BmHyWVSW.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DJOvxh70.js";import"./index-Df7GZGOr.js";import"./index-Bsvsb8kg.js";import"./useLocalizedStringFormatter-C3tZMmo1.js";import"./context-ER57Z7kb.js";import"./Label-BGNexww0.js";import"./utils-AuVRPQNE.js";import"./Hidden-BFoBdwRQ.js";import"./Text-CE06l-7_.js";import"./browser-CsRLC16Z.js";import"./EmulatedBoldText-Cuj2T5Fx.js";import"./Text-CMdjYF8F.js";import"./FieldError-N78nigrI.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-sxDaercD.js";import"./AlertIcon-CPipsjCC.js";import"./IconWarning-D57HRYjk.js";import"./remote-NqjFlPNq.js";import"./useFieldComponent-CBB8cMnJ.js";import"./Form-B6nfDOYR.js";import"./useLabel-DwarV1Dq.js";import"./Group-D2DTtkcC.js";import"./useFocusRing-lrSptqjQ.js";import"./useFocus-DXK20Yfh.js";import"./Input-Cjg2Ef7t.js";import"./usePress-53w3WrUq.js";import"./FocusScope-CdPzSUjP.js";import"./useCollator-uet9RA9C.js";import"./useFormReset-BeZmi33v.js";import"./useFormValidation-BGcU6QC0.js";import"./useEvent-CUm4NXev.js";import"./useSpinButton-B6vqjN8s.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DncO3zt2.js";import"./useControlledState-CZXI0X0f.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
