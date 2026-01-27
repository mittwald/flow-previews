import{j as r}from"./iframe-BK9Ry9wr.js";import{L as d}from"./Label-MHPgjcAC.js";import{F as u}from"./FieldDescription-urh4LMIG.js";import{F as T}from"./FieldError-Dlnwp2IY.js";import{T as i}from"./TimeField-_iXKBP3b.js";import{L as l}from"./DateInput-D-ZvS2L3.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./index-DqsXJ4xp.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./context-DsIoSqto.js";import"./Label-BzCkyqHu.js";import"./utils-DO-BnPGQ.js";import"./Hidden-PKJk_aj-.js";import"./Text-kkda9Q25.js";import"./browser-DDyWafud.js";import"./EmulatedBoldText-NOAnNUmj.js";import"./Text-Cq5Rc76r.js";import"./FieldError-jtZpQJaz.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-Q3UmWydJ.js";import"./AlertIcon-CZTB9fHB.js";import"./IconWarning-ClqYagFF.js";import"./remote-BKPS1KcS.js";import"./useFieldComponent-DnU67IFr.js";import"./Form-DgYJKMgS.js";import"./useLabel-MQsZvy4I.js";import"./Group-DCFzKDnc.js";import"./useFocusRing-Dknf048Z.js";import"./useFocus-C5fN754a.js";import"./Input-yJFna98K.js";import"./usePress-DlcvFeQS.js";import"./useFormValidation-4onogkfY.js";import"./useControlledState-D5gBJyZQ.js";import"./FocusScope-Lcnwzjdv.js";import"./useCollator-DyL6zZr9.js";import"./useFormReset-CaS7VrAz.js";import"./useEvent-C7NWigLs.js";import"./useSpinButton-CZm7p4Fr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-rk8gZU9a.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
