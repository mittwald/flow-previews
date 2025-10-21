import{r as x,j as e}from"./iframe-DOYRhvKw.js";import{F as t}from"./FileDropZone-tzin1U9S.js";import{S as u}from"./Section-BJf3Kb9f.js";import{F}from"./FileCardList-DwF2PY8p.js";import{F as f}from"./FileCard-D7oPB_me.js";import{u as S,F as C,t as D}from"./Form-CJukERYt.js";import{B as s}from"./Button-C2r2j3I4.js";import{A as y}from"./ActionGroup-BQVi9nN6.js";import{_ as j,$ as O}from"./IconWarning-CT2mn3WV.js";import{H as g}from"./Heading-BcQRRFfC.js";import{F as h}from"./FileField-N60GWurS.js";import{T as b}from"./Text-uG3ng9U4.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-BJHcpeFU.js";import"./clsx-B-dksMZM.js";import"./flowComponent-STxdqvts.js";import"./index-CBooujIz.js";import"./index-CsHgCCkK.js";import"./useFieldComponent-CVvykpK2.js";import"./utils-Bgpcx055.js";import"./Text-ChShlFeN.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-BC28ceB8.js";import"./ClearPropsContext-BqcXprie.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-CzwTtnKl.js";import"./useFocus-19H2kxNT.js";import"./useCollator-Dm4rB5GB.js";import"./context-NzKNm45Y.js";import"./useLocalizedStringFormatter-DmT4fRR_.js";import"./Button-DqQnue56.js";import"./ProgressBar-DECQ-pQm.js";import"./Label-DPl4piTh.js";import"./Hidden-vFw0yyvc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-GLnS58A3.js";import"./useFocusRing-BgXDKXFW.js";import"./useFocusable-DT2cLKuD.js";import"./VisuallyHidden-DLTCEUwm.js";import"./ContextMenuSection-C5Ehy01g.js";import"./Action-BNkegqWa.js";import"./context-CjasfPnd.js";import"./useStatic-kDWe5hml.js";import"./browser-BfmJHaZX.js";import"./getActionGroupSlot-DkFy2TVv.js";import"./dynamic-nHNYFzn9.js";import"./Dialog-QPXJS7lu.js";import"./RSPContexts-D64TVg0j.js";import"./OverlayArrow-C0WVRV0f.js";import"./useControlledState-BpyUCkTO.js";import"./Collection-BmR1fMr0.js";import"./CollectionBuilder-COEzD4ng.js";import"./SelectionIndicator-DAPFHJnO.js";import"./Separator-9JM_OpZ0.js";import"./SelectionManager-BtUAX0vR.js";import"./useEvent-Tq7AIfXA.js";import"./FocusScope-CgTCZfj1.js";import"./ColumnLayout-C-7fphYl.js";import"./Avatar-CsbKegzD.js";import"./AlertIcon-C5nLIKA2.js";import"./Image-7gJo2BMD.js";import"./Link-Bo-kO0xT.js";import"./ButtonView-CWyXffOK.js";import"./ContextMenuTriggerView-jQe8h7p7.js";import"./ContextMenuTrigger-D33vVhEQ.js";import"./OverlayTrigger-BlX_Ocgn.js";import"./ControlledNotification-DTnIJfc-.js";import"./OverlayContextProvider-_T8uFS1c.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-x8jgjTbZ.js";import"./Heading-BiqQ-WE6.js";import"./useFormValidation-37foNTGu.js";import"./Input-OSTDVC9B.js";import"./useMakeFocusable-CpkCTOPe.js";import"./EmulatedBoldText-wbMAxmw1.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,ze={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const Je=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Je as __namedExportsOrder,ze as default};
