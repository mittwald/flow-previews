import{j as r}from"./iframe-DGdLAJHm.js";import{T as s}from"./TextArea-CVhAFbg_.js";import{L as a}from"./Label-TWVsUPc0.js";import{F as h}from"./FieldDescription-DQMN5C8v.js";import{F as g}from"./useFieldComponent-sq1ZsD9O.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-DgvH_saR.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./context-CokKTPHD.js";import"./index-JbK8SDWv.js";import"./clsx-B-dksMZM.js";import"./index-BZginMRh.js";import"./TextField-DapXRZOv.js";import"./utils-DMxNMt2r.js";import"./RSPContexts-4eF2sDK2.js";import"./Form-CiLoCuZS.js";import"./useLabel-DLeCNjtK.js";import"./Group-DjNAC75P.js";import"./useFocusRing-Caix2y0_.js";import"./useFocus-Cj45nHC3.js";import"./Input-BpAc-meC.js";import"./Hidden-DDvTcAlv.js";import"./Label-DCzhvZl0.js";import"./Text-C5DwW8tZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useTextField-BmiF-DDN.js";import"./useFormReset-DwdExnfa.js";import"./useControlledState-C-kX1e6O.js";import"./useFocusable-DBd_8M_L.js";import"./useFormValidation-LOSvoqzJ.js";import"./flowComponent-D7HGs2AA.js";import"./ReactAriaControlledValueFix-C438VEIS.js";import"./Label.module-CUYTf9Jc.js";import"./Text-DFxon6If.js";import"./browser-DtJMxQoE.js";import"./EmulatedBoldText-l3o70VD0.js";import"./IconWarning-BY1Q-g8P.js";import"./react-children-utilities-bPIN5y_s.js";import"./ClearPropsContext-DfqGN335.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:x("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(h,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},l={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(g,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
