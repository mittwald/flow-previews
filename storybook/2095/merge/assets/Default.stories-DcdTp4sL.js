import{j as r}from"./iframe-BvCo0Jms.js";import{T as s}from"./TextArea-Chqx5i1a.js";import{L as a}from"./Label-9SlnZKrY.js";import{F as h}from"./FieldDescription-ThKAVIuf.js";import{F as g}from"./useFieldComponent-h58tn8zy.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-DUjDXXxQ.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./context-EIbK-86q.js";import"./index-DAXCiU9B.js";import"./clsx-B-dksMZM.js";import"./index-DV2r3peR.js";import"./TextField-Cg2_j61p.js";import"./utils-Cw2xzcbV.js";import"./RSPContexts-DqErA_gH.js";import"./Form-DLKKw6GK.js";import"./useLabel-DLhdFYyT.js";import"./Group-CxRviubY.js";import"./useFocusRing-D8FCXLiH.js";import"./useFocus-C5EW73ar.js";import"./Input-DUPogfhm.js";import"./Hidden-Bxmlm1r5.js";import"./Label-DMgJ6fuj.js";import"./Text-BvqGhHlZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useTextField-DZ1FF2T9.js";import"./useFormReset-B8Yq5UFv.js";import"./useControlledState-C0Hm7DMH.js";import"./useFocusable-BxQ2X-GC.js";import"./useFormValidation-DFmu6UDs.js";import"./flowComponent-D-_a8eO4.js";import"./ReactAriaControlledValueFix-B2lXfI7Z.js";import"./Label.module-CUYTf9Jc.js";import"./Text-CM7-JVVa.js";import"./browser-DOebU0pA.js";import"./EmulatedBoldText-BsN5iyXq.js";import"./IconWarning-DF-Lhcnu.js";import"./react-children-utilities-K6HpEoIu.js";import"./ClearPropsContext-BXwgDp0Q.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:x("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(h,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},l={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(g,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
