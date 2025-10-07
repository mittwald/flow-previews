import{r as x,j as e}from"./iframe-D2Anwmct.js";import{F as t}from"./FileDropZone-D21m243T.js";import{S as u}from"./Section-D-XgJ8U5.js";import{F}from"./FileCardList-nw1LQ-no.js";import{F as f}from"./FileCard-CPrDXLd8.js";import{u as E,F as W,t as G}from"./Form-NvgoK1At.js";import{B as s}from"./Button-DzBCXdJ8.js";import{A as M}from"./ActionGroup-DwbiqJMg.js";import{_ as j,$ as q}from"./IconWarning-DnpABaws.js";import{H as g}from"./Heading-CHI9LGKg.js";import{F as h}from"./FileField-DPkUIcvz.js";import{T as v}from"./Text-DtdPLjLU.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-I8QzFfxs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DKluqIHM.js";import"./index-f9td_37l.js";import"./index-Ch7RQrKi.js";import"./utils-BpjcCBEz.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-lRP8kqf1.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-CyDLPDuC.js";import"./Hidden-C6VQoCGL.js";import"./useFocus-CPbnM8zc.js";import"./useCollator-DzTf225U.js";import"./context--yho_VB2.js";import"./useLocalizedStringFormatter-BekYTjw8.js";import"./Button-DXQ0LQy1.js";import"./ProgressBar-B5M0YtFC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DkH4CmpU.js";import"./useFocusRing-BsT1m1qa.js";import"./useFocusable-BPmxfIwz.js";import"./VisuallyHidden-Cz7LPiXA.js";import"./ContextMenuSection-DEYSZK6N.js";import"./Action-TQJO2mvI.js";import"./context-BRmDUAMd.js";import"./useStatic-CHoU06Vl.js";import"./browser-CPuaporN.js";import"./getActionGroupSlot-CMiTVAum.js";import"./dynamic-Cfahilqg.js";import"./Dialog-CzAn2oqc.js";import"./RSPContexts-W5re5w0Z.js";import"./OverlayArrow-nozbf4eZ.js";import"./useControlledState-CmSk5MJT.js";import"./Collection-C6c4IzCm.js";import"./CollectionBuilder-BN9-opMn.js";import"./context-X2EiAF6-.js";import"./Separator-XkOJaGaU.js";import"./SelectionManager-BVJUtLYE.js";import"./useEvent-eZ8bSyVx.js";import"./FocusScope-B3f0Mp00.js";import"./ColumnLayout-CxbtdzVr.js";import"./Avatar-CkDAdSbW.js";import"./AlertIcon-Kmw1VxqP.js";import"./Image-DLqcZbN8.js";import"./Link-B6JgnFIM.js";import"./ButtonView-Ckjyb7-A.js";import"./ContextMenuTriggerView-C-B7FMW2.js";import"./ContextMenuTrigger-C3mhuEuv.js";import"./OverlayTrigger-DO8WsQK1.js";import"./ControlledNotification-Dluv3CpF.js";import"./OverlayContextProvider-C-LoU2NQ.js";import"./FieldError-BoPnTUuW.js";import"./FieldError-BxxGUPOn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-Dn83SSS7.js";import"./Heading-cAelsVpC.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-s-r8BMkB.js";import"./Input-B4tXXK1a.js";import"./useMakeFocusable-DLbAZGSO.js";import"./EmulatedBoldText-C4J0xt-K.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=l.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=m.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const Fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,Fr as __namedExportsOrder,ur as default};
