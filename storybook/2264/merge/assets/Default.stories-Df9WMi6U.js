import{j as r}from"./iframe-HHIIuBER.js";import{L as d}from"./Label-CBXKH6Tn.js";import{F as u}from"./FieldDescription-CXq0EMj9.js";import{F as T}from"./FieldError-Fy3l3DO0.js";import{T as i}from"./TimeField-gNgr50Db.js";import{L as l}from"./DateInput-BT6cJR7S.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./index-CXDCOpiF.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./context-BwOS-W-N.js";import"./Label-DYUVUuL-.js";import"./utils-Cg0Q0SJj.js";import"./Hidden-B0PUXGbF.js";import"./Text-1gTdtZLR.js";import"./browser-BiwdkBmz.js";import"./EmulatedBoldText-DygQZkyN.js";import"./Text-XNblTka2.js";import"./FieldError-DxbTuNm9.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DlszfG1H.js";import"./AlertIcon-CK1OfGfa.js";import"./IconWarning-CPuUEZGY.js";import"./remote-MyOm1NIW.js";import"./useFieldComponent-DUw61_cc.js";import"./Form-bxdneiGL.js";import"./useLabel-5SH0-wGx.js";import"./Group-CQTHjQwH.js";import"./useFocusRing-4HIuR3kq.js";import"./useFocus--KWf2FGc.js";import"./Input-BPv4G1er.js";import"./usePress-DR7SsbUT.js";import"./useFormValidation-CzNeWdfJ.js";import"./useControlledState-DbjjrDzt.js";import"./FocusScope-BRQqWTqz.js";import"./useCollator-h0FVZg7K.js";import"./useFormReset-9uO05BU2.js";import"./useEvent-Btkolbn2.js";import"./useSpinButton-B8cKwDgw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CXjpP1hG.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
