import{r as x,j as e}from"./iframe-DSXKf9Qs.js";import{F as t}from"./FileDropZone-U6kJcfFQ.js";import{S as d}from"./Section-C2etDRXq.js";import{F as u}from"./FileCardList-DZGeFrqr.js";import{F}from"./FileCard-CdD9BoP2.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DQocwP5Q.js";import{B as f}from"./Button-D9RPwGO-.js";import{A as b}from"./ActionGroup-Cult8i-N.js";import{_ as j,$ as B}from"./IconWarning-CsaNdeaY.js";import{H as g}from"./Heading-CyZwRqCp.js";import{F as h}from"./FileField-CNvd3De3.js";import{T as O}from"./Text-C7KW9wgf.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Dq1RWPQs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aTnVZ28_.js";import"./index-_ST8Xdbb.js";import"./index-xIXPquhv.js";import"./useFieldComponent-CCab4n06.js";import"./utils-BkNrSrSW.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BGc7dsTw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2CXizlL.js";import"./useFocus-BkCMpCSs.js";import"./useCollator-dJhHztcY.js";import"./context-DU2DYbHB.js";import"./useLocalizedStringFormatter-DnMeMDV0.js";import"./useFocusRing-9tutEJo4.js";import"./Button-DD62R7IC.js";import"./ProgressBar-zeu61Rhn.js";import"./Label-Dnlar29r.js";import"./Hidden-Bsr5uGtI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D3-3tpV2.js";import"./useFocusable-BiabYp81.js";import"./VisuallyHidden-p8Ypb2KO.js";import"./ContextMenuSection-8AZZSNKN.js";import"./Action-D8TvePO3.js";import"./context-CiYX6UJF.js";import"./useStatic-CLatwN1t.js";import"./browser-zi1f_NHh.js";import"./getActionGroupSlot-CBC8VLuN.js";import"./dynamic-waHTXRlt.js";import"./Dialog-Dgijbiav.js";import"./RSPContexts-C47t6iqA.js";import"./OverlayArrow-wV4le4-P.js";import"./useControlledState-C8VBbj0I.js";import"./Collection-Bm0CT5e0.js";import"./CollectionBuilder-fJJ3qX8z.js";import"./SelectionIndicator-BtJjQV2B.js";import"./Separator-BRbgnZrd.js";import"./SelectionManager-DlGSpMCY.js";import"./useEvent-BOIZmRJ7.js";import"./FocusScope-C1tZWIaN.js";import"./ColumnLayout-D1UDogBz.js";import"./Avatar-Seq1LI3C.js";import"./AlertIcon-Bx5_fWVD.js";import"./Image-IRdGGlCW.js";import"./Link-_tEGPnTm.js";import"./OptionsButton-DiFJyD2k.js";import"./ButtonView-d2J1OyEz.js";import"./ContextMenuTriggerView-BfGte_Hz.js";import"./ContextMenuTrigger-VpYXiR_k.js";import"./OverlayTrigger-DEiWUU1J.js";import"./OverlayContextProvider-BrBwXgQ3.js";import"./FieldError-DyLpPvQc.js";import"./FieldError-D2u-4343.js";import"./AlertText-ppaXibkF.js";import"./useRef-i8-2SC7v.js";import"./LoadingSpinner-CM9ywy6H.js";import"./remote-Gy-Ku51P.js";import"./Heading-ChWDXA_z.js";import"./useFormValidation-CZFMPKAm.js";import"./Input-C3UpKYh9.js";import"./EmulatedBoldText-CWbGlL7P.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
