import{j as r}from"./iframe-BrcQhcwR.js";import{L as d}from"./Label-eB0oKMGS.js";import{F as u}from"./FieldDescription-8e-MGFTK.js";import{F as T}from"./FieldError-D24voWaJ.js";import{T as i}from"./TimeField-GtVEXQPN.js";import{L as l}from"./DateInput-4zuZJhDP.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./index-CSUT2NCR.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./context-DOSLHoOx.js";import"./Label-ChTBNZrK.js";import"./utils-DM5Jp8EX.js";import"./Hidden-D0_rVqY-.js";import"./Text-PyhJCmvh.js";import"./browser-BdJDgoMU.js";import"./EmulatedBoldText-Bbt3btdp.js";import"./Text-CzkXk5bL.js";import"./FieldError-BZvulriJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BAa8Yse9.js";import"./AlertIcon-CzBRtVHG.js";import"./IconWarning-MWZFtagw.js";import"./remote-BHShYJ5P.js";import"./useFieldComponent-CsbQ-7mY.js";import"./Form-DI5rGqIO.js";import"./useLabel-0hwKkY3Z.js";import"./Group-kTgIroHk.js";import"./useFocusRing-DEM6_VkF.js";import"./useFocus-BKws8v7-.js";import"./Input-CFsccwbB.js";import"./usePress-BBaWFJWg.js";import"./useFormValidation-CstoYpvO.js";import"./useControlledState-DsUZezc6.js";import"./FocusScope-CxLgpb_M.js";import"./useCollator-DSAWxNmx.js";import"./useFormReset-BHDJFB5Q.js";import"./useEvent-D8AEfF0F.js";import"./useSpinButton-CHBf_kEf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-D5-HZ-jd.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
