import{r as x,j as e}from"./iframe-BoA7YzYm.js";import{F as t}from"./FileDropZone-Cj3d10QZ.js";import{S as d}from"./Section-MYLyhPiL.js";import{F as u}from"./FileCardList-BCCUB3TR.js";import{F}from"./FileCard-DtGv2NZx.js";import{u as S,F as C,t as D}from"./Form-DLwGH580.js";import{S as y}from"./ResetButton-BTdRGMm7.js";import{B as f}from"./Button-BKFimoLG.js";import{A as b}from"./ActionGroup-CAgPe75f.js";import{Z as j,_ as B}from"./IconWarning-Cm4x5FHH.js";import{H as g}from"./Heading-gW7z3NjW.js";import{F as h}from"./FileField-CH44z6T2.js";import{T as O}from"./Text-Dcujjsgx.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-SdPVwbRa.js";import"./clsx-B-dksMZM.js";import"./flowComponent-rXkph_fu.js";import"./index-DXjuNE_i.js";import"./index-C8IfwtBf.js";import"./useFieldComponent-DkEUVrE8.js";import"./utils-CbCfmbCJ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DzES3Axw.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BJjmJvn4.js";import"./useFocus-0w8IxMP9.js";import"./useCollator-DeMqSZ32.js";import"./context-Bl3IUlM5.js";import"./useLocalizedStringFormatter-BmdJpMCj.js";import"./Button-BSweg4_1.js";import"./ProgressBar-0Lez36-3.js";import"./Label-CIY5uMr1.js";import"./Hidden-COFYe48C.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VWzB255U.js";import"./useFocusRing-QIpAUb-m.js";import"./useFocusable-03sk398M.js";import"./VisuallyHidden-ulLndJxN.js";import"./ContextMenuSection-CVwpYLx9.js";import"./Action-DzFCrVY1.js";import"./context-Cs30ZfjP.js";import"./useStatic-BAyQxveA.js";import"./browser--2iaZute.js";import"./getActionGroupSlot-Cyrp6itk.js";import"./dynamic-DYpyzP7H.js";import"./Dialog-BDOoN61w.js";import"./RSPContexts-D0KJsdCX.js";import"./OverlayArrow-DNHvsvRZ.js";import"./useControlledState-Bptfp7LK.js";import"./Collection-DjWHVVf5.js";import"./CollectionBuilder-B_pnCfkc.js";import"./SelectionIndicator-fGxLhP25.js";import"./Separator-DSRy3Jbj.js";import"./SelectionManager-B2bGzozG.js";import"./useEvent-B6QIfMFm.js";import"./FocusScope-ewaHP7Wk.js";import"./ColumnLayout-DneT1EzW.js";import"./Avatar-nU7e8ZWQ.js";import"./AlertIcon-Cq_v5HPU.js";import"./Image-CZmdwuUD.js";import"./Link-CWHnrTIN.js";import"./OptionsButton-5-aS0Etb.js";import"./ButtonView-K50G0lcC.js";import"./ContextMenuTriggerView-DP8OHala.js";import"./ContextMenuTrigger-C3SW7oKC.js";import"./OverlayTrigger-sv_J9YIM.js";import"./OverlayContextProvider-CUahq4yj.js";import"./FieldError-CkVfHT3s.js";import"./FieldError-DIrg2qiC.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DG5Ef12W.js";import"./LoadingSpinner-CJmPD5N7.js";import"./remote-W2BsjsJq.js";import"./Heading-BxB-LiTB.js";import"./useFormValidation-D99W395Z.js";import"./Input-BsUxPOGC.js";import"./EmulatedBoldText-B6CuOWoW.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
