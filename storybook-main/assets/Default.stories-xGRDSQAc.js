import{j as r,r as F}from"./iframe-CLDMeli7.js";import{L as l}from"./Label-B6NnPYhK.js";import{F as o}from"./FileField-BplY_hV0.js";import{B as t}from"./Button-BzVheXKP.js";import{S as f}from"./Section-28IJbL-t.js";import{F as h}from"./FieldError-DepvOCr4.js";import{F as x}from"./FieldDescription-CRtf4QpD.js";import{R as S,O as j}from"./IconWarning-p4W4x8Yn.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-oV-3iEWg.js";import"./index-qO7MtLeC.js";import"./index-9eDA9WpJ.js";import"./useLocalizedStringFormatter-BL7vQ06a.js";import"./context-CJeO-2nS.js";import"./Label-CvZQpZvf.js";import"./utils-CeJP1xg2.js";import"./Hidden-B_4q2AdF.js";import"./useFormValidation-DfHAcEvH.js";import"./useFocus-DccW9XIs.js";import"./useFocusRing-D-0mJeTX.js";import"./FieldError-DzENXQGA.js";import"./Text-Doo8ujkC.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-imA8gTQv.js";import"./browser-DchrXhwC.js";import"./useFieldComponent-BtEJhhry.js";import"./Text-CP7Ip6pC.js";import"./EmulatedBoldText-B7dHFZ_g.js";import"./LoadingSpinner-DoDeCRPK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-B4IT0gy2.js";import"./Button-DkOX4zii.js";import"./ProgressBar-DFW8NzQ8.js";import"./useLabel-BXv9j1Wx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-5-cRdm9R.js";import"./useFocusable-B-HKy_Nj.js";import"./ContextMenuSection-BNGygWDz.js";import"./Action-B36_bDyV.js";import"./context-ZEvjkl_L.js";import"./useStatic-CZ7UkCej.js";import"./getActionGroupSlot-C0uwUGhO.js";import"./dynamic-CQUXTbxb.js";import"./Dialog-BqnORwX4.js";import"./RSPContexts-SpTJ-p__.js";import"./OverlayArrow-B5yP7TKG.js";import"./useControlledState-DtGWcuCb.js";import"./Collection-BC2ZOpJQ.js";import"./CollectionBuilder-CH8X2SMa.js";import"./SelectionIndicator-DBZDkcHI.js";import"./Separator-CSbFrQJI.js";import"./SelectionManager-Cf9boCVT.js";import"./useEvent-BRgO1QZf.js";import"./useCollator-CMIPrcXy.js";import"./FocusScope-CDi_kcpI.js";import"./VisuallyHidden--NZ_Ses-.js";import"./AlertText-tt9Tj7ZR.js";import"./AlertIcon-BgEbwDh4.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
