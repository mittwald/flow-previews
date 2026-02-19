import{r as x,j as e}from"./iframe-B2CTi6cm.js";import{F as t}from"./FileDropZone-BOYebPZ-.js";import{S as d}from"./Section-Cp9Lc84Y.js";import{F as u}from"./FileCardList-BRKzy2wR.js";import{F}from"./FileCard-BMPVbdpu.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DfhEXo1u.js";import{B as f}from"./Button-_yLWek3e.js";import{A as b}from"./ActionGroup-DUcqnoyz.js";import{a0 as j,a1 as B}from"./IconWarning-hrUSNLB1.js";import{H as g}from"./Heading-DlmM6Hn_.js";import{F as h}from"./FileField-CbuCuF4c.js";import{T as O}from"./Text-4QTNuVgz.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-IFQ-H3Lx.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7mc_ao_.js";import"./index-C6Xw33Ma.js";import"./index-DqADrqmd.js";import"./useFieldComponent-DO-gEAYc.js";import"./utils-CFhs-kxq.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CtUv1EPC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DatykuNG.js";import"./useFocus-iUa6wpVM.js";import"./useCollator-DfexieBx.js";import"./context-DlyTwf6g.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./useFocusRing-G6UDZPL7.js";import"./Button-0k2tyOZn.js";import"./ProgressBar-CsEuupc_.js";import"./Label-tk3Z2cvp.js";import"./Hidden-DPfyW1TC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CXOW9Qje.js";import"./useFocusable-DeW7JE_I.js";import"./VisuallyHidden-D844FGjJ.js";import"./ContextMenuSection-DUei6bL0.js";import"./ActionBatch-BYvDqB3T.js";import"./useOverlayController-D1PufBkN.js";import"./useStatic-gDNiy6Z_.js";import"./browser-Cn-sjrEd.js";import"./getActionGroupSlot-BeGUIl6W.js";import"./dynamic-CQSnLDrl.js";import"./Dialog-D2pl7IFn.js";import"./RSPContexts-BnlNRtVT.js";import"./OverlayArrow-8rub2gpn.js";import"./useControlledState-D4tpAkeT.js";import"./Collection-T1sKmHBq.js";import"./CollectionBuilder-2L-4enMQ.js";import"./SelectionIndicator-BHeVA0_4.js";import"./Separator-Dt0DKQRS.js";import"./SelectionManager-DmcDvJFk.js";import"./useEvent-Ccc4zbbb.js";import"./FocusScope-DAIUMiFj.js";import"./ColumnLayout-C2W5z5Dv.js";import"./Avatar-zP0zgodM.js";import"./AlertIcon-Bqwt-hqt.js";import"./Image-D5Emav9_.js";import"./Link-BI0SHCIC.js";import"./OptionsButton-KjlX6-xd.js";import"./ButtonView-vAiOEZiU.js";import"./ContextMenuTriggerView-CBwit0fQ.js";import"./ContextMenuTrigger-Ck83CyUp.js";import"./OverlayTrigger-C18xY8mJ.js";import"./OverlayContextProvider-BUaDJxSi.js";import"./FieldError-Cpb_w0Fh.js";import"./FieldError-Cj-zQd3o.js";import"./AlertText-Dh_kjMlW.js";import"./ActionGroupView-CqxJNoqF.js";import"./Content-CXBi8j7T.js";import"./Modal-CkPrUDri.js";import"./Overlay-BCcgEorp.js";import"./LoadingSpinner-DnfUZyUE.js";import"./Flex-B3V1yHmd.js";import"./useRef-vkhYMc-H.js";import"./remote-C6QTRNf9.js";import"./Heading-C9cKQsqE.js";import"./useFormValidation-BDHhHN4L.js";import"./Input-KDCOY3Ar.js";import"./EmulatedBoldText-B1qN59os.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
