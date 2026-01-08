import{j as e,r as C}from"./iframe-DqAMh1gn.js";import{F as h}from"./FieldDescription-BxpfmOYv.js";import{F as R}from"./FieldError-DFC5bA5N.js";import{L as a}from"./Label-CvBjm4aX.js";import{T as t}from"./TextField-8jfzGjB_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-1p9r91sB.js";import"./flowComponent-BNeqdfjc.js";import"./index-BXU2S61h.js";import"./index-By9mRA0t.js";import"./browser-CSMWWW9k.js";import"./EmulatedBoldText-CnA8uKsC.js";import"./Text-DmUxfOW-.js";import"./utils-WhkxUCK6.js";import"./FieldError-Cat2GNj4.js";import"./filterDOMProps-i7L6S0l1.js";import"./InlineAlert-DL5f4hl1.js";import"./AlertIcon-C7t-BIgM.js";import"./IconWarning-BV3xGinn.js";import"./remote-BXLOBgAx.js";import"./useLocalizedStringFormatter-CZ172l8h.js";import"./context-DRhwbml9.js";import"./Label.module-CUYTf9Jc.js";import"./Label-iT_mUFNC.js";import"./Hidden-BzHkL3wJ.js";import"./TextFieldBase-BYrjVGdi.js";import"./useFieldComponent-CgfE5MLg.js";import"./TextField-Cwk09HWt.js";import"./RSPContexts-A1MHH_Cz.js";import"./Form-y2x5EeW4.js";import"./useLabel-BKYm2rJO.js";import"./Group-BvOirkga.js";import"./useFocusRing-BN14JWVs.js";import"./useFocus-Cr8fiyXD.js";import"./Input-OeHygm-T.js";import"./useTextField-CD8wMq8W.js";import"./useFormReset-CllrYVFd.js";import"./useControlledState-ChPR7hzM.js";import"./useFocusable-DO1mJmot.js";import"./useFormValidation-Bmx8yPSj.js";import"./useControlledHostValueProps-BDFbuI2N.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
