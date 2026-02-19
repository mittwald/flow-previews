import{r as x,j as e}from"./iframe-CaMmm6JB.js";import{F as t}from"./FileDropZone-lWfOdWJg.js";import{S as d}from"./Section-z5Dz65CL.js";import{F as u}from"./FileCardList-DMrxj4v-.js";import{F}from"./FileCard-l1wNE8iK.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DZiVofRK.js";import{B as f}from"./Button-Ccdb4ZyB.js";import{A as b}from"./ActionGroup-C2ezmeu7.js";import{a0 as j,a1 as B}from"./IconWarning-CjIU5uAw.js";import{H as g}from"./Heading-6UA8ouUH.js";import{F as h}from"./FileField-B91NHZX5.js";import{T as O}from"./Text-BytpHB1v.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CG6ut2Am.js";import"./clsx-B-dksMZM.js";import"./flowComponent-7fKv1TmI.js";import"./index-D879hO5r.js";import"./index-bUizOk6y.js";import"./useFieldComponent-l9GEjfOW.js";import"./utils-BWel_6vJ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DltKapPO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BlkmcG0L.js";import"./useFocus-CsmVawkN.js";import"./useCollator-CLVgUaDj.js";import"./context-COlkIlq2.js";import"./useLocalizedStringFormatter-DvVfJ2n5.js";import"./useFocusRing-D0nVGfyc.js";import"./Button-Br8oe_nB.js";import"./ProgressBar-CBFdsoCo.js";import"./Label-GJfJgND5.js";import"./Hidden-_lt-y3bc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bq52eadg.js";import"./useFocusable-D5loONxI.js";import"./VisuallyHidden-CJ5e0jZZ.js";import"./ContextMenuSection-CGa5WiYd.js";import"./ActionBatch-Q41d4eeq.js";import"./useOverlayController-DaRRxB6Y.js";import"./useStatic-CQKXHPrs.js";import"./browser-DBmSqQ-l.js";import"./getActionGroupSlot-xPMU2Lcl.js";import"./dynamic-CCT0rfWD.js";import"./Dialog-YsZQ1_o0.js";import"./RSPContexts-HzcDbyvj.js";import"./OverlayArrow-BudvLkgn.js";import"./useControlledState-DS3iWteE.js";import"./Collection-YKpSfmi_.js";import"./CollectionBuilder-2gYZy5f8.js";import"./SelectionIndicator-C8xVf-92.js";import"./Separator-Du64Ymo6.js";import"./SelectionManager-DL58XFN7.js";import"./useEvent-DMru7c0E.js";import"./FocusScope-BSI7m-fZ.js";import"./ColumnLayout-BUBlGSDr.js";import"./Avatar-CyqxrIla.js";import"./AlertIcon-CCMwGOFg.js";import"./Image-B4yU2oz9.js";import"./Link-DkYjPJkt.js";import"./OptionsButton-JMjX26Tg.js";import"./ButtonView-VN2wxJGS.js";import"./ContextMenuTriggerView-D7pTy7it.js";import"./ContextMenuTrigger-BuJIwjoP.js";import"./OverlayTrigger-BDzY0sMA.js";import"./OverlayContextProvider-_LkIzv60.js";import"./FieldError-gBRSHyIP.js";import"./FieldError-rN2a2i1l.js";import"./AlertText-CvHTwf-C.js";import"./ActionGroupView-SXd6Ahs2.js";import"./Content-D39bfGls.js";import"./Modal-D-BKA9RG.js";import"./Overlay-DFrCfT03.js";import"./LoadingSpinner-D3IBMWR2.js";import"./Flex-BB0MY87d.js";import"./useRef-6651uh8r.js";import"./remote-B2IWJRNM.js";import"./Heading-DZNcobqI.js";import"./useFormValidation-BBrrlMUS.js";import"./Input-BR-ykejl.js";import"./EmulatedBoldText-Bldq9nM5.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
