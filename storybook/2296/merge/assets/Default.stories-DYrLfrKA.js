import{j as r}from"./iframe-CcNHCKoB.js";import{L as d}from"./Label-F2VOWZsZ.js";import{F as u}from"./FieldDescription-tCT0DlP5.js";import{F as T}from"./FieldError-BlodrZIq.js";import{T as i}from"./TimeField-siY48jHw.js";import{L as l}from"./DateInput-BFG8Z0En.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./index-C0Ga1GvX.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./context-LfQwLpL0.js";import"./Label-BWg6WlKG.js";import"./utils-NnqZ9ZBK.js";import"./Hidden-B3wID84r.js";import"./Text-BmtlE-88.js";import"./browser-C0P1LItQ.js";import"./EmulatedBoldText-BunH9Anl.js";import"./Text-BCtKE9i4.js";import"./FieldError--IyvMZRA.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CklP5D4q.js";import"./AlertIcon-DM6j3Z28.js";import"./IconWarning-DmrAmEd1.js";import"./remote-CVy042JL.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./Form-DRLF_vg9.js";import"./useLabel-CyCYkDRj.js";import"./Group-DhbZF5dU.js";import"./useFocusRing-C53Oh36V.js";import"./useFocus-SYOVVSYu.js";import"./Input-D-KHai3o.js";import"./usePress-eyc-LVl-.js";import"./useFormValidation-PdvsTzHy.js";import"./useControlledState-TVt6Qf5c.js";import"./FocusScope-_ikiXfPV.js";import"./useCollator-lY1OBRiY.js";import"./useFormReset-CUbMVBNo.js";import"./useEvent-DmaMUS07.js";import"./useSpinButton-BnFtMIDY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-B1JKpsJn.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
