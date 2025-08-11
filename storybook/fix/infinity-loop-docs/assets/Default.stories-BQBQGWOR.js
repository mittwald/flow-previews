import{r as h,j as e}from"./iframe-Cvd7_oGo.js";import{F as t}from"./FileDropZone-_aX8BMS6.js";import{S as c}from"./Section-Bv0sDR2y.js";import{F as d}from"./FileCardList-DEZmNYtG.js";import{F as u}from"./FileCard-DEFewLVY.js";import{u as O,F as T,t as _}from"./Form-Bw5yIT9r.js";import{B as s}from"./Button-sQLGDwHF.js";import{A as b}from"./ActionGroup-BkvpjQxX.js";import{Y as x,Z as k}from"./IconWarning-x_Sg-cyk.js";import{H as F}from"./Heading-B-L-D_0d.js";import{F as f}from"./FileField-B9lsboJ0.js";import{T as U}from"./Text-hU5scIVG.js";import"./IllustratedMessage-tKutcQPa.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CjZ8S_R8.js";import"./mergeRefs-CjEz_01H.js";import"./index-DRhNAo74.js";import"./utils-DLoLmG8U.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-K3zhr9uI.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C20I_MYv.js";import"./useFocus-mBCJQH3P.js";import"./useCollator-Z2E5mfuy.js";import"./context-CPCW_rIy.js";import"./useLocalizedStringFormatter-BeSMCKuR.js";import"./Button-DH0dq0mD.js";import"./ProgressBar-Cckw_t5H.js";import"./Label-CEN2LQcE.js";import"./Hidden-DIqvoFI_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-dFXSg5ro.js";import"./useFocusRing-BORhh_J0.js";import"./useFocusable-ow-zpXhZ.js";import"./VisuallyHidden-ZBger3GJ.js";import"./ContextMenuSection-D36-o_RP.js";import"./Action-BDVxDuzM.js";import"./context-BKPp0JFq.js";import"./useStatic-JoVb8Rwt.js";import"./browser-Dthgcr78.js";import"./getActionGroupSlot-Bjasv4sz.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-B6nmokeD.js";import"./RSPContexts-BNHCum3R.js";import"./OverlayArrow-CZl6Sdtq.js";import"./useControlledState-BRJHAPjA.js";import"./Collection-BUlFfF8c.js";import"./CollectionBuilder-odsoNS1P.js";import"./Separator-UXxAVoEs.js";import"./Group-Dp7absvN.js";import"./SearchField-DmWHOfIU.js";import"./FieldError-BOfQUrOF.js";import"./Form-dIwvv5i0.js";import"./useTextField-DuBMDIMm.js";import"./useFormReset-TshWv7lU.js";import"./TextField-DNfwYwAs.js";import"./useEvent-CHUYW4wm.js";import"./SelectionManager-C8UQ25IV.js";import"./FocusScope-_f1yOmDv.js";import"./ColumnLayout-BkO20SiE.js";import"./Avatar-oRyojUAI.js";import"./AlertIcon-bSN5b0uQ.js";import"./Image-DwBnwCRv.js";import"./Link-C_V13rNI.js";import"./OptionsButton-BNH29DpJ.js";import"./ButtonView-CbIavsOL.js";import"./ContextMenuContent-BprI2VSw.js";import"./Popover-B4_hLkvX.js";import"./DialogTriggerView-BfIhiSrv.js";import"./Switch-BZ4l6SgY.js";import"./Label-DZmXl-gv.js";import"./useToggleState-d8PRqsnQ.js";import"./FieldError-Cucl0v59.js";import"./LoadingSpinner-CO56yyEM.js";import"./Heading-CH9Zg8Ky.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DDsUBT92.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
