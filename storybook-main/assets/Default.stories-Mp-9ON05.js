import{r as x,j as e}from"./iframe-BsMxae-o.js";import{F as t}from"./FileDropZone-C-yrqT9q.js";import{S as u}from"./Section-C3fuBbF5.js";import{F}from"./FileCardList-Ctcv6rAr.js";import{F as f}from"./FileCard-Y00AiIPu.js";import{u as E,F as W,t as G}from"./Form-Di6nNt_Y.js";import{B as s}from"./Button-DfdH0gMv.js";import{A as M}from"./ActionGroup-BiXdkPZ9.js";import{_ as j,$ as q}from"./IconWarning-B9I94qHq.js";import{H as g}from"./Heading-YHeaSeUe.js";import{F as h}from"./FileField-Dhdy7O2n.js";import{T as v}from"./Text-B7cMlOzY.js";import"./IllustratedMessage-Df7ghUnw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D65IVLY2.js";import"./mergeRefs-CbyFhnfd.js";import"./index-ChzAh0kZ.js";import"./utils-BMVQSkne.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B7BhLbkb.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BvYe3LSr.js";import"./useFocus-HKqTfwLq.js";import"./useCollator-BG1bVIzj.js";import"./context-DrnfoIRz.js";import"./useLocalizedStringFormatter-BCH9SnbZ.js";import"./Button-Cr74-zWI.js";import"./ProgressBar-D3b6UtGt.js";import"./Label-CyhUcAwc.js";import"./Hidden-BVtLBYcf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DrYqgVGE.js";import"./useFocusRing-DtSDG_eK.js";import"./useFocusable-DYhRFaOI.js";import"./VisuallyHidden-D9PR17i6.js";import"./ContextMenuSection-BPJsTYfZ.js";import"./Action-Cu5585NU.js";import"./context-BQl0W7wd.js";import"./useStatic-NxgnZ87E.js";import"./browser-BOk4ZIfK.js";import"./getActionGroupSlot-DrUE4wXM.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-otIdMc29.js";import"./RSPContexts-Bo0-inYM.js";import"./OverlayArrow-CRlBDhHx.js";import"./useControlledState-CcMFCsVI.js";import"./Collection-BsdihtfM.js";import"./CollectionBuilder--Y6752fw.js";import"./Separator-BgSjOnqA.js";import"./Group-CKe7hi61.js";import"./SearchField-C1j-ZqX1.js";import"./FieldError-BMEYjrX6.js";import"./Form-D5ALWCUg.js";import"./useTextField-Cy3E9Ec0.js";import"./useFormReset-CGrfLprD.js";import"./TextField-BomFOzDr.js";import"./useEvent-CzxiRkfF.js";import"./SelectionManager-DPIdiC1p.js";import"./FocusScope-CZ17A4u_.js";import"./ColumnLayout-CDWs152-.js";import"./Avatar-Cbyfdau1.js";import"./AlertIcon-DQDGIYzK.js";import"./Image-b_RFdEca.js";import"./Link-FNIu49o-.js";import"./ButtonView-Df3HKrJz.js";import"./ContextMenuContent-C6dy7tNH.js";import"./Popover-IbF6moTA.js";import"./DialogTriggerView-B1KD3q3O.js";import"./Switch-C8b2imoG.js";import"./Label-BYgJ_MYX.js";import"./useToggleState-C60zr7CU.js";import"./FieldError-Bafd17gj.js";import"./LoadingSpinner-B-hN89-2.js";import"./Heading-CvCiAr4K.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CNMoZ52h.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
