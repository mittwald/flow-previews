import{j as r,r as F}from"./iframe-n3VOiEf5.js";import{L as l}from"./Label-B5oQkcZ-.js";import{F as o}from"./FileField-L2-de2Rc.js";import{B as t}from"./Button-gwePC8r8.js";import{S as f}from"./Section-BlfcbXvq.js";import{F as h}from"./FieldError-DRCS1Gz9.js";import{F as x}from"./FieldDescription-CP4R52YC.js";import{R as S,O as j}from"./IconWarning-BKHoIgIa.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./index-CHzAo02W.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./context-DhQskmxc.js";import"./Label-CZ6Ig0wh.js";import"./utils-BTX3Dk-t.js";import"./Hidden-8NzXPPVn.js";import"./useFormValidation-0mLIssn1.js";import"./useFocus-Di5Kz97s.js";import"./useFocusRing-50iWl84k.js";import"./FieldError-IZ2wmqkG.js";import"./Text-BWj5dCJ1.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-IuhSVj8_.js";import"./browser-DXFXi5M2.js";import"./useFieldComponent-6hUMLoYk.js";import"./Text-CwVjZxCT.js";import"./EmulatedBoldText-eIBSog0P.js";import"./LoadingSpinner-BZywMYAM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CWx46e_E.js";import"./Button-Dt8pRNpU.js";import"./ProgressBar-C4tpbq9V.js";import"./useLabel-DpN8AhZi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CVHN3NRW.js";import"./useFocusable-ZTBPsPh1.js";import"./ContextMenuSection-MotZbouy.js";import"./ActionBatch-B7NWJImq.js";import"./useOverlayController-BNiAcUvH.js";import"./useStatic-CMDkRNZz.js";import"./getActionGroupSlot-CP2KeStW.js";import"./dynamic-DgHDUJEW.js";import"./Dialog-Be8vTliz.js";import"./RSPContexts-DzW0xATd.js";import"./OverlayArrow-Tc6q1y2y.js";import"./useControlledState-17a16_5D.js";import"./Collection-2dWh1OBC.js";import"./CollectionBuilder-pL0vDcKt.js";import"./SelectionIndicator-QXVr0AO7.js";import"./Separator-XftYj5HO.js";import"./SelectionManager-Bh8KZa3d.js";import"./useEvent-D6V5lpJs.js";import"./useCollator-BWOk8TKb.js";import"./FocusScope-BBR4OeS8.js";import"./VisuallyHidden-DCK-vxP3.js";import"./AlertText-BJDrahB4.js";import"./AlertIcon-DtfTxuVy.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
