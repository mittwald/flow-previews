import{j as r}from"./iframe-CEWg6_IX.js";import{T as s}from"./TextArea-CWYyvQer.js";import{L as a}from"./Label-BaJSnICs.js";import{F as d}from"./FieldDescription-BJFWlccI.js";import{F as m}from"./FieldError-fCgHoEMk.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./clsx-B-dksMZM.js";import"./index-BYd0o8d1.js";import"./utils-VWmQzJjV.js";import"./useFieldComponent-BOMK2S5G.js";import"./useControlledHostValueProps-DuyCNcnr.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./TextField-DfYJlBbG.js";import"./FieldError-B_BExaNJ.js";import"./Text-B3jOd0w4.js";import"./filterDOMProps-BNnC3YgW.js";import"./RSPContexts-ulpMISZ-.js";import"./Form-XtAuYD0I.js";import"./useLabel-B6JubenB.js";import"./Group-BY2zOSJX.js";import"./useFocusRing-6TkqSe16.js";import"./useFocus-BQlkvxNG.js";import"./Input-DI2XwVnV.js";import"./Hidden-CWIFSP7u.js";import"./Label-CW66CEku.js";import"./useTextField-aMHav-G9.js";import"./useFormReset-D1AT4nVs.js";import"./useControlledState-DV7blYjC.js";import"./useFocusable-B3euEuZy.js";import"./useFormValidation-przZuKLk.js";import"./Label.module-CUYTf9Jc.js";import"./Text-Bw_cIJde.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Form Controls/TextArea",component:s,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(s,{onChange:u("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(d,{children:"Starts with ssh-rsa"})]})},i={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},p={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},n={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(m,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},c={args:{rows:3,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 3,
    autoResizeMaxRows: 5
  }
}`,...c.parameters?.docs?.source}}};const sr=["Default","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable"];export{c as AutoResizeable,o as Default,l as ShowCharacterCount,i as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,p as WithPlaceholder,sr as __namedExportsOrder,er as default};
