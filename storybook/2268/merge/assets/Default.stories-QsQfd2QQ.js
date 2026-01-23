import{j as r}from"./iframe-iY_Mn_oy.js";import{L as d}from"./Label-3EuxSz5j.js";import{F as u}from"./FieldDescription-DHPoAUPt.js";import{F as T}from"./FieldError-rrdHjYdT.js";import{T as i}from"./TimeField-KCItRc25.js";import{L as l}from"./DateInput-Dfdh48_p.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./index-IKthRYIx.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./context-DIbVk5_z.js";import"./Label-DWRUfm9N.js";import"./utils-C-pMCGM-.js";import"./Hidden-BMoxskLs.js";import"./Text-C2ZCo6gl.js";import"./browser-DK9hE6UN.js";import"./EmulatedBoldText-CHIJjbeg.js";import"./Text-CktBEW1F.js";import"./FieldError-BP_EVNQV.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-BLXtcQ-I.js";import"./AlertIcon-Dw605mNU.js";import"./IconWarning-B803z1sh.js";import"./remote-CIrN4__o.js";import"./useFieldComponent-Cxjop7r-.js";import"./Form-2TpMp3Y3.js";import"./useLabel-8EVB-03H.js";import"./Group-CDmjKrYo.js";import"./useFocusRing-BNNZSKMh.js";import"./useFocus-Nxno6ZgW.js";import"./Input-B3denzrL.js";import"./usePress-B5dXj1sU.js";import"./useFormValidation-B6OmY3vR.js";import"./useControlledState-DUH-ni6I.js";import"./FocusScope-Crvk_gLu.js";import"./useCollator-Daexx-65.js";import"./useFormReset-DJj-QXR5.js";import"./useEvent-BHEixncs.js";import"./useSpinButton-CL7ZiCar.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Jbj4hJRH.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
