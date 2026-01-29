import{r as x,j as e}from"./iframe-Bj8CIgLy.js";import{F as t}from"./FileDropZone-C3zMIUgs.js";import{S as d}from"./Section-Bw-Treyf.js";import{F as u}from"./FileCardList-tDKNoUQF.js";import{F}from"./FileCard-CF5ZWTfd.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-5FZ7-Sc5.js";import{B as f}from"./Button-b_60CJFp.js";import{A as b}from"./ActionGroup-C-nWA-s8.js";import{_ as j,$ as B}from"./IconWarning-KvO0562x.js";import{H as g}from"./Heading-CKRtDLQC.js";import{F as h}from"./FileField-CbEYOAco.js";import{T as O}from"./Text-BbFFlg8m.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DH3xMYY-.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./index-DYakERwo.js";import"./useFieldComponent-DFS7CEov.js";import"./utils-D41FTHpf.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CVMu3Bei.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-j5JIlG5u.js";import"./useFocus-BJLP4kuV.js";import"./useCollator-w2x96sHr.js";import"./context-RK9vgtK2.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./useFocusRing-0HtVE4-I.js";import"./Button-Kf97rzrP.js";import"./ProgressBar-CzzSLaP3.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BLrqdZMB.js";import"./useFocusable-DNf9Dm0r.js";import"./VisuallyHidden-D10Fyvvv.js";import"./ContextMenuSection-aa2v9fsF.js";import"./Action-DbcbId4I.js";import"./context-CihUwagI.js";import"./useStatic-BJFVwiuT.js";import"./browser-Rl4DjN4H.js";import"./getActionGroupSlot-BcyfBjwk.js";import"./dynamic-DEq-wVmB.js";import"./Dialog-vXYkYCcw.js";import"./RSPContexts-C3RQOwqv.js";import"./OverlayArrow-zA421arv.js";import"./useControlledState-C0IHmt74.js";import"./Collection-Ddvl2Mqw.js";import"./CollectionBuilder-BBfbdfv8.js";import"./SelectionIndicator-DBsPgOzp.js";import"./Separator-ZmTIxQU_.js";import"./SelectionManager-DK0mm2wz.js";import"./useEvent-UL9Ap3Pm.js";import"./FocusScope-DNVRBXI-.js";import"./ColumnLayout-C2Om1Els.js";import"./Avatar-B99sX0iI.js";import"./AlertIcon-Bub-4wJk.js";import"./Image-CBJhGe2x.js";import"./Link-Cu-sj9aS.js";import"./OptionsButton-1XC1O5qC.js";import"./ButtonView-DoUQTLRD.js";import"./ContextMenuTriggerView-NMVkasxL.js";import"./ContextMenuTrigger-ChogISEH.js";import"./OverlayTrigger-BDKA1kYb.js";import"./OverlayContextProvider-CVeWPhf8.js";import"./FieldError-Dbjs-A5K.js";import"./FieldError-cTj-tlV1.js";import"./AlertText-Bt0Daj0V.js";import"./useRef-CJxAjFY9.js";import"./LoadingSpinner-Bl0_iJOm.js";import"./remote-ChNLl0N8.js";import"./Heading-CLbyuN1D.js";import"./useFormValidation-CuYWsRMr.js";import"./Input-DxRXMpsm.js";import"./EmulatedBoldText-CYAzRgIu.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
