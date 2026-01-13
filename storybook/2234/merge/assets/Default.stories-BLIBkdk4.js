import{j as r,r as F}from"./iframe-y-Qy_Rwm.js";import{L as l}from"./Label-DwZ1nY2p.js";import{F as o}from"./FileField-HnaaON9e.js";import{B as t}from"./Button-BD4RfixQ.js";import{S as f}from"./Section-C7Uhv2VD.js";import{F as h}from"./FieldError-CHdxAWDK.js";import{F as x}from"./FieldDescription-CpWKNI_h.js";import{O as S,L as j}from"./IconWarning-CSZkcfVi.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ChH3J7dR.js";import"./index-CyDBTnD6.js";import"./index-DHyBIfcz.js";import"./useLocalizedStringFormatter-BuF0P38W.js";import"./context-ukqkFony.js";import"./Label-B71VVe9p.js";import"./utils-Ek_OXClQ.js";import"./Hidden-D2H3G8L4.js";import"./useFormValidation-49dCeNRi.js";import"./useFocus-L_xbSTvo.js";import"./FieldError-B0Ilb29D.js";import"./Text-BUjonAbB.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-YVfVzY4s.js";import"./useFocusRing-TFugmXCf.js";import"./browser-BkGSrLgH.js";import"./useFieldComponent-BPtwnKvp.js";import"./Text-Dc6HCiIC.js";import"./EmulatedBoldText-BWRuiDih.js";import"./LoadingSpinner-CaEX00sr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DXSfp6Hy.js";import"./Button-CDSdTdYv.js";import"./ProgressBar-Bi5AZMSy.js";import"./useLabel-oIpNFQLF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ginTfsZX.js";import"./useFocusable-BPLcErJ9.js";import"./ContextMenuSection-UUsl5yAi.js";import"./Action-DCkGWMlj.js";import"./context-CYZaYtgr.js";import"./useStatic-6QMcNdFE.js";import"./getActionGroupSlot-BtmlVZy9.js";import"./dynamic-DOzqWg4O.js";import"./Dialog-yt0PwtsU.js";import"./RSPContexts-D6kJ8Blw.js";import"./OverlayArrow-BfgbGjhP.js";import"./useControlledState-BivKNDQQ.js";import"./Collection-wMGDOUBU.js";import"./CollectionBuilder-DNjjGXjQ.js";import"./SelectionIndicator-Ccu7nnnp.js";import"./Separator-BVG5NTNP.js";import"./SelectionManager-DlKr1lyz.js";import"./useEvent-D3WWLcmI.js";import"./useCollator-QROY5xcX.js";import"./FocusScope-GXsPqTvD.js";import"./VisuallyHidden-uuI_aPdk.js";import"./AlertText-CnTSLXpj.js";import"./AlertIcon-B-ySDH61.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
