import{r as x,j as e}from"./iframe-C5hcdLE6.js";import{F as t}from"./FileDropZone-Dk5v-5Be.js";import{S as d}from"./Section-Zn6loSDR.js";import{F as u}from"./FileCardList-yDSMaHmL.js";import{F}from"./FileCard-DH2B4syL.js";import{u as S,F as C,t as D}from"./Form-BLPdapkh.js";import{S as y}from"./ResetButton-Ciqh6yoP.js";import{B as f}from"./Button-CzDqHNvA.js";import{A as b}from"./ActionGroup-BsDXgUZX.js";import{$ as j,a0 as B}from"./IconWarning-BGpxRwU-.js";import{H as g}from"./Heading-DWTXooi-.js";import{F as h}from"./FileField-Bs9KqNsZ.js";import{T as O}from"./Text-D8uazRXK.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-nbS5k4BC.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DfDzLOdb.js";import"./index-CrcBTJfi.js";import"./index-ClIq6yug.js";import"./useFieldComponent-t_EOnv-a.js";import"./utils-B3GIFt3C.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-79_FySwa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DIyDpHH2.js";import"./useFocus-Fr_BfSOs.js";import"./useCollator-C0ggjMz1.js";import"./context-E1uxYtQv.js";import"./useLocalizedStringFormatter-DggJiG-V.js";import"./Button-CX4O7Muw.js";import"./ProgressBar-Cgmeu2qU.js";import"./Label-Cdw77YDw.js";import"./Hidden-CzLEuVYW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyQlFp9g.js";import"./useFocusRing-B86g4qKF.js";import"./useFocusable-xzWj-wm9.js";import"./VisuallyHidden-n5FPXG3E.js";import"./ContextMenuSection-Bm4KM0hd.js";import"./Action-CDW165y9.js";import"./context-kwHKhOde.js";import"./useStatic-CWBOctoH.js";import"./browser-BJ6k16eC.js";import"./getActionGroupSlot-CVriiRzc.js";import"./dynamic-DE5jfE1R.js";import"./Dialog-D66iw0U8.js";import"./RSPContexts-BMj0h4_3.js";import"./OverlayArrow-DN70rght.js";import"./useControlledState-C9jQ4AxE.js";import"./Collection-DXvYJhLm.js";import"./CollectionBuilder-CZUA7JnX.js";import"./SelectionIndicator-B5s74P3-.js";import"./Separator-DaQ1DUjO.js";import"./SelectionManager-Bbl3GIce.js";import"./useEvent-Drml-VA-.js";import"./FocusScope-CQ3JVi5A.js";import"./ColumnLayout-DB0ermnn.js";import"./Avatar-ssQ6-Ue6.js";import"./AlertIcon-DM3zFbIf.js";import"./Image-CRZjLDFs.js";import"./Link-RRZAz5HG.js";import"./OptionsButton-B5gUfj8F.js";import"./ButtonView-CK7zDOKv.js";import"./ContextMenuTriggerView-DtN_H-4d.js";import"./ContextMenuTrigger-DEsmcf_G.js";import"./OverlayTrigger-DT2_gJPw.js";import"./OverlayContextProvider-CVTCD2MZ.js";import"./FieldError-CRlQMLVN.js";import"./FieldError-CqTmSUdd.js";import"./AlertText-Dgs9QBLV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-BfcAVfiD.js";import"./LoadingSpinner-hJnys7-d.js";import"./remote-DfH19er1.js";import"./Heading-Y84dBjpP.js";import"./useFormValidation-BJOScXHE.js";import"./Input-0x1obYXp.js";import"./EmulatedBoldText-G7OdIUUd.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
