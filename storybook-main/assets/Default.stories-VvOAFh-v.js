import{r as x,j as e}from"./iframe-DQCyQvTg.js";import{F as t}from"./FileDropZone-CzWvS6w2.js";import{S as d}from"./Section-1ggmv6HF.js";import{F as u}from"./FileCardList-BPuJ8ax5.js";import{F}from"./FileCard-CtJ6ovAx.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-Db-hkPs1.js";import{B as f}from"./Button-BuvZu5FH.js";import{A as b}from"./ActionGroup-BrDI4M3_.js";import{_ as j,$ as B}from"./IconWarning-BsBEN2i7.js";import{H as g}from"./Heading-BJYyanRr.js";import{F as h}from"./FileField-D86b3FdH.js";import{T as O}from"./Text-Dy3rf6Sf.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bbyb9Rlu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./index-vqo-_XTj.js";import"./useFieldComponent-BQB8jFXR.js";import"./utils-B-47qEzM.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-dCr4PfuU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CgNKGrTG.js";import"./useFocus-MHK9Bgmz.js";import"./useCollator-Dr7oYRVM.js";import"./context-BVR1xsiE.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./useFocusRing-H28TAT4s.js";import"./Button-BqVXXUXM.js";import"./ProgressBar-CvxDZlN2.js";import"./Label-CVwZ8mvh.js";import"./Hidden-B1onkdes.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BDNCZxcv.js";import"./useFocusable-Bi17AcBv.js";import"./VisuallyHidden-DTZCmZoD.js";import"./ContextMenuSection-CRl2t-Sj.js";import"./Action-BFqm9nZf.js";import"./context-CMTFLv9Z.js";import"./useStatic-XhnoWRRg.js";import"./browser-NLzega1a.js";import"./getActionGroupSlot--rri3fdD.js";import"./dynamic-CLdLSboA.js";import"./Dialog-l1ZI7Q43.js";import"./RSPContexts-CbSXEXlJ.js";import"./OverlayArrow-BRUQmdEx.js";import"./useControlledState-CSGe32xq.js";import"./Collection-Dvx0GJ5C.js";import"./CollectionBuilder-G7sQB9cg.js";import"./SelectionIndicator-BqvLdNe9.js";import"./Separator-CkdPEWsl.js";import"./SelectionManager-C7NRhxAL.js";import"./useEvent-BSjlxpLx.js";import"./FocusScope-DgjO-P_8.js";import"./ColumnLayout-CkLJexV6.js";import"./Avatar-BIAW3N1Z.js";import"./AlertIcon-BB94ofCu.js";import"./Image-Dgv7j6eX.js";import"./Link-p8kO255Q.js";import"./OptionsButton-D9yQ6euR.js";import"./ButtonView-DfoPfFoM.js";import"./ContextMenuTriggerView-DiXBH9Kz.js";import"./ContextMenuTrigger-CJr1EBXJ.js";import"./OverlayTrigger-nB7PjmO3.js";import"./OverlayContextProvider-CVH0IpO2.js";import"./FieldError-Db3KB_ND.js";import"./FieldError-BsUvM9FZ.js";import"./AlertText-D-ZVlg04.js";import"./useRef-DxaR4mJH.js";import"./LoadingSpinner-C2L8sUPo.js";import"./remote-DwYKdEj8.js";import"./Heading-CbA3ZoPp.js";import"./useFormValidation-DWTcfSBl.js";import"./Input-kTwoopyR.js";import"./EmulatedBoldText-BkRIKdgp.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
