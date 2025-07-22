import{r as h,j as e}from"./iframe-DR0piQh8.js";import{F as t}from"./FileDropZone-BX27uM_f.js";import{S as c}from"./Section-BphaAt9F.js";import{F as d}from"./FileCardList-CxM810j3.js";import{F as u}from"./FileCard-B8MgxMii.js";import{u as O,F as T,t as _}from"./Form-CHoSOKFG.js";import{B as s}from"./Button-YikxumGf.js";import{A as b}from"./ActionGroup-M4AaGAVj.js";import{Y as x,Z as k}from"./IconWarning-BgT_B94B.js";import{H as F}from"./Heading-Dl4Rh0-m.js";import{F as f}from"./FileField-Bp9r0gmf.js";import{T as U}from"./Text-6uPYoec8.js";import"./IllustratedMessage-CJkP1tYY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B6cRF0tH.js";import"./mergeRefs-ZMps22uY.js";import"./index-t1lRf4w9.js";import"./utils-B_3T_k5x.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Me8NF-Lu.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-dFBcJ0PQ.js";import"./useFocus-Drlqt-a_.js";import"./useCollator-M--gojr_.js";import"./context-BuOVuQqB.js";import"./useLocalizedStringFormatter-M2t-zX-G.js";import"./Button-1sXVFcCN.js";import"./ProgressBar-NTw_CuGV.js";import"./Label-DF_i3q4X.js";import"./Hidden-Ccv39zY0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B4R9EPAI.js";import"./useFocusRing-DNATWZb5.js";import"./useFocusable-CKOeQoF-.js";import"./VisuallyHidden-XA-B9eQQ.js";import"./ContextMenuSection-oEEZvvIf.js";import"./Action-CNI9x9AO.js";import"./context-BdW5YDeU.js";import"./useStatic-DJ0ktc6X.js";import"./browser-BcxJfz-7.js";import"./getActionGroupSlot-yJrAi_UC.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D78Vapha.js";import"./RSPContexts-BmbbCtV6.js";import"./OverlayArrow-4l6fdOKa.js";import"./useControlledState-DHSSOs10.js";import"./Collection-CwV6zAW0.js";import"./CollectionBuilder-D0nds9w3.js";import"./Separator-DSMvoxad.js";import"./Input-DGCSbbdR.js";import"./SearchField-CvXwi28e.js";import"./FieldError-DwuKV3Gh.js";import"./Form-B6wqL0ga.js";import"./Group-C4Z-pBhO.js";import"./useTextField-B-D6SiAk.js";import"./useFormReset-DGc_F2ms.js";import"./TextField-CeU2qgF-.js";import"./SelectionManager-Bk9G3wL6.js";import"./useEvent-DS0BHrpr.js";import"./FocusScope-QqKO2Hp7.js";import"./ColumnLayout-DHw6HVWy.js";import"./Avatar-CL1DdbZc.js";import"./AlertIcon-CnN5_-8U.js";import"./Image-IJBKMAFa.js";import"./Link-Dy6-QLBA.js";import"./OptionsButton-Cj5y92GP.js";import"./ButtonView-B00vERiw.js";import"./ContextMenuContent-B9JunCwJ.js";import"./Popover-DipyulJr.js";import"./DialogTriggerView-BFIY75rz.js";import"./Switch-DKMXII1S.js";import"./Label-BflZTkh8.js";import"./useToggleState-CwT2N50j.js";import"./FieldError-BkSA8Wen.js";import"./LoadingSpinner-D1Z7RG5x.js";import"./Heading-Boa0iipQ.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-bwsNBgve.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
