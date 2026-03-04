import{r as h,j as e}from"./iframe-CEWg6_IX.js";import{F as t}from"./FileDropZone-CMJktvSD.js";import{S as p}from"./Section-smxk9QAc.js";import{F as c}from"./FileCardList-BKjhywQw.js";import{F as d}from"./FileCard-DeHE9tPq.js";import{u as g,F as j,S,t as C}from"./ResetButton-C4Ep7Det.js";import{B as u}from"./Button-CA6AkUR_.js";import{A as D}from"./ActionGroup-2A27ggL_.js";import{a0 as x,a1 as B}from"./IconWarning-D3143lfN.js";import{H as F}from"./Heading-BWEcB93I.js";import{F as f}from"./FileField-v8If5qsj.js";import{T as L}from"./Text-Bw_cIJde.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-eW9B0Yp3.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./useFieldComponent-BOMK2S5G.js";import"./utils-VWmQzJjV.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B3jOd0w4.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./useFocus-BQlkvxNG.js";import"./useCollator-bALXm-sp.js";import"./useFocusRing-6TkqSe16.js";import"./context-BwTFrxK2.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./Button-Dhdc5WDI.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNr3g4sC.js";import"./useFocusable-B3euEuZy.js";import"./VisuallyHidden-DHhRta61.js";import"./ContextMenuSection-y3Qnt4sa.js";import"./ActionBatch-CnX-7Tzc.js";import"./useOverlayController-BjtWEYCu.js";import"./useStatic-B6Ppl0UQ.js";import"./browser-D6O_MAcc.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./dynamic-JOnDgprM.js";import"./Dialog-0Ix26WHm.js";import"./RSPContexts-ulpMISZ-.js";import"./OverlayArrow-LwODxVqr.js";import"./useControlledState-DV7blYjC.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./SelectionManager-B6Y4EMPJ.js";import"./FocusScope-BNRdhUBQ.js";import"./ColumnLayout-Bropz71p.js";import"./Avatar-B1I3mO9_.js";import"./AlertIcon-BQQez7us.js";import"./Image-DhDxxT2L.js";import"./Link-ZNqsbLzN.js";import"./OptionsButton-DmHK9BSn.js";import"./ButtonView-BDWHTqnS.js";import"./ContextMenuTriggerView-DSMg-aNk.js";import"./ContextMenuTrigger-NQQLpLoe.js";import"./OverlayTrigger-DGu3y4_r.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./FieldError-fCgHoEMk.js";import"./FieldError-B_BExaNJ.js";import"./AlertText-Cd8Si-3W.js";import"./ActionGroupView-oC77FUWd.js";import"./Content-CRiMoq0F.js";import"./Modal-BUEX4x6z.js";import"./Overlay-3y_zvGr_.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./Flex-CzqKXhE0.js";import"./useRef-D0S1EFiC.js";import"./remote-BClk6GLL.js";import"./Heading-Nh2qIPHf.js";import"./useFormValidation-przZuKLk.js";import"./Input-DI2XwVnV.js";import"./EmulatedBoldText-DLcv393z.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange","multiple"]}},args:{isDisabled:!1,isReadOnly:!1},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select file"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},H=y("submit"),s={},m={render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{accept:"image/png",...n,onChange:i,children:[e.jsx(B,{}),e.jsx(F,{children:"Drop image"}),e.jsx(L,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select image"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},a={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select files"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},l={render:n=>{const o=g(),i=C();return e.jsxs(j,{form:o,onSubmit:H,children:[e.jsxs(p,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{children:e.jsx(u,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(c,{children:[...o.watch("file")??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]}),e.jsx(D,{children:e.jsx(S,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
