import{j as e,r as C}from"./iframe-D5OSMSYj.js";import{F as h}from"./FieldDescription--3BD_Kcq.js";import{F as R}from"./FieldError-DkXkFVgN.js";import{L as a}from"./Label-CF1-K3Zk.js";import{T as t}from"./TextField-CY3_8uP2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-DAhCT_ah.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./index-Bwk6EGM5.js";import"./browser-CPg_spJX.js";import"./EmulatedBoldText-Dm6vKeJS.js";import"./Text-DxpiEtGq.js";import"./utils-B2fStg81.js";import"./FieldError-SdvWZoRR.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-BnzdsAWE.js";import"./AlertIcon-CDVTToII.js";import"./IconWarning-aBoV8v8e.js";import"./remote-DoBIDVY0.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./context-CCC3vGzE.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bh0iBwH8.js";import"./Hidden-NmD_pG7l.js";import"./TextFieldBase-B8fMcfN9.js";import"./useFieldComponent-yQbkUBpw.js";import"./TextField-TgU68DEX.js";import"./RSPContexts-BzWalm_3.js";import"./Form-RJ7gT7dr.js";import"./useLabel-CQkx52KA.js";import"./Group-DPq_fDos.js";import"./useFocusRing-D5zyjxEp.js";import"./useFocus-C6h-AdFL.js";import"./Input-DK63hDT9.js";import"./useTextField-CYoB5YV1.js";import"./useFormReset-C4H0cf_a.js";import"./useControlledState-BLX_f1Wx.js";import"./useFocusable-BBmYajA6.js";import"./useFormValidation-BzDFxNXO.js";import"./useControlledHostValueProps-d9R3T6JC.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
