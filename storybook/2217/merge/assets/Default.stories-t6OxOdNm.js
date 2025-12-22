import{j as r}from"./iframe-Du65Ph_c.js";import{L as d}from"./Label-BClS0qAd.js";import{F as u}from"./FieldDescription-PWJKvGgj.js";import{F as T}from"./FieldError-VBXyMAIR.js";import{T as i}from"./TimeField-C2PBzAMy.js";import{L as l}from"./DateInput-CigrE3xA.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CYbHZhXg.js";import"./index-XI88kJrR.js";import"./index-c0t27COx.js";import"./useLocalizedStringFormatter-Dhvhyrh1.js";import"./context-BMDcuGwa.js";import"./Label-D_GXaE34.js";import"./utils-xIJEb5Gc.js";import"./Hidden-BV9iY75y.js";import"./Text-CtX5enn3.js";import"./browser-57tL9X_d.js";import"./EmulatedBoldText-CITvecLd.js";import"./Text-Cl831mKA.js";import"./FieldError-cRzcLKxU.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CGSd0Gik.js";import"./remote-D3fYDNUY.js";import"./useFieldComponent-XbdbUfvB.js";import"./Form-CLANTGFM.js";import"./useLabel-BdNff0XI.js";import"./Group-Bc65Crwm.js";import"./useFocusRing-B7cLewIC.js";import"./useFocus-mAbeDdRN.js";import"./Input-CyqTlZ7V.js";import"./usePress-CyOin5iy.js";import"./useFormValidation-DAWFGl74.js";import"./useControlledState-Cdt3oZ6_.js";import"./FocusScope-DUOtKQcD.js";import"./useCollator-DYYkh59M.js";import"./useFormReset-D830YkJ7.js";import"./useEvent-D0wfQKUV.js";import"./useSpinButton-D8-wAmzo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DXAwXXny.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const tr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,tr as __namedExportsOrder,ar as default};
