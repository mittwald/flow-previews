import{j as r,r as F}from"./iframe-olJof__V.js";import{L as l}from"./Label-6dyeRQav.js";import{F as o}from"./FileField-Doc8X3Pf.js";import{B as t}from"./Button-CPlz8rsS.js";import{S as f}from"./Section-xajLDDkQ.js";import{F as h}from"./FieldError-l4UC5eIi.js";import{F as x}from"./FieldDescription-Brn6Ug7r.js";import{R as S,O as j}from"./IconWarning-Dxqo3db7.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoGNni0d.js";import"./index-DXuGOHKQ.js";import"./index-CQizCcaV.js";import"./useLocalizedStringFormatter-DTXdFjR3.js";import"./context-DOTF4vQp.js";import"./Label-DdZBH8rR.js";import"./utils-B7tchdhx.js";import"./Hidden-DoUj_dUj.js";import"./useFormValidation-D5cIPr0y.js";import"./useFocus-C7qSpl6p.js";import"./useFocusRing-D32aTWMq.js";import"./FieldError-kWwHEGnK.js";import"./Text-PinZmeRI.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-C1ZdZWYR.js";import"./browser-IACFT9IC.js";import"./useFieldComponent-BI2nSVzd.js";import"./Text-Dd-S15-B.js";import"./EmulatedBoldText-BFx3xjvZ.js";import"./LoadingSpinner-CT-rb4W5.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BFSWQwUW.js";import"./Button-BzbIVXwM.js";import"./ProgressBar-CgXlpLJ2.js";import"./useLabel-CtYRRhYq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-UZLq5kUQ.js";import"./useFocusable-3WtiVhvt.js";import"./ContextMenuSection-C9tKIY6H.js";import"./ActionBatch-DqsTFo-5.js";import"./useOverlayController-CA843Gf5.js";import"./useStatic-DVdbIJHO.js";import"./getActionGroupSlot-CoFa2pz_.js";import"./dynamic-C_FBHMxE.js";import"./Dialog-DOR07iZd.js";import"./RSPContexts-BVirgRiO.js";import"./OverlayArrow-B-0VQUib.js";import"./useControlledState-CGGJ5ydn.js";import"./Collection-WZVC-4xi.js";import"./CollectionBuilder-vpp5jjd8.js";import"./SelectionIndicator-D2HcZFFA.js";import"./Separator-8BcW__js.js";import"./SelectionManager-DXB33zuh.js";import"./useEvent-CNSbk4we.js";import"./useCollator-DxO-TF_t.js";import"./FocusScope-Db9L4ciT.js";import"./VisuallyHidden-D0VqbVmf.js";import"./AlertText-DHxSCH5W.js";import"./AlertIcon-DL26tbpe.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
