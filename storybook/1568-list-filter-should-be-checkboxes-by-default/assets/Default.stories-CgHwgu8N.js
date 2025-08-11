import{j as e,r as O}from"./iframe-CRCn_1k8.js";import{L as s}from"./Label-CTLOVe14.js";import{F as o}from"./FileField-B3xjWx0P.js";import{B as t}from"./Button-BVbQUaZI.js";import{S as A}from"./Section-CL7D0Pyy.js";import{F as H}from"./FieldError-BF0ybVTQ.js";import{F as P}from"./FieldDescription-BOXS3uwV.js";import{D as R,_ as G}from"./IconWarning-DfyJ3u1O.js";import{u as U,F as k,t as q}from"./Form-COoLg9rS.js";import{A as w}from"./ActionGroup-BsZ4DSaP.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BubU3Kz3.js";import"./mergeRefs-Gw2OcT6Q.js";import"./index-7hVsDhMa.js";import"./useLocalizedStringFormatter-DT9CXOan.js";import"./context-fzWZoyLv.js";import"./Label-DuoAXWP0.js";import"./utils-BI2kd8b-.js";import"./Hidden-860WeEVo.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BUDb6yDR.js";import"./useFocus-B3vm1A24.js";import"./useLabel-76mwt2Hf.js";import"./FieldError-Get8RxYf.js";import"./Text-CnPg80ig.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-D1x-PT5o.js";import"./useFocusRing-CAd7IlbP.js";import"./browser-B1ctrq8_.js";import"./Text-DcU8-VYF.js";import"./EmulatedBoldText-YLFM-K80.js";import"./LoadingSpinner-DMa7-rPQ.js";import"./Button-DC_FOGfE.js";import"./ProgressBar-CqTE0rEm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CPRYRx8p.js";import"./useFocusable-BJ6918Tp.js";import"./ContextMenuSection-DZ1YudgL.js";import"./Action-DUoIh7jH.js";import"./context-BrbDjT5a.js";import"./useStatic-coyUivo9.js";import"./getActionGroupSlot-QXW-CFJF.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-1-lFH5mz.js";import"./RSPContexts-C8n8IA5U.js";import"./OverlayArrow-CtMzTmFy.js";import"./useControlledState-gjMGbt2_.js";import"./Collection-BXQIElN8.js";import"./CollectionBuilder-DKleWLkr.js";import"./Separator-C4pDfZY6.js";import"./SearchField-sAGmdzL3.js";import"./useTextField-BRTDaWoE.js";import"./useFormReset-DT5J9yBd.js";import"./TextField-BUKK7PKt.js";import"./useEvent-BjeIZ3GR.js";import"./SelectionManager-gdTsuSpq.js";import"./useCollator-CSlC2lAk.js";import"./FocusScope-B7tfNpBC.js";import"./VisuallyHidden-4OPl2Xdl.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
