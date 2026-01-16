import{r as x,j as e}from"./iframe-CIXg2wml.js";import{F as t}from"./FileDropZone-Cli8ky73.js";import{S as d}from"./Section-BHH0DwO5.js";import{F as u}from"./FileCardList-CRwkVeCU.js";import{F}from"./FileCard-Ynqx6H-B.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-C1eP4EZB.js";import{B as f}from"./Button-BNUMHVa-.js";import{A as b}from"./ActionGroup-D8b5vxgA.js";import{$ as j,a0 as B}from"./IconWarning-CiSujg9K.js";import{H as g}from"./Heading-IDnu3Squ.js";import{F as h}from"./FileField-DnLhkXsu.js";import{T as O}from"./Text-ClE4EaJv.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bjz4TszK.js";import"./clsx-B-dksMZM.js";import"./flowComponent-2SDDcL6i.js";import"./index-stwZ4S38.js";import"./index-CUACQQJf.js";import"./useFieldComponent-D7V8J4vf.js";import"./utils-E3QCR4Ei.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BTcAnKOQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-pvILaDrT.js";import"./useFocus-Xgz2P1v-.js";import"./useCollator-nDdvYdK7.js";import"./context-TKY6ae7T.js";import"./useLocalizedStringFormatter-DQ68Yc1-.js";import"./Button-BbDeItRQ.js";import"./ProgressBar-CFDr9Wxg.js";import"./Label-DkYkYhBQ.js";import"./Hidden-CGz-Nf89.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C_LDf41x.js";import"./useFocusRing-CJfArHTm.js";import"./useFocusable-LSbGRyyR.js";import"./VisuallyHidden-XLC_SZ8x.js";import"./ContextMenuSection-C_CrFgfB.js";import"./Action-BuQCX6jm.js";import"./context-CXkwD4h5.js";import"./useStatic-CosBs7oI.js";import"./browser-CYeJE0Iy.js";import"./getActionGroupSlot-DDSDNzLp.js";import"./dynamic-DkFDoLPd.js";import"./Dialog-f9GqGINB.js";import"./RSPContexts-CMEo-sGH.js";import"./OverlayArrow-Bgb8SBf8.js";import"./useControlledState-euBd3hty.js";import"./Collection-PnRWL8bH.js";import"./CollectionBuilder-CsxYH4iw.js";import"./SelectionIndicator-Ck0MHypk.js";import"./Separator-BD9AYapb.js";import"./SelectionManager-C-rzUvsK.js";import"./useEvent-D8tLlxQx.js";import"./FocusScope-BVD53JA4.js";import"./ColumnLayout-CYLfrdcV.js";import"./Avatar-DwHlOaa1.js";import"./AlertIcon-DJUqjVOR.js";import"./Image-ByUXwVFP.js";import"./Link-hyB-uv4w.js";import"./OptionsButton-CRhGZ6kp.js";import"./ButtonView-BpZiG3F4.js";import"./ContextMenuTriggerView-DLRZiQWE.js";import"./ContextMenuTrigger-CfrI6N5Y.js";import"./OverlayTrigger-Gn6syf8M.js";import"./OverlayContextProvider-BncgeVHa.js";import"./FieldError-BH2vnwI0.js";import"./FieldError-B2EiL9vq.js";import"./AlertText-Cyx_yayU.js";import"./useRef-BLTU0nYb.js";import"./LoadingSpinner-DwfvHd6g.js";import"./remote-8tD3tcl0.js";import"./Heading-NdZmHCy8.js";import"./useFormValidation-B5rYBS3I.js";import"./Input-DGQ1K2ts.js";import"./EmulatedBoldText--LsvyM20.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
