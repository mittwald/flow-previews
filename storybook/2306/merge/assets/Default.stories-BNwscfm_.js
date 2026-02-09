import{j as r}from"./iframe-BwTc9KkQ.js";import{L as d}from"./Label-BbbV6hPu.js";import{F as u}from"./FieldDescription-B41gpymH.js";import{F as T}from"./FieldError-BhKB-hqh.js";import{T as i}from"./TimeField-DnxFAWWn.js";import{L as l}from"./DateInput-DFWGLzO-.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CVbdUxz2.js";import"./index-CGQkNtsL.js";import"./index-C6-tpPRF.js";import"./useLocalizedStringFormatter-INCxkZRf.js";import"./context-BwyA9HG-.js";import"./Label-123M7w93.js";import"./utils-CBQcEIVx.js";import"./Hidden-DzSpzd_A.js";import"./Text-Gc4XBNKO.js";import"./browser-vKZ8hCbx.js";import"./EmulatedBoldText-nz1iuJug.js";import"./Text-DngMYAZH.js";import"./FieldError-B40__s1G.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-tZCm05zF.js";import"./AlertIcon-B9dP4NVD.js";import"./IconWarning-CuEgZ9GS.js";import"./remote-B0txjFXx.js";import"./useFieldComponent-D1bp3yFp.js";import"./Form-CXxVDbS0.js";import"./useLabel-BSSuBv8C.js";import"./Group-BaqfBrUe.js";import"./useFocusRing-DolIE8eq.js";import"./useFocus-BpPHYutm.js";import"./Input-C8bkJupR.js";import"./usePress-CJeMKVhz.js";import"./useFormValidation-BAeTIVc2.js";import"./useControlledState-DJoARPq6.js";import"./FocusScope-D13mvD2r.js";import"./useCollator-D6rhmeJa.js";import"./useFormReset-38634gnl.js";import"./useEvent-DNrOKzwb.js";import"./useSpinButton-AAIjW0Fe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-H4tTmUqw.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
