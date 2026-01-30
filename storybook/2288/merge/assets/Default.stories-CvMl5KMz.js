import{j as r,r as F}from"./iframe-BipmDVic.js";import{L as l}from"./Label-D7pFsU69.js";import{F as o}from"./FileField-DfihVAIz.js";import{B as t}from"./Button-BuQAY4x2.js";import{S as f}from"./Section-BSyGStrt.js";import{F as h}from"./FieldError-CHo9rwLP.js";import{F as x}from"./FieldDescription-BEUHW4qH.js";import{N as S,K as j}from"./IconWarning-CGnZi41_.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CqzOrDl2.js";import"./index-5IWmXg28.js";import"./index-DhRV0L_D.js";import"./useLocalizedStringFormatter-DMEYEfT-.js";import"./context-Br1o_Gsv.js";import"./Label-CKCJMrcf.js";import"./utils-BmvAbY6y.js";import"./Hidden-CaQYrS-R.js";import"./useFormValidation-DUx2L2VN.js";import"./useFocus-1VXHi-Mn.js";import"./useFocusRing-B8DUU0zm.js";import"./FieldError-BYM5jSaa.js";import"./Text-Bx_sJIF1.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-CWeCnXba.js";import"./browser-CR-oUB3P.js";import"./useFieldComponent-VycST_vs.js";import"./Text-D0LSWbFT.js";import"./EmulatedBoldText-B1_mjQ_l.js";import"./LoadingSpinner-4_K5lSJw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-Bx5-otuG.js";import"./Button-JOtZZNa7.js";import"./ProgressBar-WDsF0b96.js";import"./useLabel-DZFs0BX7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BGUPUAq5.js";import"./useFocusable-CoJ_GBdx.js";import"./ContextMenuSection-CO4DhhVm.js";import"./Action-B2seXdE0.js";import"./context-DDKbSZpU.js";import"./useStatic-DNvp4EKT.js";import"./getActionGroupSlot-OnPTJ5ul.js";import"./dynamic-5Me7t2_P.js";import"./Dialog-BXIha8hU.js";import"./RSPContexts-EgPs8m3a.js";import"./OverlayArrow-Crdn15eZ.js";import"./useControlledState-CTBxctZq.js";import"./Collection-DZXXzgBW.js";import"./CollectionBuilder-BRXbMuqB.js";import"./SelectionIndicator-DQakRxMT.js";import"./Separator-DJ26kkKw.js";import"./SelectionManager-Bp4YXEPt.js";import"./useEvent-B4avBJ26.js";import"./useCollator-BmSf6CmH.js";import"./FocusScope-BUuvBHJx.js";import"./VisuallyHidden-CJz5Ez-_.js";import"./AlertText-BpI_nGHQ.js";import"./AlertIcon-Cy_cDr6j.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
