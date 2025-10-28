import{r as x,j as e}from"./iframe-BYlM8TfH.js";import{F as t}from"./FileDropZone-CIw6znga.js";import{S as u}from"./Section-D4heV61s.js";import{F}from"./FileCardList-CNjgb-M3.js";import{F as f}from"./FileCard-C3L1tLOp.js";import{u as S,F as C,t as D}from"./Form-CVBWUNQi.js";import{B as s}from"./Button-DrjwoUCb.js";import{A as y}from"./ActionGroup-D2zlXLO9.js";import{_ as j,$ as O}from"./IconWarning-WQ4wo7kP.js";import{H as g}from"./Heading-CurQq7EL.js";import{F as h}from"./FileField-BSwPn_A4.js";import{T as b}from"./Text-ZBSxG77c.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-CHDALcZC.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CJQUzeBk.js";import"./index-Z9ghxMfX.js";import"./index-BpRuSIpR.js";import"./useFieldComponent-BoJq1S9B.js";import"./utils-BDqIfUE7.js";import"./Text-Dc8La0ek.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-DxnuAJ4K.js";import"./ClearPropsContext-BpBo361K.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-IFSjtkUu.js";import"./useFocus-B9vfYs8K.js";import"./useCollator-BcPpPzi9.js";import"./context-BxRqKeiD.js";import"./useLocalizedStringFormatter-DNjkRVig.js";import"./Button-BmIa1mS-.js";import"./ProgressBar--do5EHZn.js";import"./Label-COiWxsLa.js";import"./Hidden-CSqzjE-Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-kOJVCjd_.js";import"./useFocusRing-BaqqhOKG.js";import"./useFocusable-SxOERRg1.js";import"./VisuallyHidden-D5yM91eE.js";import"./ContextMenuSection-yyXtjvTi.js";import"./Action-i4rkq48V.js";import"./context-BILGmIqx.js";import"./useStatic-6sdTMqO6.js";import"./browser-D2sPcOVM.js";import"./getActionGroupSlot-nR5vf13o.js";import"./dynamic-BhGDraHV.js";import"./Dialog-BSP5EDkY.js";import"./RSPContexts-BeeOgZFj.js";import"./OverlayArrow-Dcf6I1B8.js";import"./useControlledState-Bs4hSWnz.js";import"./Collection-C6Fc_Z_x.js";import"./CollectionBuilder-CXjS8Zh0.js";import"./SelectionIndicator-BFnOXggJ.js";import"./Separator-DKnWRjMi.js";import"./SelectionManager-Bmb-1_mZ.js";import"./useEvent-DHF942Kq.js";import"./FocusScope-ChlmKh1V.js";import"./ColumnLayout-BRKYNcJT.js";import"./Avatar-D8T6dtm_.js";import"./AlertIcon-BJeOeOP1.js";import"./Image-l93wWZlj.js";import"./Link-DYPsb7nu.js";import"./ContextMenuTriggerView-vqWVhdHF.js";import"./ContextMenuTrigger-6C6Z2AYE.js";import"./OverlayTrigger-B-qRJ8Xp.js";import"./ControlledNotification-Dl6zeRdw.js";import"./OverlayContextProvider-Dz9UAd6s.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CqJPIXvI.js";import"./Heading-BrhKeiNO.js";import"./useFormValidation-wBqhYJyj.js";import"./Input-Dg1gUccH.js";import"./useMakeFocusable-BmfPg07G.js";import"./EmulatedBoldText-bM5QDT6k.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
