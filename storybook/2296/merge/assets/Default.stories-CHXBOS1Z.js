import{j as e,r as S}from"./iframe-CcNHCKoB.js";import{F}from"./FieldDescription-tCT0DlP5.js";import{F as b}from"./FieldError-BlodrZIq.js";import{L as s}from"./Label-F2VOWZsZ.js";import{T as t}from"./TextField-XXxfZPsi.js";import{B as T}from"./Button-DTuLbClr.js";import{I as R}from"./IconWarning-DmrAmEd1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-BmtlE-88.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./index-C0Ga1GvX.js";import"./browser-C0P1LItQ.js";import"./EmulatedBoldText-BunH9Anl.js";import"./Text-BCtKE9i4.js";import"./utils-NnqZ9ZBK.js";import"./FieldError--IyvMZRA.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CklP5D4q.js";import"./AlertIcon-DM6j3Z28.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./context-LfQwLpL0.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./useControlledHostValueProps-DkKi295D.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./TextField-Dxucb5of.js";import"./RSPContexts-DYw5y0O9.js";import"./Form-DRLF_vg9.js";import"./useLabel-CyCYkDRj.js";import"./Group-DhbZF5dU.js";import"./useFocusRing-C53Oh36V.js";import"./useFocus-SYOVVSYu.js";import"./Input-D-KHai3o.js";import"./useTextField-CDD3_4OQ.js";import"./useFormReset-CUbMVBNo.js";import"./useControlledState-TVt6Qf5c.js";import"./useFocusable-Dm2HHW3t.js";import"./useFormValidation-PdvsTzHy.js";import"./LoadingSpinner-B5nlxM1K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CVy042JL.js";import"./Button-D33T_EGm.js";import"./ProgressBar-B-cW6vCD.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eyc-LVl-.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Ce={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:g("onChange"),...r,children:e.jsx(s,{children:"First name"})})},o={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},i={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"URL"}),e.jsx(F,{children:'Start with "https://"'})]})},d={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(s,{children:"URL"})})},l={render:r=>{const[L,C]=S.useState("");return e.jsx(t,{...r,value:L,onChange:j=>C(j.toUpperCase()),children:e.jsx(s,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(s,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(s,{children:"URL"}),e.jsx(b,{children:"Invalid input"}),e.jsx(F,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:g("onChange"),...r,children:e.jsx(s,{children:"User name"})})},h={args:{type:"password"},render:r=>e.jsx(t,{...r,children:e.jsx(s,{children:"Password"})})},x={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Custom Button"}),e.jsx(T,{"aria-label":"Custom",children:e.jsx(R,{})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
