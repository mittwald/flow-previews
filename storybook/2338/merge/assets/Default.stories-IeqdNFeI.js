import{j as r}from"./iframe-BcqfzoOA.js";import{T as s}from"./TextArea-B_ddv2Zc.js";import{L as a}from"./Label-CQjtN3Gn.js";import{F as d}from"./FieldDescription-BAMY7EMv.js";import{F as m}from"./FieldError-COredAmn.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./clsx-B-dksMZM.js";import"./index-AZuRIocR.js";import"./utils-Bwp7PlhH.js";import"./useFieldComponent-CSNqGKWj.js";import"./useControlledHostValueProps-BWvMzPF4.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./TextField-KO7DCant.js";import"./FieldError-BECkkLSz.js";import"./Text-CALsrB3x.js";import"./filterDOMProps-BNnC3YgW.js";import"./RSPContexts-D9SkabFV.js";import"./Form-CTjpA6Q_.js";import"./useLabel-QCIml9BE.js";import"./Group-CA7st2Jb.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocus-BgTDZkkG.js";import"./Input-Bku180kF.js";import"./Hidden-BSnUj9OE.js";import"./Label-B-eADV2d.js";import"./useTextField-C_zoOVrm.js";import"./useFormReset-neBkOLPK.js";import"./useControlledState-DVjnE-U4.js";import"./useFocusable-B97W14wM.js";import"./useFormValidation-BMgNFXni.js";import"./Label.module-CUYTf9Jc.js";import"./Text-1XRmWCfn.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Form Controls/TextArea",component:s,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(s,{onChange:u("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(d,{children:"Starts with ssh-rsa"})]})},i={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},p={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},n={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(m,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},c={args:{rows:3,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
