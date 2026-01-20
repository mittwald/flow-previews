import{r as x,j as e}from"./iframe-Q1VSciNm.js";import{F as t}from"./FileDropZone-UIhMT-JK.js";import{S as d}from"./Section-vwMkFMln.js";import{F as u}from"./FileCardList-CYEo2UYc.js";import{F}from"./FileCard-Bq5gtTND.js";import{u as S,F as C,t as D}from"./Form-By36tU3G.js";import{S as y}from"./ResetButton-C1v5iCxV.js";import{B as f}from"./Button-BkL5LUHK.js";import{A as b}from"./ActionGroup-BD4CHJoH.js";import{$ as j,a0 as B}from"./IconWarning-Bp2wXPUs.js";import{H as g}from"./Heading-D8FX4Qh8.js";import{F as h}from"./FileField-eUkyMqlP.js";import{T as O}from"./Text-1lLVDQct.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Dprg8dhO.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CPW7r7fk.js";import"./index-CfXDE0zj.js";import"./index-C3b6LhZY.js";import"./useFieldComponent-1pDy4PKz.js";import"./utils-Cfx54F97.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-FwHfWGj4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B4QM81Mz.js";import"./useFocus-Dgy1zF73.js";import"./useCollator-Dn5lVtzm.js";import"./context-BLO98TmC.js";import"./useLocalizedStringFormatter-CLD0dVJV.js";import"./Button-42pr8eMu.js";import"./ProgressBar-BibYjS7R.js";import"./Label-DHpNBk6c.js";import"./Hidden-XjRrgtIh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CkY15rDX.js";import"./useFocusRing-oK86YNHq.js";import"./useFocusable-BFiW_6Mc.js";import"./VisuallyHidden-btJzxMJm.js";import"./ContextMenuSection-DbRI5vVv.js";import"./Action-DYNAwBsP.js";import"./context-xTt93I09.js";import"./useStatic-DcS9SWFS.js";import"./browser-DUAAaQNQ.js";import"./getActionGroupSlot-gyV-83t6.js";import"./dynamic-B-3r4dJt.js";import"./Dialog-ib05FTRH.js";import"./RSPContexts-MtiuAHte.js";import"./OverlayArrow-vyusEtHs.js";import"./useControlledState-Cr50bzxN.js";import"./Collection-Dj4b01oP.js";import"./CollectionBuilder-D4fjBWoV.js";import"./SelectionIndicator-BJwzvmKN.js";import"./Separator-C0Z-5W1p.js";import"./SelectionManager-QcgbohAp.js";import"./useEvent-B6bvG52n.js";import"./FocusScope-BLxdUf1u.js";import"./ColumnLayout-DuRoXoyo.js";import"./Avatar-Fy0ozJT9.js";import"./AlertIcon-C25ddq9s.js";import"./Image-Cz34Aif6.js";import"./Link-BJjOeBY1.js";import"./OptionsButton-B02q125B.js";import"./ButtonView-F6X_RkhP.js";import"./ContextMenuTriggerView-CQYyZVqB.js";import"./ContextMenuTrigger-CEEkuu8R.js";import"./OverlayTrigger-DzAIUhz9.js";import"./OverlayContextProvider-y6JRCx08.js";import"./FieldError-RY9dMzjY.js";import"./FieldError-QjdNZ-FN.js";import"./AlertText-D1OEnaPR.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-CjXrhFY-.js";import"./LoadingSpinner-CTh5kqiZ.js";import"./remote-B8jFwJ6r.js";import"./Heading-BIQD_zbY.js";import"./useFormValidation-DIYVKRGL.js";import"./Input-a5vdzoE4.js";import"./EmulatedBoldText-Bq17Dbi4.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
