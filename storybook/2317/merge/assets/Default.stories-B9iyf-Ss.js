import{j as r}from"./iframe-Czt-X4mt.js";import{L as d}from"./Label-DRlzXm2g.js";import{F as u}from"./FieldDescription-tPhd2u2b.js";import{F as T}from"./FieldError-BFQHJf6J.js";import{T as i}from"./TimeField-BKYnG2MF.js";import{L as l}from"./DateInput-BT6uziZg.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BEE6NzIR.js";import"./index-BvfwTKjZ.js";import"./index-Dtw36EGp.js";import"./useLocalizedStringFormatter-BDxrzy3H.js";import"./context-BsnVI305.js";import"./Label-Ddc2_N7O.js";import"./utils-CU6JriEK.js";import"./Hidden-B_4G05gn.js";import"./Text-8ynHQhOY.js";import"./browser-CPd8oh-y.js";import"./EmulatedBoldText-DRvUUCjd.js";import"./Text-t3MR2mNG.js";import"./FieldError-8b6ruGQE.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BfffkCAs.js";import"./AlertIcon-DBLlr2Uy.js";import"./IconWarning-CEtgECHE.js";import"./remote-hRcAmPck.js";import"./useFieldComponent-CjTkiSgD.js";import"./Form-BeS1FfjY.js";import"./useLabel-BR4TCRo_.js";import"./Group-eiH9vP6f.js";import"./useFocusRing-DDb3Exp8.js";import"./useFocus-En_BVabG.js";import"./Input-BropXuGq.js";import"./usePress-DEVH16Jn.js";import"./FocusScope-DGuUwoy_.js";import"./useCollator-SMtHYG8Q.js";import"./useFormReset-5KG7Gyo5.js";import"./useFormValidation-DyL1ZPxG.js";import"./useEvent-DNkkjmy4.js";import"./useSpinButton-DhobIAeR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-QREm-QM5.js";import"./useControlledState-DhgMObTD.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
