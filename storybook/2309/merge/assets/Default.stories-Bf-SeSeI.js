import{j as r}from"./iframe-BV_gLY1W.js";import{L as d}from"./Label-DSp9Q3qx.js";import{F as u}from"./FieldDescription-DJEI_ZDJ.js";import{F as T}from"./FieldError-Du2SwoFV.js";import{T as i}from"./TimeField-Bw9zognH.js";import{L as l}from"./DateInput-BH90a4HK.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DjNrJ_Te.js";import"./index-D8dVI0GG.js";import"./index-iDKz2btu.js";import"./useLocalizedStringFormatter-DG58vGXD.js";import"./context-D0kYsfYD.js";import"./Label-TEYoBhWb.js";import"./utils-pcZMLEVF.js";import"./Hidden-DpRhW0r1.js";import"./Text-B1ZcDWdT.js";import"./browser-RRcj6Eel.js";import"./EmulatedBoldText-U0Mbqk2D.js";import"./Text-x_iEgbKh.js";import"./FieldError-Q2svFxIr.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-9lAe-Sfe.js";import"./AlertIcon-CdR_G7Yx.js";import"./IconWarning-BvnX4fSp.js";import"./remote-DzXnO2Bt.js";import"./useFieldComponent-Ciy1vkCA.js";import"./Form-Cc8Ejva8.js";import"./useLabel-BcIwqyBf.js";import"./Group-BmpY48KV.js";import"./useFocusRing-DHBFiW-v.js";import"./useFocus-BhZlDk36.js";import"./Input-tiA0LuFc.js";import"./usePress-Cpaxayx2.js";import"./FocusScope-Cdk-yaL2.js";import"./useCollator-DxbGnjFN.js";import"./useFormReset-Ba41Oqje.js";import"./useFormValidation-Bzs4UsOG.js";import"./useEvent-B4HwFCuu.js";import"./useSpinButton-DM28lal-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-B-qMF1eW.js";import"./useControlledState-D8GCi_t3.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
