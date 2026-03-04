import{j as r,r as u}from"./iframe-CEWg6_IX.js";import{L as p}from"./Label-BaJSnICs.js";import{F as t}from"./FileField-v8If5qsj.js";import{B as o}from"./Button-CA6AkUR_.js";import{S as F}from"./Section-smxk9QAc.js";import{F as f}from"./FieldError-fCgHoEMk.js";import{F as h}from"./FieldDescription-BJFWlccI.js";import{R as x,O as S}from"./IconWarning-D3143lfN.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./Label-CW66CEku.js";import"./utils-VWmQzJjV.js";import"./Hidden-CWIFSP7u.js";import"./useFormValidation-przZuKLk.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./FieldError-B_BExaNJ.js";import"./Text-B3jOd0w4.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-DI2XwVnV.js";import"./browser-D6O_MAcc.js";import"./useFieldComponent-BOMK2S5G.js";import"./Text-Bw_cIJde.js";import"./EmulatedBoldText-DLcv393z.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BClk6GLL.js";import"./Button-Dhdc5WDI.js";import"./ProgressBar-U95AIiub.js";import"./useLabel-B6JubenB.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BNr3g4sC.js";import"./useFocusable-B3euEuZy.js";import"./ContextMenuSection-y3Qnt4sa.js";import"./ActionBatch-CnX-7Tzc.js";import"./useOverlayController-BjtWEYCu.js";import"./useStatic-B6Ppl0UQ.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./dynamic-JOnDgprM.js";import"./Dialog-0Ix26WHm.js";import"./RSPContexts-ulpMISZ-.js";import"./OverlayArrow-LwODxVqr.js";import"./useControlledState-DV7blYjC.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./FocusScope-BNRdhUBQ.js";import"./VisuallyHidden-DHhRta61.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";const j=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=x("outline","paperclip","Paperclip",j),Ir={title:"Form Controls/FileField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},render:e=>r.jsxs(t,{...e,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"Supported formats: .pem, .pfx"})]})},s={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"File too large"})]})},a={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(S,{children:r.jsx(v,{})})})})},l={render:e=>{const[c,m]=u.useState(null),d=c?.[0];return r.jsxs(F,{children:[r.jsxs(t,{...e,onChange:m,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),d?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
