import{r as x,j as e}from"./iframe-B_TkxfTi.js";import{F as t}from"./FileDropZone-yNroRlF2.js";import{S as d}from"./Section-DuAyIwjj.js";import{F as u}from"./FileCardList-DlpQ_1iG.js";import{F}from"./FileCard-DDXx_Wc0.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-Bdlat21c.js";import{B as f}from"./Button-RJdr80c6.js";import{A as b}from"./ActionGroup-DrzSRVMS.js";import{_ as j,$ as B}from"./IconWarning-C-Vc31bm.js";import{H as g}from"./Heading-DO4971VL.js";import{F as h}from"./FileField-cFYtsM-E.js";import{T as O}from"./Text-DZTN4U6B.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CZ6P1Qbb.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BIniq_3P.js";import"./index-CrnjZTlk.js";import"./index-B6XMVbfI.js";import"./useFieldComponent-C57DTYPz.js";import"./utils-CEh0pYpN.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CBbNcQAF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2pyCI0i.js";import"./useFocus-CWYeHEaO.js";import"./useCollator-Dzxw0xLX.js";import"./context-Bqo0meff.js";import"./useLocalizedStringFormatter-BrZnZPcM.js";import"./useFocusRing-Bb1Hz9wK.js";import"./Button-n3CPGMPO.js";import"./ProgressBar-DY5wp8p-.js";import"./Label-CQzZBBgV.js";import"./Hidden-B4qu7a2v.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqvJUCRP.js";import"./useFocusable-DUuU0sbS.js";import"./VisuallyHidden-BGokW8gm.js";import"./ContextMenuSection-DayPbCkQ.js";import"./Action-BwMJcjOW.js";import"./context-D9DgwULu.js";import"./useStatic-cRv7_xgS.js";import"./browser-CLjLvoWS.js";import"./getActionGroupSlot-DtLKsNou.js";import"./dynamic-BusjqWiY.js";import"./Dialog-ChZYysky.js";import"./RSPContexts-CP1vSDTy.js";import"./OverlayArrow-DmLbnMba.js";import"./useControlledState-CYdArkzJ.js";import"./Collection-DsLwUV-E.js";import"./CollectionBuilder-De4-ApJw.js";import"./SelectionIndicator-SPKWDPFJ.js";import"./Separator-Ck_PPi-8.js";import"./SelectionManager-CXzqm88-.js";import"./useEvent-CBTrASFt.js";import"./FocusScope-BxLI0wxf.js";import"./ColumnLayout-BXiZeNy2.js";import"./Avatar-Xi1BV-nI.js";import"./AlertIcon-DJdpqIO-.js";import"./Image-D0-HPwqO.js";import"./Link-B7YQTEu4.js";import"./OptionsButton-TBqtBOV7.js";import"./ButtonView-RI0SDeqV.js";import"./ContextMenuTriggerView-0qUdM40n.js";import"./ContextMenuTrigger-DuP3I3bE.js";import"./OverlayTrigger-De9wNpqE.js";import"./OverlayContextProvider-lGzaaamO.js";import"./FieldError-BTHn5en7.js";import"./FieldError-CJvsl-v5.js";import"./AlertText-DZAkh8GI.js";import"./useRef-D_3PHrag.js";import"./LoadingSpinner-CjHOYBjr.js";import"./remote-BarzyRQ7.js";import"./Heading-_1YYOm-_.js";import"./useFormValidation-CPzq_YrX.js";import"./Input-BZn5pHU1.js";import"./EmulatedBoldText-9YPP8018.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
