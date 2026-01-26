import{j as r,r as F}from"./iframe-CBKKDtut.js";import{L as l}from"./Label-YKVXUmct.js";import{F as o}from"./FileField-C5XmJLLB.js";import{B as t}from"./Button-B9OQWjLR.js";import{S as f}from"./Section-DXY5zwlF.js";import{F as h}from"./FieldError-ncR-D_4-.js";import{F as x}from"./FieldDescription-BY78pjgj.js";import{O as S,L as j}from"./IconWarning-BGeLtjSH.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-Qq6Xd6.js";import"./index-Q7U-5PA1.js";import"./index-fGZr3eAJ.js";import"./useLocalizedStringFormatter-Cg2HsiHj.js";import"./context-Bvh_z46p.js";import"./Label-BzrfGAM1.js";import"./utils-CzD9rXMA.js";import"./Hidden-BMhHdfnU.js";import"./useFormValidation-FH2NBgqd.js";import"./useFocus-BrZp4zBY.js";import"./FieldError-6zsCD2mI.js";import"./Text-BipkjXt2.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-DA2pnuWC.js";import"./useFocusRing-CCYWTYc5.js";import"./browser-C9q5kf03.js";import"./useFieldComponent-377eOR22.js";import"./Text-DXycmlPy.js";import"./EmulatedBoldText-eA5g4YLr.js";import"./LoadingSpinner-BvfPlxYK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-d08GjPRF.js";import"./Button-DyYsKNHg.js";import"./ProgressBar-BptIcMSV.js";import"./useLabel-BGNrCt7d.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCG6AvGE.js";import"./useFocusable-DQlHlYMC.js";import"./ContextMenuSection-CIoY6k-y.js";import"./Action-DoBIVRDz.js";import"./context-B4Ey35Kl.js";import"./useStatic-n8g6U0tI.js";import"./getActionGroupSlot-CKDi87pY.js";import"./dynamic-C3t3tmF9.js";import"./Dialog-DqG8ZP0V.js";import"./RSPContexts-B9p0Af0m.js";import"./OverlayArrow-BBLTZ4Zv.js";import"./useControlledState-1Ujh64WW.js";import"./Collection-Ci7EvgUR.js";import"./CollectionBuilder-BsNn1R8F.js";import"./SelectionIndicator-D8RCowii.js";import"./Separator-CntAjx1Z.js";import"./SelectionManager-DFjBPYMf.js";import"./useEvent-BEHLnBZB.js";import"./useCollator-DdKTTQqQ.js";import"./FocusScope-Ds7_8mr5.js";import"./VisuallyHidden-BTRh3ybS.js";import"./AlertText-BqYQV5FR.js";import"./AlertIcon-R8qprUXz.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
