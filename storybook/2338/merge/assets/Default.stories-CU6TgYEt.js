import{j as e,r as F}from"./iframe-Bge_iwzq.js";import{F as c}from"./FieldDescription-CKLwRnm1.js";import{F as L}from"./FieldError-D2SilRMV.js";import{L as o}from"./Label-DsCIDP_n.js";import{T as t}from"./TextField-BGSlbhXb.js";import{B as j}from"./Button-DYq5oiR6.js";import{I as f}from"./IconWarning-CnGwh2Y2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-Bo3CKbUr.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./utils-rhPAe061.js";import"./FieldError-Cv0VAgMN.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./useControlledHostValueProps-5VhQyC8e.js";import"./useFieldComponent-DrAtnMqi.js";import"./TextField-Ctm0SVNE.js";import"./RSPContexts-DPd6iTOd.js";import"./Form-YPyJtwoF.js";import"./useLabel-ltgoN8N_.js";import"./Group-Bwp5mwlQ.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocus-M-LntWI3.js";import"./Input-BXTXjJEE.js";import"./useTextField-4W-EXSfF.js";import"./useFormReset-CAOi_S_S.js";import"./useControlledState-CyAGSHwZ.js";import"./useFocusable-BPbhPIus.js";import"./useFormValidation-SyV8SqLU.js";import"./LoadingSpinner-BWNPdeXh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CO23tKXG.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXEJU3rI.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,xe={title:"Form Controls/TextField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,showCharacterCount:!1,maxLength:200},parameters:{controls:{exclude:["maxLength"]}},render:r=>e.jsx(t,{onChange:T("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(c,{children:'Start with "https://"'})]})},i={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},n={render:r=>{const[u,h]=F.useState("");return e.jsx(t,{...r,value:u,onChange:x=>h(x.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},p={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},l={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(L,{children:"Invalid input"}),e.jsx(c,{children:'Start with "https://"'})]})},d={args:{type:"password"},render:r=>e.jsx(t,{...r,children:e.jsx(o,{children:"Password"})})},m={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"Custom Button"}),e.jsx(j,{"aria-label":"Custom",children:e.jsx(f,{})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
