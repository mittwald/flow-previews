import{j as e,r as O}from"./iframe-CXqVlE5o.js";import{L as s}from"./Label-CVPCngVS.js";import{F as o}from"./FileField-qL5qdPSG.js";import{B as t}from"./Button-Du00uc9D.js";import{S as A}from"./Section-xob1V3Iw.js";import{F as H}from"./FieldError-ClDhNlNJ.js";import{F as P}from"./FieldDescription-BhpgNnW8.js";import{C as R,_ as G}from"./IconWarning-DQKg17Kq.js";import{u as U,F as k,t as q}from"./Form-D0aauVQY.js";import{A as w}from"./ActionGroup-CGigqaAK.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-NXXeTbsd.js";import"./mergeRefs-DQ42lkDZ.js";import"./index-ClGSVCJF.js";import"./useLocalizedStringFormatter-CWaF9vId.js";import"./context-b4vYPaxO.js";import"./Label-CEgZ5zSu.js";import"./utils-DhntlPo5.js";import"./Hidden-DGVcGJhp.js";import"./FormField.module-B9AzUSUD.js";import"./Form-WS4i-nO-.js";import"./useFocus-GvwPC70C.js";import"./useLabel-BoMX0OaP.js";import"./FieldError-CFZuL0-a.js";import"./Text-Bve5DhhS.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-Bbua86z1.js";import"./useFocusRing-B7D_5WWT.js";import"./browser-C-6Px3BF.js";import"./Text-CH29UKf3.js";import"./EmulatedBoldText-sAcZVeZh.js";import"./LoadingSpinner-RoF3sq9N.js";import"./Button-DUPqVliB.js";import"./ProgressBar-vJhN7QSw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BIfqd23k.js";import"./useFocusable-Be_5Opbr.js";import"./ContextMenuSection-BMT5ukXt.js";import"./Action-Fouht4PW.js";import"./context-DB5D0RgA.js";import"./useStatic-CfGR59On.js";import"./getActionGroupSlot-DtIGCXnZ.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-B8n0JlRf.js";import"./RSPContexts-ChZvsbky.js";import"./OverlayArrow-DyP_8nEw.js";import"./useControlledState-CFQ9Vv_1.js";import"./Collection-BFmkHyuD.js";import"./CollectionBuilder-BNyKaLrq.js";import"./Separator-p7bJa_SD.js";import"./SearchField-CXyAr8lf.js";import"./Group-Q7U48ggJ.js";import"./useTextField-YoCmK9Gk.js";import"./useFormReset-BNnepUUT.js";import"./TextField-CHQyl2Bp.js";import"./SelectionManager-B3YIcTuf.js";import"./useEvent-D6qlNMlI.js";import"./useCollator-BhxnC7fV.js";import"./FocusScope-BugPP909.js";import"./VisuallyHidden-CCMgatrd.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const Ze=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Ze as __namedExportsOrder,Xe as default};
