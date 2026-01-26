import{j as e,r as C}from"./iframe-CBKKDtut.js";import{F as h}from"./FieldDescription-BY78pjgj.js";import{F as R}from"./FieldError-ncR-D_4-.js";import{L as a}from"./Label-YKVXUmct.js";import{T as t}from"./TextField-iy_SMMJE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-DXycmlPy.js";import"./flowComponent-D-Qq6Xd6.js";import"./index-Q7U-5PA1.js";import"./index-fGZr3eAJ.js";import"./browser-C9q5kf03.js";import"./EmulatedBoldText-eA5g4YLr.js";import"./Text-BipkjXt2.js";import"./utils-CzD9rXMA.js";import"./FieldError-6zsCD2mI.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-BqYQV5FR.js";import"./AlertIcon-R8qprUXz.js";import"./IconWarning-BGeLtjSH.js";import"./remote-d08GjPRF.js";import"./useLocalizedStringFormatter-Cg2HsiHj.js";import"./context-Bvh_z46p.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BzrfGAM1.js";import"./Hidden-BMhHdfnU.js";import"./TextFieldBase-DxiF4zVu.js";import"./useFieldComponent-377eOR22.js";import"./TextField-B5o54xMd.js";import"./RSPContexts-B9p0Af0m.js";import"./Form-CoRvbdVN.js";import"./useLabel-BGNrCt7d.js";import"./Group-CA1lCmka.js";import"./useFocusRing-CCYWTYc5.js";import"./useFocus-BrZp4zBY.js";import"./Input-DA2pnuWC.js";import"./useTextField-CZl6lYma.js";import"./useFormReset-tFiefpak.js";import"./useControlledState-1Ujh64WW.js";import"./useFocusable-DQlHlYMC.js";import"./useFormValidation-FH2NBgqd.js";import"./useControlledHostValueProps-BbK479M6.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
