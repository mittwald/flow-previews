import{r as x,j as e}from"./iframe-Ca6Y6Qbd.js";import{F as t}from"./FileDropZone-DjDiPuTR.js";import{S as d}from"./Section-DDmZgP0d.js";import{F as u}from"./FileCardList-BI9qj-li.js";import{F}from"./FileCard-Q-DBktVL.js";import{u as S,F as C,t as D}from"./Form-BzkK98Z8.js";import{S as y}from"./ResetButton-C16fmyxf.js";import{B as f}from"./Button-Cmpvhu71.js";import{A as b}from"./ActionGroup-DteDdq98.js";import{$ as j,a0 as B}from"./IconWarning-DE1Emhrq.js";import{H as g}from"./Heading-CiyOEL28.js";import{F as h}from"./FileField-yfoTQc9e.js";import{T as O}from"./Text-BEUemzSa.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BzECiVhy.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./index-dqS1_mS3.js";import"./useFieldComponent-Drxg4ucu.js";import"./utils-CgPiupY7.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-XI5tIYL5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DSKkVaVQ.js";import"./useFocus-YlOppDM-.js";import"./useCollator-BHsGRBEt.js";import"./context-BSVjMcq9.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./Button-BwNAbkAI.js";import"./ProgressBar-CbWR67C5.js";import"./Label-oMJsQOKa.js";import"./Hidden-B5n9q6va.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-7njUzVdk.js";import"./useFocusRing-DB26dgIQ.js";import"./useFocusable-DsA9Nlin.js";import"./VisuallyHidden-DA0DNDbd.js";import"./ContextMenuSection-Dxs1x_rP.js";import"./Action-BHbL3yoQ.js";import"./context-BIxaIE9W.js";import"./useStatic-CLFM6Rz8.js";import"./browser-CbMIui3y.js";import"./getActionGroupSlot-DZQMPipw.js";import"./dynamic-CaH7ifbO.js";import"./Dialog-B1e_uHMT.js";import"./RSPContexts-CuMU_eQB.js";import"./OverlayArrow-BonLfIYe.js";import"./useControlledState-CsFJYMR6.js";import"./Collection-C7E6DkxT.js";import"./CollectionBuilder-CQicpO9a.js";import"./SelectionIndicator-Cqdhise0.js";import"./Separator-BkDE-Ve8.js";import"./SelectionManager-08rbWnYj.js";import"./useEvent-CONOGrCj.js";import"./FocusScope-g3u6sbgU.js";import"./ColumnLayout-D5Q_My3I.js";import"./Avatar-CWMmikpe.js";import"./AlertIcon-CE0IjQiw.js";import"./Image-DMRKQczp.js";import"./Link-C_0R8BFo.js";import"./OptionsButton-DRoySDM-.js";import"./ButtonView-BtrfQFVi.js";import"./ContextMenuTriggerView-BJEcMhFo.js";import"./ContextMenuTrigger-B4AkgpiJ.js";import"./OverlayTrigger-ONQN5d76.js";import"./OverlayContextProvider-Bf0QUNhT.js";import"./FieldError-Btuc_7Om.js";import"./FieldError-DTh-affr.js";import"./AlertText-PH5mi2hk.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Cv9XEJ0w.js";import"./LoadingSpinner-iW8gx6_Q.js";import"./remote-B__m5VQE.js";import"./Heading-CtfKFM99.js";import"./useFormValidation-CFRjiWi1.js";import"./Input-zU6xkduX.js";import"./EmulatedBoldText-B497YwdM.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const rr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,rr as __namedExportsOrder,er as default};
