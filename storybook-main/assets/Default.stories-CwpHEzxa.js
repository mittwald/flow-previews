import{r as x,j as e}from"./iframe-CKZ3lvbD.js";import{F as t}from"./FileDropZone-DlDJNUPQ.js";import{S as d}from"./Section-DVJloPPJ.js";import{F as u}from"./FileCardList-BZsrWPin.js";import{F}from"./FileCard-DRtOIytt.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-jo2lO0hE.js";import{B as f}from"./Button-CJlIPsW5.js";import{A as b}from"./ActionGroup-OimQLutj.js";import{a0 as j,a1 as B}from"./IconWarning-C7p1kK8i.js";import{H as g}from"./Heading-BKtZSdLW.js";import{F as h}from"./FileField-DkkYUlvu.js";import{T as O}from"./Text-C_6aanp2.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DAybBWRf.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CG3eh15W.js";import"./index-C7ZQKQyg.js";import"./index-4RPaTPNn.js";import"./useFieldComponent-sXfPOyeP.js";import"./utils-BvJRIsTz.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CCMj3K8Y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-GmF_fUr4.js";import"./useFocus-C_IvCZ_Q.js";import"./useCollator-DWyyMPNk.js";import"./context-C9x0o2NL.js";import"./useLocalizedStringFormatter-DIxPxHlf.js";import"./useFocusRing-BEfvRwzV.js";import"./Button-BHDMacWQ.js";import"./ProgressBar-aA2LYAol.js";import"./Label-CNWA-9aF.js";import"./Hidden-CSZFPuze.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BdqAXD8t.js";import"./useFocusable-C7EwfmGM.js";import"./VisuallyHidden-CqTmIJ-k.js";import"./ContextMenuSection-Dgn4oNc5.js";import"./Action-BaMcPQM3.js";import"./context-Ca4O4Dr-.js";import"./useStatic-B8hmur2r.js";import"./browser-burL9SPa.js";import"./getActionGroupSlot-C_ThMj2R.js";import"./dynamic-BOUQFyUk.js";import"./Dialog-C-Rr13fs.js";import"./RSPContexts-lOz_fmPr.js";import"./OverlayArrow-Dn7uJ_Mq.js";import"./useControlledState-DyEi02IX.js";import"./Collection-8TFUhRy4.js";import"./CollectionBuilder-DlZiYq_X.js";import"./SelectionIndicator-Lac2coO-.js";import"./Separator-CX2sLzIc.js";import"./SelectionManager-BD0CXj_-.js";import"./useEvent-BnoBTd1m.js";import"./FocusScope-WJghiIyT.js";import"./ColumnLayout-CboKoTSD.js";import"./Avatar-D1ycV9-I.js";import"./AlertIcon-DDOfYHUc.js";import"./Image-3twuDj3M.js";import"./Link-3yz_UhBK.js";import"./OptionsButton-B6o0-wQF.js";import"./ButtonView-DfeKjjgQ.js";import"./ContextMenuTriggerView-BuEVRwIo.js";import"./ContextMenuTrigger-B32nQfaz.js";import"./OverlayTrigger-C1yyJzXM.js";import"./OverlayContextProvider-CR_6hmPV.js";import"./FieldError-BAXRdB0p.js";import"./FieldError-BqwxYxeF.js";import"./AlertText-BzzQHSYi.js";import"./useRef-DbyQDNZa.js";import"./LoadingSpinner-D6ABJv6G.js";import"./remote-CtPArtkt.js";import"./Heading-DdSm2kzR.js";import"./useFormValidation-BpwCrRY1.js";import"./Input-DyPHNw9T.js";import"./EmulatedBoldText-DqsKkhpE.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const $e=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,$e as __namedExportsOrder,Xe as default};
