import{j as r,r as F}from"./iframe-CIXg2wml.js";import{L as l}from"./Label-qxc1gCGy.js";import{F as o}from"./FileField-DnLhkXsu.js";import{B as t}from"./Button-BNUMHVa-.js";import{S as f}from"./Section-BHH0DwO5.js";import{F as h}from"./FieldError-BH2vnwI0.js";import{F as x}from"./FieldDescription-Ca0n3MzM.js";import{O as S,L as j}from"./IconWarning-CiSujg9K.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-2SDDcL6i.js";import"./index-stwZ4S38.js";import"./index-CUACQQJf.js";import"./useLocalizedStringFormatter-DQ68Yc1-.js";import"./context-TKY6ae7T.js";import"./Label-DkYkYhBQ.js";import"./utils-E3QCR4Ei.js";import"./Hidden-CGz-Nf89.js";import"./useFormValidation-B5rYBS3I.js";import"./useFocus-Xgz2P1v-.js";import"./FieldError-B2EiL9vq.js";import"./Text-BTcAnKOQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-DGQ1K2ts.js";import"./useFocusRing-CJfArHTm.js";import"./browser-CYeJE0Iy.js";import"./useFieldComponent-D7V8J4vf.js";import"./Text-ClE4EaJv.js";import"./EmulatedBoldText--LsvyM20.js";import"./LoadingSpinner-DwfvHd6g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-8tD3tcl0.js";import"./Button-BbDeItRQ.js";import"./ProgressBar-CFDr9Wxg.js";import"./useLabel-pvILaDrT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C_LDf41x.js";import"./useFocusable-LSbGRyyR.js";import"./ContextMenuSection-C_CrFgfB.js";import"./Action-BuQCX6jm.js";import"./context-CXkwD4h5.js";import"./useStatic-CosBs7oI.js";import"./getActionGroupSlot-DDSDNzLp.js";import"./dynamic-DkFDoLPd.js";import"./Dialog-f9GqGINB.js";import"./RSPContexts-CMEo-sGH.js";import"./OverlayArrow-Bgb8SBf8.js";import"./useControlledState-euBd3hty.js";import"./Collection-PnRWL8bH.js";import"./CollectionBuilder-CsxYH4iw.js";import"./SelectionIndicator-Ck0MHypk.js";import"./Separator-BD9AYapb.js";import"./SelectionManager-C-rzUvsK.js";import"./useEvent-D8tLlxQx.js";import"./useCollator-nDdvYdK7.js";import"./FocusScope-BVD53JA4.js";import"./VisuallyHidden-XLC_SZ8x.js";import"./AlertText-Cyx_yayU.js";import"./AlertIcon-DJUqjVOR.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
