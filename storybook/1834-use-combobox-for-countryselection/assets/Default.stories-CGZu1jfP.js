import{j as e,r as O}from"./iframe-DL1Xk_TW.js";import{L as s}from"./Label-SV9dpIxu.js";import{F as o}from"./FileField-Bz6os-G9.js";import{B as t}from"./Button-CSYR-8zw.js";import{S as A}from"./Section-MugfZB9e.js";import{F as H}from"./FieldError-Bwu7YAhf.js";import{F as P}from"./FieldDescription-Ccb3lPr4.js";import{D as R,_ as G}from"./IconWarning-CDWDVN9t.js";import{u as U,F as k,t as q}from"./Form-DV_dswRy.js";import{A as w}from"./ActionGroup-BaSOhNto.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CiZc51HM.js";import"./mergeRefs-BSp0TNwj.js";import"./index-DqZKnEqd.js";import"./useLocalizedStringFormatter-C3W1UUyM.js";import"./context-DL9YfZ-4.js";import"./Label-BAbeU0V_.js";import"./utils-CQ_zdhKT.js";import"./Hidden-DR9x0YX2.js";import"./FormField.module-B9AzUSUD.js";import"./Form-DgOn25JB.js";import"./useFocus-XNeQty2s.js";import"./useLabel-W7XlL7TD.js";import"./FieldError-BUlchV0X.js";import"./Text-hY-xwtRO.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Dvl4nkih.js";import"./useFocusRing-Ch_JF-Gz.js";import"./browser-DlWkPxXn.js";import"./Text-BarKc5iO.js";import"./EmulatedBoldText-Cuoo9C-B.js";import"./LoadingSpinner-eLX_rEKw.js";import"./Button-D1cW4wjn.js";import"./ProgressBar-B-kphiC_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DN8Ip39y.js";import"./useFocusable-D0Knm-Aw.js";import"./ContextMenuSection-CmRAw-Ct.js";import"./Action-CgnUnXh6.js";import"./context-DUQna2Na.js";import"./useStatic-CDHuYpjM.js";import"./getActionGroupSlot-BqQnBfv6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BV4IJ0nk.js";import"./RSPContexts-x84Hoe_h.js";import"./OverlayArrow-D3HDkbZg.js";import"./useControlledState-m-GoXsAY.js";import"./Collection-C6Hsa1NN.js";import"./CollectionBuilder-DomLDs3M.js";import"./Separator-7Z7HyIGD.js";import"./SearchField-DmEcaw4n.js";import"./useTextField-D29gkUES.js";import"./useFormReset-BVtOSdS9.js";import"./TextField-DfEA8x8Q.js";import"./useEvent-BwN_9XGI.js";import"./SelectionManager-98zZcpep.js";import"./useCollator-CIWymtw-.js";import"./FocusScope-CddfFBWs.js";import"./VisuallyHidden-OD3rFgcd.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,g,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(g=d.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var E,_,W;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(_=u.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const Xe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Xe as __namedExportsOrder,Ve as default};
