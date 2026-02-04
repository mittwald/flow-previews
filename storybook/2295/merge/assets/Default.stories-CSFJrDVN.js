import{r as x,j as e}from"./iframe-D016uj-S.js";import{F as t}from"./FileDropZone-Djsopz9k.js";import{S as d}from"./Section-DP_5z26A.js";import{F as u}from"./FileCardList-1hxGxjzs.js";import{F}from"./FileCard-BYix0QPG.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-BRPsKI2G.js";import{B as f}from"./Button-DbVylex6.js";import{A as b}from"./ActionGroup-DhZvC8nG.js";import{_ as j,$ as B}from"./IconWarning-BQBcHsun.js";import{H as g}from"./Heading-DfZlNpH0.js";import{F as h}from"./FileField-TWaUhXpf.js";import{T as O}from"./Text-BZY8Sc_P.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BRTLEX_Z.js";import"./clsx-B-dksMZM.js";import"./flowComponent-wtQiCPfr.js";import"./index-CfkcKJZT.js";import"./index-BqMc4IgT.js";import"./useFieldComponent-OnEMgUvv.js";import"./utils-DQASSsuC.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DsGfukAy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DeeX-PEx.js";import"./useFocus-tZAxz16O.js";import"./useCollator-JAzbZwM3.js";import"./context-CQQzrfiw.js";import"./useLocalizedStringFormatter-CIw_JE4k.js";import"./useFocusRing-BdU2-3MK.js";import"./Button-Cna7ldBx.js";import"./ProgressBar-CXPYtOXa.js";import"./Label-LkWds508.js";import"./Hidden-DpSCwLxf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CVzN9kXH.js";import"./useFocusable-DeuIjFJe.js";import"./VisuallyHidden-D5-LZtaI.js";import"./ContextMenuSection-eBZWNBFV.js";import"./Action-DF_37S4W.js";import"./context-BESBZ1Rk.js";import"./useStatic-Bbhetyj1.js";import"./browser-DLaO_aqG.js";import"./getActionGroupSlot-DwZ8TTEt.js";import"./dynamic-7WCHGigE.js";import"./Dialog-ptAcXQW8.js";import"./RSPContexts-CjK5iojx.js";import"./OverlayArrow-BzkfNGFW.js";import"./useControlledState-cpMkF7RC.js";import"./Collection-BcXzzjbm.js";import"./CollectionBuilder-BgjMiTt7.js";import"./SelectionIndicator-BhBccG1G.js";import"./Separator-ByOk2cbm.js";import"./SelectionManager--rP1hhHv.js";import"./useEvent-BgqC1tZY.js";import"./FocusScope-DtVgD18c.js";import"./ColumnLayout-CmmMxeys.js";import"./Avatar-CQ_8nHar.js";import"./AlertIcon-DUg_mU1Z.js";import"./Image-CJ6g7YAe.js";import"./Link-6VlT22uZ.js";import"./OptionsButton-ClvcG-I4.js";import"./ButtonView-8kA9VB7F.js";import"./ContextMenuTriggerView-B5wk6Bwi.js";import"./ContextMenuTrigger-Tfu4Sb-o.js";import"./OverlayTrigger-D4-Q-rZX.js";import"./OverlayContextProvider-CUXBFq_J.js";import"./FieldError-CW77VWgH.js";import"./FieldError-Db3WFp2b.js";import"./AlertText-0Z7TF0Nn.js";import"./useRef-BPmAOGIJ.js";import"./LoadingSpinner-Dcve79PX.js";import"./remote-CBH6kE0Y.js";import"./Heading-CKF5Rm78.js";import"./useFormValidation-Cq6iPNGO.js";import"./Input-CMqHHcBD.js";import"./EmulatedBoldText-CEIO41Nr.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Xe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
