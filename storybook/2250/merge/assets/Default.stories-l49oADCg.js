import{j as r,r as F}from"./iframe-CF9WEugj.js";import{L as l}from"./Label-ZZPbbDTF.js";import{F as o}from"./FileField-pY2a0jpS.js";import{B as t}from"./Button-Dt7_Feft.js";import{S as f}from"./Section-z4bbW8IF.js";import{F as h}from"./FieldError-D4UoR9vC.js";import{F as x}from"./FieldDescription-BgZC1fDx.js";import{O as S,L as j}from"./IconWarning-DXWyAVP8.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./index-DHfgQlLW.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./context-Bi2P07EN.js";import"./Label-DWGH1ubm.js";import"./utils-B4BZttt0.js";import"./Hidden-Dk3zZO8j.js";import"./useFormValidation-BLUWg_De.js";import"./useFocus-DZR1guyz.js";import"./FieldError-BfE9I5LY.js";import"./Text-wlSF0gym.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-BGfnvYjW.js";import"./useFocusRing-Ddjb8e7x.js";import"./browser-CV2qUG2E.js";import"./useFieldComponent-B3P2g6wY.js";import"./Text-Czdsn8RZ.js";import"./EmulatedBoldText--WvdXsxT.js";import"./LoadingSpinner-CdxOiWQd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DKS26xip.js";import"./Button--TTYmuFt.js";import"./ProgressBar-BnLxRH_4.js";import"./useLabel-DF6AwuO5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuLNiG6M.js";import"./useFocusable-CSB6sBEJ.js";import"./ContextMenuSection-ChhzEL-I.js";import"./Action-DBGOtx5u.js";import"./context-Dm_RzWW0.js";import"./useStatic-De5kLziu.js";import"./getActionGroupSlot-Cyy_QqE0.js";import"./dynamic-DQFpeFdM.js";import"./Dialog-Dbq5Vprd.js";import"./RSPContexts-DsXbJK4N.js";import"./OverlayArrow-CtiJ0l0O.js";import"./useControlledState-C05rL349.js";import"./Collection-B5WHZIaw.js";import"./CollectionBuilder-DOv_JUaO.js";import"./SelectionIndicator-CwdThPwI.js";import"./Separator-DX3N9c3E.js";import"./SelectionManager-u6mq2cJr.js";import"./useEvent-DJoiCzFm.js";import"./useCollator-Cuc5YyeJ.js";import"./FocusScope-Dw5dGdxw.js";import"./VisuallyHidden-C66z9jQL.js";import"./AlertText-BTQfuEQp.js";import"./AlertIcon-Ck6cmA9H.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
