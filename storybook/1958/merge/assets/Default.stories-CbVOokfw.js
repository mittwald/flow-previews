import{r as g,j as e}from"./iframe-DIlFkKfe.js";import{F as t}from"./FileDropZone-C78nBJBh.js";import{S as d}from"./Section-BmS9-QKI.js";import{F as u}from"./FileCardList-5wdJ5c6o.js";import{F}from"./FileCard-BpvqaHuJ.js";import{u as k,F as U,t as w}from"./Form-B2OQdXzw.js";import{B as s}from"./Button-BvaN7Y-D.js";import{A as E}from"./ActionGroup-tXTsTMNc.js";import{_ as x,$ as R}from"./IconWarning-BS6-kuBv.js";import{H as f}from"./Heading-CxdU82fh.js";import{F as h}from"./FileField-ljNI3H1b.js";import{T as W}from"./Text-CG4Ucl9p.js";import"./IllustratedMessage-9_gACYE_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DpgT95xr.js";import"./mergeRefs-TbbaDpSF.js";import"./index-DOnHcB6O.js";import"./utils-E_0WoXkF.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DuUlrCBa.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BtXixU_d.js";import"./useFocus-CiEitWNM.js";import"./useCollator-CcgJo-Oq.js";import"./context-BIl-kujG.js";import"./useLocalizedStringFormatter-C2YSpIsm.js";import"./Button-pHXSBUAI.js";import"./ProgressBar-CN0cToBP.js";import"./Label-op2mctQl.js";import"./Hidden-b1169DFL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D9JeOi6r.js";import"./useFocusRing-VlAoxJyj.js";import"./useFocusable-BKL1JWl8.js";import"./VisuallyHidden-DzVxkJhT.js";import"./ContextMenuSection-BxJSad4l.js";import"./Action-R0JS_3NZ.js";import"./context-SLpiSpKp.js";import"./useStatic-D-gec7Hx.js";import"./browser-CN7RW_LC.js";import"./getActionGroupSlot-I5c5cWG6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CjLiSQnW.js";import"./RSPContexts-BFg1cs6H.js";import"./OverlayArrow-C5Az4zJe.js";import"./useControlledState-CWVlWyPG.js";import"./Collection-BBECU8Th.js";import"./CollectionBuilder-Dgy9FRg7.js";import"./Separator-BYxoqALx.js";import"./Group-CabJqO_k.js";import"./SearchField-BU427pXg.js";import"./FieldError-5aNzky8T.js";import"./Form-HyfIN8sB.js";import"./useTextField-Bo95H554.js";import"./useFormReset-BM0i_QS2.js";import"./TextField-BSCkD-qq.js";import"./useEvent-BZtMxgrD.js";import"./SelectionManager-_Z7bs6df.js";import"./FocusScope-C9n1sP7L.js";import"./ColumnLayout-CkXU1CDW.js";import"./Avatar-Dm6qRfO2.js";import"./AlertIcon-Cm8vEiqf.js";import"./Image-wcOkT8WU.js";import"./Link-BvGpLIZU.js";import"./ButtonView-CaDIv6cT.js";import"./ContextMenuContent-BFw7PS6k.js";import"./Popover-BX6fBO3O.js";import"./DialogTriggerView-B86hnYR6.js";import"./Switch-C1vYv3wt.js";import"./Label-BSjWh_q0.js";import"./useToggleState-DUfCUrL3.js";import"./FieldError-D7S_o8t1.js";import"./LoadingSpinner-wlCv7fWm.js";import"./Heading-uk9khgL8.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-hH9OpyJt.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,T,Z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
