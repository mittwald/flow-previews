import{j as r}from"./iframe-BZLAsPNC.js";import{L as d}from"./Label-DKRPZs6o.js";import{F as u}from"./FieldDescription-Dh69MaGI.js";import{F as T}from"./FieldError-D2O_dT2D.js";import{T as i}from"./TimeField-CmpJ3UFq.js";import{L as l}from"./DateInput-rCqqWB4T.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DRacmL0k.js";import"./index-Cf3UYr17.js";import"./index-CYjhUmDO.js";import"./useLocalizedStringFormatter-DU9ffxga.js";import"./context-B1QKiSyt.js";import"./Label-BJwSQh0g.js";import"./utils-GBJhPEt0.js";import"./Hidden-C94FXqZA.js";import"./Text-oqqebshB.js";import"./browser-D75BLayN.js";import"./EmulatedBoldText-i2HM1out.js";import"./Text-C0MYo1gI.js";import"./FieldError-B9G53mk8.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-DgwQ_4kg.js";import"./AlertIcon-wpFTQr76.js";import"./IconWarning-BRgKnpuG.js";import"./remote-DD9qKW4I.js";import"./useFieldComponent-C5gewvzz.js";import"./Form-CDvikIHs.js";import"./useLabel-DAhF5fA-.js";import"./Group-D7D0OI93.js";import"./useFocusRing-DUiko_nB.js";import"./useFocus-BAbXgSuO.js";import"./Input-av1t-akK.js";import"./usePress-C3AJe8l0.js";import"./useFormValidation-BLPWS9Vb.js";import"./useControlledState-BdOl-nfx.js";import"./FocusScope-BleEWu6g.js";import"./useCollator-CueQXTCK.js";import"./useFormReset-B4usOE4z.js";import"./useEvent-BRYkpDGi.js";import"./useSpinButton-Ciqqq73j.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-I-awHoKP.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
