import{j as r,r as F}from"./iframe-C037GO3p.js";import{L as l}from"./Label-B8SETf0h.js";import{F as o}from"./FileField-Cy3QVn-v.js";import{B as t}from"./Button-Cf9guGvq.js";import{S as f}from"./Section-B8monzQm.js";import{F as h}from"./FieldError-B5a1fJJd.js";import{F as x}from"./FieldDescription-BhLI0C98.js";import{R as S,O as j}from"./IconWarning-tMH4RyLr.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DDhfot0o.js";import"./index-wUcB077p.js";import"./index-aVIlTX7l.js";import"./useLocalizedStringFormatter-yCwjB9xr.js";import"./context-Cm0s8R8a.js";import"./Label-B5WCISDn.js";import"./utils-B21QcS96.js";import"./Hidden-CT4yCR-L.js";import"./useFormValidation-kMumfte1.js";import"./useFocus-CuP2Z3Ew.js";import"./useFocusRing-D8Rjq8L2.js";import"./FieldError-BWfaawdZ.js";import"./Text-BlWqR5Lx.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-COylKlun.js";import"./browser-CtD1Hg4J.js";import"./useFieldComponent-BW6tilSl.js";import"./Text-1H8qvaGa.js";import"./EmulatedBoldText-BFdb5mKm.js";import"./LoadingSpinner-7anO2L1H.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BG6_lggN.js";import"./Button-3UAE6tol.js";import"./ProgressBar-Cvwm74GX.js";import"./useLabel-FMiMqQcP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DtHLFK3z.js";import"./useFocusable-DZHoKnFR.js";import"./ContextMenuSection-yxbgVkhw.js";import"./ActionBatch-BkGPDfVM.js";import"./useOverlayController-CulrQTjS.js";import"./useStatic-zK9KTA7T.js";import"./getActionGroupSlot-Be7CG0GW.js";import"./dynamic-CXANBhHf.js";import"./Dialog-Sd6ebC5F.js";import"./RSPContexts-Cx4BM4L8.js";import"./OverlayArrow-Ct00V4z2.js";import"./useControlledState-DIGHyhBs.js";import"./Collection--dT_Uf-3.js";import"./CollectionBuilder-BaeZE-8K.js";import"./SelectionIndicator-DMUN5t4K.js";import"./Separator-DqZ2iszF.js";import"./SelectionManager-DPHkBOMj.js";import"./useEvent-DWoTHX9Z.js";import"./useCollator-SPxqcFer.js";import"./FocusScope-ByEh1Q0k.js";import"./VisuallyHidden-DBGkoZNP.js";import"./AlertText-BaelcRob.js";import"./AlertIcon-CoEhaz6M.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
