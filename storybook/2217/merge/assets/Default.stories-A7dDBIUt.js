import{j as e,r as C}from"./iframe-Du65Ph_c.js";import{F as h}from"./FieldDescription-PWJKvGgj.js";import{F as R}from"./FieldError-VBXyMAIR.js";import{L as a}from"./Label-BClS0qAd.js";import{T as t}from"./TextField-D9BBBaWE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-CtX5enn3.js";import"./flowComponent-CYbHZhXg.js";import"./index-XI88kJrR.js";import"./index-c0t27COx.js";import"./browser-57tL9X_d.js";import"./EmulatedBoldText-CITvecLd.js";import"./Text-Cl831mKA.js";import"./utils-xIJEb5Gc.js";import"./FieldError-cRzcLKxU.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CGSd0Gik.js";import"./remote-D3fYDNUY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Dhvhyrh1.js";import"./context-BMDcuGwa.js";import"./Label-D_GXaE34.js";import"./Hidden-BV9iY75y.js";import"./TextFieldBase-DStMjvfH.js";import"./useFieldComponent-XbdbUfvB.js";import"./TextField-CT_QddQu.js";import"./RSPContexts-CGKyxyrO.js";import"./Form-CLANTGFM.js";import"./useLabel-BdNff0XI.js";import"./Group-Bc65Crwm.js";import"./useFocusRing-B7cLewIC.js";import"./useFocus-mAbeDdRN.js";import"./Input-CyqTlZ7V.js";import"./useTextField-D01-3X5s.js";import"./useFormReset-D830YkJ7.js";import"./useControlledState-Cdt3oZ6_.js";import"./useFocusable-RoNPbAVl.js";import"./useFormValidation-DAWFGl74.js";import"./useControlledHostValueProps-BIH1ZGPM.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,ne={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},s={},o={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const pe=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{s as Default,o as Disabled,i as ReadOnly,n as Required,u as ShowCharacterCount,d as WithControlledValue,l as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,c as WithPlaceholder,pe as __namedExportsOrder,ne as default};
