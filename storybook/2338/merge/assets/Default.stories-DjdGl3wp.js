import{r as h,j as e}from"./iframe-CBpAxFwW.js";import{F as t}from"./FileDropZone-DpXFfwGA.js";import{S as p}from"./Section-7R7SCXQ7.js";import{F as c}from"./FileCardList-NIWiMUSj.js";import{F as d}from"./FileCard-DNLuBIGP.js";import{u as g,F as j,S,t as C}from"./ResetButton-DdOkIqmb.js";import{B as u}from"./Button-DJILh_tx.js";import{A as D}from"./ActionGroup-CIZlagD5.js";import{a0 as x,a1 as B}from"./IconWarning-gYJb7yiz.js";import{H as F}from"./Heading-MOWZhQDK.js";import{F as f}from"./FileField-Cj-RozeP.js";import{T as L}from"./Text-DmIlada7.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-jaSu0in8.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./index-RPWHkLuG.js";import"./useFieldComponent-PtL7ZYGA.js";import"./utils-DlBHsIHw.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CVgfjhJb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./useFocus-DWD5MHlE.js";import"./useCollator-bX69lL-k.js";import"./useFocusRing-DhcP44Or.js";import"./context-BCPYrVw6.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./Button-B6LJ-bNf.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-IARhWfJB.js";import"./useFocusable-YEU6YEqR.js";import"./VisuallyHidden-BLMNvyRL.js";import"./ContextMenuSection-CSCUKvfx.js";import"./ActionBatch-BgON7N4c.js";import"./useOverlayController-lEjhNgxt.js";import"./useStatic-CDkGs2jt.js";import"./browser-Bc0l3UGu.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./dynamic-CE4App5Z.js";import"./Dialog-r9nlMSfh.js";import"./RSPContexts-C97_Ku7o.js";import"./OverlayArrow-B4tyB_eB.js";import"./useControlledState-cot2auG7.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./SelectionIndicator-DmDMXkvM.js";import"./Separator-BGJ98pV4.js";import"./SelectionManager-D9wpoI9v.js";import"./FocusScope-cF8Pb5h6.js";import"./ColumnLayout-CH0RCE87.js";import"./Avatar-COhgiUOT.js";import"./AlertIcon-DpBhbRLN.js";import"./Image-D_Ho8Rvj.js";import"./Link-CA-d3tjp.js";import"./OptionsButton-C3LQ-_Bw.js";import"./ButtonView-C6fcLE9x.js";import"./ContextMenuTriggerView-DSCpOsfq.js";import"./ContextMenuTrigger-C4hUd_HP.js";import"./OverlayTrigger-BoEnaKfv.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./FieldError-0XXNPrVk.js";import"./FieldError-Bok8s5mY.js";import"./AlertText-CKVeXFp2.js";import"./ActionGroupView-CGPpf-UN.js";import"./Content-D1nnPCvX.js";import"./Modal-DexcMb-i.js";import"./Overlay-DXbZZVUA.js";import"./LoadingSpinner-kKg7jHcI.js";import"./Flex-7Y4tKj0e.js";import"./useRef-DPhMCXJT.js";import"./remote-Bqh6MTep.js";import"./Heading-CaCePfIe.js";import"./useFormValidation-D1j-Spao.js";import"./Input-lDcabwyv.js";import"./EmulatedBoldText-CvSlY-lg.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange","multiple"]}},args:{isDisabled:!1,isReadOnly:!1},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select file"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},H=y("submit"),s={},m={render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{accept:"image/png",...n,onChange:i,children:[e.jsx(B,{}),e.jsx(F,{children:"Drop image"}),e.jsx(L,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select image"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},a={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select files"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},l={render:n=>{const o=g(),i=C();return e.jsxs(j,{form:o,onSubmit:H,children:[e.jsxs(p,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{children:e.jsx(u,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(c,{children:[...o.watch("file")??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]}),e.jsx(D,{children:e.jsx(S,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone accept="image/png" {...props} onChange={setFiles}>
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
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const rr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Multiple,m as WithAcceptedTypes,l as WithReactHookForm,rr as __namedExportsOrder,er as default};
