import{j as r}from"./iframe-D_6zdLny.js";import{T as s}from"./TextArea-B4SFXaFs.js";import{L as a}from"./Label-DYStaM4r.js";import{F as h}from"./FieldDescription-BmjEGOaL.js";import{F as g}from"./FieldError-ojCue57q.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-D8-P3sbI.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./index-CT6ZSgMj.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./context-BMSZp_sq.js";import"./TextField-DJdiP2AD.js";import"./utils-PQD-Pczy.js";import"./FieldError-DAmKGBgj.js";import"./Text-YMXmaajA.js";import"./filterDOMProps-i7L6S0l1.js";import"./RSPContexts-0i8aci_3.js";import"./Form-BEwxiqG9.js";import"./useLabel-BujF7oZS.js";import"./Group-DD12aKc0.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocus-D07R-Di8.js";import"./Input-DeyWgLjK.js";import"./Hidden-BN9nl5w0.js";import"./Label-iDSBX_9z.js";import"./useTextField-CgNiWdPW.js";import"./useFormReset-jO9kfZl0.js";import"./useControlledState-G8Ia7XKM.js";import"./useFocusable-pGYT2QRf.js";import"./useFormValidation-B8Bdwi3p.js";import"./ReactAriaControlledValueFix-CrUxtzb_.js";import"./Text-BucMQu3s.js";import"./browser-D7xr6uHh.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./IconWarning-L8yPVfI5.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:x("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(h,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},l={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(g,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const sr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Resizeable"];export{o as Default,t as Disabled,i as ReadOnly,n as Required,u as Resizeable,m as ShowCharacterCount,p as WithDefaultValue,c as WithFieldDescription,l as WithFieldError,d as WithPlaceholder,sr as __namedExportsOrder,er as default};
