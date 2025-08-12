import{r as h,j as e}from"./iframe-DL1Xk_TW.js";import{F as t}from"./FileDropZone-DyvXTBUD.js";import{S as c}from"./Section-MugfZB9e.js";import{F as d}from"./FileCardList-Bq-3typ0.js";import{F as u}from"./FileCard-CmUrT9ah.js";import{u as O,F as T,t as _}from"./Form-DV_dswRy.js";import{B as s}from"./Button-CSYR-8zw.js";import{A as b}from"./ActionGroup-BaSOhNto.js";import{Y as x,Z as k}from"./IconWarning-CDWDVN9t.js";import{H as F}from"./Heading-BGH8AKMN.js";import{F as f}from"./FileField-Bz6os-G9.js";import{T as U}from"./Text-BarKc5iO.js";import"./IllustratedMessage-CRVcBO-9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CiZc51HM.js";import"./mergeRefs-BSp0TNwj.js";import"./index-DqZKnEqd.js";import"./utils-CQ_zdhKT.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-hY-xwtRO.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-W7XlL7TD.js";import"./useFocus-XNeQty2s.js";import"./useCollator-CIWymtw-.js";import"./context-DL9YfZ-4.js";import"./useLocalizedStringFormatter-C3W1UUyM.js";import"./Button-D1cW4wjn.js";import"./ProgressBar-B-kphiC_.js";import"./Label-BAbeU0V_.js";import"./Hidden-DR9x0YX2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DN8Ip39y.js";import"./useFocusRing-Ch_JF-Gz.js";import"./useFocusable-D0Knm-Aw.js";import"./VisuallyHidden-OD3rFgcd.js";import"./ContextMenuSection-CmRAw-Ct.js";import"./Action-CgnUnXh6.js";import"./context-DUQna2Na.js";import"./useStatic-CDHuYpjM.js";import"./browser-DlWkPxXn.js";import"./getActionGroupSlot-BqQnBfv6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BV4IJ0nk.js";import"./RSPContexts-x84Hoe_h.js";import"./OverlayArrow-D3HDkbZg.js";import"./useControlledState-m-GoXsAY.js";import"./Collection-C6Hsa1NN.js";import"./CollectionBuilder-DomLDs3M.js";import"./Separator-7Z7HyIGD.js";import"./Group-Dvl4nkih.js";import"./SearchField-DmEcaw4n.js";import"./FieldError-BUlchV0X.js";import"./Form-DgOn25JB.js";import"./useTextField-D29gkUES.js";import"./useFormReset-BVtOSdS9.js";import"./TextField-DfEA8x8Q.js";import"./useEvent-BwN_9XGI.js";import"./SelectionManager-98zZcpep.js";import"./FocusScope-CddfFBWs.js";import"./ColumnLayout-qWe5EGMY.js";import"./Avatar-BGKGL5Xg.js";import"./AlertIcon-RNejMSjw.js";import"./Image-C_p8CKac.js";import"./Link-VCodujb0.js";import"./OptionsButton-_yazHHSt.js";import"./ButtonView-ClStsEUD.js";import"./ContextMenuContent-DNGFQtBJ.js";import"./Popover-Ce0HJOgD.js";import"./DialogTriggerView-DxPEo7_6.js";import"./Switch-DaKjNgbu.js";import"./Label-SV9dpIxu.js";import"./useToggleState-Bx2fICQt.js";import"./FieldError-Bwu7YAhf.js";import"./LoadingSpinner-eLX_rEKw.js";import"./Heading-Dbbsj_46.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-Cuoo9C-B.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
