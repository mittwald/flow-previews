import{j as r}from"./iframe-B-_izELn.js";import{L as d}from"./Label-xN0BMhRq.js";import{F as u}from"./FieldDescription-Bm61smCN.js";import{F as T}from"./FieldError-C2OlbqQW.js";import{T as i}from"./TimeField-w-hAwCPT.js";import{L as l}from"./DateInput-B9zQsan3.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CP4SCJWM.js";import"./index-CcQr3Ju_.js";import"./index-C24wTi9Q.js";import"./useLocalizedStringFormatter-BEnL5M6A.js";import"./context-CP_ivtNk.js";import"./Label-DUJ6ba3Y.js";import"./utils-CTzaLK4l.js";import"./Hidden-Ud3q5koP.js";import"./Text-B9UK706u.js";import"./browser-C9rDHpHO.js";import"./EmulatedBoldText-DO19SLv9.js";import"./Text-Cbq-V_qs.js";import"./FieldError-2QNeUIGm.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-BdI1vJoj.js";import"./AlertIcon-DHh3kTXL.js";import"./IconWarning-DXXSRvhn.js";import"./remote-DY2XWwFP.js";import"./useFieldComponent-Kyt2SdHG.js";import"./Form-CwweEOY6.js";import"./useLabel-DZiDffWU.js";import"./Group-CL4KrlTp.js";import"./useFocusRing-DHjGYA3Q.js";import"./useFocus-BKzgn786.js";import"./Input-Ch7XH0d5.js";import"./usePress-CDCEcfQ2.js";import"./useFormValidation-d7hQTD7K.js";import"./useControlledState-tdUQVzVH.js";import"./FocusScope-BQUCV4aX.js";import"./useCollator-Sj9w00om.js";import"./useFormReset-BUoUtOhQ.js";import"./useEvent-DwiqP_vq.js";import"./useSpinButton-CkmMsUAo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BWXHeyJA.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
