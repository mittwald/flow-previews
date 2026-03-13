import{j as r}from"./iframe-BFddea_x.js";import{T as s}from"./TextArea-DSJXQOff.js";import{L as a}from"./Label-Cyz25dCh.js";import{F as m}from"./FieldDescription-DqsHbSnc.js";import{F as d}from"./FieldError-BfmusLP_.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./clsx-B-dksMZM.js";import"./index-CcOYdQtn.js";import"./utils-D-aZUMcZ.js";import"./useFieldComponent-DrOhnKye.js";import"./useControlledHostValueProps-xZ--AIC6.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./TextField-Cha2rHT2.js";import"./FieldError-Dj7b6ixT.js";import"./Text-DndMRLn5.js";import"./filterDOMProps-BNnC3YgW.js";import"./RSPContexts-DrvlE6Qo.js";import"./Form-Cmx7zRsN.js";import"./useLabel-C__elmJN.js";import"./Group-ChkAGHz_.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./Input-DbK2aUtO.js";import"./Hidden-CWxwpwFD.js";import"./Label-DEW42_UF.js";import"./useTextField-C79BrPY1.js";import"./useFormReset-C1U9nA2s.js";import"./useControlledState-lfI_swTV.js";import"./useFocusable-D-17EkqH.js";import"./useFormValidation-CYvJLeFF.js";import"./Label.module-CUYTf9Jc.js";import"./Text-B70YymId.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/TextArea",component:s,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(s,{onChange:u("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(m,{children:"Starts with ssh-rsa"})]})},i={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},p={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},n={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(d,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},c={args:{rows:3,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const ar=["Default","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable"];export{c as AutoResizeable,o as Default,l as ShowCharacterCount,i as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,p as WithPlaceholder,ar as __namedExportsOrder,sr as default};
