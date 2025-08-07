import{r as h,j as e}from"./iframe-DOyiym2O.js";import{F as t}from"./FileDropZone-DC6uBKf6.js";import{S as c}from"./Section-Whv37-TA.js";import{F as d}from"./FileCardList-BLay6yOG.js";import{F as u}from"./FileCard-C3gqjZVH.js";import{u as O,F as T,t as _}from"./Form-DPVW4xvM.js";import{B as s}from"./Button-Dhe1yso8.js";import{A as b}from"./ActionGroup-DmbQXpeM.js";import{Y as x,Z as k}from"./IconWarning-DM4ryx1N.js";import{H as F}from"./Heading-D47GxrRc.js";import{F as f}from"./FileField-BOEdTqa9.js";import{T as U}from"./Text-DNTWXR5k.js";import"./IllustratedMessage-ChN8MC98.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BYw3-7_y.js";import"./mergeRefs-oR_2TdTx.js";import"./index-CmB0dnpi.js";import"./utils-p6TFjs22.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Db2PSOfB.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DjTxglfT.js";import"./useFocus-CRPlmaKe.js";import"./useCollator-BKrnVFMg.js";import"./context-DNMunrTn.js";import"./useLocalizedStringFormatter-LAQIr2PZ.js";import"./Button-lDf0mDtZ.js";import"./ProgressBar-DwMxj3po.js";import"./Label-gKLM5Ku1.js";import"./Hidden-BJphBd81.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-U0v1W6r8.js";import"./useFocusRing-wEjsdZUW.js";import"./useFocusable-CF6DJuo2.js";import"./VisuallyHidden-DEjaPn8D.js";import"./ContextMenuSection-Bkzf7edI.js";import"./Action-B1c9MoHY.js";import"./context-y7iGkUpV.js";import"./useStatic-BqyjIn97.js";import"./browser-Cgs4Q9ZH.js";import"./getActionGroupSlot-Cqvvv9Ww.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CZhNJUBb.js";import"./RSPContexts-B59Hd7Xy.js";import"./OverlayArrow-DUzOkRZT.js";import"./useControlledState-CTI65F-h.js";import"./Collection-BIknmaaI.js";import"./CollectionBuilder-MitjRKQw.js";import"./Separator-DGoHVraj.js";import"./Group-BsZagJvP.js";import"./SearchField-B3q2UkIK.js";import"./FieldError-e9k0WgIs.js";import"./Form-D7si9Qjh.js";import"./useTextField-CDeIHIKC.js";import"./useFormReset-D392FMdG.js";import"./TextField-DJtp4_Iq.js";import"./useEvent-DhVC8KrJ.js";import"./SelectionManager-BoGC0shM.js";import"./FocusScope-BYeNXI2v.js";import"./ColumnLayout-7jt1WOiv.js";import"./Avatar-B2ug1YDR.js";import"./AlertIcon-CQ3BB5GT.js";import"./Image-Da3OUoYi.js";import"./Link-CGlj800S.js";import"./OptionsButton-WagOH4WY.js";import"./ButtonView-DnvcBrIh.js";import"./ContextMenuContent-CMjf41T9.js";import"./Popover-O9vM2Bhw.js";import"./DialogTriggerView-D4vNWmaM.js";import"./Switch-CVDwgCxd.js";import"./Label-DGNkT8gh.js";import"./useToggleState-CdNeLvbi.js";import"./FieldError-gzY4_mEC.js";import"./LoadingSpinner-egM8r-vP.js";import"./Heading-C2y325QX.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-npPiHGdu.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
