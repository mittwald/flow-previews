import{j as r,r as F}from"./iframe-Cz8_C8zY.js";import{L as l}from"./Label-gR0Y05hv.js";import{F as o}from"./FileField-CqFlBDAC.js";import{B as t}from"./Button-D15OVnQK.js";import{S as f}from"./Section-SSHhfNn0.js";import{F as h}from"./FieldError-CEw8HJGt.js";import{F as x}from"./FieldDescription-D3ZeP19z.js";import{M as S,C as j}from"./IconWarning-DLbRRuK1.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BcPJG4Ua.js";import"./index-Cdfsiuxw.js";import"./index-SrORw6vN.js";import"./useLocalizedStringFormatter-Bo3Sbs5c.js";import"./context-VkDhZA-x.js";import"./Label-2kcHPH94.js";import"./utils-BAKlH2Lm.js";import"./Hidden-CWAqagDm.js";import"./useFormValidation-DBiWbYgf.js";import"./useFocus-DFbFm1Xx.js";import"./FieldError-B254xHCi.js";import"./Text-Cr087Rh_.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-MUdQf2Tz.js";import"./useFocusRing-BDmU1dd9.js";import"./browser-B6rfwAqc.js";import"./useFieldComponent--MNREdev.js";import"./Text-YjLUuftS.js";import"./EmulatedBoldText-Dt-OzvRV.js";import"./LoadingSpinner-ClQMAkzE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-D3nX27fk.js";import"./Button-7cKgwoPB.js";import"./ProgressBar-CyaO-AON.js";import"./useLabel-BFm9pXXT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DcZz-lB5.js";import"./useFocusable-CJ-4fYj7.js";import"./ContextMenuSection-DUguC81d.js";import"./Action-aXgHP_6u.js";import"./context-usF9YeFM.js";import"./useStatic-DFVrJYQp.js";import"./getActionGroupSlot-DD9h-bxs.js";import"./dynamic-CeA3emBk.js";import"./Dialog-DK4i5yRx.js";import"./RSPContexts-CQQaQyDU.js";import"./OverlayArrow-CwaEkqIl.js";import"./useControlledState-C0o23ioH.js";import"./Collection-2S6_FH7n.js";import"./CollectionBuilder-CWbLFvvU.js";import"./SelectionIndicator-DD4cK7So.js";import"./Separator-2dOH-BB_.js";import"./SelectionManager-C5vFB_ZW.js";import"./useEvent-Wcg6Cj6E.js";import"./useCollator-B9bMczBX.js";import"./FocusScope-DR3pULV0.js";import"./VisuallyHidden-7uh1Rm92.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Ir={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Lr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Lr as __namedExportsOrder,Ir as default};
