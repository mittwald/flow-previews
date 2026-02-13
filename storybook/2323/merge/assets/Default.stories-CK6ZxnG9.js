import{j as r}from"./iframe-Bq_dTdDz.js";import{L as d}from"./Label-DlbZYBs5.js";import{F as u}from"./FieldDescription-ByrQyhzl.js";import{F as T}from"./FieldError-ClLnELEE.js";import{T as i}from"./TimeField-LCuaCicb.js";import{L as l}from"./DateInput-CsrS7_hN.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./index-C2qM6Ecb.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./context-DasT5rkr.js";import"./Label-CPBWbyCv.js";import"./utils-Dc83Zc3S.js";import"./Hidden-CYUCWFXf.js";import"./Text-3w39UNLL.js";import"./browser-D_Oin-6N.js";import"./EmulatedBoldText-D57I_Edz.js";import"./Text-RESw6iu2.js";import"./FieldError-CB3_Y2qo.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DLrJVcTW.js";import"./AlertIcon-DR4HtAzR.js";import"./IconWarning-AvRveFf8.js";import"./remote-BGgAcFUF.js";import"./useFieldComponent-C92nVZms.js";import"./Form-Bm3_NoD-.js";import"./useLabel-BL_xrhrx.js";import"./Group-DFA2OkWU.js";import"./useFocusRing-C2_YEmjA.js";import"./useFocus-zY2zj5L9.js";import"./Input-b7EgChKn.js";import"./usePress-CxmEVb--.js";import"./FocusScope-jjJ71B2a.js";import"./useCollator-CL9Njxka.js";import"./useFormReset-BNYkLVEo.js";import"./useFormValidation-ofgJ0bTW.js";import"./useEvent-Bo6NaH-t.js";import"./useSpinButton-3PZCR6K1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DOdOmGLd.js";import"./useControlledState-DvV_L9jP.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
