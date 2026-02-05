import{j as r}from"./iframe-BAsHckrK.js";import{L as d}from"./Label-DVOhOuhT.js";import{F as u}from"./FieldDescription-CD7ak6-M.js";import{F as T}from"./FieldError-ZX2j7DJQ.js";import{T as i}from"./TimeField-KaoWTeDS.js";import{L as l}from"./DateInput-CeF6R5dW.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B65nQAul.js";import"./index-CyIJxzCh.js";import"./index-Cf_R1xcK.js";import"./useLocalizedStringFormatter-CGl9WC2_.js";import"./context-BKg0mO6Y.js";import"./Label-Cla8ySRz.js";import"./utils-AcXTY-LA.js";import"./Hidden-CitD2GXi.js";import"./Text-B__BY7tJ.js";import"./browser-tZCM2k1B.js";import"./EmulatedBoldText-BuJbkCoS.js";import"./Text-CORhkzC6.js";import"./FieldError-Ch8lYR65.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CZdsx7H2.js";import"./AlertIcon-C2q1LJ0F.js";import"./IconWarning-DHq1gdF3.js";import"./remote-5f3Q71VQ.js";import"./useFieldComponent-uzP_CJXZ.js";import"./Form-BEcGmyNR.js";import"./useLabel-Zs1yjNWV.js";import"./Group-D8US-dbe.js";import"./useFocusRing-PAL8hD_p.js";import"./useFocus-DSg5hzPG.js";import"./Input-DVOtN3yU.js";import"./usePress-BtuPSsUz.js";import"./useFormValidation-l5tjlCjY.js";import"./useControlledState-DIA42IR3.js";import"./FocusScope-BSJXv8u1.js";import"./useCollator-1De53UJM.js";import"./useFormReset-BBc75pQ_.js";import"./useEvent-BI0qkTtn.js";import"./useSpinButton-Cx5wjIt_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-v3zcDNzM.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
