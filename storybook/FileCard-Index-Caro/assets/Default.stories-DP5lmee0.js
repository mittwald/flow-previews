import{r as h,j as e}from"./iframe-vEDY1jTX.js";import{F as t}from"./FileDropZone-DZkpHQhL.js";import{S as c}from"./Section-BpxiJqeT.js";import{F as d}from"./FileCardList-DhIB6QWx.js";import{F as u}from"./FileCard-CayXr4hQ.js";import{u as O,F as T,t as _}from"./Form-C1ZoBlgQ.js";import{B as s}from"./Button-xQdRWtXu.js";import{A as b}from"./ActionGroup-CpH_bKG8.js";import{Y as x,Z as k}from"./IconWarning-Br_z56yn.js";import{H as F}from"./Heading-Db4wCs5d.js";import{F as f}from"./FileField-BHWPUzop.js";import{T as U}from"./Text-75grQ_r_.js";import"./IllustratedMessage-MjUWzJ1p.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D1FW-2uj.js";import"./mergeRefs-CKsG1c36.js";import"./index-C6zHk2IC.js";import"./utils-gfhUS_KB.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C6tNNGeu.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DgiwqdF_.js";import"./useFocus-bOn2kcoo.js";import"./useCollator-F0CDxzTU.js";import"./context-DTpTEKQR.js";import"./useLocalizedStringFormatter-BqEHuk_G.js";import"./Button-CkK3LebK.js";import"./ProgressBar-9Fj4GJ2Q.js";import"./Label-DboWEm2w.js";import"./Hidden-Bejm4KRb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-spwLqW3f.js";import"./useFocusRing-VIyZvsiy.js";import"./useFocusable-ChYDg6I2.js";import"./VisuallyHidden-Dyzng5Uc.js";import"./ContextMenuSection-C4HwQSFG.js";import"./Action-B7TuOJwt.js";import"./context-CCKbj613.js";import"./useStatic-BCP0-isc.js";import"./browser-C6Q9Qk87.js";import"./getActionGroupSlot-qWDEZv5e.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BJmoKeFy.js";import"./RSPContexts-DWSs-nZQ.js";import"./OverlayArrow-twlWLGKk.js";import"./useControlledState-CQf3r7ZL.js";import"./Collection-CGUFB12f.js";import"./CollectionBuilder-Czcc5V6M.js";import"./Separator-CcFrx14D.js";import"./Input-CX0hj3qY.js";import"./SearchField-CjtC4DwQ.js";import"./FieldError-QhGTfIPV.js";import"./Form-CA3We__k.js";import"./Group-Bwqfb8JX.js";import"./useTextField-DyXRlqMQ.js";import"./useFormReset-CgZBEhDH.js";import"./TextField-wFSW5he1.js";import"./SelectionManager-Co-ck4zL.js";import"./useEvent-7vAcQsYf.js";import"./FocusScope-DqjTzzUX.js";import"./ColumnLayout-BDlZC0Ra.js";import"./Avatar-PCS0Mz5y.js";import"./AlertIcon-BCKcL_jo.js";import"./Image-DErjuSox.js";import"./Link--4zZE2Gh.js";import"./OptionsButton-BD3EgmqQ.js";import"./ButtonView-DT4ex_B4.js";import"./ContextMenuContent-BBLYBZNU.js";import"./Popover-C5GydJN0.js";import"./DialogTriggerView-BCIqYBll.js";import"./Switch-CrP5-JA8.js";import"./Label-DkEv0v7K.js";import"./useToggleState-ClpPbLgz.js";import"./FieldError-BpiRfXIY.js";import"./LoadingSpinner-DEOdZhCL.js";import"./Heading-DtsmO95s.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CgqQYji0.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
