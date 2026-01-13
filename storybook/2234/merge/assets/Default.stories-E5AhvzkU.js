import{j as r}from"./iframe-y-Qy_Rwm.js";import{L as d}from"./Label-DwZ1nY2p.js";import{F as u}from"./FieldDescription-CpWKNI_h.js";import{F as T}from"./FieldError-CHdxAWDK.js";import{T as i}from"./TimeField-BdQO8cFm.js";import{L as l}from"./DateInput-CwAjYXrI.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ChH3J7dR.js";import"./index-CyDBTnD6.js";import"./index-DHyBIfcz.js";import"./useLocalizedStringFormatter-BuF0P38W.js";import"./context-ukqkFony.js";import"./Label-B71VVe9p.js";import"./utils-Ek_OXClQ.js";import"./Hidden-D2H3G8L4.js";import"./Text-Dc6HCiIC.js";import"./browser-BkGSrLgH.js";import"./EmulatedBoldText-BWRuiDih.js";import"./Text-BUjonAbB.js";import"./FieldError-B0Ilb29D.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-CnTSLXpj.js";import"./AlertIcon-B-ySDH61.js";import"./IconWarning-CSZkcfVi.js";import"./remote-DXSfp6Hy.js";import"./useFieldComponent-BPtwnKvp.js";import"./Form-DvQjUgdb.js";import"./useLabel-oIpNFQLF.js";import"./Group-_NOX1hM3.js";import"./useFocusRing-TFugmXCf.js";import"./useFocus-L_xbSTvo.js";import"./Input-YVfVzY4s.js";import"./usePress-ginTfsZX.js";import"./useFormValidation-49dCeNRi.js";import"./useControlledState-BivKNDQQ.js";import"./FocusScope-GXsPqTvD.js";import"./useCollator-QROY5xcX.js";import"./useFormReset-DmoJehYX.js";import"./useEvent-D3WWLcmI.js";import"./useSpinButton-DqnMYZ5h.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-geMbY-eF.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
