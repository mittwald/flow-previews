import{j as r}from"./iframe-DITmTDde.js";import{L as d}from"./Label-DcnJ5Vhi.js";import{F as u}from"./FieldDescription-BGaJf4ya.js";import{F as T}from"./FieldError-CBw2sGOe.js";import{T as i}from"./TimeField-DgifBIzM.js";import{L as l}from"./DateInput-o6ikbo20.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BIGGpSqP.js";import"./index-m2QHiCbK.js";import"./index-oEm39XqO.js";import"./useLocalizedStringFormatter-IPLp48A-.js";import"./context-CEC4U_pc.js";import"./Label-DJaUceky.js";import"./utils-C40myb20.js";import"./Hidden-8YgQRG2G.js";import"./Text-B4ALgTL8.js";import"./browser-wgtkTybB.js";import"./EmulatedBoldText-CTBn_63u.js";import"./Text-rw4H23NJ.js";import"./FieldError-B8qSKLtD.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-FbTim4wC.js";import"./remote-BYAMMrVX.js";import"./useFieldComponent-CR_sI6nz.js";import"./Form-C6LPNxyn.js";import"./useLabel-DZbkZQ01.js";import"./Group-BcWNK89K.js";import"./useFocusRing-DXc99t-B.js";import"./useFocus-DrnrNdFb.js";import"./Input-tNtxpliI.js";import"./usePress-Cwz_fpS2.js";import"./useFormValidation-gmIFw0Kx.js";import"./useControlledState-D6UlgZp0.js";import"./FocusScope-zqNAAOXF.js";import"./useCollator-CsbGxztB.js";import"./useFormReset-vbhoemIT.js";import"./useEvent-CgJsVtlm.js";import"./useSpinButton-CoagFp8N.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Dhc8yZq1.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
