import{r as x,j as e}from"./iframe-CnrbHwTe.js";import{F as t}from"./FileDropZone-U57Biwcj.js";import{S as d}from"./Section-BExQZgWB.js";import{F as u}from"./FileCardList-CErA6YEP.js";import{F}from"./FileCard-DYAxazoo.js";import{u as S,F as C,t as D}from"./Form-yKsg4Afk.js";import{S as y}from"./ResetButton-BWets3uT.js";import{B as f}from"./Button-DoJYz9nf.js";import{A as b}from"./ActionGroup-CHRx5nJi.js";import{Z as j,_ as B}from"./IconWarning-DgLNPfaL.js";import{H as g}from"./Heading-4nCu50xU.js";import{F as h}from"./FileField-DaNgG14W.js";import{T as O}from"./Text-eTz9hgbN.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DerkHlcV.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aR3apKPq.js";import"./index-Cg95cP60.js";import"./index-CUZGjyPT.js";import"./useFieldComponent-DrIyQ-Oz.js";import"./utils-r4y_43wh.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-nMrjd92_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dn56kI8F.js";import"./useFocus-CW3ebFsS.js";import"./useCollator-aieXWn7K.js";import"./context-B7MLny9I.js";import"./useLocalizedStringFormatter-CyCvm50e.js";import"./Button-CDvqfYYW.js";import"./ProgressBar-VG7_xCrZ.js";import"./Label-BQw60TG0.js";import"./Hidden-kZWiQEu_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoQNUybf.js";import"./useFocusRing-CRQTw2D7.js";import"./useFocusable-DrwEzR41.js";import"./VisuallyHidden-DYF5WgrZ.js";import"./ContextMenuSection-JoSq6Aah.js";import"./Action-Csai7jBT.js";import"./context-BuaNu4Hn.js";import"./useStatic-D1Vs9fsX.js";import"./browser-TZQakXKU.js";import"./getActionGroupSlot-C6hg9FJg.js";import"./dynamic-D-DaJWqs.js";import"./Dialog-CsKt9ioo.js";import"./RSPContexts-CU1Sv8RV.js";import"./OverlayArrow-CJqqEQZv.js";import"./useControlledState-CcfbhOaY.js";import"./Collection-Djv1d9Z_.js";import"./CollectionBuilder-BkOVJAZN.js";import"./SelectionIndicator-CTBQmwrG.js";import"./Separator-D2suaWuM.js";import"./SelectionManager-dddCba2a.js";import"./useEvent-Diyat4Qa.js";import"./FocusScope-CJbwLE5j.js";import"./ColumnLayout-CMlmamiQ.js";import"./Avatar-Ce-jaDT0.js";import"./AlertIcon-kkftxocV.js";import"./Image-CzwlVzga.js";import"./Link-DNUeLtma.js";import"./OptionsButton-TBYSmT5F.js";import"./ButtonView-DIEJPe8r.js";import"./ContextMenuTriggerView-Dz8ekTlW.js";import"./ContextMenuTrigger-CDkRQJws.js";import"./OverlayTrigger-QfzKXgOG.js";import"./OverlayContextProvider-DyMWHvaJ.js";import"./FieldError-BJU6XwC7.js";import"./FieldError-DsDXGDD4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-BKtURQNG.js";import"./LoadingSpinner-BfrmZLfO.js";import"./remote-CmycR9zC.js";import"./Heading-7TXA4VJI.js";import"./useFormValidation-C9gosTEe.js";import"./Input-U8_Yl4jm.js";import"./EmulatedBoldText-B4gWqNJ7.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
