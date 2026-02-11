import{j as r,r as F}from"./iframe-wn9t8CHT.js";import{L as l}from"./Label-5bTXkWLT.js";import{F as o}from"./FileField-DnIQJA2W.js";import{B as t}from"./Button-CkMrcy8B.js";import{S as f}from"./Section-ByylEw6S.js";import{F as h}from"./FieldError-C9AtZQjZ.js";import{F as x}from"./FieldDescription-BbTglOXg.js";import{R as S,O as j}from"./IconWarning-B-Wnft1S.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CQL_Hol9.js";import"./index-Daog0jgF.js";import"./index-DGBNuX5e.js";import"./useLocalizedStringFormatter-BW5ArTpm.js";import"./context-DUIKEoYM.js";import"./Label-vEkUlCU_.js";import"./utils-BBqjM3mV.js";import"./Hidden-B0JF82fI.js";import"./useFormValidation-DyGMCXIt.js";import"./useFocus-Dfm-Pt4C.js";import"./useFocusRing-4Aw-0NUA.js";import"./FieldError-BriaHAsp.js";import"./Text-CigTZLQg.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-VHI0T5Gg.js";import"./browser-C4GSjbSD.js";import"./useFieldComponent-CuQvVX64.js";import"./Text-vlZ105c0.js";import"./EmulatedBoldText-BRurVn-6.js";import"./LoadingSpinner-C5pntlan.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BKPU2Q50.js";import"./Button-C_8bimI7.js";import"./ProgressBar-DYDTpv9y.js";import"./useLabel-CfKSfnQU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-febwKXtN.js";import"./useFocusable-MJ0CU3Gf.js";import"./ContextMenuSection-a_hWYWcP.js";import"./Action-CYz45Lq2.js";import"./context-DvLe6BQ8.js";import"./useStatic-Dq0n5AIR.js";import"./dynamic-Ce3zwrtf.js";import"./getActionGroupSlot-DC-fIdha.js";import"./Dialog-QaAGaw4t.js";import"./RSPContexts-CP6K_mUq.js";import"./OverlayArrow-Dlbb_9eh.js";import"./useControlledState-Ckzcuwb2.js";import"./Collection-Dabp6tSw.js";import"./CollectionBuilder-Dc9k3CRr.js";import"./SelectionIndicator-Drl_jI2J.js";import"./Separator-D7rNCrfy.js";import"./SelectionManager-CyQywfav.js";import"./useEvent-msC5Saat.js";import"./useCollator-ia3Kz-2A.js";import"./FocusScope-Cff801J_.js";import"./VisuallyHidden-Rhd9Lwfr.js";import"./AlertText-G52nApD-.js";import"./AlertIcon-CswpW_U3.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
