import{j as r,r as F}from"./iframe-DunzINT4.js";import{L as l}from"./Label-CAkB50pb.js";import{F as o}from"./FileField-DASWYbWc.js";import{B as t}from"./Button-D4ye7DRq.js";import{S as f}from"./Section-M7f3R8gL.js";import{F as h}from"./FieldError-CxTapnNI.js";import{F as x}from"./FieldDescription-Ci87Xxem.js";import{R as S,O as j}from"./IconWarning-kFcnfyhN.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CeuyEBcJ.js";import"./index-eVQn7fN1.js";import"./index-Wl0ZfLjP.js";import"./useLocalizedStringFormatter-DXa2M0xs.js";import"./context-XFBu4tuG.js";import"./Label-BZPwsdxQ.js";import"./utils-B66WPIWK.js";import"./Hidden-B50LlJsW.js";import"./useFormValidation-CAKGNU-r.js";import"./useFocus-CLsD99Jd.js";import"./useFocusRing-BpLynkPU.js";import"./FieldError-MxPTKBhw.js";import"./Text-CMXpTIb-.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-CibPE8Js.js";import"./browser-CUqULdV9.js";import"./useFieldComponent-mGz2JkQm.js";import"./Text-DTHO_DRR.js";import"./EmulatedBoldText-Bdm-2WSs.js";import"./LoadingSpinner-CzZyxAnt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BHsosJBg.js";import"./Button-C6WdG1X1.js";import"./ProgressBar-BpvfS7s7.js";import"./useLabel-ClizNTl4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VDpDAbVy.js";import"./useFocusable-BqXitQDl.js";import"./ContextMenuSection-BBATHhHi.js";import"./ActionBatch-CdGiFur7.js";import"./useOverlayController-CeSeYZW0.js";import"./useStatic-CPAaCdO2.js";import"./getActionGroupSlot-CDL5t1gM.js";import"./dynamic--RH-hhxe.js";import"./Dialog-Da1bNoxP.js";import"./RSPContexts-DYG4soUM.js";import"./OverlayArrow-DJczCQVT.js";import"./useControlledState-BzLfbFoS.js";import"./Collection-DamVlN_y.js";import"./CollectionBuilder-px4k6lS7.js";import"./SelectionIndicator-BB6AU3Ia.js";import"./Separator-kz0LFyO1.js";import"./SelectionManager-DVODTGrP.js";import"./useEvent-ygxdZpKO.js";import"./useCollator-D3GFS6us.js";import"./FocusScope-9vf2uR4m.js";import"./VisuallyHidden-C85ONzQn.js";import"./AlertText-CXIp0I6q.js";import"./AlertIcon-Bju3yLvF.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
