import{j as r,r as F}from"./iframe-DnYi-t8H.js";import{L as l}from"./Label-DliS2X1j.js";import{F as o}from"./FileField-Bpa1UZXI.js";import{B as t}from"./Button-CGm1W1qT.js";import{S as f}from"./Section-BocAxRga.js";import{F as h}from"./FieldError-9-oFldGv.js";import{F as x}from"./FieldDescription-Dv0mKlK_.js";import{c as S,b as j}from"./IconApp-C4H0Rmt2.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiRXm_7W.js";import"./index-6rd6RhLs.js";import"./index-B9w1U9jw.js";import"./useLocalizedStringFormatter-D1M6ycSH.js";import"./context-BormPWP-.js";import"./Label-DpP4Z3U4.js";import"./utils-DErHybyt.js";import"./Hidden-D2dwjMI8.js";import"./useFormValidation-D4Tsj5aM.js";import"./useFocus-Cp5_bDzt.js";import"./FieldError-DFN_xfpl.js";import"./Text-CnHQzzWa.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-Ci5DOXXh.js";import"./useFocusRing-DBOpxQ6c.js";import"./browser-Cx51Q07l.js";import"./useFieldComponent-BC1W_qCr.js";import"./IconX-BXvP19pi.js";import"./IconCheck-Z-_98HG6.js";import"./Text-Bl1v2nei.js";import"./EmulatedBoldText-C_7kGQpM.js";import"./LoadingSpinner-COLacOyQ.js";import"./ariaLive-Cwd837L3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BR657ewb.js";import"./Button-DvsL5VIA.js";import"./ProgressBar-C0arnLiQ.js";import"./useLabel-CvNtERHu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSFKAxA8.js";import"./useFocusable-CJcfCTZ3.js";import"./ContextMenuSection-BLRCeISj.js";import"./lib-90ocxLs-.js";import"./Action-BbwnmsIN.js";import"./useStatic-nPTr3XXM.js";import"./getActionGroupSlot-D0nHzOJX.js";import"./context-EfU6UTnF.js";import"./dynamic-Bt-cD_bv.js";import"./Dialog-_g0NQG0c.js";import"./RSPContexts-fnRhq3x5.js";import"./OverlayArrow-Cdm9aZ0d.js";import"./useControlledState-CUB7XdW4.js";import"./Collection-Dl9RCK9z.js";import"./CollectionBuilder-Dz2l6Qz0.js";import"./SelectionIndicator-B3bHR6It.js";import"./Separator-DF_Ka3NA.js";import"./SelectionManager-D2Yq1xXP.js";import"./useEvent-BzaRCHg1.js";import"./useCollator-b7BSiHgL.js";import"./FocusScope-CymXO5HE.js";import"./VisuallyHidden-BnpIJKhq.js";import"./IconDanger-CDad_7H2.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Wr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Or=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Or as __namedExportsOrder,Wr as default};
