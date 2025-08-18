import{r as h,j as e}from"./iframe-xY198WZi.js";import{F as t}from"./FileDropZone-CcfAminW.js";import{S as c}from"./Section-pcfiJIJk.js";import{F as d}from"./FileCardList-DvjDqJle.js";import{F as u}from"./FileCard-CiVehq5K.js";import{u as O,F as T,t as _}from"./Form-UTsUzj8a.js";import{B as s}from"./Button-Bwr0Tqpq.js";import{A as b}from"./ActionGroup-B4l3PiVa.js";import{Y as x,Z as k}from"./IconWarning-DKtpXb3v.js";import{H as F}from"./Heading-BYQW7yRQ.js";import{F as f}from"./FileField-DtMwY1Ss.js";import{T as U}from"./Text-sCeau28A.js";import"./IllustratedMessage-CsDoWnmx.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bcl1TdL7.js";import"./mergeRefs-C3ATilz7.js";import"./index-DUH-JGkU.js";import"./utils-9eQBP1kk.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Caf7sjAz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-EZ6qW8_W.js";import"./useFocus-Dp6Kb8w7.js";import"./useCollator-CcxdQyrk.js";import"./context-cbiqA6Ma.js";import"./useLocalizedStringFormatter-CJ8Vq7It.js";import"./Button-quH8-MSh.js";import"./ProgressBar-D8GoG1d0.js";import"./Label-Dcgw9TtS.js";import"./Hidden-CtG-gAWP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DyqoAsF-.js";import"./useFocusRing-CNdh1loc.js";import"./useFocusable-BEMuxCdm.js";import"./VisuallyHidden-vDoGSijP.js";import"./ContextMenuSection-C5QxRJSb.js";import"./Action-D1Re6xpB.js";import"./context-DIL7reYg.js";import"./useStatic-BuBW5DuY.js";import"./browser-CoruqHMI.js";import"./getActionGroupSlot-rEXXQEwj.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-d75pDgMH.js";import"./RSPContexts-CJJdSkVj.js";import"./OverlayArrow-J-8UDj7n.js";import"./useControlledState-DwYELHJ7.js";import"./Collection-ytNMUbYn.js";import"./CollectionBuilder-BIND5Hyl.js";import"./Separator-b4M5uB6E.js";import"./Group-IN_qKSk9.js";import"./SearchField-cMs68yGv.js";import"./FieldError-Dq9uru64.js";import"./Form-Bh-UgxBm.js";import"./useTextField-Q2Y51r8y.js";import"./useFormReset-CwVzgzUX.js";import"./TextField-CNxjTF-I.js";import"./useEvent-B_ZLPh5h.js";import"./SelectionManager-DB1_71DO.js";import"./FocusScope-DirxfVa-.js";import"./ColumnLayout-lKjBCjoe.js";import"./Avatar-Dbz1aIaQ.js";import"./AlertIcon-rG9hqO5Q.js";import"./Image-DnM0OUf8.js";import"./Link-6xHZNffH.js";import"./OptionsButton-siU_mLh7.js";import"./ButtonView-CQIUCh9J.js";import"./ContextMenuContent-CkKQpACG.js";import"./Popover-LfzPlCkT.js";import"./DialogTriggerView-CQH_y4wT.js";import"./Switch-mPPfz1zd.js";import"./Label-BGqmtZoL.js";import"./useToggleState-4WReWeyD.js";import"./FieldError-D_bWmjSL.js";import"./LoadingSpinner-DDnO9vH9.js";import"./Heading-CfyHXzT7.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-D19FH_Aq.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
