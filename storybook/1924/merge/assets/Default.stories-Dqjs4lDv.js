import{j as e,r as O}from"./iframe-CbGYfYhl.js";import{L as s}from"./Label-ChSLebPR.js";import{F as o}from"./FileField-CsMlGM4f.js";import{B as t}from"./Button-Gcjkh2he.js";import{S as A}from"./Section-BbmZZsTL.js";import{F as H}from"./FieldError-DIOhoIE9.js";import{F as P}from"./FieldDescription-D4tY6X_s.js";import{K as R,_ as G}from"./IconWarning-DbjMP3z5.js";import{u as U,F as k,t as q}from"./Form-TtiWG0JA.js";import{A as w}from"./ActionGroup-DVTfyg3C.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-jqIHveb4.js";import"./mergeRefs-B7E9CKB8.js";import"./index-DUvIA6jy.js";import"./useLocalizedStringFormatter-CO6Ocor8.js";import"./context-DrN7EfSG.js";import"./Label-CQ-8Wai_.js";import"./utils-Bta_km8V.js";import"./Hidden-CH7YYats.js";import"./FormField.module-B9AzUSUD.js";import"./Form-dHMqMIPi.js";import"./useFocus-CgyMmhEU.js";import"./useLabel-D6vayTQl.js";import"./FieldError-CCN5oAXI.js";import"./Text-B56mlhY7.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-G140fFme.js";import"./useFocusRing-D3ulEQrZ.js";import"./browser-CJ8QzV59.js";import"./Text-OS1-aGym.js";import"./EmulatedBoldText-CQSaLX8r.js";import"./LoadingSpinner-BIdUmOnp.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-dGVmYdyu.js";import"./ProgressBar-C2FOdX6j.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B6TDm-Ku.js";import"./useFocusable-CdHr2TzL.js";import"./ContextMenuSection-COmeM-5Q.js";import"./Action-QD7EalEG.js";import"./context-J2lB5nq9.js";import"./useStatic-CDZ8mZeU.js";import"./getActionGroupSlot-DTlXxCo0.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DWI3Gb4X.js";import"./RSPContexts-CWauLjE1.js";import"./OverlayArrow-CAzhQBDT.js";import"./useControlledState-Ckf81dN5.js";import"./Collection-CnCkxRBF.js";import"./CollectionBuilder-zI7nOiFC.js";import"./Separator-BL4Cqy6R.js";import"./SearchField-0rw3SXHS.js";import"./useTextField-ONw8H3cW.js";import"./useFormReset-knQsHZrP.js";import"./TextField-DGs8gg6j.js";import"./useEvent-BrHW1E5Z.js";import"./SelectionManager-C3iuS2jK.js";import"./useCollator-B95zPweT.js";import"./FocusScope-CXp1mWOp.js";import"./VisuallyHidden-BDzAgjFk.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
