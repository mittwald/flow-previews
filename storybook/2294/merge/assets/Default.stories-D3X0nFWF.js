import{r as x,j as e}from"./iframe-CvJspzLv.js";import{F as t}from"./FileDropZone-BHXxMQxu.js";import{S as d}from"./Section-DrXtyJcE.js";import{F as u}from"./FileCardList-GnEFTkqu.js";import{F}from"./FileCard-DXZ4JyHb.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DDmmyPg8.js";import{B as f}from"./Button-DPWvzJXv.js";import{A as b}from"./ActionGroup-DsNPEUIc.js";import{_ as j,$ as B}from"./IconWarning-BERZaob7.js";import{H as g}from"./Heading-Ex-YKDBU.js";import{F as h}from"./FileField-BumTGLI7.js";import{T as O}from"./Text-QUQe3Lsq.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BMN_OyR0.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BI37IbCZ.js";import"./index-FNnc6AUb.js";import"./index-Df150GVy.js";import"./useFieldComponent-43Bszd6x.js";import"./utils-BL4G7l_u.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DHLl2ajF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfL38sGR.js";import"./useFocus-DbFf9Ktc.js";import"./useCollator-BPc2CQoh.js";import"./context-CQ77Qkvg.js";import"./useLocalizedStringFormatter-Clgc-XTf.js";import"./useFocusRing-L-b3Tn9K.js";import"./Button-DpFh2ewL.js";import"./ProgressBar-CM3jPvpy.js";import"./Label-BqmnG06H.js";import"./Hidden-Cc0JeUT8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DO5nHrqL.js";import"./useFocusable-C5zGZvV-.js";import"./VisuallyHidden-ksBWJgrQ.js";import"./ContextMenuSection-B9VXHai8.js";import"./Action-CzgX1dLD.js";import"./context-KW9IbNQ1.js";import"./useStatic-B0ICfBk6.js";import"./browser-CBUTrPGa.js";import"./getActionGroupSlot-DdQssjpq.js";import"./dynamic-7-1UCAS5.js";import"./Dialog-CNj22GpD.js";import"./RSPContexts-fR-6qryz.js";import"./OverlayArrow-kevdZy7A.js";import"./useControlledState-DsktkqC9.js";import"./Collection-D9feXgUJ.js";import"./CollectionBuilder-1cHqqndV.js";import"./SelectionIndicator-DujQOkfZ.js";import"./Separator-CwyBo3YQ.js";import"./SelectionManager-S2-bZThJ.js";import"./useEvent-B-O27hsR.js";import"./FocusScope-BaZaaiNh.js";import"./ColumnLayout-BchoGxp0.js";import"./Avatar-wY1Z7LlE.js";import"./AlertIcon-C15Ckg1B.js";import"./Image-CJzKlKdw.js";import"./Link-BOnIa3MC.js";import"./OptionsButton-BCv4mElK.js";import"./ButtonView-ClFFq5XN.js";import"./ContextMenuTriggerView-PAJtC_cd.js";import"./ContextMenuTrigger-BbJJXI9D.js";import"./OverlayTrigger-08hVypIJ.js";import"./OverlayContextProvider-BI-9o36W.js";import"./FieldError-DQmh2MYp.js";import"./FieldError-DlX11YEn.js";import"./AlertText-DgMbxot0.js";import"./useRef-eAOD_JRC.js";import"./useOverlayController-BI0XpmO3.js";import"./LoadingSpinner-xAaU4yCn.js";import"./remote-BqqZGE8h.js";import"./Heading-BRBpvBMz.js";import"./useFormValidation-CwZe5cTQ.js";import"./Input-qFXimabr.js";import"./EmulatedBoldText-DGmAuSbD.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,Xe as default};
