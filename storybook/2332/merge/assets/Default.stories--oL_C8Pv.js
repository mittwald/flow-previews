import{j as r}from"./iframe-Bas3a7fO.js";import{L as d}from"./Label-QWyaEZ02.js";import{F as u}from"./FieldDescription-BqudxJ-b.js";import{F as T}from"./FieldError-B_qklWB_.js";import{T as i}from"./TimeField-EzVGh7rI.js";import{L as l}from"./DateInput-DMZ5SMOp.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./index-CuTcGtc9.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./context-C6ovHfpS.js";import"./Label-CAS-GA4h.js";import"./utils-eswKxOcw.js";import"./Hidden-JsWJU2dF.js";import"./Text-D06q46lu.js";import"./browser-CI0OqVn7.js";import"./EmulatedBoldText-DWlWNctj.js";import"./Text-Di9JAG-3.js";import"./FieldError-CYd-7Lc_.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-5S7f5h6L.js";import"./AlertIcon-CfXFBmoz.js";import"./IconWarning-9FMOeqa7.js";import"./remote-CQRN9i7s.js";import"./useFieldComponent-CHbV_zSr.js";import"./Form-C6AVvH4S.js";import"./useLabel-AX-jpDlX.js";import"./Group-CjauqOEv.js";import"./useFocusRing--4ecJhRH.js";import"./useFocus-BpOhXbga.js";import"./Input-CDjrJnAd.js";import"./usePress-BXALpkIT.js";import"./FocusScope-yn2ZelXu.js";import"./useCollator-CKG6FCAG.js";import"./useFormReset-C6M9OYlp.js";import"./useFormValidation-nso2YHkv.js";import"./useEvent-CDJhLR4c.js";import"./useSpinButton-Da_YamV-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CD92q62y.js";import"./useControlledState-DnKF_srQ.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
