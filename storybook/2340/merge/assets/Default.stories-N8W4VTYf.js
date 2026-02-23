import{j as r,r as F}from"./iframe-BoiTaxGN.js";import{L as l}from"./Label-DgN2b341.js";import{F as o}from"./FileField-DHAi4-xL.js";import{B as t}from"./Button-MYsVPgLO.js";import{S as f}from"./Section-Cq-t_YW4.js";import{F as h}from"./FieldError-DjT7Sc36.js";import{F as x}from"./FieldDescription-Dh4VnfJe.js";import{R as S,O as j}from"./IconWarning-DctWBCm0.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-5SfKf5nB.js";import"./index-CnTFVdv3.js";import"./index-B9o0n-vC.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./context-hlBZKj-7.js";import"./Label-eoW__4rU.js";import"./utils-RetFhwyR.js";import"./Hidden-BZRUsILE.js";import"./useFormValidation-CX6eZKbg.js";import"./useFocus-BSOUAoQt.js";import"./useFocusRing-VutGkHGx.js";import"./FieldError-C1wD6V1t.js";import"./Text-DnUg5-aR.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-CHjKW2hG.js";import"./browser-zBSS86_h.js";import"./useFieldComponent-DiiGd8t3.js";import"./Text-ClfpXeTF.js";import"./EmulatedBoldText-vFeun45o.js";import"./LoadingSpinner-BBdroSRA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-C4jG3DXh.js";import"./Button-BZbFxF4O.js";import"./ProgressBar-L18yOCjI.js";import"./useLabel-B8QgbILE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DoLCzapA.js";import"./useFocusable-CNuWQ5Vu.js";import"./ContextMenuSection-CBBb0XeQ.js";import"./ActionBatch-D2Yqxa5D.js";import"./useOverlayController-BbkltkAX.js";import"./useStatic-bFyj34a0.js";import"./getActionGroupSlot-CkMRx6Vr.js";import"./dynamic-X8snMUB4.js";import"./Dialog-BL8T3CnU.js";import"./RSPContexts-9T8dsftx.js";import"./OverlayArrow-vd9UrCyT.js";import"./useControlledState-DJPWuI7p.js";import"./Collection-BswXFc7F.js";import"./CollectionBuilder-7YZ1XDUD.js";import"./SelectionIndicator-BQPOHDPg.js";import"./Separator-CUdWNTXS.js";import"./SelectionManager-BSZzvdD0.js";import"./useEvent-CSRhnpf0.js";import"./useCollator-CCHmo4fs.js";import"./FocusScope-p908I3Or.js";import"./VisuallyHidden-CML_0Z6P.js";import"./AlertText-aAUEFisb.js";import"./AlertIcon-B1VBridV.js";const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Er={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
