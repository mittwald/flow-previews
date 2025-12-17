import{j as r,r as F}from"./iframe-D2Ryv2XM.js";import{L as l}from"./Label-Dm7SPIiB.js";import{F as o}from"./FileField-BLIGsWns.js";import{B as t}from"./Button-0ymElbGx.js";import{S as f}from"./Section-B5eWJ7cO.js";import{F as h}from"./FieldError-Df9KKLMS.js";import{F as x}from"./FieldDescription-CYrFJZP5.js";import{c as S,b as j}from"./IconApp-D72ec8J0.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-P0LvaFxL.js";import"./index-DQBbrLYy.js";import"./index-C63C9hiI.js";import"./useLocalizedStringFormatter-D3q43d5z.js";import"./context-nMHmB_Zz.js";import"./Label-BRB94mKh.js";import"./utils-BqLZYyR8.js";import"./Hidden-BS4L5nhJ.js";import"./useFormValidation-DGXgC3JE.js";import"./useFocus-CHBEY2MC.js";import"./FieldError-CWHVrlnl.js";import"./Text-D7v3tGEm.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-B6UkKbKT.js";import"./useFocusRing-Bonkbq1h.js";import"./browser-k7JOs1GI.js";import"./useFieldComponent-w9ZrCArw.js";import"./IconX-DZdRXBmP.js";import"./IconCheck-Bb3WY8_H.js";import"./Text-BztGJEd5.js";import"./EmulatedBoldText-j8ZSwmcB.js";import"./LoadingSpinner-BrbkAsB7.js";import"./ariaLive-CUFvfrWF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-c0PQzJc6.js";import"./Button-CBxmpU8U.js";import"./ProgressBar-Ftd9nhbH.js";import"./useLabel-xl5SJTPu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-oTeUo0kc.js";import"./useFocusable-DzubWnzm.js";import"./ContextMenuSection-jWpLoqR_.js";import"./lib-90ocxLs-.js";import"./Action-P2r8aGEo.js";import"./useStatic-Dp5ohCc9.js";import"./getActionGroupSlot-W54WmM0W.js";import"./context-FPyrczIP.js";import"./dynamic-CYMBERZG.js";import"./Dialog-Dv3Dn_KI.js";import"./RSPContexts-B-8XijCb.js";import"./OverlayArrow-DTmL_qI5.js";import"./useControlledState-B1ZkKesc.js";import"./Collection-jKLygJGW.js";import"./CollectionBuilder-Da9Ni7nz.js";import"./SelectionIndicator-B0cJwLAx.js";import"./Separator-BR_z4vVr.js";import"./SelectionManager-vwj_R8g4.js";import"./useEvent-OdyTuNWc.js";import"./useCollator-ZYyR423s.js";import"./FocusScope-1u2Sr5XR.js";import"./VisuallyHidden-CLaEN95T.js";import"./IconDanger-DUFERqG9.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Wr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
