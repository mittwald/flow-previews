import{r as x,j as e}from"./iframe-CCG9iH9q.js";import{F as t}from"./FileDropZone-B_KMzpe6.js";import{S as d}from"./Section-DbhTGHPe.js";import{F as u}from"./FileCardList-C28KiuUm.js";import{F}from"./FileCard-eyAMCPDf.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BqZNOOe-.js";import{B as f}from"./Button-DszeRQWk.js";import{A as b}from"./ActionGroup-CqC9K9e5.js";import{a0 as j,a1 as B}from"./IconWarning-CKuAFgzi.js";import{H as g}from"./Heading-DiIAAbeS.js";import{F as h}from"./FileField-DrSuy6G5.js";import{T as O}from"./Text-CqiRKP9V.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-YwAU5mEC.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DtMp-09u.js";import"./index-rcZGBqb0.js";import"./index-DO8RY2JU.js";import"./useFieldComponent-BO1aRG8J.js";import"./utils-BqjYSsY0.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CsZp0s5y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWkbOtE9.js";import"./useFocus-DQtiJNjW.js";import"./useCollator-C1I9ImG_.js";import"./context-BOE3Zx9s.js";import"./useLocalizedStringFormatter-BayblNF2.js";import"./useFocusRing-DEew3vp8.js";import"./Button-BmDLEeLi.js";import"./ProgressBar-NeUI6tVT.js";import"./Label-Bqehi3yR.js";import"./Hidden-DP_c1-uJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C9nCYq1D.js";import"./useFocusable-C9iBP5e4.js";import"./VisuallyHidden-B8BDvwZm.js";import"./ContextMenuSection-DkVhFe3O.js";import"./ActionBatch-BwDlid4r.js";import"./useOverlayController-B8ExGaeg.js";import"./useStatic-DZaf9Eli.js";import"./browser-DlPLk6Tx.js";import"./getActionGroupSlot-ZV4GNxDq.js";import"./dynamic-DVtvH1qO.js";import"./Dialog-Bvzkt_Dq.js";import"./RSPContexts-Cj7-Wn-7.js";import"./OverlayArrow-O5F9zlGE.js";import"./useControlledState-DQCduMNG.js";import"./Collection-BppDt4cQ.js";import"./CollectionBuilder--dOyJv1i.js";import"./SelectionIndicator-CG-R7p16.js";import"./Separator-IezdCtOl.js";import"./SelectionManager-BQan4uct.js";import"./useEvent-CqAdQvXR.js";import"./FocusScope-CGp51FRM.js";import"./ColumnLayout-ByNS1VhW.js";import"./Avatar-Dqq5Noky.js";import"./AlertIcon-BWG972Pn.js";import"./Image-Cgz2oU_d.js";import"./Link-TVNorRgK.js";import"./OptionsButton-Cn1nn87h.js";import"./ButtonView-C8fOFLKK.js";import"./ContextMenuTriggerView-Xqkw1Wbs.js";import"./ContextMenuTrigger-inVeFQfz.js";import"./OverlayTrigger-BffquD90.js";import"./OverlayContextProvider-CJwB4ZlW.js";import"./FieldError-C6WCZxmP.js";import"./FieldError-IbwLA4qq.js";import"./AlertText-BBv4eV07.js";import"./ActionGroupView-BUNvX8yC.js";import"./Content-CtXh-1sB.js";import"./Modal-CIlySsMs.js";import"./Overlay-Bt-WcI45.js";import"./LoadingSpinner-GybBfiLr.js";import"./Flex-CGGRYbEQ.js";import"./useRef-BKrfCYqa.js";import"./remote-BNVNDlip.js";import"./Heading-DVHr5WNM.js";import"./useFormValidation-Jbp24I-0.js";import"./Input-mPx5hz5Z.js";import"./EmulatedBoldText-DGQ67tbz.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
