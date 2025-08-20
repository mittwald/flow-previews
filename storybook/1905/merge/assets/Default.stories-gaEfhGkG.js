import{r as h,j as e}from"./iframe-BBU8Vi5z.js";import{F as t}from"./FileDropZone-CxHuQ3dl.js";import{S as c}from"./Section-BHtuKRQv.js";import{F as d}from"./FileCardList-biESTwz7.js";import{F as u}from"./FileCard-CLr7imXf.js";import{u as O,F as T,t as _}from"./Form-CEuevqEv.js";import{B as s}from"./Button-NW1Of_qV.js";import{A as b}from"./ActionGroup-Ccj7KSq_.js";import{Y as x,Z as k}from"./IconWarning-Dzfnqwsx.js";import{H as F}from"./Heading-CGPbMKMb.js";import{F as f}from"./FileField-CtRmfvWA.js";import{T as U}from"./Text-Dmx06jI1.js";import"./IllustratedMessage-C2ivx8X4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dh-an_RK.js";import"./mergeRefs-0pGj6C_j.js";import"./index-NZtYUN4c.js";import"./utils-Bl0beZ_h.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DKRByA_e.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Dhqi6uDE.js";import"./useFocus-BO2H44GU.js";import"./useCollator-kculxw9I.js";import"./context-LLBgjHpi.js";import"./useLocalizedStringFormatter-Dev9EnbH.js";import"./Button-KQBofztE.js";import"./ProgressBar-BVefmcd6.js";import"./Label-DtosUGK-.js";import"./Hidden-BzeT6TXj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-VQWCXiAV.js";import"./useFocusRing-CcJdq_JE.js";import"./useFocusable-CH53ZRkg.js";import"./VisuallyHidden-DSdNvIxr.js";import"./ContextMenuSection-Bmtsd9QN.js";import"./Action-DsHIOktH.js";import"./context-6Ujzj1TE.js";import"./useStatic-D_gn09gr.js";import"./browser-ZEfsbAUe.js";import"./getActionGroupSlot-fjA7p-Zb.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CLHxRTEc.js";import"./RSPContexts-CuT-5ERO.js";import"./OverlayArrow-CTw_TzGf.js";import"./useControlledState-JBkrIXcy.js";import"./Collection-CAYUknat.js";import"./CollectionBuilder-Ck3uMDqM.js";import"./Separator-SD0n1yxH.js";import"./Group-SY2qABfH.js";import"./SearchField-CLTvmi2R.js";import"./FieldError-DZ37g0Dt.js";import"./Form-CKpkDEiG.js";import"./useTextField-7Er_r7Sk.js";import"./useFormReset-CcPabkKc.js";import"./TextField-ByGAuS2u.js";import"./useEvent-COUneAHH.js";import"./SelectionManager-C_TBHMOd.js";import"./FocusScope-DSRDaxy2.js";import"./ColumnLayout-RJz59fv6.js";import"./Avatar-bKWwTzG7.js";import"./AlertIcon-Bdrp0HFY.js";import"./Image-BdNnwT1f.js";import"./Link-Djt3kkdk.js";import"./ButtonView-D9xVewS5.js";import"./ContextMenuContent-4X8hO0Fz.js";import"./Popover-DwT_NCjp.js";import"./DialogTriggerView-BnWyhZ1v.js";import"./Switch-DLbQyD4W.js";import"./Label-C0WPThdc.js";import"./useToggleState-ODapooW-.js";import"./FieldError-Bm5U6po7.js";import"./LoadingSpinner-Y9e7IKXn.js";import"./Heading-BEs3i8tz.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CqafDXFr.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const ar=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,ar as __namedExportsOrder,mr as default};
