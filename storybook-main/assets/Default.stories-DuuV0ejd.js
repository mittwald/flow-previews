import{r as x,j as e}from"./iframe-Bz3NPU1o.js";import{F as t}from"./FileDropZone-eZLn-dvb.js";import{S as d}from"./Section-BwE4QROn.js";import{F as u}from"./FileCardList-CV-azMUi.js";import{F}from"./FileCard-KOOlkbQG.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-C6u6UNu5.js";import{B as f}from"./Button-DmREI3b0.js";import{A as b}from"./ActionGroup-rIPGzSy7.js";import{a0 as j,a1 as B}from"./IconWarning-Cqqx4tMU.js";import{H as g}from"./Heading-0jGXR_g9.js";import{F as h}from"./FileField-BY4c_NMQ.js";import{T as O}from"./Text-ByJancxD.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B8m4dsMV.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CjhBP1Cm.js";import"./index-4Y7PW7MZ.js";import"./index-FgoIhbmz.js";import"./useFieldComponent-kW7iCi5m.js";import"./utils-DuUJF5nC.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-ClD1r8b1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C5lED9IT.js";import"./useFocus-DMRfkGw8.js";import"./useCollator-DX6ShHbl.js";import"./context-pgk2HPHJ.js";import"./useLocalizedStringFormatter-DZI71IG_.js";import"./useFocusRing-BLuP37PT.js";import"./Button-BMxU8wWi.js";import"./ProgressBar-Dn9Yutju.js";import"./Label-QJAE-TAD.js";import"./Hidden-DRSFEG3Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BmxXpscc.js";import"./useFocusable-DZRtaeEQ.js";import"./VisuallyHidden-DkJ66lZ_.js";import"./ContextMenuSection-Dt7nyU_Z.js";import"./ActionBatch-DB6HM48H.js";import"./useOverlayController-BTsOQKJk.js";import"./useStatic-hPs_nES1.js";import"./browser-BaNqvzaa.js";import"./getActionGroupSlot--8oaPbEm.js";import"./dynamic-CvekFh9y.js";import"./Dialog-DrbZDX-D.js";import"./RSPContexts-BgkP6bIF.js";import"./OverlayArrow-Co0kQ8lC.js";import"./useControlledState-e4YYsLZE.js";import"./Collection-CtHLpY8r.js";import"./CollectionBuilder-CSsN_D43.js";import"./SelectionIndicator-DWP2zhMc.js";import"./Separator-4S0Txhk8.js";import"./SelectionManager-DtXYtKU8.js";import"./useEvent-DV66xCP2.js";import"./FocusScope-Bk96q2B-.js";import"./ColumnLayout-DYbcJceg.js";import"./Avatar-_l_eDd3h.js";import"./AlertIcon-Csw_f8vF.js";import"./Image-Nw0C6lpy.js";import"./Link-CXuJvK2b.js";import"./OptionsButton-Dbr1eHSX.js";import"./ButtonView-B1T1gpd9.js";import"./ContextMenuTriggerView-7mdMj1ur.js";import"./ContextMenuTrigger-BPBNMJHB.js";import"./OverlayTrigger-DNmemUFh.js";import"./OverlayContextProvider-ve6dYabZ.js";import"./FieldError-fbbECv40.js";import"./FieldError-BDAUq_c5.js";import"./AlertText-yCfidByd.js";import"./ActionGroupView-CscudnEo.js";import"./Content-CjcJxOBw.js";import"./Modal-BVW6OhrB.js";import"./Overlay-oLKw2upU.js";import"./LoadingSpinner-C6XGp2xl.js";import"./Flex-BZRK7zof.js";import"./useRef-DVap1TEX.js";import"./remote-D_M7roLC.js";import"./Heading-BkR9lkEu.js";import"./useFormValidation-itgD5oYf.js";import"./Input-DW4bMgBP.js";import"./EmulatedBoldText-DUXivwa1.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
