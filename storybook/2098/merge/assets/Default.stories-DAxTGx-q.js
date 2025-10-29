import{j as r}from"./iframe-B8r8XrPb.js";import{L as d}from"./Label-PmVCxAho.js";import{F as u}from"./FieldDescription-B6QY2e39.js";import{F as T}from"./FieldError-Cr-OeICt.js";import{T as i}from"./TimeField-0VYIVJYo.js";import{M as l}from"./DateField-K9a-JU82.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CWjpVcP-.js";import"./index-CVBgNbzf.js";import"./index-ChMccDi0.js";import"./useLocalizedStringFormatter-B1bOogGx.js";import"./context-d7knuPTA.js";import"./Label-DhvUjtv7.js";import"./utils-B2sHMxfy.js";import"./Hidden-C0uurl-T.js";import"./Text-CxxNxEUo.js";import"./browser-5JWtNQpe.js";import"./EmulatedBoldText-DH8-rljC.js";import"./Text-DsIbOJYe.js";import"./useFieldComponent-DByhNd_z.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-BX2g1WFh.js";import"./IconWarning-BnpSGPSL.js";import"./useMakeFocusable-DmR7nfCv.js";import"./Form-C0W2Agsa.js";import"./useLabel-Bn_yI2FK.js";import"./Group-DkjxT4kZ.js";import"./useFocusRing-DGaivw0f.js";import"./useFocus-Co_XlsN_.js";import"./Input-Cyh52Hgt.js";import"./usePress-BPC_OlSs.js";import"./useFormValidation-DuuScCCl.js";import"./useControlledState-Dhb_P5xS.js";import"./FocusScope-DHLNAyY7.js";import"./useCollator-CG3LD3jQ.js";import"./useFormReset-Cpg0SQow.js";import"./useEvent-BY3XUUFC.js";import"./useSpinButton-xd5u1ryO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CXlM-266.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
