import{j as r}from"./iframe-BB26x0WO.js";import{L as d}from"./Label-Dkznuq9f.js";import{F as u}from"./FieldDescription-C9tQ8Z1l.js";import{F as T}from"./FieldError-EbPb3FIT.js";import{T as i}from"./TimeField-CMVDhE60.js";import{L as l}from"./DateInput-3jYpm_Se.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-hUu8AB53.js";import"./index-DcuZ1z3T.js";import"./index-CQcoQf9d.js";import"./useLocalizedStringFormatter-C6TuZupA.js";import"./context-CFwMSK2D.js";import"./Label-xrwNKiTo.js";import"./utils-B0cjT-cu.js";import"./Hidden-Pwu5MO4E.js";import"./Text-CVJJy1PS.js";import"./browser-CM4yKXDn.js";import"./EmulatedBoldText-BMfkuJfp.js";import"./Text-C-QQ-f-7.js";import"./FieldError-BdEQwJOQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-By5Jrr-P.js";import"./AlertIcon-8w60vasN.js";import"./IconWarning-xtBRgQwR.js";import"./remote-BOIRgCVv.js";import"./useFieldComponent-uqIFFsha.js";import"./Form-D-p_8RL3.js";import"./useLabel-CXkgZKB9.js";import"./Group-N-95shQ7.js";import"./useFocusRing-3NylsfEU.js";import"./useFocus-BTahgc6b.js";import"./Input-CX7n_Ikd.js";import"./usePress-DgIl3AW_.js";import"./useFormValidation-CSSQUpRU.js";import"./useControlledState-Bi3RtZ50.js";import"./FocusScope-CBDPVkwa.js";import"./useCollator-Cs7p5znT.js";import"./useFormReset-DftD3Tx4.js";import"./useEvent-Dv3TI5So.js";import"./useSpinButton-DcLSLY9I.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DUPm6MtI.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
