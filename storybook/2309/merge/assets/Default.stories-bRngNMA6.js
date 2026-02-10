import{j as r}from"./iframe-BAXQY30e.js";import{L as d}from"./Label-DhF_BRrp.js";import{F as u}from"./FieldDescription-LY8oqjwS.js";import{F as T}from"./FieldError-D1QPRlMW.js";import{T as i}from"./TimeField-icq85-Ku.js";import{L as l}from"./DateInput-CAk3zdmE.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWoWQ3Dz.js";import"./index-D8IPWXYD.js";import"./index-BAu7LBGH.js";import"./useLocalizedStringFormatter-D2lE0ZvY.js";import"./context-Ch7cvv9N.js";import"./Label-CoIwZGGV.js";import"./utils-CPq9a2_3.js";import"./Hidden-CaIV9czF.js";import"./Text-CsFAJPGd.js";import"./browser-7M05TLI2.js";import"./EmulatedBoldText-RGEYlPNA.js";import"./Text-CgyRU_jx.js";import"./FieldError-RUpMVejq.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Do_swE0s.js";import"./AlertIcon-C4A5rqth.js";import"./IconWarning-NY-vs6K4.js";import"./remote-X8ibHJNw.js";import"./useFieldComponent-RBMXOPsB.js";import"./Form-CMcE9GN0.js";import"./useLabel-XkQiS-6W.js";import"./Group-DP8yEYC_.js";import"./useFocusRing-eOVByyHK.js";import"./useFocus-Bjv2U0Px.js";import"./Input-Dt_0h10s.js";import"./usePress-0WoXV1eK.js";import"./FocusScope-PoiaPb2X.js";import"./useCollator-DxEFZJkY.js";import"./useFormReset-CqoQKslx.js";import"./useFormValidation-DAvMLm6e.js";import"./useEvent-KMkh1PvS.js";import"./useSpinButton-BII39R_t.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-C2Oqp9jE.js";import"./useControlledState-BIans2ur.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
