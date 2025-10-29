import{j as r}from"./iframe-BO4how7V.js";import{L as d}from"./Label-Dg0lhbqP.js";import{F as u}from"./FieldDescription-CJgVFelr.js";import{F as T}from"./useFieldComponent-CjWlILZl.js";import{T as i}from"./TimeField-D4PtkjKV.js";import{M as l}from"./DateField-66_-uf74.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-_BWaP51b.js";import"./index-B3PYSYUw.js";import"./index-CzMnHAtb.js";import"./useLocalizedStringFormatter-Byhh4L4X.js";import"./context-n99Hur2q.js";import"./Label-HRe2PJ1I.js";import"./utils-BpiWkIEZ.js";import"./Hidden-cuI6d2d2.js";import"./Text-k4VuksKp.js";import"./browser-9RCZAQdm.js";import"./EmulatedBoldText-B4e_rnhx.js";import"./Text-BwppUNzg.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-riXPckyc.js";import"./react-children-utilities-aRBIKRzv.js";import"./ClearPropsContext-Cr48Xe01.js";import"./useMakeFocusable-D5dCcyqU.js";import"./Form-hZ8SLhDT.js";import"./useLabel-R_XjJcRU.js";import"./Group-BtVQV9Eb.js";import"./useFocusRing-cZUm55wA.js";import"./useFocus-CFrGhCIR.js";import"./Input-C8s0JVaR.js";import"./usePress-C-n8mYYh.js";import"./useFormValidation-BHRl0fwc.js";import"./useControlledState-Dy2CU0s2.js";import"./FocusScope-BDHPNMgd.js";import"./useCollator-fJkQzVou.js";import"./useFormReset-DKBI04Qj.js";import"./useEvent-BsUSX18g.js";import"./useSpinButton-BnFUaOxH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DQFHujJn.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
