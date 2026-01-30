import{j as r}from"./iframe-BIoFjWpr.js";import{L as d}from"./Label-D-wfWBos.js";import{F as u}from"./FieldDescription-CmT-44YL.js";import{F as T}from"./FieldError-CY5Rdgwt.js";import{T as i}from"./TimeField-D90lxRFS.js";import{L as l}from"./DateInput-BimKFVad.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-scX312by.js";import"./index-BNUHznNp.js";import"./index-h2cI_GQ2.js";import"./useLocalizedStringFormatter-BdL-N6vb.js";import"./context-CeBhVpDW.js";import"./Label-CY_Zdhv-.js";import"./utils-DZ7CVsEQ.js";import"./Hidden-JTKX8Fqm.js";import"./Text-Dw86EjFX.js";import"./browser-BAGCYS_p.js";import"./EmulatedBoldText-Cp_-MpAq.js";import"./Text-DporVAh2.js";import"./FieldError-3U-LgGLS.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CqfZMgA0.js";import"./AlertIcon-CufExgwJ.js";import"./IconWarning-EC1k16Yv.js";import"./remote-CdlQwHLV.js";import"./useFieldComponent-DpF862rt.js";import"./Form-BlXCmAsm.js";import"./useLabel-CIJOcLbZ.js";import"./Group-kc9AGw0Y.js";import"./useFocusRing-C05eNqGk.js";import"./useFocus-CQPopARV.js";import"./Input-D2aCw11E.js";import"./usePress-Uox4pFjd.js";import"./useFormValidation-5Xewoqko.js";import"./useControlledState-A9PECuda.js";import"./FocusScope-DZU3T--c.js";import"./useCollator-2eiQlCLN.js";import"./useFormReset-DTiYdK4X.js";import"./useEvent-GmwJ1EXB.js";import"./useSpinButton-rkm33NVD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DCR2CGO3.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
