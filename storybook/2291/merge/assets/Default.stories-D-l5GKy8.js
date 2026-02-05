import{j as r}from"./iframe-BL1IY_6V.js";import{L as d}from"./Label-8Io_X3px.js";import{F as u}from"./FieldDescription-DBr0KSuv.js";import{F as T}from"./FieldError-D0yWaYHs.js";import{T as i}from"./TimeField-ByL0pU8j.js";import{L as l}from"./DateInput-DMwTTCbi.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./index-Cr6jOlTO.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./context-BeO7KH58.js";import"./Label-StE6sPfa.js";import"./utils-GyL2rjZN.js";import"./Hidden-B9Rk5_3H.js";import"./Text-BSlhLkmN.js";import"./browser-DogRo3Wh.js";import"./EmulatedBoldText-UtdvjbkN.js";import"./Text-B4yGITBG.js";import"./FieldError-CCCCRqJ9.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BDrbtAj0.js";import"./AlertIcon-B2R_BHtC.js";import"./IconWarning-BTI7YBWG.js";import"./remote-BuZW91cH.js";import"./useFieldComponent-oZ5IqIdY.js";import"./Form-Ca3ASx7C.js";import"./useLabel-CyH2amP0.js";import"./Group-DzRbvT54.js";import"./useFocusRing-DEMWgzWY.js";import"./useFocus-D7_v9YO6.js";import"./Input-BFv5VDBN.js";import"./usePress-CxRwZ9-L.js";import"./useFormValidation-DCrH4OQY.js";import"./useControlledState-CA6yhcg7.js";import"./FocusScope-B7aMt2fO.js";import"./useCollator-DpBUbIyY.js";import"./useFormReset-C4J5P-lS.js";import"./useEvent-BBSiUFe7.js";import"./useSpinButton-DGFan2pl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-9QmaDZ-E.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
