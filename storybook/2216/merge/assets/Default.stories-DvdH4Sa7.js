import{r as x,j as e}from"./iframe-d8TPt7Dq.js";import{F as t}from"./FileDropZone-CPsCNZj-.js";import{S as d}from"./Section-gs_NZoj_.js";import{F as u}from"./FileCardList-Bv0OMd72.js";import{F}from"./FileCard-BADBZ_3J.js";import{u as S,F as C,t as D}from"./Form-9w--j5Mp.js";import{S as y}from"./ResetButton-DO1Nuvjf.js";import{B as f}from"./Button-CG9B_DsC.js";import{A as b}from"./ActionGroup-Bto2kHza.js";import{Z as j,_ as B}from"./IconWarning-BBwUIuFu.js";import{H as g}from"./Heading-DEdgyyg2.js";import{F as h}from"./FileField-DKfWfWGi.js";import{T as O}from"./Text-B_83j2CJ.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BpcllX8I.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./index-hNZo4M03.js";import"./useFieldComponent-XccPD61N.js";import"./utils-CQWCrNEN.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CbFZ93_1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CyX9DgZ-.js";import"./useFocus-Dzzsimxq.js";import"./useCollator-BT1LDj3M.js";import"./context-s9WFa2xd.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./Button-CiuUFhcg.js";import"./ProgressBar-DbAphBhf.js";import"./Label-Ddce6lPW.js";import"./Hidden-DwOTALl4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DD6hZDmw.js";import"./useFocusRing-Pl_83XSU.js";import"./useFocusable-Blyv-8JB.js";import"./VisuallyHidden-_OGl7ay2.js";import"./ContextMenuSection-BGdNAGXU.js";import"./Action-BNptIGGg.js";import"./context-BnRBG3H-.js";import"./useStatic-C-4yNygp.js";import"./browser-Cq89yPle.js";import"./getActionGroupSlot-BPC2rtYu.js";import"./dynamic-q6Z3lF5f.js";import"./Dialog-DKAUR0i0.js";import"./RSPContexts-Bn3c_trp.js";import"./OverlayArrow-DsjdeIno.js";import"./useControlledState-Du7Hq4ap.js";import"./Collection-C_DIbhIS.js";import"./CollectionBuilder-DWjCGULS.js";import"./SelectionIndicator-Tc2ddoNh.js";import"./Separator-CfU7skaS.js";import"./SelectionManager-CwYh5ako.js";import"./useEvent-BEdiQQE9.js";import"./FocusScope-TlUkqt74.js";import"./ColumnLayout-BLd1dYby.js";import"./Avatar-DysVh_oa.js";import"./AlertIcon-vcoq1kIC.js";import"./Image-B0n3ncS1.js";import"./Link-BAvXncIq.js";import"./OptionsButton-CxAwftO7.js";import"./ButtonView-DdC416-T.js";import"./ContextMenuTriggerView-DoYBjJ08.js";import"./ContextMenuTrigger-ChNDJbGG.js";import"./OverlayTrigger-Ct0MwRjl.js";import"./OverlayContextProvider-CEYLfIDU.js";import"./FieldError-Z630sQ-Y.js";import"./FieldError-D74Rm1AJ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Uwn_o1DG.js";import"./LoadingSpinner-CZkvTSmf.js";import"./remote-DqOJ-OtV.js";import"./Heading-DHpEgmIr.js";import"./useFormValidation-DzABwrGN.js";import"./Input-Cp9jMkj6.js";import"./EmulatedBoldText-Dx_IZKf8.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
