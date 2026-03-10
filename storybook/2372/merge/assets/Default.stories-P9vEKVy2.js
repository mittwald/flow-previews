import{j as r}from"./iframe-C1IdntWq.js";import{L as d}from"./Label-Be-SvMDa.js";import{F as u}from"./FieldDescription-CN54GY3S.js";import{F as T}from"./FieldError-DsJ8c-ZE.js";import{T as i}from"./TimeField-D3KbxOM_.js";import{L as l}from"./DateInput-BuIH1VPV.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bun1s6Mg.js";import"./index-BFORpPeP.js";import"./index-Coy6T-Pa.js";import"./useLocalizedStringFormatter-X4lAHS4Q.js";import"./context-CuxmdylV.js";import"./Label-D03EKzy1.js";import"./utils-CNo0qaX0.js";import"./Hidden-MEHJLAG1.js";import"./Text-W7h8_LNr.js";import"./browser-WXx3m9ky.js";import"./EmulatedBoldText-COIRRGWk.js";import"./Text-CkLpWhuM.js";import"./FieldError-DgBT4dcF.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-LATyc42T.js";import"./AlertIcon-CvmjcNLC.js";import"./IconWarning-BY-3yqWN.js";import"./remote-DdxKfasm.js";import"./useFieldComponent-o_u9PYdj.js";import"./Form-CijQ_R7m.js";import"./useLabel-CAzlzskU.js";import"./Group-DCbRkIJ9.js";import"./useFocusRing-DQuA22ZQ.js";import"./useFocus-HLQCbRtK.js";import"./Input-Des9E_um.js";import"./usePress-BIzz4kJt.js";import"./FocusScope-C2GkFJYp.js";import"./useCollator-BHhXYjcX.js";import"./useFormReset-CaX1fgpZ.js";import"./useFormValidation-CloSy7V5.js";import"./useEvent-C_lXtwpa.js";import"./useSpinButton-BJ4w7gJh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CS6Xb8-j.js";import"./useControlledState-FuYpKfPj.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
