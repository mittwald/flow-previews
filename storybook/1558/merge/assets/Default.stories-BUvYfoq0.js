import{r as x,j as e}from"./iframe-BIwOddjN.js";import{F as t}from"./FileDropZone-DvYd8VM9.js";import{S as u}from"./Section-IxcUonDm.js";import{F}from"./FileCardList-BuXo5Y2H.js";import{F as f}from"./FileCard-BfUuFXy8.js";import{u as E,F as W,t as G}from"./Form-DjUL3FMV.js";import{B as s}from"./Button-DVKpBB_-.js";import{A as M}from"./ActionGroup-CROpn8dS.js";import{_ as j,$ as q}from"./IconWarning-DNMJ1XNo.js";import{H as g}from"./Heading-Bnq9f_Vp.js";import{F as h}from"./FileField-DvjU_Se9.js";import{T as v}from"./Text-3VIHsAGv.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-BbFEjBTE.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqT3XDtE.js";import"./mergeRefs-wvzFS0ov.js";import"./index-CyjKSzst.js";import"./utils-DPukZ4w7.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D1MRO4dn.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DBHdatlR.js";import"./useFocus-Cj2Pu7gn.js";import"./useCollator-vh40vrkm.js";import"./context-CbJ8Tawl.js";import"./useLocalizedStringFormatter-CJPccLDK.js";import"./Button-DDY6r886.js";import"./ProgressBar-CzA5dAYd.js";import"./Label-CW0KcP1q.js";import"./Hidden-D6potscK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-4QX-FuAL.js";import"./useFocusRing-Dx0gNijd.js";import"./useFocusable-CxKBVkW3.js";import"./VisuallyHidden-En5QTDR8.js";import"./ContextMenuSection-BB_BekT5.js";import"./Action-DaT8fcnF.js";import"./context-CorlgKQy.js";import"./useStatic-CAHKYPS0.js";import"./browser-6nVKIs6I.js";import"./getActionGroupSlot-CgWgqcfK.js";import"./dynamic-copMXHk7.js";import"./Popover-BYGuuW82.js";import"./DialogTriggerView-D6nKQ5a7.js";import"./RSPContexts-CSo-c8h2.js";import"./ClearPropsContextView-CLESuCpt.js";import"./useControlledState-B4IhsBlg.js";import"./FocusScope-CDSFipnx.js";import"./Collection-YqThax3x.js";import"./CollectionBuilder-DWtnsQIQ.js";import"./context-Cplzyq73.js";import"./Separator-DroliD3e.js";import"./SelectionManager-CuYmYu-p.js";import"./useEvent-BngoJEfX.js";import"./Switch-Cz6oMetu.js";import"./Label-B4Iiqc5w.js";import"./useToggleState-Bpv2J7zI.js";import"./useFormReset-FXsWoN_h.js";import"./ColumnLayout-DYyFqFo-.js";import"./Avatar-C4hdWQoA.js";import"./AlertIcon-CEV0HGaV.js";import"./Image-CB5w5PjM.js";import"./Link-AePDBOUr.js";import"./ButtonView-BJikMrP9.js";import"./ContextMenuTriggerView-MGcc4nHG.js";import"./FieldError-B63dcrBv.js";import"./FieldError-BSmtWAN4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-CG5b-Kig.js";import"./Heading-CXpceP0M.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-DXfcJvC1.js";import"./Input-BEzcl50g.js";import"./EmulatedBoldText-C5hkPB09.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,Fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,fr as __namedExportsOrder,Fr as default};
