import{r as x,j as e}from"./iframe-Czt-X4mt.js";import{F as t}from"./FileDropZone-COS0mRMA.js";import{S as d}from"./Section-D-QcuIGE.js";import{F as u}from"./FileCardList-ChSE6Fl6.js";import{F}from"./FileCard-B1ohJg9r.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-Cqw_oC7V.js";import{B as f}from"./Button-CD6msFpC.js";import{A as b}from"./ActionGroup-DjlBFa1z.js";import{a0 as j,a1 as B}from"./IconWarning-CEtgECHE.js";import{H as g}from"./Heading-53sbNT6w.js";import{F as h}from"./FileField-DPZrYu-0.js";import{T as O}from"./Text-8ynHQhOY.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-D6m76Vlt.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BEE6NzIR.js";import"./index-BvfwTKjZ.js";import"./index-Dtw36EGp.js";import"./useFieldComponent-CjTkiSgD.js";import"./utils-CU6JriEK.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-t3MR2mNG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BR4TCRo_.js";import"./useFocus-En_BVabG.js";import"./useCollator-SMtHYG8Q.js";import"./context-BsnVI305.js";import"./useLocalizedStringFormatter-BDxrzy3H.js";import"./useFocusRing-DDb3Exp8.js";import"./Button-YmddG4Dp.js";import"./ProgressBar-DtVqo96T.js";import"./Label-Ddc2_N7O.js";import"./Hidden-B_4G05gn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DEVH16Jn.js";import"./useFocusable-DFLTBTxr.js";import"./VisuallyHidden-jSb2CZNn.js";import"./ContextMenuSection-CUYBU0Kr.js";import"./Action-BQrZ3ZgM.js";import"./context-CNfFuvDb.js";import"./useStatic-C0a0tu6G.js";import"./browser-CPd8oh-y.js";import"./dynamic-BXoid3qz.js";import"./getActionGroupSlot-5QVk2C33.js";import"./Dialog-CYkX7YiI.js";import"./RSPContexts-BGSIbyEV.js";import"./OverlayArrow-DFsPHtjC.js";import"./useControlledState-DhgMObTD.js";import"./Collection-BiWiEach.js";import"./CollectionBuilder-DHVWwXoR.js";import"./SelectionIndicator-8fZBRAhq.js";import"./Separator-T09-1zVq.js";import"./SelectionManager-CRIq19Ox.js";import"./useEvent-DNkkjmy4.js";import"./FocusScope-DGuUwoy_.js";import"./ColumnLayout-CilOdNbR.js";import"./Avatar-nxdk2h98.js";import"./AlertIcon-DBLlr2Uy.js";import"./Image-AOGTDSBx.js";import"./Link-LTFE4TsB.js";import"./OptionsButton-mjlAQNfG.js";import"./ButtonView-COtP3lz8.js";import"./ContextMenuTriggerView-BtF33Ypf.js";import"./ContextMenuTrigger-BTcSczWB.js";import"./OverlayTrigger-D2Ur5kvg.js";import"./OverlayContextProvider-DqUVzQmH.js";import"./FieldError-BFQHJf6J.js";import"./FieldError-8b6ruGQE.js";import"./AlertText-BfffkCAs.js";import"./useRef-CYQbuMBQ.js";import"./LoadingSpinner-B3-O-X86.js";import"./remote-hRcAmPck.js";import"./Heading-DpW_T125.js";import"./useFormValidation-DyL1ZPxG.js";import"./Input-BropXuGq.js";import"./EmulatedBoldText-DRvUUCjd.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
