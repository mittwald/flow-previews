import{r as x,j as e}from"./iframe-BECefjM4.js";import{F as t}from"./FileDropZone-CrSw-TqR.js";import{S as d}from"./Section-BJXV5he9.js";import{F as u}from"./FileCardList-DQPmedLs.js";import{F}from"./FileCard-BdLblJOQ.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-C-RI2y7J.js";import{B as f}from"./Button-DAjxqCNq.js";import{A as b}from"./ActionGroup-p2GKrbTu.js";import{a0 as j,a1 as B}from"./IconWarning-CvVn1QxU.js";import{H as g}from"./Heading-CqTYuCig.js";import{F as h}from"./FileField-gr2b5Cao.js";import{T as O}from"./Text-lZ2PbEqF.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-RkyKuwYg.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BuliJvUF.js";import"./index-CR5wd-c8.js";import"./index-BGQ8HYEh.js";import"./useFieldComponent-B5iNz-5m.js";import"./utils-bqUpXLHN.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-IrzRAzMs.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d0BVjP-J.js";import"./useFocus-CIRpkrn7.js";import"./useCollator-r-PMcESO.js";import"./context-iJTSqlsV.js";import"./useLocalizedStringFormatter-CcdVRlpp.js";import"./useFocusRing-DIpVtkGc.js";import"./Button-CUoWVSdf.js";import"./ProgressBar-f6I3NHnz.js";import"./Label-DPandUgz.js";import"./Hidden-DMWiq0rX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-427CihAL.js";import"./useFocusable-DTBBh1VF.js";import"./VisuallyHidden-GWiC-wFe.js";import"./ContextMenuSection-C8VBWo1V.js";import"./ActionBatch-DZRJQ0Jr.js";import"./context-mnhTcWwX.js";import"./useStatic-Bcu2QKMg.js";import"./browser-C9O3Z26r.js";import"./getActionGroupSlot-5YMPQbIk.js";import"./dynamic-DJ76M0aZ.js";import"./Dialog-BvIZXNXz.js";import"./RSPContexts-C61Ijawi.js";import"./OverlayArrow-C6gZr2kK.js";import"./useControlledState-2Tdfwl5E.js";import"./Collection-dp2xzFhV.js";import"./CollectionBuilder-mQKTvAir.js";import"./SelectionIndicator-B2vofSgQ.js";import"./Separator-Ba2twhHH.js";import"./SelectionManager-Oe0Hh4DI.js";import"./useEvent-C3AnDdDF.js";import"./FocusScope-CjCXh94P.js";import"./ColumnLayout-BHRsL1Lq.js";import"./Avatar-Nk6lrNKm.js";import"./AlertIcon-B57cAQNM.js";import"./Image-CkO53M69.js";import"./Link-CJeQaYrr.js";import"./OptionsButton-U9HfnVC6.js";import"./ButtonView-C56jVANI.js";import"./ContextMenuTriggerView-VRkbxtUg.js";import"./ContextMenuTrigger-B8mVW8QD.js";import"./OverlayTrigger-Cg8XmR5v.js";import"./OverlayContextProvider-DAJfBpJE.js";import"./FieldError-B21MiKyw.js";import"./FieldError-8R1qsZQS.js";import"./AlertText-DIDGLLaX.js";import"./ActionGroupView-DqUzS8K9.js";import"./Content-LSOtaIIS.js";import"./Modal-BdrjL7gW.js";import"./Overlay-yXgmDyXI.js";import"./useOverlayController-7vnF_84u.js";import"./LoadingSpinner-DXxHNnrx.js";import"./Flex-BjbASY3g.js";import"./useRef-NKl_qwib.js";import"./remote-CqI4D0us.js";import"./Heading-Brz3JFJA.js";import"./useFormValidation-I8j-SbQp.js";import"./Input-BXsG1hsf.js";import"./EmulatedBoldText-DVZs9jiX.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,nr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const tr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,tr as __namedExportsOrder,nr as default};
