import{j as r}from"./iframe-CG_BDTJg.js";import{L as d}from"./Label-eLDtxB0Y.js";import{F as u}from"./FieldDescription-CpYRZCBv.js";import{F as T}from"./FieldError-DN7cTCYW.js";import{T as i}from"./TimeField-1FgOvpqe.js";import{L as l}from"./DateInput-lr3Kv7sV.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cu1B5LJt.js";import"./index-C71TA-pA.js";import"./index-CuwL1_wd.js";import"./useLocalizedStringFormatter-DqHGK81F.js";import"./context-CXt1SSmQ.js";import"./Label-CQ1G_pe6.js";import"./utils-BtbDMhcr.js";import"./Hidden-DdAaT9j3.js";import"./Text-DpPZns_R.js";import"./browser-yLu0BSsR.js";import"./EmulatedBoldText-CNB3Go6_.js";import"./Text-CLAgqxCC.js";import"./FieldError-DIhe2pHb.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-BXThyvrG.js";import"./AlertIcon-y6uiAF7a.js";import"./IconWarning-OVzy7qXj.js";import"./remote-B2NguZ9L.js";import"./useFieldComponent-UHV4FB79.js";import"./Form-LFW5XTCh.js";import"./useLabel-DI7piRsn.js";import"./Group-CxPvNJzw.js";import"./useFocusRing-CaZs-udO.js";import"./useFocus-BQxEMJ7t.js";import"./Input-Dsqxq3JD.js";import"./usePress-C5t6ziJ-.js";import"./useFormValidation-BBj6R535.js";import"./useControlledState-BP00jBlc.js";import"./FocusScope-CTViNy8e.js";import"./useCollator-CGeacNLD.js";import"./useFormReset-BbxWwIqr.js";import"./useEvent-B3SFi6nF.js";import"./useSpinButton-C9BxDuiy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BDnVvTV7.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
