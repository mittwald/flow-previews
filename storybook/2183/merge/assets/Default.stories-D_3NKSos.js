import{j as r,r as F}from"./iframe-BsCnutBU.js";import{L as l}from"./Label-DBiwGOqI.js";import{F as o}from"./FileField-CsMOiIBA.js";import{B as t}from"./Button-PMfVxp4L.js";import{S as f}from"./Section-C1RjpY9f.js";import{F as h}from"./FieldError-CJPS-seQ.js";import{F as x}from"./FieldDescription-DXa041T4.js";import{c as S,d as j}from"./IconChevronDown-C43PU1K-.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DoLxyVDl.js";import"./index-xZbZEtqW.js";import"./index-PlwcbQcr.js";import"./useLocalizedStringFormatter-Bo0x_WGr.js";import"./context-DzQn9XcF.js";import"./Label-B_59qcJ5.js";import"./utils-Dcbzlj6n.js";import"./Hidden-gYrC-ftW.js";import"./useFormValidation-hrdfW_GO.js";import"./useFocus-zRbhNQvs.js";import"./FieldError-oQwctYYH.js";import"./Text-BOWjpC0c.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-XkH6LSV2.js";import"./useFocusRing-eAFZ6BYE.js";import"./browser-b7DWXv2S.js";import"./useFieldComponent-DKQov8fN.js";import"./IconX-BpqNIxw6.js";import"./IconCheck-C2zwGnIP.js";import"./Text-CNxpKe1i.js";import"./EmulatedBoldText-DyWG-htd.js";import"./LoadingSpinner-C-Vur43u.js";import"./ariaLive-CXcB5l43.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-LwvHvQd9.js";import"./Button-YTgHheMP.js";import"./ProgressBar-BvRvte-F.js";import"./useLabel-CiTBxdfM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CHCx2MC1.js";import"./useFocusable-Czch9xtI.js";import"./ContextMenuSection-DnLRDkoA.js";import"./lib-90ocxLs-.js";import"./Action-CDxlZfJH.js";import"./useStatic-BIAK3C1m.js";import"./getActionGroupSlot-D8KutjkD.js";import"./context-bnUckVor.js";import"./dynamic-DlsVuPIo.js";import"./Dialog-CUr7rK7w.js";import"./RSPContexts-Dp9qqhDW.js";import"./OverlayArrow-D6gKPtoN.js";import"./useControlledState-CigtIRD8.js";import"./Collection-C8-9jDK9.js";import"./CollectionBuilder-CJjXf3Iw.js";import"./SelectionIndicator-Baq8cblo.js";import"./Separator-BirN-56R.js";import"./SelectionManager-QwxvBoUZ.js";import"./useEvent-CvU6uOe-.js";import"./useCollator-O8BhpWis.js";import"./FocusScope-Bn9eK5Im.js";import"./VisuallyHidden-xvADZrl6.js";import"./IconDanger-d9R36P01.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Wr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
