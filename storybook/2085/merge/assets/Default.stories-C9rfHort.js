import{j as r}from"./iframe-CCgutS5t.js";import{T as s}from"./TextArea-DFWCgvW-.js";import{L as a}from"./Label-CNIOR_Eh.js";import{F as h}from"./FieldDescription-BMzB73VC.js";import{F as g}from"./useFieldComponent-B36i382k.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-Ooz-Umfd.js";import"./useLocalizedStringFormatter-BjHcrzpH.js";import"./context-3TjxBBiZ.js";import"./index-h_ilVZmN.js";import"./clsx-B-dksMZM.js";import"./index-Bp2d_id4.js";import"./TextField-DQbAWnp4.js";import"./utils-N6USVjPQ.js";import"./RSPContexts-D8ixlOLf.js";import"./Form-DylZ4hmS.js";import"./useLabel-C2LzTSEt.js";import"./Group-nu6L2uF2.js";import"./useFocusRing-DetKeZ0w.js";import"./useFocus-qWLnYmls.js";import"./Input-zWUUR8ko.js";import"./Hidden-BtuehT5t.js";import"./Label-B2_Qc07C.js";import"./Text-DSftVrdI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useTextField-Dj-O8CqK.js";import"./useFormReset-C2ixUAq4.js";import"./useControlledState-C-pLTCEb.js";import"./useFocusable-C1wexJX5.js";import"./useFormValidation-DXrwvkVu.js";import"./flowComponent-C78Jb5L6.js";import"./ReactAriaControlledValueFix-B6glQD59.js";import"./Label.module-CUYTf9Jc.js";import"./Text-C-3mWHEt.js";import"./browser-Cx9TdPw4.js";import"./EmulatedBoldText-BfzgnQm3.js";import"./IconWarning-BIjPfZ_7.js";import"./react-children-utilities-DK8cwA_F.js";import"./ClearPropsContext-CZ_w58Ag.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:x("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(h,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},l={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(g,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};const ar=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Resizeable"];export{o as Default,t as Disabled,i as ReadOnly,n as Required,u as Resizeable,m as ShowCharacterCount,p as WithDefaultValue,c as WithFieldDescription,l as WithFieldError,d as WithPlaceholder,ar as __namedExportsOrder,sr as default};
