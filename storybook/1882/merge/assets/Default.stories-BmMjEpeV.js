import{j as e,r as O}from"./iframe-BPnb-8PC.js";import{L as s}from"./Label-bLTq-ewh.js";import{F as o}from"./FileField-CJyG8uoN.js";import{B as t}from"./Button-chDOhf6m.js";import{S as A}from"./Section-BdlMDPLS.js";import{F as H}from"./FieldError-hQRdtdq8.js";import{F as P}from"./FieldDescription-CGFQo9BV.js";import{K as R,a1 as G}from"./IconWarning-j0MoznR6.js";import{u as U,F as k,t as q}from"./Form-B1foVCQX.js";import{A as w}from"./ActionGroup-DCIMc_j4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cb7EFbEI.js";import"./mergeRefs-CPe5M-5f.js";import"./index-CxYrBtXy.js";import"./useLocalizedStringFormatter-CyshasSy.js";import"./context-Cvzu1MDH.js";import"./Label-V02MVWo9.js";import"./utils-BNZdeyCH.js";import"./Hidden-Crd3-5R7.js";import"./FormField.module-CqWyJNQI.js";import"./Form-CLKe_oCF.js";import"./useFocus-CQt3VlDx.js";import"./useLabel-Mae_nSQP.js";import"./FieldError-Dg8qbhsB.js";import"./Text-KWqvWgwT.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BfJL9-FJ.js";import"./useFocusRing-uXaHHV-0.js";import"./browser-tQ-t1xxT.js";import"./Text-Ba-uZw6F.js";import"./EmulatedBoldText-B7r9Z-1q.js";import"./LoadingSpinner-BUt2pcHy.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DWahSmPc.js";import"./ProgressBar-C4vCg6TA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DbV6qfru.js";import"./useFocusable-DW9GZi2B.js";import"./ContextMenuSection-D-7n8W_E.js";import"./Action-Bmubu_cL.js";import"./context-DmMltsbs.js";import"./useStatic-2pKXc1Kg.js";import"./getActionGroupSlot-DxqE-qL0.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-ChpM20JY.js";import"./RSPContexts-2Y1bGEeq.js";import"./OverlayArrow-DddHfoXR.js";import"./useControlledState-BZWp4i98.js";import"./Collection-FyZk2N5J.js";import"./CollectionBuilder-CoX_7NKP.js";import"./Separator-ACF8I6Sm.js";import"./SearchField-DgHP0CGL.js";import"./useTextField-YbT0qQ_m.js";import"./useFormReset-BXLcPYzT.js";import"./TextField-DLL4ZGuM.js";import"./useEvent-C_P8io5N.js";import"./SelectionManager-BBZQaH8A.js";import"./useCollator-bsozdqlF.js";import"./FocusScope-CnAVXuaX.js";import"./VisuallyHidden-BEucGg6b.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,B,v;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var y,C,L;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,g,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var D,W,_;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const Xe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Xe as __namedExportsOrder,Ve as default};
