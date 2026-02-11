import{j as r,r as F}from"./iframe-DM7qDJWN.js";import{L as l}from"./Label-BIhRdzJz.js";import{F as o}from"./FileField-BCFODtut.js";import{B as t}from"./Button-Dc6TEAeS.js";import{S as f}from"./Section-BzWNMXV2.js";import{F as h}from"./FieldError-yptSAddh.js";import{F as x}from"./FieldDescription-BnJyB75w.js";import{R as S,O as j}from"./IconWarning-Ck-PBl-h.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-3uYRoF3i.js";import"./index-BG9aTyNN.js";import"./index-Zik4_3jH.js";import"./useLocalizedStringFormatter-aG_pngn7.js";import"./context-Bdkwq7qF.js";import"./Label-Bc5uyP9T.js";import"./utils-DCh3KcEQ.js";import"./Hidden-DVoaY9_q.js";import"./useFormValidation-BjtvC6sH.js";import"./useFocus-V4g9fXxO.js";import"./useFocusRing-DKHg-pYg.js";import"./FieldError-CDF7zCEW.js";import"./Text-CqLEY5m0.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-SfHIWI_P.js";import"./browser-GV4Evxlh.js";import"./useFieldComponent-DWfL7CEw.js";import"./Text-DFbMev3D.js";import"./EmulatedBoldText-DY5AV1Fo.js";import"./LoadingSpinner-BB2_lVH8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CkIQ4maL.js";import"./Button-Cle7Q0jH.js";import"./ProgressBar-XdjtveJ3.js";import"./useLabel-d_6Xjsvm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DcE1V40F.js";import"./useFocusable-jnMsXBmm.js";import"./ContextMenuSection-gnaL4P7y.js";import"./Action-SkKzNvM1.js";import"./context-CLl5kDsk.js";import"./useStatic-Dwurevey.js";import"./getActionGroupSlot-ChSghX-d.js";import"./dynamic-Bo6M-mWb.js";import"./Dialog-CtXs4QP0.js";import"./RSPContexts-DtHHiQqe.js";import"./OverlayArrow--T1zjZBI.js";import"./useControlledState-CGBhCpgz.js";import"./Collection-B3op_wkO.js";import"./CollectionBuilder-CUYn1Myb.js";import"./SelectionIndicator-DhuP4hb9.js";import"./Separator-duSL34B8.js";import"./SelectionManager-B15RSxH7.js";import"./useEvent-h15Gin5m.js";import"./useCollator-BSJypaQj.js";import"./FocusScope-DcmRl2I0.js";import"./VisuallyHidden-Djcrj7d_.js";import"./AlertText-DuUjVJKd.js";import"./AlertIcon-B0QkWIB4.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
