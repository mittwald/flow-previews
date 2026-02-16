import{r as x,j as e}from"./iframe-C5ZTNo7B.js";import{F as t}from"./FileDropZone-Bi9xHQLc.js";import{S as d}from"./Section-HUKpeM8o.js";import{F as u}from"./FileCardList-CvTC9qTY.js";import{F}from"./FileCard-BQmFLbjX.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BsxvTmJM.js";import{B as f}from"./Button-CTD3uiWd.js";import{A as b}from"./ActionGroup-Dj8ge-dL.js";import{a0 as j,a1 as B}from"./IconWarning-Bhk_rtuP.js";import{H as g}from"./Heading-CV5pK1fF.js";import{F as h}from"./FileField-DFIOaTs2.js";import{T as O}from"./Text-vc01bOb1.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DJ8l8Mkp.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C74LPcu8.js";import"./index-DezMBlvl.js";import"./index-L0hXSSnD.js";import"./useFieldComponent-hFC9tXxl.js";import"./utils-BuDA3Ujk.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DfHOPDAf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BfXWSkVN.js";import"./useFocus-wNGus_RY.js";import"./useCollator-CAZNHi0m.js";import"./context-Zfd40gqJ.js";import"./useLocalizedStringFormatter-CDqYfAHq.js";import"./useFocusRing-rbh4dKQ_.js";import"./Button-B6XpNhBF.js";import"./ProgressBar-D_9cWfd2.js";import"./Label-BSZlsNs_.js";import"./Hidden-U4jsQoYY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ef-k5VSc.js";import"./useFocusable-DlWx3Zdp.js";import"./VisuallyHidden-eGwjz06V.js";import"./ContextMenuSection-B0O-s6DP.js";import"./ActionBatch-DQnznSVa.js";import"./useOverlayController-DKmEbncM.js";import"./useStatic-yr3GM-AX.js";import"./browser-CszbwzXz.js";import"./getActionGroupSlot-D914C5WA.js";import"./dynamic-Bw3_nZ9y.js";import"./Dialog-n3Xabcyo.js";import"./RSPContexts-BwPNB4Pl.js";import"./OverlayArrow-F8uV4qkU.js";import"./useControlledState-e_mWhKHk.js";import"./Collection-CZnzaiUv.js";import"./CollectionBuilder-BNhwwjuE.js";import"./SelectionIndicator-CrR9Mcxf.js";import"./Separator-BabRRkw2.js";import"./SelectionManager-MjLIZfUi.js";import"./useEvent-BqK5cB2S.js";import"./FocusScope-PkAgaAiM.js";import"./ColumnLayout-1ZzJqkhJ.js";import"./Avatar-BNQ9qNCg.js";import"./AlertIcon-Da43IrrR.js";import"./Image-C0BIeoBe.js";import"./Link-DMEIb5A5.js";import"./OptionsButton-CnsaLFyu.js";import"./ButtonView-DEthqiLB.js";import"./ContextMenuTriggerView-XUNvs0yI.js";import"./ContextMenuTrigger-CkpQtoeY.js";import"./OverlayTrigger-B9JYxYmq.js";import"./OverlayContextProvider-CtLnis9C.js";import"./FieldError-BDB9mSsz.js";import"./FieldError-CU71BOGK.js";import"./AlertText-EmpeosBS.js";import"./ActionGroupView-BDcHe3GE.js";import"./Content-CH2yQGd8.js";import"./Modal-DnrTq3-t.js";import"./Overlay-DtDYWi_A.js";import"./LoadingSpinner-DA9Opfj3.js";import"./Flex-CwoZU0pA.js";import"./useRef-BCHa9Y83.js";import"./remote-DVpXA9eO.js";import"./Heading-CeFx_rtS.js";import"./useFormValidation-CtRrQmcu.js";import"./Input-DU4gQuZk.js";import"./EmulatedBoldText-DrBpqUUw.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
