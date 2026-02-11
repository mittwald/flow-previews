import{j as r}from"./iframe-l3dQPg2D.js";import{L as d}from"./Label-DxyvMbSs.js";import{F as u}from"./FieldDescription-DDFYZqNC.js";import{F as T}from"./FieldError-Q6bz3Uf7.js";import{T as i}from"./TimeField-XEtjhtE5.js";import{L as l}from"./DateInput-C3PTrOTJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BopG63Mr.js";import"./index-C4NaKCSa.js";import"./index-BnwDl3XO.js";import"./useLocalizedStringFormatter-DUXcPKxv.js";import"./context-bJyTUMD1.js";import"./Label-zTT8xDTv.js";import"./utils-BpR6PJXM.js";import"./Hidden-D7QtMOwf.js";import"./Text-Cd9ftiQT.js";import"./browser-vgtThTGE.js";import"./EmulatedBoldText-CAbtCiS8.js";import"./Text-CND2PMao.js";import"./FieldError-DNTSOotb.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-D9cFuXo0.js";import"./AlertIcon-C6xXCfYQ.js";import"./IconWarning-C2C4Ye1P.js";import"./remote-VRbYHHBV.js";import"./useFieldComponent-CTh-2D00.js";import"./Form-bbOcDT_r.js";import"./useLabel-Bgm61Ocu.js";import"./Group-D4YQYKb-.js";import"./useFocusRing-Sg4LsORI.js";import"./useFocus-BoIaqFAK.js";import"./Input-AZztYHyS.js";import"./usePress-CLrRc3iw.js";import"./FocusScope-Cs1Wy-O3.js";import"./useCollator-BSc7Uwep.js";import"./useFormReset-mKOiKuYb.js";import"./useFormValidation-D7taYq4g.js";import"./useEvent-D7GEvC9q.js";import"./useSpinButton-Alda79z2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BgCl5mRx.js";import"./useControlledState-DV6ufSFw.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
