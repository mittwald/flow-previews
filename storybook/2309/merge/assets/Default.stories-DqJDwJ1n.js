import{j as r}from"./iframe--WfF81Kk.js";import{L as d}from"./Label-BrCJfTYV.js";import{F as u}from"./FieldDescription-_8Z-eH9p.js";import{F as T}from"./FieldError-DwJ8vXTD.js";import{T as i}from"./TimeField-DDyClCWQ.js";import{L as l}from"./DateInput-DedCbtw8.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-zBGCvlSH.js";import"./index-CYxiP9KI.js";import"./index-C06vQZsJ.js";import"./useLocalizedStringFormatter-BAqqywtA.js";import"./context-BGH-DtkU.js";import"./Label-B681fyVu.js";import"./utils-DjCd38Rb.js";import"./Hidden-CjN9RU7M.js";import"./Text-BQUBTPZI.js";import"./browser-DaXQhhrD.js";import"./EmulatedBoldText-Bc2SrKM1.js";import"./Text-2H1diUJp.js";import"./FieldError-8xlfKJ8p.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-4irfy3TS.js";import"./AlertIcon-Bc0kQsAW.js";import"./IconWarning-BCj0akvL.js";import"./remote-BYVMC2eP.js";import"./useFieldComponent-DtaSYFu8.js";import"./Form-fKP9Mvs-.js";import"./useLabel-C-b3rJJe.js";import"./Group-BfXMsi0-.js";import"./useFocusRing-xiCVrDfg.js";import"./useFocus-BstfIGzX.js";import"./Input-DN6feiEe.js";import"./usePress-CuA8A2Wl.js";import"./FocusScope-D57rWz_c.js";import"./useCollator-lImoFu1C.js";import"./useFormReset-B7XwhHp1.js";import"./useFormValidation-CPuMB1ok.js";import"./useEvent-CGxaeV4J.js";import"./useSpinButton-BZfttXlj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DH2OssXV.js";import"./useControlledState-33z9BU53.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
