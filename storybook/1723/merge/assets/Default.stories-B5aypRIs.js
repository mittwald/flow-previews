import{j as r}from"./iframe-BpEavT04.js";import{T as s}from"./TextArea-B7mCPKON.js";import{L as a}from"./Label-CiJybHgW.js";import{F as u}from"./FieldDescription-Vq0coIIu.js";import{F as h}from"./FieldError-DY8OUBEl.js";import"./index-k6QiPQ3a.js";import"./TextFieldBase-rHnY8ewp.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-REkcYbgF.js";import"./mergeRefs-BC_BuoXn.js";import"./index-D2hwKXUM.js";import"./useLocalizedStringFormatter-DJSuZDt4.js";import"./context-1jMNVxHt.js";import"./TextField-CoVUwaSO.js";import"./utils-CpHgE-S6.js";import"./FieldError-BmEWAGf_.js";import"./Text-DWLjOUr2.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DJ2svD4f.js";import"./useFocus-BaJLfW1J.js";import"./useLabel-6-vYiz3X.js";import"./Group-DG2VW6yX.js";import"./Hidden-ZJTH-wDD.js";import"./useFocusRing-DmvqpG-I.js";import"./Label-DpfcozJA.js";import"./useTextField-DUt04o8w.js";import"./useFormReset-CovQJR7M.js";import"./useControlledState-Cjeeyz03.js";import"./useFocusable-C6ZTHalD.js";import"./ReactAriaControlledValueFix-BKN3vDTM.js";import"./Text-CcXeyI30.js";import"./browser-DDZLlA7g.js";import"./EmulatedBoldText-CG9Doyve.js";import"./IconWarning-vA6HsYJq.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,X={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:g("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(u,{children:"Starts with ssh-rsa"})]})},c={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},p={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(h,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},m={args:{rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Z=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Resizeable"];export{o as Default,t as Disabled,i as Required,m as Resizeable,l as ShowCharacterCount,c as WithDefaultValue,n as WithFieldDescription,d as WithFieldError,p as WithPlaceholder,Z as __namedExportsOrder,X as default};
