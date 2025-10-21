import{j as r}from"./iframe-DOYRhvKw.js";import{L as d}from"./Label-D1jneSDA.js";import{F as u}from"./FieldDescription-Blyf9m0W.js";import{F as T}from"./useFieldComponent-CVvykpK2.js";import{T as i}from"./TimeField-D9bRIe1O.js";import{M as l}from"./DateField-DS9FYXwi.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-STxdqvts.js";import"./index-CBooujIz.js";import"./index-CsHgCCkK.js";import"./useLocalizedStringFormatter-DmT4fRR_.js";import"./context-NzKNm45Y.js";import"./Label-DPl4piTh.js";import"./utils-Bgpcx055.js";import"./Hidden-vFw0yyvc.js";import"./Text-uG3ng9U4.js";import"./browser-BfmJHaZX.js";import"./EmulatedBoldText-wbMAxmw1.js";import"./Text-ChShlFeN.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CT2mn3WV.js";import"./react-children-utilities-BC28ceB8.js";import"./ClearPropsContext-BqcXprie.js";import"./useMakeFocusable-CpkCTOPe.js";import"./Form-iQ1p0tBu.js";import"./useLabel-CzwTtnKl.js";import"./Group-HF6ucXVn.js";import"./useFocusRing-BgXDKXFW.js";import"./useFocus-19H2kxNT.js";import"./Input-OSTDVC9B.js";import"./usePress-GLnS58A3.js";import"./useFormValidation-37foNTGu.js";import"./useControlledState-BpyUCkTO.js";import"./FocusScope-CgTCZfj1.js";import"./useCollator-Dm4rB5GB.js";import"./useFormReset-BHPIYNcK.js";import"./useEvent-Tq7AIfXA.js";import"./useSpinButton-Cppd8Dtu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DYzEED-8.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
