import{j as e,r as C}from"./iframe-ChZoSAk9.js";import{F as h}from"./FieldDescription-C8pMBaks.js";import{F as R}from"./FieldError-D0FcbU4f.js";import{L as a}from"./Label-BtQBKk3e.js";import{T as t}from"./TextField-CDP5umjv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-DeId_uwd.js";import"./flowComponent-CTDVwaga.js";import"./index-DWAP1jQp.js";import"./index-0x3bxhbi.js";import"./browser-B8p5n3S3.js";import"./EmulatedBoldText-D79YiaqZ.js";import"./Text-DWCX6muZ.js";import"./utils-3orXHcy8.js";import"./FieldError-krJUZi9_.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconApp-jg62nbZM.js";import"./remote-CMT6q-r_.js";import"./IconDanger-bNuP_yaN.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D3af8G-N.js";import"./context-CKHtHj1o.js";import"./Label-8-s2XGsR.js";import"./Hidden-BToicrtl.js";import"./TextFieldBase-BwrWOlVO.js";import"./useFieldComponent-CTbZHLtq.js";import"./TextField-B5JGrl3J.js";import"./RSPContexts-BuIIeKa7.js";import"./Form-DiR4hcFZ.js";import"./useLabel-DwTIrFfL.js";import"./Group-BO5rtvFF.js";import"./useFocusRing-sg_VmrXT.js";import"./useFocus-BEqWk0b2.js";import"./Input-C1UIQQj8.js";import"./useTextField-BJpggVQl.js";import"./useFormReset-DlW87ulD.js";import"./useControlledState-CXwLHBKW.js";import"./useFocusable-BQrvJ6Oj.js";import"./useFormValidation-DrPCugNK.js";import"./useControlledHostValueProps-COJ6lWMZ.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,pe={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},s={},o={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const le=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{s as Default,o as Disabled,i as ReadOnly,n as Required,u as ShowCharacterCount,d as WithControlledValue,l as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,c as WithPlaceholder,le as __namedExportsOrder,pe as default};
