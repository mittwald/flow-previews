import{r as x,j as e}from"./iframe-CV15FJMl.js";import{F as t}from"./FileDropZone-5Z8o5Epm.js";import{S as d}from"./Section-DxMSYwau.js";import{F as u}from"./FileCardList-BkwIGhbt.js";import{F}from"./FileCard-CxS2pwxJ.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-Dy0XVagH.js";import{B as f}from"./Button-CPmcSz1K.js";import{A as b}from"./ActionGroup-Bfa2abXX.js";import{_ as j,$ as B}from"./IconWarning-CS7d0V5Y.js";import{H as g}from"./Heading-DwSdW-0K.js";import{F as h}from"./FileField-St0-_nH3.js";import{T as O}from"./Text-DO3jYkuR.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BkVnxR_S.js";import"./clsx-B-dksMZM.js";import"./flowComponent-zkKbLiwJ.js";import"./index-BdI4bZr-.js";import"./index-DgyS9CYh.js";import"./useFieldComponent-4syZJMEs.js";import"./utils-B45PgFGd.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Bk0CAvR5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DgTpLYXb.js";import"./useFocus-C3kMSW21.js";import"./useCollator-C223TjTn.js";import"./context-Is67_JkX.js";import"./useLocalizedStringFormatter-DhOUTddD.js";import"./useFocusRing-CoS5ESqQ.js";import"./Button-Deu1Fo5o.js";import"./ProgressBar-DYhZqT6M.js";import"./Label-DnBvsshm.js";import"./Hidden-DbKTPC62.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C9ebI84m.js";import"./useFocusable-DenRoGzb.js";import"./VisuallyHidden-DJ3SqDe0.js";import"./ContextMenuSection-BP5kvD_3.js";import"./Action-k7eAd4lv.js";import"./context-z7OXrsOp.js";import"./useStatic-CaY36sW2.js";import"./browser-8BNXX35r.js";import"./getActionGroupSlot-CEtNZ_Ue.js";import"./dynamic-83TxHgtq.js";import"./Dialog-CvkIF4vR.js";import"./RSPContexts-09abhkzW.js";import"./OverlayArrow-BtUNb3SD.js";import"./useControlledState-Br5i43rk.js";import"./Collection-BDyrlbfU.js";import"./CollectionBuilder-DPEpUwFF.js";import"./SelectionIndicator-C649Jmr0.js";import"./Separator-BUXgDBus.js";import"./SelectionManager-DjElDtGz.js";import"./useEvent-CGsPBawQ.js";import"./FocusScope-Da56m84L.js";import"./ColumnLayout-DeqwkqYu.js";import"./Avatar-C0dgPJof.js";import"./AlertIcon-BZ2qa2OA.js";import"./Image-DS1XUl_o.js";import"./Link-CQJ7mppL.js";import"./OptionsButton-DgAOdaMJ.js";import"./ButtonView-CuCKGckF.js";import"./ContextMenuTriggerView-npRpVr63.js";import"./ContextMenuTrigger-Dsj0ZJ0S.js";import"./OverlayTrigger--ZhGhozj.js";import"./OverlayContextProvider-B4MrJ_Vf.js";import"./FieldError-e14SOUTJ.js";import"./FieldError-CDBleeuN.js";import"./AlertText-Dryg6b6V.js";import"./useRef-Q0HZ1Gfv.js";import"./LoadingSpinner-C2UghIT7.js";import"./remote-BYNvJzFU.js";import"./Heading-BvCB2pW7.js";import"./useFormValidation-rdndu8q5.js";import"./Input-Wuyb26cC.js";import"./EmulatedBoldText-CKJb5Byw.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
