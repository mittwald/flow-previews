import{r as x,j as e}from"./iframe-K4Kgzs5d.js";import{F as t}from"./FileDropZone-C9BEjhoa.js";import{S as d}from"./Section-DhkMhEtB.js";import{F as u}from"./FileCardList-C-b5FlbY.js";import{F}from"./FileCard-CFzCqJot.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-D8mKGoDl.js";import{B as f}from"./Button-CLdF1xvY.js";import{A as b}from"./ActionGroup-By1FPS3M.js";import{_ as j,$ as B}from"./IconWarning-BGpHZy47.js";import{H as g}from"./Heading-DvNGAwaU.js";import{F as h}from"./FileField-C-ONSsKy.js";import{T as O}from"./Text-BPEkrilU.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BDbckACE.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./index-C1Cqv2DY.js";import"./useFieldComponent-XDoLqUAT.js";import"./utils--XC5cWbY.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DhK76AHe.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-IleSnN60.js";import"./useFocus-CfhKlOoP.js";import"./useCollator-Cz2Nd5FQ.js";import"./context-BHsz5d3m.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./useFocusRing-B7VfbIok.js";import"./Button-B9p48ORM.js";import"./ProgressBar-DgQG6kyC.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bsv_-vru.js";import"./useFocusable-H6UpmrOx.js";import"./VisuallyHidden-DOfAC-AS.js";import"./ContextMenuSection-BbQjr4t3.js";import"./Action-D8xdI4CM.js";import"./context-Be9deJEN.js";import"./useStatic-DUE7vdEn.js";import"./browser-9MG5lDdh.js";import"./getActionGroupSlot-DDRLr0XQ.js";import"./dynamic-d4gvBHma.js";import"./Dialog-D9y6Gm5p.js";import"./RSPContexts-DBQcbxf9.js";import"./OverlayArrow-70hjzCbF.js";import"./useControlledState-UcCiEhN3.js";import"./Collection-BbxJvL2P.js";import"./CollectionBuilder-GLV80gvr.js";import"./SelectionIndicator-LfvmrL3H.js";import"./Separator-D8C38sqW.js";import"./SelectionManager-D3da5ydz.js";import"./useEvent-B-sfhBuw.js";import"./FocusScope-A43bauPW.js";import"./ColumnLayout-Q0wEQXCG.js";import"./Avatar-CSU8qQ26.js";import"./AlertIcon-Bh0Qf_48.js";import"./Image-DsIbxh8T.js";import"./Link-D8nPfavX.js";import"./OptionsButton-0aVkjdtI.js";import"./ButtonView-CZyRcM7x.js";import"./ContextMenuTriggerView-Rui-8712.js";import"./ContextMenuTrigger-l4j2BFdl.js";import"./OverlayTrigger-B8uZhBMV.js";import"./OverlayContextProvider-BLXdSW9X.js";import"./FieldError-BIdQs2eG.js";import"./FieldError-CDQ9nLxM.js";import"./AlertText-DseO20UX.js";import"./useRef-D3B_CRoC.js";import"./LoadingSpinner-Dt3AVNp7.js";import"./remote-DgH_DZKx.js";import"./Heading-BKtqva_S.js";import"./useFormValidation-QT1HCjbB.js";import"./Input-n3w13r8V.js";import"./EmulatedBoldText-CJYMqRLn.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
