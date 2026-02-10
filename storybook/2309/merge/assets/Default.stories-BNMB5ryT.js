import{r as x,j as e}from"./iframe-CnD5cTjE.js";import{F as t}from"./FileDropZone-Dj-4ntY_.js";import{S as d}from"./Section-Bk8f4Pnr.js";import{F as u}from"./FileCardList-TxlKg4l_.js";import{F}from"./FileCard-BxC5-U7T.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DR2uAWq7.js";import{B as f}from"./Button-CxHLWJvy.js";import{A as b}from"./ActionGroup-D3QUuhXI.js";import{_ as j,$ as B}from"./IconWarning-K8fT7_bQ.js";import{H as g}from"./Heading-B3KiVvm7.js";import{F as h}from"./FileField-BwJOYhH0.js";import{T as O}from"./Text-Bqsx-GQX.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-C0386pzj.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C-pFyTgk.js";import"./index-CFIaHCYn.js";import"./index-DPBNH-jw.js";import"./useFieldComponent-D1uM9aif.js";import"./utils-BYl_EWK3.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Bz5hHxMj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BEvZESWX.js";import"./useFocus-BZF2vaC7.js";import"./useCollator-DdAAf0Bd.js";import"./context-uSq5N7U7.js";import"./useLocalizedStringFormatter-C15HmRxb.js";import"./useFocusRing-a13YBJgG.js";import"./Button-Bk4aZnIo.js";import"./ProgressBar-CtJNhI05.js";import"./Label-DvWkQRgL.js";import"./Hidden-BqUWSjHb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DgDG_638.js";import"./useFocusable-DUJmCsdq.js";import"./VisuallyHidden-D2K60xua.js";import"./ContextMenuSection-BY-0yvA1.js";import"./Action-DYL0-s8C.js";import"./context-CRbXRYLt.js";import"./useStatic-CR0dXYGS.js";import"./browser-DH0afsgD.js";import"./getActionGroupSlot-C2C9nZKR.js";import"./dynamic-DmWwIwdY.js";import"./Dialog-BpNR7iRs.js";import"./RSPContexts-AjJzFs_t.js";import"./OverlayArrow-W0sikX14.js";import"./useControlledState-C-7lgoXp.js";import"./Collection-CYQy112U.js";import"./CollectionBuilder-B9nA0J3q.js";import"./SelectionIndicator-T6p8Rrnn.js";import"./Separator-BpNHyh0k.js";import"./SelectionManager-C_EOkHGn.js";import"./useEvent-DjhegQC5.js";import"./FocusScope-q9RNJ1I3.js";import"./ColumnLayout-BJ1mdLlj.js";import"./Avatar-DiuA1sOs.js";import"./AlertIcon-DEFExzLk.js";import"./Image-CSnWJcnV.js";import"./Link-DgqwpCbC.js";import"./OptionsButton-Bs3HCcdl.js";import"./ButtonView-Dbti4Nd6.js";import"./ContextMenuTriggerView-D2cVMErx.js";import"./ContextMenuTrigger-DuZKXeMF.js";import"./OverlayTrigger-CQqJu3uy.js";import"./OverlayContextProvider-CWXPLkIC.js";import"./FieldError-D8deZX0S.js";import"./FieldError-CkgMvR4A.js";import"./AlertText-9D-RaPUt.js";import"./useRef-DVW0JPmG.js";import"./LoadingSpinner-CMDtKY2z.js";import"./remote-CRObq-IF.js";import"./Heading-BVBd8bpC.js";import"./useFormValidation-0N4lg69R.js";import"./Input-D96XXoVS.js";import"./EmulatedBoldText-czAo41Rl.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
