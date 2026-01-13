import{r as x,j as e}from"./iframe-YnzBkBP1.js";import{F as t}from"./FileDropZone-CCQ0yFQq.js";import{S as d}from"./Section-BF-oFw9b.js";import{F as u}from"./FileCardList-jiQNYvaN.js";import{F}from"./FileCard-DTpltW3A.js";import{u as S,F as C,t as D}from"./Form-BEcwLgvh.js";import{S as y}from"./ResetButton-DTcZkv1G.js";import{B as f}from"./Button-BvFsSv02.js";import{A as b}from"./ActionGroup-Cw5QmZ4Y.js";import{$ as j,a0 as B}from"./IconWarning-CfrgrK5w.js";import{H as g}from"./Heading-BiUnALLM.js";import{F as h}from"./FileField-B9T6IyEE.js";import{T as O}from"./Text-CErt044E.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DBnyGlvj.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxoafP0O.js";import"./index-CbL05fU3.js";import"./index-C9L7IfWC.js";import"./useFieldComponent-BnDxVRXr.js";import"./utils-CRkRQkMM.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C_7kOqPJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DyCvkQuz.js";import"./useFocus-CEJfh5Ox.js";import"./useCollator-BTyxNuGL.js";import"./context-Dc351FW_.js";import"./useLocalizedStringFormatter-6QnOnkyA.js";import"./Button-DfMPCk5A.js";import"./ProgressBar-139JbARe.js";import"./Label-TsHYY7iw.js";import"./Hidden-Dq31wpMg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-NgaP4MvP.js";import"./useFocusRing-B9e_t0Os.js";import"./useFocusable-BIzKoTBr.js";import"./VisuallyHidden-BsENeWhO.js";import"./ContextMenuSection-Bzcd8RVm.js";import"./Action-DDQNlr1F.js";import"./context-CGFBFC28.js";import"./useStatic-9o3ywd_N.js";import"./browser-Sf85iaAd.js";import"./getActionGroupSlot-BNJAUwyr.js";import"./dynamic-DAiG6Vmq.js";import"./Dialog-971pU4tV.js";import"./RSPContexts-Mp6syAgQ.js";import"./OverlayArrow--71CUfvh.js";import"./useControlledState-DwL8StHF.js";import"./Collection-FfZcU2DX.js";import"./CollectionBuilder-DNUE6McV.js";import"./SelectionIndicator-DnZvOIyV.js";import"./Separator-h_x_t96Z.js";import"./SelectionManager-rmSH4beD.js";import"./useEvent-CmRPI6I-.js";import"./FocusScope-D2Uy30lG.js";import"./ColumnLayout-NaPxaokp.js";import"./Avatar-iwY6Vaoc.js";import"./AlertIcon-DE5OYWVT.js";import"./Image-A2iC_LjC.js";import"./Link-DQ0PSomW.js";import"./OptionsButton-DvbANotD.js";import"./ButtonView-C86qpyt3.js";import"./ContextMenuTriggerView-CLrIWqqE.js";import"./ContextMenuTrigger-a2bNZsOh.js";import"./OverlayTrigger-B11Ab0Yr.js";import"./OverlayContextProvider-JV42Gzf_.js";import"./FieldError-CkABddBr.js";import"./FieldError-BIVQARwB.js";import"./AlertText-D2cGz-gI.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Db3bAIIe.js";import"./LoadingSpinner-z9BQWCCX.js";import"./remote-psJ_k7Km.js";import"./Heading-ChrBU0Of.js";import"./useFormValidation-MbSolyNi.js";import"./Input-9KD990Lp.js";import"./EmulatedBoldText-Dl4jMQ55.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const rr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,rr as __namedExportsOrder,er as default};
