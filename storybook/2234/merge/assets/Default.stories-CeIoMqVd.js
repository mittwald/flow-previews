import{r as x,j as e}from"./iframe-Cz8_C8zY.js";import{F as t}from"./FileDropZone-TXA2HsB2.js";import{S as d}from"./Section-SSHhfNn0.js";import{F as u}from"./FileCardList-C2jZMGXp.js";import{F}from"./FileCard-DU3VrUqO.js";import{u as S,F as C,t as D}from"./Form-C-tofb87.js";import{S as y}from"./ResetButton-Bv8Dr5T9.js";import{B as f}from"./Button-D15OVnQK.js";import{A as b}from"./ActionGroup-DiMyb9cq.js";import{Z as j,_ as B}from"./IconWarning-DLbRRuK1.js";import{H as g}from"./Heading-4iah9onY.js";import{F as h}from"./FileField-CqFlBDAC.js";import{T as O}from"./Text-YjLUuftS.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DYoecL4k.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BcPJG4Ua.js";import"./index-Cdfsiuxw.js";import"./index-SrORw6vN.js";import"./useFieldComponent--MNREdev.js";import"./utils-BAKlH2Lm.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Cr087Rh_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BFm9pXXT.js";import"./useFocus-DFbFm1Xx.js";import"./useCollator-B9bMczBX.js";import"./context-VkDhZA-x.js";import"./useLocalizedStringFormatter-Bo3Sbs5c.js";import"./Button-7cKgwoPB.js";import"./ProgressBar-CyaO-AON.js";import"./Label-2kcHPH94.js";import"./Hidden-CWAqagDm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DcZz-lB5.js";import"./useFocusRing-BDmU1dd9.js";import"./useFocusable-CJ-4fYj7.js";import"./VisuallyHidden-7uh1Rm92.js";import"./ContextMenuSection-DUguC81d.js";import"./Action-aXgHP_6u.js";import"./context-usF9YeFM.js";import"./useStatic-DFVrJYQp.js";import"./browser-B6rfwAqc.js";import"./getActionGroupSlot-DD9h-bxs.js";import"./dynamic-CeA3emBk.js";import"./Dialog-DK4i5yRx.js";import"./RSPContexts-CQQaQyDU.js";import"./OverlayArrow-CwaEkqIl.js";import"./useControlledState-C0o23ioH.js";import"./Collection-2S6_FH7n.js";import"./CollectionBuilder-CWbLFvvU.js";import"./SelectionIndicator-DD4cK7So.js";import"./Separator-2dOH-BB_.js";import"./SelectionManager-C5vFB_ZW.js";import"./useEvent-Wcg6Cj6E.js";import"./FocusScope-DR3pULV0.js";import"./ColumnLayout-ROyZeNjU.js";import"./Avatar-T8rUKbm6.js";import"./AlertIcon-ljfi56tv.js";import"./Image-DmhcotWX.js";import"./Link-eNCbHXBt.js";import"./OptionsButton-DSIeXlqN.js";import"./ButtonView-CSt-ab9V.js";import"./ContextMenuTriggerView-CGpdwsbi.js";import"./ContextMenuTrigger-9SzqOGa8.js";import"./OverlayTrigger-KjIeYBhC.js";import"./OverlayContextProvider-DHHLRya5.js";import"./FieldError-CEw8HJGt.js";import"./FieldError-B254xHCi.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-CsRDIUk-.js";import"./LoadingSpinner-ClQMAkzE.js";import"./remote-D3nX27fk.js";import"./Heading-DjrC0KPL.js";import"./useFormValidation-DBiWbYgf.js";import"./Input-MUdQf2Tz.js";import"./EmulatedBoldText-Dt-OzvRV.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
