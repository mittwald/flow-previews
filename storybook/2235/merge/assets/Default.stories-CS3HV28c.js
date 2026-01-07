import{j as r,r as F}from"./iframe-Dnm846PF.js";import{L as l}from"./Label-CfPB20lW.js";import{F as o}from"./FileField-LhdkpeQo.js";import{B as t}from"./Button-D3IXyzzj.js";import{S as f}from"./Section-D9UON_ke.js";import{F as h}from"./FieldError-Ze0pQjLj.js";import{F as x}from"./FieldDescription-ChdNC9CF.js";import{M as S,C as j}from"./IconWarning-CExbEpDP.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-S63Cq1sy.js";import"./index-Db1dbbsL.js";import"./index-sBHKlQZD.js";import"./useLocalizedStringFormatter-BqtI09-_.js";import"./context-CoOH5oCy.js";import"./Label-B2apKb0w.js";import"./utils-VDIU0BnD.js";import"./Hidden-1UUWpuD7.js";import"./useFormValidation-CGpO-wMA.js";import"./useFocus-D-7SE4fF.js";import"./FieldError-BJ4Wbc9z.js";import"./Text-1v5GZWlz.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-vek2Lmza.js";import"./useFocusRing-CANRw9LC.js";import"./browser-DEiAhc6G.js";import"./useFieldComponent-CW3QYPg0.js";import"./Text-DtZxu6g8.js";import"./EmulatedBoldText-DH6NWkOG.js";import"./LoadingSpinner-DASF7rgv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-XcyFsW5Q.js";import"./Button-B-4mNKoj.js";import"./ProgressBar-BIFWcEy_.js";import"./useLabel-pLNL7Cvk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CU4gAXU4.js";import"./useFocusable-DgTTkttD.js";import"./ContextMenuSection-C10PM8Bo.js";import"./Action-emK0mmvz.js";import"./context-CfRQ154N.js";import"./useStatic-D4cjHvMF.js";import"./getActionGroupSlot-D_nb0VqF.js";import"./dynamic-CwAvPpRM.js";import"./Dialog-BfuTmdIH.js";import"./RSPContexts-DkLfIxB1.js";import"./OverlayArrow-B81MSBvx.js";import"./useControlledState-CkFAdRGn.js";import"./Collection-CfmXzWv2.js";import"./CollectionBuilder-1cEuD-Tq.js";import"./SelectionIndicator-B7sCGTL_.js";import"./Separator-D5s42kTO.js";import"./SelectionManager-Bx2R39VR.js";import"./useEvent-CkeCMC1K.js";import"./useCollator-mQoUFjwt.js";import"./FocusScope-DH4o0wc_.js";import"./VisuallyHidden-C6zUvnKf.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Ir={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
