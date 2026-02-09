import{j as r,r as F}from"./iframe-CcNHCKoB.js";import{L as l}from"./Label-F2VOWZsZ.js";import{F as o}from"./FileField-CZUBoT82.js";import{B as t}from"./Button-DTuLbClr.js";import{S as f}from"./Section-C7V_cxBu.js";import{F as h}from"./FieldError-BlodrZIq.js";import{F as x}from"./FieldDescription-tCT0DlP5.js";import{R as S,O as j}from"./IconWarning-DmrAmEd1.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./index-C0Ga1GvX.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./context-LfQwLpL0.js";import"./Label-BWg6WlKG.js";import"./utils-NnqZ9ZBK.js";import"./Hidden-B3wID84r.js";import"./useFormValidation-PdvsTzHy.js";import"./useFocus-SYOVVSYu.js";import"./useFocusRing-C53Oh36V.js";import"./FieldError--IyvMZRA.js";import"./Text-BCtKE9i4.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-D-KHai3o.js";import"./browser-C0P1LItQ.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./Text-BmtlE-88.js";import"./EmulatedBoldText-BunH9Anl.js";import"./LoadingSpinner-B5nlxM1K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CVy042JL.js";import"./Button-D33T_EGm.js";import"./ProgressBar-B-cW6vCD.js";import"./useLabel-CyCYkDRj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eyc-LVl-.js";import"./useFocusable-Dm2HHW3t.js";import"./ContextMenuSection-mqwvvgq0.js";import"./Action-XHgAr--T.js";import"./context-QFR9DY6D.js";import"./useStatic-BA9Xyuh5.js";import"./getActionGroupSlot-BqdIRyOr.js";import"./dynamic-nNoo79J6.js";import"./Dialog-DlflAgwc.js";import"./RSPContexts-DYw5y0O9.js";import"./OverlayArrow-BhIInrDo.js";import"./useControlledState-TVt6Qf5c.js";import"./Collection-B_UfiUp2.js";import"./CollectionBuilder-ClUBiV0v.js";import"./SelectionIndicator-CQiEQ8QD.js";import"./Separator-CJZ-PY1K.js";import"./SelectionManager-CMW6n3Mg.js";import"./useEvent-DmaMUS07.js";import"./useCollator-lY1OBRiY.js";import"./FocusScope-_ikiXfPV.js";import"./VisuallyHidden-FLGfwvrv.js";import"./AlertText-CklP5D4q.js";import"./AlertIcon-DM6j3Z28.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
