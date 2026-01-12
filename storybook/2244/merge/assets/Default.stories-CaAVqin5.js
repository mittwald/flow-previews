import{j as r}from"./iframe-rOlqB43H.js";import{L as d}from"./Label-DjfUIXm4.js";import{F as u}from"./FieldDescription-DkDvm_UR.js";import{F as T}from"./FieldError-B7iskscN.js";import{T as i}from"./TimeField-B8y8jCoE.js";import{L as l}from"./DateInput-DHfCn2Rv.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTUHU9lP.js";import"./index-CsMmwq4Q.js";import"./index-DzmHy0yH.js";import"./useLocalizedStringFormatter-UF0AsOfY.js";import"./context-C0IlT2TZ.js";import"./Label-Hp9JhiSo.js";import"./utils-Ccj3VlSZ.js";import"./Hidden-DOKrBgVK.js";import"./Text-CXuVairg.js";import"./browser-DeRtoS4T.js";import"./EmulatedBoldText-td0NnrMW.js";import"./Text-CjxKuecI.js";import"./FieldError-CnSkRhK3.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-DG4pRxN7.js";import"./AlertIcon-BISUoRMj.js";import"./IconWarning-Di5b70C_.js";import"./remote-DT0xwqhP.js";import"./useFieldComponent-sAEQMV1g.js";import"./Form-C-fbNo1l.js";import"./useLabel-CbRIwZrE.js";import"./Group-DT2FxViN.js";import"./useFocusRing-lBaj0PQL.js";import"./useFocus-B5EXjvsK.js";import"./Input-DoF-1MyK.js";import"./usePress-D4qdaxsz.js";import"./useFormValidation-DWvRQI9h.js";import"./useControlledState-BGrTDRws.js";import"./FocusScope-BxWeftc5.js";import"./useCollator-BzTQk6BT.js";import"./useFormReset-BZ2QXIUx.js";import"./useEvent-Cj6N6ygk.js";import"./useSpinButton-NqP63et_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Ll9WJ8se.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
