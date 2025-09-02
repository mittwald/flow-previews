import{r as h,j as e}from"./iframe-DoW4S5y5.js";import{F as t}from"./FileDropZone-bWIbCyQP.js";import{S as c}from"./Section-C9OO6MGu.js";import{F as d}from"./FileCardList-CLWY42t2.js";import{F as u}from"./FileCard-CTM42Uic.js";import{u as O,F as T,t as _}from"./Form-B2XAsLmK.js";import{B as s}from"./Button-CJ9GVWSA.js";import{A as b}from"./ActionGroup-Cwy1Fa-m.js";import{Y as x,Z as k}from"./IconWarning-1bSGr7bL.js";import{H as F}from"./Heading-Dt1Rqblk.js";import{F as f}from"./FileField-MfTjEgIT.js";import{T as U}from"./Text-BWWLLA_C.js";import"./IllustratedMessage-YKYqGmdT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqGtFlt4.js";import"./mergeRefs-Ka_JxYbf.js";import"./index-ywv6zfVU.js";import"./utils-BERKyAtu.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C09El9xQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-xAN8HAzj.js";import"./useFocus-CTercWxn.js";import"./useCollator-CKm8HelV.js";import"./context-DLINqX3o.js";import"./useLocalizedStringFormatter-C5IBRtX2.js";import"./Button-DnWzyqBm.js";import"./ProgressBar-Cw6ko2xq.js";import"./Label-BiPavfPM.js";import"./Hidden-DdNFa5_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BTQEKaY-.js";import"./useFocusRing-B5qgIIvG.js";import"./useFocusable-Caaze2NE.js";import"./VisuallyHidden-BKF9ViHg.js";import"./ContextMenuSection-COBm8Dng.js";import"./Action-CvPFBQ3X.js";import"./context-Ex8JCHDm.js";import"./useStatic-CyJ13LoA.js";import"./browser-1Svz-vih.js";import"./getActionGroupSlot-C-O0F5Jp.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BNyqjTo3.js";import"./RSPContexts-BR0kwtoC.js";import"./OverlayArrow-Cnmawvtl.js";import"./useControlledState-DwXivsGS.js";import"./Collection-Bm_qpX5D.js";import"./CollectionBuilder-zDP_AyQT.js";import"./Separator-B7bt-k6s.js";import"./Group-BtU7cQ2J.js";import"./SearchField-BenY0OV9.js";import"./FieldError-DdRlRixc.js";import"./Form-1DUWHykH.js";import"./useTextField-DmJTXkvZ.js";import"./useFormReset-DRCEBnHw.js";import"./TextField-DHHX1OVE.js";import"./useEvent-rS73qyHD.js";import"./SelectionManager-B1xZchnP.js";import"./FocusScope-C1si8CoR.js";import"./ColumnLayout-ldahmIM3.js";import"./Avatar-DtCbY4xt.js";import"./AlertIcon-BMWYXnkh.js";import"./Image-DIjzxP-S.js";import"./Link-CoE1Lnwt.js";import"./ButtonView-CRbshs7Y.js";import"./ContextMenuContent-CwETirAO.js";import"./Popover-DjXoYR6o.js";import"./DialogTriggerView-Cc9fs5Ki.js";import"./Switch-B8wcm431.js";import"./Label-DBV8eSx5.js";import"./useToggleState-U6u_Krhx.js";import"./FieldError-BGjDwda8.js";import"./LoadingSpinner-C4oFajCL.js";import"./Heading-BpcFR_NP.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-88Z3nw3V.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const ar=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,ar as __namedExportsOrder,mr as default};
