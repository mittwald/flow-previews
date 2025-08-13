import{r as h,j as e}from"./iframe-BsKdyUUo.js";import{F as t}from"./FileDropZone-BrEd5Aub.js";import{S as c}from"./Section-CWbH4Id2.js";import{F as d}from"./FileCardList-D4L20k2V.js";import{F as u}from"./FileCard-C_7k48ZG.js";import{u as O,F as T,t as _}from"./Form-DOZIRcRr.js";import{B as s}from"./Button-QyPw2-70.js";import{A as b}from"./ActionGroup-deMRafWY.js";import{Y as x,Z as k}from"./IconWarning-BNNa1TWi.js";import{H as F}from"./Heading-DauAQbMm.js";import{F as f}from"./FileField-DQhmPyJg.js";import{T as U}from"./Text-DM7V5ibr.js";import"./IllustratedMessage-BxCuu7wM.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BPLOAGWE.js";import"./mergeRefs-CQ-EiqC6.js";import"./index-E2r8vySZ.js";import"./utils-DeHCGthq.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BeFIQxaH.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BowSekYU.js";import"./useFocus-BvYTyo5a.js";import"./useCollator-vsGgvR80.js";import"./context-NhbPwiu7.js";import"./useLocalizedStringFormatter-DE5fT8Pw.js";import"./Button-DLwd4SNh.js";import"./ProgressBar-C4DAHdKI.js";import"./Label-E4B9ly-I.js";import"./Hidden-DrjQVD0p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BPobG-50.js";import"./useFocusRing-B-gSRSGq.js";import"./useFocusable-CIlrQQDJ.js";import"./VisuallyHidden-Cn_ktU6z.js";import"./ContextMenuSection-DQsun80c.js";import"./Action-BpogoZfV.js";import"./context-LgmDjMSt.js";import"./useStatic-BdSd4Y0O.js";import"./browser-kgZUWjhe.js";import"./getActionGroupSlot-B4-8kfZ1.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CR91adc_.js";import"./RSPContexts-DxWJbArM.js";import"./OverlayArrow-CO3Q51Tz.js";import"./useControlledState-BMR5C57X.js";import"./Collection-CnS4S-Fi.js";import"./CollectionBuilder-DjDB1Psg.js";import"./Separator-DkeUCbX0.js";import"./Group-Dk0IJ4vM.js";import"./SearchField-DHm90Ej9.js";import"./FieldError-CHLtNaA2.js";import"./Form-DEii-ghQ.js";import"./useTextField-BDfBPM-X.js";import"./useFormReset-BCcZ866S.js";import"./TextField-DVuykaoA.js";import"./useEvent-Bb929JbC.js";import"./SelectionManager-bkmIMDCG.js";import"./FocusScope-r24VL_U3.js";import"./ColumnLayout-Cp7GSfYr.js";import"./Avatar-BHUHAhk3.js";import"./AlertIcon-2j4ptu7m.js";import"./Image-CGYLzPm5.js";import"./Link-BBKmZDP0.js";import"./OptionsButton-B_dEKxaj.js";import"./ButtonView-y6eV8uKB.js";import"./ContextMenuContent-yykOR6au.js";import"./Popover-DxBNWdCE.js";import"./DialogTriggerView-u1JI-dwi.js";import"./Switch-DfDniMQ2.js";import"./Label-DJsBJ_92.js";import"./useToggleState-C5Z597wp.js";import"./FieldError-IFpwvXo1.js";import"./LoadingSpinner-pItv9nzE.js";import"./Heading-K1sGoDUJ.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-VybBTGHf.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
