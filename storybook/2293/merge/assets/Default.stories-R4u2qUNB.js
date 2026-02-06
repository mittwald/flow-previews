import{j as r}from"./iframe-bYrN4iqU.js";import{L as d}from"./Label-CPmhF0es.js";import{F as u}from"./FieldDescription-toQACF4D.js";import{F as T}from"./FieldError-DELvRCSS.js";import{T as i}from"./TimeField-BHaWQfE1.js";import{L as l}from"./DateInput-DV_0yw1K.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./index-ByZhX1CH.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./context-Hrlbzros.js";import"./Label-BHh_gacH.js";import"./utils-B3voqzat.js";import"./Hidden-kCI5Fish.js";import"./Text-Ggj8lIEk.js";import"./browser-CHbB-bBA.js";import"./EmulatedBoldText-Dg0kR_8L.js";import"./Text-Dj7c1Gq2.js";import"./FieldError-BBcT2nDa.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BULPfvI7.js";import"./AlertIcon-fl_R2PKX.js";import"./IconWarning-m_DFVeXI.js";import"./remote-zHy9wvpL.js";import"./useFieldComponent-CM1iSrAB.js";import"./Form-RNfZ8NGW.js";import"./useLabel-xelku7uN.js";import"./Group-g7yR8ljX.js";import"./useFocusRing-D4lo4_Zr.js";import"./useFocus-DIDqk3LI.js";import"./Input-DaDcKDBm.js";import"./usePress-CHP3pRkH.js";import"./useFormValidation-CAwH-_ip.js";import"./useControlledState-hBcxnaS2.js";import"./FocusScope-DaLeJatZ.js";import"./useCollator-CUuaB6UV.js";import"./useFormReset-Cb31B_gj.js";import"./useEvent-BnAk5cqF.js";import"./useSpinButton-BIHwHCEi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-v5odC7NW.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
