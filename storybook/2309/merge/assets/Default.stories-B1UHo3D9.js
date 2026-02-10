import{j as r,r as F}from"./iframe-BAXQY30e.js";import{L as l}from"./Label-DhF_BRrp.js";import{F as o}from"./FileField-DhhwFZDX.js";import{B as t}from"./Button-CvDqM7Lu.js";import{S as f}from"./Section-BVe0LGVq.js";import{F as h}from"./FieldError-D1QPRlMW.js";import{F as x}from"./FieldDescription-LY8oqjwS.js";import{P as S,M as j}from"./IconWarning-NY-vs6K4.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWoWQ3Dz.js";import"./index-D8IPWXYD.js";import"./index-BAu7LBGH.js";import"./useLocalizedStringFormatter-D2lE0ZvY.js";import"./context-Ch7cvv9N.js";import"./Label-CoIwZGGV.js";import"./utils-CPq9a2_3.js";import"./Hidden-CaIV9czF.js";import"./useFormValidation-DAvMLm6e.js";import"./useFocus-Bjv2U0Px.js";import"./useFocusRing-eOVByyHK.js";import"./FieldError-RUpMVejq.js";import"./Text-CgyRU_jx.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-Dt_0h10s.js";import"./browser-7M05TLI2.js";import"./useFieldComponent-RBMXOPsB.js";import"./Text-CsFAJPGd.js";import"./EmulatedBoldText-RGEYlPNA.js";import"./LoadingSpinner-JX83AFJj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-X8ibHJNw.js";import"./Button-Ca5Nx2F5.js";import"./ProgressBar-DOlyg40u.js";import"./useLabel-XkQiS-6W.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-0WoXV1eK.js";import"./useFocusable-B7f7k6Nb.js";import"./ContextMenuSection-CYSyIaWU.js";import"./Action-CDH3oaiQ.js";import"./context-DKCDV3-b.js";import"./useStatic-rplOn2Qs.js";import"./getActionGroupSlot-CKOsA57z.js";import"./dynamic-0Mu-qEnq.js";import"./Dialog-BnZvghEV.js";import"./RSPContexts-D7b7jdF8.js";import"./OverlayArrow-DrnF7GNT.js";import"./useControlledState-BIans2ur.js";import"./Collection-C9Jq2g2r.js";import"./CollectionBuilder-B4l66tZC.js";import"./SelectionIndicator-m0lWLhXd.js";import"./Separator-5yzWA0zP.js";import"./SelectionManager-DXFhF9eC.js";import"./useEvent-KMkh1PvS.js";import"./useCollator-DxEFZJkY.js";import"./FocusScope-PoiaPb2X.js";import"./VisuallyHidden-qM1rInXZ.js";import"./AlertText-Do_swE0s.js";import"./AlertIcon-C4A5rqth.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
