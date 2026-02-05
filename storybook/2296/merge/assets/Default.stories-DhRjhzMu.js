import{j as r}from"./iframe-DdPUg3l1.js";import{L as d}from"./Label-CBiKyrhF.js";import{F as u}from"./FieldDescription-DwbcR2ZF.js";import{F as T}from"./FieldError-Brd6jVZQ.js";import{T as i}from"./TimeField-D-YR8jkT.js";import{L as l}from"./DateInput-HjQv9XnF.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B28SqkEE.js";import"./index-DRxXhfH_.js";import"./index-DfF1Hh-7.js";import"./useLocalizedStringFormatter-uZq7iOxf.js";import"./context-eo9HPzgD.js";import"./Label-DhA6S4Mt.js";import"./utils-CZc2hRnH.js";import"./Hidden-9XxNu-Hn.js";import"./Text-DjGrgiDc.js";import"./browser-CdIpgqNn.js";import"./EmulatedBoldText-DdQb5yyc.js";import"./Text-JRLUlLnO.js";import"./FieldError-DDOFx421.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Ds6Oj97F.js";import"./AlertIcon-PzDvVuZo.js";import"./IconWarning-CBjvo3Bl.js";import"./remote-C_Lvi_2k.js";import"./useFieldComponent-CO5pYfeq.js";import"./Form-0LpxOP9r.js";import"./useLabel-DfTMKk9x.js";import"./Group-D63BMUZR.js";import"./useFocusRing-B1QHji0w.js";import"./useFocus-DOBDf5za.js";import"./Input--TqM61uI.js";import"./usePress-C4aurJT7.js";import"./useFormValidation-ChceI0Vn.js";import"./useControlledState-vD92hbDx.js";import"./FocusScope-DY6t_O03.js";import"./useCollator-C9Olqd5e.js";import"./useFormReset-B7Z_bYQn.js";import"./useEvent-ZVXwlSCj.js";import"./useSpinButton-D7cexjzG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-H5VbH_dn.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
