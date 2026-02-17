import{r as x,j as e}from"./iframe-jaoHr1AV.js";import{F as t}from"./FileDropZone-BeP__w3F.js";import{S as d}from"./Section-D5fyzIcp.js";import{F as u}from"./FileCardList-B6vvs7xK.js";import{F}from"./FileCard-Kmr_FTzw.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DAPnXDhG.js";import{B as f}from"./Button-DsyAZnvz.js";import{A as b}from"./ActionGroup-BMyaLsc1.js";import{a0 as j,a1 as B}from"./IconWarning-DyIA4Uof.js";import{H as g}from"./Heading-BypYnbKw.js";import{F as h}from"./FileField-CIoRe-82.js";import{T as O}from"./Text-Cs3EhNpG.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-C2n5r84k.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CrOXvTqi.js";import"./index-CR-YYcjl.js";import"./index-BFCtAlHX.js";import"./useFieldComponent-D-iYVveA.js";import"./utils-CQw042JL.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DE-JOko8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XwramTU6.js";import"./useFocus-GROhvItb.js";import"./useCollator-CCOGTm23.js";import"./context-CW7DVTht.js";import"./useLocalizedStringFormatter-B75Dx9X1.js";import"./useFocusRing-CA-tHgfv.js";import"./Button-DhLHtzSw.js";import"./ProgressBar-D0TA1OyO.js";import"./Label-Dvi8c8U4.js";import"./Hidden-BCtaYkH3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-WaW8O6jQ.js";import"./useFocusable-Bnc4O4Ay.js";import"./VisuallyHidden-DhIewZ3I.js";import"./ContextMenuSection-BSB41Hhw.js";import"./ActionBatch-Dl5Fmp7w.js";import"./useOverlayController-CzdtfrCF.js";import"./useStatic-CMyMNZPZ.js";import"./browser-gEDtR-OK.js";import"./getActionGroupSlot-BJH_a8Yi.js";import"./dynamic-BZQIArQs.js";import"./Dialog-COvhX_CP.js";import"./RSPContexts-CUx4KoIL.js";import"./OverlayArrow-BDs_imrE.js";import"./useControlledState-H8E68uKK.js";import"./Collection-CODju4Fo.js";import"./CollectionBuilder-CN9LptsI.js";import"./SelectionIndicator-CFfIf2cB.js";import"./Separator-BHV6nvqI.js";import"./SelectionManager-C8TGpPIB.js";import"./useEvent-NPetVyFU.js";import"./FocusScope-B5Ctyl2K.js";import"./ColumnLayout-SdmPDUaF.js";import"./Avatar-C1LjVxyg.js";import"./AlertIcon-BkGbvGvC.js";import"./Image-CfpVXueb.js";import"./Link-BC0An8Wr.js";import"./OptionsButton-M91K-13h.js";import"./ButtonView-DldKei58.js";import"./ContextMenuTriggerView-CvDTxb--.js";import"./ContextMenuTrigger-3D9kvHlc.js";import"./OverlayTrigger-mWrXut7l.js";import"./OverlayContextProvider-CEARkGE9.js";import"./FieldError-SYu40l7i.js";import"./FieldError-D7CvISHf.js";import"./AlertText-C4ghe_z5.js";import"./ActionGroupView-DUyubtpm.js";import"./Content-CP7dqr2s.js";import"./Modal-B8CAdwBg.js";import"./Overlay-B6aX1fvL.js";import"./LoadingSpinner-DQaYydFO.js";import"./Flex-MfsvjoaP.js";import"./useRef-Fb7B-TJZ.js";import"./remote-CF-AY8I2.js";import"./Heading-CGZUJUiQ.js";import"./useFormValidation-B1svUyZM.js";import"./Input-eh_683Iq.js";import"./EmulatedBoldText-DDNOwYGP.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
