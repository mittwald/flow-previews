import{r as x,j as e}from"./iframe-pec-daIN.js";import{F as t}from"./FileDropZone-CmGGnxDG.js";import{S as d}from"./Section-DDPMHRBL.js";import{F as u}from"./FileCardList-DQIhubHW.js";import{F}from"./FileCard-LlE7-2Qb.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-BHrI3BIr.js";import{B as f}from"./Button-TbsWowXg.js";import{A as b}from"./ActionGroup-Cw8xMur0.js";import{_ as j,$ as B}from"./IconWarning-BNWGnhvf.js";import{H as g}from"./Heading-XncZngQX.js";import{F as h}from"./FileField-B5QxE1jK.js";import{T as O}from"./Text-KadZ5_Og.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Q8fJupZn.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dhs06173.js";import"./index-DJTXzqQk.js";import"./index-CHD_W7k-.js";import"./useFieldComponent-BVaTpDhT.js";import"./utils-DgvXfbTX.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-ChVSp7Zj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-EN4dlqGk.js";import"./useFocus-8lECnDuB.js";import"./useCollator-Bc_1nfh_.js";import"./context-6wXKo3vr.js";import"./useLocalizedStringFormatter-DQtSZIdS.js";import"./useFocusRing-D1bapTtD.js";import"./Button-BVdTMk7w.js";import"./ProgressBar-BMgVEN8s.js";import"./Label-BgXd0ScX.js";import"./Hidden-BHo1_O4t.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXePSkUY.js";import"./useFocusable-DHeceSRU.js";import"./VisuallyHidden-CRkS1ULJ.js";import"./ContextMenuSection-DNSduqHu.js";import"./Action-8dbKhHvU.js";import"./context-CSF0VmIA.js";import"./useStatic-DtKIUYIw.js";import"./browser-CB013lxp.js";import"./getActionGroupSlot-BTwNrt7T.js";import"./dynamic-KYdmGlVp.js";import"./Dialog-CHeMFU-y.js";import"./RSPContexts-CXn4NsJp.js";import"./OverlayArrow-DWFODRfO.js";import"./useControlledState-C8wEjdVb.js";import"./Collection-CMUMsBwk.js";import"./CollectionBuilder-UpU1wmgz.js";import"./SelectionIndicator-Cx4KKVM-.js";import"./Separator-ChvruPVC.js";import"./SelectionManager-DC-DY4jN.js";import"./useEvent-TrAkXyi-.js";import"./FocusScope-D8KAWd4v.js";import"./ColumnLayout-CqWtjdqx.js";import"./Avatar-CWmxtsLw.js";import"./AlertIcon-Df2ALci7.js";import"./Image-el8LUpNw.js";import"./Link-C7_pSF2X.js";import"./OptionsButton-KFH3jm8X.js";import"./ButtonView-DOrN6z8l.js";import"./ContextMenuTriggerView-_iT0KkXu.js";import"./ContextMenuTrigger-DR00yKBn.js";import"./OverlayTrigger-LLvsqu3e.js";import"./OverlayContextProvider-DRuVjJJZ.js";import"./FieldError-r6Iz548x.js";import"./FieldError-DRdVsyAa.js";import"./AlertText-XXHjf97y.js";import"./useRef-DUas6rLX.js";import"./LoadingSpinner-DJdNJN2d.js";import"./remote-CL_x9DF5.js";import"./Heading-Dfi1y-Mg.js";import"./useFormValidation-Cw4fPepy.js";import"./Input-nceBJ8Dt.js";import"./EmulatedBoldText-CH8TmYXX.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
