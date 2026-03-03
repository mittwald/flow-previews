import{r as x,j as e}from"./iframe-DhXHhh1w.js";import{F as t}from"./FileDropZone-BoW7SLOq.js";import{S as d}from"./Section-BFL21Kdp.js";import{F as u}from"./FileCardList-B6J-_ehu.js";import{F}from"./FileCard-D7iVgB47.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-CWjyF2h3.js";import{B as f}from"./Button-DK8hND6e.js";import{A as b}from"./ActionGroup-DZhEliTp.js";import{a0 as j,a1 as B}from"./IconWarning-Cq0bATFd.js";import{H as g}from"./Heading-W2uFhXaO.js";import{F as h}from"./FileField-cDLQOjI1.js";import{T as O}from"./Text-VjJbV_1P.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BGtoVkW3.js";import"./clsx-B-dksMZM.js";import"./flowComponent-KRA3PXE8.js";import"./index-DnLu1uFy.js";import"./index-B6ijkuYI.js";import"./useFieldComponent-CXGCADuw.js";import"./utils--GApMcJ9.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BhHd18lu.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B7imI5Js.js";import"./useFocus-CCcmXvuL.js";import"./useCollator-CdSsm3Cn.js";import"./context-C0JBe_V4.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./useFocusRing-C0Ptw1X0.js";import"./Button-B72XzUR4.js";import"./ProgressBar-F8Z66Kjl.js";import"./Label-B5DsgLYE.js";import"./Hidden-0q4YVuok.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DuFsm5YE.js";import"./useFocusable-DaonITQz.js";import"./VisuallyHidden-B52Q2-iE.js";import"./ContextMenuSection-EAnCbrTf.js";import"./ActionBatch-CBOUg1fp.js";import"./useOverlayController-BReF9zcC.js";import"./useStatic-Cuuv0LOE.js";import"./browser-DC-Dnn5c.js";import"./getActionGroupSlot-BjPF_vWV.js";import"./dynamic-DY1DU2Hc.js";import"./Dialog-CefhgDMJ.js";import"./RSPContexts-BISy0hbD.js";import"./OverlayArrow-D0YkTT7M.js";import"./useControlledState-BAaAMcGs.js";import"./Collection-CjYz6Uc3.js";import"./CollectionBuilder-BLnwNesF.js";import"./SelectionIndicator-p-DrZhoI.js";import"./Separator-YN4gslNC.js";import"./SelectionManager-DsW2owD3.js";import"./useEvent-Ceq3h06g.js";import"./FocusScope-DTOX4bjf.js";import"./ColumnLayout-YyPtkLyV.js";import"./Avatar-D9qDBeXw.js";import"./AlertIcon-CowGyQyl.js";import"./Image-yNdxd9G4.js";import"./Link-Bm5obdSl.js";import"./OptionsButton-GEJElp2v.js";import"./ButtonView-CA8U0oul.js";import"./ContextMenuTriggerView-C0wByplY.js";import"./ContextMenuTrigger-BMULQtXK.js";import"./OverlayTrigger-Dx4VUFaj.js";import"./OverlayContextProvider-CWHHdI4p.js";import"./FieldError-NwdeaE8Z.js";import"./FieldError-DoyTFare.js";import"./AlertText-CTc_944s.js";import"./ActionGroupView-CC4wWS41.js";import"./Content-BG0ad5lU.js";import"./Modal-DAWN7CdU.js";import"./Overlay-CIG5Bv_4.js";import"./LoadingSpinner-BQo0GQZs.js";import"./Flex-DlE5ZV-j.js";import"./useRef-uAnVuJo1.js";import"./remote-3lBAaKOS.js";import"./Heading-CrXwA3a4.js";import"./useFormValidation-Bi2teCon.js";import"./Input-CeMR8XUm.js";import"./EmulatedBoldText-DK8yRX5h.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
