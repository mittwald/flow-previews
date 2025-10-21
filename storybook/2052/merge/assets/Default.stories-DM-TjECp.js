import{j as r}from"./iframe-BziZnbbf.js";import{L as d}from"./Label-7ab3WcOE.js";import{F as u}from"./FieldDescription-mqFf-H3a.js";import{F as T}from"./useFieldComponent-yHiwdZcU.js";import{T as i}from"./TimeField-C_PY3BDZ.js";import{M as l}from"./DateField-CSyAwuSN.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-JHIQPa02.js";import"./index-DKHZz9bz.js";import"./index-_EM7mgZk.js";import"./useLocalizedStringFormatter-Bzp87kLk.js";import"./context-BDhuSyDo.js";import"./Label-SVpetMhq.js";import"./utils-C0RTyIHD.js";import"./Hidden-Bnko_h1D.js";import"./Text-C2tTVpcM.js";import"./browser-BTvp61GS.js";import"./EmulatedBoldText-BRsPLuIL.js";import"./Text-fJHWLREE.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CJvxfsrj.js";import"./react-children-utilities-gpYjsLoV.js";import"./ClearPropsContext-DUOPbXiH.js";import"./useMakeFocusable-BDpn2_Dk.js";import"./Form-lya1P3V3.js";import"./useLabel-fjbW-LOk.js";import"./Group-aJmZoBky.js";import"./useFocusRing-CNOPmzHu.js";import"./useFocus-ycXwMZE-.js";import"./Input-Diy1RLsK.js";import"./usePress-D5emiALM.js";import"./useFormValidation-CTvaA84d.js";import"./useControlledState-DwOoiAv5.js";import"./FocusScope-BuPYUVVd.js";import"./useCollator-DChPehJd.js";import"./useFormReset-CzU-0SyG.js";import"./useEvent-D5k1dgJL.js";import"./useSpinButton-C3e3wg4Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-D7S3oCDN.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
