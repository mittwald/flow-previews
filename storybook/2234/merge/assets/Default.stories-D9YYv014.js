import{j as r,r as F}from"./iframe-DZ4teeW0.js";import{L as l}from"./Label-DoWn6F4v.js";import{F as o}from"./FileField-CcbaEjiB.js";import{B as t}from"./Button-DKoFnNBZ.js";import{S as f}from"./Section-239igX5r.js";import{F as h}from"./FieldError-AZ-rkViQ.js";import{F as x}from"./FieldDescription-wBHtE-uB.js";import{O as S,L as j}from"./IconWarning-BMXzPSbA.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CieJlEUq.js";import"./index-Dth1hoGd.js";import"./index-hJtfnrYv.js";import"./useLocalizedStringFormatter-wvOzWyd2.js";import"./context-CZC3VL3b.js";import"./Label-DqsFtup3.js";import"./utils-CmR_RyV0.js";import"./Hidden-D1rcdGtX.js";import"./useFormValidation-DQHMrpfA.js";import"./useFocus-DPzONbd_.js";import"./FieldError-DkoCPEDN.js";import"./Text-BkVlga5W.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-D0qY3wir.js";import"./useFocusRing-Bi_KX66p.js";import"./browser-BOIGtlkn.js";import"./useFieldComponent-D07Wu5hH.js";import"./Text-C4YBtGrU.js";import"./EmulatedBoldText-D386c9ln.js";import"./LoadingSpinner-DJRFuNH9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-C7mA51oY.js";import"./Button-BNevv18m.js";import"./ProgressBar-qebYfenN.js";import"./useLabel-CN_YQU3T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DM-2A3ZD.js";import"./useFocusable-V-w09cqm.js";import"./ContextMenuSection-NaF-svH4.js";import"./Action-IUgUGwCY.js";import"./context-CSe622gL.js";import"./useStatic-C2g0a5Fu.js";import"./getActionGroupSlot-H_zTh0GS.js";import"./dynamic-DLpaDBxN.js";import"./Dialog-mp_BsC5B.js";import"./RSPContexts-BvqxEhTE.js";import"./OverlayArrow-DMnQ82Lw.js";import"./useControlledState-CE05dG3o.js";import"./Collection-w_out5sE.js";import"./CollectionBuilder-DNyI9Nan.js";import"./SelectionIndicator-C2FrsSd1.js";import"./Separator-Dh-vjBlE.js";import"./SelectionManager-W-Kl84XM.js";import"./useEvent-Rvr_SgMv.js";import"./useCollator-DxlaTcxe.js";import"./FocusScope-BJdWB0PZ.js";import"./VisuallyHidden-DG5gzPUr.js";import"./AlertText-Dur7DX9B.js";import"./AlertIcon-Dng1V2P2.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
