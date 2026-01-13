import{j as i}from"./iframe-DoM-BIwg.js";import{C as c}from"./CheckboxButton-CYvWrNpe.js";import{C as p}from"./Content-CpENL-HX.js";import{T as d}from"./Text-lsEUOuuk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bw05Ss5u.js";import"./index-B9vDCLP1.js";import"./index-BXuzzWnK.js";import"./Checkbox-DXeZIwd7.js";import"./IconWarning-BD_MiEVG.js";import"./remote-BDffDiLd.js";import"./useFieldComponent-CZ4YFclL.js";import"./utils-D5il_mPj.js";import"./RSPContexts-BpmX7ICR.js";import"./FieldError-CHU7gQK7.js";import"./Text-CiXcXSql.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BRbECj4N.js";import"./useLabel-Cp7FQmHU.js";import"./Label-DE9HqL8_.js";import"./Hidden-DgtxAirB.js";import"./useFormValidation-lvugQbRf.js";import"./useFocus-ClxCJYgX.js";import"./useControlledState--GEywRyg.js";import"./useFocusRing-Bar7hbU_.js";import"./usePress-v4r7x8aW.js";import"./useToggleState-ix8SyQp2.js";import"./useFormReset-DsbUUfuN.js";import"./useFocusable-Cy5CQHPW.js";import"./VisuallyHidden-GPtOnQVg.js";import"./browser-COZAGKbB.js";import"./EmulatedBoldText-DPZf3ZEq.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/CheckboxButton",component:c,args:{onChange:u("onChange")},parameters:{controls:{exclude:["onChange"]}},render:m=>i.jsx(c,{...m,children:"Consent to terms and conditions"})},r={},e={args:{isDisabled:!0}},t={args:{isReadOnly:!0}},o={args:{isIndeterminate:!0}},s={args:{isDisabled:!0,isSelected:!0}},a={render:m=>i.jsxs(c,{...m,children:[i.jsx(d,{children:"Terms and Conditions"}),i.jsx(p,{children:"Consent to terms and conditions"})]})},n={args:{isInvalid:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true,
    isSelected: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxButton {...props}>
      <Text>Terms and Conditions</Text>
      <Content>Consent to terms and conditions</Content>
    </CheckboxButton>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...n.parameters?.docs?.source}}};const J=["Default","Disabled","ReadOnly","Indeterminate","DisabledSelected","WithContent","Invalid"];export{r as Default,e as Disabled,s as DisabledSelected,o as Indeterminate,n as Invalid,t as ReadOnly,a as WithContent,J as __namedExportsOrder,H as default};
