import{r as x,j as e}from"./iframe-nlVW-CPZ.js";import{F as t}from"./FileDropZone-DOEf_F6p.js";import{S as d}from"./Section-BCmWc09Q.js";import{F as u}from"./FileCardList-BtwWJHV8.js";import{F}from"./FileCard-C2gj8oGA.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-C0RVFwP1.js";import{B as f}from"./Button-_Sn69Jgj.js";import{A as b}from"./ActionGroup-CaBABiHS.js";import{_ as j,$ as B}from"./IconWarning-VZ7ITFqu.js";import{H as g}from"./Heading-BvsEXDXR.js";import{F as h}from"./FileField-CCcivmqx.js";import{T as O}from"./Text-BzuDjaz9.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Dhx1Y5J1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./index-DrBjklCk.js";import"./useFieldComponent-DOzg870F.js";import"./utils-CyuEFqip.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-sEy-KTn9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUbax7la.js";import"./useFocus-CD1ZzMvo.js";import"./useCollator-CE-FIC6l.js";import"./context-CIGB7i0H.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./useFocusRing-0Z36i33d.js";import"./Button-BXbNlZWB.js";import"./ProgressBar-CIT85dGK.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BSHzPeES.js";import"./useFocusable-DHxyzauV.js";import"./VisuallyHidden-44O2XzGD.js";import"./ContextMenuSection-mf_2MmNA.js";import"./Action-VhJyCQWd.js";import"./context-DJb9q1Xr.js";import"./useStatic-C5UephlJ.js";import"./browser-BoEfPalF.js";import"./getActionGroupSlot-C4UrWJhX.js";import"./dynamic-Dsm5lbml.js";import"./Dialog-zXGOOBEm.js";import"./RSPContexts-DlUCcPRc.js";import"./OverlayArrow-xJgx9UYQ.js";import"./useControlledState-ywoEmBU4.js";import"./Collection-VsHvURZ5.js";import"./CollectionBuilder-BC18ROL9.js";import"./SelectionIndicator-DdhOYUUY.js";import"./Separator-Ei4AiFvo.js";import"./SelectionManager-BMKEE2dl.js";import"./useEvent-C_UmhbA0.js";import"./FocusScope-DihhZg9P.js";import"./ColumnLayout-B86r7WOZ.js";import"./Avatar-Y56tKdR0.js";import"./AlertIcon-Dr5phtoY.js";import"./Image-fdFC8UUM.js";import"./Link-Dyc1bKEd.js";import"./OptionsButton-DEY_ZoeR.js";import"./ButtonView-CLlJ09F8.js";import"./ContextMenuTriggerView-CQoTJdA8.js";import"./ContextMenuTrigger-CW7DzLn9.js";import"./OverlayTrigger-DTUPogrt.js";import"./OverlayContextProvider-CMO4Tng6.js";import"./FieldError-C-5FG0Dy.js";import"./FieldError-BpjEpOFY.js";import"./AlertText-tAApf57I.js";import"./useRef-CfQO_nnJ.js";import"./LoadingSpinner-X7Xu_AAn.js";import"./remote-D3GclicH.js";import"./Heading-Bfj0TRqM.js";import"./useFormValidation-DqSMo-uw.js";import"./Input-BlMpicf_.js";import"./EmulatedBoldText-DYHVi4jR.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
