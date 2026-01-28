import{j as r}from"./iframe-lb0QDBc2.js";import{L as d}from"./Label-DP_lb_cz.js";import{F as u}from"./FieldDescription-D5GA7Uzb.js";import{F as T}from"./FieldError-BAOq6bLD.js";import{T as i}from"./TimeField-DFhm-gHg.js";import{L as l}from"./DateInput-Cf5a-pLR.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CMLBvcrR.js";import"./index-B9b6xQ5S.js";import"./index-DLJvSM0l.js";import"./useLocalizedStringFormatter-DaeZ3M4_.js";import"./context-DKVhGweU.js";import"./Label-BdYNaN4j.js";import"./utils-r2dAqIcX.js";import"./Hidden-DFHOpifw.js";import"./Text-Bvo-yLEA.js";import"./browser-D6xfswL2.js";import"./EmulatedBoldText-CqgiFE-g.js";import"./Text-DV3fQztC.js";import"./FieldError-dmorJJtq.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DpQCB0Tk.js";import"./AlertIcon-DWhGd_Tx.js";import"./IconWarning-BeH6azjz.js";import"./remote-HK64Xy28.js";import"./useFieldComponent-DzHSa8uO.js";import"./Form-DtivvrEr.js";import"./useLabel-DBnvm8X4.js";import"./Group-x-kTcwBS.js";import"./useFocusRing-J18h0CnC.js";import"./useFocus-B48NrLMU.js";import"./Input-CDuEdvXx.js";import"./usePress-CgYa4G9K.js";import"./useFormValidation-M5q2KkbC.js";import"./useControlledState-BS6Up44I.js";import"./FocusScope-BL38dLR2.js";import"./useCollator-BRhgG2J7.js";import"./useFormReset-BIwT2nL6.js";import"./useEvent-DYKWYeYn.js";import"./useSpinButton-Bhvu-CQ4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Bpre5YeA.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
