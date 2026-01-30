import{r as x,j as e}from"./iframe-DnKh_q8B.js";import{F as t}from"./FileDropZone-CudbkLP5.js";import{S as d}from"./Section-BVZq-_Eq.js";import{F as u}from"./FileCardList-CVGG2vve.js";import{F}from"./FileCard-Bk6DE0iF.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-BYXMJKDA.js";import{B as f}from"./Button-B6Zpw5yd.js";import{A as b}from"./ActionGroup-Cv1d3BuW.js";import{_ as j,$ as B}from"./IconWarning-C-jbuAIx.js";import{H as g}from"./Heading-CB01boQE.js";import{F as h}from"./FileField--UX2JRZK.js";import{T as O}from"./Text-Drd9GdLo.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bjy_L53b.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NsMUrrXI.js";import"./index-DEpWzVfg.js";import"./index-B5PweBHP.js";import"./useFieldComponent-ClvUady3.js";import"./utils-BZc8lNcd.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DobXAK13.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-jAJMJRpZ.js";import"./useFocus-BUIY7lOc.js";import"./useCollator-DnWbXdif.js";import"./context-CXoyow8k.js";import"./useLocalizedStringFormatter-ClvwREm6.js";import"./useFocusRing-CZAaR2ds.js";import"./Button-CX9zCyN4.js";import"./ProgressBar-q35gM_9d.js";import"./Label-psEyVv54.js";import"./Hidden-qw9_5FuA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CFc3C1mq.js";import"./useFocusable-z3KWK7qq.js";import"./VisuallyHidden-DfZCukwF.js";import"./ContextMenuSection-CPEZCChP.js";import"./Action-B5Uq12lQ.js";import"./context-CSnl0IXM.js";import"./useStatic-DlxvzgyM.js";import"./browser-BUa4T4SN.js";import"./getActionGroupSlot-Dlj3DC4Q.js";import"./dynamic-BE_n_a5m.js";import"./Dialog-CHY6jywx.js";import"./RSPContexts-wuQtf2CN.js";import"./OverlayArrow-2vICfEm4.js";import"./useControlledState-Dx9tzWN_.js";import"./Collection-BYEhy5Cw.js";import"./CollectionBuilder-3EWlmXpu.js";import"./SelectionIndicator-B7pzLsJc.js";import"./Separator-C3ZuVTcl.js";import"./SelectionManager-Bvw1Vhun.js";import"./useEvent-DMn0oMqB.js";import"./FocusScope-Ddw08eyC.js";import"./ColumnLayout-Cr3ahIZD.js";import"./Avatar-BEha-8nw.js";import"./AlertIcon-3p_Y3XqS.js";import"./Image-1Rmm2y25.js";import"./Link-Df-ZNa8o.js";import"./OptionsButton-Clv6HvbQ.js";import"./ButtonView-DGagadkt.js";import"./ContextMenuTriggerView-DbTIl7wr.js";import"./ContextMenuTrigger-Bq0JAmU0.js";import"./OverlayTrigger-jX4CJ8wH.js";import"./OverlayContextProvider-DSTl-nzt.js";import"./FieldError-CQ45DqtA.js";import"./FieldError-ChpD0sIl.js";import"./AlertText-DFrKGWVH.js";import"./useRef-TNLbSJcR.js";import"./LoadingSpinner-B--bUkFv.js";import"./remote-k0GnUd79.js";import"./Heading-BwaoBSXr.js";import"./useFormValidation-C9ppbdC-.js";import"./Input-mgtZ57Ff.js";import"./EmulatedBoldText-C0uufS8q.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
