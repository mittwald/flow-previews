import{j as e,r as O}from"./iframe-BKWcqz6w.js";import{L as s}from"./Label-Cbbeq5AD.js";import{F as o}from"./FileField-DrZ6F2MN.js";import{B as t}from"./Button-CDMbyENh.js";import{S as W}from"./Section-DDvKkXI7.js";import{F as H}from"./FieldError-DKrQw3Mj.js";import{F as P}from"./FieldDescription-DG8hdeYK.js";import{A as R,_ as G}from"./IconWarning-CiiLQ5Id.js";import{u as U,F as k,t as q}from"./Form-DH3ovo2t.js";import{A as w}from"./ActionGroup-DRyCQKkv.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C5Igvylm.js";import"./mergeRefs-C4ZbtdaD.js";import"./index-DJrDs1kh.js";import"./useLocalizedStringFormatter-DH0uxzC_.js";import"./context-QVFAHjz-.js";import"./Label-D6DYt8_O.js";import"./utils-CQeLeN4J.js";import"./Hidden-CkZKnpKj.js";import"./FormField.module-B9AzUSUD.js";import"./Form-DoHwQU7E.js";import"./useFocus-BlH6xcxh.js";import"./useLabel-D1fNKuwy.js";import"./FieldError-B_JMWavC.js";import"./Text-ChPHkoYL.js";import"./filterDOMProps-CeZl_uWj.js";import"./Input-BenWenGs.js";import"./useFocusRing-BgI-Wk5t.js";import"./browser-DUKC-94T.js";import"./Text-Fi67VBtl.js";import"./EmulatedBoldText-BJOxnJTr.js";import"./LoadingSpinner-DjG0OPxh.js";import"./Button-VVXhfFKF.js";import"./ProgressBar-C6vJSYrT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BwfaRRJR.js";import"./useFocusable-BSIifKXa.js";import"./ContextMenuSection-D_1EtZXH.js";import"./Action-BG2HGkiJ.js";import"./context-fbLD2I4R.js";import"./useStatic-wPZWVCFd.js";import"./getActionGroupSlot-DjN4KLUT.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DhBeDFtI.js";import"./RSPContexts-DdS6JTeo.js";import"./OverlayArrow-vSfQPgA4.js";import"./useControlledState-D-vJPGY9.js";import"./Collection-C7UaXUW1.js";import"./CollectionBuilder-DDv9MTUl.js";import"./Separator-0bHFPMSf.js";import"./SearchField-BUGK_Wf7.js";import"./Group-DfxlRKcN.js";import"./useTextField-C8uxY6vr.js";import"./useFormReset-DXZOmU-A.js";import"./TextField-CHY6h4XH.js";import"./SelectionManager-D5GxgTFL.js";import"./useEvent-BzcH6Ltb.js";import"./useCollator-DIoPzu3e.js";import"./FocusScope-uRnVEpI_.js";import"./VisuallyHidden-DSrM5G1n.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(W,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(W,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(g=d.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var _,A,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Ze=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Ze as __namedExportsOrder,Xe as default};
