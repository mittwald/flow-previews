import{j as r}from"./iframe-CPZmCQj-.js";import{T as s}from"./TextArea-DxLpMhxI.js";import{L as a}from"./Label-Cl3ovliO.js";import{F as h}from"./FieldDescription-BFKEApQk.js";import{F as g}from"./useFieldComponent-ZdrCImE8.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-CPSGO8hB.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./context-vwBy6rn7.js";import"./index-Ba68vLbY.js";import"./clsx-B-dksMZM.js";import"./index-Dx50g0n6.js";import"./TextField-BQ8NGeCA.js";import"./utils-DbTuSxgD.js";import"./RSPContexts-gqgXzzK-.js";import"./Form-KkxpJ3qz.js";import"./useLabel-DeJHfKxc.js";import"./Group-Csdn_P-J.js";import"./useFocusRing-DtbYXXZs.js";import"./useFocus-DSlim6kP.js";import"./Input-CQkI7-zw.js";import"./Hidden-klXcLh_8.js";import"./Label-DhGaeBi-.js";import"./Text-ev6zCoFy.js";import"./filterDOMProps-i7L6S0l1.js";import"./useTextField-eZki_XjH.js";import"./useFormReset-BZ0LqTvh.js";import"./useControlledState-BjliE2JI.js";import"./useFocusable-1MtRKrlE.js";import"./useFormValidation-D952ndYN.js";import"./flowComponent-DZ7Ps0CL.js";import"./ReactAriaControlledValueFix-wp7kzKG1.js";import"./Label.module-CUYTf9Jc.js";import"./Text-cGw-MBFK.js";import"./browser-Vbuqg8Bp.js";import"./EmulatedBoldText-D8f43xv1.js";import"./IconWarning-BHYwQlMQ.js";import"./react-children-utilities-BpPrmtLj.js";import"./ClearPropsContext-DZV6h8aR.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:x("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(h,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},l={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(g,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
