import{r as x,j as e}from"./iframe-Fj9rH4cM.js";import{F as t}from"./FileDropZone-D82lMRjY.js";import{S as u}from"./Section-DbIgaUR1.js";import{F}from"./FileCardList-BLuop6LF.js";import{F as f}from"./FileCard-B_rDD3NG.js";import{u as E,F as W,t as G}from"./Form-Chz4h9P4.js";import{B as s}from"./Button-CRDs1G82.js";import{A as M}from"./ActionGroup-BDPADmmw.js";import{_ as j,$ as q}from"./IconWarning-BqHcxRer.js";import{H as g}from"./Heading-B7USTBmU.js";import{F as h}from"./FileField-HR3hfFBo.js";import{T as v}from"./Text-CY4-u4so.js";import"./IllustratedMessage-BnXuQIOo.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-2d7AdEi8.js";import"./mergeRefs-DWVfDnig.js";import"./index-zrl6XAGz.js";import"./utils-1iPQLSxY.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DCFUXQ-H.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C-3cKpbA.js";import"./useFocus-7HBUp4O0.js";import"./useCollator-Cv7Z6Bqm.js";import"./context-qP4IgOj6.js";import"./useLocalizedStringFormatter-CEyIEfqZ.js";import"./Button-ClJ-El1M.js";import"./ProgressBar-BwsJFvfU.js";import"./Label-BqD1zatE.js";import"./Hidden-Duc9NbhT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CXUdxwPb.js";import"./useFocusRing-CKWUlu0I.js";import"./useFocusable-DA60a4RB.js";import"./VisuallyHidden-6EX0wPu2.js";import"./ContextMenuSection-5NRem_tB.js";import"./Action-TpguNNPB.js";import"./context-qzo6W5cX.js";import"./useStatic-g6Dny9ho.js";import"./browser-VEiFSO1p.js";import"./getActionGroupSlot-DSTuqm6f.js";import"./dynamic-BaCFTb0P.js";import"./Popover-BFsrpBdt.js";import"./DialogTriggerView-cCV2n8WK.js";import"./RSPContexts-CZftLSNz.js";import"./OverlayArrow-DopxGRGn.js";import"./useControlledState-DkD4o1Gz.js";import"./FocusScope-ComN1xIG.js";import"./Collection-DVpJlKDB.js";import"./CollectionBuilder-82bN8UBR.js";import"./Separator-B_gkWTuC.js";import"./Group-DdYjb3kh.js";import"./SearchField-DV7b6fGA.js";import"./FieldError-Dx-XJATE.js";import"./Form-OtjI-dAW.js";import"./useTextField-CyljbYW8.js";import"./useFormReset-D9GIYNIc.js";import"./TextField-HFN8OYQm.js";import"./useEvent-UTIdhTs4.js";import"./SelectionManager-Cy5yrTgT.js";import"./Switch-DNXGLBBh.js";import"./Label-gqfIXoZt.js";import"./useToggleState-Dv36yU8m.js";import"./ColumnLayout-CAvmnwIN.js";import"./Avatar-Q_BPEBFW.js";import"./AlertIcon-31cWnv3d.js";import"./Image-BVFL_vWl.js";import"./Link-C3OrqR7q.js";import"./ButtonView-BE_aIrSg.js";import"./ContextMenuTriggerView-BIRTsdVc.js";import"./FieldError-DmxLphhJ.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-CK8GFOt2.js";import"./Heading-DqU28Gla.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-Ctpzt0x1.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
