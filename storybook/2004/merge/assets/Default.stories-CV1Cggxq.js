import{r as x,j as e}from"./iframe-DOdCrrz9.js";import{F as t}from"./FileDropZone-EWJega0y.js";import{S as u}from"./Section-DROGtctI.js";import{F}from"./FileCardList-3uRmDVna.js";import{F as f}from"./FileCard-qb0cXBe9.js";import{u as E,F as W,t as G}from"./Form-CBGxxw_L.js";import{B as s}from"./Button-B4t52lNZ.js";import{A as M}from"./ActionGroup-CUBS3hLz.js";import{_ as j,$ as q}from"./IconWarning-B_Db9Y2d.js";import{H as g}from"./Heading-B3Vm_Aux.js";import{F as h}from"./FileField-BI8sU3mk.js";import{T as v}from"./Text-BFGg7rBT.js";import"./IllustratedMessage-CqGfB_vC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BFFPDLjZ.js";import"./mergeRefs-VmgBpgq4.js";import"./index-CLjbgznf.js";import"./utils-BhoG2uU0.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Cec-yt4l.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-nPFfwg7P.js";import"./useFocus-D8b650dP.js";import"./useCollator-DDFrVUE2.js";import"./context-B_SSW0HI.js";import"./useLocalizedStringFormatter-D2q5K-i7.js";import"./Button-BQ3dFx8x.js";import"./ProgressBar-CMaicEWm.js";import"./Label-CUfl9ZIc.js";import"./Hidden-Csx_ZN67.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cgctm68w.js";import"./useFocusRing-DgTZQDGQ.js";import"./useFocusable-C6B3BW3Y.js";import"./VisuallyHidden-CbboIbzH.js";import"./ContextMenuSection-CIiqGwUj.js";import"./Action-mSB8KV6a.js";import"./context-CptZziwP.js";import"./useStatic-6ENCHy3p.js";import"./browser-ChoqAG5f.js";import"./getActionGroupSlot-B_tXH0Q6.js";import"./dynamic-bhcJ8YER.js";import"./Popover-D2I_wG2X.js";import"./DialogTriggerView-aJwD6Ful.js";import"./RSPContexts-OikXJV7Y.js";import"./ClearPropsContextView-Br_9Bgha.js";import"./useControlledState-DT9C-0RB.js";import"./FocusScope-BZjUyJi9.js";import"./Collection-D29CaRkM.js";import"./CollectionBuilder-DNDqtAqI.js";import"./Separator-D4a_mIW-.js";import"./Group-CGSoOA49.js";import"./SearchField-D44cV1AG.js";import"./FieldError-Dz-HK9bS.js";import"./Form-D1kKLxzM.js";import"./useTextField-E_po2vaq.js";import"./useFormReset-BZL1wYkF.js";import"./TextField-D3yV1HlH.js";import"./useEvent-DybSIsxD.js";import"./SelectionManager-DE4WCsU3.js";import"./Switch-CT-CnlZC.js";import"./Label-CdGOe_rR.js";import"./useToggleState-2jfqagud.js";import"./ColumnLayout-ggSf8JjB.js";import"./Avatar-B9T2fbiZ.js";import"./AlertIcon-B7trzxux.js";import"./Image-BBvigMRt.js";import"./Link-Bnix3hme.js";import"./ButtonView-Bu9OljIl.js";import"./ContextMenuTriggerView-Cow0wrCh.js";import"./FieldError-ebeXoxd5.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-iDIwh9pR.js";import"./Heading-BOxaabaZ.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CTisuoOf.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
