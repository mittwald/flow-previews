import{j as r}from"./iframe-Bt_Ape3b.js";import{L as d}from"./Label-LBQHmcU0.js";import{F as u}from"./FieldDescription-BVGH4033.js";import{F as T}from"./FieldError-DvZju2Cm.js";import{T as i}from"./TimeField-D3ZCUIUP.js";import{L as l}from"./DateInput-CgLECtak.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoHw3WqD.js";import"./index-DJTzXtHe.js";import"./index-gN6AAF3-.js";import"./useLocalizedStringFormatter-Bayz7Ycu.js";import"./context-BGqy3a6E.js";import"./Label-Bfb_thp3.js";import"./utils-DGGum7sG.js";import"./Hidden-CJIrU941.js";import"./Text-Bs2hbxJA.js";import"./browser-BI8hAkYP.js";import"./EmulatedBoldText-213nH2nf.js";import"./Text-DwU1R_Cs.js";import"./FieldError-Cd4omKy3.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BQjeLTWb.js";import"./remote-C9NcRL_b.js";import"./useFieldComponent-QpDNRghi.js";import"./Form-E_SZdIUl.js";import"./useLabel-BAWBHbvC.js";import"./Group-MbSsCM3Y.js";import"./useFocusRing-Ba6s95SH.js";import"./useFocus-C-togmBu.js";import"./Input-DtIcDeFz.js";import"./usePress-DErVZDbk.js";import"./useFormValidation-Gf9yhQ7S.js";import"./useControlledState-Bw01eRXu.js";import"./FocusScope-BOag0uW3.js";import"./useCollator-CvPTpoia.js";import"./useFormReset-BU_Yh1RY.js";import"./useEvent-B7_y21W_.js";import"./useSpinButton-CHx4bPFa.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CvqYN6PL.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
