import{j as e,r as O}from"./iframe-ABGSKs5r.js";import{L as s}from"./Label-B_lAnajd.js";import{F as o}from"./FileField-D7Pi8-NJ.js";import{B as t}from"./Button-Q43F_r8t.js";import{S as A}from"./Section-Bo-OB3QN.js";import{F as H}from"./FieldError-C4jPbCeF.js";import{F as P}from"./FieldDescription-IjkSN3jj.js";import{C as R,_ as G}from"./IconWarning-CrQ4Sq1v.js";import{u as U,F as k,t as q}from"./Form-B-B81hdU.js";import{A as w}from"./ActionGroup-BnRYMoCo.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-I2hhpXOk.js";import"./mergeRefs-ARavDgvF.js";import"./index-DcXxLGBR.js";import"./useLocalizedStringFormatter-CvJCn7rq.js";import"./context-DyJmA51t.js";import"./Label-BwOKtJNA.js";import"./utils-DiDGDlBS.js";import"./Hidden-B4dLwXdT.js";import"./FormField.module-B9AzUSUD.js";import"./Form-CvEoesSu.js";import"./useFocus-Dg7gZngi.js";import"./useLabel-DcKqU1cs.js";import"./FieldError-B1yCOr13.js";import"./Text-BcmTaKwf.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-WLHEG_qD.js";import"./useFocusRing-Q7Twgd_z.js";import"./browser-BJO6t65z.js";import"./Text-DtVn_38U.js";import"./EmulatedBoldText-GSAm8QjJ.js";import"./LoadingSpinner-Dzzm5nCT.js";import"./Button-iaRAOLSz.js";import"./ProgressBar-CGoCl-ZJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BBkNBI46.js";import"./useFocusable-BAjBFm0a.js";import"./ContextMenuSection-C2tUWO8i.js";import"./Action-CUvrUwti.js";import"./context-D7oi58C7.js";import"./useStatic-CcRZhvyK.js";import"./getActionGroupSlot-GvSmty2r.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BtJFOPGU.js";import"./RSPContexts-fBWTPx9Q.js";import"./OverlayArrow-bYgiNorp.js";import"./useControlledState-Un3rm8eO.js";import"./Collection-Dxy4s6rJ.js";import"./CollectionBuilder-COEyccke.js";import"./Separator-CSQ2PCE5.js";import"./SearchField-C3LVCaj4.js";import"./useTextField-A3YOYzMp.js";import"./useFormReset-CDcF8HBQ.js";import"./TextField-CYxV6_KF.js";import"./useEvent-D4qKx0m_.js";import"./SelectionManager-_MA_Xqcw.js";import"./useCollator-W9bifTbC.js";import"./FocusScope-CeShPDZQ.js";import"./VisuallyHidden-DZthTgNa.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
