import{j as r}from"./iframe-BuRyV86k.js";import{L as d}from"./Label-D5Mh9PbX.js";import{F as u}from"./FieldDescription-DTtWzPY6.js";import{F as T}from"./FieldError-CyZxViQf.js";import{T as i}from"./TimeField-BSPkXm_B.js";import{L as l}from"./DateInput-1YSDSzPf.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DspQ11pS.js";import"./index-AZn-raxL.js";import"./index-DXDzX26U.js";import"./useLocalizedStringFormatter-Dqmj3fXI.js";import"./context-C6SHLczB.js";import"./Label-CVQyOr4s.js";import"./utils-DCjU3VYp.js";import"./Hidden-Dduq3kE3.js";import"./Text-DPwKDAaR.js";import"./browser-DvnOBVed.js";import"./EmulatedBoldText-m_25Q3I7.js";import"./Text-D3tRocSh.js";import"./FieldError-BEkkBW9r.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Cq6PpkxX.js";import"./AlertIcon-CtbR1iuV.js";import"./IconWarning-DAJxMizk.js";import"./remote-Cg9OAbJn.js";import"./useFieldComponent-Duyh6ShH.js";import"./Form-C4eLdnUU.js";import"./useLabel-9drM0Q_0.js";import"./Group-Ct0D2Y45.js";import"./useFocusRing-CY0UXM2e.js";import"./useFocus-CQWcTqjz.js";import"./Input-BOqi5cwZ.js";import"./usePress-B_1LlkAk.js";import"./FocusScope-DBYeUwg2.js";import"./useCollator-rSEenu5t.js";import"./useFormReset-BkHfz2ea.js";import"./useFormValidation-DZRdJrD7.js";import"./useEvent-LxFJ0S3x.js";import"./useSpinButton-CX_BUm7V.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CkGF_qo_.js";import"./useControlledState-DYwoO1wA.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
