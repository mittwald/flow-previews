import{j as r}from"./iframe-BdeexEb8.js";import{L as d}from"./Label-B8MQOgYT.js";import{F as u}from"./FieldDescription-D4HQC7nu.js";import{F as T}from"./useFieldComponent-DdJyO0fC.js";import{T as i}from"./TimeField-ClTRoOU3.js";import{M as l}from"./DateField-4vQ4SNFO.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9dNYku3.js";import"./index-D-gFJj9O.js";import"./index-DrTgVdtP.js";import"./useLocalizedStringFormatter-BAYb9Fap.js";import"./context-D6yVr_mO.js";import"./Label-0GucTR7O.js";import"./utils-BE4tcj7E.js";import"./Hidden-CQyoiK8N.js";import"./Text-G8amV_-h.js";import"./browser-CYlNocNO.js";import"./EmulatedBoldText-ZcdE1rVE.js";import"./Text-C7oFtPVp.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CtsbdbUA.js";import"./react-children-utilities-jctua2LA.js";import"./ClearPropsContext-C8aFsCZA.js";import"./useMakeFocusable-CQGMBShp.js";import"./Form-Ck-IBHt9.js";import"./useLabel-_lz56ByA.js";import"./Group-B7cbcAm2.js";import"./useFocusRing-rBTaS5qD.js";import"./useFocus-DOIh0B1Z.js";import"./Input-CoS8ao7l.js";import"./usePress-BF3KJpSX.js";import"./useFormValidation-wqB4x0T2.js";import"./useControlledState-lwDPvcY9.js";import"./FocusScope-BYBHw4Pm.js";import"./useCollator-DH6O6X4x.js";import"./useFormReset-BENrYz2J.js";import"./useEvent-DWTDuj97.js";import"./useSpinButton-D_6WfwQM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Cp4KyQbG.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
