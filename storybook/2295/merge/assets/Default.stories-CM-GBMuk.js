import{j as r,r as F}from"./iframe-D016uj-S.js";import{L as l}from"./Label-CPn02_Ye.js";import{F as o}from"./FileField-TWaUhXpf.js";import{B as t}from"./Button-DbVylex6.js";import{S as f}from"./Section-DP_5z26A.js";import{F as h}from"./FieldError-CW77VWgH.js";import{F as x}from"./FieldDescription-B9DziDuG.js";import{N as S,K as j}from"./IconWarning-BQBcHsun.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-wtQiCPfr.js";import"./index-CfkcKJZT.js";import"./index-BqMc4IgT.js";import"./useLocalizedStringFormatter-CIw_JE4k.js";import"./context-CQQzrfiw.js";import"./Label-LkWds508.js";import"./utils-DQASSsuC.js";import"./Hidden-DpSCwLxf.js";import"./useFormValidation-Cq6iPNGO.js";import"./useFocus-tZAxz16O.js";import"./useFocusRing-BdU2-3MK.js";import"./FieldError-Db3WFp2b.js";import"./Text-DsGfukAy.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-CMqHHcBD.js";import"./browser-DLaO_aqG.js";import"./useFieldComponent-OnEMgUvv.js";import"./Text-BZY8Sc_P.js";import"./EmulatedBoldText-CEIO41Nr.js";import"./LoadingSpinner-Dcve79PX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CBH6kE0Y.js";import"./Button-Cna7ldBx.js";import"./ProgressBar-CXPYtOXa.js";import"./useLabel-DeeX-PEx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CVzN9kXH.js";import"./useFocusable-DeuIjFJe.js";import"./ContextMenuSection-eBZWNBFV.js";import"./Action-DF_37S4W.js";import"./context-BESBZ1Rk.js";import"./useStatic-Bbhetyj1.js";import"./getActionGroupSlot-DwZ8TTEt.js";import"./dynamic-7WCHGigE.js";import"./Dialog-ptAcXQW8.js";import"./RSPContexts-CjK5iojx.js";import"./OverlayArrow-BzkfNGFW.js";import"./useControlledState-cpMkF7RC.js";import"./Collection-BcXzzjbm.js";import"./CollectionBuilder-BgjMiTt7.js";import"./SelectionIndicator-BhBccG1G.js";import"./Separator-ByOk2cbm.js";import"./SelectionManager--rP1hhHv.js";import"./useEvent-BgqC1tZY.js";import"./useCollator-JAzbZwM3.js";import"./FocusScope-DtVgD18c.js";import"./VisuallyHidden-D5-LZtaI.js";import"./AlertText-0Z7TF0Nn.js";import"./AlertIcon-DUg_mU1Z.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
