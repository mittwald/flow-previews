import{r as x,j as e}from"./iframe-CtuK0rEJ.js";import{F as t}from"./FileDropZone-CsK2d5hl.js";import{S as d}from"./Section-2iB_IAde.js";import{F as u}from"./FileCardList-ddWpIzr6.js";import{F}from"./FileCard-B3Ow82vd.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BX7hRNPH.js";import{B as f}from"./Button-CC2cGGC1.js";import{A as b}from"./ActionGroup-BTUNgIac.js";import{a0 as j,a1 as B}from"./IconWarning-BSe4G4Pm.js";import{H as g}from"./Heading-BbatUer_.js";import{F as h}from"./FileField-BrFIdprc.js";import{T as O}from"./Text-CyAseKfN.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bw87t8yO.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsiSvDfm.js";import"./index-DyfnOEiT.js";import"./index-DPf65gvx.js";import"./useFieldComponent-CPjzSNK0.js";import"./utils-C1DNWP44.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DmIZo_mX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DJNpTGh1.js";import"./useFocus-N-Pc0sLJ.js";import"./useCollator-BzRay_B5.js";import"./context-BLHFXQwL.js";import"./useLocalizedStringFormatter-C0fwd0wV.js";import"./useFocusRing-Dq2x8hiG.js";import"./Button-CSRC_w1a.js";import"./ProgressBar-D8lgnq4k.js";import"./Label-BIhxl5Mj.js";import"./Hidden-lRNITHFC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Da2cRPrr.js";import"./useFocusable-AhKszEdS.js";import"./VisuallyHidden-D1Q1E2fL.js";import"./ContextMenuSection-J2A0uHtm.js";import"./Action-PwkWFif3.js";import"./context-CuLUjLGN.js";import"./useStatic-M0CnbsK2.js";import"./browser-Up8UMddv.js";import"./getActionGroupSlot-B6ptHBUs.js";import"./dynamic-6fOzfTlj.js";import"./Dialog-DqwEKDxA.js";import"./RSPContexts-Ci8ojbfD.js";import"./OverlayArrow-D5uKmzPJ.js";import"./useControlledState-Cc_BEFH0.js";import"./Collection-B0ADhrnF.js";import"./CollectionBuilder-DAn9FB1h.js";import"./SelectionIndicator-Ds2JAiCA.js";import"./Separator-CEf8TdmS.js";import"./SelectionManager-CRpdvIdx.js";import"./useEvent-D8j21rfZ.js";import"./FocusScope-Cm3IhtBV.js";import"./ColumnLayout-CM3gAUW5.js";import"./Avatar-MceGsVvw.js";import"./AlertIcon-CPMEIwAr.js";import"./Image-B9Yq-m4j.js";import"./Link-Bs4WRFZu.js";import"./OptionsButton-B0eNCZuB.js";import"./ButtonView-I97CEkNt.js";import"./ContextMenuTriggerView-BlT3F9VZ.js";import"./ContextMenuTrigger-CVlgkSBU.js";import"./OverlayTrigger-Bu3GFQ-B.js";import"./OverlayContextProvider-C66rhlmO.js";import"./FieldError-BKJxUnBZ.js";import"./FieldError-AgjktxA6.js";import"./AlertText-i0FuOWey.js";import"./useRef-C7qv1QkI.js";import"./LoadingSpinner-CJNtrFTB.js";import"./remote-DD8nhYq_.js";import"./Heading-BKLVTPfM.js";import"./useFormValidation-uULaRcd4.js";import"./Input-BchQzUPE.js";import"./EmulatedBoldText-BeUk81Jn.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
