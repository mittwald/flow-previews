import{r as x,j as e}from"./iframe-DzPnzOIh.js";import{F as t}from"./FileDropZone-9HP3kVQ5.js";import{S as d}from"./Section-DjVn5x2V.js";import{F as u}from"./FileCardList-DD_4tWyz.js";import{F}from"./FileCard-Cxpdy1nD.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DLA2D0J0.js";import{B as f}from"./Button-B0xxYjKh.js";import{A as b}from"./ActionGroup-BW-DIp4M.js";import{_ as j,$ as B}from"./IconWarning-Dnclh3SV.js";import{H as g}from"./Heading-DPjRgByp.js";import{F as h}from"./FileField-CAE7ljWl.js";import{T as O}from"./Text-CgXXsRbz.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DayDGd8r.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DtgvO3oD.js";import"./index-DmmYMLHe.js";import"./index-nNa6hI3H.js";import"./useFieldComponent-DttoHSbm.js";import"./utils-DdPADezN.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CKGruhzq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DAdMc5BC.js";import"./useFocus-lCD3lNhC.js";import"./useCollator-BX-7yLTW.js";import"./context-D5QDMciq.js";import"./useLocalizedStringFormatter-BZ1QP-fV.js";import"./useFocusRing-h77ik7V4.js";import"./Button-CCOKLUK2.js";import"./ProgressBar-BDc0eUXF.js";import"./Label-BA4yL5_I.js";import"./Hidden-D_8gXEej.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-COgw0Owx.js";import"./useFocusable-DMy60j_I.js";import"./VisuallyHidden-C2tKF7nl.js";import"./ContextMenuSection-DfF2Gqpp.js";import"./Action-D4qqw_zO.js";import"./context-CvuQDK5p.js";import"./useStatic-B5sjyhg8.js";import"./browser-DO1on-Lg.js";import"./getActionGroupSlot-BseyWuGA.js";import"./dynamic-CR1FGrpS.js";import"./Dialog-BkygjXx5.js";import"./RSPContexts-0XiJN6Nh.js";import"./OverlayArrow--imbHB5-.js";import"./useControlledState-C5NVaprX.js";import"./Collection-CALheanL.js";import"./CollectionBuilder-Bu5TLfEc.js";import"./SelectionIndicator-CD0MdUzw.js";import"./Separator-Bg_k8EGm.js";import"./SelectionManager-CchLMxAP.js";import"./useEvent-C5n8Jw-a.js";import"./FocusScope-Cit_E5zj.js";import"./ColumnLayout-BytaPVB3.js";import"./Avatar-DxrbUwf8.js";import"./AlertIcon-BAMux0CS.js";import"./Image-e5kdeDYd.js";import"./Link-BR25-tT4.js";import"./OptionsButton-C0IwOFWn.js";import"./ButtonView-DAqv122X.js";import"./ContextMenuTriggerView-DJfg2mzo.js";import"./ContextMenuTrigger-DvdHPi80.js";import"./OverlayTrigger-DzqcF9yd.js";import"./OverlayContextProvider-DbqQHSiT.js";import"./FieldError-CliUFFQL.js";import"./FieldError-BLx5YP6h.js";import"./AlertText-DawifhT6.js";import"./useRef-DTc68hRI.js";import"./LoadingSpinner-3EdJH7-V.js";import"./remote-Df33k4AK.js";import"./Heading-Dqw827jw.js";import"./useFormValidation-DrH-jwNK.js";import"./Input-CP7U2NGu.js";import"./EmulatedBoldText-Dcz9uFEQ.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
