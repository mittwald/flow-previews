import{j as r}from"./iframe-DqAMh1gn.js";import{L as d}from"./Label-CvBjm4aX.js";import{F as u}from"./FieldDescription-BxpfmOYv.js";import{F as T}from"./FieldError-DFC5bA5N.js";import{T as i}from"./TimeField-mDQbAxbY.js";import{L as l}from"./DateInput-B9qAKyGG.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BNeqdfjc.js";import"./index-BXU2S61h.js";import"./index-By9mRA0t.js";import"./useLocalizedStringFormatter-CZ172l8h.js";import"./context-DRhwbml9.js";import"./Label-iT_mUFNC.js";import"./utils-WhkxUCK6.js";import"./Hidden-BzHkL3wJ.js";import"./Text-1p9r91sB.js";import"./browser-CSMWWW9k.js";import"./EmulatedBoldText-CnA8uKsC.js";import"./Text-DmUxfOW-.js";import"./FieldError-Cat2GNj4.js";import"./filterDOMProps-i7L6S0l1.js";import"./InlineAlert-DL5f4hl1.js";import"./AlertIcon-C7t-BIgM.js";import"./IconWarning-BV3xGinn.js";import"./remote-BXLOBgAx.js";import"./useFieldComponent-CgfE5MLg.js";import"./Form-y2x5EeW4.js";import"./useLabel-BKYm2rJO.js";import"./Group-BvOirkga.js";import"./useFocusRing-BN14JWVs.js";import"./useFocus-Cr8fiyXD.js";import"./Input-OeHygm-T.js";import"./usePress-ClkvTl3z.js";import"./useFormValidation-Bmx8yPSj.js";import"./useControlledState-ChPR7hzM.js";import"./FocusScope-azgg1m0B.js";import"./useCollator-DvzaADfo.js";import"./useFormReset-CllrYVFd.js";import"./useEvent-DRkjAlB5.js";import"./useSpinButton-IPTysHGt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-6mb7iAFu.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
