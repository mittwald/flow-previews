import{j as r}from"./iframe-DjKJp4LH.js";import{L as d}from"./Label-CIoe3s2x.js";import{F as u}from"./FieldDescription-B7UVP7RU.js";import{F as T}from"./FieldError-DkeOn6Iq.js";import{T as i}from"./TimeField-DsIeyUqq.js";import{L as l}from"./DateInput-C-ic_vXw.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6qVG3rB.js";import"./index-DwtlgCJu.js";import"./index-PXjpOTa6.js";import"./useLocalizedStringFormatter-Dnneor8b.js";import"./context-CaWPG6rd.js";import"./Label-7z6Dpe4l.js";import"./utils-DyC1AhIW.js";import"./Hidden-Cj7p_Cun.js";import"./Text-DIX_PQ8a.js";import"./browser-DP-AFXYC.js";import"./EmulatedBoldText-CMQt-Xk-.js";import"./Text-DDR-J2dK.js";import"./FieldError-CRskrSrV.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-B4kskhvn.js";import"./AlertIcon-DJ6AhYBh.js";import"./IconWarning-6PZXNPQv.js";import"./remote-X6dXUxim.js";import"./useFieldComponent-7yFtRUym.js";import"./Form-DzoAzIf2.js";import"./useLabel--MzsjFNv.js";import"./Group-BBLSi45B.js";import"./useFocusRing-BGVhnkul.js";import"./useFocus-DfQL19Qh.js";import"./Input-CKW8JUfL.js";import"./usePress-Cba7eTZL.js";import"./useFormValidation-D-rCh5i6.js";import"./useControlledState-B7AKSDvs.js";import"./FocusScope-5Nl-wNMA.js";import"./useCollator-C3dV1__C.js";import"./useFormReset-BtBZQ9D7.js";import"./useEvent-D3fHv2-i.js";import"./useSpinButton-gTc4UJlm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DYJPcSlp.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
