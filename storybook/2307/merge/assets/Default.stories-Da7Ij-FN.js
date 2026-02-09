import{r as x,j as e}from"./iframe-XxUhdOIM.js";import{F as t}from"./FileDropZone-CUASW8Lf.js";import{S as d}from"./Section-BcKQCQPR.js";import{F as u}from"./FileCardList-ClrSY9Uh.js";import{F}from"./FileCard-shjfZ4BF.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DUwQ9l1M.js";import{B as f}from"./Button-CGELadBW.js";import{A as b}from"./ActionGroup-CpnIRFBl.js";import{a0 as j,a1 as B}from"./IconWarning-HmbpUhBv.js";import{H as g}from"./Heading-zbsC8ORu.js";import{F as h}from"./FileField-Cs5dVnO6.js";import{T as O}from"./Text-Cnwgd4MT.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B1V1VhqJ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoC0P7KZ.js";import"./index-CHNtIY8f.js";import"./index-BSqFjc_t.js";import"./useFieldComponent-DmQ0NGCO.js";import"./utils-BCq0Cvc3.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CyqmbAxA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BmkrUKzN.js";import"./useFocus-EZLK-muK.js";import"./useCollator-C4FEsSYx.js";import"./context-DoTCerLu.js";import"./useLocalizedStringFormatter-C41xTvax.js";import"./useFocusRing-B4cqEnOC.js";import"./Button-C5sfG3Jr.js";import"./ProgressBar-DoY0_w5k.js";import"./Label-ChQ-hUoB.js";import"./Hidden-Bb8MHfhN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C6bNQEHg.js";import"./useFocusable-BMaOCfpv.js";import"./VisuallyHidden-BH7c3L8h.js";import"./ContextMenuSection-CrLbr6yo.js";import"./Action-uIBgr6h7.js";import"./context-DxgidNIJ.js";import"./useStatic-BtKbO9c7.js";import"./browser-DmOXQPuo.js";import"./getActionGroupSlot-UY0N-ZIa.js";import"./dynamic-DlcFrL20.js";import"./Dialog-Cu17hg-L.js";import"./RSPContexts-CtuUzpub.js";import"./OverlayArrow-4i6vqPwo.js";import"./useControlledState-BjbUFAiJ.js";import"./Collection-Cp4O_cQl.js";import"./CollectionBuilder-CZOzXtpj.js";import"./SelectionIndicator-BvCJtDxS.js";import"./Separator-B_vWzLB2.js";import"./SelectionManager-BFRX4BxM.js";import"./useEvent-CS7e6qWg.js";import"./FocusScope-Bd3CxSOo.js";import"./ColumnLayout-BYlEVS__.js";import"./Avatar-CwGmjvqE.js";import"./AlertIcon-B-eIAqAY.js";import"./Image-BaNx1Pph.js";import"./Link-BVBHyD56.js";import"./OptionsButton-Rd1pulHz.js";import"./ButtonView-BOkSZ7Ty.js";import"./ContextMenuTriggerView-ClQQSQFw.js";import"./ContextMenuTrigger-DnfKci63.js";import"./OverlayTrigger-B9bnxvcN.js";import"./OverlayContextProvider-DKE9AqME.js";import"./FieldError-DsyIPYpb.js";import"./FieldError-D3qoIyxA.js";import"./AlertText-D9H4kctD.js";import"./useRef-DGklHaj5.js";import"./LoadingSpinner-eRWTE9TH.js";import"./remote-6r6BNiZ9.js";import"./Heading-CZTrf3Od.js";import"./useFormValidation-nWIFBTgB.js";import"./Input-dBdn1-_7.js";import"./EmulatedBoldText-p9aRLsBg.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const $e=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,$e as __namedExportsOrder,Xe as default};
