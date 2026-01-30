import{r as x,j as e}from"./iframe-BipmDVic.js";import{F as t}from"./FileDropZone-CJQyIAWl.js";import{S as d}from"./Section-BSyGStrt.js";import{F as u}from"./FileCardList-D83aNfTC.js";import{F}from"./FileCard-CwB2UNMr.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-C87-O7lX.js";import{B as f}from"./Button-BuQAY4x2.js";import{A as b}from"./ActionGroup-CHTlX6Wu.js";import{_ as j,$ as B}from"./IconWarning-CGnZi41_.js";import{H as g}from"./Heading-BRGw-waJ.js";import{F as h}from"./FileField-DfihVAIz.js";import{T as O}from"./Text-D0LSWbFT.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CALkr1El.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CqzOrDl2.js";import"./index-5IWmXg28.js";import"./index-DhRV0L_D.js";import"./useFieldComponent-VycST_vs.js";import"./utils-BmvAbY6y.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Bx_sJIF1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DZFs0BX7.js";import"./useFocus-1VXHi-Mn.js";import"./useCollator-BmSf6CmH.js";import"./context-Br1o_Gsv.js";import"./useLocalizedStringFormatter-DMEYEfT-.js";import"./useFocusRing-B8DUU0zm.js";import"./Button-JOtZZNa7.js";import"./ProgressBar-WDsF0b96.js";import"./Label-CKCJMrcf.js";import"./Hidden-CaQYrS-R.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BGUPUAq5.js";import"./useFocusable-CoJ_GBdx.js";import"./VisuallyHidden-CJz5Ez-_.js";import"./ContextMenuSection-CO4DhhVm.js";import"./Action-B2seXdE0.js";import"./context-DDKbSZpU.js";import"./useStatic-DNvp4EKT.js";import"./browser-CR-oUB3P.js";import"./getActionGroupSlot-OnPTJ5ul.js";import"./dynamic-5Me7t2_P.js";import"./Dialog-BXIha8hU.js";import"./RSPContexts-EgPs8m3a.js";import"./OverlayArrow-Crdn15eZ.js";import"./useControlledState-CTBxctZq.js";import"./Collection-DZXXzgBW.js";import"./CollectionBuilder-BRXbMuqB.js";import"./SelectionIndicator-DQakRxMT.js";import"./Separator-DJ26kkKw.js";import"./SelectionManager-Bp4YXEPt.js";import"./useEvent-B4avBJ26.js";import"./FocusScope-BUuvBHJx.js";import"./ColumnLayout-JERwgJG9.js";import"./Avatar-cuKuP-sl.js";import"./AlertIcon-Cy_cDr6j.js";import"./Image-DhFZDwb9.js";import"./Link-DJr8Hvm4.js";import"./OptionsButton-DzPmZ9ri.js";import"./ButtonView-B8lRgn0T.js";import"./ContextMenuTriggerView-DDHtY5nu.js";import"./ContextMenuTrigger-CsGUrRwl.js";import"./OverlayTrigger-DqBZOFmj.js";import"./OverlayContextProvider-DZ1Omm1z.js";import"./FieldError-CHo9rwLP.js";import"./FieldError-BYM5jSaa.js";import"./AlertText-BpI_nGHQ.js";import"./useRef-DY72xU_4.js";import"./LoadingSpinner-4_K5lSJw.js";import"./remote-Bx5-otuG.js";import"./Heading-uHa7bb0l.js";import"./useFormValidation-DUx2L2VN.js";import"./Input-CWeCnXba.js";import"./EmulatedBoldText-B1_mjQ_l.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
