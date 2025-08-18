import{j as e,r as O}from"./iframe-ANbYZxYh.js";import{L as s}from"./Label-BNGIQ-CZ.js";import{F as o}from"./FileField-DFnfJQ-g.js";import{B as t}from"./Button-BrOgS8k0.js";import{S as A}from"./Section-BZ3Pd5oL.js";import{F as H}from"./FieldError-CknxTZ0z.js";import{F as P}from"./FieldDescription-BZEk77xv.js";import{D as R,a1 as G}from"./IconWarning-DS7IkYNL.js";import{u as U,F as k,t as q}from"./Form-CUUGX5XA.js";import{A as w}from"./ActionGroup-DiWnJNYa.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bh9sJwp9.js";import"./mergeRefs-C7E84bFC.js";import"./index-sj9Kgwl7.js";import"./useLocalizedStringFormatter-CwJnm8Gm.js";import"./context-C29UMt2a.js";import"./Label-DHVn08UY.js";import"./utils-Cy_MvyB4.js";import"./Hidden-CKPTgp3M.js";import"./FormField.module-CqWyJNQI.js";import"./Form-BzuKHEmj.js";import"./useFocus-TkuOvp2H.js";import"./useLabel-BSgApQcW.js";import"./FieldError-8FwQObi_.js";import"./Text-DtPhrSvp.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BbZVKWqc.js";import"./useFocusRing-CdWhuOPm.js";import"./browser-DiQDtMf4.js";import"./Text-M71Ue6Ol.js";import"./EmulatedBoldText-D7XMT75r.js";import"./LoadingSpinner-BalYmqav.js";import"./Button-pW7XEr-A.js";import"./ProgressBar-D0pevNPv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-YyV1OQc2.js";import"./useFocusable-Do5j3Niz.js";import"./ContextMenuSection-CEfz6G3k.js";import"./Action-BWJuvjrq.js";import"./context-XBkMChDn.js";import"./useStatic-C8P39Z3X.js";import"./getActionGroupSlot-3JUuJVM4.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DAXXYblm.js";import"./RSPContexts-BF3izYoh.js";import"./OverlayArrow-DdhXoA2p.js";import"./useControlledState-qP1KlDsL.js";import"./Collection-CGyTBmm7.js";import"./CollectionBuilder-NhL74RvZ.js";import"./Separator-C5R7VkmP.js";import"./SearchField-CA0soI3_.js";import"./useTextField-CrHHZhdf.js";import"./useFormReset-DK8My9j5.js";import"./TextField-Cq94faz6.js";import"./useEvent-C-0WgXZh.js";import"./SelectionManager-CqcRxmrm.js";import"./useCollator-CfSYVQsJ.js";import"./FocusScope-DrloOZeI.js";import"./VisuallyHidden-Dkqu2xa7.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(g=d.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var E,W,_;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const Xe=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,Xe as __namedExportsOrder,Ve as default};
