import{r as h,j as e}from"./iframe-DJR6bG_N.js";import{F as t}from"./FileDropZone-C7o9euFG.js";import{S as c}from"./Section-B2ra81ru.js";import{F as d}from"./FileCardList-CjC0CTOE.js";import{F as u}from"./FileCard-gHV1YB6I.js";import{u as O,F as T,t as _}from"./Form-BcMLIMK7.js";import{B as s}from"./Button-BcHxSHOm.js";import{A as b}from"./ActionGroup-BilcVCQi.js";import{Y as x,Z as k}from"./IconWarning-TBIhG4gU.js";import{H as F}from"./Heading-BkblK8MO.js";import{F as f}from"./FileField-DoSLh_Ml.js";import{T as U}from"./Text-CxYW3yHX.js";import"./IllustratedMessage-PSTpepBg.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BL9cdq29.js";import"./mergeRefs-Hpx63azc.js";import"./index-C22qm2g8.js";import"./utils-DRP6LXVD.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BqN-_O45.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DhfP4m7A.js";import"./useFocus-BcpzqQNe.js";import"./useCollator-CQl6CZ5b.js";import"./context-DgBdWYay.js";import"./useLocalizedStringFormatter-DqMJYvZV.js";import"./Button-C47dkwdH.js";import"./ProgressBar-B9rixrKR.js";import"./Label-sZvCZMuk.js";import"./Hidden-BHSOAXCo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CnK8r-az.js";import"./useFocusRing-CfOOnzfL.js";import"./useFocusable-BEA6ccjd.js";import"./VisuallyHidden-Capsm3hZ.js";import"./ContextMenuSection-B_2BSOIl.js";import"./Action-DUsQfaLv.js";import"./context-tBw8Lqjb.js";import"./useStatic-CIf-dq2E.js";import"./browser-B_AF4VAW.js";import"./getActionGroupSlot-CudkwBxb.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-B2WyxH4W.js";import"./RSPContexts-DiuHitS7.js";import"./OverlayArrow-Dty9UTNu.js";import"./useControlledState-CYpB0MkV.js";import"./Collection-Bn5uLIdX.js";import"./CollectionBuilder-Kei65M9q.js";import"./Separator-43LoEa0E.js";import"./Group-CE0iASVZ.js";import"./SearchField-CR0mUJzd.js";import"./FieldError-Cb0gzYqD.js";import"./Form-BkELhqZm.js";import"./useTextField-CXWfURMQ.js";import"./useFormReset-DJO_Tyel.js";import"./TextField-CZNDqobz.js";import"./useEvent-SSoNVoxa.js";import"./SelectionManager-DV-un0OH.js";import"./FocusScope-nXLL4j6O.js";import"./ColumnLayout-CpRanAN_.js";import"./Avatar-DHsXM_Ag.js";import"./AlertIcon-CbbRGoI3.js";import"./Image-AeQECv6Q.js";import"./Link-DGN9pghd.js";import"./OptionsButton-DldWuYdb.js";import"./ButtonView-DrQygQjN.js";import"./ContextMenuContent-tLDaGYGA.js";import"./Popover-DLNqBLfZ.js";import"./DialogTriggerView-DkospgpI.js";import"./Switch-CySWzKzs.js";import"./Label-43dyzUgI.js";import"./useToggleState-B0lcAoQO.js";import"./FieldError-eo7y5sCy.js";import"./LoadingSpinner-BP8XYJb-.js";import"./Heading-BJxiU0-g.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DOjRM7Xy.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
