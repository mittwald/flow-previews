import{r as x,j as e}from"./iframe-DCel2PhG.js";import{F as t}from"./FileDropZone-Cwsdortq.js";import{S as d}from"./Section-BGkAXCBO.js";import{F as u}from"./FileCardList-CCApNqFx.js";import{F}from"./FileCard-bnOvAkiu.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-Bo6dOnRX.js";import{B as f}from"./Button-CjhaH8vt.js";import{A as b}from"./ActionGroup-BLs0BWGb.js";import{a0 as j,a1 as B}from"./IconWarning-CNMqfC0c.js";import{H as g}from"./Heading-DPAdBgTw.js";import{F as h}from"./FileField-BX6cvxVC.js";import{T as O}from"./Text-CfcNN3C1.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-e5yJ2bgL.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DYf6GQMN.js";import"./index-BfJDZYeV.js";import"./index-DcvCSlSd.js";import"./useFieldComponent-CWMmv0d5.js";import"./utils-jFfJrK0I.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-H5k4jR7L.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-V0mABmwM.js";import"./useFocus-BSXyJlKK.js";import"./useCollator-qJfX3fiN.js";import"./context-ChvTJ1gc.js";import"./useLocalizedStringFormatter-CEBQqt_q.js";import"./useFocusRing-D6latAqm.js";import"./Button-Dbr1_oBf.js";import"./ProgressBar-COcMCNPc.js";import"./Label-CSZS-HnU.js";import"./Hidden-DZpZ88Vz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-l6QeQysM.js";import"./useFocusable-CF_X-2Wu.js";import"./VisuallyHidden-giqV-lwH.js";import"./ContextMenuSection-DVvHUSFD.js";import"./ActionBatch-BNnkW8Wa.js";import"./useOverlayController-BAgKybrq.js";import"./useStatic-Gj7JsFzP.js";import"./browser-ChoxEgkm.js";import"./getActionGroupSlot-BM5R5I3-.js";import"./dynamic-CoRoJ1gY.js";import"./Dialog-BnrJ3EGg.js";import"./RSPContexts-BWRH8UQz.js";import"./OverlayArrow-BUpR8Z4Q.js";import"./useControlledState-uXSCouXp.js";import"./Collection-Mm3AtcTx.js";import"./CollectionBuilder-CIgtGDmA.js";import"./SelectionIndicator-DYHfPyq2.js";import"./Separator-BB0Sm4E2.js";import"./SelectionManager-CIJEtr4-.js";import"./useEvent-CN9vdLun.js";import"./FocusScope-BrLtMtFa.js";import"./ColumnLayout-Cd8kxTQb.js";import"./Avatar-BAfAUkRe.js";import"./AlertIcon-C6GnHejw.js";import"./Image-D0BCigkQ.js";import"./Link-Dn3de3aq.js";import"./OptionsButton-CVz5m3yc.js";import"./ButtonView--o7XYYP5.js";import"./ContextMenuTriggerView-eetf8rv4.js";import"./ContextMenuTrigger-DigcAnLh.js";import"./OverlayTrigger-BYr1biz5.js";import"./OverlayContextProvider-BfHmVY35.js";import"./FieldError-DI0hFked.js";import"./FieldError-QICB5hyW.js";import"./AlertText-CGICoaW7.js";import"./ActionGroupView-4YYVwVM7.js";import"./Content-B1u41BWn.js";import"./Modal-V5k8QPuM.js";import"./Overlay-LFamQv73.js";import"./LoadingSpinner-Bj8rfmA6.js";import"./Flex-tHl6Xyli.js";import"./useRef-C3FTlCPC.js";import"./remote-MfAOzJwE.js";import"./Heading-Cs7GlIOt.js";import"./useFormValidation-CVEw0jVb.js";import"./Input-D8WhG3Nd.js";import"./EmulatedBoldText-6uMsyrU3.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
