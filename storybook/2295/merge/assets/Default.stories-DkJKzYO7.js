import{j as r}from"./iframe-CBdrHiu-.js";import{L as d}from"./Label-BnDRrnHY.js";import{F as u}from"./FieldDescription-D24R2cXv.js";import{F as T}from"./FieldError-OVkxnP3X.js";import{T as i}from"./TimeField-CVbbQwwl.js";import{L as l}from"./DateInput-DfAMR9zy.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-SJnnBAhb.js";import"./index-Dx3T5N_5.js";import"./index-DbZpFDe3.js";import"./useLocalizedStringFormatter-BCYddyWG.js";import"./context-p6nKBAyO.js";import"./Label-Be9V6H5h.js";import"./utils-DRjcKwJb.js";import"./Hidden-72868EZD.js";import"./Text-vxOKNzxr.js";import"./browser-DtunHlVO.js";import"./EmulatedBoldText-xhBM3BWX.js";import"./Text-DKFtzua6.js";import"./FieldError-hDU9I6ir.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Be6TgPnW.js";import"./AlertIcon-DkcKW-cj.js";import"./IconWarning-B89fpQti.js";import"./remote-SRpD7Y2I.js";import"./useFieldComponent-CkNNSE-6.js";import"./Form-Dpu47_EF.js";import"./useLabel-CJjwA-2F.js";import"./Group-DDiSLZpo.js";import"./useFocusRing-CFSl2bW1.js";import"./useFocus-BOx7sVQU.js";import"./Input-3Q4wlXjr.js";import"./usePress-BNG00Dag.js";import"./useFormValidation-BxN5Q1uu.js";import"./useControlledState-H50OY390.js";import"./FocusScope-CTh9v3q6.js";import"./useCollator-DAsNNJgX.js";import"./useFormReset-DzYWM4EU.js";import"./useEvent-CaW49TJY.js";import"./useSpinButton-DByEygXh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-WD1HHGwz.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
