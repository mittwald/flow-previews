import{r as x,j as e}from"./iframe--WfF81Kk.js";import{F as t}from"./FileDropZone-C3Oi8-Xh.js";import{S as d}from"./Section-CsSoxbiI.js";import{F as u}from"./FileCardList-CsG7c5YS.js";import{F}from"./FileCard-DX9TEwPt.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BDtprYGS.js";import{B as f}from"./Button-Csb2zbZD.js";import{A as b}from"./ActionGroup-D33IDY3J.js";import{_ as j,$ as B}from"./IconWarning-BCj0akvL.js";import{H as g}from"./Heading-CQM1gGXf.js";import{F as h}from"./FileField-C7caKrTQ.js";import{T as O}from"./Text-BQUBTPZI.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BA046-fP.js";import"./clsx-B-dksMZM.js";import"./flowComponent-zBGCvlSH.js";import"./index-CYxiP9KI.js";import"./index-C06vQZsJ.js";import"./useFieldComponent-DtaSYFu8.js";import"./utils-DjCd38Rb.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-2H1diUJp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-b3rJJe.js";import"./useFocus-BstfIGzX.js";import"./useCollator-lImoFu1C.js";import"./context-BGH-DtkU.js";import"./useLocalizedStringFormatter-BAqqywtA.js";import"./useFocusRing-xiCVrDfg.js";import"./Button-cdObnXIw.js";import"./ProgressBar-CcHuDHhg.js";import"./Label-B681fyVu.js";import"./Hidden-CjN9RU7M.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CuA8A2Wl.js";import"./useFocusable-CYWdX1lX.js";import"./VisuallyHidden-BWpEL0hX.js";import"./ContextMenuSection-BxJIjSzE.js";import"./Action-B7MToOoF.js";import"./context-BQE_egpR.js";import"./useStatic-DJuRNbYT.js";import"./browser-DaXQhhrD.js";import"./getActionGroupSlot-DP_ddCf6.js";import"./dynamic-3udm1Ueo.js";import"./Dialog-C_VjyLol.js";import"./RSPContexts-D6CGk5en.js";import"./OverlayArrow-zU7WmGPw.js";import"./useControlledState-33z9BU53.js";import"./Collection-WxHe4g5S.js";import"./CollectionBuilder-D8350JFC.js";import"./SelectionIndicator-BGWzSObI.js";import"./Separator-C9zEzG3T.js";import"./SelectionManager-D0POi5wt.js";import"./useEvent-CGxaeV4J.js";import"./FocusScope-D57rWz_c.js";import"./ColumnLayout-xbxAXNJp.js";import"./Avatar-BehruE7U.js";import"./AlertIcon-Bc0kQsAW.js";import"./Image-7jDKvzoq.js";import"./Link-BV1-dthy.js";import"./OptionsButton-Bsbew__T.js";import"./ButtonView-DWC1hYKd.js";import"./ContextMenuTriggerView-DZhgYrC8.js";import"./ContextMenuTrigger-C5teqR94.js";import"./OverlayTrigger-CvMg_PBm.js";import"./OverlayContextProvider-HfoRPLvl.js";import"./FieldError-DwJ8vXTD.js";import"./FieldError-8xlfKJ8p.js";import"./AlertText-4irfy3TS.js";import"./useRef-BG-z1Shz.js";import"./LoadingSpinner-BoJLilDa.js";import"./remote-BYVMC2eP.js";import"./Heading-DpPfmaJp.js";import"./useFormValidation-CPuMB1ok.js";import"./Input-DN6feiEe.js";import"./EmulatedBoldText-Bc2SrKM1.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
