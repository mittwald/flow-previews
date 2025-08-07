import{r as h,j as e}from"./iframe-D5sJq8Pp.js";import{F as t}from"./FileDropZone-CgTTTeLE.js";import{S as c}from"./Section-BB00AiD9.js";import{F as d}from"./FileCardList-C401j5qS.js";import{F as u}from"./FileCard-Db3a7T2R.js";import{u as O,F as T,t as _}from"./Form-D5WniLeE.js";import{B as s}from"./Button-6TUR0Zrk.js";import{A as b}from"./ActionGroup-BQAzYZMD.js";import{Y as x,Z as k}from"./IconWarning-DOhF27zV.js";import{H as F}from"./Heading-D3Bf2r0X.js";import{F as f}from"./FileField-uXheBZDn.js";import{T as U}from"./Text-DSs6zbpd.js";import"./IllustratedMessage-BayvsayP.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bv9cfvHt.js";import"./mergeRefs-9yWIebUE.js";import"./index-Cm1M_r0i.js";import"./utils-9AX_qn18.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DkuK7F_5.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Ch8Q4uqY.js";import"./useFocus-RhB9nR94.js";import"./useCollator-i6ItQplZ.js";import"./context-C2iapZe2.js";import"./useLocalizedStringFormatter-BQN07ymD.js";import"./Button-B2KXtDin.js";import"./ProgressBar-B1EDvacE.js";import"./Label-CqbD1Z1V.js";import"./Hidden-DQQQbJzb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DXXMSHM3.js";import"./useFocusRing-DOEM_U6y.js";import"./useFocusable-DeL6Y164.js";import"./VisuallyHidden-BeWBbeMu.js";import"./ContextMenuSection-B7Ct79il.js";import"./Action-DMCbC-Mq.js";import"./context-Bqz1H1Fh.js";import"./useStatic-C2JikVB-.js";import"./browser-Um_OLCfa.js";import"./getActionGroupSlot-DeknL7IW.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D26-Wb54.js";import"./RSPContexts-DjLkZjo9.js";import"./OverlayArrow-DbUVmUBM.js";import"./useControlledState-BiqnvFAK.js";import"./Collection-CrQdosmw.js";import"./CollectionBuilder-BhFH6yJo.js";import"./Separator-BLR5bueI.js";import"./Group-DaTscDKv.js";import"./SearchField-D8zXD-s8.js";import"./FieldError-DPBRE9in.js";import"./Form-B6p3srko.js";import"./useTextField-BQF8DS2o.js";import"./useFormReset-BYD-PEh4.js";import"./TextField-Ce9H6aw_.js";import"./useEvent-Nf0LSw3x.js";import"./SelectionManager-B8zwja7I.js";import"./FocusScope-Rm6rMrw2.js";import"./ColumnLayout-B-dEgkrD.js";import"./Avatar-DXFid7sl.js";import"./AlertIcon-4CF5WewO.js";import"./Image-oZq_RXcC.js";import"./Link-DUuEEbYf.js";import"./OptionsButton-DC4CnU2X.js";import"./ButtonView-NwszBnAY.js";import"./ContextMenuContent-Z11Z9YFr.js";import"./Popover-BrRw5WAn.js";import"./DialogTriggerView-BkTJ82k3.js";import"./Switch-BIjHTqBr.js";import"./Label-C9pkE3_l.js";import"./useToggleState-CsyvliJk.js";import"./FieldError-C_BRxZGF.js";import"./LoadingSpinner-ai3Tl6wI.js";import"./Heading-Clo5dAHJ.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DJswokg6.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
