import{j as r}from"./iframe-C3YinX3s.js";import{L as d}from"./Label-vc6tDbdp.js";import{F as u}from"./FieldDescription-DuQ-cxei.js";import{F as T}from"./useFieldComponent-unfYr68o.js";import{T as i}from"./TimeField-Dwc2rtK6.js";import{M as l}from"./DateField-D0K1EvfJ.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DbYaKppP.js";import"./index-PmbawSGG.js";import"./index-BppZCGPZ.js";import"./useLocalizedStringFormatter-D8x_j-oY.js";import"./context-XadyItFl.js";import"./Label-uL4LTRYY.js";import"./utils-CkQtaKCN.js";import"./Hidden-RtymAw99.js";import"./Text-40KOd3GJ.js";import"./browser-DlgIuTl3.js";import"./EmulatedBoldText-DmHQDGMB.js";import"./Text-2o-hGpxv.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-6TASCfRR.js";import"./react-children-utilities-Tlnpa_z4.js";import"./ClearPropsContext-CJ1szkV5.js";import"./useMakeFocusable-DG0DAth_.js";import"./Form-BCJL5_dO.js";import"./useLabel-6oysTp78.js";import"./Group-CAUzS8Z9.js";import"./useFocusRing-BT4tpo7d.js";import"./useFocus-DuIK45_5.js";import"./Input-MWLT5DSw.js";import"./usePress-CEE7eirG.js";import"./useFormValidation-mKao3Dkx.js";import"./useControlledState-DTNxqflL.js";import"./FocusScope-fcPAzZ97.js";import"./useCollator-DJ52WOHW.js";import"./useFormReset-BgD1M5By.js";import"./useEvent-NeYNfT16.js";import"./useSpinButton-D3_hjR8Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BxMqVh1Q.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
