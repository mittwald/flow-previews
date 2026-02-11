import{j as r,r as F}from"./iframe-BKpTcuej.js";import{L as l}from"./Label-sjxWv79d.js";import{F as o}from"./FileField-DH08Bzl9.js";import{B as t}from"./Button-CHR5Lto_.js";import{S as f}from"./Section-fJmoAqS0.js";import{F as h}from"./FieldError-BmJ7-crS.js";import{F as x}from"./FieldDescription-B8eaQXaP.js";import{R as S,O as j}from"./IconWarning-8R3XoFcV.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DoYqiHFv.js";import"./index-Dp43xhBx.js";import"./index-DwEhfHus.js";import"./useLocalizedStringFormatter-BpUbvorC.js";import"./context-Bt___W0l.js";import"./Label--Zf6jHty.js";import"./utils-BuTqHWUg.js";import"./Hidden-B0ayokwD.js";import"./useFormValidation-6yUCZE8C.js";import"./useFocus-C4QXJ0i2.js";import"./useFocusRing-CL2qG9Ti.js";import"./FieldError-Bf7-_15k.js";import"./Text-_5F14b0c.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-u4H7iO9I.js";import"./browser-DdR_cYXU.js";import"./useFieldComponent-AXq55mny.js";import"./Text-ChzZQXaT.js";import"./EmulatedBoldText-DTp9riJA.js";import"./LoadingSpinner-CSX_cmFV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-nPMBb6wO.js";import"./Button-WezQgFMH.js";import"./ProgressBar-gtPQqryh.js";import"./useLabel-CLAZgdhb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BwvZqs_N.js";import"./useFocusable-8gC31DNg.js";import"./ContextMenuSection-CP33TlWV.js";import"./Action-CRs_TTFg.js";import"./context-Do1O8LUQ.js";import"./useStatic-D1T02rpq.js";import"./getActionGroupSlot-BVFFoNvG.js";import"./dynamic-D5pLUzdK.js";import"./Dialog-CnIAbR2d.js";import"./RSPContexts-CNLAcvzw.js";import"./OverlayArrow-BRMGn8Rx.js";import"./useControlledState-C61mrJlx.js";import"./Collection-DBuLuq_j.js";import"./CollectionBuilder-BAfr6v0X.js";import"./SelectionIndicator-CKzMTdaQ.js";import"./Separator-DsMLA7TC.js";import"./SelectionManager-DoV1m8OU.js";import"./useEvent-DisABsaa.js";import"./useCollator-28QKhnaq.js";import"./FocusScope-CaneGuiO.js";import"./VisuallyHidden-DjSqpFWl.js";import"./AlertText-NjffNB6y.js";import"./AlertIcon-BxMTL622.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
