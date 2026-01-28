import{j as e,r as C}from"./iframe-BE2KIrNP.js";import{F as h}from"./FieldDescription-B7Q7zUwA.js";import{F as R}from"./FieldError-DLWZre89.js";import{L as a}from"./Label-BBYAWH-Z.js";import{T as t}from"./TextField-BlzF7bRU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-99qeYwSw.js";import"./flowComponent-DqHsBCp0.js";import"./index-C9kIH1f3.js";import"./index-BeVui2PP.js";import"./browser-B5VZQlUE.js";import"./EmulatedBoldText-CPMF4SHl.js";import"./Text-D-kvbByn.js";import"./utils-CetDBScY.js";import"./FieldError-CYuYbE_Y.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-34tBbtSq.js";import"./AlertIcon-BSS6Y7Aa.js";import"./IconWarning-pheKtU5F.js";import"./remote-BDPI1xTN.js";import"./useLocalizedStringFormatter-Djj1Dsk8.js";import"./context-Cl9Jg8XT.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BTkJrjJz.js";import"./Hidden-DdzvMSsl.js";import"./TextFieldBase-gNnB3C6f.js";import"./useFieldComponent-8fOA-m-u.js";import"./TextField-W3j8ZdtU.js";import"./RSPContexts-B5Mb9Vey.js";import"./Form-7VWdSJkH.js";import"./useLabel-DlCzrbVx.js";import"./Group-BgqvKisC.js";import"./useFocusRing-CXSA7vN6.js";import"./useFocus-D19rPtJ7.js";import"./Input-lgtpKVFw.js";import"./useTextField-BkiiDUW1.js";import"./useFormReset-DGFO0EL0.js";import"./useControlledState-O9ITVI5k.js";import"./useFocusable-PS7GdwKW.js";import"./useFormValidation-BVWNV9RZ.js";import"./useControlledHostValueProps-BjkpzwSM.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
