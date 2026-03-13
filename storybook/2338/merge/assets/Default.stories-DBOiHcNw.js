import{r as h,j as e}from"./iframe-BFddea_x.js";import{F as t}from"./FileDropZone-h6NegU_R.js";import{S as p}from"./Section-DorsmKJX.js";import{F as c}from"./FileCardList-DvgVkWvl.js";import{F as d}from"./FileCard-qaO_sT2W.js";import{u as g,F as j,S,t as C}from"./FormRootError-DAozFL3q.js";import{B as u}from"./Button-DmFob37h.js";import{A as D}from"./ActionGroup-B4CMqS7f.js";import{a0 as x,a1 as B}from"./IconWarning-Cwahpn-Q.js";import{H as F}from"./Heading-C7vi7fKP.js";import{F as f}from"./FileField-DIrLmr6H.js";import{T as L}from"./Text-B70YymId.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DYJyevP0.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./useFieldComponent-DrOhnKye.js";import"./utils-D-aZUMcZ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DndMRLn5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useCollator-CHE9npsz.js";import"./useFocusRing-Bo7DYhXU.js";import"./context-CaZH5px0.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DZQSLH7U.js";import"./useFocusable-D-17EkqH.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./ContextMenuSection-C_9nT1gz.js";import"./ActionBatch-BLAWmMpV.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./browser-PH3BUHM2.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./dynamic-C85Jl_PG.js";import"./Dialog-Dko8Qxf5.js";import"./RSPContexts-DrvlE6Qo.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./SelectionManager-BwPLSKUJ.js";import"./FocusScope-QY6lrLAj.js";import"./ColumnLayout-D3SlZPhk.js";import"./Avatar-jsI8Thmp.js";import"./AlertIcon-Bx7C3Aee.js";import"./Image-UDW_fzf-.js";import"./Link-DtC85Uv0.js";import"./OptionsButton-DA2bTAKR.js";import"./ButtonView-O_aZgiJ1.js";import"./ContextMenuTriggerView-BOHJmbf2.js";import"./ContextMenuTrigger-3uwZO5tE.js";import"./OverlayTrigger-Yb2ddAp1.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./ActionGroupView-BXRFxTws.js";import"./Content-CWzMlKrq.js";import"./Modal-Bu11h-S7.js";import"./Overlay-Dpbqdx3Y.js";import"./LoadingSpinner-BTSUDAP0.js";import"./Flex-BeyItrRu.js";import"./useRef-Cur5NpMF.js";import"./FieldError-BfmusLP_.js";import"./FieldError-Dj7b6ixT.js";import"./AlertText-Cz5tkg5a.js";import"./remote-DmjGOFpp.js";import"./Heading-CkECWlTX.js";import"./useFormValidation-CYvJLeFF.js";import"./Input-DbK2aUtO.js";import"./EmulatedBoldText-C15EfUg3.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,rr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange","multiple"]}},args:{isDisabled:!1,isReadOnly:!1},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select file"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},H=y("submit"),s={},m={render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{accept:"image/png",...n,onChange:i,children:[e.jsx(B,{}),e.jsx(F,{children:"Drop image"}),e.jsx(L,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select image"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},a={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select files"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},l={render:n=>{const o=g(),i=C();return e.jsxs(j,{form:o,onSubmit:H,children:[e.jsxs(p,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{children:e.jsx(u,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(c,{children:[...o.watch("file")??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]}),e.jsx(D,{children:e.jsx(S,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const ir=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Multiple,m as WithAcceptedTypes,l as WithReactHookForm,ir as __namedExportsOrder,rr as default};
