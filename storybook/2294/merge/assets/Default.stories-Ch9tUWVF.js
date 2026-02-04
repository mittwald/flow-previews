import{r as x,j as e}from"./iframe-RCf6-4YI.js";import{F as t}from"./FileDropZone-sPXCk0Dy.js";import{S as d}from"./Section-Bw7Tk3Pz.js";import{F as u}from"./FileCardList-CJwlAQlf.js";import{F}from"./FileCard-CQMxWlHj.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DEh7vI15.js";import{B as f}from"./Button-CRZ6FKVD.js";import{A as b}from"./ActionGroup-MIHI0hnG.js";import{_ as j,$ as B}from"./IconWarning-B0h7osnB.js";import{H as g}from"./Heading-B3B6PIpG.js";import{F as h}from"./FileField-CO56D_GQ.js";import{T as O}from"./Text-HaNR6yqL.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B-6UiOPG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gpdQqKr8.js";import"./index-DOrHsa1U.js";import"./index-BOW2unrE.js";import"./useFieldComponent-C9VOsv8D.js";import"./utils-2Kt3K5yX.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BGlg7n8N.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-6KWBnhoZ.js";import"./useFocus-BlmWIWuz.js";import"./useCollator-CJsBKryN.js";import"./context-C_2cqKRl.js";import"./useLocalizedStringFormatter-BHr3YdQC.js";import"./useFocusRing-DZgLoJPG.js";import"./Button-BjppKy1G.js";import"./ProgressBar-DoFcQr9q.js";import"./Label-DjMItCLE.js";import"./Hidden-C6k2LQ4g.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress--XVd0Ch5.js";import"./useFocusable-CGRcLUlH.js";import"./VisuallyHidden-I0X1hTaI.js";import"./ContextMenuSection-BKm1CmgZ.js";import"./Action-3k_Z5Vty.js";import"./context-CPkaXk0v.js";import"./useStatic-CutofGFR.js";import"./browser-CrfZ_U78.js";import"./getActionGroupSlot-D-mME3-D.js";import"./dynamic-KYjVHqFc.js";import"./Dialog-DSQ8RGJ5.js";import"./RSPContexts-BsLLj1Xv.js";import"./OverlayArrow-CuFac9ex.js";import"./useControlledState-BQGvOabU.js";import"./Collection-DBj67fTj.js";import"./CollectionBuilder-CTQYESGa.js";import"./SelectionIndicator-H7CrMh-P.js";import"./Separator-B1Fq1xVo.js";import"./SelectionManager-Dflhd3Nn.js";import"./useEvent-2JrAtdMs.js";import"./FocusScope-BrE8vcb4.js";import"./ColumnLayout-C_flZEAQ.js";import"./Avatar-DzGpBC83.js";import"./AlertIcon-C_s3bh0k.js";import"./Image-w7CB6eFg.js";import"./Link-Did29DyM.js";import"./OptionsButton-B_nMxMSz.js";import"./ButtonView-Bsuml8lR.js";import"./ContextMenuTriggerView-DYMSHc2b.js";import"./ContextMenuTrigger-CYWpLAs2.js";import"./OverlayTrigger-0-HRuxGs.js";import"./OverlayContextProvider-ByS0uwk8.js";import"./FieldError-KQe80RuS.js";import"./FieldError-C_jxYX-6.js";import"./AlertText-C7SuhXn-.js";import"./useRef-CTBQaoXs.js";import"./useOverlayController-CujP3Hug.js";import"./LoadingSpinner-Cmdt8GzS.js";import"./remote-B1M75xiP.js";import"./Heading-DTpFTjmP.js";import"./useFormValidation-WgNojhOC.js";import"./Input-7NMAjvPw.js";import"./EmulatedBoldText-DexDNb3B.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <SubmitButton>Upload</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,Xe as default};
