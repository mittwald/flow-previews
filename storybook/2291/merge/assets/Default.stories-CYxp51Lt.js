import{j as r}from"./iframe-CGL3Ztd8.js";import{L as d}from"./Label-BdVzzMHl.js";import{F as u}from"./FieldDescription-DTkn5Gpa.js";import{F as T}from"./FieldError-Bg6s6kv2.js";import{T as i}from"./TimeField-Ck4H3RVp.js";import{L as l}from"./DateInput-DjAfn4go.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./index-eHspQkB2.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./context-BN4qQIb1.js";import"./Label-BHYpf9e5.js";import"./utils-BPLHaINM.js";import"./Hidden-CROh8dKk.js";import"./Text-_sa0OuU0.js";import"./browser-Dk-cIrUN.js";import"./EmulatedBoldText-CAg0SlO2.js";import"./Text-BKxs7Hdx.js";import"./FieldError-CZz7QnF8.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-AGSpHO8N.js";import"./AlertIcon-DM1knw9_.js";import"./IconWarning-CMBZCdTm.js";import"./remote-DEzwzibY.js";import"./useFieldComponent-CHIggLRE.js";import"./Form-Ba7VKjcY.js";import"./useLabel-Dh-HsBYa.js";import"./Group-DH03d5g8.js";import"./useFocusRing-BtxSiiWP.js";import"./useFocus-XDda6gbt.js";import"./Input-CtqQGuCR.js";import"./usePress-BpWTOkQr.js";import"./useFormValidation-DhAeSygX.js";import"./useControlledState-DjoZo3jd.js";import"./FocusScope-CzHXyZUV.js";import"./useCollator-COOm3BGU.js";import"./useFormReset-C_UBUwcF.js";import"./useEvent-C3Ld1mH0.js";import"./useSpinButton-DsxLN8wj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-C8nOs7v5.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
