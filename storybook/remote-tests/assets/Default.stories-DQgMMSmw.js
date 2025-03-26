import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CXcpQZ5J.js";import{F as t}from"./FileDropZone-DcaRUsmk.js";import{S as c}from"./Section-DsNdiMUn.js";import{F as d}from"./FileCardList-pfNnL6OD.js";import{F as u}from"./FileCard-C8RGa0lY.js";import{u as k,F as I,t as T}from"./Form-CyrToC7B.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-DoxNqpU5.js";import{A as w}from"./ActionGroup-Dqbs5KVE.js";import"./IconApp-C5KCAdlI.js";import{i as x,j as W}from"./IconWarning-C6q-vt44.js";import{H as F}from"./Heading-JTZ2bzsA.js";import{F as f}from"./FileField-CP9-l0oT.js";import{T as E}from"./Text-Dr5MNJ9m.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./IllustratedMessage-BzQwLcKQ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./utils-D_n-6U4k.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BUuVncJZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BoT2JKOr.js";import"./useFocus-DPMzGzIF.js";import"./useCollator-BSqHj9jo.js";import"./useLocalizedStringFormatter-BQtswni5.js";import"./Button-BcgzNVYq.js";import"./ProgressBar-8nsGDrqI.js";import"./Label-D7zTyyav.js";import"./Hidden-DtYLaSTT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DKvzVrwU.js";import"./useFocusRing-C5Ht9MUl.js";import"./useFocusable-C54KMRcY.js";import"./VisuallyHidden-nUs_Pnf6.js";import"./ContextMenuSection-BGfGuiMH.js";import"./Action-BEVxohwb.js";import"./context-DaPO0HZf.js";import"./useStatic-RnO7WcrC.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-BilYt8La.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D9rW5YgD.js";import"./RSPContexts-C2SW_8A9.js";import"./OverlayArrow-CB6H_PzN.js";import"./Collection-D2C_lGLj.js";import"./CollectionBuilder-B3MPjffQ.js";import"./Separator-MF6Pdxex.js";import"./useOverlayTriggerState-EP699KjE.js";import"./useControlledState-CHe-wEx1.js";import"./SelectionManager-DLUrYsh7.js";import"./useEvent-9NPw0H85.js";import"./FocusScope-ienAdI6u.js";import"./ColumnLayout-BhUO9y8z.js";import"./Avatar-wJbs4k8b.js";import"./react-children-utilities-DD9PhoP7.js";import"./Image-RII0nsTh.js";import"./Link-BSilDyVR.js";import"./Wrap-DQq6jo70.js";import"./FieldError-B3rmrlTw.js";import"./FieldError-BGs8e4N-.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-C8RokD4H.js";import"./Heading-ChI_1Pt6.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-xTAo0ZUA.js";import"./Input-B3uAq9ei.js";import"./EmulatedBoldText-BPJW4PHD.js";const nr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),a={},m={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=k(),i=T();return e.jsxs(I,{form:n,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=m.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,H,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(H=l.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var A,Z,b;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(b=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:b.source}}};const or=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Multiple,m as WithAcceptedTypes,p as WithReactHookForm,or as __namedExportsOrder,nr as default};
