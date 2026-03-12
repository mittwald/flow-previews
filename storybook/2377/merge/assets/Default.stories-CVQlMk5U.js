import{j as e,r as S}from"./iframe-JHVlk64D.js";import{F}from"./FieldDescription-CHp3BkQc.js";import{F as b}from"./FieldError-DkKHEf-8.js";import{L as s}from"./Label-BVSjd_Ef.js";import{T as t}from"./TextField-Dt9nEAvZ.js";import{B as T}from"./Button-BViHWx5D.js";import{I as R}from"./IconWarning-D57fWT31.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-D35H-2yr.js";import"./flowComponent-Ck8MmBsO.js";import"./index-w2uwoc3h.js";import"./index-BF-KrcKY.js";import"./browser-CH4iE_n_.js";import"./EmulatedBoldText-DwNSiPCb.js";import"./Text-BPDMqDL5.js";import"./utils-D9FbIhNL.js";import"./FieldError-CB6gvg8S.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-4rUPj4ZK.js";import"./AlertIcon-B-el1D17.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./context-ArJ603f0.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./useControlledHostValueProps-C11BGBW9.js";import"./useFieldComponent-Dm_EHwx7.js";import"./TextField-D8OVS6JU.js";import"./RSPContexts-BaSES6Qq.js";import"./Form-C3MOdK6R.js";import"./useLabel-9l7svqw5.js";import"./Group-BpUbtBKw.js";import"./useFocusRing-CHLeDkTy.js";import"./useFocus-Cks5m45E.js";import"./platform-Dz8CwCz0.js";import"./Input-D75LvDxG.js";import"./useTextField-D6sOxTHB.js";import"./useFormReset-CuVjUJoL.js";import"./useControlledState-BK0dEcU9.js";import"./useFocusable-vxzxlCI8.js";import"./useFormValidation-BHVZgCg5.js";import"./LoadingSpinner-Bl1fRewj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CdnDmctD.js";import"./Button-CV338ZHI.js";import"./ProgressBar-RoFvxVlz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dt-0MkOU.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,je={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:g("onChange"),...r,children:e.jsx(s,{children:"First name"})})},o={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},i={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"URL"}),e.jsx(F,{children:'Start with "https://"'})]})},d={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(s,{children:"URL"})})},l={render:r=>{const[L,C]=S.useState("");return e.jsx(t,{...r,value:L,onChange:j=>C(j.toUpperCase()),children:e.jsx(s,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(s,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(s,{children:"URL"}),e.jsx(b,{children:"Invalid input"}),e.jsx(F,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:g("onChange"),...r,children:e.jsx(s,{children:"User name"})})},h={args:{type:"password"},render:r=>e.jsx(t,{...r,children:e.jsx(s,{children:"Password"})})},x={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Custom Button"}),e.jsx(T,{"aria-label":"Custom",children:e.jsx(R,{})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const Se=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Password","CustomButton"];export{x as CustomButton,o as Default,a as Disabled,h as Password,n as ReadOnly,i as Required,u as ShowCharacterCount,l as WithControlledValue,d as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,c as WithPlaceholder,Se as __namedExportsOrder,je as default};
