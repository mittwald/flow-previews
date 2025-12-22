import{j as r}from"./iframe-a9513Vq6.js";import{L as d}from"./Label-BZ3qOvYQ.js";import{F as u}from"./FieldDescription-B1DZzGI9.js";import{F as T}from"./FieldError-WoUSVR_n.js";import{T as i}from"./TimeField-BWcabRwT.js";import{L as l}from"./DateInput-B0SDYSP3.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ClX3KjCn.js";import"./index-BqXFMVtG.js";import"./index-CgKgRbSB.js";import"./useLocalizedStringFormatter-CqunH7JG.js";import"./context-CGjHIvvu.js";import"./Label-THT_xKrE.js";import"./utils-Q60aVnZq.js";import"./Hidden-CBXUgXzH.js";import"./Text-hxI3a1Rs.js";import"./browser-CuCeyixq.js";import"./EmulatedBoldText-mDi0QmS0.js";import"./Text-KDVUHE9w.js";import"./FieldError-C3zvz5gI.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BPr7HnMX.js";import"./remote-CGHUze9I.js";import"./useFieldComponent-DoOT3wm0.js";import"./Form-DpSLYLL6.js";import"./useLabel-nB2pk6qM.js";import"./Group-D-ENRzUh.js";import"./useFocusRing-CmMhl12v.js";import"./useFocus-CH_x6C_j.js";import"./Input-CtQP6IcM.js";import"./usePress-CyOdCqvu.js";import"./useFormValidation-vP3SVKb2.js";import"./useControlledState-CemUvUps.js";import"./FocusScope-BnHRmLRH.js";import"./useCollator-BiekIj1S.js";import"./useFormReset-CYu_Lr-z.js";import"./useEvent-CPsIFNqP.js";import"./useSpinButton-BPTeD4IN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BA4Y780e.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const tr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,tr as __namedExportsOrder,ar as default};
