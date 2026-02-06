import{r as x,j as e}from"./iframe-Cs0JkT9Q.js";import{F as t}from"./FileDropZone-DwyGP65L.js";import{S as d}from"./Section-DNo4C-Bh.js";import{F as u}from"./FileCardList-vbXT4Rc-.js";import{F}from"./FileCard-DQgRT8h2.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DV0e7N6e.js";import{B as f}from"./Button-BS2N-oft.js";import{A as b}from"./ActionGroup-BRxaHfr4.js";import{_ as j,$ as B}from"./IconWarning-wVjX2Q6D.js";import{H as g}from"./Heading-BKu6e9hA.js";import{F as h}from"./FileField-CMtAQ_K0.js";import{T as O}from"./Text-l9LtklMs.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Dr88f4Bk.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DnhH9c8U.js";import"./index-CF0rrQKO.js";import"./index-BDmaB34G.js";import"./useFieldComponent-BGOnrhQA.js";import"./utils-BvIIGzqK.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Dd1xy9_M.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfslMsP4.js";import"./useFocus-DNqIDWYA.js";import"./useCollator-JQWc_WGD.js";import"./context-CtFpEE6p.js";import"./useLocalizedStringFormatter-CQ-MJvxZ.js";import"./useFocusRing-Cldy4Slr.js";import"./Button-CoGTRo7z.js";import"./ProgressBar-CG2kSUer.js";import"./Label-CQSgfv4f.js";import"./Hidden-BvtrxWwl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-y02TS-RC.js";import"./useFocusable-Cn5DQ2tI.js";import"./VisuallyHidden-BGmnCuXu.js";import"./ContextMenuSection-RP0htgKT.js";import"./Action-8KnSiAHu.js";import"./context-DmALYfE_.js";import"./useStatic-BOH6EX5_.js";import"./browser-Cphwy2_f.js";import"./getActionGroupSlot-BG1YGDa-.js";import"./dynamic-DZ8udFFw.js";import"./Dialog-n12IRs92.js";import"./RSPContexts-BDhxiX2p.js";import"./OverlayArrow-B2W5aB6f.js";import"./useControlledState-DrKGwN1m.js";import"./Collection-BVBA565q.js";import"./CollectionBuilder-BDz0phXE.js";import"./SelectionIndicator-36GmvFRO.js";import"./Separator-BWqNxSAD.js";import"./SelectionManager-DK8tNpRO.js";import"./useEvent-DfZ5FDj0.js";import"./FocusScope-BXTpAFiu.js";import"./ColumnLayout-ix96Nkmw.js";import"./Avatar-DgRZavF_.js";import"./AlertIcon-Dko-1oCR.js";import"./Image-Cq3V-r2y.js";import"./Link-Cm1yPu4S.js";import"./OptionsButton-V6L0CE4X.js";import"./ButtonView-DtNenCUs.js";import"./ContextMenuTriggerView-Dj5siIwr.js";import"./ContextMenuTrigger-D8C0yud5.js";import"./OverlayTrigger-zQW25Tpm.js";import"./OverlayContextProvider-zlrNbl-W.js";import"./FieldError-BZN8rJUk.js";import"./FieldError-zGZXG0KM.js";import"./AlertText-BA7qstOH.js";import"./useRef-CLYklu2m.js";import"./LoadingSpinner-FnXgTY4T.js";import"./remote-bYaNzVPL.js";import"./Heading-eFVgN67f.js";import"./useFormValidation-CaaIEsuY.js";import"./Input-B1hEkaq5.js";import"./EmulatedBoldText-C1XQaUUR.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
