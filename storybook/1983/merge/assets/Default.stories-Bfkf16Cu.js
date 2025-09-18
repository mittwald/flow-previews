import{r as x,j as e}from"./iframe-DjIVRH0F.js";import{F as t}from"./FileDropZone-D7ert_Ny.js";import{S as u}from"./Section-BO0o4b9e.js";import{F}from"./FileCardList-DXmOOkaP.js";import{F as f}from"./FileCard-Z4Q7ahQQ.js";import{u as E,F as W,t as G}from"./Form-CcZpKu0K.js";import{B as s}from"./Button-CKSxfzxQ.js";import{A as M}from"./ActionGroup-Dv82y2TA.js";import{_ as j,$ as q}from"./IconWarning-uc5JkYTm.js";import{H as g}from"./Heading-C_7DG7tq.js";import{F as h}from"./FileField-DSV0eFaB.js";import{T as v}from"./Text-B5KpGvlT.js";import"./IllustratedMessage-KCqQKdV4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXkyia6O.js";import"./mergeRefs-CZW2uA-H.js";import"./index-Bk9vRPW2.js";import"./utils-G1KHONaq.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-9ugGFdig.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-sV0m1Yjo.js";import"./useFocus-diUUCuvP.js";import"./useCollator-CAX-XvSk.js";import"./context-C7KKbhVC.js";import"./useLocalizedStringFormatter-DnbCLLYR.js";import"./Button-D_xR0uNa.js";import"./ProgressBar-BaoSLR_g.js";import"./Label-C0V31i8v.js";import"./Hidden-BYb4omOQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-QkjqUEXJ.js";import"./useFocusRing-CVljaIJQ.js";import"./useFocusable-DNULE2pv.js";import"./VisuallyHidden-snqvTAFU.js";import"./ContextMenuSection-CVHoYolo.js";import"./Action-D8dMCYGJ.js";import"./context-DDhUpvCG.js";import"./useStatic-CHo6Lgk7.js";import"./browser-Ba6KZWy-.js";import"./getActionGroupSlot-vPbFTM92.js";import"./dynamic-BVw0yKPJ.js";import"./Popover-DlX03nO8.js";import"./DialogTriggerView-CgY0Mhwe.js";import"./RSPContexts-yaPVYaSw.js";import"./ClearPropsContextView-BhG_516u.js";import"./useControlledState-Cd9JFs6w.js";import"./FocusScope-CAKHANYN.js";import"./Collection-CjltVSE8.js";import"./CollectionBuilder-CJ_fIWoO.js";import"./Separator-BOn94nxb.js";import"./Group-C6OJiXrI.js";import"./SearchField-CkG4r_An.js";import"./FieldError-NAgWSsRG.js";import"./Form-Dzmx2_fB.js";import"./useTextField-CS3TmGDB.js";import"./useFormReset-BnKMoc5n.js";import"./TextField-BtiUxXGx.js";import"./useEvent-DGXxwH7A.js";import"./SelectionManager-Btp5kxfY.js";import"./Switch-ByLZsw9C.js";import"./Label-oyqcLq-C.js";import"./useToggleState-BPM3bXC_.js";import"./ColumnLayout-DPJnwqhg.js";import"./Avatar-CYf8Go3H.js";import"./AlertIcon-CjcfgEAD.js";import"./Image-ezXd4vKr.js";import"./Link-DbWi8dr0.js";import"./ButtonView-D2sihJb1.js";import"./ContextMenuTriggerView-DHu_etgW.js";import"./FieldError-BR6tEJBc.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-BHwXHxWg.js";import"./Heading-ncY8Dy_7.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-BSrsAcTM.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const gr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,gr as __namedExportsOrder,fr as default};
