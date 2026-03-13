import{j as e,r as F}from"./iframe-CtEjVB66.js";import{F as c}from"./FieldDescription-DOW1EL7Z.js";import{F as L}from"./FieldError-BzQCv4a3.js";import{L as o}from"./Label-CvAjEv-1.js";import{T as t}from"./TextField-CTAsvyVX.js";import{B as j}from"./Button-BbnjmOHy.js";import{I as f}from"./IconWarning-1CkAUSYF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-QCKh6xRo.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Text-1qNOxJF7.js";import"./utils-BuEQZICT.js";import"./FieldError-DJZxrTcD.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./Label.module-CUYTf9Jc.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./useControlledHostValueProps-UR5SmFsp.js";import"./useFieldComponent-B7HNchXP.js";import"./TextField-uAKnHDmd.js";import"./RSPContexts-oGVR4C8S.js";import"./Form-Bs4UrYBw.js";import"./useLabel-Cn5QMcKF.js";import"./Group-BKGRpIrc.js";import"./useFocusRing-B5ekdd71.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./Input-ByYkDHMz.js";import"./useTextField-7MsF6vto.js";import"./useFormReset-2RZyXaKm.js";import"./useControlledState-D0kLTbtR.js";import"./useFocusable-CocGrzXD.js";import"./useFormValidation-ClIfwgLl.js";import"./LoadingSpinner-CJX4ksrz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-4O72-jdB.js";import"./Button-Bk9_EddI.js";import"./ProgressBar-l1h_jwKt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cre2k4PJ.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Fe={title:"Form Controls/TextField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,showCharacterCount:!1,maxLength:200},parameters:{controls:{exclude:["maxLength"]}},render:r=>e.jsx(t,{onChange:T("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(c,{children:'Start with "https://"'})]})},i={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},n={render:r=>{const[u,h]=F.useState("");return e.jsx(t,{...r,value:u,onChange:x=>h(x.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},p={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},l={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(L,{children:"Invalid input"}),e.jsx(c,{children:'Start with "https://"'})]})},d={args:{type:"password"},render:r=>e.jsx(t,{...r,children:e.jsx(o,{children:"Password"})})},m={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"Custom Button"}),e.jsx(j,{"aria-label":"Custom",children:e.jsx(f,{})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Le=["Default","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","Password","CustomButton"];export{m as CustomButton,s as Default,d as Password,n as WithControlledValue,i as WithDefaultValue,a as WithFieldDescription,l as WithFieldError,p as WithPlaceholder,Le as __namedExportsOrder,Fe as default};
