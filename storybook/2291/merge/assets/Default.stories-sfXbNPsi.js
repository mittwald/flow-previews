import{j as r}from"./iframe-DSXKf9Qs.js";import{L as d}from"./Label-BZGX3mYQ.js";import{F as u}from"./FieldDescription-D3qqafyO.js";import{F as T}from"./FieldError-DyLpPvQc.js";import{T as i}from"./TimeField-DtqB0qzC.js";import{L as l}from"./DateInput-DSKG78Kc.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aTnVZ28_.js";import"./index-_ST8Xdbb.js";import"./index-xIXPquhv.js";import"./useLocalizedStringFormatter-DnMeMDV0.js";import"./context-DU2DYbHB.js";import"./Label-Dnlar29r.js";import"./utils-BkNrSrSW.js";import"./Hidden-Bsr5uGtI.js";import"./Text-C7KW9wgf.js";import"./browser-zi1f_NHh.js";import"./EmulatedBoldText-CWbGlL7P.js";import"./Text-BGc7dsTw.js";import"./FieldError-D2u-4343.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-ppaXibkF.js";import"./AlertIcon-Bx5_fWVD.js";import"./IconWarning-CsaNdeaY.js";import"./remote-Gy-Ku51P.js";import"./useFieldComponent-CCab4n06.js";import"./Form-CmWGeahq.js";import"./useLabel-D2CXizlL.js";import"./Group-cFUMqjZ6.js";import"./useFocusRing-9tutEJo4.js";import"./useFocus-BkCMpCSs.js";import"./Input-C3UpKYh9.js";import"./usePress-D3-3tpV2.js";import"./useFormValidation-CZFMPKAm.js";import"./useControlledState-C8VBbj0I.js";import"./FocusScope-C1tZWIaN.js";import"./useCollator-dJhHztcY.js";import"./useFormReset-CY4Zdzy9.js";import"./useEvent-BOIZmRJ7.js";import"./useSpinButton-Cqr7frtf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-SbnmxrNy.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
