import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-F2Fta7eo.js";import{L as s}from"./Label-CnkuwF9M.js";import{F as o}from"./FileField-Bu6v9Rcv.js";import{B as t}from"./Button-Dv_Hlttc.js";import{S as H}from"./Section-CIDz9axw.js";import{F as G}from"./FieldError-DtpK4b89.js";import{F as R}from"./FieldDescription-wvziUhz0.js";import{l as k,m as q}from"./IconWarning-DbC7dOQ5.js";import{u as w,F as U,t as _}from"./Form-UuBHg0R5.js";import{a as O}from"./index-B-lxVbXh.js";import{A as z}from"./ActionGroup-DO66W-m5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CwIJmh-g.js";import"./mergeRefs-12BfVTtv.js";import"./index-GHXRqlzO.js";import"./index-FKzx4Va7.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./Label-wLZ3I4V9.js";import"./utils-D0arg4qg.js";import"./Hidden-aaDrlwOM.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-C9irvmUd.js";import"./useFocus-CPhYqd-d.js";import"./FieldError-Cy41ow6l.js";import"./Text-AN1gvCNp.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-BJzWkL0O.js";import"./useFocusRing-4oM8aI2c.js";import"./Text-2peEn3wM.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DovK0xj5.js";import"./LoadingSpinner-DyzihGge.js";import"./Button-DCaCfXLp.js";import"./ProgressBar-bhmU_ZvQ.js";import"./useLabel-DB0A2tZF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-heCNvahi.js";import"./useFocusable-Tcmfb9SA.js";import"./ContextMenuSection-BhbNPGzw.js";import"./Action-DW6PGmjm.js";import"./context-cx9hhks4.js";import"./useStatic-vURPnL6A.js";import"./getActionGroupSlot-Cemb9fm9.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BBdTn5Uc.js";import"./RSPContexts-DhZDYkwS.js";import"./OverlayArrow-ULot_6Ir.js";import"./Collection-CutN93xp.js";import"./CollectionBuilder-D5vZPvsR.js";import"./Separator-YWiDMMN1.js";import"./useOverlayTriggerState-Bt-3O924.js";import"./useControlledState-15AFXVxl.js";import"./SelectionManager-1l7b-eWb.js";import"./useEvent-BL4Dc6Ef.js";import"./useCollator-4BrhQKp8.js";import"./FocusScope-BlLq5c4F.js";import"./VisuallyHidden-LoYkyM-T.js";import"./v4-CtRu48qb.js";const Yr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},J=O("submit"),l={},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(R,{children:"Supported formats: .pem, .pfx"})]})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(G,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(k,{children:r.jsx(q,{})})})})},d={render:e=>{const[n,a]=P.useState(null),i=n==null?void 0:n[0];return r.jsxs(H,{children:[r.jsxs(o,{...e,isInvalid:!0,onChange:a,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const e=w(),n=_();return r.jsx(U,{form:e,onSubmit:J,children:r.jsxs(H,{children:[r.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:r.jsxs(o,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=e.watch("file"))==null?void 0:a[0])==null?void 0:i.name,r.jsx(z,{children:r.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
