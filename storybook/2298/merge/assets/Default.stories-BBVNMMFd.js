import{r as x,j as e}from"./iframe-C-RKPwSE.js";import{F as t}from"./FileDropZone-Ci2km-vk.js";import{S as d}from"./Section-DGgswCDI.js";import{F as u}from"./FileCardList-CdJ5BWb7.js";import{F}from"./FileCard-BOPuiWzV.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-1zvyZrSD.js";import{B as f}from"./Button-C4QFurWq.js";import{A as b}from"./ActionGroup-CdZy8cFO.js";import{_ as j,$ as B}from"./IconWarning-B9kpDIcu.js";import{H as g}from"./Heading-BLLuHX2c.js";import{F as h}from"./FileField-B9qmAiHW.js";import{T as O}from"./Text-DceSOphz.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-lgaxBSe4.js";import"./clsx-B-dksMZM.js";import"./flowComponent-_zksvKqG.js";import"./index-ChFaffKJ.js";import"./index-NcfLMdM4.js";import"./useFieldComponent-ILpXs27H.js";import"./utils-BNo7v4Co.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CWybMa0K.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DvGejoW4.js";import"./useFocus-EK5CVku_.js";import"./useCollator-CE95nY3l.js";import"./context-CG0zmStT.js";import"./useLocalizedStringFormatter-DtbvJlWC.js";import"./useFocusRing-CPvrkvyz.js";import"./Button-BUrsQ2n2.js";import"./ProgressBar-CT-OPPKM.js";import"./Label-BVYBl4lk.js";import"./Hidden-0w5RaPP8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D8JiKPWZ.js";import"./useFocusable-BqhdVXbn.js";import"./VisuallyHidden-lhIVNasT.js";import"./ContextMenuSection-D3zQaczq.js";import"./Action-fo4y3mrQ.js";import"./context-C3Gge9in.js";import"./useStatic-CxBkvBNE.js";import"./browser-BU-qC_3h.js";import"./getActionGroupSlot-CQZlUX1Z.js";import"./dynamic-D4AljtfH.js";import"./Dialog-5IYWsYFe.js";import"./RSPContexts-7oABi43d.js";import"./OverlayArrow-zXeQXnR5.js";import"./useControlledState-PGxEdwVp.js";import"./Collection-CZ-kw58d.js";import"./CollectionBuilder-DCVYcT7j.js";import"./SelectionIndicator-CCq6JAG-.js";import"./Separator-HdZXbs1f.js";import"./SelectionManager-CqNsU9e7.js";import"./useEvent-DJpgi1nc.js";import"./FocusScope-DV38vf4J.js";import"./ColumnLayout-CTChS9oN.js";import"./Avatar-BVAQQ1MR.js";import"./AlertIcon-EwQ99KQC.js";import"./Image-PMk04Lr0.js";import"./Link-BqHbwmyH.js";import"./OptionsButton-C0TPayjY.js";import"./ButtonView-lpEgsJ9B.js";import"./ContextMenuTriggerView-B9u1OUTT.js";import"./ContextMenuTrigger-GgQv_FW0.js";import"./OverlayTrigger-DlhOnJ8b.js";import"./OverlayContextProvider-wIYWseIw.js";import"./FieldError-Bk-w_c0r.js";import"./FieldError-BbtVOi4H.js";import"./AlertText-F-sJ7jVx.js";import"./useRef-DJxmByEC.js";import"./LoadingSpinner-B5fSKp-d.js";import"./remote-Dp4k7gKv.js";import"./Heading-CcYcuTte.js";import"./useFormValidation-BVV7LE3u.js";import"./Input-Dl0Z7qPf.js";import"./EmulatedBoldText-CGXBgVzv.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
