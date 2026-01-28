import{j as r,r as F}from"./iframe-DQPKoo92.js";import{L as l}from"./Label-Og-F06uZ.js";import{F as o}from"./FileField-DX9n5cnU.js";import{B as t}from"./Button-0l0f_jx8.js";import{S as f}from"./Section-CU_KJgGZ.js";import{F as h}from"./FieldError-IxBtEnB-.js";import{F as x}from"./FieldDescription-TOm-cQme.js";import{N as S,K as j}from"./IconWarning-CpLICj99.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVIe49dZ.js";import"./index-B3Bpj3GD.js";import"./index-CnP3WCIP.js";import"./useLocalizedStringFormatter-CbBU4IdI.js";import"./context-CJqjcP4U.js";import"./Label-DrxyNCZO.js";import"./utils-XAdJPTNp.js";import"./Hidden-BalHJt_t.js";import"./useFormValidation-B8bsM8-M.js";import"./useFocus-BE88ppMu.js";import"./useFocusRing-Cni30Eah.js";import"./FieldError-C-pwln9P.js";import"./Text-Y949w0K8.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-MWzFGwJT.js";import"./browser-ChlnFVHS.js";import"./useFieldComponent-BKiBq2W6.js";import"./Text-C51WlGhJ.js";import"./EmulatedBoldText-ZCYLfeIO.js";import"./LoadingSpinner-B8goxKJR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BNYVvti7.js";import"./Button-C7sB4TeW.js";import"./ProgressBar-Cy5AjeoP.js";import"./useLabel-DkBHutKV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ByCBMVLm.js";import"./useFocusable-DX4YK8A-.js";import"./ContextMenuSection-BCwogbjE.js";import"./Action-DXbaOV3K.js";import"./context-Fi_0LQNU.js";import"./useStatic-AmwUmW1y.js";import"./getActionGroupSlot-BNoomJEc.js";import"./dynamic-DGh7GyZ8.js";import"./Dialog-DjFTJjHY.js";import"./RSPContexts-C1KLf5C0.js";import"./OverlayArrow-CG2s7j2J.js";import"./useControlledState-CudIhSdL.js";import"./Collection-YBemO0n0.js";import"./CollectionBuilder-n6Ro7SqS.js";import"./SelectionIndicator-DugKwRvD.js";import"./Separator-CC-j5b8u.js";import"./SelectionManager-0yrNUuw-.js";import"./useEvent-CfqveZ0P.js";import"./useCollator-BoFTkl_Q.js";import"./FocusScope-CJXytNJ4.js";import"./VisuallyHidden-Dk42l2-2.js";import"./AlertText-C5_JXWa-.js";import"./AlertIcon-v4rlNZlK.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
