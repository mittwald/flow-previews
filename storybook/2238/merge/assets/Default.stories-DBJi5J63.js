import{r as x,j as e}from"./iframe-B6FtZzVw.js";import{F as t}from"./FileDropZone-DDt8AvVl.js";import{S as d}from"./Section-D0pkBsBP.js";import{F as u}from"./FileCardList-D2EU6ard.js";import{F}from"./FileCard-23fwIUMw.js";import{u as S,F as C,t as D}from"./Form-C2VhZWpm.js";import{S as y}from"./ResetButton-Ddn1H82r.js";import{B as f}from"./Button-HJgKWCOC.js";import{A as b}from"./ActionGroup-_gSv6nMR.js";import{Z as j,_ as B}from"./IconWarning-DEHpO9Uw.js";import{H as g}from"./Heading-DVq--lVl.js";import{F as h}from"./FileField-5D6fxqGc.js";import{T as O}from"./Text-DPYEhwNL.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-4ECWlLpy.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dnsg7d7g.js";import"./index-Jha0zHxy.js";import"./index-DprtUoGy.js";import"./useFieldComponent-BNMXDSB6.js";import"./utils-B053wNrY.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Dn3IEVOe.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CPIz2b8c.js";import"./useFocus-DnpGAVhn.js";import"./useCollator-DzvnCMzb.js";import"./context-D8VymAHE.js";import"./useLocalizedStringFormatter-D6nkVQc6.js";import"./Button-DJB2g2P-.js";import"./ProgressBar-WnFa3ztv.js";import"./Label-BRHOOf6S.js";import"./Hidden-BRZRxZbR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bff_bCDv.js";import"./useFocusRing-C0rO9rWF.js";import"./useFocusable-CPP8dzW4.js";import"./VisuallyHidden-kv_mk74c.js";import"./ContextMenuSection-Hdwk65mt.js";import"./Action-BQfBXJkE.js";import"./context-DELIC-Xh.js";import"./useStatic-Du0weed2.js";import"./browser-D2cTR9e8.js";import"./getActionGroupSlot-7zVBiy7G.js";import"./dynamic-HxtCVU2-.js";import"./Dialog-CxhUJg_S.js";import"./RSPContexts-Drji9jIz.js";import"./OverlayArrow-SzptHD46.js";import"./useControlledState-ByagjwsX.js";import"./Collection-queVBp1u.js";import"./CollectionBuilder-D0uz5fgl.js";import"./SelectionIndicator-DqsRzLxq.js";import"./Separator-CFp2GX75.js";import"./SelectionManager-CX268vg2.js";import"./useEvent-CIqm2Tiz.js";import"./FocusScope-Dv-pZR3t.js";import"./ColumnLayout-DnUtTAv8.js";import"./Avatar-fUuttNRE.js";import"./AlertIcon-CqMLsdbQ.js";import"./Image-DxmjgA3n.js";import"./Link-CSToEYYe.js";import"./OptionsButton-BBWQYADZ.js";import"./ButtonView-aYSYEUjK.js";import"./ContextMenuTriggerView-DlRfcaV6.js";import"./ContextMenuTrigger-BSBsD5_b.js";import"./OverlayTrigger-DubAi8QM.js";import"./OverlayContextProvider-Cz4fsNbA.js";import"./FieldError-CuRjPN5X.js";import"./FieldError-BtAF49NH.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-BYSeObyQ.js";import"./LoadingSpinner-DXuLs3WE.js";import"./remote-B6WYv1J0.js";import"./Heading-BVLRlyN8.js";import"./useFormValidation-C7j9z4Fo.js";import"./Input-CxAJMr-1.js";import"./EmulatedBoldText-DD0WhK6h.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
