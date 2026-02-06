import{j as r}from"./iframe-DCk1dltx.js";import{L as d}from"./Label-CoyrnT1D.js";import{F as u}from"./FieldDescription-Dyuwn7yW.js";import{F as T}from"./FieldError-CH94tTsu.js";import{T as i}from"./TimeField-BSnQFtG-.js";import{L as l}from"./DateInput-BtTvW72j.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-T1oQuQvq.js";import"./index-Cq8zlQrR.js";import"./index-CPFdYWIc.js";import"./useLocalizedStringFormatter-leVAnmF6.js";import"./context-Dv1e9MPf.js";import"./Label-D8gqX69D.js";import"./utils-dLBbTpD9.js";import"./Hidden-DtfyHh-u.js";import"./Text-BrHbgyhX.js";import"./browser-CviVsCbd.js";import"./EmulatedBoldText-BGXSZcaq.js";import"./Text-PmoJdoY5.js";import"./FieldError-BprKDa8q.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-YVWNWcKU.js";import"./AlertIcon-fe496zUR.js";import"./IconWarning-Dty0OPVS.js";import"./remote-DvlevvD7.js";import"./useFieldComponent-DRONwAvB.js";import"./Form-DaC80i58.js";import"./useLabel-DUKklMlK.js";import"./Group-BdCjqrPc.js";import"./useFocusRing-CTkZzC5s.js";import"./useFocus-Dg1ABCcr.js";import"./Input-B3blwCao.js";import"./usePress-BwKHWgOu.js";import"./useFormValidation-BQhs4ME7.js";import"./useControlledState-8RsR_43b.js";import"./FocusScope-5MRFtdj_.js";import"./useCollator-Caa43iXB.js";import"./useFormReset-BYlFqKoc.js";import"./useEvent--hc8j0kD.js";import"./useSpinButton-Bw-CspKT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-D1YD5yPc.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
