import{j as r}from"./iframe-EtTbRQoM.js";import{L as d}from"./Label-BHPxSoWd.js";import{F as u}from"./FieldDescription-RyyHlj0A.js";import{F as T}from"./FieldError-Bx65Dx0T.js";import{T as i}from"./TimeField-CGGKFEuC.js";import{M as l}from"./DateField-BJ7gPXMm.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./index-rMxpLDk9.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./context-HEbrZrvP.js";import"./Label-FPs7V2cE.js";import"./utils-C_hvyJpn.js";import"./Hidden-BhWY_xu3.js";import"./Text-CAO-zPwU.js";import"./browser-Cob99Do9.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./Text-CANjZEUs.js";import"./IconWarning-CO-lUcxm.js";import"./FieldError-Dm1dzE4u.js";import"./filterDOMProps-i7L6S0l1.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-qjH8k0Qb.js";import"./Form-CyJo_kk3.js";import"./Group-DeuTwRQ_.js";import"./useFocusRing-hCmULEnE.js";import"./useFocus-9RWBE5qv.js";import"./Input-TlPGvJ5n.js";import"./usePress-sAonsHdy.js";import"./useFormValidation-CisZkPpg.js";import"./useControlledState-DmCe06Ai.js";import"./FocusScope-Dkurg4aB.js";import"./useCollator-CjrbHKqV.js";import"./useFormReset-B1BZ1rNK.js";import"./useEvent-DcRgbaUL.js";import"./useSpinButton-FsnqNS7d.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BJjLne1z.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const sr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,sr as __namedExportsOrder,or as default};
