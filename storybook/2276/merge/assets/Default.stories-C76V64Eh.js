import{j as r,r as F}from"./iframe-BbrP11p-.js";import{L as l}from"./Label-DwqHoWx5.js";import{F as o}from"./FileField-CGpDSjxm.js";import{B as t}from"./Button-D_6ZCoU5.js";import{S as f}from"./Section-OZiyRnMf.js";import{F as h}from"./FieldError-i_FUROXt.js";import{F as x}from"./FieldDescription-BZIDgIPl.js";import{O as S,L as j}from"./IconWarning-BeRGE0lU.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bjf10jjx.js";import"./index-l4GzuhKJ.js";import"./index-CvmJvI2t.js";import"./useLocalizedStringFormatter-au7M1iG_.js";import"./context-Cg0av1qu.js";import"./Label-C8vxG_o1.js";import"./utils-CfXF9mMB.js";import"./Hidden-6YtfGJCG.js";import"./useFormValidation-dfDtwXtG.js";import"./useFocus-DdYA68cd.js";import"./useFocusRing-D-e5pHmS.js";import"./FieldError-C0mMT85u.js";import"./Text-BmgQOLJ4.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-CrFs98bJ.js";import"./browser-CKsvW9Gw.js";import"./useFieldComponent-CnZp8uAU.js";import"./Text-BLzGfhm5.js";import"./EmulatedBoldText-j9VeSllR.js";import"./LoadingSpinner-CoKKKOJW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BUE50-N_.js";import"./Button-DQobJtX3.js";import"./ProgressBar-DY9U0Kry.js";import"./useLabel-ChwTXcaC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VHqnVNy0.js";import"./useFocusable-ssdBLHPa.js";import"./ContextMenuSection-Djx2ksVO.js";import"./Action-DGTK2X9F.js";import"./context-DfqDLyvd.js";import"./useStatic-DG6eeeN5.js";import"./getActionGroupSlot-BG0RRSMm.js";import"./dynamic-CazQQjW9.js";import"./Dialog-BH0tiGTi.js";import"./RSPContexts-D7TvdvVL.js";import"./OverlayArrow-C2TLtRQj.js";import"./useControlledState-CrzzGVbO.js";import"./Collection-C9vt1D1N.js";import"./CollectionBuilder-BqHvMLco.js";import"./SelectionIndicator-DLJIVGG7.js";import"./Separator-BdjTrZkK.js";import"./SelectionManager-C0oyBRkM.js";import"./useEvent-eSZL9DrQ.js";import"./useCollator-BxU86O8r.js";import"./FocusScope-DtyxLM97.js";import"./VisuallyHidden-BCVFUf4T.js";import"./AlertText-7tARt4Et.js";import"./AlertIcon-B3ByzjK4.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
