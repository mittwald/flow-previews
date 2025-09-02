import{j as e,r as O}from"./iframe-DTi9QmA0.js";import{L as s}from"./Label-CQetSSMr.js";import{F as o}from"./FileField-Bx64j-NU.js";import{B as t}from"./Button-DSq_4Ojq.js";import{S as A}from"./Section-JeKvmrtD.js";import{F as H}from"./FieldError-GbuBlm-B.js";import{F as P}from"./FieldDescription-RVA1j_lW.js";import{K as R,_ as G}from"./IconWarning-DxYwd6KK.js";import{u as U,F as k,t as q}from"./Form-CxbZBpI7.js";import{A as w}from"./ActionGroup-HN0xeesM.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-hsBezmuJ.js";import"./mergeRefs-CRQizX0M.js";import"./index-AIe693y_.js";import"./useLocalizedStringFormatter-DlTJgtIJ.js";import"./context-CCdZhs-h.js";import"./Label-CZheX-BS.js";import"./utils-CL7caOLd.js";import"./Hidden-vKywT2Di.js";import"./FormField.module-B9AzUSUD.js";import"./Form-MgZU7Vwa.js";import"./useFocus-ZZE_0lQ_.js";import"./useLabel-BsOHSad-.js";import"./FieldError-B9D2P1L5.js";import"./Text-uHJoYlsI.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-C0wS_Dx9.js";import"./useFocusRing-DtGgtmUN.js";import"./browser-C8n4ubUN.js";import"./Text-rZE64TpZ.js";import"./EmulatedBoldText-CvSsCxBp.js";import"./LoadingSpinner-CxmP28Uh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DEHF5lJo.js";import"./ProgressBar-CZcDm412.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DGBc0zwK.js";import"./useFocusable-C9TzKwDz.js";import"./ContextMenuSection-CUzpVhwH.js";import"./Action-xnhUT-gM.js";import"./context-O1stu3iI.js";import"./useStatic-CrO0OLrU.js";import"./getActionGroupSlot-ViofuXey.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D6TGzY5R.js";import"./RSPContexts-AUq49PY7.js";import"./OverlayArrow-CdR0wOB6.js";import"./useControlledState-plF7sQ7U.js";import"./Collection-ChROeXcJ.js";import"./CollectionBuilder-DdDVVtah.js";import"./Separator-rsJpBnK2.js";import"./SearchField-baoCU1ZF.js";import"./useTextField-DlNFPg1I.js";import"./useFormReset-BLacz0U5.js";import"./TextField-1nP9PUNp.js";import"./useEvent-CA_eanes.js";import"./SelectionManager-B8EhsD0x.js";import"./useCollator-9sk9Xc09.js";import"./FocusScope-Dyo2gp6z.js";import"./VisuallyHidden-vt7X_vEY.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=K("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
