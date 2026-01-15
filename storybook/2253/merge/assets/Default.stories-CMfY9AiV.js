import{r as x,j as e}from"./iframe-DA37PzgD.js";import{F as t}from"./FileDropZone-CVM6qmF7.js";import{S as d}from"./Section-CLHfQYLM.js";import{F as u}from"./FileCardList-B-79F2JG.js";import{F}from"./FileCard-sDkCRcxQ.js";import{u as S,F as C,t as D}from"./Form-CNVzXB2H.js";import{S as y}from"./ResetButton-CD2o3ffQ.js";import{B as f}from"./Button-C_3hQ6qU.js";import{A as b}from"./ActionGroup-zt1HPiGK.js";import{$ as j,a0 as B}from"./IconWarning-DMc9nDIB.js";import{H as g}from"./Heading-IQrV0yVS.js";import{F as h}from"./FileField-H-EbE8zH.js";import{T as O}from"./Text-CKy5VQ2_.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CwGG88KB.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DxL-Dn0k.js";import"./index-BgSlp0g3.js";import"./index-CccRe4nm.js";import"./useFieldComponent-DTrWN6Rf.js";import"./utils-DtYp6psM.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-VNYIIeBR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrQo68aR.js";import"./useFocus-Ck97lmu1.js";import"./useCollator-BaT-QBRk.js";import"./context-KzPqYKh3.js";import"./useLocalizedStringFormatter-C1YnvIwi.js";import"./Button-BzF7Ww8-.js";import"./ProgressBar-Dk36AjFP.js";import"./Label-D_nNHFmP.js";import"./Hidden-CyblAlwf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress--pFlH7xw.js";import"./useFocusRing-GdKi_2te.js";import"./useFocusable-_BBBrAx0.js";import"./VisuallyHidden-C_Tup-b1.js";import"./ContextMenuSection-DYM7NU_i.js";import"./Action-hYBLKXUj.js";import"./context-Cc9V1wfK.js";import"./useStatic-ChmTLNpH.js";import"./browser-Tq-Ovndo.js";import"./getActionGroupSlot-wxzu3uZW.js";import"./dynamic-Cec-XZha.js";import"./Dialog-hpWxHudW.js";import"./RSPContexts-DnMMFVEJ.js";import"./OverlayArrow-BTxrL9C1.js";import"./useControlledState-izS5uoD6.js";import"./Collection-Br_xwhc2.js";import"./CollectionBuilder-DSPHiwuI.js";import"./SelectionIndicator-D-mCry-j.js";import"./Separator-uGGsp39Q.js";import"./SelectionManager-WiFwd4h7.js";import"./useEvent-D5fcY2Sa.js";import"./FocusScope-CIeecyJ9.js";import"./ColumnLayout-C4hSSwie.js";import"./Avatar-D2qchoY4.js";import"./AlertIcon-BbDcA2fv.js";import"./Image-XmwLqecN.js";import"./Link-yESZXTxq.js";import"./OptionsButton-BOqbMcgC.js";import"./ButtonView-0dv953X9.js";import"./ContextMenuTriggerView-3Sh68y1j.js";import"./ContextMenuTrigger-CE49cPBe.js";import"./OverlayTrigger-BLRGcvFA.js";import"./OverlayContextProvider-DWmJMYYY.js";import"./FieldError-CnCGw98P.js";import"./FieldError-jhFQ-VHV.js";import"./AlertText-HBRlOgXf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-qcoJkYAs.js";import"./LoadingSpinner-YNnYvyP0.js";import"./remote-BJWo5b31.js";import"./Heading-C-vMGDS8.js";import"./useFormValidation-2Nc27zh7.js";import"./Input-BujLciHZ.js";import"./EmulatedBoldText-CMCwPeqW.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const rr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,rr as __namedExportsOrder,er as default};
