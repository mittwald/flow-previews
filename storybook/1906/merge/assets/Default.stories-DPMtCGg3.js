import{j as r}from"./iframe-CFLRrV9_.js";import{L as d}from"./Label-DDweLn-B.js";import{F as u}from"./FieldDescription-B2DMaMC5.js";import{F as T}from"./FieldError-BY_h0DzJ.js";import{T as i}from"./TimeField-CThm6m3X.js";import{L as l}from"./DateInput-ByyZiJ8z.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cgcg4reG.js";import"./index-C9HjT8vY.js";import"./index-24zjo-Kb.js";import"./useLocalizedStringFormatter-BTtlqG0g.js";import"./context-bb3yZDI9.js";import"./Label-CRwaxTbk.js";import"./utils-9RAZgTTl.js";import"./Hidden-DI4qxTyt.js";import"./Text-DEmvrg4f.js";import"./browser-6ZyX-izP.js";import"./EmulatedBoldText-DW1BlzUv.js";import"./Text-DCjLwlBM.js";import"./FieldError-D073kW89.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BwXe_CUh.js";import"./AlertIcon-Dk-GLzZT.js";import"./IconWarning-DnD-gw4t.js";import"./remote-BB1QWzBE.js";import"./useFieldComponent-CywuRKF5.js";import"./Form-HxVpGshA.js";import"./useLabel-C42gu-3e.js";import"./Group-Cb05qa-m.js";import"./useFocusRing-DRVonXEI.js";import"./useFocus-DD1T6bJ4.js";import"./Input-QBFM7ItQ.js";import"./usePress-LdOf-GEu.js";import"./useFormValidation-Cm_zD3mV.js";import"./useControlledState-BS0DqA_d.js";import"./FocusScope-To3K9I_L.js";import"./useCollator-BuvCZz5o.js";import"./useFormReset-BcY6_uyQ.js";import"./useEvent-C2NY4fdQ.js";import"./useSpinButton-BRAyCabn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-y5-pnbpw.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
