import{r as x,j as e}from"./iframe-C-IsL8qN.js";import{F as t}from"./FileDropZone-BMtXL284.js";import{S as d}from"./Section-CV3vWY3L.js";import{F as u}from"./FileCardList-BK0WgAJQ.js";import{F}from"./FileCard-CFoFNV7R.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-l28aitNS.js";import{B as f}from"./Button-CjTDs8dt.js";import{A as b}from"./ActionGroup-B3zIeD6Q.js";import{_ as j,$ as B}from"./IconWarning-Dgpqm1wd.js";import{H as g}from"./Heading-DSZIHu00.js";import{F as h}from"./FileField-CQ8xDK8v.js";import{T as O}from"./Text-zEwe4Yc5.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BPQ13jml.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DS36iIr8.js";import"./index-D9sZegdt.js";import"./index-foeybvdq.js";import"./useFieldComponent-neJhoipE.js";import"./utils-CdIT7ixS.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CQAUJHD3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C05pQW9y.js";import"./useFocus-NxQ40LWx.js";import"./useCollator-CUcFaXNY.js";import"./context-D_ogfP81.js";import"./useLocalizedStringFormatter-DvhvnQe6.js";import"./useFocusRing-DAQnos8V.js";import"./Button-Dm6X_wGa.js";import"./ProgressBar-ZcSeAule.js";import"./Label-c2neL4nQ.js";import"./Hidden-BbPT9r2h.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bg3iVugG.js";import"./useFocusable-9aQ0aONO.js";import"./VisuallyHidden-B09yhrQ-.js";import"./ContextMenuSection-Bkmt90BD.js";import"./Action-B0w4MF16.js";import"./context-DP3SZV7v.js";import"./useStatic-D3Nt3l-7.js";import"./browser-Dh90zeJL.js";import"./getActionGroupSlot-BxXNcZ2R.js";import"./dynamic-Bim1MLHd.js";import"./Dialog-DhruM_-_.js";import"./RSPContexts-dApRMb3S.js";import"./OverlayArrow-Bm7lykW0.js";import"./useControlledState-D6WUL5XM.js";import"./Collection-BO8FiyTI.js";import"./CollectionBuilder-D--x571F.js";import"./SelectionIndicator-4Vq_x9qO.js";import"./Separator-BkJE4Q3g.js";import"./SelectionManager-tiaDTVEq.js";import"./useEvent-BSeSfGFl.js";import"./FocusScope-DMp-Wrqn.js";import"./ColumnLayout-CJ9fYmaH.js";import"./Avatar-DxbDv-Tu.js";import"./AlertIcon-Dd6PrMrE.js";import"./Image-DsfHBIJV.js";import"./Link-Bv7hTzVt.js";import"./OptionsButton-DZsIpcN1.js";import"./ButtonView-B6yYdM6G.js";import"./ContextMenuTriggerView-B6ULJahB.js";import"./ContextMenuTrigger-FKBCTptq.js";import"./OverlayTrigger-emDMmbR-.js";import"./OverlayContextProvider-BRD-Zchx.js";import"./FieldError-B5Qpz102.js";import"./FieldError-CqpMndtu.js";import"./AlertText-DKiC9lQT.js";import"./useRef-D2U0Fbj7.js";import"./LoadingSpinner-DNWLy5dx.js";import"./remote-HwzzztjA.js";import"./Heading-BOaxUh_X.js";import"./useFormValidation-CE50eLV8.js";import"./Input-CALEgZ95.js";import"./EmulatedBoldText-CbJEOPDL.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
