import{r as x,j as e}from"./iframe-BwTc9KkQ.js";import{F as t}from"./FileDropZone-BKK4T3Ue.js";import{S as d}from"./Section-C6exBiSb.js";import{F as u}from"./FileCardList-B36VVLq3.js";import{F}from"./FileCard-lLihRi6p.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DnBeQq07.js";import{B as f}from"./Button-Ckvz-MCb.js";import{A as b}from"./ActionGroup-DFlQAehv.js";import{_ as j,$ as B}from"./IconWarning-CuEgZ9GS.js";import{H as g}from"./Heading-DdwcYqWJ.js";import{F as h}from"./FileField-tutWjp0M.js";import{T as O}from"./Text-Gc4XBNKO.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BFe60X2E.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CVbdUxz2.js";import"./index-CGQkNtsL.js";import"./index-C6-tpPRF.js";import"./useFieldComponent-D1bp3yFp.js";import"./utils-CBQcEIVx.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DngMYAZH.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BSSuBv8C.js";import"./useFocus-BpPHYutm.js";import"./useCollator-D6rhmeJa.js";import"./context-BwyA9HG-.js";import"./useLocalizedStringFormatter-INCxkZRf.js";import"./useFocusRing-DolIE8eq.js";import"./Button-DqSxrgNL.js";import"./ProgressBar-CaYu3rjO.js";import"./Label-123M7w93.js";import"./Hidden-DzSpzd_A.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CJeMKVhz.js";import"./useFocusable-B00zaX18.js";import"./VisuallyHidden-BgOZVVaM.js";import"./ContextMenuSection-LW48IjXN.js";import"./Action-BhNW5Llg.js";import"./context-BTkxUDR7.js";import"./useStatic-D7wzuZGA.js";import"./browser-vKZ8hCbx.js";import"./getActionGroupSlot-CPP3dnXc.js";import"./dynamic-BE4DvzFx.js";import"./Dialog-DfJHDuJ2.js";import"./RSPContexts-DUJ8CZ2M.js";import"./OverlayArrow-DC7WkuhA.js";import"./useControlledState-DJoARPq6.js";import"./Collection-Dw9lmv_g.js";import"./CollectionBuilder-O788RXXq.js";import"./SelectionIndicator-CWwUcpBG.js";import"./Separator-DSMZMwnt.js";import"./SelectionManager-BszBT5Go.js";import"./useEvent-DNrOKzwb.js";import"./FocusScope-D13mvD2r.js";import"./ColumnLayout-BP0LJvsC.js";import"./Avatar-D0Q-f-7d.js";import"./AlertIcon-B9dP4NVD.js";import"./Image-CDuBZKih.js";import"./Link-Dfs0oXSd.js";import"./OptionsButton-Bw1YIs6k.js";import"./ButtonView-BIDw_mr1.js";import"./ContextMenuTriggerView-z8vaAz6B.js";import"./ContextMenuTrigger-dW6z12Kq.js";import"./OverlayTrigger-D7e37rU3.js";import"./OverlayContextProvider-aDhVlP4w.js";import"./FieldError-BhKB-hqh.js";import"./FieldError-B40__s1G.js";import"./AlertText-tZCm05zF.js";import"./useRef-sbMflI1L.js";import"./LoadingSpinner-lc_9xcB8.js";import"./remote-B0txjFXx.js";import"./Heading-DshP_5_D.js";import"./useFormValidation-BAeTIVc2.js";import"./Input-C8bkJupR.js";import"./EmulatedBoldText-nz1iuJug.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
