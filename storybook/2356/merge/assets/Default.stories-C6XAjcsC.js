import{j as r}from"./iframe-CCG9iH9q.js";import{L as d}from"./Label-ZsZ9_LuX.js";import{F as u}from"./FieldDescription-CUhsst8_.js";import{F as T}from"./FieldError-C6WCZxmP.js";import{T as i}from"./TimeField-DhmaeiHf.js";import{L as l}from"./DateInput-CXLjRhpS.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DtMp-09u.js";import"./index-rcZGBqb0.js";import"./index-DO8RY2JU.js";import"./useLocalizedStringFormatter-BayblNF2.js";import"./context-BOE3Zx9s.js";import"./Label-Bqehi3yR.js";import"./utils-BqjYSsY0.js";import"./Hidden-DP_c1-uJ.js";import"./Text-CqiRKP9V.js";import"./browser-DlPLk6Tx.js";import"./EmulatedBoldText-DGQ67tbz.js";import"./Text-CsZp0s5y.js";import"./FieldError-IbwLA4qq.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BBv4eV07.js";import"./AlertIcon-BWG972Pn.js";import"./IconWarning-CKuAFgzi.js";import"./remote-BNVNDlip.js";import"./useFieldComponent-BO1aRG8J.js";import"./Form-CaeCkx3f.js";import"./useLabel-CWkbOtE9.js";import"./Group-BkubaCeK.js";import"./useFocusRing-DEew3vp8.js";import"./useFocus-DQtiJNjW.js";import"./Input-mPx5hz5Z.js";import"./usePress-C9nCYq1D.js";import"./FocusScope-CGp51FRM.js";import"./useCollator-C1I9ImG_.js";import"./useFormReset-DOloisqU.js";import"./useFormValidation-Jbp24I-0.js";import"./useEvent-CqAdQvXR.js";import"./useSpinButton-Ci_IKpIK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DANY_2PL.js";import"./useControlledState-DQCduMNG.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
