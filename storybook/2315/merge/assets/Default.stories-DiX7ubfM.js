import{j as r}from"./iframe-DiUxw81Q.js";import{L as d}from"./Label-DpHnEhHE.js";import{F as u}from"./FieldDescription-CByPgqro.js";import{F as T}from"./FieldError-DH3i7Cba.js";import{T as i}from"./TimeField-Cpdk78pY.js";import{L as l}from"./DateInput-Bp4FGDuq.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Doi79f5D.js";import"./index-DoB8i5PX.js";import"./index-2ROVwQvu.js";import"./useLocalizedStringFormatter-CjhcHHQc.js";import"./context-si8TSn1j.js";import"./Label-Dt69EWuh.js";import"./utils-BhADjK-H.js";import"./Hidden-YWjhfZDI.js";import"./Text-CMit6jNZ.js";import"./browser-DhblGL2Q.js";import"./EmulatedBoldText-WmP9Wm83.js";import"./Text-CUd3ZjBr.js";import"./FieldError-BKME6Hw5.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-3B66Ly-F.js";import"./AlertIcon-C_aBYmlN.js";import"./IconWarning-DJftz4M-.js";import"./remote-dRe2-fx5.js";import"./useFieldComponent-BFiXxBQU.js";import"./Form-kW4DkkVS.js";import"./useLabel-yn1VwYEU.js";import"./Group-DEqw8J9L.js";import"./useFocusRing-BpbrWv_K.js";import"./useFocus-DSwjHrh5.js";import"./Input-lzxTVruz.js";import"./usePress-I-WC2YFt.js";import"./FocusScope-moHWWkwF.js";import"./useCollator-uFjTzBPf.js";import"./useFormReset-Cz-LaBzR.js";import"./useFormValidation-CsqhaN7Y.js";import"./useEvent-D_adZsOG.js";import"./useSpinButton-Dh_2DzSL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DXRQN3H4.js";import"./useControlledState-DDLUXLOw.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
