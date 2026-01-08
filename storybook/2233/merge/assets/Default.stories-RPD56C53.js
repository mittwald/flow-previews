import{j as r,r as F}from"./iframe-BMquwUxp.js";import{L as l}from"./Label-RP2jfdXb.js";import{F as o}from"./FileField--T5XOwYU.js";import{B as t}from"./Button-DvE0An6z.js";import{S as f}from"./Section-Cjc_LDxh.js";import{F as h}from"./FieldError-DmIKwRtH.js";import{F as x}from"./FieldDescription-CjEOnvYA.js";import{N as S,D as j}from"./IconWarning-wcTYZTVE.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./index-cAMRUrux.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./context-BcuHL9mG.js";import"./Label-BA-uOG5q.js";import"./utils-C54becjs.js";import"./Hidden-DXpev5BT.js";import"./useFormValidation-BU69543b.js";import"./useFocus-DaRXVXg_.js";import"./FieldError-D0s5eFn1.js";import"./Text-CPXkgTZA.js";import"./filterDOMProps-i7L6S0l1.js";import"./Input-DU1QpXVG.js";import"./useFocusRing-CjhJ1DIN.js";import"./browser-CBlt42Oy.js";import"./useFieldComponent-7OMeXUSU.js";import"./Text-EG4UQ_l2.js";import"./EmulatedBoldText-CntJSrfE.js";import"./LoadingSpinner-BPW5hp_J.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CiXlw4PI.js";import"./Button-CwpJPQ3S.js";import"./ProgressBar-ztA157SI.js";import"./useLabel-BNLCM250.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B-RZvczw.js";import"./useFocusable-DNP9d3st.js";import"./ContextMenuSection-DHh_hwVu.js";import"./Action-4VgG125V.js";import"./context-BbITb74L.js";import"./useStatic-BMpae3_g.js";import"./getActionGroupSlot-D40b9Kwq.js";import"./dynamic-B-3tImXr.js";import"./Dialog-Dx0VK2pV.js";import"./RSPContexts-BjvY3wPf.js";import"./OverlayArrow-LMfUU-b0.js";import"./useControlledState-C-7-yrsk.js";import"./Collection-CkKzGnvH.js";import"./CollectionBuilder-C63eWLYU.js";import"./SelectionIndicator-BIlCebKJ.js";import"./Separator-CIx6Mbjl.js";import"./SelectionManager-WBqA1WyO.js";import"./useEvent-DDWvHjPW.js";import"./useCollator-BviFHu9Y.js";import"./FocusScope-BR9ShKUP.js";import"./VisuallyHidden-D31Z6xaf.js";import"./InlineAlert-AYUYuGXv.js";import"./AlertIcon-COvVg6Bc.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Dr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Er=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Er as __namedExportsOrder,Dr as default};
