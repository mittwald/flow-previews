import{j as r}from"./iframe-uf-MKLgq.js";import{L as d}from"./Label-CnhLMz3J.js";import{F as u}from"./FieldDescription-Xe8FFH5r.js";import{F as T}from"./FieldError-DuL8_ys6.js";import{T as i}from"./TimeField-SPAZ4I7m.js";import{L as l}from"./DateInput-DX3SLx6f.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CR1nBuBt.js";import"./index-B7owIbBs.js";import"./index-CTOYeHPx.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./context-DqOu6PGu.js";import"./Label-Cdykpluf.js";import"./utils-DZ6AixXo.js";import"./Hidden-lq-QDLcj.js";import"./Text-CwTgn3ty.js";import"./browser-CS6yJLU7.js";import"./EmulatedBoldText-BnnwN73K.js";import"./Text-DCWOF5Yr.js";import"./FieldError-hMdCLiLA.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CTyPJTrr.js";import"./AlertIcon-C9HYB2oh.js";import"./IconWarning-BGOvrRAj.js";import"./remote-7esdTMhw.js";import"./useFieldComponent-oiltg6td.js";import"./Form-Clq2RMYH.js";import"./useLabel-CdaYwKww.js";import"./Group-DfUk4kcb.js";import"./useFocusRing-190z59Bo.js";import"./useFocus-BMvnG0Qw.js";import"./Input-Da_fVGjz.js";import"./usePress-BdqiHW2G.js";import"./FocusScope-1QvypY2n.js";import"./useCollator-BHzC2k5n.js";import"./useFormReset-D43--mAD.js";import"./useFormValidation-DWm9SC-U.js";import"./useEvent-B9v_LmSJ.js";import"./useSpinButton-cDr9GReW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-qbgg0ib6.js";import"./useControlledState-BuF4aZkb.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
