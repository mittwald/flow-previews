import{j as r}from"./iframe-DdrpCK7O.js";import{L as d}from"./Label-icuqrMlJ.js";import{F as u}from"./FieldDescription-Bk8ggkBm.js";import{F as T}from"./FieldError-CvYAv6kd.js";import{T as i}from"./TimeField-BYldISkl.js";import{L as l}from"./DateField-pq8t7jXu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B-M9Ok3D.js";import"./mergeRefs-Bbw3w7Zz.js";import"./index-7qYBiH1_.js";import"./useLocalizedStringFormatter-DTJzl0HQ.js";import"./context-BHbmanCt.js";import"./Label-q6ExZamY.js";import"./utils-jbl8fYpp.js";import"./Hidden-YoIeoCE-.js";import"./Text-CaSL42bb.js";import"./browser-CJKA82in.js";import"./EmulatedBoldText-BlAgkMNP.js";import"./Text-Diya8EQq.js";import"./IconWarning-lf4U_i6L.js";import"./FieldError-ENGkQJvk.js";import"./filterDOMProps-CrrfCvhk.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BaMTKeVV.js";import"./useFocus-DysN_qPg.js";import"./useLabel-BGrVe235.js";import"./Group-7fH98enb.js";import"./useFocusRing-BnOgNpG6.js";import"./Input-BQD-OzUK.js";import"./usePress-wge_TV6C.js";import"./FocusScope-DAuqHH8A.js";import"./useCollator-uOsZKEYD.js";import"./useFormReset-CJ-aoIOb.js";import"./useEvent-Bo6FRXFm.js";import"./useSpinButton-BZTtxx4x.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BdjTZ2K5.js";import"./useControlledState-N3OdDP8Q.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const ir=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,ir as __namedExportsOrder,er as default};
