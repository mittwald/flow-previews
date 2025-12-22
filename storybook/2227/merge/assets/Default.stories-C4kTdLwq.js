import{r as x,j as e}from"./iframe-XJIuIQsX.js";import{F as t}from"./FileDropZone-DSKg4dQr.js";import{S as d}from"./Section-ec-jB7Az.js";import{F as u}from"./FileCardList-Ds7t-Puc.js";import{F}from"./FileCard-C-tptPTq.js";import{u as S,F as C,t as D}from"./Form-DR-KRktv.js";import{S as y}from"./ResetButton-BrV1pp9P.js";import{B as f}from"./Button-B3qcLgg7.js";import{A as b}from"./ActionGroup-CXEtNV5m.js";import{Z as j,_ as B}from"./IconWarning-Dh1UuZN-.js";import{H as g}from"./Heading-M0mrZOb3.js";import{F as h}from"./FileField-DXIqtVqD.js";import{T as O}from"./Text-CrMkSLGe.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bj_xgEtw.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaQJj-Fe.js";import"./index-BFrTfb9P.js";import"./index-D1QpPuaY.js";import"./useFieldComponent-HT5XfbIG.js";import"./utils-OSbsBMtV.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CQ_rpqob.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B1JuXYfT.js";import"./useFocus-CATpB0h3.js";import"./useCollator-pMxc4jG8.js";import"./context-DW91oCRu.js";import"./useLocalizedStringFormatter-CdJGeOAf.js";import"./Button-BAG3sHuP.js";import"./ProgressBar-BrwhHLJj.js";import"./Label-1nVOodib.js";import"./Hidden-CYqdvOeA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DEhEh88f.js";import"./useFocusRing-CeYeFZfu.js";import"./useFocusable-DTUbS3BZ.js";import"./VisuallyHidden-ClcaDoKJ.js";import"./ContextMenuSection-Bgb904Cq.js";import"./Action-Dpd9i1rx.js";import"./context-BdOjCQgT.js";import"./useStatic-Badjbl0n.js";import"./browser-BhoN5hvb.js";import"./getActionGroupSlot-Cw46BERC.js";import"./dynamic-BLJCE7jR.js";import"./Dialog-DrSVAvJg.js";import"./RSPContexts-CKZ7RQV4.js";import"./OverlayArrow-Coj8W95X.js";import"./useControlledState-B6b60Ty3.js";import"./Collection-DBAq6tm-.js";import"./CollectionBuilder-DFJ49rUK.js";import"./SelectionIndicator-rwMeyIsD.js";import"./Separator-5XoV32yu.js";import"./SelectionManager-BTpprE_r.js";import"./useEvent-c3AV6770.js";import"./FocusScope-XmTgMg9O.js";import"./ColumnLayout-QeLmdom1.js";import"./Avatar-BqO7Cmqn.js";import"./AlertIcon-u3QLPLoz.js";import"./Image-CaLdAgKW.js";import"./Link-D8dU5LFf.js";import"./OptionsButton-CsUTP5_I.js";import"./ButtonView-cg3Y_u88.js";import"./ContextMenuTriggerView-BhU9q2gi.js";import"./ContextMenuTrigger-D8lefVnY.js";import"./OverlayTrigger-CKuY1bLi.js";import"./OverlayContextProvider-C-39O9JG.js";import"./FieldError-CSSPElPx.js";import"./FieldError-oVAZyPGl.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Co0EoVoZ.js";import"./LoadingSpinner-CuoS48qC.js";import"./remote-Ep0bJUq6.js";import"./Heading-BJR3kI60.js";import"./useFormValidation-DwGL1Z7V.js";import"./Input-CQdNUZHp.js";import"./EmulatedBoldText-CPYC_Ehx.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
