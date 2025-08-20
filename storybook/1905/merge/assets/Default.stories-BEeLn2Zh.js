import{j as e,r as O}from"./iframe-BBU8Vi5z.js";import{L as s}from"./Label-C0WPThdc.js";import{F as o}from"./FileField-CtRmfvWA.js";import{B as t}from"./Button-NW1Of_qV.js";import{S as A}from"./Section-BHtuKRQv.js";import{F as H}from"./FieldError-Bm5U6po7.js";import{F as P}from"./FieldDescription-BWVpZiVv.js";import{K as R,_ as G}from"./IconWarning-Dzfnqwsx.js";import{u as U,F as k,t as q}from"./Form-CEuevqEv.js";import{A as w}from"./ActionGroup-Ccj7KSq_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dh-an_RK.js";import"./mergeRefs-0pGj6C_j.js";import"./index-NZtYUN4c.js";import"./useLocalizedStringFormatter-Dev9EnbH.js";import"./context-LLBgjHpi.js";import"./Label-DtosUGK-.js";import"./utils-Bl0beZ_h.js";import"./Hidden-BzeT6TXj.js";import"./FormField.module-B9AzUSUD.js";import"./Form-CKpkDEiG.js";import"./useFocus-BO2H44GU.js";import"./useLabel-Dhqi6uDE.js";import"./FieldError-DZ37g0Dt.js";import"./Text-DKRByA_e.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-SY2qABfH.js";import"./useFocusRing-CcJdq_JE.js";import"./browser-ZEfsbAUe.js";import"./Text-Dmx06jI1.js";import"./EmulatedBoldText-CqafDXFr.js";import"./LoadingSpinner-Y9e7IKXn.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-KQBofztE.js";import"./ProgressBar-BVefmcd6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VQWCXiAV.js";import"./useFocusable-CH53ZRkg.js";import"./ContextMenuSection-Bmtsd9QN.js";import"./Action-DsHIOktH.js";import"./context-6Ujzj1TE.js";import"./useStatic-D_gn09gr.js";import"./getActionGroupSlot-fjA7p-Zb.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CLHxRTEc.js";import"./RSPContexts-CuT-5ERO.js";import"./OverlayArrow-CTw_TzGf.js";import"./useControlledState-JBkrIXcy.js";import"./Collection-CAYUknat.js";import"./CollectionBuilder-Ck3uMDqM.js";import"./Separator-SD0n1yxH.js";import"./SearchField-CLTvmi2R.js";import"./useTextField-7Er_r7Sk.js";import"./useFormReset-CcPabkKc.js";import"./TextField-ByGAuS2u.js";import"./useEvent-COUneAHH.js";import"./SelectionManager-C_TBHMOd.js";import"./useCollator-kculxw9I.js";import"./FocusScope-DSRDaxy2.js";import"./VisuallyHidden-DSdNvIxr.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
