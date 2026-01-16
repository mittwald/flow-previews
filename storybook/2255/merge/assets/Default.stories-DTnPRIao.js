import{j as e,r as C}from"./iframe-DEsugzBP.js";import{F as h}from"./FieldDescription-DsSfVktg.js";import{F as R}from"./FieldError-D0RH6F7V.js";import{L as a}from"./Label-DyIqFkt_.js";import{T as t}from"./TextField-B8pCcmE5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-CGG2whlc.js";import"./flowComponent-B7M9EemL.js";import"./index-JNFFaqnL.js";import"./index-DvVsbrc7.js";import"./browser-DSOUTdOR.js";import"./EmulatedBoldText-6jL3QUey.js";import"./Text-CGX30jhe.js";import"./utils-k3goWFVI.js";import"./FieldError-DL7mdN7X.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-B9jVXJTC.js";import"./AlertIcon-CMe_dxq6.js";import"./IconWarning-qDYXGw-D.js";import"./remote-Bm53ArvY.js";import"./useLocalizedStringFormatter-DuBUNj0e.js";import"./context-BA9NBDMH.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CT9VczkM.js";import"./Hidden-B9rA9ATP.js";import"./TextFieldBase-IGnJlx4a.js";import"./useFieldComponent-CoV9Rbdv.js";import"./TextField-DZ6i9AsT.js";import"./RSPContexts-BS5BTC1y.js";import"./Form-BBNX_R9o.js";import"./useLabel-Bn9RRRKS.js";import"./Group-LEKqTwAp.js";import"./useFocusRing-DuZx28fv.js";import"./useFocus-B3AZuBYY.js";import"./Input-B5rLIpjG.js";import"./useTextField-D6Qak1On.js";import"./useFormReset-D1Ly9aDH.js";import"./useControlledState-Dcr_irR6.js";import"./useFocusable-Bwqhhmq3.js";import"./useFormValidation-DCx77s5O.js";import"./useControlledHostValueProps-CB-rODEV.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
