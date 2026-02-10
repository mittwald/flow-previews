import{j as r}from"./iframe-CnD5cTjE.js";import{L as d}from"./Label-BZkRYtAq.js";import{F as u}from"./FieldDescription-rFjAs_3m.js";import{F as T}from"./FieldError-D8deZX0S.js";import{T as i}from"./TimeField-DtjxKsMa.js";import{L as l}from"./DateInput-CWXnVHSd.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C-pFyTgk.js";import"./index-CFIaHCYn.js";import"./index-DPBNH-jw.js";import"./useLocalizedStringFormatter-C15HmRxb.js";import"./context-uSq5N7U7.js";import"./Label-DvWkQRgL.js";import"./utils-BYl_EWK3.js";import"./Hidden-BqUWSjHb.js";import"./Text-Bqsx-GQX.js";import"./browser-DH0afsgD.js";import"./EmulatedBoldText-czAo41Rl.js";import"./Text-Bz5hHxMj.js";import"./FieldError-CkgMvR4A.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-9D-RaPUt.js";import"./AlertIcon-DEFExzLk.js";import"./IconWarning-K8fT7_bQ.js";import"./remote-CRObq-IF.js";import"./useFieldComponent-D1uM9aif.js";import"./Form-Bj2UuDao.js";import"./useLabel-BEvZESWX.js";import"./Group-CgvC6BGS.js";import"./useFocusRing-a13YBJgG.js";import"./useFocus-BZF2vaC7.js";import"./Input-D96XXoVS.js";import"./usePress-DgDG_638.js";import"./FocusScope-q9RNJ1I3.js";import"./useCollator-DdAAf0Bd.js";import"./useFormReset-DzGHPNTd.js";import"./useFormValidation-0N4lg69R.js";import"./useEvent-DjhegQC5.js";import"./useSpinButton-ZpMMk--w.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DNI0b_aQ.js";import"./useControlledState-C-7lgoXp.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
