import{r as h,j as e}from"./iframe-CbGYfYhl.js";import{F as t}from"./FileDropZone-BHMx5I03.js";import{S as c}from"./Section-BbmZZsTL.js";import{F as d}from"./FileCardList-DzrGMEdt.js";import{F as u}from"./FileCard-Bs_WkRPp.js";import{u as O,F as T,t as _}from"./Form-TtiWG0JA.js";import{B as s}from"./Button-Gcjkh2he.js";import{A as b}from"./ActionGroup-DVTfyg3C.js";import{Y as x,Z as k}from"./IconWarning-DbjMP3z5.js";import{H as F}from"./Heading-CwkEWkPk.js";import{F as f}from"./FileField-CsMlGM4f.js";import{T as U}from"./Text-OS1-aGym.js";import"./IllustratedMessage-Cn5_BDx1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-jqIHveb4.js";import"./mergeRefs-B7E9CKB8.js";import"./index-DUvIA6jy.js";import"./utils-Bta_km8V.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B56mlhY7.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D6vayTQl.js";import"./useFocus-CgyMmhEU.js";import"./useCollator-B95zPweT.js";import"./context-DrN7EfSG.js";import"./useLocalizedStringFormatter-CO6Ocor8.js";import"./Button-dGVmYdyu.js";import"./ProgressBar-C2FOdX6j.js";import"./Label-CQ-8Wai_.js";import"./Hidden-CH7YYats.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B6TDm-Ku.js";import"./useFocusRing-D3ulEQrZ.js";import"./useFocusable-CdHr2TzL.js";import"./VisuallyHidden-BDzAgjFk.js";import"./ContextMenuSection-COmeM-5Q.js";import"./Action-QD7EalEG.js";import"./context-J2lB5nq9.js";import"./useStatic-CDZ8mZeU.js";import"./browser-CJ8QzV59.js";import"./getActionGroupSlot-DTlXxCo0.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DWI3Gb4X.js";import"./RSPContexts-CWauLjE1.js";import"./OverlayArrow-CAzhQBDT.js";import"./useControlledState-Ckf81dN5.js";import"./Collection-CnCkxRBF.js";import"./CollectionBuilder-zI7nOiFC.js";import"./Separator-BL4Cqy6R.js";import"./Group-G140fFme.js";import"./SearchField-0rw3SXHS.js";import"./FieldError-CCN5oAXI.js";import"./Form-dHMqMIPi.js";import"./useTextField-ONw8H3cW.js";import"./useFormReset-knQsHZrP.js";import"./TextField-DGs8gg6j.js";import"./useEvent-BrHW1E5Z.js";import"./SelectionManager-C3iuS2jK.js";import"./FocusScope-CXp1mWOp.js";import"./ColumnLayout-D8G1VvNk.js";import"./Avatar-BqaP-FlA.js";import"./AlertIcon-OBS66cIc.js";import"./Image-zEqh1WpH.js";import"./Link-Cl1AMoZr.js";import"./ButtonView-DrD4LYA7.js";import"./ContextMenuContent-41w8T_sr.js";import"./Popover-AInzHW1-.js";import"./DialogTriggerView-BAlepQJB.js";import"./Switch-CYU4Cetv.js";import"./Label-ChSLebPR.js";import"./useToggleState-CKEjHtck.js";import"./FieldError-DIOhoIE9.js";import"./LoadingSpinner-BIdUmOnp.js";import"./Heading-Cd40tbYh.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CQSaLX8r.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const ar=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,ar as __namedExportsOrder,mr as default};
