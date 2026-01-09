import{j as r,r as F}from"./iframe-BeQWUZkN.js";import{L as l}from"./Label-B2Ym8roL.js";import{F as o}from"./FileField-CZJK4XVM.js";import{B as t}from"./Button-CGVqLO1a.js";import{S as f}from"./Section-BPuqexdG.js";import{F as h}from"./FieldError-BcvtKrk-.js";import{F as x}from"./FieldDescription-DmDXfwSl.js";import{O as S,L as j}from"./IconWarning-BINGtqrd.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C5zRFTyN.js";import"./index-1B1ExeLK.js";import"./index-C7QqpnOV.js";import"./useLocalizedStringFormatter-BinbCyOY.js";import"./context-BW8umLlU.js";import"./Label-CrwWIO9R.js";import"./utils-DahaGO1Z.js";import"./Hidden-CGYC7LW_.js";import"./useFormValidation-enT2NaDW.js";import"./useFocus-B8WX1wz4.js";import"./FieldError-D83BnXEF.js";import"./Text-oRZAcHnn.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-DQvG8v1g.js";import"./useFocusRing-plkuiMUL.js";import"./browser-CC8M21FF.js";import"./useFieldComponent-Df_LAOUO.js";import"./Text-DBLOUBNs.js";import"./EmulatedBoldText-Ds4ybabF.js";import"./LoadingSpinner-BzbdJJnJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BjhB0wla.js";import"./Button-CL6J7LkF.js";import"./ProgressBar-DrS-kVcX.js";import"./useLabel-Bej11zP_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DC5PU-Mt.js";import"./useFocusable-5ZG33T1u.js";import"./ContextMenuSection-of5hagQh.js";import"./Action-E4S27TIO.js";import"./context-C8zS221N.js";import"./useStatic-H-gT8Tnv.js";import"./getActionGroupSlot-Mt7aWTck.js";import"./dynamic-CY8Jd6pV.js";import"./Dialog-BcNKaqXQ.js";import"./RSPContexts-3R6axPUC.js";import"./OverlayArrow-CQhuNf01.js";import"./useControlledState-CVKu2BVA.js";import"./Collection-BT4mtoIi.js";import"./CollectionBuilder-8XmSCxqz.js";import"./SelectionIndicator-CpkhsEOb.js";import"./Separator-jKx-ftTc.js";import"./SelectionManager-g_157G_P.js";import"./useEvent-D73bdPYV.js";import"./useCollator-BitTSQ9h.js";import"./FocusScope-BFFCHkyv.js";import"./VisuallyHidden-Dai9OIPt.js";import"./AlertText-zAJvVLJZ.js";import"./AlertIcon-Bvyhnsbm.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
