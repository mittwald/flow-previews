import{j as r}from"./iframe-CYPvHnuu.js";import{L as d}from"./Label-BTRY4Fha.js";import{F as u}from"./FieldDescription-RtGqf3oZ.js";import{F as T}from"./FieldError-BvWeuB1p.js";import{T as i}from"./TimeField-BB5k_88A.js";import{L as l}from"./DateInput-CHx1NKzZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiIhS_GG.js";import"./index-6AOj4Xku.js";import"./index-CuYxJU0p.js";import"./useLocalizedStringFormatter-DwFCtkTc.js";import"./context-Dv0AyQUz.js";import"./Label-5Y8iG3_m.js";import"./utils---ZBHqUT.js";import"./Hidden-C7UX8GNM.js";import"./Text-B7HPZf5X.js";import"./browser-DHkGBw9W.js";import"./EmulatedBoldText-BplpewOf.js";import"./Text-CELcxyth.js";import"./FieldError-DKbYNsKn.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CxTd4Ejc.js";import"./remote-jfB-IGaC.js";import"./useFieldComponent-K4osF3of.js";import"./Form-Bjo4WKP7.js";import"./useLabel-DsmrWctO.js";import"./Group-B-UmyINm.js";import"./useFocusRing-CwF8Yxqy.js";import"./useFocus-Besr2u9O.js";import"./Input-C71-o0Ak.js";import"./usePress-BAll9lzw.js";import"./useFormValidation-BOj1NNIZ.js";import"./useControlledState-CzL0wnxp.js";import"./FocusScope-CPpTYY10.js";import"./useCollator-D2xCK0iS.js";import"./useFormReset-DMfMEm_f.js";import"./useEvent-ZUbDwjtd.js";import"./useSpinButton-BVkSrbs6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-v_twpB_X.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
