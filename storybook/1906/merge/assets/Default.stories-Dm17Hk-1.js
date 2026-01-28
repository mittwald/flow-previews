import{r as x,j as e}from"./iframe-CFLRrV9_.js";import{F as t}from"./FileDropZone-BE064_Cw.js";import{S as d}from"./Section-DcEQD72A.js";import{F as u}from"./FileCardList-w-dd-euN.js";import{F}from"./FileCard-B5bVQKc0.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-DjqnxgyX.js";import{B as f}from"./Button-C6DtPvCF.js";import{A as b}from"./ActionGroup-Cmk2pOgu.js";import{_ as j,$ as B}from"./IconWarning-DnD-gw4t.js";import{H as g}from"./Heading-1o2wH2IP.js";import{F as h}from"./FileField-u0o1mVyY.js";import{T as O}from"./Text-DEmvrg4f.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BCVLROzI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cgcg4reG.js";import"./index-C9HjT8vY.js";import"./index-24zjo-Kb.js";import"./useFieldComponent-CywuRKF5.js";import"./utils-9RAZgTTl.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DCjLwlBM.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C42gu-3e.js";import"./useFocus-DD1T6bJ4.js";import"./useCollator-BuvCZz5o.js";import"./context-bb3yZDI9.js";import"./useLocalizedStringFormatter-BTtlqG0g.js";import"./useFocusRing-DRVonXEI.js";import"./Button-CQ9x5Ymh.js";import"./ProgressBar-CAwZsQPk.js";import"./Label-CRwaxTbk.js";import"./Hidden-DI4qxTyt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-LdOf-GEu.js";import"./useFocusable-CQU1ZNCF.js";import"./VisuallyHidden-DH38u7VP.js";import"./ContextMenuSection-KLSTc6el.js";import"./Action--cE17EXA.js";import"./context-CslVSGqZ.js";import"./useStatic-Bo06Q_Yy.js";import"./browser-6ZyX-izP.js";import"./getActionGroupSlot-DBTwflYW.js";import"./dynamic-CfUvB6Rc.js";import"./Dialog-CsaxLO_h.js";import"./RSPContexts-CrNZITQd.js";import"./OverlayArrow-67PBRhfH.js";import"./useControlledState-BS0DqA_d.js";import"./Collection-CpUB07wh.js";import"./CollectionBuilder-CcY1vtmm.js";import"./SelectionIndicator-DLBwj5hd.js";import"./Separator-Brhc3eje.js";import"./SelectionManager-rBQZeyz7.js";import"./useEvent-C2NY4fdQ.js";import"./FocusScope-To3K9I_L.js";import"./ColumnLayout-c_CudPq8.js";import"./Avatar-DDdo7mib.js";import"./AlertIcon-Dk-GLzZT.js";import"./Image-B023BgYu.js";import"./Link-D8NTJOuL.js";import"./OptionsButton-D_kJmHvK.js";import"./ButtonView-C98-Wvmx.js";import"./ContextMenuTriggerView-2NCYBPD-.js";import"./ContextMenuTrigger-vpjNUd2U.js";import"./OverlayTrigger-C2fP4BlG.js";import"./OverlayContextProvider-0OCnXaQU.js";import"./FieldError-BY_h0DzJ.js";import"./FieldError-D073kW89.js";import"./AlertText-BwXe_CUh.js";import"./useRef-BHiB85kd.js";import"./LoadingSpinner-D6sn6dKn.js";import"./remote-BB1QWzBE.js";import"./Heading-CD-g7ugM.js";import"./useFormValidation-Cm_zD3mV.js";import"./Input-QBFM7ItQ.js";import"./EmulatedBoldText-DW1BlzUv.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
