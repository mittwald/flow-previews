import{r as x,j as e}from"./iframe-BEQP9uXD.js";import{F as t}from"./FileDropZone-IFfoAYwb.js";import{S as d}from"./Section-CiWy9GDM.js";import{F as u}from"./FileCardList-Cs8wxmfA.js";import{F}from"./FileCard-C1tt4-9G.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DdaJGn48.js";import{B as f}from"./Button-C9UvHdV0.js";import{A as b}from"./ActionGroup-BV_YmXox.js";import{$ as j,a0 as B}from"./IconWarning-BArZWwdB.js";import{H as g}from"./Heading-Cy1GdqFq.js";import{F as h}from"./FileField-CK0sk-B_.js";import{T as O}from"./Text-BQmA_ZwI.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-mfdCtSsy.js";import"./clsx-B-dksMZM.js";import"./flowComponent-84Jhttbw.js";import"./index-CA9bKJEG.js";import"./index-COHhcPte.js";import"./useFieldComponent-BKGW_bMF.js";import"./utils-CvsvUfaH.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Dh3KhDzI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BaFA04Xw.js";import"./useFocus-DENBDZ81.js";import"./useCollator-Dxy4kckI.js";import"./context-DjvYmnOm.js";import"./useLocalizedStringFormatter-CVsWWxAE.js";import"./Button-BLAt4FO4.js";import"./ProgressBar-CsmWPwQb.js";import"./Label-DEkvlGAI.js";import"./Hidden-BRgRW0lF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BjEuYOvC.js";import"./useFocusRing-QizZnVOy.js";import"./useFocusable-WQftMZYd.js";import"./VisuallyHidden-BLDMQ79k.js";import"./ContextMenuSection-Xp9S-BLD.js";import"./Action-DdIVuJ0B.js";import"./context-DGvxxzOj.js";import"./useStatic-DVE9BYeG.js";import"./browser-D8S-En3T.js";import"./getActionGroupSlot-B63naLE5.js";import"./dynamic-BAr_-wMD.js";import"./Dialog-DQ54l-rN.js";import"./RSPContexts-22nxuYm5.js";import"./OverlayArrow-B0-Exi0z.js";import"./useControlledState-IAFCDfDW.js";import"./Collection-DrDb7tKr.js";import"./CollectionBuilder-DgIT4THq.js";import"./SelectionIndicator-Baqg4pYL.js";import"./Separator-CwdQYf1y.js";import"./SelectionManager-Cg9_nPGa.js";import"./useEvent-d-xS6mf7.js";import"./FocusScope-D5mGJCBF.js";import"./ColumnLayout-uw0gFhJ1.js";import"./Avatar-CUar7AxW.js";import"./AlertIcon-aU-KTTvT.js";import"./Image-Dv7sJsGy.js";import"./Link-xt6yF4pl.js";import"./OptionsButton-Bwc5KjvV.js";import"./ButtonView-Cr-9skPP.js";import"./ContextMenuTriggerView-gWHoED_R.js";import"./ContextMenuTrigger-DOg9nCJg.js";import"./OverlayTrigger-DCrQupdb.js";import"./OverlayContextProvider-DPAGiuqq.js";import"./FieldError-DcwQV8mK.js";import"./FieldError-WngkcyXU.js";import"./AlertText-J3TBTDdf.js";import"./useRef-CBNU1Kxo.js";import"./LoadingSpinner-Dfl-93Ba.js";import"./remote-Ba3iobwA.js";import"./Heading-KUn82X_l.js";import"./useFormValidation-Kra5hQIO.js";import"./Input-Cnu3k7gd.js";import"./EmulatedBoldText-BYVdDx5b.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
