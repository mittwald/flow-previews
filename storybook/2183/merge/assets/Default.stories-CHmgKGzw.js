import{j as r}from"./iframe-Eg8-wFCR.js";import{L as d}from"./Label-1lc8IvKU.js";import{F as u}from"./FieldDescription-CAHlR0jD.js";import{F as T}from"./FieldError-D_RdlzA4.js";import{T as i}from"./TimeField-Dus7XEhz.js";import{K as l}from"./DateInput-B7RotqJz.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-8KVNBPc4.js";import"./index-BbsXAeQz.js";import"./index-7P9p2RDg.js";import"./useLocalizedStringFormatter-DPRCgyho.js";import"./context-D30M243T.js";import"./Label-ayphvmky.js";import"./utils-DpUmHG9o.js";import"./Hidden-CPM5AGUb.js";import"./Text-cFe2oWr9.js";import"./browser-CGaD3WbY.js";import"./EmulatedBoldText-BvL31EIC.js";import"./Text-CVQZ1Ff_.js";import"./FieldError-BwCFTN-W.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconChevronDown-CB7etEhV.js";import"./remote-DyWsWGYm.js";import"./IconDanger-Djal8A6_.js";import"./useFieldComponent-CePCnb_B.js";import"./Form-DkJGoq-X.js";import"./useLabel-CiQu3Cp5.js";import"./Group-BHVgCnMY.js";import"./useFocusRing-DXLUoCe1.js";import"./useFocus-BombNWQr.js";import"./Input-q1ZC5BdI.js";import"./usePress-eXiMCUEC.js";import"./useFormValidation-D_eOv9kq.js";import"./useControlledState-B4vwiKN6.js";import"./FocusScope-BFrkZdE_.js";import"./useCollator-C-69fnSd.js";import"./useFormReset-BOxw_xUS.js";import"./useEvent-Cv81pFWJ.js";import"./useSpinButton-B0Jr9cE5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Cv23mvLt.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
