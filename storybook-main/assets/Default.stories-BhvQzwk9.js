import{r as x,j as e}from"./iframe-Dnm846PF.js";import{F as t}from"./FileDropZone-CzUXIhC8.js";import{S as d}from"./Section-D9UON_ke.js";import{F as u}from"./FileCardList-BcnpdRBm.js";import{F}from"./FileCard-ay4jUk-b.js";import{u as S,F as C,t as D}from"./Form-B68Gpafo.js";import{S as y}from"./ResetButton-BcLsTpCu.js";import{B as f}from"./Button-D3IXyzzj.js";import{A as b}from"./ActionGroup-BXn_SmSG.js";import{Z as j,_ as B}from"./IconWarning-CExbEpDP.js";import{H as g}from"./Heading-DIDy3S_I.js";import{F as h}from"./FileField-LhdkpeQo.js";import{T as O}from"./Text-DtZxu6g8.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DrKokRdr.js";import"./clsx-B-dksMZM.js";import"./flowComponent-S63Cq1sy.js";import"./index-Db1dbbsL.js";import"./index-sBHKlQZD.js";import"./useFieldComponent-CW3QYPg0.js";import"./utils-VDIU0BnD.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-1v5GZWlz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-pLNL7Cvk.js";import"./useFocus-D-7SE4fF.js";import"./useCollator-mQoUFjwt.js";import"./context-CoOH5oCy.js";import"./useLocalizedStringFormatter-BqtI09-_.js";import"./Button-B-4mNKoj.js";import"./ProgressBar-BIFWcEy_.js";import"./Label-B2apKb0w.js";import"./Hidden-1UUWpuD7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CU4gAXU4.js";import"./useFocusRing-CANRw9LC.js";import"./useFocusable-DgTTkttD.js";import"./VisuallyHidden-C6zUvnKf.js";import"./ContextMenuSection-C10PM8Bo.js";import"./Action-emK0mmvz.js";import"./context-CfRQ154N.js";import"./useStatic-D4cjHvMF.js";import"./browser-DEiAhc6G.js";import"./getActionGroupSlot-D_nb0VqF.js";import"./dynamic-CwAvPpRM.js";import"./Dialog-BfuTmdIH.js";import"./RSPContexts-DkLfIxB1.js";import"./OverlayArrow-B81MSBvx.js";import"./useControlledState-CkFAdRGn.js";import"./Collection-CfmXzWv2.js";import"./CollectionBuilder-1cEuD-Tq.js";import"./SelectionIndicator-B7sCGTL_.js";import"./Separator-D5s42kTO.js";import"./SelectionManager-Bx2R39VR.js";import"./useEvent-CkeCMC1K.js";import"./FocusScope-DH4o0wc_.js";import"./ColumnLayout-254Oc0rn.js";import"./Avatar-CUcr9Fyg.js";import"./AlertIcon-7aOFMVRI.js";import"./Image-K9DYUJ63.js";import"./Link-CvmmRiOt.js";import"./OptionsButton-Bwu7AsLa.js";import"./ButtonView-BMLSQLb1.js";import"./ContextMenuTriggerView-CX7ZHo8Y.js";import"./ContextMenuTrigger-DPg2ZRwx.js";import"./OverlayTrigger-D2F_jz3v.js";import"./OverlayContextProvider-e7mKKUrq.js";import"./FieldError-Ze0pQjLj.js";import"./FieldError-BJ4Wbc9z.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-opIQLsXY.js";import"./LoadingSpinner-DASF7rgv.js";import"./remote-XcyFsW5Q.js";import"./Heading-BVtLIbvB.js";import"./useFormValidation-CGpO-wMA.js";import"./Input-vek2Lmza.js";import"./EmulatedBoldText-DH6NWkOG.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
