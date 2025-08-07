import{j as e,r as O}from"./iframe-DOyiym2O.js";import{L as s}from"./Label-DGNkT8gh.js";import{F as o}from"./FileField-BOEdTqa9.js";import{B as t}from"./Button-Dhe1yso8.js";import{S as A}from"./Section-Whv37-TA.js";import{F as H}from"./FieldError-gzY4_mEC.js";import{F as P}from"./FieldDescription-9zebcMyn.js";import{D as R,_ as G}from"./IconWarning-DM4ryx1N.js";import{u as U,F as k,t as q}from"./Form-DPVW4xvM.js";import{A as w}from"./ActionGroup-DmbQXpeM.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BYw3-7_y.js";import"./mergeRefs-oR_2TdTx.js";import"./index-CmB0dnpi.js";import"./useLocalizedStringFormatter-LAQIr2PZ.js";import"./context-DNMunrTn.js";import"./Label-gKLM5Ku1.js";import"./utils-p6TFjs22.js";import"./Hidden-BJphBd81.js";import"./FormField.module-B9AzUSUD.js";import"./Form-D7si9Qjh.js";import"./useFocus-CRPlmaKe.js";import"./useLabel-DjTxglfT.js";import"./FieldError-e9k0WgIs.js";import"./Text-Db2PSOfB.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-BsZagJvP.js";import"./useFocusRing-wEjsdZUW.js";import"./browser-Cgs4Q9ZH.js";import"./Text-DNTWXR5k.js";import"./EmulatedBoldText-npPiHGdu.js";import"./LoadingSpinner-egM8r-vP.js";import"./Button-lDf0mDtZ.js";import"./ProgressBar-DwMxj3po.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-U0v1W6r8.js";import"./useFocusable-CF6DJuo2.js";import"./ContextMenuSection-Bkzf7edI.js";import"./Action-B1c9MoHY.js";import"./context-y7iGkUpV.js";import"./useStatic-BqyjIn97.js";import"./getActionGroupSlot-Cqvvv9Ww.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CZhNJUBb.js";import"./RSPContexts-B59Hd7Xy.js";import"./OverlayArrow-DUzOkRZT.js";import"./useControlledState-CTI65F-h.js";import"./Collection-BIknmaaI.js";import"./CollectionBuilder-MitjRKQw.js";import"./Separator-DGoHVraj.js";import"./SearchField-B3q2UkIK.js";import"./useTextField-CDeIHIKC.js";import"./useFormReset-D392FMdG.js";import"./TextField-DJtp4_Iq.js";import"./useEvent-DhVC8KrJ.js";import"./SelectionManager-BoGC0shM.js";import"./useCollator-BKrnVFMg.js";import"./FocusScope-BYeNXI2v.js";import"./VisuallyHidden-DEjaPn8D.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,Ve={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},K=T("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(H,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(R,{children:e.jsx(G,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=U(),n=q();return e.jsx(k,{form:r,onSubmit:K,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
