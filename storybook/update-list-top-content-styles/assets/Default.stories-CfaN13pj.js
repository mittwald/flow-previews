import{r as h,j as e}from"./iframe-C7QIGs8p.js";import{F as t}from"./FileDropZone-akx5pHvI.js";import{S as c}from"./Section-B3OxLutv.js";import{F as d}from"./FileCardList-LHc7gfPm.js";import{F as u}from"./FileCard-BPsaDxZk.js";import{u as O,F as T,t as _}from"./Form-CYUunjPS.js";import{B as s}from"./Button-BGr41c7E.js";import{A as b}from"./ActionGroup-Bo98KuL-.js";import{Y as x,Z as k}from"./IconWarning-X_5SFXzD.js";import{H as F}from"./Heading-BgFfgKFR.js";import{F as f}from"./FileField-DfHpE6zY.js";import{T as U}from"./Text-CTrM2jC7.js";import"./IllustratedMessage-CiB_jvxa.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BLMgZptu.js";import"./mergeRefs-CRedkLlp.js";import"./index-CQXo9c0q.js";import"./utils-BtsnBH_L.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-FQKaNMRy.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D-QYQdwI.js";import"./useFocus-ypxUxEvE.js";import"./useCollator-AgXB0Oy1.js";import"./context-C2AKAduY.js";import"./useLocalizedStringFormatter-DOPRUnFZ.js";import"./Button-B7-ATyHT.js";import"./ProgressBar-IpWCr7qx.js";import"./Label-BSYnHYDD.js";import"./Hidden-DWOQ1i8d.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bh987CF2.js";import"./useFocusRing-DKwzelHt.js";import"./useFocusable-C2Z9oquv.js";import"./VisuallyHidden-DORJbjtt.js";import"./ContextMenuSection-IPvrjop8.js";import"./Action-CyofG-Bf.js";import"./context-BDfHuVBm.js";import"./useStatic-BWe9m1of.js";import"./browser-C2BAwQT3.js";import"./getActionGroupSlot-Bx6JDBXT.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-J3EA-UkZ.js";import"./RSPContexts-vCu29erK.js";import"./OverlayArrow-ZcBTChKb.js";import"./useControlledState-KNtUQTSK.js";import"./Collection-Boesk9-D.js";import"./CollectionBuilder-DmHyKuX1.js";import"./Separator-l8xhzRbI.js";import"./Group-C1WKhAvj.js";import"./SearchField-D_-o_-wM.js";import"./FieldError-DNXr8e-i.js";import"./Form-BYQvXm3I.js";import"./useTextField-DceDZrVQ.js";import"./useFormReset-DrAuwzZe.js";import"./TextField-BQAs_udX.js";import"./useEvent-DpcPK9yZ.js";import"./SelectionManager-jQp60uSJ.js";import"./FocusScope-BUYOglmY.js";import"./ColumnLayout-DBPLFPC5.js";import"./Avatar-JKN-wPDQ.js";import"./AlertIcon-D-fjxPRV.js";import"./Image-DwXc08d0.js";import"./Link-CG_rrJAE.js";import"./OptionsButton-BtX1Foi_.js";import"./ButtonView-l9UeC4px.js";import"./ContextMenuContent-99n-LN-_.js";import"./Popover-D8n-M6I0.js";import"./DialogTriggerView-wftUC24y.js";import"./Switch-BbCiBmQB.js";import"./Label-Bc44wfjj.js";import"./useToggleState-CZjlB4vA.js";import"./FieldError-BirN45_p.js";import"./LoadingSpinner-Ce2BrOYf.js";import"./Heading-BkMKkvZn.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-_WA-B4P4.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
