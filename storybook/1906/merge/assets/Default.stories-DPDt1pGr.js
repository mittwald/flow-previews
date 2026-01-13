import{j as e,r as C}from"./iframe-Cwcli8hM.js";import{F as h}from"./FieldDescription-Cjbk4mgT.js";import{F as R}from"./FieldError-C_uRtYKD.js";import{L as a}from"./Label-CdIP0Akw.js";import{T as t}from"./TextField-BwCJiiXt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-D-waKGHU.js";import"./flowComponent-B-m_iRlw.js";import"./index-CUAtZNjK.js";import"./index-CcWFAiT6.js";import"./browser-Dim89v3O.js";import"./EmulatedBoldText-B6NHIM-L.js";import"./Text-C18q6Xnm.js";import"./utils-C3qjWKVL.js";import"./FieldError-CJJNrBrn.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-BjBene4x.js";import"./AlertIcon-sG8HORuJ.js";import"./IconWarning-KJvMQc2O.js";import"./remote-wJ26wkpE.js";import"./useLocalizedStringFormatter-Bgk77FUt.js";import"./context-ChPy2xgW.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BInCCjcu.js";import"./Hidden-D2HOHB0p.js";import"./TextFieldBase-B5TrCQHW.js";import"./useFieldComponent-DIqLhVln.js";import"./TextField-CSzsaios.js";import"./RSPContexts-BLwT6Sdo.js";import"./Form-BXllkstm.js";import"./useLabel-23O2EZ34.js";import"./Group-B4sml9Xm.js";import"./useFocusRing-Dl7LqS86.js";import"./useFocus-CSHYTGFD.js";import"./Input-BrN80aSI.js";import"./useTextField-By7tfDpK.js";import"./useFormReset-BDGa5C7A.js";import"./useControlledState-ClHEyKKa.js";import"./useFocusable-CLuaS2Z4.js";import"./useFormValidation-BcDhKfF3.js";import"./useControlledHostValueProps-dmC9QLbU.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...u.parameters?.docs?.source}}};const de=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{o as Default,s as Disabled,i as ReadOnly,n as Required,u as ShowCharacterCount,d as WithControlledValue,l as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,c as WithPlaceholder,de as __namedExportsOrder,le as default};
