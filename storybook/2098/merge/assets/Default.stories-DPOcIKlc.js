import{r as x,j as e}from"./iframe-M-00ByYr.js";import{F as t}from"./FileDropZone-BlFbwNht.js";import{S as u}from"./Section-DxqiSUr-.js";import{F}from"./FileCardList-HyaXY_QE.js";import{F as f}from"./FileCard-DkXth3G-.js";import{u as S,F as C,t as D}from"./Form-CCjzRfYD.js";import{B as s}from"./Button-Dye8aZJo.js";import{A as y}from"./ActionGroup-DCfNsL7U.js";import{_ as j,$ as O}from"./IconWarning-BKX4jvdo.js";import{H as g}from"./Heading-Cc9x6iz-.js";import{F as h}from"./FileField-1vX0u928.js";import{T as b}from"./Text-Bt5YA1vc.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-Cn1uzkgF.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BSbRS4dW.js";import"./index-XTNpKnK3.js";import"./index-DpE53F72.js";import"./useFieldComponent-CRgHa0Rs.js";import"./utils-CzeOq9Jp.js";import"./Text-C64HrAr0.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-DvyDrnsG.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-BqXrfkQs.js";import"./useFocus-kTKNfC8f.js";import"./useCollator-8xZktG2C.js";import"./context-rdrdo5ux.js";import"./useLocalizedStringFormatter-DHEdj6fH.js";import"./Button-Bzi92yWx.js";import"./ProgressBar-DVuQf1Yw.js";import"./Label-2I2h4DuH.js";import"./Hidden-CcUUSr-p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ZYaxT06h.js";import"./useFocusRing-BCZu56W_.js";import"./useFocusable-Ck0hOZfS.js";import"./VisuallyHidden-DGulPIzL.js";import"./ContextMenuSection-BEo2Wf2L.js";import"./Action-C6LgLFNM.js";import"./context-DSFC_3Cq.js";import"./useStatic-B0qB2N-4.js";import"./browser-DuQo-X1z.js";import"./getActionGroupSlot-DWIZQCXc.js";import"./dynamic-COr1kucW.js";import"./Dialog-DLSokgtV.js";import"./RSPContexts-D5gF1Lon.js";import"./OverlayArrow-Z3BG-VYq.js";import"./useControlledState-Cpz-s1gG.js";import"./Collection-BNL1juni.js";import"./CollectionBuilder-D-4RKEgn.js";import"./SelectionIndicator-BTUqWRGF.js";import"./Separator-Dlgp_N-b.js";import"./SelectionManager-Dz9bx785.js";import"./useEvent-T5REI5lf.js";import"./FocusScope-CO5umuzV.js";import"./ColumnLayout-D7zEngzc.js";import"./Avatar-C-6JTwVm.js";import"./AlertIcon-CtiPArRr.js";import"./Image-DMpZfFd1.js";import"./Link-GEBmnRKv.js";import"./ContextMenuTriggerView-Fk8E5Cnl.js";import"./ContextMenuTrigger-CFONNZ5u.js";import"./OverlayTrigger-Dw9dIaI5.js";import"./ControlledNotification-DKMKb3og.js";import"./OverlayContextProvider-B3ZYORx9.js";import"./FieldError-ZwGpCE6l.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-C8vasHPM.js";import"./Heading-CaFtCNvg.js";import"./useFormValidation-Co3-d3Vs.js";import"./Input-CPscax3_.js";import"./useMakeFocusable-CCRsS2FG.js";import"./EmulatedBoldText-DX0gJz_T.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ze=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,ze as __namedExportsOrder,$e as default};
