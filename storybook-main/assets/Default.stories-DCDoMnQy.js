import{r as x,j as e}from"./iframe-1XlmVqd5.js";import{F as t}from"./FileDropZone-BlsnSXg4.js";import{S as d}from"./Section-D0cW5Q8y.js";import{F as u}from"./FileCardList-f7TUPQYD.js";import{F}from"./FileCard-DX4zo9MF.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-CJgx7ySR.js";import{B as f}from"./Button-QkNnHSXc.js";import{A as b}from"./ActionGroup-B6_ECWJg.js";import{a0 as j,a1 as B}from"./IconWarning-B1VVAKEh.js";import{H as g}from"./Heading-BHa3WEIV.js";import{F as h}from"./FileField-DaOQPQak.js";import{T as O}from"./Text-DoMRIGKc.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bnlp5g_N.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./index-TUds5Kez.js";import"./useFieldComponent--2vv_KDv.js";import"./utils-DcI_f0WL.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DC6xHoyY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWL3lRor.js";import"./useFocus-B3hq9TNr.js";import"./useCollator-CY9Dy9g3.js";import"./context-cVtndIAK.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./useFocusRing-nXz5Fj6s.js";import"./Button-DLO0tbpP.js";import"./ProgressBar-DD_sZ9Wb.js";import"./Label-Dzg72Lo7.js";import"./Hidden-D2eIjlR0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CBxBnL8r.js";import"./useFocusable-BsD1LxMy.js";import"./VisuallyHidden-Dm6nphJv.js";import"./ContextMenuSection-5WkAJf8V.js";import"./Action-edoqU8Tu.js";import"./context-DAZ5ICmo.js";import"./useStatic-BBkG9kKa.js";import"./browser-BzXr98QP.js";import"./getActionGroupSlot-DkGLvBLQ.js";import"./dynamic-pa5Mho8z.js";import"./Dialog-RsR3YLab.js";import"./RSPContexts-Dq529x8m.js";import"./OverlayArrow-DrpYygg_.js";import"./useControlledState-DjEU-0mZ.js";import"./Collection-BIbHEmyb.js";import"./CollectionBuilder-D7UVwhHW.js";import"./SelectionIndicator-qE_U9bCq.js";import"./Separator-CgzWDgSR.js";import"./SelectionManager-_Sb55NGi.js";import"./useEvent-pApi9dyH.js";import"./FocusScope-cwCTJx2V.js";import"./ColumnLayout-Mi9R4PCn.js";import"./Avatar-3YJQgKUR.js";import"./AlertIcon-B1ETMix0.js";import"./Image-QRzxutCB.js";import"./Link-BSlR1LLq.js";import"./OptionsButton-CC4rJoQK.js";import"./ButtonView-DfAFlmFQ.js";import"./ContextMenuTriggerView-4g9PLkS-.js";import"./ContextMenuTrigger-Bpqq4uO2.js";import"./OverlayTrigger-DCCWO6LH.js";import"./OverlayContextProvider-D7BkXl4r.js";import"./FieldError-D3E1IfUM.js";import"./FieldError-gWTdIqt3.js";import"./AlertText-BeWzsZor.js";import"./useRef-Caie6AZd.js";import"./LoadingSpinner-BDWb_Uug.js";import"./remote-BMRYc7VB.js";import"./Heading-CLPLrGSK.js";import"./useFormValidation-BKr0RaqD.js";import"./Input-DiBS55Zj.js";import"./EmulatedBoldText-BjX1lTTJ.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
