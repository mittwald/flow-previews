import{j as r}from"./iframe-C_YE0yRE.js";import{L as d}from"./Label-Bg9ChY99.js";import{F as u}from"./FieldDescription-DreGB0lk.js";import{F as T}from"./FieldError-DnihSG5_.js";import{T as i}from"./TimeField-Ce4VkJgJ.js";import{L as l}from"./DateInput-BF5J_N5s.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmGOFz_C.js";import"./index-ChMIoTzt.js";import"./index-C1o6XGyU.js";import"./useLocalizedStringFormatter-D3Mabo4d.js";import"./context-BsGh4Cu8.js";import"./Label-F1_SF2kS.js";import"./utils-DHqPz2V6.js";import"./Hidden-C0GYzrmR.js";import"./Text-DHPE0I2s.js";import"./browser-BLJ3u5oR.js";import"./EmulatedBoldText-CeaRH1vH.js";import"./Text-BXWHLDC_.js";import"./FieldError-C56-tCSc.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CldvHevT.js";import"./AlertIcon-ClTjLU4k.js";import"./IconWarning-Cxe6oNxX.js";import"./remote-C68UFTqR.js";import"./useFieldComponent-CWA258Fl.js";import"./Form-OCRgsrlm.js";import"./useLabel-C_Wx6KRi.js";import"./Group-DxmRDWzX.js";import"./useFocusRing-BwrpFxJK.js";import"./useFocus-CNnZns0Y.js";import"./Input-BXDRgPwO.js";import"./usePress-DNy1k_Tf.js";import"./FocusScope-DmUSx-ox.js";import"./useCollator-Be000Qje.js";import"./useFormReset-CEMPEkJX.js";import"./useFormValidation-CAUZ7uHC.js";import"./useEvent-DLbjVv1l.js";import"./useSpinButton-C26vOmnn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-C4oV5hlm.js";import"./useControlledState-8IU_97yn.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
