import{j as e,r as C}from"./iframe-Bj8CIgLy.js";import{F as h}from"./FieldDescription-tBjikzHa.js";import{F as R}from"./FieldError-Dbjs-A5K.js";import{L as a}from"./Label-DCfOJgVU.js";import{T as t}from"./TextField-BRi2yxi-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-BbFFlg8m.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./index-DYakERwo.js";import"./browser-Rl4DjN4H.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./Text-CVMu3Bei.js";import"./utils-D41FTHpf.js";import"./FieldError-cTj-tlV1.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";import"./IconWarning-KvO0562x.js";import"./remote-ChNLl0N8.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./context-RK9vgtK2.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./TextFieldBase-C4_qES-F.js";import"./useFieldComponent-DFS7CEov.js";import"./TextField-DWq53d6e.js";import"./RSPContexts-C3RQOwqv.js";import"./Form-CdHdNrpC.js";import"./useLabel-j5JIlG5u.js";import"./Group-C2p9sJyZ.js";import"./useFocusRing-0HtVE4-I.js";import"./useFocus-BJLP4kuV.js";import"./Input-DxRXMpsm.js";import"./useTextField-gMvFPb5G.js";import"./useFormReset-DPVe5t_C.js";import"./useControlledState-C0IHmt74.js";import"./useFocusable-DNf9Dm0r.js";import"./useFormValidation-CuYWsRMr.js";import"./useControlledHostValueProps-D2bTA6r2.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
