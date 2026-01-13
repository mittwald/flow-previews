import{j as r,r as F}from"./iframe-D5OSMSYj.js";import{L as l}from"./Label-CF1-K3Zk.js";import{F as o}from"./FileField-DCLmOAE7.js";import{B as t}from"./Button-DTe5su69.js";import{S as f}from"./Section-Dz5Ps6FG.js";import{F as h}from"./FieldError-DkXkFVgN.js";import{F as x}from"./FieldDescription--3BD_Kcq.js";import{O as S,L as j}from"./IconWarning-aBoV8v8e.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./index-Bwk6EGM5.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./context-CCC3vGzE.js";import"./Label-Bh0iBwH8.js";import"./utils-B2fStg81.js";import"./Hidden-NmD_pG7l.js";import"./useFormValidation-BzDFxNXO.js";import"./useFocus-C6h-AdFL.js";import"./FieldError-SdvWZoRR.js";import"./Text-DxpiEtGq.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-DK63hDT9.js";import"./useFocusRing-D5zyjxEp.js";import"./browser-CPg_spJX.js";import"./useFieldComponent-yQbkUBpw.js";import"./Text-DAhCT_ah.js";import"./EmulatedBoldText-Dm6vKeJS.js";import"./LoadingSpinner-BD9yQcJP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DoBIDVY0.js";import"./Button-CTfGmXCg.js";import"./ProgressBar-Dg6iR4wK.js";import"./useLabel-CQkx52KA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Db_mMnan.js";import"./useFocusable-BBmYajA6.js";import"./ContextMenuSection-DdCYek15.js";import"./Action-7Qb19ota.js";import"./context-g3auhbgQ.js";import"./useStatic-Ct4NfCBd.js";import"./getActionGroupSlot-BAkzknoy.js";import"./dynamic-B1x5IqP1.js";import"./Dialog-DOlt_k3K.js";import"./RSPContexts-BzWalm_3.js";import"./OverlayArrow-Ck8v0z1s.js";import"./useControlledState-BLX_f1Wx.js";import"./Collection-DJCIfP6r.js";import"./CollectionBuilder-b-gCN1Vs.js";import"./SelectionIndicator-BCMQtvaW.js";import"./Separator-BUClO3qk.js";import"./SelectionManager-flPals8o.js";import"./useEvent-Bc0Gn0fF.js";import"./useCollator-BW95ADKZ.js";import"./FocusScope-fzjvqtWs.js";import"./VisuallyHidden-arLJjMse.js";import"./AlertText-BnzdsAWE.js";import"./AlertIcon-CDVTToII.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
