import{j as e,r as C}from"./iframe-DJlgDtsR.js";import{F as h}from"./FieldDescription-DFEkRW3-.js";import{F as R}from"./FieldError-CeTb8jEt.js";import{L as a}from"./Label-B-hN2Lzv.js";import{T as t}from"./TextField-DnPHVR9K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-B6SLv6do.js";import"./flowComponent-1zQAiLcC.js";import"./index-De4rcGI5.js";import"./index-Ds6_MS6L.js";import"./browser-C6YBs1UC.js";import"./EmulatedBoldText-BsjtvuiU.js";import"./Text-DD0-81CT.js";import"./utils-xFKhKznh.js";import"./FieldError-Cpk3ITKU.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DmRH4lNK.js";import"./AlertIcon-nCFQHvgi.js";import"./IconWarning-Cyya3L9S.js";import"./remote-CayAs8X4.js";import"./useLocalizedStringFormatter-D9db5kL2.js";import"./context-XFPr5nuV.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BBNmyes_.js";import"./Hidden-4sLzj03B.js";import"./TextFieldBase-DFi-7PTx.js";import"./useFieldComponent-Bmr1JhS0.js";import"./TextField-CzoLjm41.js";import"./RSPContexts-CxGwKclm.js";import"./Form-BUDe3usU.js";import"./useLabel-KImy5Ex-.js";import"./Group-CUxw3L8E.js";import"./useFocusRing-BhR5IplG.js";import"./useFocus-oMd_AJz-.js";import"./Input-C2mY4pOV.js";import"./useTextField-BsWAQyLD.js";import"./useFormReset-yK5dVmLs.js";import"./useControlledState-C0KUsyk2.js";import"./useFocusable-CsEyjS4C.js";import"./useFormValidation-Dup-Fz52.js";import"./useControlledHostValueProps-D_As0Zui.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
