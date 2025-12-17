import{j as r,r as F}from"./iframe-8dFSbqJz.js";import{L as l}from"./Label-B3-xaZya.js";import{F as o}from"./FileField-DPH4Vhdf.js";import{B as t}from"./Button-Bp8IuIoY.js";import{S as f}from"./Section-Df_pVdm4.js";import{F as h}from"./FieldError-olPwxTHW.js";import{F as x}from"./FieldDescription-DQzesUeO.js";import{c as S,d as j}from"./IconChevronDown-BoB9X9Lx.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-K_HgwY7e.js";import"./index-DdTsJ3wf.js";import"./index-QKd42-im.js";import"./useLocalizedStringFormatter-YU3aOu6y.js";import"./context-81xqWZ8H.js";import"./Label-BbJ0t0io.js";import"./utils-CatxVoKl.js";import"./Hidden-YN9d6EVo.js";import"./useFormValidation-BLhEH38g.js";import"./useFocus-BOo9d3Bd.js";import"./FieldError-CAnV5-By.js";import"./Text-BVGarVrb.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-C3vnVfPY.js";import"./useFocusRing-D1LOVY8w.js";import"./browser-TJej2Zh2.js";import"./useFieldComponent-Ch2X8LGy.js";import"./IconX-Dl75Mnu2.js";import"./IconCheck-ClCsyRZ4.js";import"./Text-Bc5PmX1I.js";import"./EmulatedBoldText-C5iTwKQF.js";import"./LoadingSpinner-qRqEZFCl.js";import"./ariaLive-DqXsnKMw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-D1_oWH-e.js";import"./Button-BKsEcO3C.js";import"./ProgressBar-D99M34jy.js";import"./useLabel-CKOrsKHI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BOmL6f1-.js";import"./useFocusable-Bm2s2zNQ.js";import"./ContextMenuSection-qTgSQ3ow.js";import"./lib-90ocxLs-.js";import"./Action-1KJHzV_0.js";import"./useStatic-BgApplVo.js";import"./getActionGroupSlot-5XNUJgam.js";import"./context-Hd2oMXi6.js";import"./dynamic-DrPvW6ki.js";import"./Dialog-BFHdNGes.js";import"./RSPContexts-CBm4dMuh.js";import"./OverlayArrow-CuoDJSSc.js";import"./useControlledState-DYZXiDwW.js";import"./Collection-qqIe35E-.js";import"./CollectionBuilder-CM8I1Is1.js";import"./SelectionIndicator-BcqL5ZP5.js";import"./Separator-zU8KIdJB.js";import"./SelectionManager-Cew3fhRb.js";import"./useEvent-gpwnJALn.js";import"./useCollator-B3xP_FE7.js";import"./FocusScope-KuXCUz--.js";import"./VisuallyHidden-PBFdwu-V.js";import"./IconDanger-D2WM-UH7.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Wr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
