import{j as r,r as F}from"./iframe-BLisfkW1.js";import{L as l}from"./Label-C4q0QTf_.js";import{F as o}from"./FileField-BKxVQvZW.js";import{B as t}from"./Button-BfYq4-Jl.js";import{S as f}from"./Section-BpUd8Q8x.js";import{F as h}from"./FieldError-ClH5zNHK.js";import{F as x}from"./FieldDescription-C0N-joI8.js";import{R as S,O as j}from"./IconWarning-Chxh05Fa.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DivMJame.js";import"./index-DOES4bKx.js";import"./index-CURFR8tK.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./context-B09EtTwC.js";import"./Label-BayswAfQ.js";import"./utils-B2KexK2G.js";import"./Hidden-DTcX35LP.js";import"./useFormValidation-BvwbNbVP.js";import"./useFocus-CasiJiIj.js";import"./useFocusRing-whNl8W73.js";import"./FieldError-BmP7KZUf.js";import"./Text-CMQTkDl6.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-BNQv7Er9.js";import"./browser-1YnzmFhG.js";import"./useFieldComponent-DG2srt-t.js";import"./Text-BzdTXRF7.js";import"./EmulatedBoldText-w1zEViUr.js";import"./LoadingSpinner-Bv9Y6jEa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-fMZF2a4s.js";import"./Button-BryrJTx5.js";import"./ProgressBar-DldYxOmc.js";import"./useLabel-DktisoZ5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bt2uh0Mh.js";import"./useFocusable-2bJXkpaN.js";import"./ContextMenuSection-bY8Y-pvV.js";import"./ActionBatch-Ba3fo7J6.js";import"./useOverlayController-UaqgI9Sz.js";import"./useStatic-Cf1wupkY.js";import"./getActionGroupSlot-JAeF61ot.js";import"./dynamic-B3kpKjwM.js";import"./Dialog-YGNnE7N8.js";import"./RSPContexts-C6v4G0P9.js";import"./OverlayArrow-CazCWSIw.js";import"./useControlledState-BzKS6zrg.js";import"./Collection-B29ecyfu.js";import"./CollectionBuilder-CkN2XN_g.js";import"./SelectionIndicator-DkROylNb.js";import"./Separator-DUCS1p3N.js";import"./SelectionManager-CZqcsdfY.js";import"./useEvent-DXG1g0h1.js";import"./useCollator-BipIKgaT.js";import"./FocusScope-CH3eRbFP.js";import"./VisuallyHidden-y8IU71vp.js";import"./AlertText-DXmhqwQY.js";import"./AlertIcon-BH2ywHIc.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
