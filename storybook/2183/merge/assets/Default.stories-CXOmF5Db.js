import{j as r}from"./iframe-BTx5vfX7.js";import{L as d}from"./Label-D_U9lVoj.js";import{F as u}from"./FieldDescription-ylXyloZw.js";import{F as T}from"./FieldError-z-ClA5kd.js";import{T as i}from"./TimeField-B85D2c-4.js";import{K as l}from"./DateInput-BmkkBTFh.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQbG36RI.js";import"./index-CD1bc2Uf.js";import"./index-Cy86CRop.js";import"./useLocalizedStringFormatter-BiBfXFe3.js";import"./context-B8-2fWdM.js";import"./Label-nt-Mf4T_.js";import"./utils-Rd_MYUg3.js";import"./Hidden-B6Npv2sL.js";import"./Text-DtYTBG7c.js";import"./browser-D9-bvGMx.js";import"./EmulatedBoldText-B89XKop2.js";import"./Text-LwG1QgpY.js";import"./FieldError-I1Bua9KH.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconChevronDown-Bn-1yhHQ.js";import"./remote-CDkUNGK4.js";import"./IconDanger-C580gt5j.js";import"./useFieldComponent-a0kyTMto.js";import"./Form-BpaxdIp-.js";import"./useLabel-CAHdnPVW.js";import"./Group-C7X32I-5.js";import"./useFocusRing-DjSlkPuN.js";import"./useFocus-DM7IXQDx.js";import"./Input-DfioYz8I.js";import"./usePress-g9jBnoDE.js";import"./useFormValidation-CWpL65wq.js";import"./useControlledState-DNSedTkS.js";import"./FocusScope-ConnSCr6.js";import"./useCollator-BFlHC0Dr.js";import"./useFormReset-C2fqGBKA.js";import"./useEvent-B9LXMUdK.js";import"./useSpinButton-DHGQlUUG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CZQtrryt.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const mr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,mr as __namedExportsOrder,tr as default};
