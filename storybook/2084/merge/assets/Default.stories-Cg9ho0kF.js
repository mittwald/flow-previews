import{r as x,j as e}from"./iframe-BdeexEb8.js";import{F as t}from"./FileDropZone-HMrRXqRC.js";import{S as u}from"./Section-B4hiFsDg.js";import{F}from"./FileCardList-JVystdOi.js";import{F as f}from"./FileCard-CaD54kMc.js";import{u as S,F as C,t as D}from"./Form-Ds4QSWVi.js";import{B as s}from"./Button-8DtAEqjD.js";import{A as y}from"./ActionGroup-CZfxN9v5.js";import{_ as j,$ as O}from"./IconWarning-CtsbdbUA.js";import{H as g}from"./Heading-CaWv9CDj.js";import{F as h}from"./FileField-CVVM-6uK.js";import{T as b}from"./Text-G8amV_-h.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-C-_B-Mia.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9dNYku3.js";import"./index-D-gFJj9O.js";import"./index-DrTgVdtP.js";import"./useFieldComponent-DdJyO0fC.js";import"./utils-BE4tcj7E.js";import"./Text-C7oFtPVp.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-jctua2LA.js";import"./ClearPropsContext-C8aFsCZA.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-_lz56ByA.js";import"./useFocus-DOIh0B1Z.js";import"./useCollator-DH6O6X4x.js";import"./context-D6yVr_mO.js";import"./useLocalizedStringFormatter-BAYb9Fap.js";import"./Button-m7osfjr7.js";import"./ProgressBar-BoDGUte7.js";import"./Label-0GucTR7O.js";import"./Hidden-CQyoiK8N.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BF3KJpSX.js";import"./useFocusRing-rBTaS5qD.js";import"./useFocusable-BJo0-JcZ.js";import"./VisuallyHidden-CRJbmMUG.js";import"./ContextMenuSection-BRjflZKk.js";import"./Action-RARPQ8v8.js";import"./context-BWmIRqAJ.js";import"./useStatic-DlCxFiK7.js";import"./browser-CYlNocNO.js";import"./getActionGroupSlot-mkbPIyZa.js";import"./dynamic-B5dXdtKW.js";import"./Dialog-D2DNdmLu.js";import"./RSPContexts-BujZOMoI.js";import"./OverlayArrow-CMWDkVkR.js";import"./useControlledState-lwDPvcY9.js";import"./Collection-7t0tVRTb.js";import"./CollectionBuilder-DzfVoPOa.js";import"./SelectionIndicator-0lfezkYj.js";import"./Separator-DDMmaPKr.js";import"./SelectionManager-Y2mFlrlN.js";import"./useEvent-DWTDuj97.js";import"./FocusScope-BYBHw4Pm.js";import"./ColumnLayout-s4aseBrg.js";import"./Avatar-CJ960qVj.js";import"./AlertIcon-DxqwozHJ.js";import"./Image-DNNtnp6D.js";import"./Link-CVxW33L_.js";import"./ButtonView-DWNbka-E.js";import"./ContextMenuTriggerView-Xx2paf19.js";import"./ContextMenuTrigger-DLHwKsmz.js";import"./OverlayTrigger-BSJgZejS.js";import"./ControlledNotification-C6PtDURt.js";import"./OverlayContextProvider-DyWsSbcY.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-f45dISc_.js";import"./Heading-CXwQx98o.js";import"./useFormValidation-wqB4x0T2.js";import"./Input-CoS8ao7l.js";import"./useMakeFocusable-CQGMBShp.js";import"./EmulatedBoldText-ZcdE1rVE.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
