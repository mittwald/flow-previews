import{j as r}from"./iframe-DJlgDtsR.js";import{L as d}from"./Label-B-hN2Lzv.js";import{F as u}from"./FieldDescription-DFEkRW3-.js";import{F as T}from"./FieldError-CeTb8jEt.js";import{T as i}from"./TimeField-CJrs8o61.js";import{L as l}from"./DateInput-DH2f1ZmW.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-1zQAiLcC.js";import"./index-De4rcGI5.js";import"./index-Ds6_MS6L.js";import"./useLocalizedStringFormatter-D9db5kL2.js";import"./context-XFPr5nuV.js";import"./Label-BBNmyes_.js";import"./utils-xFKhKznh.js";import"./Hidden-4sLzj03B.js";import"./Text-B6SLv6do.js";import"./browser-C6YBs1UC.js";import"./EmulatedBoldText-BsjtvuiU.js";import"./Text-DD0-81CT.js";import"./FieldError-Cpk3ITKU.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DmRH4lNK.js";import"./AlertIcon-nCFQHvgi.js";import"./IconWarning-Cyya3L9S.js";import"./remote-CayAs8X4.js";import"./useFieldComponent-Bmr1JhS0.js";import"./Form-BUDe3usU.js";import"./useLabel-KImy5Ex-.js";import"./Group-CUxw3L8E.js";import"./useFocusRing-BhR5IplG.js";import"./useFocus-oMd_AJz-.js";import"./Input-C2mY4pOV.js";import"./usePress-CWKDBuw6.js";import"./useFormValidation-Dup-Fz52.js";import"./useControlledState-C0KUsyk2.js";import"./FocusScope-C9j0_60-.js";import"./useCollator-Bm61inwz.js";import"./useFormReset-yK5dVmLs.js";import"./useEvent-CxJg3RaJ.js";import"./useSpinButton-wzJaU3Qm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DOa8h3gI.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
