import{j as r,r as u}from"./iframe-BZ1p44Xs.js";import{L as p}from"./Label-HK0aVnMe.js";import{F as t}from"./FileField-DKbQreh7.js";import{B as o}from"./Button-BXzJaHaH.js";import{S as F}from"./Section-DYkPYl1t.js";import{F as f}from"./FieldError-t823MHuJ.js";import{F as h}from"./FieldDescription-PY5u12Fd.js";import{R as x,O as S}from"./IconWarning-BeCXg6tW.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./index-39FgH5sT.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./Label-9zEXlfwO.js";import"./utils-Cc2PUaBi.js";import"./Hidden-VD2bsukW.js";import"./useFormValidation-oY9u4Y5a.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./FieldError-DP4FZd0x.js";import"./Text-DOPFHCGV.js";import"./filterDOMProps-BNnC3YgW.js";import"./Input-Bt20yVH7.js";import"./browser-N7XS9wRL.js";import"./useFieldComponent-CdmiPNAX.js";import"./Text-CplKG2wk.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BEHhGsYi.js";import"./Button-DOqybSdu.js";import"./ProgressBar-B4598OFN.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CQ2PTrK5.js";import"./useFocusable-BXiUGBNe.js";import"./ContextMenuSection-FMJg67QM.js";import"./ActionBatch-kp--iEDz.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./getActionGroupSlot-D6uph6L1.js";import"./dynamic-BvoZFGdS.js";import"./Dialog-DlxSrM7S.js";import"./RSPContexts-C2tYRgOg.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";import"./AlertText-CHdPuYCZ.js";import"./AlertIcon-CBSVIKWa.js";const j=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=x("outline","paperclip","Paperclip",j),Ir={title:"Form Controls/FileField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},render:e=>r.jsxs(t,{...e,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"Supported formats: .pem, .pfx"})]})},s={render:e=>r.jsxs(t,{...e,isInvalid:!0,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(f,{children:"File too large"})]})},a={render:e=>r.jsx(t,{...e,children:r.jsx(o,{variant:"soft","aria-label":"Select certificate",children:r.jsx(S,{children:r.jsx(v,{})})})})},l={render:e=>{const[c,m]=u.useState(null),d=c?.[0];return r.jsxs(F,{children:[r.jsxs(t,{...e,onChange:m,children:[r.jsx(p,{children:"Certificate"}),r.jsx(o,{variant:"outline",color:"secondary",children:"Select"})]}),d?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Lr=["Default","WithFieldDescription","WithFieldError","IconButton","WithHandler"];export{i as Default,a as IconButton,n as WithFieldDescription,s as WithFieldError,l as WithHandler,Lr as __namedExportsOrder,Ir as default};
