import{r as x,j as e}from"./iframe-CXQlTNqj.js";import{F as t}from"./FileDropZone-WT3PQ90w.js";import{S as d}from"./Section-D3kMglmp.js";import{F as u}from"./FileCardList-BLnRaXoQ.js";import{F}from"./FileCard-DtkFTMzg.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-CuQl0VZE.js";import{B as f}from"./Button-BlafpMbq.js";import{A as b}from"./ActionGroup-DpfWBi-0.js";import{a0 as j,a1 as B}from"./IconWarning-qWu7I_Pu.js";import{H as g}from"./Heading-NHDwQUXa.js";import{F as h}from"./FileField-DOKPQALV.js";import{T as O}from"./Text-B3somVi7.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-GcqnijFS.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C6ZYuDSe.js";import"./index-BSs4nRRG.js";import"./index-AYGk-Z4X.js";import"./useFieldComponent-Cn71_kOc.js";import"./utils-DV_byzth.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-QCBVP_aW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DrjDs4EL.js";import"./useFocus-DfPsdBQQ.js";import"./useCollator-BFpQRgzB.js";import"./context-CCBj18N5.js";import"./useLocalizedStringFormatter-B9SYg2k8.js";import"./useFocusRing-D1AlgOvW.js";import"./Button-BcwVzCcr.js";import"./ProgressBar-DkaBE4Rp.js";import"./Label-DrfdLf3_.js";import"./Hidden-CKkXVPeJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C3E8Ss2p.js";import"./useFocusable-D7YkDf-E.js";import"./VisuallyHidden-bRUw4X6B.js";import"./ContextMenuSection-nZf_hQYT.js";import"./ActionBatch-CqBtrpsE.js";import"./useOverlayController-E6hXP07l.js";import"./useStatic-D-kx8TMY.js";import"./browser-C0g7jXxm.js";import"./getActionGroupSlot-D2yWy39Q.js";import"./dynamic-UE7lg7x0.js";import"./Dialog-D3U2a9zn.js";import"./RSPContexts-CaXq0cAk.js";import"./OverlayArrow-sIEanX_d.js";import"./useControlledState-CC0ueLns.js";import"./Collection-TmQT-68Q.js";import"./CollectionBuilder-9Nd9UEc1.js";import"./SelectionIndicator-DQZUhYCh.js";import"./Separator-Bs-03xzt.js";import"./SelectionManager-CqkX1Rni.js";import"./useEvent-AkpP6oW4.js";import"./FocusScope-Dqueyleg.js";import"./ColumnLayout-DJ6U4Fzc.js";import"./Avatar-DMf63unF.js";import"./AlertIcon-B77GTCGL.js";import"./Image-Dj0XDsvv.js";import"./Link-CJD93-tw.js";import"./OptionsButton-tebPLRBE.js";import"./ButtonView-CW0bd9Hv.js";import"./ContextMenuTriggerView-CZ-dhuBb.js";import"./ContextMenuTrigger-BNYTsfXo.js";import"./OverlayTrigger-CeJmnxGE.js";import"./OverlayContextProvider-97FigBld.js";import"./FieldError-BB5Q0mgv.js";import"./FieldError-CtbrQfSs.js";import"./AlertText-GJJuhpY7.js";import"./ActionGroupView-DaaNBgYo.js";import"./Content-DYKIsFxH.js";import"./Modal-yrBxLTE3.js";import"./Overlay-DpNQvUDC.js";import"./LoadingSpinner-Wa1FVRzC.js";import"./Flex-BrEPexUM.js";import"./useRef-PDOIY6yC.js";import"./remote-aElBUAr6.js";import"./Heading-D8oa06Vc.js";import"./useFormValidation-CRz2e402.js";import"./Input-CLvZry-y.js";import"./EmulatedBoldText-DjcO8VHN.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
