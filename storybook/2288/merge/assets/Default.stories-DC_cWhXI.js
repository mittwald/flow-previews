import{r as x,j as e}from"./iframe-DkT4d7Ot.js";import{F as t}from"./FileDropZone-COu-dOiV.js";import{S as d}from"./Section-DxjMaQtB.js";import{F as u}from"./FileCardList-whjsX28u.js";import{F}from"./FileCard-BrS6dyPW.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DTP7uuAe.js";import{B as f}from"./Button-B3KXRm13.js";import{A as b}from"./ActionGroup-DuCWyd6d.js";import{_ as j,$ as B}from"./IconWarning-K6asu7lY.js";import{H as g}from"./Heading-BxekkuWK.js";import{F as h}from"./FileField-DI37RzSe.js";import{T as O}from"./Text-CN56Aq7p.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-D2peoq7l.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CHs1XVIh.js";import"./index-BIhgoFLA.js";import"./index-CA8YyeFM.js";import"./useFieldComponent-FHnXwL7q.js";import"./utils-up3lG_mb.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C_PPHbON.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D_TjIfTk.js";import"./useFocus-Bn0bRGba.js";import"./useCollator-5WPUQbPc.js";import"./context-BhNnKB4w.js";import"./useLocalizedStringFormatter-D2x8dv8x.js";import"./useFocusRing-Bn6GFEBK.js";import"./Button-DKCc9Jm1.js";import"./ProgressBar-B_-OWJV1.js";import"./Label-Bfb68HPn.js";import"./Hidden-B_u69euq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-loL-ySzv.js";import"./useFocusable-oFwI_mrj.js";import"./VisuallyHidden-BhWvypZu.js";import"./ContextMenuSection-NCgBu2Na.js";import"./Action-BKfs-erd.js";import"./context-CpYzats6.js";import"./useStatic-DmZQ70we.js";import"./browser-CwBpRuL-.js";import"./getActionGroupSlot-DACNE6Gp.js";import"./dynamic-AbOzqnd1.js";import"./Dialog-DEf0gwvq.js";import"./RSPContexts-rkHdJ27o.js";import"./OverlayArrow-BYxGCDbr.js";import"./useControlledState-B7-cf8QC.js";import"./Collection-B11FEq3B.js";import"./CollectionBuilder-qtEk7bDG.js";import"./SelectionIndicator-B0xJhgeU.js";import"./Separator-DkPkeG73.js";import"./SelectionManager-6QPEfufX.js";import"./useEvent-DJRSX7W0.js";import"./FocusScope-D5JuRjyj.js";import"./ColumnLayout-Bl1HlYyD.js";import"./Avatar-ClD90Wm0.js";import"./AlertIcon-CGIGsQoy.js";import"./Image-B-dJ2Q5A.js";import"./Link-s3E4jLq1.js";import"./OptionsButton-Bbx2wR2M.js";import"./ButtonView-C05B8H85.js";import"./ContextMenuTriggerView-BbJz3Mkn.js";import"./ContextMenuTrigger-BoOjIu37.js";import"./OverlayTrigger-ChHec0Fn.js";import"./OverlayContextProvider-CjNcO-pQ.js";import"./FieldError-BUQThHV3.js";import"./FieldError-BIqVWLlF.js";import"./AlertText-n1a7254W.js";import"./useRef-CEFt68nY.js";import"./LoadingSpinner-DZGxTG7I.js";import"./remote-B8vjNxTl.js";import"./Heading-DoshCNUZ.js";import"./useFormValidation-UULz_Uq_.js";import"./Input--3PeXBSI.js";import"./EmulatedBoldText-Auc0aNAR.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
