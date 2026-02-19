import{j as r,r as F}from"./iframe-DYssR0ZO.js";import{L as l}from"./Label-D9oETDcN.js";import{F as o}from"./FileField-BYPLJrRy.js";import{B as t}from"./Button-DWrm_dbc.js";import{S as f}from"./Section-DXlc0Qej.js";import{F as h}from"./FieldError-BB68CtMB.js";import{F as x}from"./FieldDescription-DK9jbbdr.js";import{R as S,O as j}from"./IconWarning-BhLXBIfL.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DsQfvZ8R.js";import"./index-BiQ39dcD.js";import"./index-DD53_4h2.js";import"./useLocalizedStringFormatter-lpvT_cvb.js";import"./context-CUXiPoRo.js";import"./Label-DSpHRERt.js";import"./utils-C3q1cDFY.js";import"./Hidden-CFJfk2M-.js";import"./useFormValidation-D1fghWFH.js";import"./useFocus-CQpADUyl.js";import"./useFocusRing-CMEZAWj2.js";import"./FieldError-Bq-6FZKj.js";import"./Text-C48KhL8P.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-VZe-sw4J.js";import"./browser-BciskJv3.js";import"./useFieldComponent-MDeHyLVI.js";import"./Text-S9F4vE2H.js";import"./EmulatedBoldText-BT8wvojV.js";import"./LoadingSpinner-lL7MHRW7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-cHYIdIzb.js";import"./Button-Dmp7BHEZ.js";import"./ProgressBar-RP_su0Fk.js";import"./useLabel-BksUhJpA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-xSc99ptM.js";import"./useFocusable-CmCmEjiW.js";import"./ContextMenuSection-DyHCMP-N.js";import"./ActionBatch-Cjtwd20r.js";import"./useOverlayController-BfbCDLsY.js";import"./useStatic-BJkvCPdg.js";import"./getActionGroupSlot-CBN4XHqD.js";import"./dynamic-3BYImiyG.js";import"./Dialog-DF_yv1N5.js";import"./RSPContexts-CDW_96-t.js";import"./OverlayArrow-Cf72_x8q.js";import"./useControlledState-CDSB3NYp.js";import"./Collection-DXdmtnJo.js";import"./CollectionBuilder-rMlba9-K.js";import"./SelectionIndicator-02MGjaw1.js";import"./Separator-DtudkoI4.js";import"./SelectionManager-CofrV8Dv.js";import"./useEvent-fKqzN6WM.js";import"./useCollator-CCP6S8mH.js";import"./FocusScope-CNZRDNpk.js";import"./VisuallyHidden-B8I9N7kv.js";import"./AlertText-rFllmFTn.js";import"./AlertIcon-AvW8zEgb.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
