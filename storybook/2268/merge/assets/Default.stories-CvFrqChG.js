import{j as r,r as F}from"./iframe-iY_Mn_oy.js";import{L as l}from"./Label-3EuxSz5j.js";import{F as o}from"./FileField-D4LhgYrZ.js";import{B as t}from"./Button-BXdn408E.js";import{S as f}from"./Section-CuJxl25L.js";import{F as h}from"./FieldError-rrdHjYdT.js";import{F as x}from"./FieldDescription-DHPoAUPt.js";import{O as S,L as j}from"./IconWarning-B803z1sh.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./index-IKthRYIx.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./context-DIbVk5_z.js";import"./Label-DWRUfm9N.js";import"./utils-C-pMCGM-.js";import"./Hidden-BMoxskLs.js";import"./useFormValidation-B6OmY3vR.js";import"./useFocus-Nxno6ZgW.js";import"./FieldError-BP_EVNQV.js";import"./Text-CktBEW1F.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-B3denzrL.js";import"./useFocusRing-BNNZSKMh.js";import"./browser-DK9hE6UN.js";import"./useFieldComponent-Cxjop7r-.js";import"./Text-C2ZCo6gl.js";import"./EmulatedBoldText-CHIJjbeg.js";import"./LoadingSpinner-C14k5CPB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CIrN4__o.js";import"./Button-BELa7hv8.js";import"./ProgressBar-DKU-k64e.js";import"./useLabel-8EVB-03H.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B5dXj1sU.js";import"./useFocusable-Bi19l3La.js";import"./ContextMenuSection-DufqnfrN.js";import"./Action-iMWR4bsW.js";import"./context-AuWKQf6d.js";import"./useStatic-BNEy2A13.js";import"./getActionGroupSlot-DnzDvT0Q.js";import"./dynamic-CDOrKiJc.js";import"./Dialog-BSCAVunC.js";import"./RSPContexts-CRnPLFal.js";import"./OverlayArrow-KAH5W0sM.js";import"./useControlledState-DUH-ni6I.js";import"./Collection-p0j0j4rV.js";import"./CollectionBuilder-CBi7m5Jq.js";import"./SelectionIndicator-C9Y7msNP.js";import"./Separator-DvCWPy9d.js";import"./SelectionManager-jr_LZpLG.js";import"./useEvent-BHEixncs.js";import"./useCollator-Daexx-65.js";import"./FocusScope-Crvk_gLu.js";import"./VisuallyHidden-DEFkQEyo.js";import"./AlertText-BLXtcQ-I.js";import"./AlertIcon-Dw605mNU.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
