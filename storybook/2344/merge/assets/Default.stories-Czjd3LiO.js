import{j as r}from"./iframe-BoiTaxGN.js";import{L as d}from"./Label-DgN2b341.js";import{F as u}from"./FieldDescription-Dh4VnfJe.js";import{F as T}from"./FieldError-DjT7Sc36.js";import{T as i}from"./TimeField-pM6p1nqv.js";import{L as l}from"./DateInput-BepQkRkg.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-5SfKf5nB.js";import"./index-CnTFVdv3.js";import"./index-B9o0n-vC.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./context-hlBZKj-7.js";import"./Label-eoW__4rU.js";import"./utils-RetFhwyR.js";import"./Hidden-BZRUsILE.js";import"./Text-ClfpXeTF.js";import"./browser-zBSS86_h.js";import"./EmulatedBoldText-vFeun45o.js";import"./Text-DnUg5-aR.js";import"./FieldError-C1wD6V1t.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-aAUEFisb.js";import"./AlertIcon-B1VBridV.js";import"./IconWarning-DctWBCm0.js";import"./remote-C4jG3DXh.js";import"./useFieldComponent-DiiGd8t3.js";import"./Form-BMda5et4.js";import"./useLabel-B8QgbILE.js";import"./Group-bhKD4yJJ.js";import"./useFocusRing-VutGkHGx.js";import"./useFocus-BSOUAoQt.js";import"./Input-CHjKW2hG.js";import"./usePress-DoLCzapA.js";import"./FocusScope-p908I3Or.js";import"./useCollator-CCHmo4fs.js";import"./useFormReset-DsmV2EC6.js";import"./useFormValidation-CX6eZKbg.js";import"./useEvent-CSRhnpf0.js";import"./useSpinButton-CjFGANGT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-c-GPklGG.js";import"./useControlledState-DJPWuI7p.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
