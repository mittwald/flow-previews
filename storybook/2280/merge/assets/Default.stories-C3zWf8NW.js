import{r as x,j as e}from"./iframe-DXKyl4qq.js";import{F as t}from"./FileDropZone-DyHOuRAq.js";import{S as d}from"./Section-B8nblZQJ.js";import{F as u}from"./FileCardList-c2r5CMxj.js";import{F}from"./FileCard-Btdr06ar.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-SPfrEBJU.js";import{B as f}from"./Button-0acoIVQZ.js";import{A as b}from"./ActionGroup-CDY92rej.js";import{$ as j,a0 as B}from"./IconWarning-BTtxekbk.js";import{H as g}from"./Heading-C5r2I8c5.js";import{F as h}from"./FileField-Bf0qtVOr.js";import{T as O}from"./Text-DlQihciA.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-kJwrACmA.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGVR20ME.js";import"./index-CGttF0w9.js";import"./index-CK0x1Z6h.js";import"./useFieldComponent-DrLbNusb.js";import"./utils-Cgx1j8_A.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Dy69l_TS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXFTMfS2.js";import"./useFocus-BAjbVDBz.js";import"./useCollator-D4u7p9z_.js";import"./context-C5-138xc.js";import"./useLocalizedStringFormatter-DsWoRU9M.js";import"./useFocusRing-DoixN5z_.js";import"./Button-O8jlFCas.js";import"./ProgressBar-C7LcFD3o.js";import"./Label-Dkou43m_.js";import"./Hidden-CaezFR51.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-MFF54RNh.js";import"./useFocusable-DAwaDAhU.js";import"./VisuallyHidden-XnRwWdWi.js";import"./ContextMenuSection-BIRP1Ixf.js";import"./Action-eA8jYG3_.js";import"./context-9N5Shw7P.js";import"./useStatic-CdHxY_ZS.js";import"./browser-Q1FjFR8E.js";import"./getActionGroupSlot-CBJ6_xHE.js";import"./dynamic-CaArDE2O.js";import"./Dialog-B1psX4sF.js";import"./RSPContexts-DBmlKLt8.js";import"./OverlayArrow-BvQnSdeu.js";import"./useControlledState-DW1EgN0_.js";import"./Collection-9k1PtGDv.js";import"./CollectionBuilder-Ur5Id6rg.js";import"./SelectionIndicator-BncnqGmj.js";import"./Separator-CtwDwrgV.js";import"./SelectionManager-Dx4eaKjX.js";import"./useEvent-B4GDMgLt.js";import"./FocusScope-CeuTnAxx.js";import"./ColumnLayout-B6knVDhR.js";import"./Avatar-BC8WAal1.js";import"./AlertIcon-BU8g3GYG.js";import"./Image-B6BoT_La.js";import"./Link-CEK7ew7i.js";import"./OptionsButton-OQeAtPvp.js";import"./ButtonView-vjQ-21-e.js";import"./ContextMenuTriggerView-7033UQC1.js";import"./ContextMenuTrigger-fF4tX0bh.js";import"./OverlayTrigger-BY_70k08.js";import"./OverlayContextProvider-M458RI5v.js";import"./FieldError-hPaNUVVF.js";import"./FieldError-CXwp2WFY.js";import"./AlertText-BbpMfzbs.js";import"./useRef-CVzViYXT.js";import"./LoadingSpinner-NKyffFLh.js";import"./remote-5V97MXBJ.js";import"./Heading-CG4_-w1-.js";import"./useFormValidation-1Ohd4Vow.js";import"./Input-Bhgje7aH.js";import"./EmulatedBoldText-Bw3TIL22.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
