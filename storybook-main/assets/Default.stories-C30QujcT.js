import{j as r,r as F}from"./iframe-DwsGXJVG.js";import{L as l}from"./Label-DOR8D5QK.js";import{F as o}from"./FileField-BPIAFk3Z.js";import{B as t}from"./Button-CqL_vLUu.js";import{S as f}from"./Section-BZCnXK6X.js";import{F as h}from"./FieldError-BPT_klMb.js";import{F as x}from"./FieldDescription-x5frt87g.js";import{R as S,O as j}from"./IconWarning-Ci9l-8b2.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-qxgtoIlH.js";import"./index-Bl29J3nk.js";import"./index-Z94wDe_B.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./context-aVGfmL8k.js";import"./Label-C5wfq0Kb.js";import"./utils-DRn9wprx.js";import"./Hidden-CJnCNBv0.js";import"./useFormValidation-Bdpbh0WL.js";import"./useFocus-DIaiJ-NX.js";import"./useFocusRing-DdmspiUG.js";import"./FieldError-BZQRredP.js";import"./Text-_i5SHi6c.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-B80smJAQ.js";import"./browser-Cz_VorJk.js";import"./useFieldComponent-BobnjoTA.js";import"./Text-BV6qM8pO.js";import"./EmulatedBoldText-C-itzyky.js";import"./LoadingSpinner-DKEuwZ4C.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-Co6v5gQ1.js";import"./Button-m4IzIabh.js";import"./ProgressBar-C9wD8OqZ.js";import"./useLabel-DGPoQV-x.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CckbZpi5.js";import"./useFocusable-s83SGTZ-.js";import"./ContextMenuSection-X-b9aW1Y.js";import"./ActionBatch-CjTnBW9C.js";import"./useOverlayController-Bn3a-KRG.js";import"./useStatic-BwWlrMEh.js";import"./getActionGroupSlot-BRP57hZk.js";import"./dynamic-CY6fGUGp.js";import"./Dialog-M15I_L87.js";import"./RSPContexts-CFeGdYTg.js";import"./OverlayArrow-DURPAUST.js";import"./useControlledState-CRB4bW25.js";import"./Collection-BGu_nwcH.js";import"./CollectionBuilder-B17IJuT1.js";import"./SelectionIndicator-BqSVIa4a.js";import"./Separator-BaZLZFLd.js";import"./SelectionManager-TlInvFTF.js";import"./useEvent-nJ48QMBy.js";import"./useCollator-GdkhHcGA.js";import"./FocusScope-4Fd3tZfM.js";import"./VisuallyHidden-Fvx90J8z.js";import"./AlertText-D-LhYLA_.js";import"./AlertIcon-BhWII3Mz.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
