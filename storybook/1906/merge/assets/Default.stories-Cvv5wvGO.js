import{j as r,r as F}from"./iframe-S6a6IBGW.js";import{L as l}from"./Label-caCQNiXZ.js";import{F as o}from"./FileField-CU8l6sX0.js";import{B as t}from"./Button-B33IEcV3.js";import{S as f}from"./Section-C9-cQ6KY.js";import{F as h}from"./FieldError-BcgoZm7g.js";import{F as x}from"./FieldDescription-BbDHCmf8.js";import{O as S,L as j}from"./IconWarning-D0GzEl3K.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BLLiPPDy.js";import"./index-l1wA_Qpp.js";import"./index-C8QsAo4A.js";import"./useLocalizedStringFormatter-DpHStB2_.js";import"./context-CXquv49b.js";import"./Label-DxhkDnS7.js";import"./utils-B8ercvf4.js";import"./Hidden-CVYoRnxj.js";import"./useFormValidation-DHFSk2Ol.js";import"./useFocus--oJxMCZo.js";import"./FieldError-BRuAmhML.js";import"./Text-XPHoRcaC.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-BCdJg_3v.js";import"./useFocusRing-pCPuJRtg.js";import"./browser-C6w_OiT9.js";import"./useFieldComponent-C7YS4lAg.js";import"./Text-CLecf1p6.js";import"./EmulatedBoldText-PjFBcLAJ.js";import"./LoadingSpinner-ngl346gH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CCjzztUh.js";import"./Button-BnRrl5N8.js";import"./ProgressBar-f-zsGPPU.js";import"./useLabel-I1naabyM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BUR3MtQf.js";import"./useFocusable-DTyt-kbS.js";import"./ContextMenuSection-CXnCaYUl.js";import"./Action-D3nLwb6j.js";import"./context-DRdj7qWz.js";import"./useStatic-DJ0VynuZ.js";import"./getActionGroupSlot-13Cq_BqQ.js";import"./dynamic-wFxxwS8T.js";import"./Dialog-C_QuIxo5.js";import"./RSPContexts-DL3JmftS.js";import"./OverlayArrow-B-DFCcpR.js";import"./useControlledState-BHa0sYDq.js";import"./Collection-BbaIJWHd.js";import"./CollectionBuilder-Cv1bZrpu.js";import"./SelectionIndicator-DSvv5afS.js";import"./Separator-CvanrP9u.js";import"./SelectionManager-Bk0PvS8a.js";import"./useEvent--nB5Gcy3.js";import"./useCollator-DUo0f6hW.js";import"./FocusScope-BEprXHob.js";import"./VisuallyHidden-BN0xrgav.js";import"./AlertText-CIQFF9OC.js";import"./AlertIcon-DgqrgpKu.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
