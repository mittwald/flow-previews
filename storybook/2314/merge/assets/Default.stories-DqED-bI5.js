import{j as r}from"./iframe-CtuK0rEJ.js";import{L as d}from"./Label-Cngj9T_J.js";import{F as u}from"./FieldDescription-BqM7i6ko.js";import{F as T}from"./FieldError-BKJxUnBZ.js";import{T as i}from"./TimeField-C8uzCt95.js";import{L as l}from"./DateInput-CAJuaVVF.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsiSvDfm.js";import"./index-DyfnOEiT.js";import"./index-DPf65gvx.js";import"./useLocalizedStringFormatter-C0fwd0wV.js";import"./context-BLHFXQwL.js";import"./Label-BIhxl5Mj.js";import"./utils-C1DNWP44.js";import"./Hidden-lRNITHFC.js";import"./Text-CyAseKfN.js";import"./browser-Up8UMddv.js";import"./EmulatedBoldText-BeUk81Jn.js";import"./Text-DmIZo_mX.js";import"./FieldError-AgjktxA6.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-i0FuOWey.js";import"./AlertIcon-CPMEIwAr.js";import"./IconWarning-BSe4G4Pm.js";import"./remote-DD8nhYq_.js";import"./useFieldComponent-CPjzSNK0.js";import"./Form-8SXxse9a.js";import"./useLabel-DJNpTGh1.js";import"./Group-CRx_nl1e.js";import"./useFocusRing-Dq2x8hiG.js";import"./useFocus-N-Pc0sLJ.js";import"./Input-BchQzUPE.js";import"./usePress-Da2cRPrr.js";import"./FocusScope-Cm3IhtBV.js";import"./useCollator-BzRay_B5.js";import"./useFormReset-C6F9Oqzr.js";import"./useFormValidation-uULaRcd4.js";import"./useEvent-D8j21rfZ.js";import"./useSpinButton-vzdSg9cR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DMt7VUwc.js";import"./useControlledState-Cc_BEFH0.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
