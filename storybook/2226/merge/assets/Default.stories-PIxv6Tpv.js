import{r as x,j as e}from"./iframe-ChVCZzSM.js";import{F as t}from"./FileDropZone-hSy3aHni.js";import{S as d}from"./Section-CCSEsssw.js";import{F as u}from"./FileCardList-DcLpWW88.js";import{F}from"./FileCard-D7afH6n8.js";import{u as S,F as C,t as D}from"./Form-Wq02j4t1.js";import{S as y}from"./ResetButton-LlXKxXXn.js";import{B as f}from"./Button-DDsnJhyb.js";import{A as b}from"./ActionGroup-Da32zVp8.js";import{Z as j,_ as B}from"./IconWarning-DiIA_Kv4.js";import{H as g}from"./Heading-DGiEIOEA.js";import{F as h}from"./FileField-s5XSqmxr.js";import{T as O}from"./Text-CDV1KOVg.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-pyqtsjXv.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CzVJsrSl.js";import"./index-AQkY3hEg.js";import"./index-B17aiXwm.js";import"./useFieldComponent--rNpfgQ4.js";import"./utils-D2Dbeo4Y.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-JkP9a4Kb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DQfYHHHP.js";import"./useFocus-D0NBuExq.js";import"./useCollator-iud0owJE.js";import"./context-DJbicbqJ.js";import"./useLocalizedStringFormatter-CLU1Wmp0.js";import"./Button-DQvyXKNx.js";import"./ProgressBar-Cxzv2Khu.js";import"./Label-B7WWEN6i.js";import"./Hidden-CmNYW2sS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DJQIPi1Q.js";import"./useFocusRing-BKxozeV4.js";import"./useFocusable-DqNAAmsp.js";import"./VisuallyHidden-DGYqp_5z.js";import"./ContextMenuSection-CMrkKIyN.js";import"./Action-BtwaxeJT.js";import"./context-5fKqnWzS.js";import"./useStatic-DfTrwEFp.js";import"./browser-Drl1pS0o.js";import"./getActionGroupSlot-Bdjbco6c.js";import"./dynamic-M4vO8Oa6.js";import"./Dialog-BaNJO3_y.js";import"./RSPContexts-DU6h72_u.js";import"./OverlayArrow-CfPd7gS0.js";import"./useControlledState-BqHrqPJL.js";import"./Collection-BAX2Qk0i.js";import"./CollectionBuilder-BBxJk1-3.js";import"./SelectionIndicator-CB8Y-x_O.js";import"./Separator-CHS7wGgu.js";import"./SelectionManager-CbtLPV9G.js";import"./useEvent-DKVYVBpY.js";import"./FocusScope-BLCDYAIb.js";import"./ColumnLayout-O6NRbhP0.js";import"./Avatar-D9unXc2w.js";import"./AlertIcon-D4mG0jAW.js";import"./Image-BG8dtFh9.js";import"./Link-CSdvxU5f.js";import"./OptionsButton-BuwVfXGc.js";import"./ButtonView-ERTDXvRy.js";import"./ContextMenuTriggerView-CmKH8jUv.js";import"./ContextMenuTrigger-FQbwYITD.js";import"./OverlayTrigger-v4LHk93w.js";import"./OverlayContextProvider-r_uJzIjb.js";import"./FieldError-DeqqVmMl.js";import"./FieldError-CO11AzDW.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DHWaZ2bi.js";import"./LoadingSpinner-CIFEKnPX.js";import"./remote-B9ld2KSn.js";import"./Heading-DVvsLghH.js";import"./useFormValidation-BwLvk9We.js";import"./Input-D2FpdmSE.js";import"./EmulatedBoldText-DJ1rAIrZ.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
