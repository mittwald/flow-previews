import{j as r}from"./iframe-CLJtUSH1.js";import{L as d}from"./Label-CL2lxKWa.js";import{F as u}from"./FieldDescription-Durr1uPe.js";import{F as T}from"./FieldError-DOHJV3_t.js";import{T as i}from"./TimeField-BrJYtjo1.js";import{L as l}from"./DateInput-DG9ILxYm.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ddZp4AYb.js";import"./index-CLGZrIuY.js";import"./index-C5KxKItK.js";import"./useLocalizedStringFormatter-DOmCW1HP.js";import"./context-DZMEEftG.js";import"./Label-zeGTIhsR.js";import"./utils-DvtEjNbs.js";import"./Hidden-BOcIw6_e.js";import"./Text-B6Fe6olk.js";import"./browser-BMt8iY1_.js";import"./EmulatedBoldText-BqLHzBf0.js";import"./Text-COsBjVJz.js";import"./FieldError-DZmbq2tb.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Cdx49GPM.js";import"./AlertIcon-Gt2BTk8C.js";import"./IconWarning-RoA_lEUP.js";import"./remote-B_1lzL7i.js";import"./useFieldComponent-BH0Y7qa0.js";import"./Form-DsvsQY6J.js";import"./useLabel-DV7QK5Z-.js";import"./Group-D9i1M0Ig.js";import"./useFocusRing-lsntDLZI.js";import"./useFocus-CAJuP4TC.js";import"./Input-CzVRJw_9.js";import"./usePress-bTiOWaRI.js";import"./FocusScope-DhCz7nLk.js";import"./useCollator-CG3ZLIsg.js";import"./useFormReset-3JYpIfMS.js";import"./useFormValidation-vO_E-FCH.js";import"./useEvent-B0QpT_fK.js";import"./useSpinButton-DPaHlIPe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BbKwafif.js";import"./useControlledState-BRozYY3l.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
