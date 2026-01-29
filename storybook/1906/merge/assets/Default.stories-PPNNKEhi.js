import{r as x,j as e}from"./iframe-B9oS1eAm.js";import{F as t}from"./FileDropZone-MXcY72Fl.js";import{S as d}from"./Section-BlZng62t.js";import{F as u}from"./FileCardList-DiX5-0fD.js";import{F}from"./FileCard-BFF8zJ6B.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-4NarTcNc.js";import{B as f}from"./Button-DYAI_N0q.js";import{A as b}from"./ActionGroup-C8kGbhyk.js";import{_ as j,$ as B}from"./IconWarning-CbErselp.js";import{H as g}from"./Heading-DxBk4dsC.js";import{F as h}from"./FileField-raGYp1VB.js";import{T as O}from"./Text-D9DZPtYx.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CD_6zy8R.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B6AWm4S8.js";import"./index-HAVMN3jx.js";import"./index-CYuWkd4j.js";import"./useFieldComponent-BBgwgWHq.js";import"./utils-CkbQ6lDO.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DSVxOKBO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLQlKL9C.js";import"./useFocus-BUMqhqrN.js";import"./useCollator-09eSufO1.js";import"./context-CSGUwiAp.js";import"./useLocalizedStringFormatter-Bpp7Jkjf.js";import"./useFocusRing-CD4YKl48.js";import"./Button-BCaEF3RH.js";import"./ProgressBar-DmEGRNOl.js";import"./Label-DH9184nb.js";import"./Hidden-BXVpGb-m.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CvAqmGGe.js";import"./useFocusable-DLbArD3q.js";import"./VisuallyHidden-D5FMvG_d.js";import"./ContextMenuSection-B77fxBO-.js";import"./Action-uBGtkJG1.js";import"./context-CJJiwCXZ.js";import"./useStatic-D0W9io-P.js";import"./browser-DuZ3LDHb.js";import"./getActionGroupSlot-DVOrLfdJ.js";import"./dynamic-D5cDPq7G.js";import"./Dialog-DQxs1UCg.js";import"./RSPContexts-BiSXvS4y.js";import"./OverlayArrow-D190ErXx.js";import"./useControlledState-BhPlyXsf.js";import"./Collection-BQ9glRT8.js";import"./CollectionBuilder-Aei3o-DO.js";import"./SelectionIndicator-CiC6xaeC.js";import"./Separator-DWgkhh6N.js";import"./SelectionManager-PMRgnxaW.js";import"./useEvent-DvZ6slzf.js";import"./FocusScope-BifOUh1d.js";import"./ColumnLayout-BgKG0lrn.js";import"./Avatar-DZjFE8dC.js";import"./AlertIcon-CyL6LR1b.js";import"./Image-BxuIIBje.js";import"./Link-C446LboO.js";import"./OptionsButton-CdOfHonx.js";import"./ButtonView-BFgeb-7u.js";import"./ContextMenuTriggerView-CEadDCgA.js";import"./ContextMenuTrigger-998pkbRQ.js";import"./OverlayTrigger-BbXRNnL7.js";import"./OverlayContextProvider-B6Y-y8F0.js";import"./FieldError-BkKW3wP7.js";import"./FieldError-Dfuql1HI.js";import"./AlertText-D9s0hTSb.js";import"./useRef-D23fJLYr.js";import"./LoadingSpinner-BCe3g54S.js";import"./remote-B89JZTQ6.js";import"./Heading-DFJD7l83.js";import"./useFormValidation-pe71fieX.js";import"./Input-eUUGTdC3.js";import"./EmulatedBoldText-BYYx2Dxb.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
