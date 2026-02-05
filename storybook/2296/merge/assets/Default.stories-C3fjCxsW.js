import{j as e,r as C}from"./iframe-ByQojKkA.js";import{F as h}from"./FieldDescription-BpqjIUfK.js";import{F as R}from"./FieldError-Dl1gROKX.js";import{L as a}from"./Label-zx0kmle1.js";import{T as t}from"./TextField-Dm-Oynp6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-B1R6GgBU.js";import"./flowComponent-finO9fDl.js";import"./index-bUDX88mR.js";import"./index-DifIgMrD.js";import"./browser-BgQK0KeO.js";import"./EmulatedBoldText-CozfSoiL.js";import"./Text-BjqL4T8G.js";import"./utils-D3Fm7Ut8.js";import"./FieldError-DskIGmIg.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-C88MmDo3.js";import"./AlertIcon-C-5STchL.js";import"./IconWarning-tVGTIzEo.js";import"./remote-CpbK9d4g.js";import"./useLocalizedStringFormatter-EfbLvfF-.js";import"./context-B2MAxUi3.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ca-ZH_hh.js";import"./Hidden-B7m2oWRR.js";import"./TextFieldBase-xcr1bPfN.js";import"./useFieldComponent-Blt-XhY9.js";import"./TextField-CcXXYOcL.js";import"./RSPContexts-au40D8o8.js";import"./Form-Cffumk9C.js";import"./useLabel-BZ22SDLr.js";import"./Group-CNDS5EKI.js";import"./useFocusRing-D8JCvm1f.js";import"./useFocus-CIqVesE-.js";import"./Input-qfXo-HDb.js";import"./useTextField-C_dLnkiz.js";import"./useFormReset-CjuTJ3ym.js";import"./useControlledState-CdOFY_9U.js";import"./useFocusable-BRqzZMJF.js";import"./useFormValidation-DiyC9X3o.js";import"./useControlledHostValueProps-lUs8Ao02.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
