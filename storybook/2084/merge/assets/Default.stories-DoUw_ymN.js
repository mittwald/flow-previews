import{r as x,j as e}from"./iframe-Bju5tM19.js";import{F as t}from"./FileDropZone-_Qc-7At3.js";import{S as u}from"./Section-DCM0ThIe.js";import{F}from"./FileCardList-DHfam4AN.js";import{F as f}from"./FileCard-CBkEDco2.js";import{u as S,F as C,t as D}from"./Form-CXrEODVR.js";import{B as s}from"./Button-D01G-2Tc.js";import{A as y}from"./ActionGroup-CNNzqPnn.js";import{_ as j,$ as O}from"./IconWarning-EseH3oBy.js";import{H as g}from"./Heading-BvGOAURU.js";import{F as h}from"./FileField-oIxtc_08.js";import{T as b}from"./Text-Ctwf1INQ.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-c49o7N7Q.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DMQ923EN.js";import"./index-i9t6c7d2.js";import"./index-v7jxlCcy.js";import"./useFieldComponent-SvMgnfSt.js";import"./utils-CHaPYnRu.js";import"./Text-X0smrbMM.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-CV_3FZ2O.js";import"./ClearPropsContext-nVrOsFhk.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-DxvdaVYE.js";import"./useFocus-dnpNkUeL.js";import"./useCollator-CPsP6oXT.js";import"./context-BCZfssJF.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./Button-Dw5yhw5U.js";import"./ProgressBar-Bd2c_dqs.js";import"./Label-C0LDEu9P.js";import"./Hidden-B3KlSyIs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DNUm2pP-.js";import"./useFocusRing-DQLm4Rj_.js";import"./useFocusable-S-EY4exA.js";import"./VisuallyHidden-muGwU-w1.js";import"./ContextMenuSection-D4oqZzWw.js";import"./Action-DGXz3yuy.js";import"./context-DoYyNt70.js";import"./useStatic-Dhn4vIeo.js";import"./browser-5LoYBPX6.js";import"./getActionGroupSlot-BFuFDZVU.js";import"./dynamic-KamcoLNc.js";import"./Dialog-BwAIy3cs.js";import"./RSPContexts-CuZAMKB6.js";import"./OverlayArrow-CkGx3q47.js";import"./useControlledState-BiPn7KDX.js";import"./Collection-CzETdAyj.js";import"./CollectionBuilder-C9Q_qjob.js";import"./SelectionIndicator-BWLjQ8Kg.js";import"./Separator-F1osFFu3.js";import"./SelectionManager-BWZTcbb9.js";import"./useEvent-B0Z9j7Hl.js";import"./FocusScope-BvTlMNTx.js";import"./ColumnLayout-DcMxlhdY.js";import"./Avatar-Clx5aRoZ.js";import"./AlertIcon-ngpN1HUE.js";import"./Image-B1XuUmgH.js";import"./Link-CwjgeQHd.js";import"./ButtonView-BVhlDYAR.js";import"./ContextMenuTriggerView-DbqI140t.js";import"./ContextMenuTrigger-BxPvVFyX.js";import"./OverlayTrigger-845SWzvQ.js";import"./ControlledNotification-CjAjijX6.js";import"./OverlayContextProvider-BSx-P-EI.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-OWtFn1Ti.js";import"./Heading-BJwwNeLw.js";import"./useFormValidation-Cc6rboKS.js";import"./Input-Cn0b8SON.js";import"./useMakeFocusable-BXmgj38r.js";import"./EmulatedBoldText-DNLnXqQA.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const Je=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Je as __namedExportsOrder,ze as default};
