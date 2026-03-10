import{r as x,j as e}from"./iframe-BOfxQ126.js";import{F as t}from"./FileDropZone-D2OqLtFL.js";import{S as d}from"./Section-C6FrpL68.js";import{F as u}from"./FileCardList-Da8ERBlt.js";import{F}from"./FileCard-WSJmhBfP.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-4yrHDRhQ.js";import{B as f}from"./Button-y6FeYCBC.js";import{A as b}from"./ActionGroup-BJX7-2AL.js";import{a0 as j,a1 as B}from"./IconWarning-BoBPkWIf.js";import{H as g}from"./Heading-XWK9z325.js";import{F as h}from"./FileField-BvxWJXD7.js";import{T as O}from"./Text-kIO13lDY.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-D0sAr1qY.js";import"./clsx-B-dksMZM.js";import"./flowComponent-sv_DULJq.js";import"./index-BJ7B_kXa.js";import"./index-X6kmY2GD.js";import"./useFieldComponent-D5YpTCds.js";import"./utils-Ca0-H8MP.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-OoL-eb0_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5EK40Aa-.js";import"./useFocus-CUROCE8M.js";import"./useCollator-CnlvukHk.js";import"./context-Bpmop-v_.js";import"./useLocalizedStringFormatter-DE5_GH3M.js";import"./useFocusRing-i6kyKwnh.js";import"./Button-6yn426ID.js";import"./ProgressBar-BM4farBg.js";import"./Label-CbvEG18U.js";import"./Hidden-BUteoyFO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-up0eurfY.js";import"./useFocusable-C918yQby.js";import"./VisuallyHidden-DfBCvB4u.js";import"./ContextMenuSection-cxjJtW6K.js";import"./ActionBatch-B3OckZQJ.js";import"./useOverlayController-NqoHBo9l.js";import"./useStatic-DMadDPeg.js";import"./browser-Ch4oJYG9.js";import"./getActionGroupSlot-RLrBfD2i.js";import"./dynamic-BEImSkKK.js";import"./Dialog-CCDN7DJz.js";import"./RSPContexts-8t9TLuqJ.js";import"./OverlayArrow-DOAKdHdF.js";import"./useControlledState-DE1u8yHr.js";import"./Collection-B3wPaI_q.js";import"./CollectionBuilder-D0zf41op.js";import"./SelectionIndicator-DVX-Gi0p.js";import"./Separator-BU8JOY49.js";import"./SelectionManager-ItpN5XhA.js";import"./useEvent-BMn21gml.js";import"./FocusScope-CCHjHw-t.js";import"./ColumnLayout-CDuuZ_Dc.js";import"./Avatar-ysieR5ie.js";import"./AlertIcon-CIUnjm1o.js";import"./Image-D-IucPdr.js";import"./Link-2jrt1kD4.js";import"./OptionsButton-GWphdsgu.js";import"./ButtonView-CgihUfDk.js";import"./ContextMenuTriggerView-CSjpW-FR.js";import"./ContextMenuTrigger-BGDhuHR_.js";import"./OverlayTrigger-ClVCYjM8.js";import"./OverlayContextProvider-BWPPKQaI.js";import"./FieldError-DCo5F_nc.js";import"./FieldError-GcSEBXG9.js";import"./AlertText-DpLHter-.js";import"./ActionGroupView-x-6e1Fyk.js";import"./Content-C0CTBJnI.js";import"./Modal-DHfoMw3X.js";import"./Overlay-D-1f0Sj_.js";import"./LoadingSpinner-BjosoRSs.js";import"./Flex-ClQXTQke.js";import"./useRef-ChX_wJCz.js";import"./remote-DjEyU7NV.js";import"./Heading-t8wVFZ6a.js";import"./useFormValidation-CxieGJiT.js";import"./Input-Dk2m6F6l.js";import"./EmulatedBoldText-LIZTvG-s.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
