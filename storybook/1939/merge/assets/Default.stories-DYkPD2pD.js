import{r as h,j as e}from"./iframe-h8pIb5Kv.js";import{F as t}from"./FileDropZone-CZk43WfK.js";import{S as c}from"./Section-CioKxp-Z.js";import{F as d}from"./FileCardList-BERSi3e8.js";import{F as u}from"./FileCard-DUWrr9Li.js";import{u as O,F as T,t as _}from"./Form-B31odCWn.js";import{B as s}from"./Button-BCd5wwjT.js";import{A as b}from"./ActionGroup-WmI-Nmw9.js";import{Y as x,Z as k}from"./IconWarning-sarICh-8.js";import{H as F}from"./Heading-Ctyu0gzH.js";import{F as f}from"./FileField-BPFv2Reh.js";import{T as U}from"./Text-BnbJhuWd.js";import"./IllustratedMessage-BRpIiWv6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bz7r3WKV.js";import"./mergeRefs-lWAZUqj4.js";import"./index-BfqXMi3X.js";import"./utils-Cexs4pbb.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DqGJg9Bh.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DzpD0Vg0.js";import"./useFocus-B-etxL-K.js";import"./useCollator-CMfRCWJM.js";import"./context-pcAEe7OC.js";import"./useLocalizedStringFormatter-157cI7o6.js";import"./Button-CV7XsWAw.js";import"./ProgressBar-BoBEJuQ0.js";import"./Label-BakLPZbA.js";import"./Hidden-Dc9Kv2au.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BeaeLWhg.js";import"./useFocusRing-7BAVz6YI.js";import"./useFocusable-CAY1QTdY.js";import"./VisuallyHidden-CByVy45C.js";import"./ContextMenuSection-BHRqy7hA.js";import"./Action-gSATwLl0.js";import"./context-BoMfRFQo.js";import"./useStatic-DDG80hCS.js";import"./browser-f0s2BEP-.js";import"./getActionGroupSlot-e-XHpWMr.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C9-zvFsT.js";import"./RSPContexts-Cd0V4yxa.js";import"./OverlayArrow-DnTwsWqb.js";import"./useControlledState-BXC3uZfW.js";import"./Collection-jwpUx6pV.js";import"./CollectionBuilder-CLrwyJlT.js";import"./Separator-CedZax0a.js";import"./Group-DyQYlV1N.js";import"./SearchField-Pbcm1Prj.js";import"./FieldError-DvcRcsU3.js";import"./Form-Cc9esAZh.js";import"./useTextField-661dC4d6.js";import"./useFormReset-BL-bWUrE.js";import"./TextField-BlHsJIwz.js";import"./useEvent-KXd4In2f.js";import"./SelectionManager-ClbqTV3I.js";import"./FocusScope-CkC1yDzC.js";import"./ColumnLayout-af-u3kka.js";import"./Avatar-nbXNFksQ.js";import"./AlertIcon-BDYnP1Ja.js";import"./Image-DpXjBdfs.js";import"./Link-CI5J91MC.js";import"./ButtonView-CVjF9T33.js";import"./ContextMenuContent-DWGhpNNr.js";import"./Popover-D6TQHQrt.js";import"./DialogTriggerView-CVy2Q8IW.js";import"./Switch-C7OeQYS8.js";import"./Label-B99siZxZ.js";import"./useToggleState-CsYHRDa6.js";import"./FieldError-Df2paDgt.js";import"./LoadingSpinner-D0_GuOvu.js";import"./Heading-YCD57lb1.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-D5nLjsiS.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
