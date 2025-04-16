import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-CXcpQZ5J.js";import{L as s}from"./Label-Ccht5eDB.js";import{F as o}from"./FileField-hvgOIZTs.js";import{B as t}from"./Button-DwgkhfFv.js";import{S as H}from"./Section-Devnga4A.js";import{F as G}from"./FieldError-Egs4LnTH.js";import{F as R}from"./FieldDescription-h80YvCXc.js";import{l as k,m as q}from"./IconWarning-B9HL9CFH.js";import{u as w,F as U,t as _}from"./Form-DSNXfIMG.js";import{a as O}from"./index-B-lxVbXh.js";import{A as z}from"./ActionGroup-BSzUWElk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BhVCUVKf.js";import"./mergeRefs-B22Il0iz.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./useLocalizedStringFormatter-PBUSZsmh.js";import"./Label-DfZa7xTI.js";import"./utils-Df1au6pS.js";import"./Hidden-DtYLaSTT.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-CX89bhxE.js";import"./useFocus-Beyq6_MT.js";import"./FieldError-Cz4aM9kS.js";import"./Text-WoclspSc.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-Bw24jdWy.js";import"./useFocusRing-Dy9tY2VR.js";import"./Text-ilWQSh2o.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./LoadingSpinner-GJE4fldi.js";import"./Button-CAwd2L_u.js";import"./ProgressBar-DfZ38-9l.js";import"./useLabel-DrVJGper.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-v55RTCzR.js";import"./useFocusable-C5BPrGjf.js";import"./ContextMenuSection-CuRIPxil.js";import"./Action-BfuzMKoN.js";import"./context-BJd9A0SI.js";import"./useStatic-CZNshcmv.js";import"./getActionGroupSlot-UfL_FZTW.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DGCaVP1m.js";import"./RSPContexts-C2SW_8A9.js";import"./OverlayArrow-Cyo91zw-.js";import"./Collection-gb5i7bex.js";import"./CollectionBuilder-DJ8GEp2F.js";import"./Separator-rUEtuaIL.js";import"./useOverlayTriggerState-Bcoz_tbR.js";import"./useControlledState-CHe-wEx1.js";import"./SelectionManager-DrFVCucR.js";import"./useEvent-D5X-zOrV.js";import"./useCollator-gRp1mHBo.js";import"./FocusScope-DN1fuaqe.js";import"./VisuallyHidden-D7VTLdOh.js";import"./v4-CtRu48qb.js";const Yr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},J=O("submit"),l={},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(R,{children:"Supported formats: .pem, .pfx"})]})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(G,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(k,{children:r.jsx(q,{})})})})},d={render:e=>{const[n,a]=P.useState(null),i=n==null?void 0:n[0];return r.jsxs(H,{children:[r.jsxs(o,{...e,isInvalid:!0,onChange:a,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const e=w(),n=_();return r.jsx(U,{form:e,onSubmit:J,children:r.jsxs(H,{children:[r.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:r.jsxs(o,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=e.watch("file"))==null?void 0:a[0])==null?void 0:i.name,r.jsx(z,{children:r.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const Zr=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,p as IconButton,c as WithDescription,m as WithError,d as WithHandler,u as WithReactHookForm,Zr as __namedExportsOrder,Yr as default};
