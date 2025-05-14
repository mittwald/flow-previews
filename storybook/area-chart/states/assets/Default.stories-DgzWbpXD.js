import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CgfFrydU.js";import{F as t}from"./FileDropZone-BU3xGWaG.js";import{S as c}from"./Section-C0nGIVOj.js";import{F as d}from"./FileCardList-CAv3UeM0.js";import{F as u}from"./FileCard-wf5RybiB.js";import{u as b,F as I,t as T}from"./Form-Bf7-XU2T.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-nLOUeIYJ.js";import{A as w}from"./ActionGroup-BX5yaItJ.js";import{k as x,l as W}from"./IconWarning-C_dXgkkz.js";import{H as F}from"./Heading-XEvPUcAD.js";import{F as f}from"./FileField-C6qIJC0w.js";import{T as E}from"./Text-acTHRGjJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IllustratedMessage-C4tlSJRb.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Ijz6GgOq.js";import"./mergeRefs-78-678FT.js";import"./index-sY8i7rw0.js";import"./index-B2KKL2uI.js";import"./utils-C22QCCbL.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-PWuSNm-G.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bwhd-XGR.js";import"./useFocus-DQVi-kHM.js";import"./useCollator-Dka9gyz6.js";import"./useLocalizedStringFormatter-P5-5MQWA.js";import"./Button-CvRwfedC.js";import"./ProgressBar-CWMH1Kpx.js";import"./Label-DKfobBxX.js";import"./Hidden-DwT0szmK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CcZGRUOg.js";import"./useFocusRing-B_JVXUf7.js";import"./useFocusable-7WyUSQpO.js";import"./VisuallyHidden-Drr3U20F.js";import"./ContextMenuSection-CMS8qi4B.js";import"./Action-BcHXQegi.js";import"./context-Ci9m7_Nm.js";import"./useStatic-Dvh5S8aV.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-DApccOIm.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BroBw1Jq.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-CZdmdrug.js";import"./useControlledState-DjePt-lg.js";import"./Collection-BAXYBWcT.js";import"./CollectionBuilder-BP3fHMQL.js";import"./Separator-_mK8Veof.js";import"./SelectionManager-DyB3dcXv.js";import"./useEvent-DKzf63YQ.js";import"./FocusScope-C3Hgy8Ha.js";import"./ColumnLayout-6qTfKz16.js";import"./Avatar-Degma3og.js";import"./react-children-utilities-z6xJRDdy.js";import"./AlertIcon-BdwLlPvh.js";import"./Image-2LQLZFCE.js";import"./Link-D47nlweP.js";import"./OptionsButton-BOkaFv5I.js";import"./ButtonView-Oq5KTuFp.js";import"./ContextMenuContent-CecuTKDn.js";import"./Popover-AxYiZSJV.js";import"./OverlayTrigger-BTBIJI77.js";import"./DialogTriggerView-CXGvpI3a.js";import"./Switch-wOTvGa-4.js";import"./Label-CvAEyXQc.js";import"./useToggleState-CYLJPHYV.js";import"./useFormReset-Cri5RZCQ.js";import"./FieldError-Bhr3DTnb.js";import"./FieldError-BNWc2UXg.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-BoRooXD5.js";import"./Heading-BIZi0BTW.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-Ck8Kc0sM.js";import"./Input-CjZe9lfS.js";import"./EmulatedBoldText-KnQ_Srvn.js";const cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(Z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:Z.source}}};const dr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,dr as __namedExportsOrder,cr as default};
