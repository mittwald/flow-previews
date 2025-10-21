import{j as r}from"./iframe-Bju5tM19.js";import{L as d}from"./Label-CEBawMgO.js";import{F as u}from"./FieldDescription-BYoVcIgt.js";import{F as T}from"./useFieldComponent-SvMgnfSt.js";import{T as i}from"./TimeField-BxcAR1mI.js";import{M as l}from"./DateField-DXHrvPO8.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DMQ923EN.js";import"./index-i9t6c7d2.js";import"./index-v7jxlCcy.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./context-BCZfssJF.js";import"./Label-C0LDEu9P.js";import"./utils-CHaPYnRu.js";import"./Hidden-B3KlSyIs.js";import"./Text-Ctwf1INQ.js";import"./browser-5LoYBPX6.js";import"./EmulatedBoldText-DNLnXqQA.js";import"./Text-X0smrbMM.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-EseH3oBy.js";import"./react-children-utilities-CV_3FZ2O.js";import"./ClearPropsContext-nVrOsFhk.js";import"./useMakeFocusable-BXmgj38r.js";import"./Form-CawbhIR_.js";import"./useLabel-DxvdaVYE.js";import"./Group-CMnMCMaj.js";import"./useFocusRing-DQLm4Rj_.js";import"./useFocus-dnpNkUeL.js";import"./Input-Cn0b8SON.js";import"./usePress-DNUm2pP-.js";import"./useFormValidation-Cc6rboKS.js";import"./useControlledState-BiPn7KDX.js";import"./FocusScope-BvTlMNTx.js";import"./useCollator-CPsP6oXT.js";import"./useFormReset-CYS5QNbo.js";import"./useEvent-B0Z9j7Hl.js";import"./useSpinButton-Bve7zR6F.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BSOLE07b.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
