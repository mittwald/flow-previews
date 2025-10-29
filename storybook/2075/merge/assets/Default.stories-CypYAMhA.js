import{j as r}from"./iframe-C9dYfgSf.js";import{L as d}from"./Label-huPJyomh.js";import{F as u}from"./FieldDescription-aE3p3Nfy.js";import{F as T}from"./useFieldComponent-Br5YSvi-.js";import{T as i}from"./TimeField-Bz9_riOX.js";import{M as l}from"./DateField-BZqAqTi2.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bze_r9FR.js";import"./index-CVihxOyi.js";import"./index-DbMX5jmM.js";import"./useLocalizedStringFormatter-DHpih7p2.js";import"./context-iM_q7ty8.js";import"./Label-HJzRYjqm.js";import"./utils-CO6LnGLR.js";import"./Hidden-C5ZQOCSQ.js";import"./Text-DeJ4PaiG.js";import"./browser-CNYhznL3.js";import"./EmulatedBoldText-WKOr2IKU.js";import"./Text-CQ7Fwsu6.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-fVXPK3i1.js";import"./react-children-utilities-DAjt5CEG.js";import"./ClearPropsContext-oIIvwL5Y.js";import"./useMakeFocusable-JetFJK9R.js";import"./Form-CYcFTCJ6.js";import"./useLabel-DpM9fuaR.js";import"./Group-DC27XkzE.js";import"./useFocusRing-29NBTIcT.js";import"./useFocus-xkgg1n29.js";import"./Input-B4cpKRwG.js";import"./usePress-BlhdQGL7.js";import"./useFormValidation-cSt72451.js";import"./useControlledState-DlEEU1a1.js";import"./FocusScope-BDFIEW4R.js";import"./useCollator-C7M5jLo1.js";import"./useFormReset-CCon2GTP.js";import"./useEvent-D_pA9wfR.js";import"./useSpinButton-CTMgKcdp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BNCZPepN.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
