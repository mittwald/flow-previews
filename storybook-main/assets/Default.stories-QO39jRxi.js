import{j as r,r as F}from"./iframe-DQCyQvTg.js";import{L as l}from"./Label-Bpn5fam4.js";import{F as o}from"./FileField-D86b3FdH.js";import{B as t}from"./Button-BuvZu5FH.js";import{S as f}from"./Section-1ggmv6HF.js";import{F as h}from"./FieldError-Db3KB_ND.js";import{F as x}from"./FieldDescription-6JasakGe.js";import{P as S,M as j}from"./IconWarning-BsBEN2i7.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./index-vqo-_XTj.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./context-BVR1xsiE.js";import"./Label-CVwZ8mvh.js";import"./utils-B-47qEzM.js";import"./Hidden-B1onkdes.js";import"./useFormValidation-DWTcfSBl.js";import"./useFocus-MHK9Bgmz.js";import"./useFocusRing-H28TAT4s.js";import"./FieldError-BsUvM9FZ.js";import"./Text-dCr4PfuU.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-kTwoopyR.js";import"./browser-NLzega1a.js";import"./useFieldComponent-BQB8jFXR.js";import"./Text-Dy3rf6Sf.js";import"./EmulatedBoldText-BkRIKdgp.js";import"./LoadingSpinner-C2L8sUPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DwYKdEj8.js";import"./Button-BqVXXUXM.js";import"./ProgressBar-CvxDZlN2.js";import"./useLabel-CgNKGrTG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BDNCZxcv.js";import"./useFocusable-Bi17AcBv.js";import"./ContextMenuSection-CRl2t-Sj.js";import"./Action-BFqm9nZf.js";import"./context-CMTFLv9Z.js";import"./useStatic-XhnoWRRg.js";import"./getActionGroupSlot--rri3fdD.js";import"./dynamic-CLdLSboA.js";import"./Dialog-l1ZI7Q43.js";import"./RSPContexts-CbSXEXlJ.js";import"./OverlayArrow-BRUQmdEx.js";import"./useControlledState-CSGe32xq.js";import"./Collection-Dvx0GJ5C.js";import"./CollectionBuilder-G7sQB9cg.js";import"./SelectionIndicator-BqvLdNe9.js";import"./Separator-CkdPEWsl.js";import"./SelectionManager-C7NRhxAL.js";import"./useEvent-BSjlxpLx.js";import"./useCollator-Dr7oYRVM.js";import"./FocusScope-DgjO-P_8.js";import"./VisuallyHidden-DTZCmZoD.js";import"./AlertText-D-ZVlg04.js";import"./AlertIcon-BB94ofCu.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
