import{j as r,r as F}from"./iframe-HHIIuBER.js";import{L as l}from"./Label-CBXKH6Tn.js";import{F as o}from"./FileField-OvJ85xrE.js";import{B as t}from"./Button-D9uXd6kS.js";import{S as f}from"./Section-DSfs8S5C.js";import{F as h}from"./FieldError-Fy3l3DO0.js";import{F as x}from"./FieldDescription-CXq0EMj9.js";import{O as S,L as j}from"./IconWarning-CPuUEZGY.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./index-CXDCOpiF.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./context-BwOS-W-N.js";import"./Label-DYUVUuL-.js";import"./utils-Cg0Q0SJj.js";import"./Hidden-B0PUXGbF.js";import"./useFormValidation-CzNeWdfJ.js";import"./useFocus--KWf2FGc.js";import"./useFocusRing-4HIuR3kq.js";import"./FieldError-DxbTuNm9.js";import"./Text-XNblTka2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-BPv4G1er.js";import"./browser-BiwdkBmz.js";import"./useFieldComponent-DUw61_cc.js";import"./Text-1gTdtZLR.js";import"./EmulatedBoldText-DygQZkyN.js";import"./LoadingSpinner-DsMp8zOw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-MyOm1NIW.js";import"./Button-B3mdCDJz.js";import"./ProgressBar-2UTBzJPE.js";import"./useLabel-5SH0-wGx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DR7SsbUT.js";import"./useFocusable-CK9MQKQ0.js";import"./ContextMenuSection-CTAuboSL.js";import"./Action-_oJPJyM7.js";import"./context-D550pjOP.js";import"./useStatic-CHenPBZg.js";import"./getActionGroupSlot-DxN6Z1_y.js";import"./dynamic-UvYry7O0.js";import"./Dialog-17xgL67A.js";import"./RSPContexts-DTcyqJ2O.js";import"./OverlayArrow-BDTM6fDd.js";import"./useControlledState-DbjjrDzt.js";import"./Collection-CvBP3D3N.js";import"./CollectionBuilder-O9kuHpIB.js";import"./SelectionIndicator-D4-zI_jf.js";import"./Separator-C2NuKe-C.js";import"./SelectionManager-sYUHP04o.js";import"./useEvent-Btkolbn2.js";import"./useCollator-h0FVZg7K.js";import"./FocusScope-BRQqWTqz.js";import"./VisuallyHidden-W06uk0vU.js";import"./AlertText-DlszfG1H.js";import"./AlertIcon-CK1OfGfa.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
