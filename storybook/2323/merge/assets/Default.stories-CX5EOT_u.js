import{j as r,r as F}from"./iframe-Bq_dTdDz.js";import{L as l}from"./Label-DlbZYBs5.js";import{F as o}from"./FileField-rtnWJesL.js";import{B as t}from"./Button-DwhPeKe2.js";import{S as f}from"./Section-DNG5i0i9.js";import{F as h}from"./FieldError-ClLnELEE.js";import{F as x}from"./FieldDescription-ByrQyhzl.js";import{R as S,O as j}from"./IconWarning-AvRveFf8.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./index-C2qM6Ecb.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./context-DasT5rkr.js";import"./Label-CPBWbyCv.js";import"./utils-Dc83Zc3S.js";import"./Hidden-CYUCWFXf.js";import"./useFormValidation-ofgJ0bTW.js";import"./useFocus-zY2zj5L9.js";import"./useFocusRing-C2_YEmjA.js";import"./FieldError-CB3_Y2qo.js";import"./Text-RESw6iu2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-b7EgChKn.js";import"./browser-D_Oin-6N.js";import"./useFieldComponent-C92nVZms.js";import"./Text-3w39UNLL.js";import"./EmulatedBoldText-D57I_Edz.js";import"./LoadingSpinner-QnwB8HJT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BGgAcFUF.js";import"./Button-B82FCYrG.js";import"./ProgressBar-BeilQHeM.js";import"./useLabel-BL_xrhrx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CxmEVb--.js";import"./useFocusable-B7WP4__g.js";import"./ContextMenuSection-CF0FAI_C.js";import"./ActionBatch-DTgx0kqH.js";import"./useOverlayController-BN71uM-Z.js";import"./useStatic-OW4DiFQ5.js";import"./getActionGroupSlot-C-FhbO6Z.js";import"./dynamic-BU-d9n8a.js";import"./Dialog-atW1yRI0.js";import"./RSPContexts-BEGF6Rgy.js";import"./OverlayArrow-D8uV1uDe.js";import"./useControlledState-DvV_L9jP.js";import"./Collection-CfTInUqx.js";import"./CollectionBuilder-DXHEkZnM.js";import"./SelectionIndicator-B0He5XEj.js";import"./Separator-oRLs3WBO.js";import"./SelectionManager-DJLtj_Nc.js";import"./useEvent-Bo6NaH-t.js";import"./useCollator-CL9Njxka.js";import"./FocusScope-jjJ71B2a.js";import"./VisuallyHidden-6gUpRQYP.js";import"./AlertText-DLrJVcTW.js";import"./AlertIcon-DR4HtAzR.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
