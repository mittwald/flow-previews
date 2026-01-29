import{j as r}from"./iframe-DBKYLzDC.js";import{L as d}from"./Label-Dsk_CpOI.js";import{F as u}from"./FieldDescription-CjIQL23v.js";import{F as T}from"./FieldError-BpFJPqyd.js";import{T as i}from"./TimeField-CMV0N1zZ.js";import{L as l}from"./DateInput-DtU3dBl-.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./index-Dr37f313.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./context-DJBj5fN2.js";import"./Label-B1DR540-.js";import"./utils-BUG9eo0Q.js";import"./Hidden-D_QywUVZ.js";import"./Text-gSr4j5A3.js";import"./browser-DhKn1UU2.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./Text-D7rD6BG6.js";import"./FieldError-DtV1i0Hc.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DJvQ3Kk8.js";import"./AlertIcon-BOzLdeCm.js";import"./IconWarning-BvGiLcXk.js";import"./remote-CY71mNcv.js";import"./useFieldComponent-DRt8IUS_.js";import"./Form-CPSCXeOA.js";import"./useLabel-BGvoAl80.js";import"./Group-eKP5WoY_.js";import"./useFocusRing-BksqeYWz.js";import"./useFocus-TYDADYlM.js";import"./Input-DeboNFfQ.js";import"./usePress-BZ5qqTtf.js";import"./useFormValidation-DNSyvwAg.js";import"./useControlledState-CAANpQPW.js";import"./FocusScope-D67WIeli.js";import"./useCollator-BjgLOnUX.js";import"./useFormReset-BczjDhHV.js";import"./useEvent-D9IFBpTk.js";import"./useSpinButton-QUxeVDBr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-vKjuZpIr.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
