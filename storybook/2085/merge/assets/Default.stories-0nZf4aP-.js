import{r as x,j as e}from"./iframe-CCgutS5t.js";import{F as t}from"./FileDropZone-6roeBzxb.js";import{S as u}from"./Section-xdCGG6Rl.js";import{F}from"./FileCardList-B3emEdX4.js";import{F as f}from"./FileCard-Bl5azmBm.js";import{u as S,F as C,t as D}from"./Form-DxlmCUiG.js";import{B as s}from"./Button-CB_SQlxf.js";import{A as y}from"./ActionGroup-CI83x2Hx.js";import{_ as j,$ as O}from"./IconWarning-BIjPfZ_7.js";import{H as g}from"./Heading-C0cuqA4W.js";import{F as h}from"./FileField-B4OH4rJv.js";import{T as b}from"./Text-C-3mWHEt.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-B_QRTd04.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C78Jb5L6.js";import"./index-h_ilVZmN.js";import"./index-Bp2d_id4.js";import"./useFieldComponent-B36i382k.js";import"./utils-N6USVjPQ.js";import"./Text-DSftVrdI.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-DK8cwA_F.js";import"./ClearPropsContext-CZ_w58Ag.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-C2LzTSEt.js";import"./useFocus-qWLnYmls.js";import"./useCollator-Cks0Ndw_.js";import"./context-3TjxBBiZ.js";import"./useLocalizedStringFormatter-BjHcrzpH.js";import"./Button-DxAPDldv.js";import"./ProgressBar-Pqb-SOG6.js";import"./Label-B2_Qc07C.js";import"./Hidden-BtuehT5t.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C_WBS1_H.js";import"./useFocusRing-DetKeZ0w.js";import"./useFocusable-C1wexJX5.js";import"./VisuallyHidden-upAad0zi.js";import"./ContextMenuSection-plAoKvaj.js";import"./Action-BELw5_ca.js";import"./context-_S3VUPKr.js";import"./useStatic-MsaSckAb.js";import"./browser-Cx9TdPw4.js";import"./getActionGroupSlot-DHM8pkUy.js";import"./dynamic-CnlMxg6J.js";import"./Dialog-BFfcJUiM.js";import"./RSPContexts-D8ixlOLf.js";import"./OverlayArrow-D_Aj7zmL.js";import"./useControlledState-C-pLTCEb.js";import"./Collection-DHibalOY.js";import"./CollectionBuilder-BmvqiF6i.js";import"./SelectionIndicator-BSAaVuJo.js";import"./Separator-CdSBB1Je.js";import"./SelectionManager-CyYCav6z.js";import"./useEvent-rTmmTfmz.js";import"./FocusScope-1cqgO8JZ.js";import"./ColumnLayout-CfFODd82.js";import"./Avatar-KnrZfZtG.js";import"./AlertIcon-CYfE7Ku-.js";import"./Image-CBBJ3z9K.js";import"./Link-DtylWjAm.js";import"./ButtonView-CFTZzpfx.js";import"./ContextMenuTriggerView-CUkPVqD5.js";import"./ContextMenuTrigger-BvhIW5tE.js";import"./OverlayTrigger-2i5uyzps.js";import"./ControlledNotification-C8Yc-FwQ.js";import"./OverlayContextProvider-zefoD_gg.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CbAXLLLD.js";import"./Heading--qvH0N7j.js";import"./useFormValidation-DXrwvkVu.js";import"./Input-zWUUR8ko.js";import"./useMakeFocusable-Cb2U_kBy.js";import"./EmulatedBoldText-BfzgnQm3.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
