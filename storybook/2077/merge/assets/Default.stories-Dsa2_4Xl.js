import{j as r}from"./iframe-B0qqkRSc.js";import{L as d}from"./Label-Bathhgam.js";import{F as u}from"./FieldDescription-CX2AXiNE.js";import{F as T}from"./useFieldComponent-BdE163vq.js";import{T as i}from"./TimeField-CAiEg-qu.js";import{M as l}from"./DateField-B8Rtnh-M.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D28qUuL_.js";import"./index-Bw7Y8sX9.js";import"./index-ByDaWYpT.js";import"./useLocalizedStringFormatter-Hp5e5rkz.js";import"./context-D99v7Uqm.js";import"./Label-CSbZp_Tl.js";import"./utils-fD_u--Rs.js";import"./Hidden-B-z-l7Br.js";import"./Text-BrTaOrXE.js";import"./browser-B1sj-_-y.js";import"./EmulatedBoldText-YngYColk.js";import"./Text-Dr_aqSbj.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BPZvpYf1.js";import"./react-children-utilities-BymZuw_a.js";import"./ClearPropsContext-HA28kjj1.js";import"./useMakeFocusable-BKFtKrAv.js";import"./Form-Dg4UU0-2.js";import"./useLabel-sSRBc7PO.js";import"./Group-n_vUHkH-.js";import"./useFocusRing-6YYb42D4.js";import"./useFocus-D6s77d5g.js";import"./Input-C6zpuO0N.js";import"./usePress-CRF7-NYn.js";import"./useFormValidation-Vh8OxI1q.js";import"./useControlledState-CB1SzgEG.js";import"./FocusScope-8IhL3Eed.js";import"./useCollator-D-k20A4-.js";import"./useFormReset-CSVsou9A.js";import"./useEvent-BB8Na9jU.js";import"./useSpinButton-msA2GCvG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Db6bXTdq.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
