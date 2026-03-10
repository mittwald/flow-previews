import{r as x,j as e}from"./iframe-BJFPIndf.js";import{F as t}from"./FileDropZone-C2vrKvqe.js";import{S as d}from"./Section-C6f0l2Xs.js";import{F as u}from"./FileCardList-D7yodtDn.js";import{F}from"./FileCard-CnHMpB-o.js";import{u as S,F as C,S as D,t as y}from"./FormRootError-Dqv401TK.js";import{B as f}from"./Button-CMLIz8EV.js";import{A as b}from"./ActionGroup-DdfrGWlw.js";import{a0 as j,a1 as B}from"./IconWarning-BUqpCqdO.js";import{H as g}from"./Heading-BgaQQLIq.js";import{F as h}from"./FileField-BryO2ynZ.js";import{T as O}from"./Text-CGF68X8s.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-UCpSlL3i.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BKaxWUSl.js";import"./index-Bb49SoEB.js";import"./index-Bg9RtLBP.js";import"./useFieldComponent-gU-XMME4.js";import"./utils-WT8FFEB4.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D3Y_kc1g.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-lMRjDAnL.js";import"./useFocus-DPdw3svt.js";import"./useCollator-m51r9XzI.js";import"./context-Dnh7V-Fy.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./useFocusRing-BgEwvKKQ.js";import"./Button-DuameHsj.js";import"./ProgressBar-Dl8T8y8K.js";import"./Label-CeUzUCbC.js";import"./Hidden-CMdNoXJX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BHGoooY9.js";import"./useFocusable-DGQMpBVb.js";import"./VisuallyHidden-DpM8Q2HK.js";import"./ContextMenuSection-BXIYeg2w.js";import"./ActionBatch-91iU7Ul_.js";import"./useOverlayController-BY9uU74J.js";import"./useStatic-BUxz8dmg.js";import"./browser-DqcTc9Nr.js";import"./getActionGroupSlot-ggari8la.js";import"./dynamic-Ds5yn-UC.js";import"./Dialog-eRNfCnmO.js";import"./RSPContexts-BXfCPyGV.js";import"./OverlayArrow-BSkSIfQ7.js";import"./useControlledState-DywfuSZK.js";import"./Collection-DFCRYzeG.js";import"./CollectionBuilder-DvmLsXRf.js";import"./SelectionIndicator-DE1Bz2O5.js";import"./Separator-xreemKox.js";import"./SelectionManager-BZZ9zPIN.js";import"./useEvent-BToADvjV.js";import"./FocusScope-shVJmAPD.js";import"./ColumnLayout-DB8dEtQu.js";import"./Avatar-PyLtBe2E.js";import"./AlertIcon-GZVP8WsI.js";import"./Image-DxKBNWWO.js";import"./Link-BHjJtRuV.js";import"./OptionsButton-DhV2eEK-.js";import"./ButtonView-BZflCgnt.js";import"./ContextMenuTriggerView-DEgj2ZQo.js";import"./ContextMenuTrigger-DpaR76-2.js";import"./OverlayTrigger-CKuXx8bv.js";import"./OverlayContextProvider-BuTLd76h.js";import"./ActionGroupView-Dw8RZYa_.js";import"./Content-Dz9K6tbl.js";import"./Modal-BGgt1ria.js";import"./Overlay-BWkVMZMt.js";import"./LoadingSpinner-mc2sXUEG.js";import"./Flex-7kPLhUeS.js";import"./useRef-BdfxdyUk.js";import"./FieldError-CerVitTZ.js";import"./FieldError-Coj9-PqS.js";import"./AlertText-BZJfsxKD.js";import"./remote-BMkebNs4.js";import"./Heading-BMtUgZaT.js";import"./useFormValidation-BhmC515N.js";import"./Input-BWdvoxfF.js";import"./EmulatedBoldText-CbQqBSV_.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
