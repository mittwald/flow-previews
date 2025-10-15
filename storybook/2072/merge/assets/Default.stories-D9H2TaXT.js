import{r as x,j as e}from"./iframe-CqjcYzEy.js";import{F as t}from"./FileDropZone-CTapTU_6.js";import{S as u}from"./Section-JW2VQrnX.js";import{F}from"./FileCardList-DZrUPRSH.js";import{F as f}from"./FileCard-BXOJOwwO.js";import{u as E,F as W,t as G}from"./Form-B9tr9_nz.js";import{B as s}from"./Button-_n3f2tJI.js";import{A as M}from"./ActionGroup-D6A6si9S.js";import{_ as j,$ as q}from"./IconWarning-D54OF1fr.js";import{H as g}from"./Heading-Da22rpb0.js";import{F as h}from"./FileField-H07A-xzL.js";import{T as v}from"./Text-C88kvj5Y.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-B3C1LdmH.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DQ6MTfU-.js";import"./index-D26L2zGu.js";import"./index-0TrhkGFb.js";import"./utils-CEH4bJOc.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DBGfsT13.js";import"./filterDOMProps-CghfNOdR.js";import"./Label-D2Nd0YkC.js";import"./Hidden-D7Skj8Od.js";import"./useFocus-BSqxszdS.js";import"./useCollator-qMQcDonM.js";import"./context-CVWMzqu0.js";import"./useLocalizedStringFormatter-CfOyXNn0.js";import"./Button-BkLoBLwO.js";import"./ProgressBar-CdOohM5f.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C-6OBS1L.js";import"./useFocusRing-Cq8bWJ4k.js";import"./useFocusable-Cui5lI-x.js";import"./VisuallyHidden-l-GsqitC.js";import"./ContextMenuSection-CogvxgrL.js";import"./Action-BV8ECr9I.js";import"./context-BZQvEHSq.js";import"./useStatic-B0fjiaVy.js";import"./browser-BlhuXvad.js";import"./getActionGroupSlot-DrC7gLzC.js";import"./dynamic-B6VmRDv6.js";import"./Dialog-S-MpwxP2.js";import"./RSPContexts-CWbXVAY-.js";import"./OverlayArrow-wycJn0we.js";import"./useControlledState-D11yMwJT.js";import"./Collection-BS6hKJ97.js";import"./CollectionBuilder-Ke-tvOIi.js";import"./context-os1nJ67Y.js";import"./Separator-CumANQwW.js";import"./SelectionManager-7ttSlvgr.js";import"./useEvent-CkTqiin2.js";import"./FocusScope-BTKvvs_H.js";import"./ColumnLayout-NaL3c8uY.js";import"./Avatar-CQwVMmqe.js";import"./AlertIcon-BFRi1XBM.js";import"./Image-BqBqe6mr.js";import"./Link-BlKfuc72.js";import"./ButtonView-CfQQuZ6d.js";import"./ContextMenuTriggerView-aV1B30AN.js";import"./ContextMenuTrigger-BbWO92DA.js";import"./OverlayTrigger-ckZkQZqX.js";import"./ControlledNotification-BgE0fw7j.js";import"./OverlayContextProvider-BmYGwoWC.js";import"./FieldError-BSbVK43F.js";import"./FieldError-CvNEPKy0.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BJn8yItu.js";import"./Heading-B1wP9ocY.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-Jq_wsvSc.js";import"./Input-D3RtfHLP.js";import"./useMakeFocusable-Bo04lqU0.js";import"./EmulatedBoldText-CpIdef6b.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
