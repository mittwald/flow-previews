import{j as e,r as S}from"./iframe-B2CTi6cm.js";import{F}from"./FieldDescription-Cp3TAr2a.js";import{F as b}from"./FieldError-Cpb_w0Fh.js";import{L as s}from"./Label-DccH0oyj.js";import{T as t}from"./TextField-Zrc5u_-a.js";import{B as T}from"./Button-_yLWek3e.js";import{I as R}from"./IconWarning-hrUSNLB1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-4QTNuVgz.js";import"./flowComponent-C7mc_ao_.js";import"./index-C6Xw33Ma.js";import"./index-DqADrqmd.js";import"./browser-Cn-sjrEd.js";import"./EmulatedBoldText-B1qN59os.js";import"./Text-CtUv1EPC.js";import"./utils-CFhs-kxq.js";import"./FieldError-Cj-zQd3o.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Dh_kjMlW.js";import"./AlertIcon-Bqwt-hqt.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./context-DlyTwf6g.js";import"./Label.module-CUYTf9Jc.js";import"./Label-tk3Z2cvp.js";import"./Hidden-DPfyW1TC.js";import"./useControlledHostValueProps-ClUMTGdq.js";import"./useFieldComponent-DO-gEAYc.js";import"./TextField-DfcZqbUi.js";import"./RSPContexts-BnlNRtVT.js";import"./Form-Cx6Bm7Pi.js";import"./useLabel-DatykuNG.js";import"./Group-Dv7pzL4P.js";import"./useFocusRing-G6UDZPL7.js";import"./useFocus-iUa6wpVM.js";import"./Input-KDCOY3Ar.js";import"./useTextField-BalQ2GqF.js";import"./useFormReset-BMX0RNLQ.js";import"./useControlledState-D4tpAkeT.js";import"./useFocusable-DeW7JE_I.js";import"./useFormValidation-BDHhHN4L.js";import"./LoadingSpinner-DnfUZyUE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-C6QTRNf9.js";import"./Button-0k2tyOZn.js";import"./ProgressBar-CsEuupc_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CXOW9Qje.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Ce={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:g("onChange"),...r,children:e.jsx(s,{children:"First name"})})},o={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},i={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"URL"}),e.jsx(F,{children:'Start with "https://"'})]})},d={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(s,{children:"URL"})})},l={render:r=>{const[L,C]=S.useState("");return e.jsx(t,{...r,value:L,onChange:j=>C(j.toUpperCase()),children:e.jsx(s,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(s,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(s,{children:"URL"}),e.jsx(b,{children:"Invalid input"}),e.jsx(F,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:g("onChange"),...r,children:e.jsx(s,{children:"User name"})})},h={args:{type:"password"},render:r=>e.jsx(t,{...r,children:e.jsx(s,{children:"Password"})})},x={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Custom Button"}),e.jsx(T,{"aria-label":"Custom",children:e.jsx(R,{})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
