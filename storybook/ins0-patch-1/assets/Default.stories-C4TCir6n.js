import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CXcpQZ5J.js";import{F as t}from"./FileDropZone-C3hkzfSV.js";import{S as c}from"./Section-Devnga4A.js";import{F as d}from"./FileCardList-3xJqvC9K.js";import{F as u}from"./FileCard-CII-24UN.js";import{u as b,F as I,t as T}from"./Form-DSNXfIMG.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-DwgkhfFv.js";import{A as w}from"./ActionGroup-BSzUWElk.js";import{j as x,k as W}from"./IconWarning-B9HL9CFH.js";import{H as F}from"./Heading-YTPyIOg9.js";import{F as f}from"./FileField-hvgOIZTs.js";import{T as E}from"./Text-ilWQSh2o.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./IllustratedMessage-qWlZIXgv.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BhVCUVKf.js";import"./mergeRefs-B22Il0iz.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./utils-Df1au6pS.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-WoclspSc.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrVJGper.js";import"./useFocus-Beyq6_MT.js";import"./useCollator-gRp1mHBo.js";import"./useLocalizedStringFormatter-PBUSZsmh.js";import"./Button-CAwd2L_u.js";import"./ProgressBar-DfZ38-9l.js";import"./Label-DfZa7xTI.js";import"./Hidden-DtYLaSTT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-v55RTCzR.js";import"./useFocusRing-Dy9tY2VR.js";import"./useFocusable-C5BPrGjf.js";import"./VisuallyHidden-D7VTLdOh.js";import"./ContextMenuSection-CuRIPxil.js";import"./Action-BfuzMKoN.js";import"./context-BJd9A0SI.js";import"./useStatic-CZNshcmv.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-UfL_FZTW.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DGCaVP1m.js";import"./RSPContexts-C2SW_8A9.js";import"./OverlayArrow-Cyo91zw-.js";import"./Collection-gb5i7bex.js";import"./CollectionBuilder-DJ8GEp2F.js";import"./Separator-rUEtuaIL.js";import"./useOverlayTriggerState-Bcoz_tbR.js";import"./useControlledState-CHe-wEx1.js";import"./SelectionManager-DrFVCucR.js";import"./useEvent-D5X-zOrV.js";import"./FocusScope-DN1fuaqe.js";import"./ColumnLayout-Cd0SXGvS.js";import"./Avatar-CtIqfVzJ.js";import"./react-children-utilities-DD9PhoP7.js";import"./AlertIcon-C5L47VAE.js";import"./Image-B2RAPQbt.js";import"./Link-D0qlutni.js";import"./OptionsButton-9vHJR5ip.js";import"./ButtonView-CFSsOiRA.js";import"./ContextMenuContent-DsIk-YLD.js";import"./Popover-CT76g4R7.js";import"./OverlayTrigger-CxHIuRua.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-6LSgdenh.js";import"./Switch-DfO96G7U.js";import"./Label-Ccht5eDB.js";import"./useToggleState-Bew6BMnT.js";import"./useFormReset-McAVcQ-S.js";import"./FieldError-Egs4LnTH.js";import"./FieldError-Cz4aM9kS.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-GJE4fldi.js";import"./Heading-DBX-SCuC.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-CX89bhxE.js";import"./Input-Bw24jdWy.js";import"./EmulatedBoldText-BPJW4PHD.js";const ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(Z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:Z.source}}};const Fr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
