import{j as r}from"./iframe-nlVW-CPZ.js";import{L as d}from"./Label-BuWy1qrT.js";import{F as u}from"./FieldDescription-a2tRS2_K.js";import{F as T}from"./FieldError-C-5FG0Dy.js";import{T as i}from"./TimeField-pXBCBD_7.js";import{L as l}from"./DateInput-D89Og-Et.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./index-DrBjklCk.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./context-CIGB7i0H.js";import"./Label-txjD4aFE.js";import"./utils-CyuEFqip.js";import"./Hidden-B4CC7Km1.js";import"./Text-BzuDjaz9.js";import"./browser-BoEfPalF.js";import"./EmulatedBoldText-DYHVi4jR.js";import"./Text-sEy-KTn9.js";import"./FieldError-BpjEpOFY.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";import"./IconWarning-VZ7ITFqu.js";import"./remote-D3GclicH.js";import"./useFieldComponent-DOzg870F.js";import"./Form-DSPAlIu9.js";import"./useLabel-DUbax7la.js";import"./Group-w-lYdjjN.js";import"./useFocusRing-0Z36i33d.js";import"./useFocus-CD1ZzMvo.js";import"./Input-BlMpicf_.js";import"./usePress-BSHzPeES.js";import"./useFormValidation-DqSMo-uw.js";import"./useControlledState-ywoEmBU4.js";import"./FocusScope-DihhZg9P.js";import"./useCollator-CE-FIC6l.js";import"./useFormReset-J8eUPjf8.js";import"./useEvent-C_UmhbA0.js";import"./useSpinButton-BQ-pbP0Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Ck5hSm9r.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
