import{r as h,j as e}from"./iframe-ABGSKs5r.js";import{F as t}from"./FileDropZone-BYLSqt7j.js";import{S as c}from"./Section-Bo-OB3QN.js";import{F as d}from"./FileCardList-CuYpUNXF.js";import{F as u}from"./FileCard-xy0ECf6W.js";import{u as O,F as T,t as _}from"./Form-B-B81hdU.js";import{B as s}from"./Button-Q43F_r8t.js";import{A as b}from"./ActionGroup-BnRYMoCo.js";import{Y as x,Z as k}from"./IconWarning-CrQ4Sq1v.js";import{H as F}from"./Heading-D-Oz3E6h.js";import{F as f}from"./FileField-D7Pi8-NJ.js";import{T as U}from"./Text-DtVn_38U.js";import"./IllustratedMessage-D8h29k6e.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-I2hhpXOk.js";import"./mergeRefs-ARavDgvF.js";import"./index-DcXxLGBR.js";import"./utils-DiDGDlBS.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BcmTaKwf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DcKqU1cs.js";import"./useFocus-Dg7gZngi.js";import"./useCollator-W9bifTbC.js";import"./context-DyJmA51t.js";import"./useLocalizedStringFormatter-CvJCn7rq.js";import"./Button-iaRAOLSz.js";import"./ProgressBar-CGoCl-ZJ.js";import"./Label-BwOKtJNA.js";import"./Hidden-B4dLwXdT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BBkNBI46.js";import"./useFocusRing-Q7Twgd_z.js";import"./useFocusable-BAjBFm0a.js";import"./VisuallyHidden-DZthTgNa.js";import"./ContextMenuSection-C2tUWO8i.js";import"./Action-CUvrUwti.js";import"./context-D7oi58C7.js";import"./useStatic-CcRZhvyK.js";import"./browser-BJO6t65z.js";import"./getActionGroupSlot-GvSmty2r.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BtJFOPGU.js";import"./RSPContexts-fBWTPx9Q.js";import"./OverlayArrow-bYgiNorp.js";import"./useControlledState-Un3rm8eO.js";import"./Collection-Dxy4s6rJ.js";import"./CollectionBuilder-COEyccke.js";import"./Separator-CSQ2PCE5.js";import"./Group-WLHEG_qD.js";import"./SearchField-C3LVCaj4.js";import"./FieldError-B1yCOr13.js";import"./Form-CvEoesSu.js";import"./useTextField-A3YOYzMp.js";import"./useFormReset-CDcF8HBQ.js";import"./TextField-CYxV6_KF.js";import"./useEvent-D4qKx0m_.js";import"./SelectionManager-_MA_Xqcw.js";import"./FocusScope-CeShPDZQ.js";import"./ColumnLayout-BP89EgHY.js";import"./Avatar-DaVIx6PO.js";import"./AlertIcon-BA-dTqII.js";import"./Image-DrKNKOx0.js";import"./Link-C-b1YhvE.js";import"./OptionsButton-CrijPSR0.js";import"./ButtonView-C5W5X-1i.js";import"./ContextMenuContent-D8SLu2c3.js";import"./Popover-fCyYaW3S.js";import"./DialogTriggerView-D7J_WAXm.js";import"./Switch-ccBRBlqw.js";import"./Label-B_lAnajd.js";import"./useToggleState-DGNtwAJG.js";import"./FieldError-C4jPbCeF.js";import"./LoadingSpinner-Dzzm5nCT.js";import"./Heading-CwqpXkmg.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-GSAm8QjJ.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
