import{j as r}from"./iframe-DzPnzOIh.js";import{L as d}from"./Label-Caopyz4i.js";import{F as u}from"./FieldDescription-CZk1e185.js";import{F as T}from"./FieldError-CliUFFQL.js";import{T as i}from"./TimeField-C29Rz7UR.js";import{L as l}from"./DateInput-CRVGG3bf.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DtgvO3oD.js";import"./index-DmmYMLHe.js";import"./index-nNa6hI3H.js";import"./useLocalizedStringFormatter-BZ1QP-fV.js";import"./context-D5QDMciq.js";import"./Label-BA4yL5_I.js";import"./utils-DdPADezN.js";import"./Hidden-D_8gXEej.js";import"./Text-CgXXsRbz.js";import"./browser-DO1on-Lg.js";import"./EmulatedBoldText-Dcz9uFEQ.js";import"./Text-CKGruhzq.js";import"./FieldError-BLx5YP6h.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DawifhT6.js";import"./AlertIcon-BAMux0CS.js";import"./IconWarning-Dnclh3SV.js";import"./remote-Df33k4AK.js";import"./useFieldComponent-DttoHSbm.js";import"./Form-iisH2EsU.js";import"./useLabel-DAdMc5BC.js";import"./Group-BGA5trRo.js";import"./useFocusRing-h77ik7V4.js";import"./useFocus-lCD3lNhC.js";import"./Input-CP7U2NGu.js";import"./usePress-COgw0Owx.js";import"./useFormValidation-DrH-jwNK.js";import"./useControlledState-C5NVaprX.js";import"./FocusScope-Cit_E5zj.js";import"./useCollator-BX-7yLTW.js";import"./useFormReset-D5TocNhH.js";import"./useEvent-C5n8Jw-a.js";import"./useSpinButton-WCkPHhL4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Bpe911gT.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
