import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BdpSHsi2.js";import{F as t}from"./FileDropZone-BZsoOmde.js";import{S as c}from"./Section-AUiVn0uM.js";import{F as d}from"./FileCardList-CmkTEmiJ.js";import{F as u}from"./FileCard-H4D2IcF6.js";import{u as b,F as I,t as T}from"./Form-C0PLc_lx.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-C242oaci.js";import{A as w}from"./ActionGroup-C-8j72EB.js";import{k as x,l as W}from"./IconWarning-W_gjV0pu.js";import{H as F}from"./Heading-DjWQXO6k.js";import{F as f}from"./FileField-CzDEl9qF.js";import{T as E}from"./Text-DppFdrB6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./IllustratedMessage-DFGASE_S.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BNQEmhjB.js";import"./mergeRefs-DCHnGnoY.js";import"./iframe-DEn0BGd8.js";import"./index-d29qW9Ar.js";import"./index-lEnnwJps.js";import"./utils-CGBbld1I.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-cxnoU24n.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-2PTTjRTo.js";import"./useFocus-CrOIx9qr.js";import"./useCollator-DIkGalmP.js";import"./useLocalizedStringFormatter-CQZe-1oI.js";import"./Button-QGm5fJ3f.js";import"./ProgressBar-DVHZMV_Y.js";import"./Label-C3wuJWVC.js";import"./Hidden-RoZfe91Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-KHE_7Dyp.js";import"./useFocusRing-voAwBIMi.js";import"./useFocusable-CeEllLln.js";import"./VisuallyHidden-BgU4cU5T.js";import"./ContextMenuSection-kERq95Q5.js";import"./Action-Ni7YRb-l.js";import"./context-CxQKZZH3.js";import"./useStatic-Bb7IIIK_.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-BPo3yJj6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DR27fcja.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-BDH2is-P.js";import"./useControlledState-B-V-WRDl.js";import"./Collection-CfN95BI8.js";import"./CollectionBuilder-DWO952CO.js";import"./Separator-CuUYeIPG.js";import"./SelectionManager-DA0mbM8D.js";import"./useEvent-BleeV9lU.js";import"./FocusScope-CVefUuHc.js";import"./ColumnLayout-BuPYxww3.js";import"./Avatar-BF7It5hj.js";import"./react-children-utilities-DvaK_N8_.js";import"./AlertIcon-BRcJP8Pt.js";import"./Image-D0AzqAvK.js";import"./Link-B-WGG5uY.js";import"./OptionsButton-7MD4rOmv.js";import"./ButtonView-Cn3KtOmj.js";import"./ContextMenuContent-CDp640jM.js";import"./Popover-Dg8cvDyv.js";import"./OverlayTrigger-CDMn1g3m.js";import"./DialogTriggerView-D_ruppch.js";import"./Switch-DX1nJ0by.js";import"./Label-BTsCUAfq.js";import"./useToggleState-D4vbPM1Z.js";import"./useFormReset-DAKGIyMh.js";import"./FieldError-BjixkCEZ.js";import"./FieldError-CaLbDVO5.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-uQ-67U1C.js";import"./Heading-DCNnB3YY.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-CV1_HBS_.js";import"./Input-Y1A_Nvih.js";import"./EmulatedBoldText-DOyoRrwd.js";const ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
