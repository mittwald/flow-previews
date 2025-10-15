import{r as x,j as e}from"./iframe-tskdVQ8N.js";import{F as t}from"./FileDropZone-kDcZ2GoU.js";import{S as u}from"./Section-O741B4-H.js";import{F}from"./FileCardList-TPW5Uz6W.js";import{F as f}from"./FileCard-DqFcy6wd.js";import{u as E,F as W,t as G}from"./Form-CcGsBZKh.js";import{B as s}from"./Button-Dsg_4rdI.js";import{A as M}from"./ActionGroup-B0eph536.js";import{_ as j,$ as q}from"./IconWarning-Bd2S-Yd8.js";import{H as g}from"./Heading-DLxD6IRh.js";import{F as h}from"./FileField-D2o5sntH.js";import{T as v}from"./Text-jVUpGvvP.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-82ZOjStt.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DXfmr-ai.js";import"./index-D6N0AnTm.js";import"./index-C1m14znk.js";import"./utils-B12eWPaZ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DKYFQica.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-ZNOxXk3Q.js";import"./Hidden-D_rJ6hGg.js";import"./useFocus-DfZ-8u74.js";import"./useCollator-BdaohURQ.js";import"./context-DiW1jRMX.js";import"./useLocalizedStringFormatter-B-RI6mzv.js";import"./Button-DB-V2NKd.js";import"./ProgressBar-rxfhBUJO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BvJ9VF5d.js";import"./useFocusRing-L-u3dQN8.js";import"./useFocusable-DY9nb4Q3.js";import"./VisuallyHidden-BVBeKb2k.js";import"./ContextMenuSection-DqvIY19i.js";import"./Action-CeCtXdjv.js";import"./context-CVZR0KsW.js";import"./useStatic-1YPHy18H.js";import"./browser-C459Qnce.js";import"./getActionGroupSlot-CxSNR9ht.js";import"./dynamic-BrDu037J.js";import"./Dialog-D58MUJ_9.js";import"./RSPContexts-w3AEViLT.js";import"./OverlayArrow-CQI9fhos.js";import"./useControlledState-Py7g_hCX.js";import"./Collection-BQ6XNSlA.js";import"./CollectionBuilder-B0ypalQC.js";import"./SelectionIndicator-By4SQJVw.js";import"./Separator-N_51tPRN.js";import"./SelectionManager-6kMjKjHw.js";import"./useEvent-r3YrjOS6.js";import"./FocusScope-D_vsK9iJ.js";import"./ColumnLayout-DUTqOTuW.js";import"./Avatar-CNKVvxDI.js";import"./AlertIcon-DhyOUWMq.js";import"./Image-CEdWvHnp.js";import"./Link-iA3tKyOY.js";import"./ButtonView-cJUz9uwS.js";import"./ContextMenuTriggerView-2rfkuunp.js";import"./ContextMenuTrigger-CMBwvbQ4.js";import"./OverlayTrigger-CPNea7uG.js";import"./ControlledNotification-CR3joEtN.js";import"./OverlayContextProvider-DD0eGq15.js";import"./FieldError-BdEz1ju8.js";import"./FieldError-BQtr77Yc.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DLMtzbRX.js";import"./Heading-DLcHG4v5.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-GdVWjc_V.js";import"./Input-D8C7sCTv.js";import"./useMakeFocusable-DhpPn-fN.js";import"./EmulatedBoldText-BMIw02bL.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
