import{j as r,r as F}from"./iframe-DQkRMfo_.js";import{L as l}from"./Label-CITwA187.js";import{F as o}from"./FileField-BdeU2I2v.js";import{B as t}from"./Button-CTuc7Sb1.js";import{S as f}from"./Section-L3monAfc.js";import{F as h}from"./FieldError-Bk57uQQs.js";import{F as x}from"./FieldDescription-BmqjHv9O.js";import{R as S,O as j}from"./IconWarning-D2qqMRrO.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-COr712P3.js";import"./index-BIVF9xJy.js";import"./index-BmRrr2ih.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./context-XfcuIoVT.js";import"./Label-BXbqiwP4.js";import"./utils-Bfb5K-41.js";import"./Hidden-xLATKa2n.js";import"./useFormValidation-Baae3HaH.js";import"./useFocus-BSyQYzHK.js";import"./useFocusRing-CrR0o1Yj.js";import"./FieldError-BDV0g7vQ.js";import"./Text-BXxFgtol.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-DgbrTWmb.js";import"./browser-BnHwZVCd.js";import"./useFieldComponent-DKGKIVkH.js";import"./Text-DZXogYJp.js";import"./EmulatedBoldText-BSCRafBI.js";import"./LoadingSpinner-BfuFQdyU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CkmXCgJk.js";import"./Button-BqHvWFWe.js";import"./ProgressBar-D5_QzmmX.js";import"./useLabel-BKmqgaQh.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D8-KGEPi.js";import"./useFocusable-BWtjl4YZ.js";import"./ContextMenuSection-CK2JeTTJ.js";import"./ActionBatch-CnbeSwOL.js";import"./useOverlayController-CkVtRdpi.js";import"./useStatic-D2wW9JFL.js";import"./getActionGroupSlot-BzFwuQYP.js";import"./dynamic-Bf6rAVHb.js";import"./Dialog-cFet4L4X.js";import"./RSPContexts-Bk8qKDL5.js";import"./OverlayArrow-CqKSMCIB.js";import"./useControlledState-CA4wGiI1.js";import"./Collection-D_m0oZ4K.js";import"./CollectionBuilder-DaRvbySL.js";import"./SelectionIndicator-D4WNQsp1.js";import"./Separator-6qwbqbNk.js";import"./SelectionManager-pbpEpJnu.js";import"./useEvent-qZsiEiZh.js";import"./useCollator-DSD1PPYr.js";import"./FocusScope-DAhxUr4_.js";import"./VisuallyHidden-CreEQc-P.js";import"./AlertText-CwnG_GRo.js";import"./AlertIcon-x4dcgk_u.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
