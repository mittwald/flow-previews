import{j as e,r as F}from"./iframe-CEWg6_IX.js";import{F as c}from"./FieldDescription-BJFWlccI.js";import{F as L}from"./FieldError-fCgHoEMk.js";import{L as o}from"./Label-BaJSnICs.js";import{T as t}from"./TextField-DKH0rH4c.js";import{B as j}from"./Button-CA6AkUR_.js";import{I as f}from"./IconWarning-D3143lfN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-Bw_cIJde.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./Text-B3jOd0w4.js";import"./utils-VWmQzJjV.js";import"./FieldError-B_BExaNJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./useControlledHostValueProps-DuyCNcnr.js";import"./useFieldComponent-BOMK2S5G.js";import"./TextField-DfYJlBbG.js";import"./RSPContexts-ulpMISZ-.js";import"./Form-XtAuYD0I.js";import"./useLabel-B6JubenB.js";import"./Group-BY2zOSJX.js";import"./useFocusRing-6TkqSe16.js";import"./useFocus-BQlkvxNG.js";import"./Input-DI2XwVnV.js";import"./useTextField-aMHav-G9.js";import"./useFormReset-D1AT4nVs.js";import"./useControlledState-DV7blYjC.js";import"./useFocusable-B3euEuZy.js";import"./useFormValidation-przZuKLk.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BClk6GLL.js";import"./Button-Dhdc5WDI.js";import"./ProgressBar-U95AIiub.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BNr3g4sC.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,xe={title:"Form Controls/TextField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,showCharacterCount:!1,maxLength:200},parameters:{controls:{exclude:["maxLength"]}},render:r=>e.jsx(t,{onChange:T("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(c,{children:'Start with "https://"'})]})},i={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},n={render:r=>{const[u,h]=F.useState("");return e.jsx(t,{...r,value:u,onChange:x=>h(x.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},p={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},l={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(L,{children:"Invalid input"}),e.jsx(c,{children:'Start with "https://"'})]})},d={args:{type:"password"},render:r=>e.jsx(t,{...r,children:e.jsx(o,{children:"Password"})})},m={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"Custom Button"}),e.jsx(j,{"aria-label":"Custom",children:e.jsx(f,{})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password"
  },
  render: props => <TextField {...props}>
      <Label>Password</Label>
    </TextField>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>Custom Button</Label>
      <Button aria-label="Custom">
        <IconStar />
      </Button>
    </TextField>
}`,...m.parameters?.docs?.source}}};const Fe=["Default","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","Password","CustomButton"];export{m as CustomButton,s as Default,d as Password,n as WithControlledValue,i as WithDefaultValue,a as WithFieldDescription,l as WithFieldError,p as WithPlaceholder,Fe as __namedExportsOrder,xe as default};
