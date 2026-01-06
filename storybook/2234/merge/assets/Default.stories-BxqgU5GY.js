import{j as e,r as C}from"./iframe-Dnm846PF.js";import{F as h}from"./FieldDescription-ChdNC9CF.js";import{F as R}from"./FieldError-Ze0pQjLj.js";import{L as a}from"./Label-CfPB20lW.js";import{T as t}from"./TextField-D0TrsjKI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-DtZxu6g8.js";import"./flowComponent-S63Cq1sy.js";import"./index-Db1dbbsL.js";import"./index-sBHKlQZD.js";import"./browser-DEiAhc6G.js";import"./EmulatedBoldText-DH6NWkOG.js";import"./Text-1v5GZWlz.js";import"./utils-VDIU0BnD.js";import"./FieldError-BJ4Wbc9z.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CExbEpDP.js";import"./remote-XcyFsW5Q.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BqtI09-_.js";import"./context-CoOH5oCy.js";import"./Label-B2apKb0w.js";import"./Hidden-1UUWpuD7.js";import"./TextFieldBase-upbtEiSd.js";import"./useFieldComponent-CW3QYPg0.js";import"./TextField-D1pKbmJx.js";import"./RSPContexts-DkLfIxB1.js";import"./Form-DyzgNsfN.js";import"./useLabel-pLNL7Cvk.js";import"./Group-Btcmd8Qw.js";import"./useFocusRing-CANRw9LC.js";import"./useFocus-D-7SE4fF.js";import"./Input-vek2Lmza.js";import"./useTextField-DiJp1aL-.js";import"./useFormReset-BiFYZY7a.js";import"./useControlledState-CkFAdRGn.js";import"./useFocusable-DgTTkttD.js";import"./useFormValidation-CGpO-wMA.js";import"./useControlledHostValueProps-CsRpP7Fh.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,ne={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},s={},o={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
