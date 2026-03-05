import{r as h,j as e}from"./iframe-BcqfzoOA.js";import{F as t}from"./FileDropZone-BMsHv2TG.js";import{S as p}from"./Section-B_QgMIam.js";import{F as c}from"./FileCardList-coeh3OkG.js";import{F as d}from"./FileCard-D7koByLH.js";import{u as g,F as j,S,t as C}from"./ResetButton--7CtDtWT.js";import{B as u}from"./Button-C2msjhlA.js";import{A as D}from"./ActionGroup-Cjv-TUqT.js";import{a0 as x,a1 as B}from"./IconWarning-Bupv8NYZ.js";import{H as F}from"./Heading-CPq-dFYl.js";import{F as f}from"./FileField-CUaTNiCH.js";import{T as L}from"./Text-1XRmWCfn.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CyUsaQpU.js";import"./clsx-B-dksMZM.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./index-AZuRIocR.js";import"./useFieldComponent-CSNqGKWj.js";import"./utils-Bwp7PlhH.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CALsrB3x.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./useFocus-BgTDZkkG.js";import"./useCollator-B74toyi9.js";import"./useFocusRing-CK0lr4fW.js";import"./context-qhtcW2k7.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Lauho74f.js";import"./useFocusable-B97W14wM.js";import"./VisuallyHidden-0GKWPw_x.js";import"./ContextMenuSection-CYrr5VC5.js";import"./ActionBatch-D231mKj-.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./browser-CFz57TUe.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./dynamic-CQVZMaTn.js";import"./Dialog-Ce_unDUt.js";import"./RSPContexts-D9SkabFV.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./SelectionManager-CMNiFoQ-.js";import"./FocusScope-CPNafWEX.js";import"./ColumnLayout-DfUqFJib.js";import"./Avatar-DsAYI_52.js";import"./AlertIcon-DTPBfeU8.js";import"./Image-XQTr2ZYo.js";import"./Link-YqMugRW6.js";import"./OptionsButton-oMyDQc2e.js";import"./ButtonView-BKGV8dNz.js";import"./ContextMenuTriggerView-BRGoSHTV.js";import"./ContextMenuTrigger-C9u8PzU3.js";import"./OverlayTrigger-CxrHdMrt.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./FieldError-COredAmn.js";import"./FieldError-BECkkLSz.js";import"./AlertText-BT22HNok.js";import"./ActionGroupView-Cb_7F3WZ.js";import"./Content-B5PlHrRz.js";import"./Modal-0HeinRUt.js";import"./Overlay-Ce9iKBD7.js";import"./LoadingSpinner-ULzpGe8L.js";import"./Flex-BdEN8x02.js";import"./useRef-0Ps7frL9.js";import"./remote-x3smQXnv.js";import"./Heading-ZbAppe82.js";import"./useFormValidation-BMgNFXni.js";import"./Input-Bku180kF.js";import"./EmulatedBoldText-ZgwGLRX1.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange","multiple"]}},args:{isDisabled:!1,isReadOnly:!1},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select file"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},H=y("submit"),s={},m={render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{accept:"image/png",...n,onChange:i,children:[e.jsx(B,{}),e.jsx(F,{children:"Drop image"}),e.jsx(L,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select image"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},a={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select files"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},l={render:n=>{const o=g(),i=C();return e.jsxs(j,{form:o,onSubmit:H,children:[e.jsxs(p,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{children:e.jsx(u,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(c,{children:[...o.watch("file")??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]}),e.jsx(D,{children:e.jsx(S,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
