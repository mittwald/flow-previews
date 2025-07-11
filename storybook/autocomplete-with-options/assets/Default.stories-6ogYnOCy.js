import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BdpSHsi2.js";import{F as t}from"./FileDropZone-CWT06ySd.js";import{S as c}from"./Section-D9RcRj6-.js";import{F as d}from"./FileCardList-DF9UGsDx.js";import{F as u}from"./FileCard-KgggRbMW.js";import{u as b,F as I,t as T}from"./Form-CQZ8J359.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-BqjQDllf.js";import{A as w}from"./ActionGroup-BSqbR-at.js";import{k as x,l as W}from"./IconWarning-ChJeuzfp.js";import{H as F}from"./Heading-DBlto6FN.js";import{F as f}from"./FileField-CInE6PrR.js";import{T as E}from"./Text-D98B0EJd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./IllustratedMessage-VN-ODD9_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CYaoj4SL.js";import"./mergeRefs-f9wmNE8z.js";import"./iframe-B6CPIHFv.js";import"./index-DU8gk_nc.js";import"./index-lEnnwJps.js";import"./utils-CNUJJGcD.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BJ9sUP_l.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-XC8v3O7U.js";import"./useFocus-Ck8e1iB7.js";import"./useCollator-DUFyk2vx.js";import"./context-b6TG5uw0.js";import"./useLocalizedStringFormatter-DnyHa0G6.js";import"./Button-Cg-C5DwG.js";import"./ProgressBar-BKoZZ6mR.js";import"./Label-DsLtIi5U.js";import"./Hidden-RoZfe91Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DWaDT6O_.js";import"./useFocusRing-BmK03SYd.js";import"./useFocusable-CxpMFfxV.js";import"./VisuallyHidden-QAya5EjI.js";import"./ContextMenuSection-zQVa7KeL.js";import"./Action-BUQ9AQWq.js";import"./context-DopWCR0P.js";import"./useStatic-C6B_a_2J.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-DRNMS60c.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-lTFCM1XE.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-C6Yc-GKF.js";import"./useControlledState-rjpdN6qd.js";import"./Collection-DM8z4Ehe.js";import"./CollectionBuilder-CnXQkgAs.js";import"./Separator-COTp_Dm9.js";import"./Input--iZvazXr.js";import"./SearchField-D6iOCfE6.js";import"./FieldError-Dhym38A1.js";import"./Form-CXVBffIi.js";import"./Group-ryYih4mY.js";import"./useTextField-fBojglfp.js";import"./useFormReset-Tdit5Ane.js";import"./TextField-DnxvqTg5.js";import"./SelectionManager-DHrlGRPM.js";import"./useEvent-Bvgrsh8W.js";import"./FocusScope-BN4baDIG.js";import"./ColumnLayout-Ch6CotjP.js";import"./Avatar-D1E6_hBF.js";import"./AlertIcon-DCA1Ljs2.js";import"./Image-KnYoZ3hR.js";import"./Link-Di-6m2CS.js";import"./OptionsButton-BFgjr_SG.js";import"./ButtonView-DpreLZX5.js";import"./ContextMenuContent-C9kSzdGk.js";import"./Popover-DQHKpejI.js";import"./DialogTriggerView-D1mdJEye.js";import"./Switch-CYNdu33i.js";import"./Label-DdOrtruB.js";import"./useToggleState-2g6osGuI.js";import"./FieldError-PV0ViTtY.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-HsB1NgQu.js";import"./Heading-glOOglw2.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DOyoRrwd.js";const hr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,H,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(H=l.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var k,A,Z;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(Z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:Z.source}}};const xr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,xr as __namedExportsOrder,hr as default};
