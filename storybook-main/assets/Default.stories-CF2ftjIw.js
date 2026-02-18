import{r as x,j as e}from"./iframe-tDsAeGKm.js";import{F as t}from"./FileDropZone-B10D0mMh.js";import{S as d}from"./Section-CKCf0K1W.js";import{F as u}from"./FileCardList-6LqSAxfE.js";import{F}from"./FileCard-CnopsmjR.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BVW5MRs9.js";import{B as f}from"./Button-jRtlVENb.js";import{A as b}from"./ActionGroup-BZIwzAiu.js";import{a0 as j,a1 as B}from"./IconWarning-DKvGabEh.js";import{H as g}from"./Heading-B57Tu_dh.js";import{F as h}from"./FileField-Dq6-rUQJ.js";import{T as O}from"./Text-D5NMs6cZ.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B7cMYHOL.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BfLM0c2n.js";import"./index-bKgupbLj.js";import"./index-B9moyWSs.js";import"./useFieldComponent-CEijF59K.js";import"./utils-DhX5ITDy.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B29urVwj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CvQ5_So8.js";import"./useFocus-BJatrcMj.js";import"./useCollator-CjoGoE8F.js";import"./context-B8HhXai5.js";import"./useLocalizedStringFormatter-Ble8CxqU.js";import"./useFocusRing-O-BrOcuV.js";import"./Button-DSgsBLqC.js";import"./ProgressBar-cVZAXAEA.js";import"./Label-CtdEoG3D.js";import"./Hidden-S5GeLDqu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DsHBwD0o.js";import"./useFocusable-Dhs_EAwV.js";import"./VisuallyHidden-BeYtKSfy.js";import"./ContextMenuSection-CLgK4tmh.js";import"./ActionBatch-Dcv9mfk6.js";import"./useOverlayController-B76T1UqF.js";import"./useStatic-BTV6Su7X.js";import"./browser-CATpO6nC.js";import"./getActionGroupSlot-BJCt2Jtz.js";import"./dynamic-CfRao1zO.js";import"./Dialog-BchFx3yj.js";import"./RSPContexts-1mHRta2c.js";import"./OverlayArrow-dAx307tU.js";import"./useControlledState-DJUoNOP3.js";import"./Collection-DX3v8hJf.js";import"./CollectionBuilder-DauPrh3N.js";import"./SelectionIndicator-DonQVrOH.js";import"./Separator-C9Rj8Lhn.js";import"./SelectionManager-CvMALRTQ.js";import"./useEvent-DNMlHs6e.js";import"./FocusScope-BLSD8gJZ.js";import"./ColumnLayout-BNh45C-7.js";import"./Avatar-CxHJ-qVU.js";import"./AlertIcon-BN6nSUvJ.js";import"./Image-Cvm7NahU.js";import"./Link-D7bQunCc.js";import"./OptionsButton-CM_pWJWa.js";import"./ButtonView-1ef2c52x.js";import"./ContextMenuTriggerView-B1s342gl.js";import"./ContextMenuTrigger-Dj0AVIR3.js";import"./OverlayTrigger-e7KCcZDP.js";import"./OverlayContextProvider-BmYwjEIL.js";import"./FieldError-CA1wZrT9.js";import"./FieldError-Duxf8Exl.js";import"./AlertText-CRAaEbc-.js";import"./ActionGroupView-DajatjdJ.js";import"./Content-H2lGrUDb.js";import"./Modal-Dcg0QJqD.js";import"./Overlay-61YYNO6R.js";import"./LoadingSpinner-cVZxppZv.js";import"./Flex-DaNMii4C.js";import"./useRef-DQUohT-d.js";import"./remote-Dyxf39S8.js";import"./Heading-DyHmtFkg.js";import"./useFormValidation-CHyrMCXS.js";import"./Input-BzgBakC2.js";import"./EmulatedBoldText-B_3WWRWD.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
