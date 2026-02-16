import{j as r,r as F}from"./iframe-C5ZTNo7B.js";import{L as l}from"./Label-D_0GeMuu.js";import{F as o}from"./FileField-DFIOaTs2.js";import{B as t}from"./Button-CTD3uiWd.js";import{S as f}from"./Section-HUKpeM8o.js";import{F as h}from"./FieldError-BDB9mSsz.js";import{F as x}from"./FieldDescription-COkKjWuk.js";import{R as S,O as j}from"./IconWarning-Bhk_rtuP.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C74LPcu8.js";import"./index-DezMBlvl.js";import"./index-L0hXSSnD.js";import"./useLocalizedStringFormatter-CDqYfAHq.js";import"./context-Zfd40gqJ.js";import"./Label-BSZlsNs_.js";import"./utils-BuDA3Ujk.js";import"./Hidden-U4jsQoYY.js";import"./useFormValidation-CtRrQmcu.js";import"./useFocus-wNGus_RY.js";import"./useFocusRing-rbh4dKQ_.js";import"./FieldError-CU71BOGK.js";import"./Text-DfHOPDAf.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-DU4gQuZk.js";import"./browser-CszbwzXz.js";import"./useFieldComponent-hFC9tXxl.js";import"./Text-vc01bOb1.js";import"./EmulatedBoldText-DrBpqUUw.js";import"./LoadingSpinner-DA9Opfj3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DVpXA9eO.js";import"./Button-B6XpNhBF.js";import"./ProgressBar-D_9cWfd2.js";import"./useLabel-BfXWSkVN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ef-k5VSc.js";import"./useFocusable-DlWx3Zdp.js";import"./ContextMenuSection-B0O-s6DP.js";import"./ActionBatch-DQnznSVa.js";import"./useOverlayController-DKmEbncM.js";import"./useStatic-yr3GM-AX.js";import"./getActionGroupSlot-D914C5WA.js";import"./dynamic-Bw3_nZ9y.js";import"./Dialog-n3Xabcyo.js";import"./RSPContexts-BwPNB4Pl.js";import"./OverlayArrow-F8uV4qkU.js";import"./useControlledState-e_mWhKHk.js";import"./Collection-CZnzaiUv.js";import"./CollectionBuilder-BNhwwjuE.js";import"./SelectionIndicator-CrR9Mcxf.js";import"./Separator-BabRRkw2.js";import"./SelectionManager-MjLIZfUi.js";import"./useEvent-BqK5cB2S.js";import"./useCollator-CAZNHi0m.js";import"./FocusScope-PkAgaAiM.js";import"./VisuallyHidden-eGwjz06V.js";import"./AlertText-EmpeosBS.js";import"./AlertIcon-Da43IrrR.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
