import{j as r}from"./iframe-DyIQYB7R.js";import{L as d}from"./Label-Bnl2XRS7.js";import{F as u}from"./FieldDescription-B_xnTVZs.js";import{F as T}from"./FieldError-Drb2NmJE.js";import{T as i}from"./TimeField-yPGaHqT6.js";import{L as l}from"./DateInput-3To74ED0.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B46dTgZy.js";import"./index-DNyY7P3f.js";import"./index-BAJQpnn3.js";import"./useLocalizedStringFormatter-C8zgnVvK.js";import"./context-DQwa7-Zw.js";import"./Label-DLjzrNJv.js";import"./utils-Br5k-T_U.js";import"./Hidden-CjE_I8s3.js";import"./Text-DP5VQe4y.js";import"./browser-Dsy2EDmz.js";import"./EmulatedBoldText-B3WFDqoc.js";import"./Text--49tgveg.js";import"./FieldError-CJCkmHNP.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BlqJF_wS.js";import"./remote-CduUCN7o.js";import"./useFieldComponent-BuMHMJdd.js";import"./Form-Ce0HMGMO.js";import"./useLabel-Cx64g9XI.js";import"./Group-DlHcB2Sx.js";import"./useFocusRing-Dsvy8-H7.js";import"./useFocus-MkZ0Yize.js";import"./Input-DTEp0DEd.js";import"./usePress-DBMxrrfH.js";import"./useFormValidation-BzfV6dUL.js";import"./useControlledState-C9rhpCZz.js";import"./FocusScope-CPYLtjFE.js";import"./useCollator-CNrMRXe4.js";import"./useFormReset-DbNMnmkG.js";import"./useEvent-CtnbpMU6.js";import"./useSpinButton-NH38DC39.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CHu8Wicl.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const tr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,tr as __namedExportsOrder,ar as default};
