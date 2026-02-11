import{j as r}from"./iframe-Cq8OhOqi.js";import{L as d}from"./Label-D-4zWGkt.js";import{F as u}from"./FieldDescription-CU8MDP5d.js";import{F as T}from"./FieldError-2IpGOPbh.js";import{T as i}from"./TimeField-BymAadmf.js";import{L as l}from"./DateInput-CkIWqF73.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./index-CtMt1etx.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./context-EUTE_30t.js";import"./Label-BIWw7tEO.js";import"./utils-Bubk6yJw.js";import"./Hidden-BxQeKZxe.js";import"./Text-CeV8P7pg.js";import"./browser-D1jWek88.js";import"./EmulatedBoldText-CaDCAcie.js";import"./Text-BrptySpj.js";import"./FieldError-BGnsbaLE.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-aZpP8wGh.js";import"./AlertIcon-4JwX6npd.js";import"./IconWarning-D6WB6H32.js";import"./remote-D-3bgxwF.js";import"./useFieldComponent-BYb5VnRy.js";import"./Form-B1CYZolU.js";import"./useLabel-Ddb4-Ews.js";import"./Group-CJEr304M.js";import"./useFocusRing-C66f8wZh.js";import"./useFocus-hSjeZcP9.js";import"./Input-DDTw6Vbr.js";import"./usePress-ChoIOqc4.js";import"./FocusScope-B5Hy3UxH.js";import"./useCollator-BMatrljN.js";import"./useFormReset-B4zM24P8.js";import"./useFormValidation-DYnqTuxD.js";import"./useEvent-BLNYXLIo.js";import"./useSpinButton-CAJl68ds.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Br2nHeU-.js";import"./useControlledState-DRmDoHXV.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
