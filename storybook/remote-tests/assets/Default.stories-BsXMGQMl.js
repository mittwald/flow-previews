import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BKyFwriW.js";import{F as t}from"./FileDropZone-Br169paV.js";import{S as c}from"./Section-BC96zk_3.js";import{F as d}from"./FileCardList-0bpFtbhS.js";import{F as u}from"./FileCard-BV3Uxygn.js";import{u as k,F as I,t as T}from"./Form-DpYkGN_O.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-y_xQsClG.js";import{A as w}from"./ActionGroup-CNOdpYTp.js";import"./IconApp-DtTJ2r0A.js";import{i as x,j as W}from"./IconWarning-BwSZGWRf.js";import{H as F}from"./Heading-tfuBRgBf.js";import{F as f}from"./FileField-D2RJAb9o.js";import{T as E}from"./Text-BoP-iRG5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IllustratedMessage-DBaz9RiV.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmJbWEDO.js";import"./index-C6uLyQP3.js";import"./index-DQw2Bw4b.js";import"./index-C5hMr7Vs.js";import"./utils-DDUQIigj.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-yNWxiVQR.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DAPKuvGY.js";import"./useFocus-DNP1_3BC.js";import"./useCollator-BnjbLxAL.js";import"./useLocalizedStringFormatter-B9DCAH-T.js";import"./Button-DL5r24IA.js";import"./ProgressBar-C4A5wsjg.js";import"./Label-i7acEou4.js";import"./Hidden-6cPdUftz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CK926LJU.js";import"./useFocusRing-BfJpuzZz.js";import"./useFocusable-DFPniEHk.js";import"./VisuallyHidden-Dk-02uN1.js";import"./ContextMenuSection-CPhM0sZK.js";import"./Action-i0thx0q2.js";import"./context-DBHSqzRK.js";import"./useStatic--5L2q-n6.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-DrfnkDvY.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-6iLCfCA_.js";import"./RSPContexts-BTRAHvSh.js";import"./OverlayArrow-BL-OvAHI.js";import"./useControlledState-Cu5tmcxR.js";import"./Collection-CQq09VNS.js";import"./CollectionBuilder-R_fDQQgL.js";import"./Separator-BUgKPSk1.js";import"./SelectionManager-B8z5pZap.js";import"./useEvent-C5s-DRkH.js";import"./FocusScope-DxW0A0A2.js";import"./ColumnLayout-BdS4rkCQ.js";import"./Avatar-9p84LjLC.js";import"./react-children-utilities-BxrMh-22.js";import"./Image-BHuclVyO.js";import"./Link-DLeFshbm.js";import"./Wrap-DQq6jo70.js";import"./FieldError-BpzgSl-I.js";import"./FieldError-Cj9Fprf0.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-DbRP1bJP.js";import"./Heading-BGdWAVxG.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-Dyo9Ifhv.js";import"./Input-RYKDaaJa.js";import"./EmulatedBoldText-By-RYQJw.js";const ir={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),a={},m={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=k(),i=T();return e.jsxs(I,{form:n,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:b.source}}};const nr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Multiple,m as WithAcceptedTypes,p as WithReactHookForm,nr as __namedExportsOrder,ir as default};
