import{j as r,r as F}from"./iframe-tI_lG94_.js";import{L as l}from"./Label-CdVUwStZ.js";import{F as o}from"./FileField-DRx8vmec.js";import{B as t}from"./Button-WUI-ZJ9l.js";import{S as f}from"./Section-Zl-SwqAC.js";import{F as h}from"./FieldError-DYW7UPuf.js";import{F as x}from"./FieldDescription-CSWmc1EX.js";import{N as S,D as j}from"./IconWarning-BFYQkdin.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./index-CBk6rXlg.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./context-CBF_EHvQ.js";import"./Label-BRs8jfGQ.js";import"./utils-bmh-HeLH.js";import"./Hidden-xjuSUFbD.js";import"./useFormValidation--MR_E_GW.js";import"./useFocus-DCHopMY8.js";import"./FieldError-CdG59lLT.js";import"./Text-Bx7ijqLX.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-DTXfGVIZ.js";import"./useFocusRing-Dgbmnyxw.js";import"./browser-DuhBvQkx.js";import"./useFieldComponent-_Dyiwxtg.js";import"./Text-DDIuCQxA.js";import"./EmulatedBoldText-CqR-YL6D.js";import"./LoadingSpinner-KbaLfraT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CmKo-bli.js";import"./Button-EHR8zEQX.js";import"./ProgressBar-B0YygRTY.js";import"./useLabel-dT-ksHYF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C1ke7TUF.js";import"./useFocusable-BnM0ssdw.js";import"./ContextMenuSection-Co6pbj1l.js";import"./Action-CkhZi8kw.js";import"./context-Ci5c_Wjo.js";import"./useStatic-vWo9ean7.js";import"./getActionGroupSlot-DPvye52P.js";import"./dynamic-DqOiE30k.js";import"./Dialog-Bo5p_Zqr.js";import"./RSPContexts-C1ceWNax.js";import"./OverlayArrow-DuDGHp0O.js";import"./useControlledState-BE5RFE46.js";import"./Collection-DCiKuUl7.js";import"./CollectionBuilder-Bsyu2Qik.js";import"./SelectionIndicator-uIlcbJnR.js";import"./Separator-AUomIBZD.js";import"./SelectionManager-BHP7q8X0.js";import"./useEvent-CrsvrwL5.js";import"./useCollator-BwiXk11m.js";import"./FocusScope-Brgrzlff.js";import"./VisuallyHidden-sfQiOa3Q.js";import"./InlineAlert-DC2W_zeL.js";import"./AlertIcon-BkNTScum.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Dr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Er=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Er as __namedExportsOrder,Dr as default};
