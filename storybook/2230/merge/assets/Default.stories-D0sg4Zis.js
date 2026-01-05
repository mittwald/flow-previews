import{j as r,r as F}from"./iframe-CnrbHwTe.js";import{L as l}from"./Label-CIbW0Z8y.js";import{F as o}from"./FileField-DaNgG14W.js";import{B as t}from"./Button-DoJYz9nf.js";import{S as f}from"./Section-BExQZgWB.js";import{F as h}from"./FieldError-BJU6XwC7.js";import{F as x}from"./FieldDescription-B5czV7Ha.js";import{M as S,C as j}from"./IconWarning-DgLNPfaL.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aR3apKPq.js";import"./index-Cg95cP60.js";import"./index-CUZGjyPT.js";import"./useLocalizedStringFormatter-CyCvm50e.js";import"./context-B7MLny9I.js";import"./Label-BQw60TG0.js";import"./utils-r4y_43wh.js";import"./Hidden-kZWiQEu_.js";import"./useFormValidation-C9gosTEe.js";import"./useFocus-CW3ebFsS.js";import"./FieldError-DsDXGDD4.js";import"./Text-nMrjd92_.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-U8_Yl4jm.js";import"./useFocusRing-CRQTw2D7.js";import"./browser-TZQakXKU.js";import"./useFieldComponent-DrIyQ-Oz.js";import"./Text-eTz9hgbN.js";import"./EmulatedBoldText-B4gWqNJ7.js";import"./LoadingSpinner-BfrmZLfO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CmycR9zC.js";import"./Button-CDvqfYYW.js";import"./ProgressBar-VG7_xCrZ.js";import"./useLabel-Dn56kI8F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DoQNUybf.js";import"./useFocusable-DrwEzR41.js";import"./ContextMenuSection-JoSq6Aah.js";import"./Action-Csai7jBT.js";import"./context-BuaNu4Hn.js";import"./useStatic-D1Vs9fsX.js";import"./getActionGroupSlot-C6hg9FJg.js";import"./dynamic-D-DaJWqs.js";import"./Dialog-CsKt9ioo.js";import"./RSPContexts-CU1Sv8RV.js";import"./OverlayArrow-CJqqEQZv.js";import"./useControlledState-CcfbhOaY.js";import"./Collection-Djv1d9Z_.js";import"./CollectionBuilder-BkOVJAZN.js";import"./SelectionIndicator-CTBQmwrG.js";import"./Separator-D2suaWuM.js";import"./SelectionManager-dddCba2a.js";import"./useEvent-Diyat4Qa.js";import"./useCollator-aieXWn7K.js";import"./FocusScope-CJbwLE5j.js";import"./VisuallyHidden-DYF5WgrZ.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Ir={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Lr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Lr as __namedExportsOrder,Ir as default};
