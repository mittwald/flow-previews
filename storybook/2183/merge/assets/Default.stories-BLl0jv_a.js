import{j as r}from"./iframe-BXRQqxRF.js";import{L as d}from"./Label-Dw-KVlkl.js";import{F as u}from"./FieldDescription-ClR02c0z.js";import{F as T}from"./FieldError-B377POAw.js";import{T as i}from"./TimeField-Cqqvbjdj.js";import{K as l}from"./DateInput-BCn9NVYh.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-5zToaHXd.js";import"./index-BTygn0L6.js";import"./index-L-QBIyGf.js";import"./useLocalizedStringFormatter-C8dyVGX6.js";import"./context-Cfx64TkI.js";import"./Label-x3iOqkWL.js";import"./utils-W_wb_I6t.js";import"./Hidden-CXQdbF07.js";import"./Text-KdIVkcjD.js";import"./browser-JidmR7ov.js";import"./EmulatedBoldText-DAyJKQWP.js";import"./Text-gjZ6zRux.js";import"./FieldError-Cw_rtSeq.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconChevronDown-CrvlnwL_.js";import"./remote-B9tgrHbM.js";import"./IconDanger-B1opIkZE.js";import"./useFieldComponent-y0XT-9Ew.js";import"./Form-k8rVjsdW.js";import"./useLabel-DwfjYi-F.js";import"./Group-C8fsqvgi.js";import"./useFocusRing-mlfcq67k.js";import"./useFocus-BYFFuSzP.js";import"./Input-COh9rz8g.js";import"./usePress-DljSeqhE.js";import"./useFormValidation-tPOMEO92.js";import"./useControlledState-DF5Prxi4.js";import"./FocusScope-CDou2-z6.js";import"./useCollator-CBeXlDOU.js";import"./useFormReset-BZsjU1hv.js";import"./useEvent-D_VKrqjP.js";import"./useSpinButton-CpO6HIfL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-n9kODX6T.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const mr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,mr as __namedExportsOrder,tr as default};
