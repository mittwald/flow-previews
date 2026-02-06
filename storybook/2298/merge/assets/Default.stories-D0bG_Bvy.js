import{r as x,j as e}from"./iframe-P-BtG9en.js";import{F as t}from"./FileDropZone-4R_AQ8jZ.js";import{S as d}from"./Section-58eqO89k.js";import{F as u}from"./FileCardList-DUE2qjqt.js";import{F}from"./FileCard-DDzDrPEw.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-Bun6L1Pq.js";import{B as f}from"./Button-BDKyvND0.js";import{A as b}from"./ActionGroup-BOaMC-Ca.js";import{_ as j,$ as B}from"./IconWarning-NSWHp5YX.js";import{H as g}from"./Heading-CnpYSlBq.js";import{F as h}from"./FileField-CfmiOm-Y.js";import{T as O}from"./Text-WQ3bdi2b.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-D-dOvIxw.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BpgWfaNt.js";import"./index-B7vbb8bW.js";import"./index-BvXbw6Ik.js";import"./useFieldComponent-DCdIumPj.js";import"./utils-B0ReHH5J.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Cuc5X3SS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQN1qZoA.js";import"./useFocus-CaaZ7Vn6.js";import"./useCollator-Cdxl-D7M.js";import"./context-DgQkEglP.js";import"./useLocalizedStringFormatter-DMM5tmNP.js";import"./useFocusRing-CySMD5sm.js";import"./Button-CkYmzEte.js";import"./ProgressBar-DT6X9kMn.js";import"./Label-Dy2C0Oyl.js";import"./Hidden-_62Uq0iE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DdsYmr0S.js";import"./useFocusable-BT9LLfcI.js";import"./VisuallyHidden-DdvDFx4J.js";import"./ContextMenuSection-DCh3mp1Z.js";import"./Action-BXaB41c4.js";import"./context-DzeViRSK.js";import"./useStatic-CkdzkAMF.js";import"./browser-CAs7Gyq6.js";import"./getActionGroupSlot-CoTv8oDB.js";import"./dynamic-NZeYY7PB.js";import"./Dialog-CXomJO1p.js";import"./RSPContexts-Jnosxnes.js";import"./OverlayArrow-BfX9M7HU.js";import"./useControlledState-CF2gRUje.js";import"./Collection-C65VUZYL.js";import"./CollectionBuilder-DTl13Dsz.js";import"./SelectionIndicator-DSNo1Dq6.js";import"./Separator-DqzDCiom.js";import"./SelectionManager-Bov5sZzJ.js";import"./useEvent-D5tDHFnx.js";import"./FocusScope-DOTGny1g.js";import"./ColumnLayout-Cc58DXJs.js";import"./Avatar-CVRvbsDI.js";import"./AlertIcon-D-lULPsb.js";import"./Image-BcRUrCbN.js";import"./Link-Vx4jQ_pt.js";import"./OptionsButton-BHioXwcb.js";import"./ButtonView-CwOL1ZjU.js";import"./ContextMenuTriggerView-BP6QE978.js";import"./ContextMenuTrigger-DAnP2pgI.js";import"./OverlayTrigger-C73x-77s.js";import"./OverlayContextProvider-c997mKVu.js";import"./FieldError-BKtriW0o.js";import"./FieldError-C3DeF1uc.js";import"./AlertText-B793ATvK.js";import"./useRef-Vl5p17w5.js";import"./LoadingSpinner-CEdiZrnd.js";import"./remote-CHm5B1ZS.js";import"./Heading-BpHPsioq.js";import"./useFormValidation-ePPiHYYq.js";import"./Input-tDUM_w9j.js";import"./EmulatedBoldText-Dkyjs4gQ.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
