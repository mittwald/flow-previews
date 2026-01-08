import{r as x,j as e}from"./iframe-BpfR1GYm.js";import{F as t}from"./FileDropZone-DtsCK2it.js";import{S as d}from"./Section-dj9_tl4m.js";import{F as u}from"./FileCardList-CNbErwW5.js";import{F}from"./FileCard-CtAGQdPo.js";import{u as S,F as C,t as D}from"./Form-YTX1e-ix.js";import{S as y}from"./ResetButton-_qKJFJu9.js";import{B as f}from"./Button-C4OB0yac.js";import{A as b}from"./ActionGroup-CzX-fkcj.js";import{$ as j,a0 as B}from"./IconWarning-BOf1a1NO.js";import{H as g}from"./Heading-gFHdw-hu.js";import{F as h}from"./FileField-B0qxLEtA.js";import{T as O}from"./Text-jE0jlBS1.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CWT9NolG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-qov8JTe3.js";import"./index-SWV2Jto_.js";import"./index-BNT5TWiv.js";import"./useFieldComponent-DI1dsoTY.js";import"./utils-z0hzRCNL.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DujklUHl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oNP935J_.js";import"./useFocus-ZHbPEGRJ.js";import"./useCollator-C5z3r8b8.js";import"./context-BQnsf3fS.js";import"./useLocalizedStringFormatter-BHDvTpyt.js";import"./Button-Dq2UVXBx.js";import"./ProgressBar-C8HL_nLQ.js";import"./Label-TUuaFaku.js";import"./Hidden-DWXiMutX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VEcsoWoE.js";import"./useFocusRing-lHZkZ90J.js";import"./useFocusable-CybXUwCv.js";import"./VisuallyHidden-Dk8KR5l4.js";import"./ContextMenuSection-DF0tWoMk.js";import"./Action-BgYAV17K.js";import"./context-CfiW950r.js";import"./useStatic-C8Msussh.js";import"./browser-CJuVe1n5.js";import"./getActionGroupSlot-DhmxW89Z.js";import"./dynamic-B2LUuPCk.js";import"./Dialog-B9wBOAXv.js";import"./RSPContexts-DDsKHTka.js";import"./OverlayArrow-CweGqLKW.js";import"./useControlledState-Bs2ReOE0.js";import"./Collection-YpU2JVsv.js";import"./CollectionBuilder-9PEIzLQk.js";import"./SelectionIndicator-n0OjLjyZ.js";import"./Separator-BrTPl_Ln.js";import"./SelectionManager-DNmOxeny.js";import"./useEvent-DNbaaWG3.js";import"./FocusScope--j43gSQ5.js";import"./ColumnLayout-e8fm_4Ce.js";import"./Avatar-CE2Xl98h.js";import"./AlertIcon-BPm48GUQ.js";import"./Image-BR33_89l.js";import"./Link-DvpRW4Me.js";import"./OptionsButton-BFLEzXJJ.js";import"./ButtonView-BAFaUD0g.js";import"./ContextMenuTriggerView-D9BAWqWa.js";import"./ContextMenuTrigger-tIG1cR3j.js";import"./OverlayTrigger-W5qY0Tf-.js";import"./OverlayContextProvider-Df0cEgpx.js";import"./FieldError-CXRDkScB.js";import"./FieldError-DbjIiGK3.js";import"./InlineAlert-Dumml4W9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-wXPPnRLO.js";import"./LoadingSpinner-C50Cnz5-.js";import"./remote-Cr2dkfGH.js";import"./Heading-BjKLoeTv.js";import"./useFormValidation-DJqpOl9D.js";import"./Input-By9tEQCu.js";import"./EmulatedBoldText-Ba7yrIZA.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const rr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,rr as __namedExportsOrder,er as default};
