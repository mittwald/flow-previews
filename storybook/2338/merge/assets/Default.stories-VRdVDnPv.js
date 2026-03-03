import{j as r}from"./iframe-BZ1p44Xs.js";import{T as s}from"./TextArea-BM7s9QlM.js";import{L as a}from"./Label-HK0aVnMe.js";import{F as d}from"./FieldDescription-PY5u12Fd.js";import{F as m}from"./FieldError-t823MHuJ.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./clsx-B-dksMZM.js";import"./index-39FgH5sT.js";import"./utils-Cc2PUaBi.js";import"./useFieldComponent-CdmiPNAX.js";import"./useControlledHostValueProps-Db0xokP4.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./TextField-BFG4RQnU.js";import"./FieldError-DP4FZd0x.js";import"./Text-DOPFHCGV.js";import"./filterDOMProps-BNnC3YgW.js";import"./RSPContexts-C2tYRgOg.js";import"./Form-Lw3Ehme-.js";import"./useLabel-CnpKVv_a.js";import"./Group-BUA_nOmN.js";import"./useFocusRing-vNPEpCai.js";import"./useFocus-O4gnqY9s.js";import"./Input-Bt20yVH7.js";import"./Hidden-VD2bsukW.js";import"./Label-9zEXlfwO.js";import"./useTextField-CmQ5R2lB.js";import"./useFormReset-zSbsyNkN.js";import"./useControlledState-CZ5q_fud.js";import"./useFocusable-BXiUGBNe.js";import"./useFormValidation-oY9u4Y5a.js";import"./Label.module-CUYTf9Jc.js";import"./Text-CplKG2wk.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./AlertText-CHdPuYCZ.js";import"./AlertIcon-CBSVIKWa.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Form Controls/TextArea",component:s,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(s,{onChange:u("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(d,{children:"Starts with ssh-rsa"})]})},i={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},p={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},n={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(m,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},c={args:{rows:3,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
