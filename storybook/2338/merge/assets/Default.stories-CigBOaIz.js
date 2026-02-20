import{j as r}from"./iframe-BXGfha1q.js";import{T as s}from"./TextArea-0BjBEMkf.js";import{L as a}from"./Label-DmvSuQEb.js";import{F as d}from"./FieldDescription-B2zafCFx.js";import{F as m}from"./FieldError-B0wR5GbE.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./clsx-B-dksMZM.js";import"./index-D0PS_Jbm.js";import"./utils-DDzB-hS3.js";import"./useFieldComponent-BBRXs3en.js";import"./useControlledHostValueProps-BE7xh8vi.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./TextField-CSKOWfiV.js";import"./FieldError-B-_MD7Je.js";import"./Text-B1oZgTuN.js";import"./filterDOMProps-BNnC3YgW.js";import"./RSPContexts-CG0vEblW.js";import"./Form-C11JLohN.js";import"./useLabel-DPznQWXv.js";import"./Group-C9lE8UeE.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocus-WJp8rgri.js";import"./Input-DlEaT4nu.js";import"./Hidden-CY2KAX5F.js";import"./Label-B_ylra4b.js";import"./useTextField-Cyr4gso_.js";import"./useFormReset-9RWtv4Ar.js";import"./useControlledState-Wh-cgAjH.js";import"./useFocusable-DT8F95KZ.js";import"./useFormValidation-51U-qV9x.js";import"./Label.module-CUYTf9Jc.js";import"./Text-BbFupL_Y.js";import"./browser-P6njm6Fr.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./AlertText-D4bpqMRF.js";import"./AlertIcon-DqNX7jjv.js";import"./IconWarning-1Z1PxSqQ.js";import"./remote-DEIhwdad.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Form Controls/TextArea",component:s,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(s,{onChange:u("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(d,{children:"Starts with ssh-rsa"})]})},i={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},p={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},n={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(m,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},c={args:{rows:3,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
