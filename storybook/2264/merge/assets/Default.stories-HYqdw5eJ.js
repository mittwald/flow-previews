import{j as e,r as C}from"./iframe-CL_XwmGn.js";import{F as h}from"./FieldDescription-B8hcReII.js";import{F as R}from"./FieldError-p9GwIgel.js";import{L as a}from"./Label-D8wjF5yZ.js";import{T as t}from"./TextField-CFs_JcfU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-D6CnWJI6.js";import"./flowComponent-BU0F8yOM.js";import"./index-5M68WWKF.js";import"./index-E9PNAIL6.js";import"./browser-BUAGSuau.js";import"./EmulatedBoldText-T1o3Oddg.js";import"./Text-BoyMWt4b.js";import"./utils-pMOpDdKA.js";import"./FieldError-B4bZwJpA.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-ClMe5xDD.js";import"./AlertIcon-DT_6S455.js";import"./IconWarning-BJDkWSaD.js";import"./remote-vDvbK7RM.js";import"./useLocalizedStringFormatter-y3SF15d-.js";import"./context-BrZvYWUs.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C9CEKXVd.js";import"./Hidden-D-ekfNfu.js";import"./TextFieldBase-9NVtSak1.js";import"./useFieldComponent-CJlPbBit.js";import"./TextField-CWJX0VqQ.js";import"./RSPContexts-A2U_AiO5.js";import"./Form--AezVwJ0.js";import"./useLabel-OokI145l.js";import"./Group-DciaRV8P.js";import"./useFocusRing-vwKb8oQw.js";import"./useFocus-BpR4SkFv.js";import"./Input-CUsih0HK.js";import"./useTextField-BhxE74Xi.js";import"./useFormReset-Dt36AuVA.js";import"./useControlledState-CguvIA_y.js";import"./useFocusable-CrdCOPEw.js";import"./useFormValidation-B17WGe6J.js";import"./useControlledHostValueProps-DhDFNqRj.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
