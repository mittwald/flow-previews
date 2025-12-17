import{j as r,r as F}from"./iframe-BsZhBXal.js";import{L as l}from"./Label-XwOnxXzc.js";import{F as o}from"./FileField-DzgH_H0Q.js";import{B as t}from"./Button-Cxmuw7nD.js";import{S as f}from"./Section-4lXA4afp.js";import{F as h}from"./FieldError-CMRDgIJA.js";import{F as x}from"./FieldDescription-DnEcRZ-N.js";import{c as S,b as j}from"./IconApp-DFfFI-8B.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DISNxOrN.js";import"./index-lT5ImJcm.js";import"./index-Dw50_Btz.js";import"./useLocalizedStringFormatter-DNPpU0EQ.js";import"./context-BsHlRP-r.js";import"./Label-Bdtu_aaV.js";import"./utils-D7f3lHNi.js";import"./Hidden-B-7zzc6R.js";import"./useFormValidation-WNRR-_5g.js";import"./useFocus-DkItBW7w.js";import"./FieldError-Dpf9fLlc.js";import"./Text-CICvYdKp.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-Bo9ofHsZ.js";import"./useFocusRing-C7h1YZo7.js";import"./browser-B5Kx9HDY.js";import"./useFieldComponent-DadDOWX3.js";import"./IconX-CWxyzjFw.js";import"./IconCheck-B4zjzfHZ.js";import"./Text-CWir5uzG.js";import"./EmulatedBoldText-72QMrXCW.js";import"./LoadingSpinner-D802Ys_g.js";import"./ariaLive-BCVvTk3U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-C6zziWZe.js";import"./Button-DmBDFYEY.js";import"./ProgressBar-BuAY7GL-.js";import"./useLabel-DMdE4zjY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BfmYyYbe.js";import"./useFocusable-CefaVcL6.js";import"./ContextMenuSection-C2eJTG_x.js";import"./lib-90ocxLs-.js";import"./Action-CL1C_viL.js";import"./useStatic-CKUwua6_.js";import"./getActionGroupSlot-BjVvI7Fw.js";import"./context-DVwGhZ9t.js";import"./dynamic-V9DMyUPi.js";import"./Dialog-D9Y5GrYo.js";import"./RSPContexts-CGJG9_Ew.js";import"./OverlayArrow-CT9B4GiY.js";import"./useControlledState-Bxg7VuAu.js";import"./Collection-DAkGHX-3.js";import"./CollectionBuilder-D8uuaET0.js";import"./SelectionIndicator-BYUqX36x.js";import"./Separator-Bm5TH6F1.js";import"./SelectionManager-BYlJdR-V.js";import"./useEvent-BIGXqu2E.js";import"./useCollator-CmHstSkI.js";import"./FocusScope-qpEeXdaL.js";import"./VisuallyHidden-W4tQCM8c.js";import"./IconDanger-D44A5Pyv.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Wr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Or=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Or as __namedExportsOrder,Wr as default};
