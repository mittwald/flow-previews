import{j as r,r as F}from"./iframe-BgKMnsqP.js";import{L as l}from"./Label-8eLvO5Vl.js";import{F as o}from"./FileField-DTsfe3XK.js";import{B as t}from"./Button-BtfzhoC2.js";import{S as f}from"./Section-D7E7l6M3.js";import{F as h}from"./FieldError-C-lZWEzn.js";import{F as x}from"./FieldDescription-DSPaRw4X.js";import{R as S,O as j}from"./IconWarning-LAZRyVR3.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-K5lY2cwd.js";import"./index-BfRfH9Zo.js";import"./index-Cjd0WNlk.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./context-bU_PoVUz.js";import"./Label-DB6i0Far.js";import"./utils-DF7rIzyn.js";import"./Hidden-DjEbUam7.js";import"./useFormValidation-BuWufY-j.js";import"./useFocus-rZbUMOOr.js";import"./useFocusRing-Do_SyrKm.js";import"./FieldError-DrPRBP1_.js";import"./Text-DxRa_Q_m.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-DxGeYMpI.js";import"./browser-CrtXW1Io.js";import"./useFieldComponent-BrPuybAK.js";import"./Text-C3i_8DOD.js";import"./EmulatedBoldText-CGtkaQmh.js";import"./LoadingSpinner-CVpmlYAZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BqVO6mjn.js";import"./Button-CpsY86Gq.js";import"./ProgressBar-BWgoyrrO.js";import"./useLabel-cKqQKm7D.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BRD_gMdl.js";import"./useFocusable-D4mYKpyk.js";import"./ContextMenuSection-DBH05xVc.js";import"./ActionBatch-4ndP-n8L.js";import"./useOverlayController-D55f6wXT.js";import"./useStatic-BGwbdR9P.js";import"./getActionGroupSlot-DyZ1DXI5.js";import"./dynamic-EDiDAp0E.js";import"./Dialog-BWmXoaKF.js";import"./RSPContexts-DOCQ2POG.js";import"./OverlayArrow-5gMuSGka.js";import"./useControlledState-CIyJs2jp.js";import"./Collection-DFA5r9t5.js";import"./CollectionBuilder-f0lBOmxU.js";import"./SelectionIndicator-Uu23SvC3.js";import"./Separator-nr_f8Y_b.js";import"./SelectionManager-DVR2wm8O.js";import"./useEvent-y3i9KFGu.js";import"./useCollator-Dqx-tu-j.js";import"./FocusScope-CnP7IT5L.js";import"./VisuallyHidden-CtgyRlvv.js";import"./AlertText-bVfxlZAe.js";import"./AlertIcon-CcDG2G1r.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
