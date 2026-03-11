import{r as x,j as e}from"./iframe-DlWpeVbs.js";import{F as t}from"./FileDropZone-CC_YjbJ4.js";import{S as d}from"./Section-BrxRU1hJ.js";import{F as u}from"./FileCardList-BWLCqkyf.js";import{F}from"./FileCard-BItgzhj4.js";import{u as S,F as C,S as D,t as y}from"./FormRootError-DW845PWo.js";import{B as f}from"./Button-OB72uiKS.js";import{A as b}from"./ActionGroup-5C-gGCHv.js";import{a0 as j,a1 as B}from"./IconWarning-CwuMGyll.js";import{H as g}from"./Heading-BJuxWHmq.js";import{F as h}from"./FileField-NUj53yP_.js";import{T as O}from"./Text-BjwiRmws.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bpn_WHS6.js";import"./clsx-B-dksMZM.js";import"./flowComponent-e7OfeKLs.js";import"./index-CKa2CbgH.js";import"./index-Ci0KQ92C.js";import"./useFieldComponent-CpDSJ5w8.js";import"./utils-BWqiCJWQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BEVTNZ1h.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BQqcwX0K.js";import"./useFocus-DZ2sW_Jx.js";import"./useCollator-D4ZzLXhg.js";import"./context-w6Z3dllt.js";import"./useLocalizedStringFormatter-BZrkd9Aw.js";import"./useFocusRing-BVQNDpKt.js";import"./Button-BH6lR-Fb.js";import"./ProgressBar-QkXikNFy.js";import"./Label-CEM-XGBZ.js";import"./Hidden-DSSLapPq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CW_WdW_p.js";import"./useFocusable-BrXdRr5r.js";import"./VisuallyHidden-tMd7tplK.js";import"./ContextMenuSection-BiNqDgyA.js";import"./ActionBatch-C-ID7iPf.js";import"./useOverlayController-BQMakZl8.js";import"./useStatic-JbSR48w4.js";import"./browser-CHTiPLC9.js";import"./getActionGroupSlot-bYWxcQao.js";import"./dynamic-D3tAnWym.js";import"./Dialog-DM93NPwE.js";import"./RSPContexts-8MG42HPe.js";import"./OverlayArrow-Bovj8f2H.js";import"./useControlledState--75VKtTq.js";import"./Collection-BmIET0gF.js";import"./CollectionBuilder-CvIMXDSz.js";import"./SelectionIndicator-Cov2iNqV.js";import"./Separator-i6U77Zoe.js";import"./SelectionManager-D1b7L286.js";import"./useEvent-CVjq63ge.js";import"./FocusScope-Cd4jqLlg.js";import"./ColumnLayout-Ch_XhiCC.js";import"./Avatar-DUtivJUf.js";import"./AlertIcon-DyJmeCBc.js";import"./Image-CzCha_Up.js";import"./Link-CdN37rAD.js";import"./OptionsButton-Bs4Ho8v5.js";import"./ButtonView-BEjF0cHe.js";import"./ContextMenuTriggerView-DPQQU_IA.js";import"./ContextMenuTrigger-C_Pl5-jO.js";import"./OverlayTrigger-hKGFSF4k.js";import"./OverlayContextProvider-DIGc_6OE.js";import"./ActionGroupView-BIh_cM4-.js";import"./Content-opwEsj_c.js";import"./Modal-O25jLubx.js";import"./Overlay-DA629dSj.js";import"./LoadingSpinner-C6D9eT_m.js";import"./Flex-DFZNaOVm.js";import"./useRef-KpLHRpWI.js";import"./FieldError-wdxD7fJg.js";import"./FieldError-CO2oyPLw.js";import"./AlertText-Bn9b-fyG.js";import"./remote-Hfn3BG4Y.js";import"./Heading-DCdSeC1b.js";import"./useFormValidation-7MNrcMSj.js";import"./Input-DN6TuXy8.js";import"./EmulatedBoldText-aDVaHGl3.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
