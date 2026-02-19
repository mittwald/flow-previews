import{j as r,r as F}from"./iframe-CXQlTNqj.js";import{L as l}from"./Label-Dp8rzwUw.js";import{F as o}from"./FileField-DOKPQALV.js";import{B as t}from"./Button-BlafpMbq.js";import{S as f}from"./Section-D3kMglmp.js";import{F as h}from"./FieldError-BB5Q0mgv.js";import{F as x}from"./FieldDescription-Ct_r0eGl.js";import{R as S,O as j}from"./IconWarning-qWu7I_Pu.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C6ZYuDSe.js";import"./index-BSs4nRRG.js";import"./index-AYGk-Z4X.js";import"./useLocalizedStringFormatter-B9SYg2k8.js";import"./context-CCBj18N5.js";import"./Label-DrfdLf3_.js";import"./utils-DV_byzth.js";import"./Hidden-CKkXVPeJ.js";import"./useFormValidation-CRz2e402.js";import"./useFocus-DfPsdBQQ.js";import"./useFocusRing-D1AlgOvW.js";import"./FieldError-CtbrQfSs.js";import"./Text-QCBVP_aW.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-CLvZry-y.js";import"./browser-C0g7jXxm.js";import"./useFieldComponent-Cn71_kOc.js";import"./Text-B3somVi7.js";import"./EmulatedBoldText-DjcO8VHN.js";import"./LoadingSpinner-Wa1FVRzC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-aElBUAr6.js";import"./Button-BcwVzCcr.js";import"./ProgressBar-DkaBE4Rp.js";import"./useLabel-DrjDs4EL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C3E8Ss2p.js";import"./useFocusable-D7YkDf-E.js";import"./ContextMenuSection-nZf_hQYT.js";import"./ActionBatch-CqBtrpsE.js";import"./useOverlayController-E6hXP07l.js";import"./useStatic-D-kx8TMY.js";import"./getActionGroupSlot-D2yWy39Q.js";import"./dynamic-UE7lg7x0.js";import"./Dialog-D3U2a9zn.js";import"./RSPContexts-CaXq0cAk.js";import"./OverlayArrow-sIEanX_d.js";import"./useControlledState-CC0ueLns.js";import"./Collection-TmQT-68Q.js";import"./CollectionBuilder-9Nd9UEc1.js";import"./SelectionIndicator-DQZUhYCh.js";import"./Separator-Bs-03xzt.js";import"./SelectionManager-CqkX1Rni.js";import"./useEvent-AkpP6oW4.js";import"./useCollator-BFpQRgzB.js";import"./FocusScope-Dqueyleg.js";import"./VisuallyHidden-bRUw4X6B.js";import"./AlertText-GJJuhpY7.js";import"./AlertIcon-B77GTCGL.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
