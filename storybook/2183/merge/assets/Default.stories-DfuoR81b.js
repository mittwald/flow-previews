import{j as r,r as F}from"./iframe-Be6XOKZ5.js";import{L as l}from"./Label-BV6L8qwz.js";import{F as o}from"./FileField-CBpVQKSR.js";import{B as t}from"./Button-BryZpx7e.js";import{S as f}from"./Section-BTWBVwqS.js";import{F as h}from"./FieldError-nKJnRYyC.js";import{F as x}from"./FieldDescription-C8t-LyGN.js";import{c as S,b as j}from"./IconApp-BnAy9RaD.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-6mfYofmL.js";import"./index-BVQeIHXT.js";import"./index-Dwi0F_ix.js";import"./useLocalizedStringFormatter-D98CS6hT.js";import"./context-Y40TL0Hk.js";import"./Label-Da4d84kD.js";import"./utils-DTrZMB6V.js";import"./Hidden-B9nXAMyK.js";import"./useFormValidation-DMz_tWT4.js";import"./useFocus-DYvnwNR4.js";import"./FieldError-eVRm8xCS.js";import"./Text-BTmMxR_a.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-B17NRXjc.js";import"./useFocusRing-B31Et6wQ.js";import"./browser-DsJM6Avf.js";import"./useFieldComponent-DyzWtSt-.js";import"./IconX-IgnkgWW1.js";import"./IconCheck-BAgPnW-l.js";import"./Text-BB90vNXB.js";import"./EmulatedBoldText-BA4PJkye.js";import"./LoadingSpinner-CCyY2N1z.js";import"./ariaLive-BV9_iZAk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-D-Pq4nVM.js";import"./Button-CnLdg8UY.js";import"./ProgressBar-rm9lHQqR.js";import"./useLabel-DMWHK1ZY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CK7mbUzy.js";import"./useFocusable-DlKb8H3E.js";import"./ContextMenuSection-Dcu1peX7.js";import"./lib-90ocxLs-.js";import"./Action-DlMDZkrW.js";import"./useStatic-ChLd1gy1.js";import"./getActionGroupSlot-C22isMYd.js";import"./context-DNuic7EB.js";import"./dynamic-CbSjc9zn.js";import"./Dialog-D_uiNSw9.js";import"./RSPContexts-ukpjCqjI.js";import"./OverlayArrow-C8LdGvT4.js";import"./useControlledState-D8v_kqVI.js";import"./Collection-9Rz1Z382.js";import"./CollectionBuilder-TiwdMYff.js";import"./SelectionIndicator-CQaSWhBM.js";import"./Separator-B8NszCgW.js";import"./SelectionManager-BUAbzA69.js";import"./useEvent-B2MQOoAh.js";import"./useCollator-daqLYSV2.js";import"./FocusScope-BGhm_0o7.js";import"./VisuallyHidden-G45Y0eAf.js";import"./IconDanger-CuHxVEgS.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Wr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Or=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Or as __namedExportsOrder,Wr as default};
