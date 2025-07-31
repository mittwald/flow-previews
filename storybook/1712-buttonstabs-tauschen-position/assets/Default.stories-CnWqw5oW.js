import{j as e,r as O}from"./iframe-DLPMA2Jy.js";import{L as s}from"./Label-njveXq1g.js";import{F as o}from"./FileField-CEAltqDs.js";import{B as t}from"./Button-Bg9EI6ke.js";import{S as A}from"./Section-_BKPgPPk.js";import{F as H}from"./FieldError-C4PtmRqe.js";import{F as P}from"./FieldDescription-C9CGNDRE.js";import{C as R,_ as G}from"./IconWarning-BZNHqQOv.js";import{u as U,F as k,t as q}from"./Form-Br4WFxUW.js";import{A as w}from"./ActionGroup-Be0XQrwT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cw3WmaAV.js";import"./mergeRefs-aO6HcVoY.js";import"./index-CivGAYnp.js";import"./useLocalizedStringFormatter-BX1Rg6Wn.js";import"./context-BFBvnlV1.js";import"./Label-tqYGMXcy.js";import"./utils-b1QyYEgl.js";import"./Hidden-Ba5oTT5z.js";import"./FormField.module-B9AzUSUD.js";import"./Form-DfIg0xpy.js";import"./useFocus-rX-PXuLl.js";import"./useLabel-D3WVZ9yP.js";import"./FieldError-Cgq9toxC.js";import"./Text-DL4PvoSo.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CGwZZGNH.js";import"./useFocusRing-DFqScG39.js";import"./browser-Bc43_gVJ.js";import"./Text-BHcv_RSt.js";import"./EmulatedBoldText-BMpcVoTB.js";import"./LoadingSpinner-BpI0Au67.js";import"./Button-D9zXVRa2.js";import"./ProgressBar-DSj6SBtF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DwtsQH2c.js";import"./useFocusable-CToQXnw-.js";import"./ContextMenuSection-CfQ2STgX.js";import"./Action-BCWbF5ob.js";import"./context-DC5SRHlZ.js";import"./useStatic-m6uLMmhn.js";import"./getActionGroupSlot-C-GBSGDA.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-ClROTFho.js";import"./RSPContexts-ClqXx4oa.js";import"./OverlayArrow-3BLRTQic.js";import"./useControlledState-Btp8qCFq.js";import"./Collection-B7eLtKl3.js";import"./CollectionBuilder-CE08yFAM.js";import"./Separator-BudPJPnA.js";import"./SearchField-CSx5BdQ3.js";import"./useTextField-CpoClV52.js";import"./useFormReset-L6ko3eQg.js";import"./TextField--NLdPxFk.js";import"./useEvent-PyKag1Em.js";import"./SelectionManager-D0ySastt.js";import"./useCollator-DMUqz4RZ.js";import"./FocusScope-DA4TfNEK.js";import"./VisuallyHidden-C4Kk4Esh.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var C,y,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(y=m.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var I,g,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var _,D,W;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Xe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Xe as __namedExportsOrder,Ve as default};
