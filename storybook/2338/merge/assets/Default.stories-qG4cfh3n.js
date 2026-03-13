import{j as r,r as u}from"./iframe-BFddea_x.js";import{L as p}from"./Label-Cyz25dCh.js";import{F as t}from"./FileField-DIrLmr6H.js";import{B as o}from"./Button-DmFob37h.js";import{S as F}from"./Section-DorsmKJX.js";import{F as f}from"./FieldError-BfmusLP_.js";import{F as h}from"./FieldDescription-DqsHbSnc.js";import{R as x,O as S}from"./IconWarning-Cwahpn-Q.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./Label-DEW42_UF.js";import"./utils-D-aZUMcZ.js";import"./Hidden-CWxwpwFD.js";import"./useFormValidation-CYvJLeFF.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./FieldError-Dj7b6ixT.js";import"./Text-DndMRLn5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-DbK2aUtO.js";import"./browser-PH3BUHM2.js";import"./useFieldComponent-DrOhnKye.js";import"./Text-B70YymId.js";import"./EmulatedBoldText-C15EfUg3.js";import"./LoadingSpinner-BTSUDAP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DmjGOFpp.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DZQSLH7U.js";import"./useFocusable-D-17EkqH.js";import"./ContextMenuSection-C_9nT1gz.js";import"./ActionBatch-BLAWmMpV.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./dynamic-C85Jl_PG.js";import"./Dialog-Dko8Qxf5.js";import"./RSPContexts-DrvlE6Qo.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";const j=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=x("outline","paperclip","Paperclip",j),Lr={title:"Form Controls/FileField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},render:e=>r.jsxs(t,{...e,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"Supported formats: .pem, .pfx"})]})},s={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"File too large"})]})},a={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(S,{children:r.jsx(v,{})})})})},l={render:e=>{const[c,m]=u.useState(null),d=c?.[0];return r.jsxs(F,{children:[r.jsxs(t,{...e,onChange:m,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),d?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Dr=["Default","WithFieldDescription","WithFieldError","IconButton","WithHandler"];export{i as Default,a as IconButton,n as WithFieldDescription,s as WithFieldError,l as WithHandler,Dr as __namedExportsOrder,Lr as default};
