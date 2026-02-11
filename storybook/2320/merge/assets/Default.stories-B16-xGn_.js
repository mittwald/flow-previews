import{r as x,j as e}from"./iframe-l3dQPg2D.js";import{F as t}from"./FileDropZone-C4X_ztmS.js";import{S as d}from"./Section-CVphuZOP.js";import{F as u}from"./FileCardList-DOwUJxoN.js";import{F}from"./FileCard-BiYaaRQ9.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DLfZ0hQG.js";import{B as f}from"./Button-CVhESpos.js";import{A as b}from"./ActionGroup-vmrUH0ag.js";import{a0 as j,a1 as B}from"./IconWarning-C2C4Ye1P.js";import{H as g}from"./Heading-Cf_VYr3b.js";import{F as h}from"./FileField-BRQWMHuN.js";import{T as O}from"./Text-Cd9ftiQT.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DIJXX_mj.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BopG63Mr.js";import"./index-C4NaKCSa.js";import"./index-BnwDl3XO.js";import"./useFieldComponent-CTh-2D00.js";import"./utils-BpR6PJXM.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CND2PMao.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Bgm61Ocu.js";import"./useFocus-BoIaqFAK.js";import"./useCollator-BSc7Uwep.js";import"./context-bJyTUMD1.js";import"./useLocalizedStringFormatter-DUXcPKxv.js";import"./useFocusRing-Sg4LsORI.js";import"./Button-Dfp0w4eo.js";import"./ProgressBar-DjNwNSer.js";import"./Label-zTT8xDTv.js";import"./Hidden-D7QtMOwf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CLrRc3iw.js";import"./useFocusable-CewhyE_c.js";import"./VisuallyHidden-D5CUP-QC.js";import"./ContextMenuSection-C_ZfDCN7.js";import"./Action-BglyJGiG.js";import"./context-BBlsigfO.js";import"./useStatic-BdWyaTNp.js";import"./browser-vgtThTGE.js";import"./getActionGroupSlot-Dy_Fxu9H.js";import"./dynamic-CCyGrJK3.js";import"./Dialog-ByCdR2Sm.js";import"./RSPContexts-D9dFuQ_b.js";import"./OverlayArrow-BBo0Td8e.js";import"./useControlledState-DV6ufSFw.js";import"./Collection-3pd5EYPv.js";import"./CollectionBuilder-BWIBmgEn.js";import"./SelectionIndicator-DJKLLJ3b.js";import"./Separator-70ZL6L0X.js";import"./SelectionManager-D6KTmYmL.js";import"./useEvent-D7GEvC9q.js";import"./FocusScope-Cs1Wy-O3.js";import"./ColumnLayout-CSgiEEpd.js";import"./Avatar-BPsREcLP.js";import"./AlertIcon-C6xXCfYQ.js";import"./Image-BTqXmfMm.js";import"./Link-C3SyFAUG.js";import"./OptionsButton-B1WA528v.js";import"./ButtonView-DNKUy4ei.js";import"./ContextMenuTriggerView-CTX1d7Wj.js";import"./ContextMenuTrigger-hiy0Yh-d.js";import"./OverlayTrigger-CR9Slz1y.js";import"./OverlayContextProvider-yNeb3roI.js";import"./FieldError-Q6bz3Uf7.js";import"./FieldError-DNTSOotb.js";import"./AlertText-D9cFuXo0.js";import"./useRef-FIk_DJsE.js";import"./LoadingSpinner-p4NafINf.js";import"./remote-VRbYHHBV.js";import"./Heading-D-Y77gHO.js";import"./useFormValidation-D7taYq4g.js";import"./Input-AZztYHyS.js";import"./EmulatedBoldText-CAbtCiS8.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const $e=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,$e as __namedExportsOrder,Xe as default};
