import{j as r}from"./iframe-Bju5tM19.js";import{T as s}from"./TextArea-CeZGn1jj.js";import{L as a}from"./Label-CEBawMgO.js";import{F as h}from"./FieldDescription-BYoVcIgt.js";import{F as g}from"./useFieldComponent-SvMgnfSt.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-BtBqEQ7k.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./context-BCZfssJF.js";import"./index-i9t6c7d2.js";import"./clsx-B-dksMZM.js";import"./index-v7jxlCcy.js";import"./TextField-DqSp9-m6.js";import"./utils-CHaPYnRu.js";import"./RSPContexts-CuZAMKB6.js";import"./Form-CawbhIR_.js";import"./useLabel-DxvdaVYE.js";import"./Group-CMnMCMaj.js";import"./useFocusRing-DQLm4Rj_.js";import"./useFocus-dnpNkUeL.js";import"./Input-Cn0b8SON.js";import"./Hidden-B3KlSyIs.js";import"./Label-C0LDEu9P.js";import"./Text-X0smrbMM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useTextField-BXTJR5Zn.js";import"./useFormReset-CYS5QNbo.js";import"./useControlledState-BiPn7KDX.js";import"./useFocusable-S-EY4exA.js";import"./useFormValidation-Cc6rboKS.js";import"./flowComponent-DMQ923EN.js";import"./ReactAriaControlledValueFix-BPXa8wTf.js";import"./Label.module-CUYTf9Jc.js";import"./Text-Ctwf1INQ.js";import"./browser-5LoYBPX6.js";import"./EmulatedBoldText-DNLnXqQA.js";import"./IconWarning-EseH3oBy.js";import"./react-children-utilities-CV_3FZ2O.js";import"./ClearPropsContext-nVrOsFhk.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:x("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(h,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},l={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(g,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
