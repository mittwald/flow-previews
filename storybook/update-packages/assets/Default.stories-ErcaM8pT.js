import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CgfFrydU.js";import{F as t}from"./FileDropZone-oWo77o8g.js";import{S as c}from"./Section-B6jih_43.js";import{F as d}from"./FileCardList-1PQpNOxl.js";import{F as u}from"./FileCard-BBORHJyS.js";import{u as b,F as I,t as T}from"./Form-DYwSfV1A.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-St2U3cmh.js";import{A as w}from"./ActionGroup-BZlXslA5.js";import{k as x,l as W}from"./IconWarning-CuaYDKOA.js";import{H as F}from"./Heading-DstPJ93O.js";import{F as f}from"./FileField-Dxw8T-Ls.js";import{T as E}from"./Text-BsonjX7Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IllustratedMessage-DabNqeUd.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B9e9kKsf.js";import"./mergeRefs-DiwoqHxs.js";import"./index-Brqd7pHr.js";import"./index-B2KKL2uI.js";import"./utils-Bm37ngJk.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-I7rzu-gq.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BQ8zpiVY.js";import"./useFocus-C3ExUvEL.js";import"./useCollator-rVor1fd8.js";import"./useLocalizedStringFormatter-BzGhSkyu.js";import"./Button-3GcZ2y2i.js";import"./ProgressBar-lRSo0OUL.js";import"./Label-B_sU3NXB.js";import"./Hidden-DwT0szmK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CC9yd5Fh.js";import"./useFocusRing-wzjDdF0K.js";import"./useFocusable-CzgSXE3t.js";import"./VisuallyHidden-C4REVXC4.js";import"./ContextMenuSection-DmEqilSR.js";import"./Action-DMBQfNek.js";import"./context-lMIlJEpi.js";import"./useStatic-DyeYbbC-.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-Bpm9x-x1.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CDyjGb2K.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-CyRBwams.js";import"./useControlledState-YIijONQK.js";import"./Collection-43aF_0U7.js";import"./CollectionBuilder--ipx_qrV.js";import"./Separator-By-KuC_f.js";import"./SelectionManager-W-F9tXjW.js";import"./useEvent-Dw3zA1wO.js";import"./FocusScope--xlp8sQI.js";import"./ColumnLayout-BMZjxCJ7.js";import"./Avatar-CcsYwhe1.js";import"./AlertIcon-BWN4DCTT.js";import"./Image-Bldaip3Q.js";import"./Link-DOA5qnaM.js";import"./OptionsButton-B3a7Xe7T.js";import"./ButtonView-m3Wh3-Vj.js";import"./ContextMenuContent-me0Q7Uch.js";import"./Popover-D0aLOs1r.js";import"./DialogTriggerView-XlSWauwy.js";import"./Switch-DcbmdLPg.js";import"./Label-DOGKOP9z.js";import"./useToggleState-BrsYFbbM.js";import"./useFormReset-gF4HkNmA.js";import"./FieldError-BliU6s2n.js";import"./FieldError-C4lz7LlR.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-C2aL1KTo.js";import"./Heading-4pNfXNbn.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-yIPL_zyl.js";import"./Input-D0tr6WTW.js";import"./EmulatedBoldText-KnQ_Srvn.js";const lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(Z=(A=p.parameters)==null?void 0:A.docs)==null?void 0:Z.source}}};const pr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,pr as __namedExportsOrder,lr as default};
