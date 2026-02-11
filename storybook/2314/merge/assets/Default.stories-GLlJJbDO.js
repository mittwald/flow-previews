import{r as x,j as e}from"./iframe-DM7qDJWN.js";import{F as t}from"./FileDropZone-CzUjzJ4N.js";import{S as d}from"./Section-BzWNMXV2.js";import{F as u}from"./FileCardList-CQD6WztL.js";import{F}from"./FileCard-DNxR8aa8.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-p-4WPZNu.js";import{B as f}from"./Button-Dc6TEAeS.js";import{A as b}from"./ActionGroup-CbGFfnRR.js";import{a0 as j,a1 as B}from"./IconWarning-Ck-PBl-h.js";import{H as g}from"./Heading-C1qjB_Q-.js";import{F as h}from"./FileField-BCFODtut.js";import{T as O}from"./Text-DFbMev3D.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CudhIFzs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-3uYRoF3i.js";import"./index-BG9aTyNN.js";import"./index-Zik4_3jH.js";import"./useFieldComponent-DWfL7CEw.js";import"./utils-DCh3KcEQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CqLEY5m0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d_6Xjsvm.js";import"./useFocus-V4g9fXxO.js";import"./useCollator-BSJypaQj.js";import"./context-Bdkwq7qF.js";import"./useLocalizedStringFormatter-aG_pngn7.js";import"./useFocusRing-DKHg-pYg.js";import"./Button-Cle7Q0jH.js";import"./ProgressBar-XdjtveJ3.js";import"./Label-Bc5uyP9T.js";import"./Hidden-DVoaY9_q.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DcE1V40F.js";import"./useFocusable-jnMsXBmm.js";import"./VisuallyHidden-Djcrj7d_.js";import"./ContextMenuSection-gnaL4P7y.js";import"./Action-SkKzNvM1.js";import"./context-CLl5kDsk.js";import"./useStatic-Dwurevey.js";import"./browser-GV4Evxlh.js";import"./getActionGroupSlot-ChSghX-d.js";import"./dynamic-Bo6M-mWb.js";import"./Dialog-CtXs4QP0.js";import"./RSPContexts-DtHHiQqe.js";import"./OverlayArrow--T1zjZBI.js";import"./useControlledState-CGBhCpgz.js";import"./Collection-B3op_wkO.js";import"./CollectionBuilder-CUYn1Myb.js";import"./SelectionIndicator-DhuP4hb9.js";import"./Separator-duSL34B8.js";import"./SelectionManager-B15RSxH7.js";import"./useEvent-h15Gin5m.js";import"./FocusScope-DcmRl2I0.js";import"./ColumnLayout-BMA8F_Mm.js";import"./Avatar-BKiqeDCN.js";import"./AlertIcon-B0QkWIB4.js";import"./Image-CXaV9mZ1.js";import"./Link-BAoZ4o9S.js";import"./OptionsButton-C_j6I00e.js";import"./ButtonView-7nAQL8-V.js";import"./ContextMenuTriggerView-DUwaVfiQ.js";import"./ContextMenuTrigger-c1EyBAYu.js";import"./OverlayTrigger-DjZ_tJ2j.js";import"./OverlayContextProvider-CHeMGzMk.js";import"./FieldError-yptSAddh.js";import"./FieldError-CDF7zCEW.js";import"./AlertText-DuUjVJKd.js";import"./useRef-DOoXSahq.js";import"./LoadingSpinner-BB2_lVH8.js";import"./remote-CkIQ4maL.js";import"./Heading-DA3hIkQr.js";import"./useFormValidation-BjtvC6sH.js";import"./Input-SfHIWI_P.js";import"./EmulatedBoldText-DY5AV1Fo.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const $e=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,$e as __namedExportsOrder,Xe as default};
