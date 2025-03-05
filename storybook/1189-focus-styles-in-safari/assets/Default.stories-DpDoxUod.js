import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BZISi7jw.js";import{F as t}from"./FileDropZone-Djm9IckM.js";import{S as c}from"./Section-BsXEPCGH.js";import{F as d}from"./FileCardList-Bmc_-rI_.js";import{F as u}from"./FileCard-BbF0UQUz.js";import{u as k,F as I,t as T}from"./Form-CMFkcU5V.js";import{a as U}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{B as s}from"./Button-Ckb5b4Hz.js";import{A as w}from"./ActionGroup-BQ8LoA2z.js";import"./IconApp-2NmtClNa.js";import{h as x,i as W}from"./IconWarning-eLy06F5O.js";import{H as F}from"./Heading-C443cwOq.js";import{F as f}from"./FileField-BVkdjZKO.js";import{T as E}from"./Text-Cf2tf5FC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IllustratedMessage-CItdvToX.js";import"./clsx-B-dksMZM.js";import"./flowComponent-QaLaNUaQ.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./utils-CzVyYWZn.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-PTaPc_Ci.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./FocusScope-BnLtY9jQ.js";import"./useFocusRing-DzGSygZM.js";import"./useCollator-C0JtIjTO.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./usePress-DZCrAIzv.js";import"./VisuallyHidden-DJvehTyr.js";import"./ContextMenuSection-Cr5cVYnI.js";import"./Action-BSwnzS5s.js";import"./context-C8ohvFo-.js";import"./useStatic-DnpCrHZX.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-THtyb9Nj.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BV8uMRwe.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-CByfAkhe.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./ColumnLayout-qgcUvsBB.js";import"./Avatar-DoEfqei1.js";import"./react-children-utilities-fm2cgFnI.js";import"./Image-DGzLV-KN.js";import"./Link-BPeYOnjG.js";import"./Wrap-DQq6jo70.js";import"./FieldError-Cl07oYpm.js";import"./FieldError-DoW3KOQ8.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-BUdWX6OM.js";import"./Heading-BCoG4c8D.js";import"./Input-DaA3cxmW.js";import"./EmulatedBoldText-BfYT5ZHF.js";const $e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),a={},l={args:{accept:"image/png"},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},m={args:{multiple:!0},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const i=k(),n=T();return e.jsxs(I,{form:i,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...i.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=l.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,H,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var A,Z,b;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(b=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:b.source}}};const er=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Multiple,l as WithAcceptedTypes,p as WithReactHookForm,er as __namedExportsOrder,$e as default};
