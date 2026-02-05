import{r as x,j as e}from"./iframe-DdPUg3l1.js";import{F as t}from"./FileDropZone-pW5YiFwg.js";import{S as d}from"./Section-B-inExSs.js";import{F as u}from"./FileCardList-aB1uwagy.js";import{F}from"./FileCard-DYu2z1uL.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-Bs1fiSSt.js";import{B as f}from"./Button-BArDp6jY.js";import{A as b}from"./ActionGroup-DKw0Osps.js";import{a0 as j,a1 as B}from"./IconWarning-CBjvo3Bl.js";import{H as g}from"./Heading-L1WE8Mc-.js";import{F as h}from"./FileField-Chbn_uEo.js";import{T as O}from"./Text-DjGrgiDc.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Ce6hvlwg.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B28SqkEE.js";import"./index-DRxXhfH_.js";import"./index-DfF1Hh-7.js";import"./useFieldComponent-CO5pYfeq.js";import"./utils-CZc2hRnH.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-JRLUlLnO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfTMKk9x.js";import"./useFocus-DOBDf5za.js";import"./useCollator-C9Olqd5e.js";import"./context-eo9HPzgD.js";import"./useLocalizedStringFormatter-uZq7iOxf.js";import"./useFocusRing-B1QHji0w.js";import"./Button-CezSw_uu.js";import"./ProgressBar-CbaeLh44.js";import"./Label-DhA6S4Mt.js";import"./Hidden-9XxNu-Hn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C4aurJT7.js";import"./useFocusable-Dd42TuHo.js";import"./VisuallyHidden-DYHUXKrU.js";import"./ContextMenuSection-CdzHr0DY.js";import"./Action-C8Qj_gPz.js";import"./context-Dvh-zisW.js";import"./useStatic-BSymBvZm.js";import"./browser-CdIpgqNn.js";import"./getActionGroupSlot-WBqMZ1Fi.js";import"./dynamic-nfXH0DAB.js";import"./Dialog-B4itYT93.js";import"./RSPContexts-DWbGf7NE.js";import"./OverlayArrow-CejAifjZ.js";import"./useControlledState-vD92hbDx.js";import"./Collection-C0yC48YX.js";import"./CollectionBuilder-dja0_mRS.js";import"./SelectionIndicator-DB3-93Os.js";import"./Separator-DPd0--zN.js";import"./SelectionManager-CZbTqcCP.js";import"./useEvent-ZVXwlSCj.js";import"./FocusScope-DY6t_O03.js";import"./ColumnLayout-CJWPwfzv.js";import"./Avatar-Bou1AGyP.js";import"./AlertIcon-PzDvVuZo.js";import"./Image-BRC1soQB.js";import"./Link-DPd8jzda.js";import"./OptionsButton-7Cwjn6tR.js";import"./ButtonView-BofU8H8L.js";import"./ContextMenuTriggerView-CkfEDDNi.js";import"./ContextMenuTrigger-D6sfCNzc.js";import"./OverlayTrigger-Dxt_ykXt.js";import"./OverlayContextProvider-CWnaXv7P.js";import"./FieldError-Brd6jVZQ.js";import"./FieldError-DDOFx421.js";import"./AlertText-Ds6Oj97F.js";import"./useRef-eASsJvtI.js";import"./LoadingSpinner-CrAIHNN2.js";import"./remote-C_Lvi_2k.js";import"./Heading-Daf4DLe6.js";import"./useFormValidation-ChceI0Vn.js";import"./Input--TqM61uI.js";import"./EmulatedBoldText-DdQb5yyc.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
