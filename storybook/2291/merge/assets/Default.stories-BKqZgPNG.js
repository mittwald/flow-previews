import{r as x,j as e}from"./iframe-BL1IY_6V.js";import{F as t}from"./FileDropZone-CbsFKpRW.js";import{S as d}from"./Section-B_fcZRhb.js";import{F as u}from"./FileCardList-Atk-6Aj4.js";import{F}from"./FileCard-Cn366m5x.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-BRxvWv3x.js";import{B as f}from"./Button-B7zQBVb0.js";import{A as b}from"./ActionGroup-CBsQTCAe.js";import{_ as j,$ as B}from"./IconWarning-BTI7YBWG.js";import{H as g}from"./Heading-Weu1gBHD.js";import{F as h}from"./FileField-DN-6r3zK.js";import{T as O}from"./Text-BSlhLkmN.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-_gXkPS91.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./index-Cr6jOlTO.js";import"./useFieldComponent-oZ5IqIdY.js";import"./utils-GyL2rjZN.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B4yGITBG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyH2amP0.js";import"./useFocus-D7_v9YO6.js";import"./useCollator-DpBUbIyY.js";import"./context-BeO7KH58.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./useFocusRing-DEMWgzWY.js";import"./Button-CHtMceZn.js";import"./ProgressBar-DK1MtX49.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CxRwZ9-L.js";import"./useFocusable-CUtc6O_Q.js";import"./VisuallyHidden-CgqIxBlU.js";import"./ContextMenuSection-JBlJYK6m.js";import"./Action-BftMxRJh.js";import"./context-Cv8xNoZb.js";import"./useStatic-BujRUGzM.js";import"./browser-DogRo3Wh.js";import"./getActionGroupSlot-Di2KrfRc.js";import"./dynamic-Dn3YQ50F.js";import"./Dialog-CDLoJFKu.js";import"./RSPContexts-BsiO56QH.js";import"./OverlayArrow-CpLmLaON.js";import"./useControlledState-CA6yhcg7.js";import"./Collection-DjA8G57O.js";import"./CollectionBuilder-DOfwpjF8.js";import"./SelectionIndicator-Dec13xxT.js";import"./Separator-mUQkGyBt.js";import"./SelectionManager-C3JHuUY2.js";import"./useEvent-BBSiUFe7.js";import"./FocusScope-B7aMt2fO.js";import"./ColumnLayout-Z6rNe4Ir.js";import"./Avatar-BDSWcHwm.js";import"./AlertIcon-B2R_BHtC.js";import"./Image-FwT2sw4o.js";import"./Link-Br8jdhIY.js";import"./OptionsButton-CVVp14rw.js";import"./ButtonView-DNg_Qy4d.js";import"./ContextMenuTriggerView-B2wsrDP4.js";import"./ContextMenuTrigger-C2WcmNSl.js";import"./OverlayTrigger-D4p9MH82.js";import"./OverlayContextProvider-Nf2zCsXY.js";import"./FieldError-D0yWaYHs.js";import"./FieldError-CCCCRqJ9.js";import"./AlertText-BDrbtAj0.js";import"./useRef-wA2SAyNt.js";import"./LoadingSpinner-BFVS5fU_.js";import"./remote-BuZW91cH.js";import"./Heading-CMaaNVI7.js";import"./useFormValidation-DCrH4OQY.js";import"./Input-BFv5VDBN.js";import"./EmulatedBoldText-UtdvjbkN.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
