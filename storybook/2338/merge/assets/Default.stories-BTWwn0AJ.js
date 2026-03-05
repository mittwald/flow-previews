import{j as r,r as u}from"./iframe-BcqfzoOA.js";import{L as p}from"./Label-CQjtN3Gn.js";import{F as t}from"./FileField-CUaTNiCH.js";import{B as o}from"./Button-C2msjhlA.js";import{S as F}from"./Section-B_QgMIam.js";import{F as f}from"./FieldError-COredAmn.js";import{F as h}from"./FieldDescription-BAMY7EMv.js";import{R as x,O as S}from"./IconWarning-Bupv8NYZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./index-AZuRIocR.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./Label-B-eADV2d.js";import"./utils-Bwp7PlhH.js";import"./Hidden-BSnUj9OE.js";import"./useFormValidation-BMgNFXni.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./FieldError-BECkkLSz.js";import"./Text-CALsrB3x.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-Bku180kF.js";import"./browser-CFz57TUe.js";import"./useFieldComponent-CSNqGKWj.js";import"./Text-1XRmWCfn.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./LoadingSpinner-ULzpGe8L.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-x3smQXnv.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Lauho74f.js";import"./useFocusable-B97W14wM.js";import"./ContextMenuSection-CYrr5VC5.js";import"./ActionBatch-D231mKj-.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./dynamic-CQVZMaTn.js";import"./Dialog-Ce_unDUt.js";import"./RSPContexts-D9SkabFV.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";const j=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=x("outline","paperclip","Paperclip",j),Ir={title:"Form Controls/FileField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},render:e=>r.jsxs(t,{...e,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"Supported formats: .pem, .pfx"})]})},s={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"File too large"})]})},a={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(S,{children:r.jsx(v,{})})})})},l={render:e=>{const[c,m]=u.useState(null),d=c?.[0];return r.jsxs(F,{children:[r.jsxs(t,{...e,onChange:m,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),d?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
