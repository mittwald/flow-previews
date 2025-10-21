import{j as r}from"./iframe-DwkHntCQ.js";import{T as s}from"./TextArea-DEWzn2mP.js";import{L as a}from"./Label-IsfDEsPh.js";import{F as h}from"./FieldDescription-DY5ANAML.js";import{F as g}from"./useFieldComponent-DTLstJQQ.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-BGQbwFYA.js";import"./useLocalizedStringFormatter-ClJgDr8F.js";import"./context-BkqugFd7.js";import"./index-90CY5obj.js";import"./clsx-B-dksMZM.js";import"./index-Cx9MYi32.js";import"./TextField-BU5FsIMM.js";import"./utils-Di7WFWpe.js";import"./RSPContexts-CHr_tkrx.js";import"./Form-DZTCn0e1.js";import"./useLabel-DPc8RWv0.js";import"./Group-BnJXXyrI.js";import"./useFocusRing-B6zRS2mI.js";import"./utils-BgD92WZP.js";import"./useFocusWithin-tqcFW1Po.js";import"./useFocus-GoSUCcJ3.js";import"./Input-CxNU6sM9.js";import"./Hidden-CTKHA4Af.js";import"./Label-CkXLKyn5.js";import"./Text-BtFh1iC6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useTextField-CMn55DJk.js";import"./useFormReset-BUY4HIau.js";import"./useControlledState-DyDKUpf4.js";import"./useFocusable-Bnl-RQKa.js";import"./useFormValidation-D01J8um2.js";import"./flowComponent-CDVCCqgo.js";import"./ReactAriaControlledValueFix-DNP-65Ab.js";import"./Label.module-CUYTf9Jc.js";import"./VisuallyHidden-CVpyzdGa.js";import"./Text-DBgNVic9.js";import"./browser-DfU0u7Y9.js";import"./EmulatedBoldText-CNqdjroB.js";import"./IconWarning-CscgxAB5.js";import"./react-children-utilities-C8UOdL4T.js";import"./ClearPropsContext-D7-qaIYX.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:x("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(h,{children:"Starts with ssh-rsa"})]})},c={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},m={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(g,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};const ir=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Resizeable"];export{o as Default,t as Disabled,i as ReadOnly,n as Required,u as Resizeable,l as ShowCharacterCount,c as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,d as WithPlaceholder,ir as __namedExportsOrder,tr as default};
