import{j as r,r as F}from"./iframe-jPI25t47.js";import{L as l}from"./Label-CVxkn5sg.js";import{F as o}from"./FileField-CNC7m77b.js";import{B as t}from"./Button-CMdL10Ys.js";import{S as f}from"./Section-wgX4yeQq.js";import{F as h}from"./FieldError-DPfGZS1P.js";import{F as x}from"./FieldDescription-BijM-gJh.js";import{R as S,O as j}from"./IconWarning-D8uDJDej.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./index-mBlsDuvj.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./context-yJg27e0-.js";import"./Label-gIBQebAF.js";import"./utils-DssEHlsW.js";import"./Hidden-BHJ1gGty.js";import"./useFormValidation-aAlw1sTR.js";import"./useFocus-DZAeMhz-.js";import"./useFocusRing-PgP7-E1A.js";import"./FieldError-C3mwkvrq.js";import"./Text-BUiBuDRU.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-DUaj7rN4.js";import"./browser-BKdBfXKE.js";import"./useFieldComponent-CHdLkU8r.js";import"./Text-CzRKl4Rn.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./LoadingSpinner-DhHtGG23.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-B_as-6Bm.js";import"./Button-GVmiAxmL.js";import"./ProgressBar-BB7XDz1a.js";import"./useLabel-CJgKbpp_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bv9bKc9w.js";import"./useFocusable-YzLAhItH.js";import"./ContextMenuSection-BG427zDb.js";import"./ActionBatch-DVEQdHps.js";import"./useOverlayController-Cy5LcSUF.js";import"./useStatic-Be080qZz.js";import"./getActionGroupSlot-Dnhmurp_.js";import"./dynamic-DcvTJJQa.js";import"./Dialog-C4XHiXzR.js";import"./RSPContexts-COITpNJr.js";import"./OverlayArrow-2srpU7pW.js";import"./useControlledState-CujVadxA.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./Separator-DfJMhgbG.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./useCollator-TV1MmAHK.js";import"./FocusScope-QARcb0VX.js";import"./VisuallyHidden-vrC_Lu36.js";import"./AlertText-D2z5AzT8.js";import"./AlertIcon-HKJqs1Pu.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
