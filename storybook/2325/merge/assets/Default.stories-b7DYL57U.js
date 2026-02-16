import{j as r,r as F}from"./iframe-H3UGI_HB.js";import{L as l}from"./Label-BgH6R3x8.js";import{F as o}from"./FileField-BCWbnuUV.js";import{B as t}from"./Button-fzixWt9q.js";import{S as f}from"./Section-BwDtX3u0.js";import{F as h}from"./FieldError-wcTb1U2C.js";import{F as x}from"./FieldDescription-Br0Af-ga.js";import{R as S,O as j}from"./IconWarning-D9BgjB6B.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-RxwhG80E.js";import"./index-D6GAEjHP.js";import"./index-BJWFQYe5.js";import"./useLocalizedStringFormatter-w61_e3zI.js";import"./context-BGVDv2KD.js";import"./Label-CZuC8vWV.js";import"./utils-DSogMYdc.js";import"./Hidden-DoBcQ2Eg.js";import"./useFormValidation-DekRXblw.js";import"./useFocus-DQ3i5Klp.js";import"./useFocusRing-DrWQa_14.js";import"./FieldError-Be1mQ-cQ.js";import"./Text-UIHj6j-v.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-CefV5Kvm.js";import"./browser-xqq3Xy_w.js";import"./useFieldComponent-Bj80Ne3v.js";import"./Text-B0lwY8q7.js";import"./EmulatedBoldText-DRHBUbf1.js";import"./LoadingSpinner-r6z_bU0O.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-uffOWPGy.js";import"./Button-5W_fyVDJ.js";import"./ProgressBar-Diyn8Lqp.js";import"./useLabel-CtoVShGG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CSCW4wCL.js";import"./useFocusable-BYwgOLI_.js";import"./ContextMenuSection-DZ6NPIaP.js";import"./ActionBatch-TsHiTfcO.js";import"./useOverlayController-3aktaPy5.js";import"./useStatic-CxHSWaOd.js";import"./getActionGroupSlot-B9ZNFQ5y.js";import"./dynamic-DBkJoO-a.js";import"./Dialog-DKMSACkI.js";import"./RSPContexts-BrswSFX-.js";import"./OverlayArrow-C-E8ydRe.js";import"./useControlledState-DkMic-Ic.js";import"./Collection-WGKH_Dnj.js";import"./CollectionBuilder-Ba2_Q0LP.js";import"./SelectionIndicator-BgUtvt2H.js";import"./Separator-Q9pbsAsV.js";import"./SelectionManager-Bqz8XsWW.js";import"./useEvent-ChUOYfSF.js";import"./useCollator--V7CwpxI.js";import"./FocusScope-DjcW1lzL.js";import"./VisuallyHidden-BGP1Ifbj.js";import"./AlertText-CQfakUvk.js";import"./AlertIcon-Cb5scZh6.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
