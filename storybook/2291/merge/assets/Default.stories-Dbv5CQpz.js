import{j as r}from"./iframe-BrRYKFNZ.js";import{L as d}from"./Label-16dSI6nY.js";import{F as u}from"./FieldDescription-59pme2uS.js";import{F as T}from"./FieldError-Ce69irxX.js";import{T as i}from"./TimeField-CiwoB8tb.js";import{L as l}from"./DateInput-iU5tqyE-.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6MOqeSY.js";import"./index-Bwdm-eaA.js";import"./index--DYCSdQe.js";import"./useLocalizedStringFormatter-BGu-vUkX.js";import"./context-CNZG124A.js";import"./Label-D0rlaIi3.js";import"./utils-B1YhIU5r.js";import"./Hidden-CpB89dfv.js";import"./Text-BQhotjr-.js";import"./browser-rpb3JyGK.js";import"./EmulatedBoldText-DCPr9fyi.js";import"./Text-C7DedtDs.js";import"./FieldError-DMOv5TcV.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CUhcwM6U.js";import"./AlertIcon-B-O3oopm.js";import"./IconWarning-BeyOYKIy.js";import"./remote-CSM401Gb.js";import"./useFieldComponent-D0nvFHA9.js";import"./Form-C0F-7ONn.js";import"./useLabel-B8Txg4ii.js";import"./Group-DhsxY3hh.js";import"./useFocusRing-DN4mDdXp.js";import"./useFocus-Br7iUm-k.js";import"./Input-DUxkIprV.js";import"./usePress-fw0Lqzwn.js";import"./useFormValidation-vznVoA4Z.js";import"./useControlledState-BbGuTZMM.js";import"./FocusScope-C9Un_YW5.js";import"./useCollator-C7d0Ik_Q.js";import"./useFormReset-9TaX9dD_.js";import"./useEvent-D5Z7Dnjm.js";import"./useSpinButton-C_U3sXVo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DYbw3p-j.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
