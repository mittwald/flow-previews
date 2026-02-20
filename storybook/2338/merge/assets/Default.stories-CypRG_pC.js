import{r as h,j as e}from"./iframe-BXGfha1q.js";import{F as t}from"./FileDropZone-Dak8p3aJ.js";import{S as p}from"./Section-DH7vXPsV.js";import{F as c}from"./FileCardList-DSksitiH.js";import{F as d}from"./FileCard-BzU9KtsX.js";import{u as g,F as j,S,t as C}from"./ResetButton-BJ_wNjWf.js";import{B as u}from"./Button-DfmOHFsC.js";import{A as D}from"./ActionGroup-CxRxNddr.js";import{a0 as x,a1 as B}from"./IconWarning-1Z1PxSqQ.js";import{H as F}from"./Heading-BHfoL7cG.js";import{F as f}from"./FileField-CXrsXNKf.js";import{T as L}from"./Text-BbFupL_Y.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CxGPtuBH.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./useFieldComponent-BBRXs3en.js";import"./utils-DDzB-hS3.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B1oZgTuN.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./useFocus-WJp8rgri.js";import"./useCollator-CF4rrgc2.js";import"./useFocusRing-DmfdXYcF.js";import"./context-C9BhwF0E.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./Button-DxgvyAFC.js";import"./ProgressBar-BSSI2Xkr.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DFEm-gMh.js";import"./useFocusable-DT8F95KZ.js";import"./VisuallyHidden-eEVd_sfi.js";import"./ContextMenuSection-DVxvJxxR.js";import"./ActionBatch-z52bmq8Z.js";import"./useOverlayController-yGpX5sn6.js";import"./useStatic-BExQ1RD0.js";import"./browser-P6njm6Fr.js";import"./getActionGroupSlot-D3NhVtPT.js";import"./dynamic-Cx3iunOI.js";import"./Dialog-DLzuiFtz.js";import"./RSPContexts-CG0vEblW.js";import"./OverlayArrow-CHQlEDE0.js";import"./useControlledState-Wh-cgAjH.js";import"./Collection-On6X8qP5.js";import"./CollectionBuilder-CyFJ2rhO.js";import"./SelectionIndicator-DRZNhSye.js";import"./Separator-BLnBy1SU.js";import"./SelectionManager-BheZPocr.js";import"./FocusScope-DorKcprJ.js";import"./ColumnLayout-Ca_zPp5k.js";import"./Avatar-DFoUENWr.js";import"./AlertIcon-DqNX7jjv.js";import"./Image-2zXtAN5U.js";import"./Link-CaSBOK33.js";import"./OptionsButton-T-1nG-84.js";import"./ButtonView-BYJeP13X.js";import"./ContextMenuTriggerView-BDswTaz1.js";import"./ContextMenuTrigger-Byk7iPD-.js";import"./OverlayTrigger-BPtqEArA.js";import"./OverlayContextProvider-CqEXBJRL.js";import"./FieldError-B0wR5GbE.js";import"./FieldError-B-_MD7Je.js";import"./AlertText-D4bpqMRF.js";import"./ActionGroupView-B4EOVs6v.js";import"./Content-BvqimwwE.js";import"./Modal-BngkIUxs.js";import"./Overlay-Bxv8vuKP.js";import"./LoadingSpinner-CnywtlQ4.js";import"./Flex-BoCsVhbv.js";import"./useRef-DsRyiFKF.js";import"./remote-DEIhwdad.js";import"./Heading-uLzTRNHK.js";import"./useFormValidation-51U-qV9x.js";import"./Input-DlEaT4nu.js";import"./EmulatedBoldText-CFo8qKvb.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange","multiple"]}},args:{isDisabled:!1,isReadOnly:!1},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select file"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},H=y("submit"),s={},m={render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{accept:"image/png",...n,onChange:i,children:[e.jsx(B,{}),e.jsx(F,{children:"Drop image"}),e.jsx(L,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select image"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},a={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select files"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},l={render:n=>{const o=g(),i=C();return e.jsxs(j,{form:o,onSubmit:H,children:[e.jsxs(p,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{children:e.jsx(u,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(c,{children:[...o.watch("file")??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]}),e.jsx(D,{children:e.jsx(S,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
