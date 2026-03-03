import{j as r}from"./iframe-DhXHhh1w.js";import{L as d}from"./Label-B97zndYQ.js";import{F as u}from"./FieldDescription-Cpq8h0bA.js";import{F as T}from"./FieldError-NwdeaE8Z.js";import{T as i}from"./TimeField-BHyP58l3.js";import{L as l}from"./DateInput-_5cjXIL-.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-KRA3PXE8.js";import"./index-DnLu1uFy.js";import"./index-B6ijkuYI.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./context-C0JBe_V4.js";import"./Label-B5DsgLYE.js";import"./utils--GApMcJ9.js";import"./Hidden-0q4YVuok.js";import"./Text-VjJbV_1P.js";import"./browser-DC-Dnn5c.js";import"./EmulatedBoldText-DK8yRX5h.js";import"./Text-BhHd18lu.js";import"./FieldError-DoyTFare.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CTc_944s.js";import"./AlertIcon-CowGyQyl.js";import"./IconWarning-Cq0bATFd.js";import"./remote-3lBAaKOS.js";import"./useFieldComponent-CXGCADuw.js";import"./Form-Cr93Lgju.js";import"./useLabel-B7imI5Js.js";import"./Group-Bojaf2qr.js";import"./useFocusRing-C0Ptw1X0.js";import"./useFocus-CCcmXvuL.js";import"./Input-CeMR8XUm.js";import"./usePress-DuFsm5YE.js";import"./FocusScope-DTOX4bjf.js";import"./useCollator-CdSsm3Cn.js";import"./useFormReset-BhTKQiKR.js";import"./useFormValidation-Bi2teCon.js";import"./useEvent-Ceq3h06g.js";import"./useSpinButton-DN3R0XyU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DkWskwl0.js";import"./useControlledState-BAaAMcGs.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
