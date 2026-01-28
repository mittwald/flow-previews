import{j as e,r as C}from"./iframe-DQPKoo92.js";import{F as h}from"./FieldDescription-TOm-cQme.js";import{F as R}from"./FieldError-IxBtEnB-.js";import{L as a}from"./Label-Og-F06uZ.js";import{T as t}from"./TextField-LQvnq3Dq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-C51WlGhJ.js";import"./flowComponent-DVIe49dZ.js";import"./index-B3Bpj3GD.js";import"./index-CnP3WCIP.js";import"./browser-ChlnFVHS.js";import"./EmulatedBoldText-ZCYLfeIO.js";import"./Text-Y949w0K8.js";import"./utils-XAdJPTNp.js";import"./FieldError-C-pwln9P.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-C5_JXWa-.js";import"./AlertIcon-v4rlNZlK.js";import"./IconWarning-CpLICj99.js";import"./remote-BNYVvti7.js";import"./useLocalizedStringFormatter-CbBU4IdI.js";import"./context-CJqjcP4U.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DrxyNCZO.js";import"./Hidden-BalHJt_t.js";import"./TextFieldBase-DNuLdLmt.js";import"./useFieldComponent-BKiBq2W6.js";import"./TextField-BdwVHITI.js";import"./RSPContexts-C1KLf5C0.js";import"./Form-C06cTOQY.js";import"./useLabel-DkBHutKV.js";import"./Group-hfhbZ0QM.js";import"./useFocusRing-Cni30Eah.js";import"./useFocus-BE88ppMu.js";import"./Input-MWzFGwJT.js";import"./useTextField-C7hH2N6q.js";import"./useFormReset-C7RuWveb.js";import"./useControlledState-CudIhSdL.js";import"./useFocusable-DX4YK8A-.js";import"./useFormValidation-B8bsM8-M.js";import"./useControlledHostValueProps-Cp6qVjJt.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
