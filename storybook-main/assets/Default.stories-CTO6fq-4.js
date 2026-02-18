import{j as r}from"./iframe-Bz3NPU1o.js";import{L as d}from"./Label-DJFgm5M0.js";import{F as u}from"./FieldDescription-DXJo72US.js";import{F as T}from"./FieldError-fbbECv40.js";import{T as i}from"./TimeField-BVGIcoCg.js";import{L as l}from"./DateInput-D_QaG6Eh.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CjhBP1Cm.js";import"./index-4Y7PW7MZ.js";import"./index-FgoIhbmz.js";import"./useLocalizedStringFormatter-DZI71IG_.js";import"./context-pgk2HPHJ.js";import"./Label-QJAE-TAD.js";import"./utils-DuUJF5nC.js";import"./Hidden-DRSFEG3Y.js";import"./Text-ByJancxD.js";import"./browser-BaNqvzaa.js";import"./EmulatedBoldText-DUXivwa1.js";import"./Text-ClD1r8b1.js";import"./FieldError-BDAUq_c5.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-yCfidByd.js";import"./AlertIcon-Csw_f8vF.js";import"./IconWarning-Cqqx4tMU.js";import"./remote-D_M7roLC.js";import"./useFieldComponent-kW7iCi5m.js";import"./Form-DrqAye7f.js";import"./useLabel-C5lED9IT.js";import"./Group-CfiWYn5I.js";import"./useFocusRing-BLuP37PT.js";import"./useFocus-DMRfkGw8.js";import"./Input-DW4bMgBP.js";import"./usePress-BmxXpscc.js";import"./FocusScope-Bk96q2B-.js";import"./useCollator-DX6ShHbl.js";import"./useFormReset-D4UcXUYp.js";import"./useFormValidation-itgD5oYf.js";import"./useEvent-DV66xCP2.js";import"./useSpinButton-B-mOuGQB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Q2Z3jsDb.js";import"./useControlledState-e4YYsLZE.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
