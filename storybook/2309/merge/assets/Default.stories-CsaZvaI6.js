import{j as r,r as F}from"./iframe-BV_gLY1W.js";import{L as l}from"./Label-DSp9Q3qx.js";import{F as o}from"./FileField-D0L28VNB.js";import{B as t}from"./Button-SSCEZ0RO.js";import{S as f}from"./Section-DFw7sWw1.js";import{F as h}from"./FieldError-Du2SwoFV.js";import{F as x}from"./FieldDescription-DJEI_ZDJ.js";import{P as S,M as j}from"./IconWarning-BvnX4fSp.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DjNrJ_Te.js";import"./index-D8dVI0GG.js";import"./index-iDKz2btu.js";import"./useLocalizedStringFormatter-DG58vGXD.js";import"./context-D0kYsfYD.js";import"./Label-TEYoBhWb.js";import"./utils-pcZMLEVF.js";import"./Hidden-DpRhW0r1.js";import"./useFormValidation-Bzs4UsOG.js";import"./useFocus-BhZlDk36.js";import"./useFocusRing-DHBFiW-v.js";import"./FieldError-Q2svFxIr.js";import"./Text-x_iEgbKh.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-tiA0LuFc.js";import"./browser-RRcj6Eel.js";import"./useFieldComponent-Ciy1vkCA.js";import"./Text-B1ZcDWdT.js";import"./EmulatedBoldText-U0Mbqk2D.js";import"./LoadingSpinner-DwHnxPWs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DzXnO2Bt.js";import"./Button-BTyL1bMd.js";import"./ProgressBar-d-6uKhr8.js";import"./useLabel-BcIwqyBf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cpaxayx2.js";import"./useFocusable-CF0VfUE0.js";import"./ContextMenuSection-uCRJ4fX1.js";import"./Action-B44IIYnD.js";import"./context-DsGc8Cs0.js";import"./useStatic-Bro5j9qe.js";import"./getActionGroupSlot-CKRbyaMP.js";import"./dynamic-D0Gso-mt.js";import"./Dialog-DuYLlPOJ.js";import"./RSPContexts-C37Ie1k0.js";import"./OverlayArrow-BxTjv8xX.js";import"./useControlledState-D8GCi_t3.js";import"./Collection-B2K0MU6U.js";import"./CollectionBuilder-k5dkf4C0.js";import"./SelectionIndicator-Bw1WJJhz.js";import"./Separator-C5PKpWVh.js";import"./SelectionManager-DIHL1TL9.js";import"./useEvent-B4HwFCuu.js";import"./useCollator-DxbGnjFN.js";import"./FocusScope-Cdk-yaL2.js";import"./VisuallyHidden-282mV7GD.js";import"./AlertText-9lAe-Sfe.js";import"./AlertIcon-CdR_G7Yx.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
