import{r as x,j as e}from"./iframe-BBX1MRm7.js";import{F as t}from"./FileDropZone-Cu3ep5Oq.js";import{S as d}from"./Section-BkJ3a6Gx.js";import{F as u}from"./FileCardList-YGbXqCkf.js";import{F}from"./FileCard-B2BypPRt.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-Db5RrJnJ.js";import{B as f}from"./Button-BqkPfHUM.js";import{A as b}from"./ActionGroup-CxYNjMjy.js";import{$ as j,a0 as B}from"./IconWarning-D1rdipwB.js";import{H as g}from"./Heading-DWMQjpKC.js";import{F as h}from"./FileField-CckoFidY.js";import{T as O}from"./Text-bZjB6G95.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Cuk8_i7D.js";import"./clsx-B-dksMZM.js";import"./flowComponent-79ppapas.js";import"./index-BNLEYWOE.js";import"./index-CaVys9ny.js";import"./useFieldComponent-B_qWTKJx.js";import"./utils-BavrKavc.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Dx1GcOD_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CwE3wslu.js";import"./useFocus-CEW7w8cP.js";import"./useCollator-BBRvdoV2.js";import"./context-CZSumH6g.js";import"./useLocalizedStringFormatter-BVVru5D3.js";import"./useFocusRing-Bm9tRP_O.js";import"./Button-BJia7Ggt.js";import"./ProgressBar-BlLvdox5.js";import"./Label-dmshrR3q.js";import"./Hidden-BWx-3ZWW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C19iJYYn.js";import"./useFocusable-DP1OjJqD.js";import"./VisuallyHidden-B0NnPUX1.js";import"./ContextMenuSection-C-rpOjJk.js";import"./Action-NfMU4pZQ.js";import"./context-CbNZJEnz.js";import"./useStatic-eT6_SwdI.js";import"./browser-94--rh0I.js";import"./getActionGroupSlot-Cs4GvwwL.js";import"./dynamic-CGdtYp29.js";import"./Dialog-DxFT1h3e.js";import"./RSPContexts-Bzvj4RyS.js";import"./OverlayArrow-CEy0Lp_c.js";import"./useControlledState-hVcOsExM.js";import"./Collection-KvAmq1BM.js";import"./CollectionBuilder-CT5wpjPQ.js";import"./SelectionIndicator-BhUr7H-C.js";import"./Separator-CBat6_46.js";import"./SelectionManager-BqxHDxhn.js";import"./useEvent-9YiOq-bW.js";import"./FocusScope-geYyY5OG.js";import"./ColumnLayout-DdThN0O1.js";import"./Avatar-CjYFSQ5Z.js";import"./AlertIcon-Bzw_XkQ4.js";import"./Image-PMs_jxdS.js";import"./Link-BQlGd_9b.js";import"./OptionsButton-DRofHrf2.js";import"./ButtonView-DtpzIIn9.js";import"./ContextMenuTriggerView-D8Pep1KA.js";import"./ContextMenuTrigger--sg0Xb-F.js";import"./OverlayTrigger-D5NXWXDN.js";import"./OverlayContextProvider-CeB4MDIB.js";import"./FieldError-DhG2ZYTr.js";import"./FieldError-C_UdMObt.js";import"./AlertText-BesKIlLk.js";import"./useRef-DzuR5EZW.js";import"./LoadingSpinner-D7vBft_f.js";import"./remote-DQSNjr8v.js";import"./Heading-L9MMZJmE.js";import"./useFormValidation-CjGCqCfM.js";import"./Input-DVyLg-xr.js";import"./EmulatedBoldText-B_ZrZeLf.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
