import{j as r}from"./iframe-l1bkuF5f.js";import{L as d}from"./Label-DX1aPacI.js";import{F as u}from"./FieldDescription-D6vtnelM.js";import{F as T}from"./FieldError-mREW9pPY.js";import{T as i}from"./TimeField-mlPEPpK_.js";import{L as l}from"./DateInput-D_p-EiTO.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./index-BcUcgGWs.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./context-C-s-FPG6.js";import"./Label-tW_cqKCA.js";import"./utils-DCQYs-TM.js";import"./Hidden-xK_5A_TS.js";import"./Text-BKhP8tr9.js";import"./browser-BVqvvpC_.js";import"./EmulatedBoldText-Cmh7SSTW.js";import"./Text-CmGzUVny.js";import"./FieldError-DlCb0goX.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Ck8xqn1I.js";import"./AlertIcon-DudqDlux.js";import"./IconWarning-rcKmWr_e.js";import"./remote-DAiDHcEq.js";import"./useFieldComponent-C26zWsIy.js";import"./Form-C3oxrYxL.js";import"./useLabel-Dw5Dmo8O.js";import"./Group-DMPrUoj7.js";import"./useFocusRing-DvEP7g7r.js";import"./useFocus-jq5Lg4Og.js";import"./Input-DWCi9_rf.js";import"./usePress-CEqZlFux.js";import"./useFormValidation-CUmRTDZB.js";import"./useControlledState-BZaI1cg9.js";import"./FocusScope-CXOryEg0.js";import"./useCollator-Cf6z8j_R.js";import"./useFormReset-B-5bGtDV.js";import"./useEvent-F8xm2saN.js";import"./useSpinButton-DbGgXPfO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-oC6DuE5_.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
