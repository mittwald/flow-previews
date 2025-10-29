import{j as r}from"./iframe-fd4MG1i8.js";import{L as d}from"./Label-DcZaDq0J.js";import{F as u}from"./FieldDescription-BNSJSS3y.js";import{F as T}from"./useFieldComponent-CTpQ-XZg.js";import{T as i}from"./TimeField-BiU5wQO2.js";import{M as l}from"./DateField-CqbQDpOO.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuscKuFt.js";import"./index-CeLeQ-qQ.js";import"./index-DLSCOdFN.js";import"./useLocalizedStringFormatter-CKY9Jmr8.js";import"./context-Dbob8nST.js";import"./Label-Cas_0aCA.js";import"./utils-Cwcb_ph1.js";import"./Hidden-DL9_D-g9.js";import"./Text-Dcd0JdvI.js";import"./browser-Dh_0Zrut.js";import"./EmulatedBoldText-BOq1lZio.js";import"./Text-Ct_tO_6D.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-9sqw3U7E.js";import"./react-children-utilities-CIQCctRB.js";import"./ClearPropsContext-BW7itMIx.js";import"./useMakeFocusable-DLeuMSJI.js";import"./Form-DF5wN6HS.js";import"./useLabel-DjhpIeNr.js";import"./Group-DKzOXU5W.js";import"./useFocusRing-LifWKPgp.js";import"./useFocus-BWTUKGe5.js";import"./Input-CYK177a4.js";import"./usePress-P37V2JO8.js";import"./useFormValidation-C8R7XiMh.js";import"./useControlledState-oGGPnlEt.js";import"./FocusScope-29AKamG2.js";import"./useCollator-DNAEXkDs.js";import"./useFormReset-NfLpwngh.js";import"./useEvent-5AoaQB1j.js";import"./useSpinButton-DKRYuzYh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-ChOEWBqS.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
