import{r as x,j as e}from"./iframe-BUwXHbLV.js";import{F as t}from"./FileDropZone-CJv22vJe.js";import{S as d}from"./Section-DvLGNmum.js";import{F as u}from"./FileCardList-B05YjDI5.js";import{F}from"./FileCard-B12RbenC.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DD2EU88j.js";import{B as f}from"./Button-C47X2BbH.js";import{A as b}from"./ActionGroup-B01MVWJe.js";import{_ as j,$ as B}from"./IconWarning-DpZLdH-i.js";import{H as g}from"./Heading-DVvJZI_m.js";import{F as h}from"./FileField-Cob0F5DZ.js";import{T as O}from"./Text-DQHJUI0D.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CA4NMjyZ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BccdMpKE.js";import"./index-hu2bK8ld.js";import"./index-B1fishDV.js";import"./useFieldComponent-NdCAuKiZ.js";import"./utils-JDwP1GoF.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-foJVwDWR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcLR3Pis.js";import"./useFocus-B6YbSr7t.js";import"./useCollator-DJB12Mbt.js";import"./context-DM2fd8XH.js";import"./useLocalizedStringFormatter-CRJgNNZn.js";import"./useFocusRing-DaHiZmYv.js";import"./Button-BNkVsOQ0.js";import"./ProgressBar-BJDPOd_q.js";import"./Label-DCpzAobK.js";import"./Hidden-C60b8p3I.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BcgTA6VC.js";import"./useFocusable-Dbq66Fw_.js";import"./VisuallyHidden-Cs-P9S0b.js";import"./ContextMenuSection-C1ahiJOH.js";import"./Action-Wt0sSzk-.js";import"./context-BtwGTzrQ.js";import"./useStatic-BtWsPYN-.js";import"./browser-DgSxuaKY.js";import"./getActionGroupSlot-BbKcnB6j.js";import"./dynamic-jPtu3qAR.js";import"./Dialog-2n0yrNbm.js";import"./RSPContexts-CfLLQl4G.js";import"./OverlayArrow-CQQ2-IZh.js";import"./useControlledState-DYrRTv7P.js";import"./Collection-X5iiX-bG.js";import"./CollectionBuilder-BS4P0rnp.js";import"./SelectionIndicator-CP3BVA3N.js";import"./Separator-BSF4rUHh.js";import"./SelectionManager-DzUqgA1m.js";import"./useEvent-BDYLqd-z.js";import"./FocusScope-l2gJymgt.js";import"./ColumnLayout-XNzxGCrF.js";import"./Avatar-C5gzKssE.js";import"./AlertIcon-Dx8NA4Z8.js";import"./Image-Do1uNYpL.js";import"./Link-CLMsl6et.js";import"./OptionsButton-BlxhXENO.js";import"./ButtonView-DumfpSry.js";import"./ContextMenuTriggerView-BUDuwKHV.js";import"./ContextMenuTrigger-DuzOI1d0.js";import"./OverlayTrigger-FaFIiRYX.js";import"./OverlayContextProvider-CQG9zk-L.js";import"./FieldError-BFYCcyQ4.js";import"./FieldError-DDJD7LnR.js";import"./AlertText-BJWw_2bk.js";import"./useRef-BrSocotX.js";import"./LoadingSpinner-KdI7mP_U.js";import"./remote-DgECwzV4.js";import"./Heading-Bx_NYZMu.js";import"./useFormValidation-GMJFkgaI.js";import"./Input-NxVda43d.js";import"./EmulatedBoldText-gevFAAZ0.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
