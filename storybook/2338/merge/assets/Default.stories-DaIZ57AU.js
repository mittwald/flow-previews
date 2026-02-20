import{j as r,r as u}from"./iframe-BXGfha1q.js";import{L as p}from"./Label-DmvSuQEb.js";import{F as t}from"./FileField-CXrsXNKf.js";import{B as o}from"./Button-DfmOHFsC.js";import{S as F}from"./Section-DH7vXPsV.js";import{F as f}from"./FieldError-B0wR5GbE.js";import{F as h}from"./FieldDescription-B2zafCFx.js";import{R as x,O as S}from"./IconWarning-1Z1PxSqQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./Label-B_ylra4b.js";import"./utils-DDzB-hS3.js";import"./Hidden-CY2KAX5F.js";import"./useFormValidation-51U-qV9x.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./FieldError-B-_MD7Je.js";import"./Text-B1oZgTuN.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-DlEaT4nu.js";import"./browser-P6njm6Fr.js";import"./useFieldComponent-BBRXs3en.js";import"./Text-BbFupL_Y.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./LoadingSpinner-CnywtlQ4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DEIhwdad.js";import"./Button-DxgvyAFC.js";import"./ProgressBar-BSSI2Xkr.js";import"./useLabel-DPznQWXv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DFEm-gMh.js";import"./useFocusable-DT8F95KZ.js";import"./ContextMenuSection-DVxvJxxR.js";import"./ActionBatch-z52bmq8Z.js";import"./useOverlayController-yGpX5sn6.js";import"./useStatic-BExQ1RD0.js";import"./getActionGroupSlot-D3NhVtPT.js";import"./dynamic-Cx3iunOI.js";import"./Dialog-DLzuiFtz.js";import"./RSPContexts-CG0vEblW.js";import"./OverlayArrow-CHQlEDE0.js";import"./useControlledState-Wh-cgAjH.js";import"./Collection-On6X8qP5.js";import"./CollectionBuilder-CyFJ2rhO.js";import"./SelectionIndicator-DRZNhSye.js";import"./Separator-BLnBy1SU.js";import"./SelectionManager-BheZPocr.js";import"./useCollator-CF4rrgc2.js";import"./FocusScope-DorKcprJ.js";import"./VisuallyHidden-eEVd_sfi.js";import"./AlertText-D4bpqMRF.js";import"./AlertIcon-DqNX7jjv.js";const j=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=x("outline","paperclip","Paperclip",j),Ir={title:"Form Controls/FileField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},render:e=>r.jsxs(t,{...e,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"Supported formats: .pem, .pfx"})]})},s={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"File too large"})]})},a={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(S,{children:r.jsx(v,{})})})})},l={render:e=>{const[c,m]=u.useState(null),d=c?.[0];return r.jsxs(F,{children:[r.jsxs(t,{...e,onChange:m,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),d?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Lr=["Default","WithFieldDescription","WithFieldError","IconButton","WithHandler"];export{i as Default,a as IconButton,n as WithFieldDescription,s as WithFieldError,l as WithHandler,Lr as __namedExportsOrder,Ir as default};
