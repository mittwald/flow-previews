import{r as x,j as e}from"./iframe-GtWYOLNc.js";import{F as t}from"./FileDropZone-qealWdlg.js";import{S as u}from"./Section-PDyMtoME.js";import{F}from"./FileCardList-BkDF-Yls.js";import{F as f}from"./FileCard-hAfuscs7.js";import{u as S,F as C,t as D}from"./Form-CJDsExi9.js";import{B as s}from"./Button-DAMH2RQe.js";import{A as y}from"./ActionGroup-CUP01UMb.js";import{_ as j,$ as O}from"./IconWarning-D3qu7dXh.js";import{H as g}from"./Heading-D17rAsKb.js";import{F as h}from"./FileField-BZJ3Ipwv.js";import{T as b}from"./Text-Bh_VtmGj.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-KA4o0oCo.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BhbvfIbA.js";import"./index-DroEwyNc.js";import"./index-Do7K3gX4.js";import"./useFieldComponent-CFSDwBJf.js";import"./utils-DD5Sc9KY.js";import"./Text-CjcFKgn5.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-BE-u8eGk.js";import"./ClearPropsContext-DAA0VQnf.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-DTE1dj4A.js";import"./useFocus-DFp-sRZK.js";import"./useCollator-CosXWie8.js";import"./context-D40YBGtd.js";import"./useLocalizedStringFormatter-DE7ldODK.js";import"./Button-DAFfpCNE.js";import"./ProgressBar-CdTHAJ2Y.js";import"./Label-CQFAMqNH.js";import"./Hidden-BU9Lcw6n.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B3Z_0YqL.js";import"./useFocusRing-DOaM9YXN.js";import"./useFocusable-jI0DLtpW.js";import"./VisuallyHidden-CMXGnTyG.js";import"./ContextMenuSection-BqJoKa5n.js";import"./Action-DgPdZSGQ.js";import"./context-B79p2l6c.js";import"./useStatic-BUau0uD4.js";import"./browser-Dfdmz1Vs.js";import"./getActionGroupSlot-DVt_1gUF.js";import"./dynamic-D_-LYO4W.js";import"./Dialog-E17SkaPF.js";import"./RSPContexts-prl6X50T.js";import"./OverlayArrow-DIM14olf.js";import"./useControlledState-DlI3gMwx.js";import"./Collection-Ce3y52jr.js";import"./CollectionBuilder-Dp0_4f88.js";import"./SelectionIndicator-PIsyHCAq.js";import"./Separator-BLTRkzm5.js";import"./SelectionManager-BxJ0cmnl.js";import"./useEvent-9aIM_XKO.js";import"./FocusScope-CmjH0BfW.js";import"./ColumnLayout-CH6EXEG9.js";import"./Avatar-C6um1Hl_.js";import"./AlertIcon-Bj1ASDHT.js";import"./Image-Ci0E6097.js";import"./Link-CfCeYdU8.js";import"./ButtonView-DrjhB8gO.js";import"./ContextMenuTriggerView-BmNJgZEn.js";import"./ContextMenuTrigger-DS8mWOZA.js";import"./OverlayTrigger-C3VeFBdc.js";import"./ControlledNotification-YDt7-Pno.js";import"./OverlayContextProvider-C3tl0ORG.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BgxzSWV-.js";import"./Heading-D0R31Oqj.js";import"./useFormValidation-BcoBpGbt.js";import"./Input-BPP_cYwL.js";import"./useMakeFocusable-6t1tYcWi.js";import"./EmulatedBoldText-CB08elGP.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
