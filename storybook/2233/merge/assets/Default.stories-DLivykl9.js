import{j as e,r as C}from"./iframe-BeQWUZkN.js";import{F as h}from"./FieldDescription-DmDXfwSl.js";import{F as R}from"./FieldError-BcvtKrk-.js";import{L as a}from"./Label-B2Ym8roL.js";import{T as t}from"./TextField-B8I1XC-o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-DBLOUBNs.js";import"./flowComponent-C5zRFTyN.js";import"./index-1B1ExeLK.js";import"./index-C7QqpnOV.js";import"./browser-CC8M21FF.js";import"./EmulatedBoldText-Ds4ybabF.js";import"./Text-oRZAcHnn.js";import"./utils-DahaGO1Z.js";import"./FieldError-D83BnXEF.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-zAJvVLJZ.js";import"./AlertIcon-Bvyhnsbm.js";import"./IconWarning-BINGtqrd.js";import"./remote-BjhB0wla.js";import"./useLocalizedStringFormatter-BinbCyOY.js";import"./context-BW8umLlU.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CrwWIO9R.js";import"./Hidden-CGYC7LW_.js";import"./TextFieldBase-fscEfOId.js";import"./useFieldComponent-Df_LAOUO.js";import"./TextField-ZmZv6OFU.js";import"./RSPContexts-3R6axPUC.js";import"./Form-Dldpy16s.js";import"./useLabel-Bej11zP_.js";import"./Group-tR5aTCJO.js";import"./useFocusRing-plkuiMUL.js";import"./useFocus-B8WX1wz4.js";import"./Input-DQvG8v1g.js";import"./useTextField-BfYqTdEi.js";import"./useFormReset-C8CI0grL.js";import"./useControlledState-CVKu2BVA.js";import"./useFocusable-5ZG33T1u.js";import"./useFormValidation-enT2NaDW.js";import"./useControlledHostValueProps-tRPPDpMf.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
