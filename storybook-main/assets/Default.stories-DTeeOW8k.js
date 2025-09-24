import{r as x,j as e}from"./iframe-ct20Zc4_.js";import{F as t}from"./FileDropZone-pJrfPbOJ.js";import{S as u}from"./Section-9uE5FTdJ.js";import{F}from"./FileCardList-CXmXK45Z.js";import{F as f}from"./FileCard-CI9tqvly.js";import{u as E,F as W,t as G}from"./Form-Bx4qtmFG.js";import{B as s}from"./Button-D_7HTG7B.js";import{A as M}from"./ActionGroup-Bna3ZFOy.js";import{_ as j,$ as q}from"./IconWarning-CcsQkvTO.js";import{H as g}from"./Heading-CZ_DW7ZR.js";import{F as h}from"./FileField-DjpieOVW.js";import{T as v}from"./Text-DcjvjsPV.js";import"./IllustratedMessage--CE0w2Zu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CgsWNoxz.js";import"./mergeRefs-6DcqMVoC.js";import"./index-DEpD1rGL.js";import"./utils-DpMwq36_.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BxKbsi5b.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cp6IFTTd.js";import"./useFocus-BkH8qcCX.js";import"./useCollator-CiYYIB6D.js";import"./context-DnCGX3ZW.js";import"./useLocalizedStringFormatter-CzDXjL81.js";import"./Button-DDK8DVRp.js";import"./ProgressBar-CK-tPEaL.js";import"./Label-Acl7hQj6.js";import"./Hidden-B9i9z_Z9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C5fNoyVy.js";import"./useFocusRing-D8miGa7N.js";import"./useFocusable-CQ8WqruE.js";import"./VisuallyHidden-TqoC2igt.js";import"./ContextMenuSection-9u3YjVGW.js";import"./Action-BP61FP92.js";import"./context-BYoyCjQY.js";import"./useStatic-x6Peb5cY.js";import"./browser-Cy4n9sSP.js";import"./getActionGroupSlot-DgDgHkEO.js";import"./dynamic-tkuqvrvh.js";import"./Popover-DidQYUqo.js";import"./DialogTriggerView-Dw2hBdec.js";import"./RSPContexts-C51MpexI.js";import"./ClearPropsContextView-YUez0bQh.js";import"./useControlledState-CwKmYwnv.js";import"./FocusScope-B8eJTcfl.js";import"./Collection-IIiQ3cHk.js";import"./CollectionBuilder-hbCRLoQk.js";import"./Separator-C0MPI4X4.js";import"./Group-DAb_r1xm.js";import"./SearchField-nImGJb9R.js";import"./FieldError-kSnIjzvs.js";import"./Form-BSds6g5P.js";import"./useTextField-B0tvR0aW.js";import"./useFormReset-DrqvUx_9.js";import"./TextField-BxnrnSEC.js";import"./useEvent-u8lVOPY0.js";import"./SelectionManager-C0f7nk4D.js";import"./Switch-aXekOSm3.js";import"./Label-Dr2f8Urt.js";import"./useToggleState-9f45isSY.js";import"./ColumnLayout-C4OhIUpL.js";import"./Avatar-BP9fXabm.js";import"./AlertIcon-C90QxB1m.js";import"./Image-COauLpi4.js";import"./Link-RUIkkrne.js";import"./ButtonView-D3L9NLBy.js";import"./ContextMenuTriggerView-BYX8MupJ.js";import"./FieldError-3QHdAtoW.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-UirJOZi_.js";import"./Heading-CTWkE0iq.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CxSwZZv_.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
