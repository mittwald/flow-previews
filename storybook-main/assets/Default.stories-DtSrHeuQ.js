import{j as r}from"./iframe-BJcrhiyS.js";import{T as s}from"./TextArea-BW6UonCL.js";import{L as a}from"./Label-DlBkeFJ8.js";import{F as h}from"./FieldDescription-BPGABGxO.js";import{F as g}from"./useFieldComponent-BTSjCSDH.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-DV0gXnlu.js";import"./useLocalizedStringFormatter-BYGjl_Ur.js";import"./context-C9wRNNkX.js";import"./index-BWslXHRv.js";import"./clsx-B-dksMZM.js";import"./index-Clh-7_IP.js";import"./TextField-XJ38yjmm.js";import"./utils-MMz0RNDK.js";import"./RSPContexts-C2e5xu0T.js";import"./Form--RrJpAdD.js";import"./useLabel-_fpNspWn.js";import"./Group-q2LAtsMk.js";import"./useFocusRing-Cs9uIsYW.js";import"./useFocus-B02RLksg.js";import"./Input-BVWAA476.js";import"./Hidden-BPKHXv4N.js";import"./Label-BomZPPry.js";import"./Text-BpL6_bME.js";import"./filterDOMProps-i7L6S0l1.js";import"./useTextField-CFlBnLNm.js";import"./useFormReset-B4UK9p8r.js";import"./useControlledState-CmFRf9bT.js";import"./useFocusable-o2EAaEwJ.js";import"./useFormValidation-ofRqxeQo.js";import"./flowComponent-CUnmKrjI.js";import"./ReactAriaControlledValueFix-DNuVWwQA.js";import"./Label.module-CUYTf9Jc.js";import"./Text-CzGb6jtw.js";import"./browser-CleZYiuo.js";import"./EmulatedBoldText-BXLeVkdu.js";import"./IconWarning-DHKN92dZ.js";import"./react-children-utilities-DZ5iFmYj.js";import"./ClearPropsContext-Bddw_Fzg.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:x("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(h,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},l={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(g,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
