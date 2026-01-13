import{j as r,r as F}from"./iframe-Cwcli8hM.js";import{L as l}from"./Label-CdIP0Akw.js";import{F as o}from"./FileField-D_oXttv5.js";import{B as t}from"./Button-I78ZffkB.js";import{S as f}from"./Section-DEX4-fyD.js";import{F as h}from"./FieldError-C_uRtYKD.js";import{F as x}from"./FieldDescription-Cjbk4mgT.js";import{O as S,L as j}from"./IconWarning-KJvMQc2O.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-m_iRlw.js";import"./index-CUAtZNjK.js";import"./index-CcWFAiT6.js";import"./useLocalizedStringFormatter-Bgk77FUt.js";import"./context-ChPy2xgW.js";import"./Label-BInCCjcu.js";import"./utils-C3qjWKVL.js";import"./Hidden-D2HOHB0p.js";import"./useFormValidation-BcDhKfF3.js";import"./useFocus-CSHYTGFD.js";import"./FieldError-CJJNrBrn.js";import"./Text-C18q6Xnm.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-BrN80aSI.js";import"./useFocusRing-Dl7LqS86.js";import"./browser-Dim89v3O.js";import"./useFieldComponent-DIqLhVln.js";import"./Text-D-waKGHU.js";import"./EmulatedBoldText-B6NHIM-L.js";import"./LoadingSpinner-KOoU2K2x.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-wJ26wkpE.js";import"./Button-CxQOY8r5.js";import"./ProgressBar-DHOJVCPT.js";import"./useLabel-23O2EZ34.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CMhi8zJA.js";import"./useFocusable-CLuaS2Z4.js";import"./ContextMenuSection-BAImieHE.js";import"./Action-BmzkYOqA.js";import"./context-Cu13uzRC.js";import"./useStatic-DFI4OZ-s.js";import"./getActionGroupSlot-DirYDTjy.js";import"./dynamic-kiJ_5GPX.js";import"./Dialog-q_50MZOU.js";import"./RSPContexts-BLwT6Sdo.js";import"./OverlayArrow-DeAkcNil.js";import"./useControlledState-ClHEyKKa.js";import"./Collection-S1sfFYaT.js";import"./CollectionBuilder-DdJjWtx-.js";import"./SelectionIndicator-BxaGM9C6.js";import"./Separator-Bk8vCnmb.js";import"./SelectionManager-BU8PQU75.js";import"./useEvent-DJX5f_Tm.js";import"./useCollator-BttCli9Q.js";import"./FocusScope-Bznsa9g2.js";import"./VisuallyHidden-BpjAuZe7.js";import"./AlertText-BjBene4x.js";import"./AlertIcon-sG8HORuJ.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};const Dr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Dr as __namedExportsOrder,Er as default};
