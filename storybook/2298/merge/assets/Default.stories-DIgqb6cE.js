import{j as r}from"./iframe-C-RKPwSE.js";import{L as d}from"./Label-BZ9U-QOK.js";import{F as u}from"./FieldDescription-B46dqL75.js";import{F as T}from"./FieldError-Bk-w_c0r.js";import{T as i}from"./TimeField-BJ_kY_D_.js";import{L as l}from"./DateInput-BvwyOGce.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-_zksvKqG.js";import"./index-ChFaffKJ.js";import"./index-NcfLMdM4.js";import"./useLocalizedStringFormatter-DtbvJlWC.js";import"./context-CG0zmStT.js";import"./Label-BVYBl4lk.js";import"./utils-BNo7v4Co.js";import"./Hidden-0w5RaPP8.js";import"./Text-DceSOphz.js";import"./browser-BU-qC_3h.js";import"./EmulatedBoldText-CGXBgVzv.js";import"./Text-CWybMa0K.js";import"./FieldError-BbtVOi4H.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-F-sJ7jVx.js";import"./AlertIcon-EwQ99KQC.js";import"./IconWarning-B9kpDIcu.js";import"./remote-Dp4k7gKv.js";import"./useFieldComponent-ILpXs27H.js";import"./Form-BmIWUPX1.js";import"./useLabel-DvGejoW4.js";import"./Group-Dxij56r3.js";import"./useFocusRing-CPvrkvyz.js";import"./useFocus-EK5CVku_.js";import"./Input-Dl0Z7qPf.js";import"./usePress-D8JiKPWZ.js";import"./useFormValidation-BVV7LE3u.js";import"./useControlledState-PGxEdwVp.js";import"./FocusScope-DV38vf4J.js";import"./useCollator-CE95nY3l.js";import"./useFormReset-Bo6mTD_0.js";import"./useEvent-DJpgi1nc.js";import"./useSpinButton-CBrG7cMI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-g-frVTbT.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
