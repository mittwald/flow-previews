import{j as r}from"./iframe-DnKh_q8B.js";import{L as d}from"./Label-_TjJj3W9.js";import{F as u}from"./FieldDescription-73O0rUMk.js";import{F as T}from"./FieldError-CQ45DqtA.js";import{T as i}from"./TimeField-CKBQk6zs.js";import{L as l}from"./DateInput-eBvzMYkG.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NsMUrrXI.js";import"./index-DEpWzVfg.js";import"./index-B5PweBHP.js";import"./useLocalizedStringFormatter-ClvwREm6.js";import"./context-CXoyow8k.js";import"./Label-psEyVv54.js";import"./utils-BZc8lNcd.js";import"./Hidden-qw9_5FuA.js";import"./Text-Drd9GdLo.js";import"./browser-BUa4T4SN.js";import"./EmulatedBoldText-C0uufS8q.js";import"./Text-DobXAK13.js";import"./FieldError-ChpD0sIl.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DFrKGWVH.js";import"./AlertIcon-3p_Y3XqS.js";import"./IconWarning-C-jbuAIx.js";import"./remote-k0GnUd79.js";import"./useFieldComponent-ClvUady3.js";import"./Form-BQHEa3Zl.js";import"./useLabel-jAJMJRpZ.js";import"./Group-BODZXCjp.js";import"./useFocusRing-CZAaR2ds.js";import"./useFocus-BUIY7lOc.js";import"./Input-mgtZ57Ff.js";import"./usePress-CFc3C1mq.js";import"./useFormValidation-C9ppbdC-.js";import"./useControlledState-Dx9tzWN_.js";import"./FocusScope-Ddw08eyC.js";import"./useCollator-DnWbXdif.js";import"./useFormReset-BbinXmMH.js";import"./useEvent-DMn0oMqB.js";import"./useSpinButton-CmovIeGe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DE6XXNY_.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
