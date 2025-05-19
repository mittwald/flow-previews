import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BdpSHsi2.js";import{F as t}from"./FileDropZone-D9kZ1oJi.js";import{S as c}from"./Section-CE1EIRHq.js";import{F as d}from"./FileCardList-DJ_u9AhI.js";import{F as u}from"./FileCard-D4AlUAhu.js";import{u as b,F as I,t as T}from"./Form-CmWjJgLz.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-HU0IDT58.js";import{A as w}from"./ActionGroup-znA6zd55.js";import{k as x,l as W}from"./IconWarning-CZe_1AXl.js";import{H as F}from"./Heading-CvO4jQLv.js";import{F as f}from"./FileField-DZkjZHDH.js";import{T as E}from"./Text-sNkeUIht.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./IllustratedMessage-BWJ8MGHy.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Etx32Jzv.js";import"./mergeRefs-C3hk6Bw5.js";import"./iframe-xQM8WmXm.js";import"./index-d29qW9Ar.js";import"./index-lEnnwJps.js";import"./utils-k5T1Axi4.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CCjUyjXh.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BTthEqzH.js";import"./useFocus-DtkvuJ2b.js";import"./useCollator-B6tK7UUT.js";import"./useLocalizedStringFormatter-CVg1y45F.js";import"./Button-DMR6N1Wj.js";import"./ProgressBar-CwgzMXGv.js";import"./Label-B5BNuFXH.js";import"./Hidden-RoZfe91Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D8pXfMRf.js";import"./useFocusRing-CsskK932.js";import"./useFocusable-BgmoI-LE.js";import"./VisuallyHidden-DvRlzb5d.js";import"./ContextMenuSection-DsntxPYE.js";import"./Action-D8MN33qJ.js";import"./context-BgP-s3U9.js";import"./useStatic-Bhw6e3Xl.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-Brd8XCqI.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-9stIWeEN.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-C2rzDuF5.js";import"./useControlledState-B-V-WRDl.js";import"./Collection-CmGWUGtX.js";import"./CollectionBuilder-CZDODqbS.js";import"./Separator-Cy_qZ13i.js";import"./SelectionManager-CAHkB1hu.js";import"./useEvent-CVP7MjLG.js";import"./FocusScope-D-amBDVp.js";import"./ColumnLayout-DycbS00k.js";import"./Avatar-Dld1uWRe.js";import"./react-children-utilities-DvaK_N8_.js";import"./AlertIcon-B8D1HbwL.js";import"./Image-IEZIY30A.js";import"./Link-CMiBDj0Q.js";import"./OptionsButton-Sa349543.js";import"./ButtonView-BRXB4NQ_.js";import"./ContextMenuContent-BXBvyPwB.js";import"./Popover-BDnbSNhY.js";import"./OverlayTrigger-CJXo0isK.js";import"./DialogTriggerView-BbP3qYQ0.js";import"./Switch-BujXUtwO.js";import"./Label-BrXUR2ZK.js";import"./useToggleState-CJsTx8sI.js";import"./useFormReset-dEmc_A_j.js";import"./FieldError-ajd-8EZY.js";import"./FieldError-CWvjII8X.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-SrGa4qnn.js";import"./Heading-Cb89GJ6J.js";import"./FormField.module-B9AzUSUD.js";import"./useFormValidation-BVpaaUUN.js";import"./Input-Cd1RXmlA.js";import"./EmulatedBoldText-DOyoRrwd.js";const ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),m={},a={args:{accept:"image/png"},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...o??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:n=>{const o=b(),i=T();return e.jsxs(I,{form:o,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...o.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
