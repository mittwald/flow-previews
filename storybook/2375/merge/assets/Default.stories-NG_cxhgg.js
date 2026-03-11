import{r as x,j as e}from"./iframe-C0EFV5oe.js";import{F as t}from"./FileDropZone-CJ_6nYpZ.js";import{S as d}from"./Section-DIrXzFYU.js";import{F as u}from"./FileCardList-BEgh8GcO.js";import{F}from"./FileCard-R6lBslQG.js";import{u as S,F as C,S as D,t as y}from"./FormRootError-B3JIvYww.js";import{B as f}from"./Button-BqN-Pb_Z.js";import{A as b}from"./ActionGroup-EFGw0Sw-.js";import{a0 as j,a1 as B}from"./IconWarning-Xp-mdAXG.js";import{H as g}from"./Heading-CZ1StJHC.js";import{F as h}from"./FileField-DN2G7x2Y.js";import{T as O}from"./Text-DOyzWtc3.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CWAAlFCg.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DYluwTXq.js";import"./index-a1BVMwGa.js";import"./index-CT8mMXvE.js";import"./useFieldComponent-Becw-9Qv.js";import"./utils-BH6nMpvt.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BncBp0aM.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C2wPJC8Z.js";import"./useFocus-Kf_jHJpa.js";import"./useCollator-Dw-CzaIq.js";import"./context-8WtOcV7b.js";import"./useLocalizedStringFormatter-COxbXONP.js";import"./useFocusRing-DMB6fTXa.js";import"./Button-DHla6nGC.js";import"./ProgressBar-BJi6WIHx.js";import"./Label-CdL3Pj-c.js";import"./Hidden-BTRmRI8a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-KZK5hlL_.js";import"./useFocusable-DZVtVQHs.js";import"./VisuallyHidden-BtDJhMaH.js";import"./ContextMenuSection-CeWW7BcO.js";import"./ActionBatch-BKp4oeCQ.js";import"./useOverlayController-DSjMGOL2.js";import"./useStatic-BaJc0e4A.js";import"./browser-yoNZwNd3.js";import"./getActionGroupSlot-9D_vBtIQ.js";import"./dynamic-DNPsW2Gv.js";import"./Dialog-DJ2-3VRx.js";import"./RSPContexts-DN9Cbb61.js";import"./OverlayArrow-DU6ABYYb.js";import"./useControlledState-BnTyVv5N.js";import"./Collection-CeBXcKv1.js";import"./CollectionBuilder-NEfM2aTk.js";import"./SelectionIndicator-CiCpZhmm.js";import"./Separator-Cd1GHDKW.js";import"./SelectionManager-0ETMkcPZ.js";import"./useEvent-BSnLayA0.js";import"./FocusScope-BRWQwIZz.js";import"./ColumnLayout-BZYjX1K8.js";import"./Avatar-W0uNQuG9.js";import"./AlertIcon-C23FUlLu.js";import"./Image-Ca_yb6wX.js";import"./Link-C5C7q4c3.js";import"./OptionsButton-B9C4YyZ-.js";import"./ButtonView-BsJw5G4L.js";import"./ContextMenuTriggerView-DuzLYqod.js";import"./ContextMenuTrigger-RXQqOYFx.js";import"./OverlayTrigger-Dw0FnMHR.js";import"./OverlayContextProvider-CfXne1yD.js";import"./useControlledHostValueProps-CU5liUX5.js";import"./ActionGroupView-JE6xIUi7.js";import"./Content-DuuHxM4g.js";import"./Modal-C71hUzD9.js";import"./Overlay-Z2wG9VEn.js";import"./LoadingSpinner-AXwRYWdI.js";import"./Flex-CRYKgtbH.js";import"./useRef-U_kF6P4I.js";import"./FieldError-Dy7dJdZa.js";import"./FieldError-nKMDp4j0.js";import"./AlertText-dPEDb1m8.js";import"./remote-CJHR20lz.js";import"./Heading-B3GE8mEs.js";import"./useFormValidation-CCqKlLu6.js";import"./Input-CtJ2Z6MU.js";import"./EmulatedBoldText-12IhiA7q.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,nr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const tr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,tr as __namedExportsOrder,nr as default};
