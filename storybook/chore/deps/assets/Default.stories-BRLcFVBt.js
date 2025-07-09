import{j as r}from"./iframe-DdrpCK7O.js";import{T as s}from"./TextArea-gf_-2s9c.js";import{L as a}from"./Label-icuqrMlJ.js";import{F as u}from"./FieldDescription-Bk8ggkBm.js";import{F as h}from"./FieldError-CvYAv6kd.js";import"./TextFieldBase-wU6hYWtu.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B-M9Ok3D.js";import"./mergeRefs-Bbw3w7Zz.js";import"./index-7qYBiH1_.js";import"./useLocalizedStringFormatter-DTJzl0HQ.js";import"./context-BHbmanCt.js";import"./TextField-l3Z8KRyH.js";import"./utils-jbl8fYpp.js";import"./FieldError-ENGkQJvk.js";import"./Text-Diya8EQq.js";import"./filterDOMProps-CrrfCvhk.js";import"./Form-BaMTKeVV.js";import"./useFocus-DysN_qPg.js";import"./useLabel-BGrVe235.js";import"./Input-BQD-OzUK.js";import"./Hidden-YoIeoCE-.js";import"./useFocusRing-BnOgNpG6.js";import"./Label-q6ExZamY.js";import"./useTextField-UqnMDVeR.js";import"./useFormReset-CJ-aoIOb.js";import"./useControlledState-N3OdDP8Q.js";import"./useFocusable-CpPH01B7.js";import"./ReactAriaControlledValueFix-DfJe_EDn.js";import"./Text-CaSL42bb.js";import"./browser-CJKA82in.js";import"./EmulatedBoldText-BlAgkMNP.js";import"./IconWarning-lf4U_i6L.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Q={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:g("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(u,{children:"Starts with ssh-rsa"})]})},c={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},p={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(h,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},m={args:{rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...m.parameters?.docs?.source}}};const X=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Resizeable"];export{o as Default,t as Disabled,i as Required,m as Resizeable,l as ShowCharacterCount,c as WithDefaultValue,n as WithFieldDescription,d as WithFieldError,p as WithPlaceholder,X as __namedExportsOrder,Q as default};
