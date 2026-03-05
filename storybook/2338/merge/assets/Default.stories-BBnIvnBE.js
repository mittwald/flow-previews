import{j as e,r as F}from"./iframe-BcqfzoOA.js";import{F as c}from"./FieldDescription-BAMY7EMv.js";import{F as L}from"./FieldError-COredAmn.js";import{L as o}from"./Label-CQjtN3Gn.js";import{T as t}from"./TextField-DLmieK6n.js";import{B as j}from"./Button-C2msjhlA.js";import{I as f}from"./IconWarning-Bupv8NYZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-1XRmWCfn.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./index-AZuRIocR.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Text-CALsrB3x.js";import"./utils-Bwp7PlhH.js";import"./FieldError-BECkkLSz.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./useControlledHostValueProps-BWvMzPF4.js";import"./useFieldComponent-CSNqGKWj.js";import"./TextField-KO7DCant.js";import"./RSPContexts-D9SkabFV.js";import"./Form-CTjpA6Q_.js";import"./useLabel-QCIml9BE.js";import"./Group-CA7st2Jb.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocus-BgTDZkkG.js";import"./Input-Bku180kF.js";import"./useTextField-C_zoOVrm.js";import"./useFormReset-neBkOLPK.js";import"./useControlledState-DVjnE-U4.js";import"./useFocusable-B97W14wM.js";import"./useFormValidation-BMgNFXni.js";import"./LoadingSpinner-ULzpGe8L.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-x3smQXnv.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Lauho74f.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,xe={title:"Form Controls/TextField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,showCharacterCount:!1,maxLength:200},parameters:{controls:{exclude:["maxLength"]}},render:r=>e.jsx(t,{onChange:T("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(c,{children:'Start with "https://"'})]})},i={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},n={render:r=>{const[u,h]=F.useState("");return e.jsx(t,{...r,value:u,onChange:x=>h(x.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},p={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},l={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(L,{children:"Invalid input"}),e.jsx(c,{children:'Start with "https://"'})]})},d={args:{type:"password"},render:r=>e.jsx(t,{...r,children:e.jsx(o,{children:"Password"})})},m={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"Custom Button"}),e.jsx(j,{"aria-label":"Custom",children:e.jsx(f,{})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
