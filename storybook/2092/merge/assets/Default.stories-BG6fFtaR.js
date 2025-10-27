import{j as r}from"./iframe-DoVgBQr5.js";import{L as d}from"./Label-B_iGOO1o.js";import{F as u}from"./FieldDescription-CycJT4it.js";import{F as T}from"./useFieldComponent-Dl5zd8_u.js";import{T as i}from"./TimeField-u2GjuDrZ.js";import{M as l}from"./DateField-Czdyp_OF.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-KNPphWYF.js";import"./index-jEdNOdxF.js";import"./index-CnXLT15x.js";import"./useLocalizedStringFormatter-C282_ari.js";import"./context-DKZO50eL.js";import"./Label-8ulleTCg.js";import"./utils-BUNxWnYj.js";import"./Hidden-VhCLrHg5.js";import"./Text-DarT3iBq.js";import"./browser-CTr_Jj6j.js";import"./EmulatedBoldText-Ck3zADpv.js";import"./Text-BnwT6LTw.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BITNguYJ.js";import"./react-children-utilities-NLX1q1W1.js";import"./ClearPropsContext-8Ai0JzP3.js";import"./useMakeFocusable-4hJKvVl2.js";import"./Form-ISVWAvzv.js";import"./useLabel-Dokwxw5N.js";import"./Group-DUVw5f5J.js";import"./useFocusRing-C7RfsB5U.js";import"./useFocus-DgyX4ANK.js";import"./Input-CUJOOTLM.js";import"./usePress-CMEqlp6n.js";import"./useFormValidation-BBVxENjx.js";import"./useControlledState-JsyFwj7N.js";import"./FocusScope-DbQQ9osx.js";import"./useCollator-BaFQCUm3.js";import"./useFormReset-DOuAY3sG.js";import"./useEvent-CXpyXyC8.js";import"./useSpinButton-Ckt9YJ66.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-D_SwcM5E.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
