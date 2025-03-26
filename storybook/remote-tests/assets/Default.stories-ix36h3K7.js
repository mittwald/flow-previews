import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-BKyFwriW.js";import{L as s}from"./Label-Ci6hAk30.js";import{F as o}from"./FileField-D2RJAb9o.js";import{B as t}from"./Button-y_xQsClG.js";import{S as H}from"./Section-BC96zk_3.js";import{F as k}from"./FieldError-BpzgSl-I.js";import{F as G}from"./FieldDescription-0TSCGh7i.js";import{a as R}from"./IconApp-DtTJ2r0A.js";import{u as q,F as w,t as U}from"./Form-DpYkGN_O.js";import{a as _}from"./index-B-lxVbXh.js";import{A as O}from"./ActionGroup-CNOdpYTp.js";import{k as z}from"./IconWarning-BwSZGWRf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmJbWEDO.js";import"./index-C6uLyQP3.js";import"./index-DQw2Bw4b.js";import"./index-C5hMr7Vs.js";import"./useLocalizedStringFormatter-B9DCAH-T.js";import"./Label-i7acEou4.js";import"./utils-DDUQIigj.js";import"./Hidden-6cPdUftz.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-Dyo9Ifhv.js";import"./useFocus-DNP1_3BC.js";import"./FieldError-Cj9Fprf0.js";import"./Text-yNWxiVQR.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-RYKDaaJa.js";import"./useFocusRing-BfJpuzZz.js";import"./Wrap-DQq6jo70.js";import"./Text-BoP-iRG5.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-By-RYQJw.js";import"./LoadingSpinner-DbRP1bJP.js";import"./Button-DL5r24IA.js";import"./ProgressBar-C4A5wsjg.js";import"./useLabel-DAPKuvGY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CK926LJU.js";import"./useFocusable-DFPniEHk.js";import"./ContextMenuSection-CPhM0sZK.js";import"./Action-i0thx0q2.js";import"./context-DBHSqzRK.js";import"./useStatic--5L2q-n6.js";import"./getActionGroupSlot-DrfnkDvY.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-6iLCfCA_.js";import"./RSPContexts-BTRAHvSh.js";import"./OverlayArrow-BL-OvAHI.js";import"./useControlledState-Cu5tmcxR.js";import"./Collection-CQq09VNS.js";import"./CollectionBuilder-R_fDQQgL.js";import"./Separator-BUgKPSk1.js";import"./SelectionManager-B8z5pZap.js";import"./useEvent-C5s-DRkH.js";import"./useCollator-BnjbLxAL.js";import"./FocusScope-DxW0A0A2.js";import"./VisuallyHidden-Dk-02uN1.js";import"./v4-CtRu48qb.js";const Zr={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},J=_("submit"),l={},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(G,{children:"Supported formats: .pem, .pfx"})]})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(k,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(R,{children:r.jsx(z,{})})})})},d={render:e=>{const[n,a]=P.useState(null),i=n==null?void 0:n[0];return r.jsxs(H,{children:[r.jsxs(o,{...e,isInvalid:!0,onChange:a,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const e=q(),n=U();return r.jsx(w,{form:e,onSubmit:J,children:r.jsxs(H,{children:[r.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:r.jsxs(o,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=e.watch("file"))==null?void 0:a[0])==null?void 0:i.name,r.jsx(O,{children:r.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const $r=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,p as IconButton,c as WithDescription,m as WithError,d as WithHandler,u as WithReactHookForm,$r as __namedExportsOrder,Zr as default};
