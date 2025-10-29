import{j as r}from"./iframe-BFuSR0CY.js";import{L as d}from"./Label-Bzfu9tdI.js";import{F as u}from"./FieldDescription-DReTe5UI.js";import{F as T}from"./useFieldComponent-DvAk7ROg.js";import{T as i}from"./TimeField-BRohrvAx.js";import{M as l}from"./DateField-BHrxj-vO.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Czyught-.js";import"./index-DyDKJP2K.js";import"./index-D8dET2XL.js";import"./useLocalizedStringFormatter-CXcIdBbj.js";import"./context-6pf_efel.js";import"./Label-Dl8lfN0K.js";import"./utils-CEuw8CkJ.js";import"./Hidden-BoaT9a_j.js";import"./Text-BXhKPUqX.js";import"./browser-h3r-jBf1.js";import"./EmulatedBoldText-BrOu3vHP.js";import"./Text-CVe1O8QA.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BDLPxpKm.js";import"./react-children-utilities-705z1kI6.js";import"./ClearPropsContext-DVOTNhZJ.js";import"./useMakeFocusable-Begosg92.js";import"./Form-CopJ-XT2.js";import"./useLabel-DzVjSD7h.js";import"./Group-ln6N3sDl.js";import"./useFocusRing-CdpePOyD.js";import"./useFocus-Dfi_0tQM.js";import"./Input-Dy1mfW1m.js";import"./usePress-BYMimxLy.js";import"./useFormValidation-Dt4bKs4p.js";import"./useControlledState-Y8_jrThy.js";import"./FocusScope-Dzg120-u.js";import"./useCollator-D7Ttiyl_.js";import"./useFormReset-CMQHaKTN.js";import"./useEvent-D6E-W8z_.js";import"./useSpinButton-w_X_7RVJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CuyJxEKq.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
