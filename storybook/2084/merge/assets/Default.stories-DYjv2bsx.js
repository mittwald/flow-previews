import{j as r}from"./iframe-BdeexEb8.js";import{T as s}from"./TextArea-Xapm14IX.js";import{L as a}from"./Label-B8MQOgYT.js";import{F as h}from"./FieldDescription-D4HQC7nu.js";import{F as g}from"./useFieldComponent-DdJyO0fC.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-Bi16vvWe.js";import"./useLocalizedStringFormatter-BAYb9Fap.js";import"./context-D6yVr_mO.js";import"./index-D-gFJj9O.js";import"./clsx-B-dksMZM.js";import"./index-DrTgVdtP.js";import"./TextField-CqO76lnK.js";import"./utils-BE4tcj7E.js";import"./RSPContexts-BujZOMoI.js";import"./Form-Ck-IBHt9.js";import"./useLabel-_lz56ByA.js";import"./Group-B7cbcAm2.js";import"./useFocusRing-rBTaS5qD.js";import"./useFocus-DOIh0B1Z.js";import"./Input-CoS8ao7l.js";import"./Hidden-CQyoiK8N.js";import"./Label-0GucTR7O.js";import"./Text-C7oFtPVp.js";import"./filterDOMProps-i7L6S0l1.js";import"./useTextField-D8W6t986.js";import"./useFormReset-BENrYz2J.js";import"./useControlledState-lwDPvcY9.js";import"./useFocusable-BJo0-JcZ.js";import"./useFormValidation-wqB4x0T2.js";import"./flowComponent-D9dNYku3.js";import"./ReactAriaControlledValueFix-CxrHijXl.js";import"./Label.module-CUYTf9Jc.js";import"./Text-G8amV_-h.js";import"./browser-CYlNocNO.js";import"./EmulatedBoldText-ZcdE1rVE.js";import"./IconWarning-CtsbdbUA.js";import"./react-children-utilities-jctua2LA.js";import"./ClearPropsContext-C8aFsCZA.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:x("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(h,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},l={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(g,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
