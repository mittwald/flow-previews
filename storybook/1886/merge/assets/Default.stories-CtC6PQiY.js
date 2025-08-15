import{r as h,j as e}from"./iframe-CbwCPhjt.js";import{F as t}from"./FileDropZone-D50qpuJq.js";import{S as c}from"./Section-j9Fbm8Ks.js";import{F as d}from"./FileCardList-6nG_Cu36.js";import{F as u}from"./FileCard-BycdtlXD.js";import{u as O,F as T,t as _}from"./Form-NG31Okbr.js";import{B as s}from"./Button-nOGOhIJH.js";import{A as b}from"./ActionGroup-DAXGCV3G.js";import{Y as x,Z as k}from"./IconWarning-B6sLHyS3.js";import{H as F}from"./Heading-B64E3Y9s.js";import{F as f}from"./FileField-NPU3_QIS.js";import{T as U}from"./Text-Ci_Uq_zV.js";import"./IllustratedMessage-Q0hN65ih.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CfzQgT_M.js";import"./mergeRefs-BoUPlS6x.js";import"./index-DuwvDD4S.js";import"./utils-DoFRGSuI.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Bo_2a3q0.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BZwWLEEp.js";import"./useFocus-BeWrqrnh.js";import"./useCollator-CAu6FifQ.js";import"./context-DGTw6Ntc.js";import"./useLocalizedStringFormatter-Dm9iTIuD.js";import"./Button-DQX_QvYf.js";import"./ProgressBar-Boef7pj0.js";import"./Label-9wtzoWil.js";import"./Hidden-fmTjyVQU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B0jvTCtV.js";import"./useFocusRing-DW5IDBu_.js";import"./useFocusable-BMiIHSO8.js";import"./VisuallyHidden-DvTk0uSk.js";import"./ContextMenuSection-AwsY5DNE.js";import"./Action-C2KK5_kv.js";import"./context-zAWxkEGj.js";import"./useStatic-CNtjMAIH.js";import"./browser-BDcX4-kr.js";import"./getActionGroupSlot-B5o4vquU.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BLGTqvvx.js";import"./RSPContexts-CJnpvChB.js";import"./OverlayArrow-CBC8qT36.js";import"./useControlledState-vYcp2K1J.js";import"./Collection-Cyk7N-yQ.js";import"./CollectionBuilder-C-v29UnI.js";import"./Separator-Chz1Iqcg.js";import"./Group-DlZG06gX.js";import"./SearchField-WLounB_6.js";import"./FieldError-WwADG8x9.js";import"./Form-8EM0qQv2.js";import"./useTextField-Ctmjjr7D.js";import"./useFormReset-BCZY_NzT.js";import"./TextField-5B8lnaMV.js";import"./useEvent-CTY0p5_7.js";import"./SelectionManager-CoS4BqdP.js";import"./FocusScope-CmGH9Vi6.js";import"./ColumnLayout-BvRqoQgF.js";import"./Avatar-DPlc9Jb9.js";import"./AlertIcon-DQrdx1ul.js";import"./Image-Dnh43guZ.js";import"./Link-Bc207xUX.js";import"./OptionsButton-yCaf1p-8.js";import"./ButtonView-COxzVi6f.js";import"./ContextMenuContent-CR4Zk6hd.js";import"./Popover-BGNe2BOX.js";import"./DialogTriggerView-UbA78170.js";import"./Switch-BxBWgpRQ.js";import"./Label-LAkLliwq.js";import"./useToggleState-DcYYdjLU.js";import"./FieldError-q3vdaDa_.js";import"./LoadingSpinner-B4AvU4ZS.js";import"./Heading-B1iybfVc.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CeiCaZ9N.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
