import{j as r,r as F}from"./iframe-agbTJ2rk.js";import{L as l}from"./Label-BNNjDH32.js";import{F as o}from"./FileField-DUlClMl5.js";import{B as t}from"./Button-Br9Yc6cY.js";import{S as f}from"./Section-CtAmdGju.js";import{F as h}from"./FieldError-BH2blnd1.js";import{F as x}from"./FieldDescription-D95nHT9i.js";import{P as S,M as j}from"./IconWarning-DBJeVzaP.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Tp6-knTL.js";import"./index-Ck1XmQF-.js";import"./index-DPEh44cd.js";import"./useLocalizedStringFormatter-DfJx7LFE.js";import"./context-DNnfn7OO.js";import"./Label-Da0PgXCv.js";import"./utils-Cg5Rmuuc.js";import"./Hidden-DehNc1Kw.js";import"./useFormValidation-DxAxZRFR.js";import"./useFocus-BFA9Y66r.js";import"./useFocusRing-Df3re3NP.js";import"./FieldError-D6XTyUhB.js";import"./Text-B3pB98UM.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-CfRC_Eeo.js";import"./browser-DcYn1DNE.js";import"./useFieldComponent-Bdg-2oVH.js";import"./Text-DmtEYLwi.js";import"./EmulatedBoldText-_6M-JboB.js";import"./LoadingSpinner-CHOtYrBZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-zpHok2y4.js";import"./Button-KwBkKB1A.js";import"./ProgressBar-Dtf2TWy6.js";import"./useLabel-COQ7NCDT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DrXmkjxU.js";import"./useFocusable-Dcrl6Kh-.js";import"./ContextMenuSection-BNQ2j9mF.js";import"./Action-KXOin-yd.js";import"./context-Dm2xLzXZ.js";import"./useStatic-C0pFV-a-.js";import"./getActionGroupSlot-_GbbmTSO.js";import"./dynamic-9PkN5S4U.js";import"./Dialog-A1OcXUz0.js";import"./RSPContexts-H7hhohAE.js";import"./OverlayArrow-CJVRO-c0.js";import"./useControlledState-JGLxFfPu.js";import"./Collection-BaJavd6-.js";import"./CollectionBuilder-DOQcLAsT.js";import"./SelectionIndicator-DWRc_aAr.js";import"./Separator-CPdY11g5.js";import"./SelectionManager-CzUgCcIX.js";import"./useEvent-CRzL3U9d.js";import"./useCollator-CQ6xU2WO.js";import"./FocusScope-COCAXuyM.js";import"./VisuallyHidden-C-SP4JvM.js";import"./AlertText-CYEytDO3.js";import"./AlertIcon-DN21MApN.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
