import{r as x,j as e}from"./iframe-DN5oj4yX.js";import{F as t}from"./FileDropZone-1qFhFwIT.js";import{S as d}from"./Section-DsnEjQ43.js";import{F as u}from"./FileCardList-BWfmjwEn.js";import{F}from"./FileCard-DLWP1kSg.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-B5ThXBL6.js";import{B as f}from"./Button-CF7BcIrS.js";import{A as b}from"./ActionGroup-pSqLGzLz.js";import{a0 as j,a1 as B}from"./IconWarning-C1DuEctF.js";import{H as g}from"./Heading-CAunjdNa.js";import{F as h}from"./FileField-BXBe-EZ5.js";import{T as O}from"./Text-B6wg_w_v.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-D7Cy09CJ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D5tzpGYQ.js";import"./index-D8Wg1xo0.js";import"./index-DUndj3nA.js";import"./useFieldComponent-DVOrWc0y.js";import"./utils-u73lU7bl.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-mAHBNKmk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-52-JVqkW.js";import"./useFocus-CanfFAPv.js";import"./useCollator-DUmbl0t5.js";import"./context-BQuP-QJJ.js";import"./useLocalizedStringFormatter-Dqjs-V7P.js";import"./useFocusRing-Cbnk9x9v.js";import"./Button-BQ5wMWnN.js";import"./ProgressBar-ChQMk24B.js";import"./Label-D5uLN87S.js";import"./Hidden-DvJV1KBO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-dDK8KT2l.js";import"./useFocusable-6yyx7e1u.js";import"./VisuallyHidden-BipIpOcd.js";import"./ContextMenuSection-D4h9xx_Q.js";import"./Action-GYKv85ul.js";import"./context-BOqeUKEn.js";import"./useStatic-D8kDoy_M.js";import"./browser-t02O3gv-.js";import"./dynamic-D_PfG4t1.js";import"./getActionGroupSlot-B3lnxGbD.js";import"./Dialog-CpK4NMTe.js";import"./RSPContexts-CT4Rd2GX.js";import"./OverlayArrow-BufWJWwU.js";import"./useControlledState-Dl4qb5FM.js";import"./Collection-DN16OmDe.js";import"./CollectionBuilder-CE82C-kz.js";import"./SelectionIndicator-BsSExIou.js";import"./Separator-CB9FghXV.js";import"./SelectionManager-upRYqEYI.js";import"./useEvent-CkPyHfFN.js";import"./FocusScope-BtxR-tB9.js";import"./ColumnLayout-viDS3uE0.js";import"./Avatar-DoVHVCz_.js";import"./AlertIcon-DDaSQZAJ.js";import"./Image-UqrTskAV.js";import"./Link-DmqPF8TL.js";import"./OptionsButton-CjD6N8AO.js";import"./ButtonView-yRoRDfha.js";import"./ContextMenuTriggerView-0NNdpdsT.js";import"./ContextMenuTrigger-CfIxeI-D.js";import"./OverlayTrigger-DmhzA4cb.js";import"./OverlayContextProvider-BWiZzEmK.js";import"./FieldError-CqFPhrQB.js";import"./FieldError-lE_N68JV.js";import"./AlertText-CB1nkD4I.js";import"./useRef-C2EU3C7-.js";import"./LoadingSpinner-IkyiKoyX.js";import"./remote-CDfMg8I2.js";import"./Heading-sKqg2l7g.js";import"./useFormValidation-pAg62KPr.js";import"./Input-Bwk10Fre.js";import"./EmulatedBoldText-rvhjeWKi.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
