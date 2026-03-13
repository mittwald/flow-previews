import{j as r}from"./iframe-CtEjVB66.js";import{T as s}from"./TextArea-BVLycZdR.js";import{L as a}from"./Label-CvAjEv-1.js";import{F as m}from"./FieldDescription-DOW1EL7Z.js";import{F as d}from"./FieldError-BzQCv4a3.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./clsx-B-dksMZM.js";import"./index-it1EKrY8.js";import"./utils-BuEQZICT.js";import"./useFieldComponent-B7HNchXP.js";import"./useControlledHostValueProps-UR5SmFsp.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./TextField-uAKnHDmd.js";import"./FieldError-DJZxrTcD.js";import"./Text-1qNOxJF7.js";import"./filterDOMProps-BNnC3YgW.js";import"./RSPContexts-oGVR4C8S.js";import"./Form-Bs4UrYBw.js";import"./useLabel-Cn5QMcKF.js";import"./Group-BKGRpIrc.js";import"./useFocusRing-B5ekdd71.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./Input-ByYkDHMz.js";import"./Hidden-BjEfMFZ5.js";import"./Label-XCLRl25L.js";import"./useTextField-7MsF6vto.js";import"./useFormReset-2RZyXaKm.js";import"./useControlledState-D0kLTbtR.js";import"./useFocusable-CocGrzXD.js";import"./useFormValidation-ClIfwgLl.js";import"./Label.module-CUYTf9Jc.js";import"./Text-QCKh6xRo.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/TextArea",component:s,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(s,{onChange:u("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(m,{children:"Starts with ssh-rsa"})]})},i={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},p={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},n={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(d,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},c={args:{rows:3,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
