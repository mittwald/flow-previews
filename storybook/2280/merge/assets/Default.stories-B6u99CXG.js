import{r as x,j as e}from"./iframe-BE2KIrNP.js";import{F as t}from"./FileDropZone-CRLTe-_Q.js";import{S as d}from"./Section-Bmw4NyfW.js";import{F as u}from"./FileCardList-DbcAiskV.js";import{F}from"./FileCard-cFKZS7Lm.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-8M30IsUK.js";import{B as f}from"./Button-DTG6_onu.js";import{A as b}from"./ActionGroup-DqHolqL_.js";import{$ as j,a0 as B}from"./IconWarning-pheKtU5F.js";import{H as g}from"./Heading-C03aqcaL.js";import{F as h}from"./FileField-BHx1E7cj.js";import{T as O}from"./Text-99qeYwSw.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Cn3A7VgR.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DqHsBCp0.js";import"./index-C9kIH1f3.js";import"./index-BeVui2PP.js";import"./useFieldComponent-8fOA-m-u.js";import"./utils-CetDBScY.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D-kvbByn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DlCzrbVx.js";import"./useFocus-D19rPtJ7.js";import"./useCollator-Dag142_N.js";import"./context-Cl9Jg8XT.js";import"./useLocalizedStringFormatter-Djj1Dsk8.js";import"./useFocusRing-CXSA7vN6.js";import"./Button-DX-gXX1k.js";import"./ProgressBar-Cdh6Q7W9.js";import"./Label-BTkJrjJz.js";import"./Hidden-DdzvMSsl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-wlnUrUkL.js";import"./useFocusable-PS7GdwKW.js";import"./VisuallyHidden-KypC6JrD.js";import"./ContextMenuSection-DMoRGuCw.js";import"./Action-CG5-yXUx.js";import"./context-DvuBD7_y.js";import"./useStatic-DHPwu1RD.js";import"./browser-B5VZQlUE.js";import"./getActionGroupSlot-BfB-qZk-.js";import"./dynamic-DKw0AuDc.js";import"./Dialog-C3P1Ogqg.js";import"./RSPContexts-B5Mb9Vey.js";import"./OverlayArrow-B7hxVbyO.js";import"./useControlledState-O9ITVI5k.js";import"./Collection-Bn556UVc.js";import"./CollectionBuilder-CFCUOZmQ.js";import"./SelectionIndicator-B0iQvxUu.js";import"./Separator-kwAL4EyO.js";import"./SelectionManager-BaF0UXuj.js";import"./useEvent-B1oFJvVb.js";import"./FocusScope-BDfy_Mz6.js";import"./ColumnLayout-D4lx1Qwo.js";import"./Avatar-St5qIscv.js";import"./AlertIcon-BSS6Y7Aa.js";import"./Image-DRB1qpyA.js";import"./Link-DFoDqMYl.js";import"./OptionsButton-DFW6P-Z6.js";import"./ButtonView-BKjPbsQ0.js";import"./ContextMenuTriggerView-Crx_ZTr-.js";import"./ContextMenuTrigger-Bfqio4yp.js";import"./OverlayTrigger-DnihfWmG.js";import"./OverlayContextProvider-DV_-MJEg.js";import"./FieldError-DLWZre89.js";import"./FieldError-CYuYbE_Y.js";import"./AlertText-34tBbtSq.js";import"./useRef-fd8U2Hk2.js";import"./LoadingSpinner-CpXmc85g.js";import"./remote-BDPI1xTN.js";import"./Heading-CDAU15CX.js";import"./useFormValidation-BVWNV9RZ.js";import"./Input-lgtpKVFw.js";import"./EmulatedBoldText-CPMF4SHl.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
