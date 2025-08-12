import{j as r}from"./iframe-BpEavT04.js";import{L as d}from"./Label-CiJybHgW.js";import{F as u}from"./FieldDescription-Vq0coIIu.js";import{F as T}from"./FieldError-DY8OUBEl.js";import{T as i}from"./TimeField-DTc_rAkB.js";import{M as l}from"./DateField-B_b5rxE0.js";import"./index-k6QiPQ3a.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-REkcYbgF.js";import"./mergeRefs-BC_BuoXn.js";import"./index-D2hwKXUM.js";import"./useLocalizedStringFormatter-DJSuZDt4.js";import"./context-1jMNVxHt.js";import"./Label-DpfcozJA.js";import"./utils-CpHgE-S6.js";import"./Hidden-ZJTH-wDD.js";import"./Text-CcXeyI30.js";import"./browser-DDZLlA7g.js";import"./EmulatedBoldText-CG9Doyve.js";import"./Text-DWLjOUr2.js";import"./IconWarning-vA6HsYJq.js";import"./FieldError-BmEWAGf_.js";import"./filterDOMProps-i7L6S0l1.js";import"./FormField.module-B9AzUSUD.js";import"./Form-DJ2svD4f.js";import"./useFocus-BaJLfW1J.js";import"./useLabel-6-vYiz3X.js";import"./Group-DG2VW6yX.js";import"./useFocusRing-DmvqpG-I.js";import"./usePress-DGfPwR5g.js";import"./FocusScope-CJ6Nm8ct.js";import"./useCollator-bTe8AndB.js";import"./useFormReset-CovQJR7M.js";import"./useEvent--O7DxxGG.js";import"./useSpinButton-Cv_tNHun.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BxLh7Cnu.js";import"./useControlledState-Cjeeyz03.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const ir=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,ir as __namedExportsOrder,er as default};
