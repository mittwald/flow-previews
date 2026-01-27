import{j as r}from"./iframe-BbrP11p-.js";import{L as d}from"./Label-DwqHoWx5.js";import{F as u}from"./FieldDescription-BZIDgIPl.js";import{F as T}from"./FieldError-i_FUROXt.js";import{T as i}from"./TimeField-ZkRe3wCL.js";import{L as l}from"./DateInput-BwmgVeOd.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bjf10jjx.js";import"./index-l4GzuhKJ.js";import"./index-CvmJvI2t.js";import"./useLocalizedStringFormatter-au7M1iG_.js";import"./context-Cg0av1qu.js";import"./Label-C8vxG_o1.js";import"./utils-CfXF9mMB.js";import"./Hidden-6YtfGJCG.js";import"./Text-BLzGfhm5.js";import"./browser-CKsvW9Gw.js";import"./EmulatedBoldText-j9VeSllR.js";import"./Text-BmgQOLJ4.js";import"./FieldError-C0mMT85u.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-7tARt4Et.js";import"./AlertIcon-B3ByzjK4.js";import"./IconWarning-BeRGE0lU.js";import"./remote-BUE50-N_.js";import"./useFieldComponent-CnZp8uAU.js";import"./Form-Da-PMQ7G.js";import"./useLabel-ChwTXcaC.js";import"./Group-CeCxvCTb.js";import"./useFocusRing-D-e5pHmS.js";import"./useFocus-DdYA68cd.js";import"./Input-CrFs98bJ.js";import"./usePress-VHqnVNy0.js";import"./useFormValidation-dfDtwXtG.js";import"./useControlledState-CrzzGVbO.js";import"./FocusScope-DtyxLM97.js";import"./useCollator-BxU86O8r.js";import"./useFormReset-VtyCL_TW.js";import"./useEvent-eSZL9DrQ.js";import"./useSpinButton-B3XQssuC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-4QZ1d7_F.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
