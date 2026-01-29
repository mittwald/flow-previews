import{r as x,j as e}from"./iframe-Ci26vI3B.js";import{F as t}from"./FileDropZone-BqFtwipQ.js";import{S as d}from"./Section-B3-aJ9Rn.js";import{F as u}from"./FileCardList-BrOR_stc.js";import{F}from"./FileCard-DfN9cWye.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-CpQCWtXZ.js";import{B as f}from"./Button-Bgg1raPB.js";import{A as b}from"./ActionGroup-Wo5_oqtF.js";import{_ as j,$ as B}from"./IconWarning-CM9E6h9H.js";import{H as g}from"./Heading--cJO5BZg.js";import{F as h}from"./FileField-JfOHwLO4.js";import{T as O}from"./Text-BThwDV_-.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DXL9jABM.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BCoZzahf.js";import"./index-3wEtqLOq.js";import"./index-BgjIHz1Y.js";import"./useFieldComponent-DlKim18O.js";import"./utils-Prtw8tAI.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BBkEKRDK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D7Kjovyf.js";import"./useFocus-BemMoN-v.js";import"./useCollator-BE-Xf4hi.js";import"./context-21njfTP5.js";import"./useLocalizedStringFormatter-D463xrfM.js";import"./useFocusRing-IT4cpc8M.js";import"./Button-B-v9WAC7.js";import"./ProgressBar-Cd-gbxhy.js";import"./Label-CzTNGA-w.js";import"./Hidden-Bh4pa2b3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIn545i6.js";import"./useFocusable-C470YARL.js";import"./VisuallyHidden-BSnmZ3mx.js";import"./ContextMenuSection-B4FW6kIZ.js";import"./Action-BUuW9nUE.js";import"./context-BCzJciSx.js";import"./useStatic-wckFiMZJ.js";import"./browser-CkG7QNAh.js";import"./getActionGroupSlot--c77iWbK.js";import"./dynamic-CWUTf5k8.js";import"./Dialog-DpyFyuBj.js";import"./RSPContexts-wYlI8WBg.js";import"./OverlayArrow-G0bNf6l9.js";import"./useControlledState-B4ASThyn.js";import"./Collection-B2Ssnxvf.js";import"./CollectionBuilder-BZqHFZmJ.js";import"./SelectionIndicator-DzwumZRP.js";import"./Separator-D2dDCvgZ.js";import"./SelectionManager-3iDEc--o.js";import"./useEvent-DLiSbdt5.js";import"./FocusScope-ByCQWjTm.js";import"./ColumnLayout-Cr7KbvBi.js";import"./Avatar-Bclre7ul.js";import"./AlertIcon-CQS_iHVq.js";import"./Image-Bokl-6jM.js";import"./Link-Iwra83HD.js";import"./OptionsButton-AC928aCk.js";import"./ButtonView-CpgiMrkS.js";import"./ContextMenuTriggerView-DvorMHKF.js";import"./ContextMenuTrigger-Dmvy7qOU.js";import"./OverlayTrigger-BQgQEM-6.js";import"./OverlayContextProvider-Df7HHBCA.js";import"./FieldError-CpZGKwRg.js";import"./FieldError-C8ji9kGw.js";import"./AlertText-CW-S-5R1.js";import"./useRef-KFnBoEQ2.js";import"./LoadingSpinner-CiE2xtQ-.js";import"./remote-BeH756Ak.js";import"./Heading-CXYj_MKW.js";import"./useFormValidation-DbMZQ9P7.js";import"./Input-D6UBTZXc.js";import"./EmulatedBoldText-TNvCnD2A.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
