import{r as h,j as e}from"./iframe-Bd70UBfQ.js";import{F as t}from"./FileDropZone-DGUCfye2.js";import{S as c}from"./Section-Ccy_pj8R.js";import{F as d}from"./FileCardList-BoG9AFEg.js";import{F as u}from"./FileCard-DR9BX3hv.js";import{u as O,F as T,t as _}from"./Form-DO6t9vBU.js";import{B as s}from"./Button-ABWfnhuf.js";import{A as b}from"./ActionGroup-keMuw0Mo.js";import{Y as x,Z as k}from"./IconWarning-Dx4sU-j9.js";import{H as F}from"./Heading-D3Cg8aZf.js";import{F as f}from"./FileField-DkSemZpS.js";import{T as U}from"./Text-DDmCr0c3.js";import"./IllustratedMessage-Dh6_fFJI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-i-IYwZFk.js";import"./mergeRefs-BlmmrTdi.js";import"./index-BXdiMNYx.js";import"./utils-BmyyYDYY.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DnJtq-Ca.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-w4mzRly1.js";import"./useFocus-_CMpkysi.js";import"./useCollator-DzDuPy2D.js";import"./context-C3LNBa76.js";import"./useLocalizedStringFormatter-CvG_jx-f.js";import"./Button-BTLR1vS2.js";import"./ProgressBar-CU3IfAKj.js";import"./Label-g6yaf0Tw.js";import"./Hidden-CvIRFHlC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Z-qLfgnH.js";import"./useFocusRing-DTBcK8mU.js";import"./useFocusable-rNBIEL3L.js";import"./VisuallyHidden-CEaQSbTN.js";import"./ContextMenuSection-BvZOhdeK.js";import"./Action-D2Y-ED2g.js";import"./context-CCwAOuxY.js";import"./useStatic-LzaGYsCx.js";import"./browser-CDzL9dyN.js";import"./getActionGroupSlot-DRV4djV0.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CX-LU2mB.js";import"./RSPContexts-ByMUw4AZ.js";import"./OverlayArrow-Cw8nIh42.js";import"./useControlledState-ChZkaxon.js";import"./Collection-S5kPVUME.js";import"./CollectionBuilder-DkUHX8v0.js";import"./Separator-DmvFwBU3.js";import"./Input-UumKyZ__.js";import"./SearchField-DmyF7w_w.js";import"./FieldError-BoxMIPJS.js";import"./Form-hLedV1Ku.js";import"./Group-DfP_y73Q.js";import"./useTextField-CAXEM3Cr.js";import"./useFormReset-D2aXstqB.js";import"./TextField-CLBMJ7hZ.js";import"./SelectionManager-CaueLSz8.js";import"./useEvent-EcQqHcfQ.js";import"./FocusScope-Bx1kvcbQ.js";import"./ColumnLayout-CDou7TzZ.js";import"./Avatar-BHXqCJME.js";import"./AlertIcon-eNzGkdSA.js";import"./Image-Dv-5nnM6.js";import"./Link-C_LKmU1c.js";import"./OptionsButton-r0CWd8zE.js";import"./ButtonView-Cw1wqJ1u.js";import"./ContextMenuContent-BPDkXJyw.js";import"./Popover-ChoCuIY1.js";import"./DialogTriggerView-DIXKjk2D.js";import"./Switch-BSpsNTtb.js";import"./Label-2hW8G0Q4.js";import"./useToggleState-B8_P_tNL.js";import"./FieldError-Cn-PtrFI.js";import"./LoadingSpinner-C9Uerl8R.js";import"./Heading-Bkmj7sNk.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CROyqepx.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const pr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,pr as __namedExportsOrder,lr as default};
