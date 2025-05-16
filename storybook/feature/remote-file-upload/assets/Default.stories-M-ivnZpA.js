import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-CgfFrydU.js";import{L as s}from"./Label-CvAEyXQc.js";import{F as o}from"./FileField-DrsKgV8k.js";import{B as t}from"./Button-nLOUeIYJ.js";import{S as H}from"./Section-CHBd8Rxq.js";import{F as G}from"./FieldError-Bhr3DTnb.js";import{F as R}from"./FieldDescription-t1_GWMpp.js";import{m as k,n as q}from"./IconWarning-C_dXgkkz.js";import{u as w,F as U,t as _}from"./Form-Bf7-XU2T.js";import{a as O}from"./index-B-lxVbXh.js";import{A as z}from"./ActionGroup-BX5yaItJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Ijz6GgOq.js";import"./mergeRefs-78-678FT.js";import"./index-sY8i7rw0.js";import"./index-B2KKL2uI.js";import"./useLocalizedStringFormatter-P5-5MQWA.js";import"./Label-DKfobBxX.js";import"./utils-C22QCCbL.js";import"./Hidden-DwT0szmK.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-Ck8Kc0sM.js";import"./useFocus-DQVi-kHM.js";import"./FieldError-BNWc2UXg.js";import"./Text-PWuSNm-G.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-CjZe9lfS.js";import"./useFocusRing-B_JVXUf7.js";import"./Text-acTHRGjJ.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./LoadingSpinner-BoRooXD5.js";import"./Button-CvRwfedC.js";import"./ProgressBar-CWMH1Kpx.js";import"./useLabel-Bwhd-XGR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CcZGRUOg.js";import"./useFocusable-7WyUSQpO.js";import"./ContextMenuSection-CMS8qi4B.js";import"./Action-BcHXQegi.js";import"./context-Ci9m7_Nm.js";import"./useStatic-Dvh5S8aV.js";import"./getActionGroupSlot-DApccOIm.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BroBw1Jq.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-CZdmdrug.js";import"./useControlledState-DjePt-lg.js";import"./Collection-BAXYBWcT.js";import"./CollectionBuilder-BP3fHMQL.js";import"./Separator-_mK8Veof.js";import"./SelectionManager-DyB3dcXv.js";import"./useEvent-DKzf63YQ.js";import"./useCollator-Dka9gyz6.js";import"./FocusScope-C3Hgy8Ha.js";import"./VisuallyHidden-Drr3U20F.js";import"./v4-CtRu48qb.js";const Xr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},J=O("submit"),l={},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(R,{children:"Supported formats: .pem, .pfx"})]})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(G,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(k,{children:r.jsx(q,{})})})})},d={render:e=>{const[n,a]=P.useState(null),i=n==null?void 0:n[0];return r.jsxs(H,{children:[r.jsxs(o,{...e,isInvalid:!0,onChange:a,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const e=w(),n=_();return r.jsx(U,{form:e,onSubmit:J,children:r.jsxs(H,{children:[r.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:r.jsxs(o,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=e.watch("file"))==null?void 0:a[0])==null?void 0:i.name,r.jsx(z,{children:r.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var b,B,v;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(v=(B=m.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var y,C,L;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,g,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var W,D,A;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const Yr=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,p as IconButton,c as WithDescription,m as WithError,d as WithHandler,u as WithReactHookForm,Yr as __namedExportsOrder,Xr as default};
