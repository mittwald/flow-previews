import{j as r}from"./iframe-Ci26vI3B.js";import{L as d}from"./Label-RXEJnYkv.js";import{F as u}from"./FieldDescription-DnqWWk67.js";import{F as T}from"./FieldError-CpZGKwRg.js";import{T as i}from"./TimeField-2hq9Icoy.js";import{L as l}from"./DateInput-Btmn1rbH.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BCoZzahf.js";import"./index-3wEtqLOq.js";import"./index-BgjIHz1Y.js";import"./useLocalizedStringFormatter-D463xrfM.js";import"./context-21njfTP5.js";import"./Label-CzTNGA-w.js";import"./utils-Prtw8tAI.js";import"./Hidden-Bh4pa2b3.js";import"./Text-BThwDV_-.js";import"./browser-CkG7QNAh.js";import"./EmulatedBoldText-TNvCnD2A.js";import"./Text-BBkEKRDK.js";import"./FieldError-C8ji9kGw.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CW-S-5R1.js";import"./AlertIcon-CQS_iHVq.js";import"./IconWarning-CM9E6h9H.js";import"./remote-BeH756Ak.js";import"./useFieldComponent-DlKim18O.js";import"./Form-DDqIZ7ds.js";import"./useLabel-D7Kjovyf.js";import"./Group-CueZt5qh.js";import"./useFocusRing-IT4cpc8M.js";import"./useFocus-BemMoN-v.js";import"./Input-D6UBTZXc.js";import"./usePress-BIn545i6.js";import"./useFormValidation-DbMZQ9P7.js";import"./useControlledState-B4ASThyn.js";import"./FocusScope-ByCQWjTm.js";import"./useCollator-BE-Xf4hi.js";import"./useFormReset-CoDGZCB3.js";import"./useEvent-DLiSbdt5.js";import"./useSpinButton-BfIa7M7U.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BMSgE2UI.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
