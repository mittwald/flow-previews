import{j as r}from"./iframe-Bge_iwzq.js";import{T as s}from"./TextArea-Bx2LbXol.js";import{L as a}from"./Label-DsCIDP_n.js";import{F as d}from"./FieldDescription-CKLwRnm1.js";import{F as m}from"./FieldError-D2SilRMV.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./clsx-B-dksMZM.js";import"./index-Dbbom8kG.js";import"./utils-rhPAe061.js";import"./useFieldComponent-DrAtnMqi.js";import"./useControlledHostValueProps-5VhQyC8e.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./TextField-Ctm0SVNE.js";import"./FieldError-Cv0VAgMN.js";import"./Text-70WXc8nw.js";import"./filterDOMProps-BNnC3YgW.js";import"./RSPContexts-DPd6iTOd.js";import"./Form-YPyJtwoF.js";import"./useLabel-ltgoN8N_.js";import"./Group-Bwp5mwlQ.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocus-M-LntWI3.js";import"./Input-BXTXjJEE.js";import"./Hidden-CDcFNb6q.js";import"./Label-CCD88BdD.js";import"./useTextField-4W-EXSfF.js";import"./useFormReset-CAOi_S_S.js";import"./useControlledState-CyAGSHwZ.js";import"./useFocusable-BPbhPIus.js";import"./useFormValidation-SyV8SqLU.js";import"./Label.module-CUYTf9Jc.js";import"./Text-Bo3CKbUr.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Form Controls/TextArea",component:s,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(s,{onChange:u("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(d,{children:"Starts with ssh-rsa"})]})},i={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},p={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},n={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(m,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},c={args:{rows:3,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 3,
    autoResizeMaxRows: 5
  }
}`,...c.parameters?.docs?.source}}};const sr=["Default","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable"];export{c as AutoResizeable,o as Default,l as ShowCharacterCount,i as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,p as WithPlaceholder,sr as __namedExportsOrder,er as default};
