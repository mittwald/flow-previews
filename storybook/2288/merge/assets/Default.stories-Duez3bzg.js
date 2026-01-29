import{j as r,r as F}from"./iframe-Bj8CIgLy.js";import{L as l}from"./Label-DCfOJgVU.js";import{F as o}from"./FileField-CbEYOAco.js";import{B as t}from"./Button-b_60CJFp.js";import{S as f}from"./Section-Bw-Treyf.js";import{F as h}from"./FieldError-Dbjs-A5K.js";import{F as x}from"./FieldDescription-tBjikzHa.js";import{N as S,K as j}from"./IconWarning-KvO0562x.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./index-DYakERwo.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./context-RK9vgtK2.js";import"./Label-BAoc3jdD.js";import"./utils-D41FTHpf.js";import"./Hidden-DWJk28Vx.js";import"./useFormValidation-CuYWsRMr.js";import"./useFocus-BJLP4kuV.js";import"./useFocusRing-0HtVE4-I.js";import"./FieldError-cTj-tlV1.js";import"./Text-CVMu3Bei.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-DxRXMpsm.js";import"./browser-Rl4DjN4H.js";import"./useFieldComponent-DFS7CEov.js";import"./Text-BbFFlg8m.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./LoadingSpinner-Bl0_iJOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-ChNLl0N8.js";import"./Button-Kf97rzrP.js";import"./ProgressBar-CzzSLaP3.js";import"./useLabel-j5JIlG5u.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BLrqdZMB.js";import"./useFocusable-DNf9Dm0r.js";import"./ContextMenuSection-aa2v9fsF.js";import"./Action-DbcbId4I.js";import"./context-CihUwagI.js";import"./useStatic-BJFVwiuT.js";import"./getActionGroupSlot-BcyfBjwk.js";import"./dynamic-DEq-wVmB.js";import"./Dialog-vXYkYCcw.js";import"./RSPContexts-C3RQOwqv.js";import"./OverlayArrow-zA421arv.js";import"./useControlledState-C0IHmt74.js";import"./Collection-Ddvl2Mqw.js";import"./CollectionBuilder-BBfbdfv8.js";import"./SelectionIndicator-DBsPgOzp.js";import"./Separator-ZmTIxQU_.js";import"./SelectionManager-DK0mm2wz.js";import"./useEvent-UL9Ap3Pm.js";import"./useCollator-w2x96sHr.js";import"./FocusScope-DNVRBXI-.js";import"./VisuallyHidden-D10Fyvvv.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
