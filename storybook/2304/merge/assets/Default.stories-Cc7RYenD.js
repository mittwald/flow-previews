import{j as e,r as S}from"./iframe-DsvUdpXw.js";import{F}from"./FieldDescription-GkX1e7wK.js";import{F as b}from"./FieldError-DMawyIiV.js";import{L as s}from"./Label-V0M08dzp.js";import{T as t}from"./TextField-Di2EWGyH.js";import{B as T}from"./Button-Bh17vETd.js";import{I as R}from"./IconWarning-DeQxeoQB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-DX5v3ksG.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./index-BOZmgZtE.js";import"./browser-BtOTkQbR.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./Text-qH9eQPgP.js";import"./utils-elFy1-Tx.js";import"./FieldError-S3zhgpi7.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DtX3FOrI.js";import"./AlertIcon-C2Vz7YO6.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./context-BSJoRVhT.js";import"./Label.module-CUYTf9Jc.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./useControlledHostValueProps-CBts7xi2.js";import"./useFieldComponent-CWVnpPPS.js";import"./TextField-D9iaV1ub.js";import"./RSPContexts-C2fytUZa.js";import"./Form-_ij7bXRe.js";import"./useLabel-CEPtaVyT.js";import"./Group-VzCh1Jz3.js";import"./useFocusRing-DkxfWW5E.js";import"./useFocus-DN2AExbL.js";import"./Input-B3qlT_4M.js";import"./useTextField-CImQ85Uo.js";import"./useFormReset-BZPoHMi4.js";import"./useControlledState-HbpZAl0m.js";import"./useFocusable-CD1pLlOX.js";import"./useFormValidation-B3UJ98ri.js";import"./LoadingSpinner-DQcVqwZx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-Bzinmuoi.js";import"./Button-RLHEBlnW.js";import"./ProgressBar-iQ50i7yu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BFT-1ljl.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Ce={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:g("onChange"),...r,children:e.jsx(s,{children:"First name"})})},o={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},i={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"URL"}),e.jsx(F,{children:'Start with "https://"'})]})},d={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(s,{children:"URL"})})},l={render:r=>{const[L,C]=S.useState("");return e.jsx(t,{...r,value:L,onChange:j=>C(j.toUpperCase()),children:e.jsx(s,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(s,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(s,{children:"URL"}),e.jsx(b,{children:"Invalid input"}),e.jsx(F,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:g("onChange"),...r,children:e.jsx(s,{children:"User name"})})},h={args:{type:"password"},render:r=>e.jsx(t,{...r,children:e.jsx(s,{children:"Password"})})},x={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Custom Button"}),e.jsx(T,{"aria-label":"Custom",children:e.jsx(R,{})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password"
  },
  render: props => <TextField {...props}>
      <Label>Password</Label>
    </TextField>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>Custom Button</Label>
      <Button aria-label="Custom">
        <IconStar />
      </Button>
    </TextField>
}`,...x.parameters?.docs?.source}}};const je=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Password","CustomButton"];export{x as CustomButton,o as Default,a as Disabled,h as Password,n as ReadOnly,i as Required,u as ShowCharacterCount,l as WithControlledValue,d as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,c as WithPlaceholder,je as __namedExportsOrder,Ce as default};
