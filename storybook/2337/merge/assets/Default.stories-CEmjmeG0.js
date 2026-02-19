import{r as x,j as e}from"./iframe-DYssR0ZO.js";import{F as t}from"./FileDropZone-CCJyeqAi.js";import{S as d}from"./Section-DXlc0Qej.js";import{F as u}from"./FileCardList-1eIFH5ZQ.js";import{F}from"./FileCard-xM9usWeZ.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-C46gT09w.js";import{B as f}from"./Button-DWrm_dbc.js";import{A as b}from"./ActionGroup-R3KZtlTh.js";import{a0 as j,a1 as B}from"./IconWarning-BhLXBIfL.js";import{H as g}from"./Heading-De8T3vTM.js";import{F as h}from"./FileField-BYPLJrRy.js";import{T as O}from"./Text-S9F4vE2H.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BSzQgyBu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DsQfvZ8R.js";import"./index-BiQ39dcD.js";import"./index-DD53_4h2.js";import"./useFieldComponent-MDeHyLVI.js";import"./utils-C3q1cDFY.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C48KhL8P.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BksUhJpA.js";import"./useFocus-CQpADUyl.js";import"./useCollator-CCP6S8mH.js";import"./context-CUXiPoRo.js";import"./useLocalizedStringFormatter-lpvT_cvb.js";import"./useFocusRing-CMEZAWj2.js";import"./Button-Dmp7BHEZ.js";import"./ProgressBar-RP_su0Fk.js";import"./Label-DSpHRERt.js";import"./Hidden-CFJfk2M-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-xSc99ptM.js";import"./useFocusable-CmCmEjiW.js";import"./VisuallyHidden-B8I9N7kv.js";import"./ContextMenuSection-DyHCMP-N.js";import"./ActionBatch-Cjtwd20r.js";import"./useOverlayController-BfbCDLsY.js";import"./useStatic-BJkvCPdg.js";import"./browser-BciskJv3.js";import"./getActionGroupSlot-CBN4XHqD.js";import"./dynamic-3BYImiyG.js";import"./Dialog-DF_yv1N5.js";import"./RSPContexts-CDW_96-t.js";import"./OverlayArrow-Cf72_x8q.js";import"./useControlledState-CDSB3NYp.js";import"./Collection-DXdmtnJo.js";import"./CollectionBuilder-rMlba9-K.js";import"./SelectionIndicator-02MGjaw1.js";import"./Separator-DtudkoI4.js";import"./SelectionManager-CofrV8Dv.js";import"./useEvent-fKqzN6WM.js";import"./FocusScope-CNZRDNpk.js";import"./ColumnLayout-CcDrzD9k.js";import"./Avatar-4_SNYsOw.js";import"./AlertIcon-AvW8zEgb.js";import"./Image-CLpKtQd9.js";import"./Link-BfMlRe4o.js";import"./OptionsButton-BFQ3e5M4.js";import"./ButtonView-BsRNqhDl.js";import"./ContextMenuTriggerView-C5TEx2NB.js";import"./ContextMenuTrigger-DM3g_ry9.js";import"./OverlayTrigger-BzADejGr.js";import"./OverlayContextProvider-C4hsr81s.js";import"./FieldError-BB68CtMB.js";import"./FieldError-Bq-6FZKj.js";import"./AlertText-rFllmFTn.js";import"./ActionGroupView-HsrfXwWr.js";import"./Content-B3-6LeFE.js";import"./Modal-CmAFXMHf.js";import"./Overlay-CBBWFTg2.js";import"./LoadingSpinner-lL7MHRW7.js";import"./Flex-CDdSdzbN.js";import"./useRef-3pdhvvGy.js";import"./remote-cHYIdIzb.js";import"./Heading-CZjnkckI.js";import"./useFormValidation-D1fghWFH.js";import"./Input-VZe-sw4J.js";import"./EmulatedBoldText-BT8wvojV.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
