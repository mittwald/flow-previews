import{j as r,r as F}from"./iframe-D7SrQHv2.js";import{L as l}from"./Label-77ddNxr9.js";import{F as o}from"./FileField-BQtQLA9J.js";import{B as t}from"./Button-BDlkh_ZH.js";import{S as f}from"./Section-8dl5sO8X.js";import{F as h}from"./FieldError-Cd_0vMJA.js";import{F as x}from"./FieldDescription-8yynaeWp.js";import{c as S,d as j}from"./IconChevronDown-CXRERNRA.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CdkQ0XB3.js";import"./index-CCC8SqCu.js";import"./index-CJAJ5du0.js";import"./useLocalizedStringFormatter-CSuZD65V.js";import"./context-B_BzGt6a.js";import"./Label-mdRoqDLO.js";import"./utils-CiuuAwJm.js";import"./Hidden-4rkKn0h6.js";import"./useFormValidation-LvcU-ucb.js";import"./useFocus-BORqc-Rv.js";import"./FieldError-B-ueBDjj.js";import"./Text-BPF9cVJc.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-H0beOHaq.js";import"./useFocusRing-DLDXyuvP.js";import"./browser-DrK2T41E.js";import"./useFieldComponent-Cu1xRHEa.js";import"./IconX-YfbAbyEb.js";import"./IconCheck-COidvS8_.js";import"./Text-DGpwmxCB.js";import"./EmulatedBoldText-ChURRL1S.js";import"./LoadingSpinner-DamTO0x3.js";import"./ariaLive-Q32cUtZw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DGKmlYcY.js";import"./Button-CGLL8cMT.js";import"./ProgressBar-BmurXtXH.js";import"./useLabel-B1Ghq-Vq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DfsmQJPe.js";import"./useFocusable-7SxWl0Ga.js";import"./ContextMenuSection-C543Zwy4.js";import"./lib-90ocxLs-.js";import"./Action-DB8rk5cM.js";import"./useStatic-D8BNL5i4.js";import"./getActionGroupSlot-CTkBqXfr.js";import"./context-CVbxfW-6.js";import"./dynamic-CUG3tgkH.js";import"./Dialog-CW3mhUGv.js";import"./RSPContexts-BbVjh3iw.js";import"./OverlayArrow-BXm03fKW.js";import"./useControlledState-Cadz1yCZ.js";import"./Collection-CZosAz-h.js";import"./CollectionBuilder-_0MC8FEk.js";import"./SelectionIndicator-CCNZqYbX.js";import"./Separator-BakLcgEu.js";import"./SelectionManager-CL7Yq_XD.js";import"./useEvent-B0YrkZQx.js";import"./useCollator-CdHH68uY.js";import"./FocusScope-rpDCGS-B.js";import"./VisuallyHidden-BTFx-uOK.js";import"./IconDanger-Bz8n8vBB.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Wr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
