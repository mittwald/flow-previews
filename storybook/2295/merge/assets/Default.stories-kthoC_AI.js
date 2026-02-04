import{r as x,j as e}from"./iframe-CBdrHiu-.js";import{F as t}from"./FileDropZone-C8CXiPio.js";import{S as d}from"./Section-DO3UFtDL.js";import{F as u}from"./FileCardList-B5HYni3X.js";import{F}from"./FileCard-CXlvWgHY.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-BCVKdw_Y.js";import{B as f}from"./Button-CvrzgGgN.js";import{A as b}from"./ActionGroup-C-nbwf6U.js";import{_ as j,$ as B}from"./IconWarning-B89fpQti.js";import{H as g}from"./Heading-B0bk6t16.js";import{F as h}from"./FileField-CcFC9P0c.js";import{T as O}from"./Text-vxOKNzxr.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BgSe-CO7.js";import"./clsx-B-dksMZM.js";import"./flowComponent-SJnnBAhb.js";import"./index-Dx3T5N_5.js";import"./index-DbZpFDe3.js";import"./useFieldComponent-CkNNSE-6.js";import"./utils-DRjcKwJb.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DKFtzua6.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJjwA-2F.js";import"./useFocus-BOx7sVQU.js";import"./useCollator-DAsNNJgX.js";import"./context-p6nKBAyO.js";import"./useLocalizedStringFormatter-BCYddyWG.js";import"./useFocusRing-CFSl2bW1.js";import"./Button-DGOdyj-q.js";import"./ProgressBar-DeVRnANw.js";import"./Label-Be9V6H5h.js";import"./Hidden-72868EZD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNG00Dag.js";import"./useFocusable-DA2EU5Pw.js";import"./VisuallyHidden-DNW2U5ZQ.js";import"./ContextMenuSection-DKWGDRRC.js";import"./Action-CcGGE6B7.js";import"./context-RwMuvTef.js";import"./useStatic-Bx0cFIOO.js";import"./browser-DtunHlVO.js";import"./getActionGroupSlot-DGjTpfXT.js";import"./dynamic-Cbo9i_64.js";import"./Dialog-C9BJ8Byi.js";import"./RSPContexts-B6JknHHE.js";import"./OverlayArrow-C9WHoJ1C.js";import"./useControlledState-H50OY390.js";import"./Collection-vGtYQGRh.js";import"./CollectionBuilder-CquvtT24.js";import"./SelectionIndicator-CeaIsc91.js";import"./Separator-CTAmEu9t.js";import"./SelectionManager-B98Z3aaT.js";import"./useEvent-CaW49TJY.js";import"./FocusScope-CTh9v3q6.js";import"./ColumnLayout-CgvghhSi.js";import"./Avatar-BKBgfR9n.js";import"./AlertIcon-DkcKW-cj.js";import"./Image-BuPOPW8V.js";import"./Link-Dv8vhFUP.js";import"./OptionsButton-ClSg588O.js";import"./ButtonView-gSA2DBTv.js";import"./ContextMenuTriggerView-P9UBVY5v.js";import"./ContextMenuTrigger-BpyTR-jF.js";import"./OverlayTrigger-CiCUVE66.js";import"./OverlayContextProvider-DtYcAWZK.js";import"./FieldError-OVkxnP3X.js";import"./FieldError-hDU9I6ir.js";import"./AlertText-Be6TgPnW.js";import"./useRef-CXZeuied.js";import"./LoadingSpinner-B7nOYR-m.js";import"./remote-SRpD7Y2I.js";import"./Heading-BzPKH39A.js";import"./useFormValidation-BxN5Q1uu.js";import"./Input-3Q4wlXjr.js";import"./EmulatedBoldText-xhBM3BWX.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
