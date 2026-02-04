import{r as x,j as e}from"./iframe-BrRYKFNZ.js";import{F as t}from"./FileDropZone-C4z7oHgU.js";import{S as d}from"./Section-UYkQGpw-.js";import{F as u}from"./FileCardList-B4WUJOoQ.js";import{F}from"./FileCard-Cok8vRi9.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-B0FIkwa9.js";import{B as f}from"./Button-C60cqGfK.js";import{A as b}from"./ActionGroup-CcJlTct_.js";import{_ as j,$ as B}from"./IconWarning-BeyOYKIy.js";import{H as g}from"./Heading-BEvNp9N_.js";import{F as h}from"./FileField-CDe5Q7IT.js";import{T as O}from"./Text-BQhotjr-.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DvVzwYSU.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6MOqeSY.js";import"./index-Bwdm-eaA.js";import"./index--DYCSdQe.js";import"./useFieldComponent-D0nvFHA9.js";import"./utils-B1YhIU5r.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C7DedtDs.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8Txg4ii.js";import"./useFocus-Br7iUm-k.js";import"./useCollator-C7d0Ik_Q.js";import"./context-CNZG124A.js";import"./useLocalizedStringFormatter-BGu-vUkX.js";import"./useFocusRing-DN4mDdXp.js";import"./Button-B8owV-WL.js";import"./ProgressBar-B9sQkIOL.js";import"./Label-D0rlaIi3.js";import"./Hidden-CpB89dfv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-fw0Lqzwn.js";import"./useFocusable-NfSEA2Af.js";import"./VisuallyHidden-VjzJwiBh.js";import"./ContextMenuSection-CWAGy83O.js";import"./Action-D8nw7HFc.js";import"./context-CrKKxYCQ.js";import"./useStatic-CMNgov9B.js";import"./browser-rpb3JyGK.js";import"./getActionGroupSlot-BX1oqOED.js";import"./dynamic-CVEHQCEx.js";import"./Dialog-CrRUDPQZ.js";import"./RSPContexts-Cc3CuTB3.js";import"./OverlayArrow-O3cIaLnV.js";import"./useControlledState-BbGuTZMM.js";import"./Collection-BSmX4ivX.js";import"./CollectionBuilder-yxebjIxP.js";import"./SelectionIndicator-DkMRnaGM.js";import"./Separator-Cwa9_Y9_.js";import"./SelectionManager-C85L77I5.js";import"./useEvent-D5Z7Dnjm.js";import"./FocusScope-C9Un_YW5.js";import"./ColumnLayout-D3bQCjP2.js";import"./Avatar-DQBZ_YZj.js";import"./AlertIcon-B-O3oopm.js";import"./Image-BY-UfD-H.js";import"./Link-DSSj8ydA.js";import"./OptionsButton-B3MOK6k-.js";import"./ButtonView-CpxOXa2e.js";import"./ContextMenuTriggerView-CQpDgCMf.js";import"./ContextMenuTrigger-BYCzA1th.js";import"./OverlayTrigger-D29G-Fo8.js";import"./OverlayContextProvider-Cf_qIYKP.js";import"./FieldError-Ce69irxX.js";import"./FieldError-DMOv5TcV.js";import"./AlertText-CUhcwM6U.js";import"./useRef-CwDhitpI.js";import"./LoadingSpinner-Djs3hRtr.js";import"./remote-CSM401Gb.js";import"./Heading-DT_vZFGH.js";import"./useFormValidation-vznVoA4Z.js";import"./Input-DUxkIprV.js";import"./EmulatedBoldText-DCPr9fyi.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
