import{r as x,j as e}from"./iframe-CJFOFCad.js";import{F as t}from"./FileDropZone-DDbv-m5I.js";import{S as d}from"./Section-CCwmV9uG.js";import{F as u}from"./FileCardList-BdaJl9Ve.js";import{F}from"./FileCard-CMSyKATo.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-BkgcDrX7.js";import{B as f}from"./Button-D5kumnA4.js";import{A as b}from"./ActionGroup-B-ixDo6k.js";import{_ as j,$ as B}from"./IconWarning-1TKJLzWG.js";import{H as g}from"./Heading-BkdVO0Fc.js";import{F as h}from"./FileField-BCQO3n1C.js";import{T as O}from"./Text-CI7VZqhd.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CUHJcM3b.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CJG1rMDz.js";import"./index-BSRN0wm6.js";import"./index-Cu9s0VFH.js";import"./useFieldComponent-CVIwC-Yy.js";import"./utils-CsQ8IQtm.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-8vym_gVd.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cb3KoAb3.js";import"./useFocus-Cgy8euA9.js";import"./useCollator-DYyzym3S.js";import"./context-CMyux8LD.js";import"./useLocalizedStringFormatter-cHnXWnWa.js";import"./useFocusRing-wbIo7ugc.js";import"./Button-BaNQUerH.js";import"./ProgressBar-D1JMQZ2r.js";import"./Label-Ce0MMouV.js";import"./Hidden-DmbQVkh7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-NyliDXf7.js";import"./useFocusable-13L7602I.js";import"./VisuallyHidden-CZLhXAB_.js";import"./ContextMenuSection-C56vs4OS.js";import"./Action-Vq-tbHvg.js";import"./context-DTASnmZz.js";import"./useStatic-C0hf5llT.js";import"./browser-C8kWAWSZ.js";import"./getActionGroupSlot-MsF1cFZX.js";import"./dynamic-CfulQ7wG.js";import"./Dialog-YkcYiA7q.js";import"./RSPContexts-CNS2UWja.js";import"./OverlayArrow-DEHMSq9h.js";import"./useControlledState-DvHOpAD3.js";import"./Collection-B9y5YoW-.js";import"./CollectionBuilder-Dz6WVvJx.js";import"./SelectionIndicator-BI4debiO.js";import"./Separator-CS0DDWqc.js";import"./SelectionManager-DYEiw_sj.js";import"./useEvent-Bx7Hxhw9.js";import"./FocusScope-BYRCsx--.js";import"./ColumnLayout-BxBPXm11.js";import"./Avatar-C8l0STaK.js";import"./AlertIcon-BfQxSvrI.js";import"./Image-Daq_IyzH.js";import"./Link-RePb-XAx.js";import"./OptionsButton-DFi60tg7.js";import"./ButtonView-BS0xOJCI.js";import"./ContextMenuTriggerView-BF_HBySx.js";import"./ContextMenuTrigger-BdGqdAHu.js";import"./OverlayTrigger-ByPpL00z.js";import"./OverlayContextProvider-DL2zELSv.js";import"./FieldError-Dc2Z54jn.js";import"./FieldError-B3-rgjm7.js";import"./AlertText-BB2MdEuH.js";import"./useRef-B-LbwbXp.js";import"./LoadingSpinner-CM8bIOhN.js";import"./remote-BxHvJS68.js";import"./Heading-DOJDeA1a.js";import"./useFormValidation-DcThlYcg.js";import"./Input-BgsLbNjC.js";import"./EmulatedBoldText-BF5DLBnT.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
