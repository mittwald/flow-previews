import{j as r,r as F}from"./iframe-DewKgIpk.js";import{L as l}from"./Label-DtIMFOsj.js";import{F as o}from"./FileField-D1SaeMH2.js";import{B as t}from"./Button-DK1DwTQu.js";import{S as f}from"./Section-Cq4fcZ5v.js";import{F as h}from"./FieldError-B3PY7-i2.js";import{F as x}from"./FieldDescription-skgZIegf.js";import{R as S,O as j}from"./IconWarning-CrJxptLM.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NiBZ5k5C.js";import"./index-BacMtczP.js";import"./index-BPUeLBAn.js";import"./useLocalizedStringFormatter-BmOUgtE0.js";import"./context-DymIffM8.js";import"./Label-Bc_6vIfO.js";import"./utils-CUPQPHYu.js";import"./Hidden-J_iPf4da.js";import"./useFormValidation-CdyRJz3a.js";import"./useFocus-ChnOBFmm.js";import"./useFocusRing-DiJDuYpp.js";import"./FieldError-BKx1r64I.js";import"./Text-CIY7d5XG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-BM_jCh0C.js";import"./browser-D8jMTJt0.js";import"./useFieldComponent-D7thqSXy.js";import"./Text-CAhyjFWz.js";import"./EmulatedBoldText-DxGIr34d.js";import"./LoadingSpinner-CskkGazD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-B1GLKgHd.js";import"./Button-DrtrHFmq.js";import"./ProgressBar-rh0wULd6.js";import"./useLabel-D1gJfZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-S1YnS57K.js";import"./useFocusable-DVz_n5zl.js";import"./ContextMenuSection-v31gfoed.js";import"./ActionBatch-aysWcgWo.js";import"./useOverlayController-dkwXzy8k.js";import"./useStatic-P7ECoT8y.js";import"./getActionGroupSlot-B6WsgjQx.js";import"./dynamic-7D0Ds_bm.js";import"./Dialog-BgAnH5cc.js";import"./RSPContexts-CJFisqoy.js";import"./OverlayArrow-C0FkFBtp.js";import"./useControlledState-AVItU9lZ.js";import"./Collection-BqPIpj-l.js";import"./CollectionBuilder-B1x7jEag.js";import"./SelectionIndicator-BpbXr_mp.js";import"./Separator-CzQZZCJK.js";import"./SelectionManager-COdXd1z8.js";import"./useEvent-CLk-ZyZx.js";import"./useCollator-Ip-lvHDB.js";import"./FocusScope-BsYVWh0v.js";import"./VisuallyHidden-DNvpUE5M.js";import"./AlertText-BRg5iRF8.js";import"./AlertIcon-Dv2SXDVH.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
