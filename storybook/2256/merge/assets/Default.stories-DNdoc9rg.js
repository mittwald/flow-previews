import{j as r}from"./iframe-D2BYf5-g.js";import{L as d}from"./Label-DC-_uf6W.js";import{F as u}from"./FieldDescription-BThX7255.js";import{F as T}from"./FieldError-DX5_shM3.js";import{T as i}from"./TimeField-CCqVOyfS.js";import{L as l}from"./DateInput-BmhTz1Oj.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CbIDm01r.js";import"./index-CRlONQd4.js";import"./index-Bu8wVR5j.js";import"./useLocalizedStringFormatter-C9QysfdO.js";import"./context-DWMR9XE1.js";import"./Label-Be_gFKko.js";import"./utils-DHZ51AFQ.js";import"./Hidden-CfpJTou_.js";import"./Text-D6N8Heh9.js";import"./browser-CRHYBb-w.js";import"./EmulatedBoldText-BewoRcqC.js";import"./Text-Dog52uMi.js";import"./FieldError-RWcRHk2C.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-Ds9fEZFP.js";import"./AlertIcon-LWJoxW2P.js";import"./IconWarning-BvAkc2LD.js";import"./remote-C9AuEG_9.js";import"./useFieldComponent-BFOdLrJ8.js";import"./Form-DfX8wS-B.js";import"./useLabel-DtwWh7yV.js";import"./Group-CFjwdlwi.js";import"./useFocusRing-DGJLUvQM.js";import"./useFocus-ORvRv07U.js";import"./Input-CmZkYsGH.js";import"./usePress-wVuL2i-g.js";import"./useFormValidation-BTfq9KBg.js";import"./useControlledState-fyUF26L0.js";import"./FocusScope-4_J7OwCf.js";import"./useCollator-BK0Pw3vX.js";import"./useFormReset-Dqz1EECq.js";import"./useEvent-CvRwCHkk.js";import"./useSpinButton-DWvs2qV2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-aHe2deqD.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
