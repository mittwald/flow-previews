import{j as r,r as F}from"./iframe-CaMmm6JB.js";import{L as l}from"./Label-7z5ZqOim.js";import{F as o}from"./FileField-B91NHZX5.js";import{B as t}from"./Button-Ccdb4ZyB.js";import{S as f}from"./Section-z5Dz65CL.js";import{F as h}from"./FieldError-gBRSHyIP.js";import{F as x}from"./FieldDescription-ZK4hQ0pT.js";import{R as S,O as j}from"./IconWarning-CjIU5uAw.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-7fKv1TmI.js";import"./index-D879hO5r.js";import"./index-bUizOk6y.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./context-COlkIlq2.js";import"./Label-GJfJgND5.js";import"./utils-BWel_6vJ.js";import"./Hidden-_lt-y3bc.js";import"./useFormValidation-BBrrlMUS.js";import"./useFocus-CsmVawkN.js";import"./useFocusRing-D0nVGfyc.js";import"./FieldError-rN2a2i1l.js";import"./Text-DltKapPO.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-BR-ykejl.js";import"./browser-DBmSqQ-l.js";import"./useFieldComponent-l9GEjfOW.js";import"./Text-BytpHB1v.js";import"./EmulatedBoldText-Bldq9nM5.js";import"./LoadingSpinner-D3IBMWR2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-B2IWJRNM.js";import"./Button-Br8oe_nB.js";import"./ProgressBar-CBFdsoCo.js";import"./useLabel-BlkmcG0L.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bq52eadg.js";import"./useFocusable-D5loONxI.js";import"./ContextMenuSection-CGa5WiYd.js";import"./ActionBatch-Q41d4eeq.js";import"./useOverlayController-DaRRxB6Y.js";import"./useStatic-CQKXHPrs.js";import"./getActionGroupSlot-xPMU2Lcl.js";import"./dynamic-CCT0rfWD.js";import"./Dialog-YsZQ1_o0.js";import"./RSPContexts-HzcDbyvj.js";import"./OverlayArrow-BudvLkgn.js";import"./useControlledState-DS3iWteE.js";import"./Collection-YKpSfmi_.js";import"./CollectionBuilder-2gYZy5f8.js";import"./SelectionIndicator-C8xVf-92.js";import"./Separator-Du64Ymo6.js";import"./SelectionManager-DL58XFN7.js";import"./useEvent-DMru7c0E.js";import"./useCollator-CLVgUaDj.js";import"./FocusScope-BSI7m-fZ.js";import"./VisuallyHidden-CJ5e0jZZ.js";import"./AlertText-CvHTwf-C.js";import"./AlertIcon-CCMwGOFg.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
