import{r as x,j as e}from"./iframe-DewKgIpk.js";import{F as t}from"./FileDropZone-CFmfoNls.js";import{S as d}from"./Section-Cq4fcZ5v.js";import{F as u}from"./FileCardList-gdT8g3vS.js";import{F}from"./FileCard-Bid6qEKI.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-Dpl1xNUH.js";import{B as f}from"./Button-DK1DwTQu.js";import{A as b}from"./ActionGroup-CsnGu6B4.js";import{a0 as j,a1 as B}from"./IconWarning-CrJxptLM.js";import{H as g}from"./Heading-Bsg56Dmn.js";import{F as h}from"./FileField-D1SaeMH2.js";import{T as O}from"./Text-CAhyjFWz.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-BNlIrWEh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NiBZ5k5C.js";import"./index-BacMtczP.js";import"./index-BPUeLBAn.js";import"./useFieldComponent-D7thqSXy.js";import"./utils-CUPQPHYu.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CIY7d5XG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D1gJfZCU.js";import"./useFocus-ChnOBFmm.js";import"./useCollator-Ip-lvHDB.js";import"./context-DymIffM8.js";import"./useLocalizedStringFormatter-BmOUgtE0.js";import"./useFocusRing-DiJDuYpp.js";import"./Button-DrtrHFmq.js";import"./ProgressBar-rh0wULd6.js";import"./Label-Bc_6vIfO.js";import"./Hidden-J_iPf4da.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-S1YnS57K.js";import"./useFocusable-DVz_n5zl.js";import"./VisuallyHidden-DNvpUE5M.js";import"./ContextMenuSection-v31gfoed.js";import"./ActionBatch-aysWcgWo.js";import"./useOverlayController-dkwXzy8k.js";import"./useStatic-P7ECoT8y.js";import"./browser-D8jMTJt0.js";import"./getActionGroupSlot-B6WsgjQx.js";import"./dynamic-7D0Ds_bm.js";import"./Dialog-BgAnH5cc.js";import"./RSPContexts-CJFisqoy.js";import"./OverlayArrow-C0FkFBtp.js";import"./useControlledState-AVItU9lZ.js";import"./Collection-BqPIpj-l.js";import"./CollectionBuilder-B1x7jEag.js";import"./SelectionIndicator-BpbXr_mp.js";import"./Separator-CzQZZCJK.js";import"./SelectionManager-COdXd1z8.js";import"./useEvent-CLk-ZyZx.js";import"./FocusScope-BsYVWh0v.js";import"./ColumnLayout-Bmc6E69t.js";import"./Avatar-CeozoAQa.js";import"./AlertIcon-Dv2SXDVH.js";import"./Image-4EK57wLA.js";import"./Link-_1TKWVxp.js";import"./OptionsButton-BekOYyeQ.js";import"./ButtonView-DU9V458m.js";import"./ContextMenuTriggerView-q2kweOQv.js";import"./ContextMenuTrigger-59QdQP8e.js";import"./OverlayTrigger-CV6rtyLj.js";import"./OverlayContextProvider-DCwrSRDv.js";import"./FieldError-B3PY7-i2.js";import"./FieldError-BKx1r64I.js";import"./AlertText-BRg5iRF8.js";import"./ActionGroupView-CAM-V0fg.js";import"./Content-DTiR9lwx.js";import"./Modal-DYibmbrU.js";import"./Overlay-DezOH_1M.js";import"./LoadingSpinner-CskkGazD.js";import"./Flex-Y2OL3ID-.js";import"./useRef-DAA7TMQ_.js";import"./remote-B1GLKgHd.js";import"./Heading-Bhkk33xY.js";import"./useFormValidation-CdyRJz3a.js";import"./Input-BM_jCh0C.js";import"./EmulatedBoldText-DxGIr34d.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
