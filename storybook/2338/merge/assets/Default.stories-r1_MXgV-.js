import{j as e,r as F}from"./iframe-BFddea_x.js";import{F as c}from"./FieldDescription-DqsHbSnc.js";import{F as L}from"./FieldError-BfmusLP_.js";import{L as o}from"./Label-Cyz25dCh.js";import{T as t}from"./TextField-C4oclEWY.js";import{B as j}from"./Button-DmFob37h.js";import{I as f}from"./IconWarning-Cwahpn-Q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-B70YymId.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./utils-D-aZUMcZ.js";import"./FieldError-Dj7b6ixT.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./useControlledHostValueProps-xZ--AIC6.js";import"./useFieldComponent-DrOhnKye.js";import"./TextField-Cha2rHT2.js";import"./RSPContexts-DrvlE6Qo.js";import"./Form-Cmx7zRsN.js";import"./useLabel-C__elmJN.js";import"./Group-ChkAGHz_.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./Input-DbK2aUtO.js";import"./useTextField-C79BrPY1.js";import"./useFormReset-C1U9nA2s.js";import"./useControlledState-lfI_swTV.js";import"./useFocusable-D-17EkqH.js";import"./useFormValidation-CYvJLeFF.js";import"./LoadingSpinner-BTSUDAP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DmjGOFpp.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DZQSLH7U.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Fe={title:"Form Controls/TextField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,showCharacterCount:!1,maxLength:200},parameters:{controls:{exclude:["maxLength"]}},render:r=>e.jsx(t,{onChange:T("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(c,{children:'Start with "https://"'})]})},i={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},n={render:r=>{const[u,h]=F.useState("");return e.jsx(t,{...r,value:u,onChange:x=>h(x.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},p={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},l={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(L,{children:"Invalid input"}),e.jsx(c,{children:'Start with "https://"'})]})},d={args:{type:"password"},render:r=>e.jsx(t,{...r,children:e.jsx(o,{children:"Password"})})},m={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"Custom Button"}),e.jsx(j,{"aria-label":"Custom",children:e.jsx(f,{})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
